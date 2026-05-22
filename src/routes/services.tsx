import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Garden Services | Landscaping, Lawn Care & More | Northamptonshire" },
      { name: "description", content: "Full range of professional garden services across Northamptonshire — landscaping, garden maintenance, lawn care, hedge cutting, grounds maintenance, strimming, weeding and more." },
      { property: "og:title", content: "Our Services — Loves Landscapes" },
      { property: "og:description", content: "Landscaping, lawn care, hedge cutting, grounds maintenance and garden transformations across Northamptonshire." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/hero/service-lawn.jpg" },
      { name: "twitter:image", content: "/hero/service-lawn.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const IMAGES: Record<string, string> = {
  landscaping: "/hero/service-landscaping.jpg",
  "garden-maintenance": "/projects/p1-after.jpg",
  "lawn-care": "/hero/service-lawn.jpg",
  "hedge-cutting": "/hero/service-hedge.jpg",
  "grounds-maintenance": "/hero/service-grounds.jpg",
  strimming: "/projects/p6-after.jpg",
  weeding: "/projects/p4-after.jpg",
  "border-edging": "/projects/p7-after.jpg",
  "garden-clearances": "/projects/p3-after.jpg",
  "garden-transformations": "/projects/p5-after.jpg",
};

const INCLUDES: Record<string, string[]> = {
  landscaping: ["Site assessment & plan", "Garden design", "Borders & planting", "Lawn install & restoration", "Stone, gravel & path work"],
  "garden-maintenance": ["Regular visits", "Grass cutting", "Weeding & edging", "Hedge trimming", "Seasonal tidy ups"],
  "lawn-care": ["Mowing & striping", "Edging & strimming", "Scarifying & aeration on request", "Feed & weed treatments", "Lawn restoration"],
  "hedge-cutting": ["Precision trimming", "Shaping & topiary", "All hedge heights", "Full clear up", "One-off or regular"],
  "grounds-maintenance": ["Large area management", "Property upkeep", "Tailored schedules", "Consistent quality", "Reliable team"],
  strimming: ["Edges & banks", "Overgrown areas", "Awkward access", "Tidy finish", "Full clear up"],
  weeding: ["Borders & beds", "Paths & patios", "Driveways", "Hand & treatment options", "Preventative care"],
  "border-edging": ["Crisp defined lines", "Reshape existing beds", "Mulch & finish", "Premium look", "Long-lasting result"],
  "garden-clearances": ["Overgrown gardens", "Full waste removal", "End of tenancy", "Ready for replant", "Quick turnaround"],
  "garden-transformations": ["Before-and-after focus", "Design input", "Full make-over", "Lawn & borders", "Premium finish"],
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Premium garden services, tailored to you."
        subtitle="From regular maintenance to full landscape transformations — one trusted local team for every job."
        image="/hero/service-grounds.jpg"
        height="short"
      />

      <section className="container-prose py-20">
        <div className="grid gap-12">
          {SERVICES.map((s, i) => (
            <motion.article
              id={s.slug}
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-28 grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="text-4xl">{s.icon}</span>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{s.description}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {INCLUDES[s.slug].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  <div className="absolute -inset-4 -z-10 rounded-3xl bg-secondary/15 blur-2xl" />
                  <img src={IMAGES[s.slug]} alt={s.title} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elegant" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBanner title="Need help with your garden?" subtitle="Tell us what you'd like done — we'll come back with a free, honest quote." />
    </>
  );
}
