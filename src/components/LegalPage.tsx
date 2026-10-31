import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <Link to="/" className="text-sm text-primary-glow hover:underline">← Back to TheNextGig.pk</Link>
      <h1 className="mt-6 text-3xl font-bold">{title}</h1>
      <div className="mt-6 space-y-4 text-muted-foreground">{children}</div>
    </main>
  );
}
