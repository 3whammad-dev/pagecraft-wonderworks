import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — TheNextGig.pk" },
      { name: "description", content: "How TheNextGig.pk collects and uses your information." },
      { property: "og:title", content: "Privacy Policy — TheNextGig.pk" },
      { property: "og:description", content: "How TheNextGig.pk collects and uses your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>We collect only the details you share with us (name, contact, requirement, and materials you send) to respond to your enquiry and deliver services.</p>
      <p>We never sell your data and never ask for your account passwords. Information is shared only when needed to deliver your service.</p>
      <p>You may ask us to delete your information at any time by emailing {site.email}.</p>
    </LegalPage>
  ),
});
