import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ListingPage } from "@/components/listing-page";
import { buySearch, parseBuySearch } from "@/lib/search";

export const Route = createFileRoute("/buy")({
  validateSearch: (search) => parseBuySearch(search, buySearch()),
  head: () => ({ meta: [{ title: "Apartments for sale · HavenNest" }] }),
  component: BuyPage,
});

function BuyPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  return (
    <ListingPage
      intent="buy"
      search={search}
      onSearch={(next) => {
        void navigate({ to: "/buy", search: next });
      }}
    />
  );
}
