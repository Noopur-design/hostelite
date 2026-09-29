import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
  component: MissingPage,
});

function MissingPage() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl">This page is not on the map.</h1>
      <p className="mt-3 text-sm text-muted">The address may be out of date.</p>
      <Link to="/" className="tap mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm text-card">
        Back to HavenNest
      </Link>
    </main>
  );
}
