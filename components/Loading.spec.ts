import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import Loading from "./Loading.vue";

describe("Component Loading.vue", () => {
  it("should on receive props size, set css style", async () => {
    const size = 10;
    const wrapper = mount(Loading);
    wrapper.setProps({
      size,
    });

    const loading = wrapper.find(".loading");
    await wrapper.vm.$nextTick();

    console.log(loading.attributes("style"));
    expect(loading.attributes("style")).contains(
      `width: ${size}px; height: ${size}px;`
    );
  });

  it("should on receive props centered, set css style", async () => {
    const wrapper = mount(Loading);
    const loading = wrapper.find(".loading");

    expect(loading.attributes("style")).contains(`margin: 0px;`);

    wrapper.setProps({
      centered: true,
    });

    await wrapper.vm.$nextTick();

    expect(loading.attributes("style")).contains(`margin: 0px auto;`);
  });
});
