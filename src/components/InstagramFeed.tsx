import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { PROJECTS } from "@/lib/site";
import { SITE } from "@/lib/site";

// Visual social grid using local project after-images as a stylised "feed".
// Real Instagram embed requires their Graph API; this is a faithful, fast, on-brand placeholder.
export function InstagramFeed() {
  const tiles = PROJECTS.slice(0, 8).map((p) => p.after);
  return (
    <section className="container-prose my-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Instagram className="h-4 w-4" /> Follow our work
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-5xl">Latest from Instagram</h2>
          <p className="mt-3 text-muted-foreground max-w-xl">Day-to-day jobs, transformations and the satisfying finishes. Tap a post to see more on Instagram.</p>
        </div>
        <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition self-start md:self-end">
          @loveslandscapes.gardenservices
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {tiles.map((src, i) => (
          <motion.a
            key={src}
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            aria-label="View on Instagram"
          >
            <img src={src} alt="Recent landscaping work" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <Instagram className="absolute bottom-3 right-3 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
