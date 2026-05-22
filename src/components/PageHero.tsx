import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  height?: "full" | "tall" | "short";
  showCtas?: boolean;
  align?: "center" | "left";
}

export function PageHero({ eyebrow, title, subtitle, image, height = "tall", showCtas = true, align = "center" }: Props) {
  const heightCls =
    height === "full" ? "min-h-[92svh]" : height === "tall" ? "min-h-[72svh]" : "min-h-[52svh]";

  return (
    <section className={cn("relative isolate flex items-end overflow-hidden", heightCls)}>
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 gradient-hero" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

      <div className={cn("container-prose pb-20 pt-32 md:pb-28 md:pt-40 text-white", align === "center" && "text-center")}>
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className={cn(
            "mt-5 font-display font-bold text-balance text-white",
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]",
            align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl",
          )}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={cn(
              "mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-balance",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {subtitle}
          </motion.p>
        )}
        {showCtas && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className={cn("mt-9 flex flex-wrap gap-3", align === "center" && "justify-center")}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-elegant hover:bg-accent/90 transition"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 transition"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
