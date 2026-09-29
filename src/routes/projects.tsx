import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/projects-page";
import { parseProjectSearch } from "@/lib/search";

export const Route = createFileRoute("/projects")({
  validateSearch: (search) => parseProjectSearch(search),
  head: () => ({ meta: [{ title: "New projects · HavenNest" }] }),
  component: ProjectsRoute,
});

function ProjectsRoute() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  return (
    <ProjectsPage
      search={search}
      onSearch={(next) => {
        void navigate({ to: "/projects", search: next });
      }}
    />
  );
}
