import { motion } from "framer-motion";
import { Award, Leaf, ShieldCheck, Clock, HeartHandshake, Sparkles } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "12+ Years Experience",
    desc: "Over a decade transforming Northamptonshire gardens — from quick tidies to full landscape builds.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly, Personal Service",
    desc: "You'll deal directly with Grant — no call centres, no pushy sales. Just honest advice and great work.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    desc: "Crisp edges, clean lines, immaculate finishes. The little things make the biggest difference.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "Public liability cover and professional equipment as standard — total peace of mind on every visit.",
  },
  {
    icon: Clock,
    title: "Reliable & On Time",
    desc: "We turn up when we say we will. Tidy on arrival, tidier on departure — every single time.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Approach",
    desc: "Mindful disposal, peat-free options and seasonal know-how to keep your garden healthy long-term.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-24 gradient-dark text-white">
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[800px] rounded-full bg-primary/30 blur-3xl" />
      <div className="container-prose relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl leading-tight text-balance text-white">
            The difference is in the <span className="italic text-accent">details</span>
          </h2>
          <p className="mt-4 text-white/70">
            Six reasons why homeowners across Northamptonshire trust Loves Landscapes with their gardens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl bg-white/[0.04] backdrop-blur border border-white/10 p-7 hover:bg-white/[0.07] hover:border-accent/40 transition-all"
            >
              <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <span className="inline-grid place-items-center h-12 w-12 rounded-xl gradient-gold text-ink shadow-glow">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
