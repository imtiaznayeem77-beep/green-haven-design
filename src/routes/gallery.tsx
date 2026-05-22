import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { BeforeAfter } from "@/components/BeforeAfter";
import { PROJECTS } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Garden Transformations Northamptonshire | Loves Landscapes" },
      { name: "description", content: "Browse our gallery of garden transformations, lawn restorations and landscaping projects across Northamptonshire." },
      { property: "og:title", content: "Gallery — Loves Landscapes" },
      { property: "og:description", content: "Real before & after garden transformations from across Northamptonshire." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/projects/p5-after.jpg" },
      { name: "twitter:image", content: "/projects/p5-after.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const ALL_IMAGES = PROJECTS.flatMap((p) => [
  { src: p.after, alt: `After — ${p.caption}` },
  { src: p.before, alt: `Before — ${p.caption}` },
]);

function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [tab, setTab] = useState<"all" | "before-after">("before-after");

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real gardens. Real results."
        subtitle="Every project below was finished by our team across Northamptonshire."
        image="/projects/p5-after.jpg"
        height="short"
      />

      <section className="container-prose py-16">
        <div className="flex justify-center gap-2 mb-10">
          {(["before-after", "all"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${tab === t ? "bg-primary text-primary-foreground shadow-soft" : "bg-card border border-border text-foreground hover:bg-muted"}`}
            >
              {t === "before-after" ? "Before & After" : "All Photos"}
            </button>
          ))}
        </div>

        {tab === "before-after" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((p) => <BeforeAfter key={p.id} {...p} caption={p.caption} />)}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
            {ALL_IMAGES.map((img, i) => (
              <motion.button
                key={img.src + i}
                onClick={() => setLightbox(img.src)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 8) * 0.03 }}
                className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-muted shadow-soft hover:shadow-elegant transition group"
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto group-hover:scale-105 transition-transform duration-500" />
              </motion.button>
            ))}
          </div>
        )}
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm grid place-items-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white hover:bg-white/25"><X /></button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[95vw] rounded-2xl shadow-elegant" />
        </div>
      )}

      <CtaBanner />
    </>
  );
}
