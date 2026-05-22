import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Calendar, Sparkles } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Get in Touch",
    desc: "Call, WhatsApp or fill in the quick form. Tell us about your garden and what you need.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "Free Quote & Plan",
    desc: "We visit, listen and put together a clear written quote — no pressure, no surprises.",
  },
  {
    n: "03",
    icon: Calendar,
    title: "Book a Slot",
    desc: "Pick a date that works for you. We'll confirm everything and arrive on time, ready to go.",
  },
  {
    n: "04",
    icon: Sparkles,
    title: "Garden You'll Love",
    desc: "We get to work and leave your garden looking immaculate — tidied, transformed and cared for.",
  },
];

export function ProcessSection() {
  return (
    <section className="container-prose py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">How It Works</span>
        <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight text-balance">
          A simple, stress-free <span className="italic text-primary">process</span>
        </h2>
        <p className="mt-4 text-muted-foreground">From first message to finished garden — here's how easy it is.</p>
      </div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        {STEPS.map(({ n, icon: Icon, title, desc }, i) => (
          <motion.div
            key={n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-14 w-14 rounded-2xl gradient-leaf text-white shadow-glow">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-4xl font-bold text-primary/15">{n}</span>
            </div>
            <h3 className="mt-5 font-display text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
