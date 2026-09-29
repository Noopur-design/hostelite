import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/simple-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact · HavenNest" }] }),
  component: ContactPage,
});
