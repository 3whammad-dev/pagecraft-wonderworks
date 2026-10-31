import { describe, it, expect } from "vitest";
import { serviceMessage, waLink } from "@/lib/site";

describe("WhatsApp links", () => {
  it("names the selected service in the prefilled message", () => {
    const url = waLink(serviceMessage("Fiverr Gig Optimization"));
    expect(decodeURIComponent(url)).toContain("Fiverr Gig Optimization");
    expect(url.startsWith("https://wa.me/")).toBe(true);
  });
});
