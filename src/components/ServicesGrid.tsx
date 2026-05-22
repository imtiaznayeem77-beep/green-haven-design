import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: i * 0.04 }}
        >
          <Link
            to="/services"
            hash={s.slug}
            className="group block relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute top-4 left-4 h-8 px-3 inline-flex items-center rounded-full bg-white/15 backdrop-blur ring-1 ring-white/25 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                0{i + 1}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-display text-xl leading-tight drop-shadow">{s.title}</h3>
                <p className="mt-1.5 text-[13px] text-white/85 leading-relaxed line-clamp-2">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
