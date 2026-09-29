import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/simple-pages";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms · HavenNest" }] }),
  component: TermsPage,
});
