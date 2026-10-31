import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Briefcase, Sparkles, FileText, Globe, Bot, MessageCircle, ArrowRight,
  Menu, X, CheckCircle2, Instagram, Mail, ListChecks, Send, ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, site, waLink, serviceMessage } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TheNextGig.pk — Freelance Profiles, CVs & AI Automation" },
      { name: "description", content: "Upwork & Fiverr optimization, CV & LinkedIn makeovers, remote job support and AI automation for small businesses in Pakistan." },
      { property: "og:title", content: "TheNextGig.pk — Your Next Opportunity Starts Here" },
      { property: "og:description", content: "Professional profile, CV and application support—plus practical AI automation for businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const icons = { Briefcase, Sparkles, FileText, Globe, Bot };
const nav = [
  ["Home", "#home"], ["Services", "#services"], ["How It Works", "#how"], ["FAQ", "#faq"], ["Contact", "#contact"],
] as const;

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-display text-lg font-bold">TheNext<span className="text-gradient">Gig</span>.pk</a>
        <nav className="hidden gap-6 md:flex" aria-label="Main">
          {nav.map(([l, h]) => <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>)}
        </nav>
        <Button asChild size="sm" className="hidden bg-gradient-primary md:inline-flex">
          <a href={waLink(serviceMessage())} target="_blank" rel="noopener">Get Started</a>
        </Button>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden" aria-label="Mobile">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 text-muted-foreground">{l}</a>)}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="bg-hero">
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-12 text-center md:pb-24 md:pt-24">
        <p className="mx-auto mb-5 inline-block rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">Career support · AI automation</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Your Next Opportunity <span className="text-gradient">Starts Here.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
          Professional profile, CV and application support—plus practical AI automation for businesses.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-gradient-primary shadow-glow transition-transform hover:-translate-y-0.5">
            <a href={waLink(serviceMessage())} target="_blank" rel="noopener"><MessageCircle /> Get Started</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <a href="#services">Explore Services <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const Icon = icons[s.icon];
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary-glow"><Icon className="h-5 w-5" aria-hidden /></div>
      <h3 className="text-lg font-semibold">{s.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
      <a href={waLink(serviceMessage(s.title))} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary-glow hover:underline">
        Request a Quote <ArrowRight className="h-4 w-4" />
      </a>
    </article>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold md:text-4xl">Services</h2>
      <p className="mt-2 text-muted-foreground">Focused help that makes you easier to hire—or your business easier to run.</p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.id} s={s} />)}
      </div>
      <p className="mt-6 text-xs text-muted-foreground">Custom pricing per project. For AI/automation work, ongoing API and hosting costs may apply.</p>
    </section>
  );
}

function Process() {
  const steps = [
    { i: ListChecks, t: "Choose a service" },
    { i: ClipboardList, t: "Share your details" },
    { i: Send, t: "Receive a tailored plan/quote" },
  ];
  return (
    <section id="how" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-3xl font-bold">How It Works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(({ i: I, t }, n) => (
            <li key={t} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-primary font-display font-bold">{n + 1}</span>
              <span className="font-medium">{t}</span>
              <I className="ml-auto h-5 w-5 text-primary-glow" aria-hidden />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const faqs = [
  ["How long does it take?", "Most profile, gig and CV projects take a few working days. Automation projects depend on scope—we confirm a timeline in your quote."],
  ["What do I need to provide?", "Your current profile/CV links, target roles or niche, work samples and any login-free details we need. For automation: your current process and tools."],
  ["Are revisions included?", "Yes, a reasonable round of revisions is included. The exact number is stated in your quote."],
  ["How does payment work?", "We share a clear quote first. Payment terms (e.g. advance + completion) are agreed before work starts."],
  ["Is my information private?", "Yes. Your details are used only to deliver your service and are never sold or shared. We never ask for your passwords."],
  ["Do you guarantee a job, clients or earnings?", "No. We improve how you present yourself, but outcomes depend on your profile, the market and employer/platform decisions."],
];

function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map(([q, a]) => (
          <AccordionItem key={q} value={q}>
            <AccordionTrigger className="text-left">{q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("company")) return; // honeypot
    const name = String(f.get("name") || "").trim();
    const contact = String(f.get("contact") || "").trim();
    const service = String(f.get("service") || "");
    const msg = String(f.get("message") || "").trim();
    const err: Record<string, string> = {};
    if (name.length < 2) err.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(contact) && !/^\+?[\d\s-]{10,15}$/.test(contact)) err.contact = "Enter a valid email or WhatsApp number.";
    if (!service) err.service = "Please choose a service.";
    if (msg.length < 10) err.message = "Please describe your requirement (10+ characters).";
    if (msg.length > 1000) err.message = "Please keep it under 1000 characters.";
    setErrors(err);
    if (Object.keys(err).length) return;
    const text = `Hi TheNextGig, I'm interested in "${service}".\nName: ${name}\nContact: ${contact}\nRequirement: ${msg}`;
    window.open(waLink(text), "_blank", "noopener");
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
      <div className="grid gap-10 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-10">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Let's get started</h2>
          <p className="mt-3 text-muted-foreground">Tell us what you need and we'll reply with a tailored plan and quote.</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={waLink(serviceMessage())} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-primary-glow"><MessageCircle className="h-4 w-4" /> Chat on WhatsApp</a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-primary-glow"><Mail className="h-4 w-4" /> {site.email}</a>
          </div>
        </div>
        {sent ? (
          <div className="flex flex-col items-center justify-center text-center" role="status">
            <CheckCircle2 className="h-12 w-12 text-primary-glow" />
            <h3 className="mt-4 text-xl font-semibold">Thanks! Your enquiry is ready.</h3>
            <p className="mt-2 text-sm text-muted-foreground">We've opened WhatsApp with your details—just tap send.</p>
            <Button variant="outline" className="mt-5 bg-transparent" onClick={() => setSent(false)}>Send another</Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
            <Field label="Name" error={errors["name"]}><Input id="name" name="name" maxLength={80} /></Field>
            <Field label="Email or WhatsApp" error={errors["contact"]}><Input id="contact" name="contact" maxLength={120} /></Field>
            <Field label="Service" error={errors["service"]}>
              <select id="service" name="service" defaultValue="" className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm">
                <option value="" disabled className="bg-card">Select a service</option>
                {services.map((s) => <option key={s.id} className="bg-card">{s.title}</option>)}
              </select>
            </Field>
            <Field label="Brief requirement" error={errors["message"]}><Textarea id="message" name="message" rows={4} maxLength={1000} /></Field>
            <Button type="submit" size="lg" className="w-full bg-gradient-primary">Send Enquiry</Button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: React.ReactNode }) {
  const id = label === "Name" ? "name" : label === "Service" ? "service" : label === "Brief requirement" ? "message" : "contact";
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="font-display text-base font-bold text-foreground">TheNextGig.pk</div>
          <div className="flex flex-wrap gap-5">
            <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
            <a href={waLink(serviceMessage())} target="_blank" rel="noopener" className="hover:text-foreground">WhatsApp</a>
            <a href={site.instagram} target="_blank" rel="noopener" className="inline-flex items-center gap-1 hover:text-foreground"><Instagram className="h-4 w-4" /> Instagram</a>
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
        <p className="text-xs">Disclaimer: Outcomes depend on the client's profile, market and employer/platform decisions. We do not guarantee any job, client, ranking or earnings.</p>
        <p className="text-xs">© {new Date().getFullYear()} TheNextGig.pk</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main><Hero /><Services /><Process /><FAQ /><ContactForm /></main>
      <Footer />
    </>
  );
}
