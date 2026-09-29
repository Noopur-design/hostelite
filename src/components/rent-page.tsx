import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, CalendarClock, KeyRound } from "lucide-react";
import { ListingRow, ProjectCard } from "@/components/cards";
import { Pagination, Reveal, SelectField } from "@/components/chrome";
import { SearchBar } from "@/components/search-bar";
import { useApp } from "@/components/app-state";
import {
  BUY_SORTS,
  filterHomes,
  filterProjects,
  formatRent,
  localitiesFor,
  paginate,
  resolveCity,
} from "@/data/catalog";
import { projectSearch, type BuySearch } from "@/lib/search";

const STEPS = [
  { icon: KeyRound, title: "Verified homes", body: "Every rental is checked for possession, society and a real monthly rent." },
  { icon: CalendarClock, title: "Move-in ready", body: "Ready apartments, villas and floors — not a brochure you wait years for." },
  { icon: BadgeCheck, title: "A clear shortlist", body: "Compare area, furnishing and locality without calling ten brokers." },
];

export function RentPage({ search, onSearch }: { search: BuySearch; onSearch: (next: BuySearch) => void }) {
  const { openLead } = useApp();
  const city = resolveCity(search.place);
  const localities = localitiesFor(search.place);
  const items = filterHomes("rent", search);
  const { slice, total, current } = paginate(items, search.page, 6);
  const projects = filterProjects(projectSearch({ place: city || "Any", type: "Any", status: "all" })).slice(0, 4);
  const where = city || (search.place && search.place !== "Any" ? search.place : "India");
  const rents = items.map((item) => item.rentMonthly).filter((value) => value > 0);
  const from = rents.length ? Math.min(...rents) : 0;

  return (
    <main>
      <section className="relative hero-frame">
        <img src="/images/living-a.jpg" alt="Furnished living room ready to rent" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/15" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-start px-4 py-8 sm:hero-frame sm:justify-center sm:px-6 sm:py-12 lg:justify-start lg:pt-40 lg:pb-12">
          <p className="text-sm text-card/80">
            <Link to="/" className="hover:text-card">Home</Link>
            <span className="px-2">/</span>
            Rent
            {city ? (
              <>
                <span className="px-2">/</span>
                {city}
              </>
            ) : null}
          </p>
          <div className="hero-in mt-4 max-w-2xl text-card">
            <p className="text-xs tracking-widest text-card/80">HOMES FOR RENT</p>
            <h1 className="mt-3 text-4xl text-balance sm:text-5xl lg:text-6xl">A home you can move into this month.</h1>
            <p className="mt-4 max-w-lg text-sm text-card/85 sm:text-base">
              Verified apartments, villas and builder floors across {where === "India" ? "India's prime cities" : where}.
              {from ? ` Rents from ${formatRent(from)} a month.` : ""}
            </p>
          </div>
          <div className="mt-8 lg:mt-12">
            <SearchBar tab="Rent" place={search.place} type={search.type} budget={search.budget} showCities />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.title} className="flex gap-4">
              <step.icon className="size-6 shrink-0 text-forest" strokeWidth={1.5} />
              <div>
                <h2 className="font-sans text-base font-semibold tracking-normal">{step.title}</h2>
                <p className="mt-1 text-sm text-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl">Homes for rent {city ? `in ${city}` : "across India"}</h2>
            <p className="mt-2 text-sm text-muted">{items.length.toLocaleString("en-IN")} verified rentals match this search.</p>
          </div>
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

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          {["Any", "Apartment", "Villa", "Builder Floor"].map((type) => {
            const active = (search.type || "Any") === type;
            return (
              <button
                key={type}
                onClick={() => onSearch({ ...search, type, page: 1 })}
                className={`shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-forest bg-forest text-card" : "border-line bg-card"}`}
              >
                {type === "Any" ? "All types" : type === "Builder Floor" ? "Floors" : `${type}s`}
              </button>
            );
          })}
        </div>

        {localities.length ? (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            <span className="shrink-0 self-center text-sm text-muted">Localities</span>
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
          <p className="mt-3 text-sm text-muted">Choose a city to see its localities.</p>
        )}

        <div className="mt-6 space-y-4">
          {slice.length === 0 ? (
            <div className="rounded-card border border-line bg-card px-6 py-16 text-center">
              <h3 className="font-serif text-3xl">No rentals match these filters</h3>
              <p className="mt-2 text-sm text-muted">Try another city, locality or a wider budget.</p>
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

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted">IF YOU WOULD RATHER BUY</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Projects in {city || "these cities"}</h2>
          </div>
          <Link to="/projects" search={projectSearch({ place: city || "Any" })} className="inline-flex items-center gap-1 text-sm">
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>
        {projects.length === 0 ? (
          <p className="mt-6 text-sm text-muted">No projects in this location yet. Try another city.</p>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((listing, index) => (
              <Reveal key={listing.slug} delay={(index % 4) * 50}>
                <ProjectCard listing={listing} />
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-card px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <img src="/images/living-c.jpg" alt="" className="h-64 w-full object-cover sm:h-72 lg:h-full" />
        <div className="flex flex-col justify-center bg-forest px-6 py-12 text-card sm:px-10">
          <p className="text-xs tracking-widest text-card/70">NEED A SHORTLIST?</p>
          <h2 className="mt-3 max-w-md text-3xl sm:text-4xl">Tell us the city, budget and move-in date.</h2>
          <p className="mt-3 max-w-md text-sm text-card/75">A HavenNest expert will send rentals that fit — not a generic dump of ads.</p>
          <button onClick={() => openLead("expert")} className="tap mt-6 h-11 w-fit rounded-pill bg-gold px-5 text-sm text-forest">
            Talk to an Expert →
          </button>
        </div>
      </section>
    </main>
  );
}
