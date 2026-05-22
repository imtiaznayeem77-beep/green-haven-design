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
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.08_0.02_155/0.55)_100%)]" />

      <div className={cn("container-prose pb-24 pt-32 md:pb-32 md:pt-44 text-white relative", align === "center" && "text-center")}>
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-white/8 backdrop-blur-md px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/95 ring-1 ring-white/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px] shadow-accent" /> {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05 }}
          className={cn(
            "mt-6 font-display font-light text-balance text-white tracking-[-0.035em]",
            "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.98]",
            align === "center" ? "mx-auto max-w-5xl" : "max-w-4xl",
          )}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={cn(
              "mt-7 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed text-balance font-light",
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
            transition={{ duration: 0.7, delay: 0.3 }}
            className={cn("mt-10 flex flex-wrap gap-3", align === "center" && "justify-center")}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-ink shadow-elegant hover:bg-accent/90 transition"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/8 backdrop-blur px-7 py-4 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15 transition"
            >
              <MessageCircle className="h-4 w-4" /> Message on WhatsApp
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
