import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { useApp } from "@/components/app-state";
import { ListingRow, ProjectCard } from "@/components/cards";
import { Pagination, Reveal, SelectField } from "@/components/chrome";
import { SearchBar } from "@/components/search-bar";
import {
  BUY_BUDGETS,
  CITY_GEO,
  CITY_NAMES,
  DEVELOPER_LOGOS,
  filterHomes,
  filterProjects,
  LOGO_DEVELOPER,
  localitiesFor,
  paginate,
  POSSESSION_OPTIONS,
  PROJECT_SORTS,
  PROJECT_TYPES,
  resolveCity,
} from "@/data/catalog";
import { buySearch, type ProjectSearch } from "@/lib/search";

const TABS = [
  { id: "all", label: "All Projects" },
  { id: "ready", label: "Ready to Move" },
  { id: "uc", label: "Under Construction" },
  { id: "new", label: "New Launch" },
];

export function ProjectsPage({ search, onSearch }: { search: ProjectSearch; onSearch: (next: ProjectSearch) => void }) {
  const { openLead, openMap } = useApp();
  const [draft, setDraft] = useState(search);
  useEffect(() => setDraft(search), [search]);

  const base = filterProjects({ ...search, status: "all" });
  const counts = {
    all: base.length,
    ready: base.filter((item) => item.status === "Ready to Move").length,
    uc: base.filter((item) => item.status === "Under Construction").length,
    new: base.filter((item) => item.status === "New Launch").length,
  };
  const filtered = filterProjects(search);
  const { slice, total, current } = paginate(filtered, search.page, 8);
  const city = resolveCity(search.place);
  const placeLabel = !search.place || search.place === "Any" ? "India" : search.place;
  const localities = localitiesFor(city || search.place);
  const homes = filterHomes(
    "buy",
    buySearch({ place: !search.place || search.place === "Any" ? "" : search.place, type: "Any", budget: search.budget, locality: "" }),
  ).slice(0, 3);

  function applyPlace(place: string) {
    const next = { ...draft, place, page: 1 as const };
    setDraft(next);
    onSearch({ ...search, ...next, developer: "", page: 1 });
  }

  return (
    <main>
      <section className="relative hero-frame">
        <img src="/images/hero-projects.jpg" alt="Evening terrace of a luxury residence" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/35 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-start px-4 py-8 sm:hero-frame sm:justify-center sm:px-6 sm:py-12 lg:justify-start lg:pt-40 lg:pb-12">
          <div className="hero-in max-w-xl text-card">
            <p className="text-xs tracking-widest text-card/80">PREMIUM PROJECTS</p>
            <h1 className="mt-3 text-4xl text-balance sm:text-5xl lg:text-6xl">Discover tomorrow's landmarks today.</h1>
            <p className="mt-4 max-w-md text-sm text-card/85">
              Curated new launches from India's most trusted developers in prime locations.
            </p>
          </div>
          <div className="mt-8 lg:mt-12">
            <SearchBar tab="Projects" place={search.place === "Any" ? "" : search.place} type={search.type} budget={search.budget} showTabs={false} />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="text-center text-xs tracking-widest text-muted">TRUSTED DEVELOPERS</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-between">
            {DEVELOPER_LOGOS.map((logo) => (
              <button
                key={logo}
                onClick={() =>
                  onSearch({
                    ...search,
                    developer: LOGO_DEVELOPER[logo] ?? "",
                    place: "Any",
                    status: "all",
                    page: 1,
                  })
                }
                className="font-serif text-lg tracking-wide text-muted transition hover:text-ink"
              >
                {logo}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl text-balance sm:text-4xl">New Projects in {placeLabel}</h2>
          <button
            onClick={() => {
              const geo = CITY_GEO[search.place] ?? CITY_GEO.Gurugram;
              openMap(`Projects in ${placeLabel}`, geo.lat, geo.lon);
            }}
            className="inline-flex items-center gap-1 text-sm"
          >
            <MapPin className="size-4" /> View on Map
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          <SelectField
            label="Location"
            value={draft.place || "Any"}
            options={["Any", ...CITY_NAMES]}
            onChange={applyPlace}
          />
          <SelectField
            label="Price Range"
            value={draft.budget}
            options={BUY_BUDGETS.map((item) => item.id)}
            onChange={(budget) => setDraft({ ...draft, budget })}
          />
          <SelectField label="Project Type" value={draft.type} options={PROJECT_TYPES} onChange={(type) => setDraft({ ...draft, type })} />
          <SelectField
            label="Possession"
            value={draft.possession}
            options={POSSESSION_OPTIONS}
            onChange={(possession) => setDraft({ ...draft, possession })}
          />
          <button
            onClick={() => onSearch({ ...draft, status: search.status, developer: search.developer, page: 1 })}
            className="tap h-14 rounded-control bg-forest px-5 text-sm text-card sm:col-span-2 xl:col-span-1"
          >
            Apply Filters
          </button>
        </div>

        {search.developer ? (
          <button
            onClick={() => onSearch({ ...search, developer: "", page: 1 })}
            className="mt-4 rounded-pill bg-chip px-3 py-1 text-sm"
          >
            {search.developer} ×
          </button>
        ) : null}

        {localities.length ? (
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {localities.map((locality) => (
              <button
                key={locality}
                onClick={() => applyPlace(locality)}
                className={`shrink-0 rounded-pill border px-3 py-2 text-sm ${search.place === locality ? "border-ink bg-ink text-card" : "border-line bg-card"}`}
              >
                {locality}
              </button>
            ))}
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-4 border-b border-line lg:flex-row lg:items-end lg:justify-between">
          <div className="flex gap-5 overflow-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSearch({ ...search, status: tab.id, page: 1 })}
                className={`shrink-0 border-b-2 pb-3 text-sm ${search.status === tab.id ? "border-ink text-ink" : "border-transparent text-muted"}`}
              >
                {tab.label} ({counts[tab.id as keyof typeof counts]})
              </button>
            ))}
          </div>
          <div className="mb-3 w-full sm:w-56">
            <SelectField
              label="Sort"
              value={PROJECT_SORTS.find((item) => item.id === search.sort)?.label ?? "Featured"}
              options={PROJECT_SORTS.map((item) => item.label)}
              onChange={(label) => {
                const match = PROJECT_SORTS.find((item) => item.label === label);
                onSearch({ ...search, sort: match?.id ?? "featured", page: 1 });
              }}
            />
          </div>
        </div>

        {slice.length === 0 ? (
          <div className="mt-8 rounded-card border border-line bg-card px-6 py-16 text-center">
            <h3 className="font-serif text-3xl">No projects match</h3>
            <p className="mt-2 text-sm text-muted">Widen the budget or clear possession.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {slice.map((listing, index) => (
              <Reveal key={listing.slug} delay={(index % 4) * 50}>
                <ProjectCard listing={listing} />
              </Reveal>
            ))}
          </div>
        )}
        <Pagination page={current} total={total} onPage={(page) => onSearch({ ...search, page })} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-widest text-muted">LISTINGS</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Homes for sale in {placeLabel}</h2>
          </div>
          <Link
            to="/buy"
            search={buySearch({ place: city || "", type: "Any" })}
            className="inline-flex items-center gap-1 text-sm"
          >
            View all listings <ArrowRight className="size-4" />
          </Link>
        </div>
        {homes.length === 0 ? (
          <p className="mt-6 text-sm text-muted">No listings in this location yet.</p>
        ) : (
          <div className="mt-6 space-y-4">
            {homes.map((listing) => (
              <ListingRow key={listing.slug} listing={listing} />
            ))}
          </div>
        )}
      </section>

      <section className="grid lg:grid-cols-2">
        <img src="/images/living-d.jpg" alt="" className="h-72 w-full object-cover lg:h-96" />
        <div className="flex flex-col justify-center bg-forest px-6 py-12 text-card sm:px-12">
          <p className="text-xs tracking-widest text-card/70">PERSONALISED SUPPORT</p>
          <h2 className="mt-3 max-w-md text-4xl">Looking for something specific?</h2>
          <p className="mt-3 max-w-md text-sm text-card/75">
            Our real estate experts will help you find the right project as per your needs, budget and timeline.
          </p>
          <button onClick={() => openLead("expert")} className="tap mt-6 h-11 w-fit rounded-pill bg-gold px-5 text-sm text-forest">
            Talk to an Expert →
          </button>
        </div>
      </section>
    </main>
  );
}
