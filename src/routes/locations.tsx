import { createFileRoute } from "@tanstack/react-router";
import { LocationsPage } from "@/components/simple-pages";

export const Route = createFileRoute("/locations")({
  head: () => ({ meta: [{ title: "Locations · HavenNest" }] }),
  component: LocationsPage,
});
