import { describe, it, expect, vi } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Field from "./index.vue";
import { useSearch } from "@/store/search";

const pinia = createTestingPinia();
const useSearchStore = useSearch(pinia);

const renderField = () => {
  return mount(Field, {
    global: {
      plugins: [pinia],
    },
  });
};

describe("Main application search field", () => {
  describe("Button search", () => {
    it("should render icon search on render component and loading spin if prop loading was true", async () => {
      const wrapper = renderField();
      expect(wrapper.find(".icon-send").exists()).toBeTruthy();

      await wrapper.setProps({ loading: true });
      expect(wrapper.find(".icon-send").exists()).toBeFalsy();
      expect(wrapper.find(".loading").exists()).toBeTruthy();
    });
  });

  describe("Button close", () => {
    it("should button clear field be on the screen", () => {
      const wrapper = renderField();
      expect(wrapper.find(".btn-clear").exists()).toBeTruthy();
    });

    it("should on press button call function to clear field", async () => {
      const wrapper = renderField();
      // @ts-ignore
      const clearField = vi.spyOn(wrapper.vm, "clearField");
      await wrapper.find(".btn-clear").trigger("click");
      expect(clearField).toHaveBeenCalledTimes(1);
      expect(useSearchStore.setQuery).toHaveBeenCalled();
    });
  });

  describe("Main Field", () => {
    it("should main field be on the screen", () => {
      const wrapper = renderField();
      expect(wrapper.find(".field").exists()).toBeTruthy();
    });

    it("should on type something on main field call the update function", async () => {
      const keyPressed = "a";
      const wrapper = renderField();

      // @ts-ignore
      const handleInput = vi.spyOn(wrapper.vm, "handleInput");
      const field = wrapper.find(".field");

      await field.setValue(keyPressed);
      await field.trigger("keyup");

      await wrapper.vm.$nextTick();

      expect(handleInput).toHaveBeenCalled();
      expect(useSearchStore.setQuery).toHaveBeenCalled();
    });
  });
});
