import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { RentPage } from "@/components/rent-page";
import { parseBuySearch, rentSearch } from "@/lib/search";

export const Route = createFileRoute("/rent")({
  validateSearch: (search) => parseBuySearch(search, rentSearch()),
  head: () => ({ meta: [{ title: "Homes for rent · HavenNest" }] }),
  component: RentRoute,
});

function RentRoute() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  return (
    <RentPage
      search={search}
      onSearch={(next) => {
        void navigate({ to: "/rent", search: next });
      }}
    />
  );
}
