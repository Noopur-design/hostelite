import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ListingPage } from "@/components/listing-page";
import { commercialSearch, parseBuySearch } from "@/lib/search";

export const Route = createFileRoute("/commercial")({
  validateSearch: (search) => parseBuySearch(search, commercialSearch()),
  head: () => ({ meta: [{ title: "Commercial spaces · HavenNest" }] }),
  component: CommercialPage,
});

function CommercialPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  return (
    <ListingPage
      intent="commercial"
      search={search}
      onSearch={(next) => {
        void navigate({ to: "/commercial", search: next });
      }}
    />
  );
}
