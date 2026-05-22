import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-transparent",
      )}
    >
      <div className="container-prose flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/logo/logo.jpg"
            alt="Loves Landscapes & Garden Services logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition"
          />
          <div className="hidden sm:block leading-tight">
            <div
              className={cn(
                "font-display font-bold text-base transition-colors",
                scrolled || open ? "text-foreground" : "text-white drop-shadow",
              )}
            >
              Loves Landscapes
            </div>
            <div
              className={cn(
                "text-[11px] tracking-wide uppercase transition-colors",
                scrolled || open ? "text-muted-foreground" : "text-white/80",
              )}
            >
              & Garden Services
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-full transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              )}
              activeProps={{
                className: cn(
                  "px-3 py-2 text-sm font-semibold rounded-full",
                  scrolled
                    ? "text-primary bg-primary/10"
                    : "text-white bg-white/15",
                ),
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className={cn(
              "hidden xl:inline-flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-foreground" : "text-white",
            )}
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition-all hover:scale-[1.03]"
          >
            Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className={cn(
            "lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition",
            scrolled || open
              ? "bg-primary/10 text-primary"
              : "bg-white/15 text-white backdrop-blur",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container-prose flex flex-col py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="px-2 py-3 text-base font-medium text-foreground/90 hover:text-primary border-b border-border/40 last:border-none"
                activeProps={{ className: "px-2 py-3 text-base font-semibold text-primary border-b border-border/40 last:border-none" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
