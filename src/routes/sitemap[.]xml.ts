import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/landscaping", priority: "0.9", changefreq: "monthly" as const },
  { path: "/garden-maintenance", priority: "0.9", changefreq: "monthly" as const },
  { path: "/grounds-maintenance", priority: "0.8", changefreq: "monthly" as const },
  { path: "/gallery", priority: "0.7", changefreq: "weekly" as const },
  { path: "/reviews", priority: "0.7", changefreq: "weekly" as const },
  { path: "/contact", priority: "0.8", changefreq: "monthly" as const },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (r) =>
            `  <url><loc>${BASE_URL}${r.path}</loc><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
