import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ListingRow, ProjectCard } from "@/components/cards";
import { Pagination, Reveal, SelectField } from "@/components/chrome";
import { SearchBar, type SearchTab } from "@/components/search-bar";
import { useApp } from "@/components/app-state";
import {
  BUY_SORTS,
  filterHomes,
  filterProjects,
  localitiesFor,
  paginate,
  resolveCity,
  type Intent,
} from "@/data/catalog";
import { projectSearch, type BuySearch } from "@/lib/search";

const TAB: Record<Intent, SearchTab> = { buy: "Buy", rent: "Rent", commercial: "Commercial" };

function titleFor(intent: Intent, type: string, place: string) {
  const city = resolveCity(place);
  const where = city ? `in ${city}` : place && place !== "Any" ? `in ${place}` : "across India";
  if (intent === "rent") return `Homes for rent ${where}`;
  if (intent === "commercial") {
    if (type === "Retail") return `Retail spaces ${where}`;
    if (type === "Office") return `Offices ${where}`;
    return `Commercial spaces ${where}`;
  }
  if (type === "Apartment") return `Apartments ${where}`;
  if (type === "Villa") return `Villas ${where}`;
  if (type === "Plot") return `Plots & land ${where}`;
  if (type === "Builder Floor") return `Builder floors ${where}`;
  return `Properties ${where}`;
}

export function ListingPage({
  intent,
  search,
  onSearch,
}: {
  intent: Intent;
  search: BuySearch;
  onSearch: (next: BuySearch) => void;
}) {
  const { openLead } = useApp();
  const items = filterHomes(intent, search);
  const { slice, total, current } = paginate(items, search.page, 5);
  const city = resolveCity(search.place);
  const localities = localitiesFor(city || search.place);
  const heading = titleFor(intent, search.type, search.place);
  const crumb = intent === "rent" ? "Rent" : intent === "commercial" ? "Commercial" : "Buy";
  const projects = filterProjects(
    projectSearch({
      place: city || "Any",
      type: intent === "commercial" ? "Commercial" : search.type === "Any" ? "Any" : search.type,
      status: "all",
    }),
  ).slice(0, 4);

  return (
    <main>
      <section className="relative hero-frame">
        <img src="/images/hero-list.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/45 to-forest-deep/15" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-start px-4 py-8 sm:hero-frame sm:justify-center sm:px-6 sm:py-12 lg:justify-start lg:pt-40 lg:pb-12">
          <p className="text-sm text-card/80">
            <Link to="/" className="hover:text-card">Home</Link>
            <span className="px-2">/</span>
            {crumb}
            {city ? (
              <>
                <span className="px-2">/</span>
                {city}
              </>
            ) : null}
          </p>
          <div className="hero-in mt-4 max-w-2xl text-card">
            <p className="text-xs tracking-widest text-card/80">{crumb.toUpperCase()}</p>
            <h1 className="mt-3 text-4xl text-balance sm:text-5xl">{heading}</h1>
            <p className="mt-3 text-sm text-card/80">
              {items.length.toLocaleString("en-IN")} verified {heading.toLowerCase()}
            </p>
          </div>
          <div className="mt-6 lg:mt-12">
            <SearchBar tab={TAB[intent]} place={search.place} type={search.type} budget={search.budget} showCities />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl text-balance sm:text-4xl">{items.length.toLocaleString("en-IN")} {heading}</h2>
          <div className="w-full sm:w-64">
            <SelectField
              label="Sort by"
              value={BUY_SORTS.find((item) => item.id === search.sort)?.label ?? "Relevance"}
              options={BUY_SORTS.map((item) => item.label)}
              onChange={(label) => {
                const match = BUY_SORTS.find((item) => item.label === label);
                onSearch({ ...search, sort: match?.id ?? "relevance", page: 1 });
              }}
            />
          </div>
        </div>
        {localities.length ? (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            <span className="shrink-0 self-center text-sm text-muted">Localities in {city}</span>
            {localities.map((locality) => {
              const active = search.locality === locality || search.place.toLowerCase() === locality.toLowerCase();
              return (
                <button
                  key={locality}
                  onClick={() =>
                    onSearch({
                      ...search,
                      locality: active ? "" : locality,
                      place: city || search.place,
                      page: 1,
                    })
                  }
                  className={`shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-ink bg-ink text-card" : "border-line bg-card"}`}
                >
                  {locality}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted">Pick a city to see its localities. Listings update with the city.</p>
        )}
        <div className="mt-6 space-y-4">
          {slice.length === 0 ? (
            <div className="rounded-card border border-line bg-card px-6 py-16 text-center">
              <h3 className="font-serif text-3xl">No homes match these filters</h3>
              <p className="mt-2 text-sm text-muted">Try another locality, budget or property type.</p>
              <button onClick={() => onSearch({ ...search, locality: "", type: "Any", budget: "Any", place: city, page: 1 })} className="tap mt-5 h-11 rounded-pill bg-forest px-5 text-sm text-card">
                Clear filters
              </button>
            </div>
          ) : (
            slice.map((listing) => <ListingRow key={listing.slug} listing={listing} />)
          )}
        </div>
        <Pagination page={current} total={total} onPage={(page) => onSearch({ ...search, page })} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted">PROJECTS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">New projects in {city || "India"}</h2>
          </div>
          <Link to="/projects" search={projectSearch({ place: city || "Any" })} className="inline-flex items-center gap-1 text-sm">
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>
        {projects.length === 0 ? (
          <p className="mt-6 text-sm text-muted">No projects in this location. Choose another city.</p>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((listing, index) => (
              <Reveal key={listing.slug} delay={(index % 4) * 40}>
                <ProjectCard listing={listing} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-card px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <img src="/images/living-c.jpg" alt="" className="h-64 w-full object-cover sm:h-72 lg:h-full" />
        <div className="flex flex-col justify-center bg-forest px-6 py-12 text-card sm:px-10">
          <p className="text-xs tracking-widest text-card/70">LOOKING FOR SOMETHING SPECIFIC?</p>
          <h2 className="mt-3 max-w-md text-3xl sm:text-4xl">Get personalised property recommendations.</h2>
          <p className="mt-3 max-w-md text-sm text-card/75">
            Tell us your requirements and our experts will help you find the best options.
          </p>
          <button onClick={() => openLead("expert")} className="tap mt-6 h-11 w-fit rounded-pill bg-gold px-5 text-sm text-forest">
            Talk to an Expert →
          </button>
        </div>
      </section>
    </main>
  );
}
