import { createFileRoute, Link } from "@tanstack/react-router";
import { DetailPage } from "@/components/detail-page";
import { resolveListing } from "@/data/catalog";

export const Route = createFileRoute("/property/$slug")({
  head: () => ({ meta: [{ title: "Property · HavenNest" }] }),
  component: PropertyRoute,
});

function PropertyRoute() {
  const { slug } = Route.useParams();
  const listing = resolveListing(slug);
  if (!listing) {
    return (
      <main className="mx-auto max-w-xl px-4 py-24 text-center">
        <h1 className="text-4xl">We could not find that home.</h1>
        <p className="mt-3 text-sm text-muted">It may have left the catalogue.</p>
        <Link to="/" className="tap mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm text-card">
          Back home
        </Link>
      </main>
    );
  }
  return <DetailPage listing={listing} />;
}
