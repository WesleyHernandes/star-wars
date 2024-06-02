import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import { character } from "@/mock/character";

import Card from "@/components/Search/Card.vue";
import { usePeople } from "@/store/people";
import { createTestingPinia } from "@pinia/testing";
import { formatToUrl } from "@/utils";

const pinia = createTestingPinia();
const usePeopleStore = usePeople(pinia);

const pushRouter = vi.fn();
vi.mock("vue-router", () => ({
  useRouter: () => ({
    push: pushRouter,
  }),
}));

const renderCard = () => {
  return mount(Card, {
    plugins: [pinia],
    props: {
      people: character,
    },
  });
};

describe("Card from search results", () => {
  it("Must display character data on screen", () => {
    const wrapper = renderCard();
    expect(wrapper.html()).contains(character.name);
    expect(wrapper.html()).contains(character.height);
    expect(wrapper.html()).contains(character.mass);
  });

  it("should click on card and redirect to character page", async () => {
    const wrapper = renderCard();

    // @ts-ignore
    const handlePeople = vi.spyOn(wrapper.vm, "handlePeople");
    await wrapper.find(".card-container").trigger("click");

    expect(handlePeople).toHaveBeenCalled();
    expect(usePeopleStore.setPeople).toHaveBeenCalledWith(character);
    expect(pushRouter).toHaveBeenCalledWith(
      `/personagem/${formatToUrl(character.name)}`
    );
  });
});
