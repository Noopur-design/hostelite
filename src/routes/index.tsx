import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "HavenNest — Find a place worth coming home to." }] }),
  component: HomePage,
});
