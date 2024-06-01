import { describe, it, expect, vi } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { createTestingPinia } from "@pinia/testing";
import { character } from "@/mock/character";
import Search from "./index.vue";
import { useSearch } from "@/store/search";

const pinia = createTestingPinia();
const useSearchStore = useSearch(pinia);

const renderSearch = async () => {
  return mount(
    defineComponent({
      components: { Search },
      template: "<Suspense><Search/></Suspense>",
    }),
    {
      global: {
        plugins: [pinia],
      },
    }
  );
};

const setLazyFetch = (options: any) => {
  return vi.stubGlobal("useLazyFetch", () => {
    return new Promise((resolve) => {
      resolve(options);
    });
  });
};

describe("Search main container", () => {
  beforeEach(() => {
    setLazyFetch({
      data: { value: { results: [] } },
      pending: false,
      error: {},
    });
  });

  describe("Component texts", () => {
    it("should title be on the screen", async () => {
      const wrapper = await renderSearch();
      await flushPromises();
      expect(wrapper.find(".title").exists()).toBeTruthy();
    });

    it("should subtitle be on the screen", async () => {
      const wrapper = await renderSearch();
      await flushPromises();
      expect(wrapper.find(".subtitle").exists()).toBeTruthy();
    });
  });

  describe("Status request pending", () => {
    it("alert should not be on the screen", async () => {
      setLazyFetch({
        data: { value: { results: [] } },
        pending: true,
        error: {},
      });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);
      expect(wrapper.vm.pending).toBeTruthy();
      expect(wrapper.find(".alert").exists()).toBeFalsy();
    });

    it("results should not be on the screen", async () => {
      setLazyFetch({
        data: { value: { results: [] } },
        pending: true,
        error: {},
      });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);
      expect(wrapper.vm.pending).toBeTruthy();
      expect(wrapper.find(".results").exists()).toBeFalsy();
    });

    it("not found should not be on the screen", async () => {
      setLazyFetch({
        data: { value: { results: [] } },
        pending: true,
        error: {},
      });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);
      expect(wrapper.vm.pending).toBeTruthy();
      expect(wrapper.find(".not-found").exists()).toBeFalsy();
    });
  });

  describe("Query search", () => {
    it("alert should not display if there is no search term", async () => {
      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      expect(wrapper.vm.query.length).toBe(0);
      expect(wrapper.find(".alert").exists()).toBeFalsy();
    });

    it("not found should not display if there is no search term", async () => {
      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      expect(wrapper.vm.query.length).toBe(0);
      expect(wrapper.find(".not-found").exists()).toBeFalsy();
    });
  });

  describe("Results for request", () => {
    it("results should not be on the screen if not found response", async () => {
      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      const {
        data: {
          value: { results },
        },
      } = wrapper.vm;

      expect(results.length).toBe(0);
      expect(wrapper.find(".results").exists()).toBeFalsy();
    });

    it("results should be on the screen if found response", async () => {
      setLazyFetch({
        data: { value: { results: [{ ...character }] } },
        pending: false,
        error: {},
      });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      expect(wrapper.vm.results.length).toBeGreaterThan(0);
      expect(wrapper.find(".results").exists()).toBeTruthy();
    });
  });

  describe("Alert message", () => {
    it("must be on the screen, if an error occurs, have a search term, query endpoint and not be loading a request", async () => {
      const msg = "Fail message testing";

      setLazyFetch({
        data: { value: { results: [] } },
        pending: false,
        error: { message: msg },
      });

      useSearchStore.$patch({ query: "testing" });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      const {
        error: { message },
      } = wrapper.vm;

      expect(message).toMatch(msg);
      expect(wrapper.vm.query.length).toBeGreaterThan(0);
      expect(wrapper.vm.endpoint.length).toBeGreaterThan(0);
      expect(wrapper.vm.pending).toBeFalsy();
      expect(wrapper.find(".alert").exists()).toBeTruthy();
    });
  });

  describe("Not found component", async () => {
    it("must be on the screen, dont found results, have a search term and not be loading a request", async () => {
      setLazyFetch({
        data: { value: { results: [] } },
        pending: false,
        error: {},
      });

      useSearchStore.$patch({ query: "testing" });

      const suspenseWrapper = await renderSearch();
      await flushPromises();

      const wrapper = suspenseWrapper.findComponent(Search);

      expect(wrapper.vm.results.length).toBe(0);
      expect(wrapper.vm.query.length).toBeGreaterThan(0);
      expect(wrapper.vm.pending).toBeFalsy();
      expect(wrapper.find(".not-found").exists()).toBeTruthy();
    });
  });
});
