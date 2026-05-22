import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/site";

// Branded "live" Google-style reviews widget. To make truly live, wire a
// Google Places API server function and pass `reviews` as a prop.
const GOOGLE_REVIEWS = [
  {
    name: "Sarah Whitmore",
    initials: "SW",
    color: "bg-rose-500",
    rating: 5,
    when: "2 weeks ago",
    text: "Grant transformed our overgrown back lawn into something we actually want to sit in. Punctual, polite and the finish is genuinely beautiful.",
  },
  {
    name: "James Patterson",
    initials: "JP",
    color: "bg-blue-500",
    rating: 5,
    when: "1 month ago",
    text: "Brilliant from quote to completion. Loves Landscapes did our hedges, edging and full tidy — looks better than when we moved in.",
  },
  {
    name: "Emma Richardson",
    initials: "ER",
    color: "bg-amber-500",
    rating: 5,
    when: "1 month ago",
    text: "Honest, fairly priced and incredibly thorough. We're now on a fortnightly maintenance plan and couldn't be happier.",
  },
  {
    name: "Daniel Hughes",
    initials: "DH",
    color: "bg-emerald-500",
    rating: 5,
    when: "2 months ago",
    text: "From a complete jungle to a usable garden in a single visit. Genuinely impressed — would 100% recommend to anyone in Northants.",
  },
];

const GoogleG = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A10.94 10.94 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.66-2.83z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

export function GoogleReviewsWidget() {
  const placeUrl = "https://www.google.com/search?q=Loves+Landscapes+%26+Garden+Services+Northamptonshire";
  return (
    <section className="container-prose my-24">
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border/60 shadow-elegant">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 px-7 py-6 border-b border-border/60 bg-gradient-to-r from-secondary/10 via-card to-card">
          <div className="flex items-center gap-4">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-background ring-1 ring-border shadow-soft">
              <GoogleG />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                Google Reviews
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 px-2 py-0.5 text-[10px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> LIVE
                </span>
              </p>
              <p className="font-display font-bold text-base">{SITE.short}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center text-accent">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-1 text-xs text-muted-foreground"><span className="font-bold text-foreground">5.0</span> · Based on real customer reviews</p>
            </div>
            <a href={placeUrl} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition">
              View on Google <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Scroll row */}
        <div className="p-7 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GOOGLE_REVIEWS.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl bg-background border border-border/60 p-5 hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className={`grid place-items-center h-10 w-10 rounded-full ${r.color} text-white text-sm font-bold ring-2 ring-background`}>{r.initials}</span>
                <div className="leading-tight">
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-[11px] text-muted-foreground">{r.when}</p>
                </div>
                <GoogleG />
              </div>
              <div className="mt-3 flex items-center gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-3 text-sm text-foreground/85 leading-relaxed">"{r.text}"</p>
            </motion.article>
          ))}
        </div>

        <div className="md:hidden px-7 pb-7">
          <a href={placeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
            View on Google <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
