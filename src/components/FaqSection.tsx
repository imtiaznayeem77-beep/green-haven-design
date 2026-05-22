import { motion } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  variant?: "light" | "green";
}

export function FaqSection({
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know before booking your garden visit.",
  items,
  variant = "light",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);
  const isGreen = variant === "green";

  return (
    <section
      className={cn(
        "py-24",
        isGreen
          ? "gradient-leaf-soft text-foreground"
          : "bg-card border-y border-border/60",
      )}
    >
      <div className="container-prose grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <HelpCircle className="h-4 w-4" /> {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-balance">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">{subtitle}</p>
          <div className="mt-8 rounded-2xl bg-background/70 border border-border/60 p-6 shadow-soft backdrop-blur">
            <p className="text-sm font-semibold">Still have a question?</p>
            <p className="mt-1 text-sm text-muted-foreground">Get a friendly reply — usually within the hour.</p>
            <a href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Ask us anything
            </a>
          </div>
        </div>

        <ul className="space-y-3">
          {items.map((it, i) => {
            const active = open === i;
            return (
              <motion.li
                key={it.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={cn(
                  "rounded-2xl border bg-background/95 shadow-soft transition-all overflow-hidden",
                  active ? "border-primary/40 shadow-elegant" : "border-border/60 hover:border-primary/30",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                  aria-expanded={active}
                >
                  <span className="font-display font-semibold text-base md:text-lg">{it.q}</span>
                  <span
                    className={cn(
                      "grid place-items-center h-9 w-9 rounded-full shrink-0 transition-transform",
                      active ? "bg-primary text-primary-foreground rotate-45" : "bg-primary/10 text-primary",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out px-6",
                    active ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
