import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/simple-pages";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy · HavenNest" }] }),
  component: PrivacyPage,
});
