import { createFileRoute } from "@tanstack/react-router";
import { CareersPage } from "@/components/simple-pages";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers · HavenNest" }] }),
  component: CareersPage,
});
