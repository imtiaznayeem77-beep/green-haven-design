import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white shadow-elegant wa-pulse hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
