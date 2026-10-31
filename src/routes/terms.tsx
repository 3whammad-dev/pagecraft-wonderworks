import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — TheNextGig.pk" },
      { name: "description", content: "Terms for using TheNextGig.pk services." },
      { property: "og:title", content: "Terms of Service — TheNextGig.pk" },
      { property: "og:description", content: "Terms for using TheNextGig.pk services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Service">
      <p>Scope, price, timeline and revisions are agreed in writing before work begins. Custom pricing applies; automation projects may carry ongoing API/hosting costs.</p>
      <p>Outcomes depend on your profile, the market and employer/platform decisions. We do not guarantee any job, interview, client, ranking or earnings.</p>
      <p>You are responsible for the accuracy of information you provide and for following each platform's rules.</p>
    </LegalPage>
  ),
});
