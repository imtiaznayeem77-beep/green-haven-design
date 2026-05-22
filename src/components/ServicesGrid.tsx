import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/lib/site";
import { ArrowRight } from "lucide-react";

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
          transition={{ duration: 0.5, delay: i * 0.04 }}
          className="group relative rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1"
        >
          <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          <div className="text-4xl">{s.icon}</div>
          <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          <Link to="/services" hash={s.slug} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
