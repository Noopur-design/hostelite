import { createFileRoute } from "@tanstack/react-router";
import { SitemapPage } from "@/components/simple-pages";

export const Route = createFileRoute("/sitemap")({
  head: () => ({ meta: [{ title: "Sitemap · HavenNest" }] }),
  component: SitemapPage,
});
