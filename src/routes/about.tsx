import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/simple-pages";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · HavenNest" }] }),
  component: AboutPage,
});
