// Edit contact details and services here — the whole site reads from this file.
export const site = {
  name: "TheNextGig.pk",
  whatsapp: "923000000000", // international format, no + or spaces (PLACEHOLDER)
  email: "hello@thenextgig.pk", // PLACEHOLDER
  instagram: "https://instagram.com/thenextgig.pk", // PLACEHOLDER
};

export const services = [
  {
    id: "upwork",
    title: "Upwork Profile Optimization",
    desc: "Headline, overview, skills, portfolio and a full profile audit.",
    icon: "Briefcase",
  },
  {
    id: "fiverr",
    title: "Fiverr Gig Optimization",
    desc: "Gig title, description, keywords, packages, FAQ and thumbnail guidance.",
    icon: "Sparkles",
  },
  {
    id: "cv",
    title: "CV & LinkedIn Makeover",
    desc: "ATS-conscious CV structure, tailored content and LinkedIn improvements.",
    icon: "FileText",
  },
  {
    id: "remote",
    title: "Remote Job Application Support",
    desc: "Role targeting, application materials, tracking and interview prep.",
    icon: "Globe",
  },
  {
    id: "ai",
    title: "AI Chatbots & Business Automation",
    desc: "Website FAQ bot, lead capture, enquiry routing and workflow automation.",
    icon: "Bot",
  },
] as const;

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function serviceMessage(service?: string) {
  return service
    ? `Hi TheNextGig, I'm interested in "${service}". Could you share details and a quote?`
    : "Hi TheNextGig, I'd like to get started. Could you tell me more about your services?";
}
