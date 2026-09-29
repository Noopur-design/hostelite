import { createFileRoute } from "@tanstack/react-router";
import { InsightsPage } from "@/components/simple-pages";

export const Route = createFileRoute("/insights")({
  head: () => ({ meta: [{ title: "Insights · HavenNest" }] }),
  component: InsightsPage,
});
