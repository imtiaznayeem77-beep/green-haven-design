import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Sparkles, Clock, Star, Award, MapPin, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ReviewsList } from "@/components/ReviewsList";
import { CtaBanner } from "@/components/CtaBanner";
import { InstagramFeed } from "@/components/InstagramFeed";
import { PROJECTS, SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Loves Landscapes & Garden Services | Landscaping & Garden Care Northamptonshire" },
      { name: "description", content: "Premium landscaping, lawn care, hedge cutting, grounds maintenance & garden transformations across Northamptonshire. 12 years experience. Free quotes." },
      { property: "og:title", content: "Loves Landscapes & Garden Services — Northamptonshire" },
      { property: "og:description", content: "Where your garden gets the Love it deserves. Professional landscaping & garden services across Northamptonshire." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/hero/hero-main.jpg" },
      { name: "twitter:image", content: "/hero/hero-main.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRUST = [
  { icon: Award, label: "12 Years Experience" },
  { icon: MapPin, label: "Local Northamptonshire" },
  { icon: Sparkles, label: "Garden Transformations" },
  { icon: Leaf, label: "Grounds Maintenance" },
  { icon: ShieldCheck, label: "Reliable & Professional" },
  { icon: Clock, label: "Free Quotes" },
];

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Northamptonshire's Garden Specialists"
        title="Professional Landscaping & Garden Services Across Northamptonshire"
        subtitle="Trusted local specialists with 12 years of experience in landscaping, lawn care, grounds maintenance, hedge cutting and garden transformations."
        image="/hero/hero-main.jpg"
        height="full"
      />

      {/* Trust strip */}
      <section className="bg-card border-y border-border/60">
        <div className="container-prose py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full gradient-leaf text-white shrink-0">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About teaser */}
      <section className="container-prose py-24 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About Us</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight text-balance">
            Where your garden gets the <span className="italic text-primary">Love</span> it deserves.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We're a local Northamptonshire team that's been transforming gardens for over a decade. From a one-off tidy up to a complete landscape transformation, we treat every garden with the same care and attention to detail.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Friendly local service", "Attention to detail", "Reliable & on time", "Premium finish"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-accent" /> {t}
              </li>
            ))}
          </ul>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
            More about us <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-secondary/20 blur-2xl" />
          <div className="grid grid-cols-2 gap-3">
            <img src="/hero/service-lawn.jpg" alt="Manicured striped lawn" loading="lazy" className="aspect-[3/4] rounded-2xl object-cover shadow-elegant" />
            <img src="/hero/service-landscaping.jpg" alt="Premium landscaping" loading="lazy" className="aspect-[3/4] rounded-2xl object-cover shadow-elegant translate-y-8" />
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="container-prose py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Services</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Everything your garden needs</h2>
          <p className="mt-4 text-muted-foreground">From a quick tidy up to a full transformation — we cover it all.</p>
        </div>
        <ServicesGrid />
      </section>

      {/* Before & After */}
      <section className="bg-card border-y border-border/60 py-24 mt-24">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Real Transformations</span>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Before & After</h2>
            <p className="mt-4 text-muted-foreground">Drag the slider to see the difference our team makes. Real gardens, real results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 6).map((p) => (
              <BeforeAfter key={p.id} before={p.before} after={p.after} caption={p.caption} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              See full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container-prose py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-accent mb-3">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-5 w-5 fill-current" />)}
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">Loved by gardens across Northamptonshire</h2>
          <p className="mt-4 text-muted-foreground">Real reviews from real customers on Facebook.</p>
        </div>
        <ReviewsList />
      </section>

      <InstagramFeed />

      <CtaBanner />

      <noscript>
        <p className="sr-only">{SITE.name} — call {SITE.phone}</p>
      </noscript>
    </>
  );
}
