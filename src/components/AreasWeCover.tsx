import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AREAS = [
  "Northampton", "Wellingborough", "Kettering", "Daventry",
  "Towcester", "Brackley", "Rushden", "Corby",
  "Oundle", "Higham Ferrers", "Raunds", "Desborough",
  "Burton Latimer", "Earls Barton", "Long Buckby", "Roade",
];

export function AreasWeCover() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPin className="h-4 w-4" /> Service Area
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight text-balance">
            Proudly serving <span className="italic text-primary">Northamptonshire</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From cosy cottages to country estates — if it's in Northants, we're there.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {AREAS.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group flex items-center gap-3 rounded-xl bg-card/90 backdrop-blur border border-border/60 px-4 py-3.5 hover:border-primary/40 hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <span className="grid place-items-center h-9 w-9 rounded-lg gradient-leaf text-white shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="font-medium text-sm">{area}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Not listed? <a href="/contact" className="text-primary font-semibold hover:underline">Get in touch</a> — we likely cover you too.
        </p>
      </div>
    </section>
  );
}
