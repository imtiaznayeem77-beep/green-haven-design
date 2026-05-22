import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function CtaBanner({
  title = "Ready for a garden you'll love?",
  subtitle = "Get a free, no-obligation quote. Friendly local service across Northamptonshire.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="container-prose my-24">
      <div className="relative overflow-hidden rounded-3xl gradient-leaf p-8 md:p-14 text-white shadow-elegant">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl float-slow" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl float-slow" />
        <div className="relative grid md:grid-cols-[1.4fr_auto] items-center gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance">{title}</h2>
            <p className="mt-4 text-white/85 max-w-xl">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink hover:bg-accent/90 transition">
              Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/25 transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
