import { motion } from "framer-motion";

const STATS = [
  { value: "500+", label: "Gardens transformed" },
  { value: "12", label: "Years experience" },
  { value: "5.0★", label: "Customer rating" },
  { value: "100%", label: "Fully insured" },
];

export function StatsBar() {
  return (
    <section className="relative -mt-12 z-10">
      <div className="container-prose">
        <div className="rounded-3xl bg-card/95 backdrop-blur border border-border/60 shadow-elegant p-2">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="px-6 py-6 text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
