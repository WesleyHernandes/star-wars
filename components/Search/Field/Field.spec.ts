import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Field from "./index.vue";

describe("Main application search field", () => {
  it("should main field be on the screen", () => {
    const wrapper = mount(Field, {
      global: {
        plugins: [createTestingPinia({ stubActions: false })],
      },
    });
    expect(wrapper.find(".field").exists()).toBeTruthy();
  });
});
