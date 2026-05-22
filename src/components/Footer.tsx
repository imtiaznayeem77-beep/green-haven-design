import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative gradient-dark text-white/85 mt-24">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="container-prose pt-16 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo/logo.jpg" alt={SITE.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-accent/40" />
            <div>
              <div className="font-display font-bold text-white">Loves Landscapes</div>
              <div className="text-xs uppercase tracking-wider text-white/60">& Garden Services</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {SITE.tagline} Professional landscaping and garden services across {SITE.area}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-ink transition"><Facebook className="h-4 w-4" /></a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-ink transition"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid place-items-center h-10 w-10 rounded-full bg-white/10 hover:bg-accent hover:text-ink transition"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-display text-sm uppercase tracking-widest mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm uppercase tracking-widest mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}><Link to="/services" hash={s.slug} className="hover:text-accent transition">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display text-sm uppercase tracking-widest mb-5">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href={SITE.phoneHref} className="hover:text-accent">{SITE.phone}</a></li>
            <li className="flex items-start gap-3"><MessageCircle className="h-4 w-4 mt-0.5 text-accent" /><a href={SITE.whatsappHref} className="hover:text-accent">WhatsApp Us</a></li>
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href={SITE.emailHref} className="hover:text-accent break-all">{SITE.email}</a></li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-accent" /><span>{SITE.area}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Website Design and Developed by{" "}
            <a href="https://imtiaznayeem.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">Imtiaz Nayeem</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
