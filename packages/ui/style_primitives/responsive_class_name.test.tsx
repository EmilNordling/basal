import { describe, expect, test } from "vitest";
import { getResponsiveClassName } from "./responsive_class_name.js";

describe("responsiveClassName", () => {
  test("should handle string input", () => {
    expect(getResponsiveClassName("4", "p-")).toBe("p-4");
    expect(getResponsiveClassName("large", "text-")).toBe("text-large");
  });

  test("should handle object with initial property only", () => {
    expect(getResponsiveClassName({ initial: "4" }, "p-")).toBe("p-4");
  });

  test("should handle object with multiple breakpoints", () => {
    const size = {
      initial: "2",
      sm: "4",
      md: "6",
      lg: "8",
      xl: "10",
      "2xl": "12",
    };

    const expected = "p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 /2xl:p-12";
    expect(getResponsiveClassName(size, "p-")).toBe(expected);
  });

  test("should handle object with partial breakpoints", () => {
    const size = {
      initial: "2",
      md: "6",
      xl: "10",
    };

    const expected = "p-2 md:p-6 xl:p-10";
    expect(getResponsiveClassName(size, "p-")).toBe(expected);
  });
});
