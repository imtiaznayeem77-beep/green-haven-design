import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SITE } from "@/lib/site";
import { Facebook } from "lucide-react";

const REVIEWS = [
  { name: "Sarah W.", rating: 5, date: "2 weeks ago", text: "Grant transformed our overgrown lawn — turned up on time, friendly, and the finish is incredible. We've booked him in for regular maintenance now." },
  { name: "James P.", rating: 5, date: "1 month ago", text: "Hedges were getting out of hand and Loves Landscapes had them looking sharp in no time. Tidy, professional and great value. Highly recommend." },
  { name: "Emma R.", rating: 5, date: "1 month ago", text: "Brilliant from start to finish. Clear quote, top quality work, and our garden has never looked better. Lovely chap too." },
  { name: "Daniel H.", rating: 5, date: "2 months ago", text: "Booked for a one-off tidy and ended up signing up for fortnightly visits. Reliable, thorough and you can tell he takes pride in his work." },
  { name: "Olivia B.", rating: 5, date: "2 months ago", text: "Stunning before-and-after on our front garden. Friendly service, fair pricing, and a really clean finish. Will absolutely use again." },
  { name: "Mark T.", rating: 5, date: "3 months ago", text: "Top notch local landscaper. Strimmed, edged, mowed and cleared — left the garden immaculate. Genuinely nice to deal with too." },
];

export function ReviewsList() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {REVIEWS.map((r, i) => (
        <motion.article
          key={r.name + i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="rounded-2xl bg-card border border-border/60 p-7 shadow-soft hover:shadow-elegant transition"
        >
          <div className="flex items-center gap-2">
            <Facebook className="h-4 w-4 text-[#1877F2]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Facebook Review</span>
          </div>
          <div className="mt-3 flex items-center gap-1 text-accent">
            {Array.from({ length: r.rating }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="font-semibold">{r.name}</span>
            <span className="text-muted-foreground">{r.date}</span>
          </div>
        </motion.article>
      ))}
      <div className="md:col-span-2 lg:col-span-3 text-center mt-2">
        <a href={SITE.facebookReviews} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition">
          <Facebook className="h-4 w-4" /> Read More Reviews on Facebook
        </a>
      </div>
    </div>
  );
}
