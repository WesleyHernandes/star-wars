import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import NotFound from "./NotFound.vue";

describe("Not found component", () => {
  it("The query that was not found should appear on the screen", () => {
    const query = "Skywalker";

    const wrapper = mount(NotFound, {
      props: {
        query,
      },
    });

    expect(wrapper.html()).contains(query);
  });
});
