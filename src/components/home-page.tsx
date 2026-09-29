import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, ChevronLeft, ChevronRight, FileText, ShieldCheck, Users } from "lucide-react";
import { useApp } from "@/components/app-state";
import { FeaturedCard } from "@/components/cards";
import { Reveal } from "@/components/chrome";
import { SearchBar } from "@/components/search-bar";
import { CITY_NAMES, CITIES, formatCr, homeFeatured, launchProjects, LISTINGS, PROPERTY_TYPES } from "@/data/catalog";
import { buySearch, commercialSearch, projectSearch, rentSearch } from "@/lib/search";

const WHY = [
  { icon: ShieldCheck, title: "Verified Properties", body: "Authentic listings, no fake ads" },
  { icon: ChartNoAxesCombined, title: "Market Insights", body: "Data-driven decisions for better value" },
  { icon: Users, title: "Expert Guidance", body: "Personalised support at every step" },
  { icon: FileText, title: "Hassle-free Process", body: "End-to-end assistance from search to papers" },
];

export function HomePage() {
  const [city, setCity] = useState("");
  const featured = useMemo(() => {
    const pool = LISTINGS.filter((item) => item.intent === "buy" && !item.parentSlug && (!city || item.city === city));
    if (!city) return homeFeatured();
    const starred = pool.filter((item) => item.homeFeatured || item.featured);
    return (starred.length ? starred : pool).slice(0, 3);
  }, [city]);
  const launches = useMemo(() => {
    const slides = launchProjects();
    if (!city) return slides;
    const local = slides.filter((item) => item.city === city);
    if (local.length) return local;
    return LISTINGS.filter((item) => item.showOnProjects && item.city === city);
  }, [city]);
  const [slide, setSlide] = useState(0);
  const current = launches[slide % Math.max(launches.length, 1)];
  const { openLead } = useApp();
  const placeLabel = city || "India";

  return (
    <main>
      <section className="relative hero-frame">
        <img src="/images/hero-home.jpg" alt="Sunlit living room overlooking a city skyline" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/45 to-forest-deep/10" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-start px-4 py-8 sm:hero-frame sm:justify-center sm:px-6 sm:py-12 lg:justify-start lg:pt-40 lg:pb-12">
          <div className="hero-in max-w-xl text-card">
            <p className="text-xs tracking-widest text-card/80">REAL ESTATE, REIMAGINED</p>
            <h1 className="mt-3 max-w-lg text-4xl text-balance sm:text-5xl lg:text-6xl">Find a place worth coming home to.</h1>
            <p className="mt-4 max-w-md text-sm text-card/85 sm:text-base">
              Verified homes. Thoughtful guidance. A simpler way to buy, rent or invest in real estate.
            </p>
          </div>
          <div className="hero-in mt-8 lg:mt-12">
            <SearchBar tab="Buy" place="" type="Any" budget="Any" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl">Property types</h2>
            <p className="mt-2 text-sm text-muted">Explore properties tailored to your needs.</p>
          </div>
          <Link to="/buy" search={buySearch({ type: "Any", place: city })} className="inline-flex items-center gap-1 text-sm">
            View all <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {PROPERTY_TYPES.map((item, index) => (
            <Reveal key={item.label} delay={index * 60}>
              <Link
                to={item.type === "Commercial" ? "/commercial" : "/buy"}
                search={item.type === "Commercial" ? commercialSearch({ place: city }) : buySearch({ type: item.type, place: city })}
                className="group relative block h-36 overflow-hidden rounded-card sm:h-44"
              >
                <img src={item.image} alt="" className="zoom-img h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between text-card">
                  <span className="min-w-0 truncate text-sm font-medium">{item.label}</span>
                  <span className="grid size-8 place-items-center rounded-full bg-card/20">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl text-balance sm:text-4xl">Featured properties{city ? ` in ${city}` : ""}</h2>
            <p className="mt-2 text-sm text-muted">Handpicked homes{city ? ` in ${city}` : " in the best locations"}.</p>
          </div>
          <Link to="/buy" search={buySearch({ type: "Any", place: city })} className="inline-flex items-center gap-1 text-sm">
            View all properties <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => {
              setCity("");
              setSlide(0);
            }}
            className={`shrink-0 rounded-pill border px-3 py-2 text-sm ${city === "" ? "border-forest bg-forest text-card" : "border-line bg-card"}`}
          >
            All cities
          </button>
          {CITY_NAMES.map((name) => (
            <button
              key={name}
              onClick={() => {
                setCity(name);
                setSlide(0);
              }}
              className={`shrink-0 rounded-pill border px-3 py-2 text-sm ${city === name ? "border-forest bg-forest text-card" : "border-line bg-card"}`}
            >
              {name}
            </button>
          ))}
        </div>
        {featured.length === 0 ? (
          <p className="mt-6 text-sm text-muted">No featured homes in {city} yet.</p>
        ) : (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((listing, index) => (
            <Reveal key={listing.slug} delay={index * 70}>
              <FeaturedCard listing={listing} />
            </Reveal>
          ))}
        </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl">Explore top locations</h2>
            <p className="mt-2 text-sm text-muted">Pick a city — featured homes and new projects update together.</p>
          </div>
          <Link to="/locations" className="inline-flex items-center gap-1 text-sm">
            View all locations <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {CITIES.map((item, index) => {
            const active = city === item.name;
            return (
              <Reveal key={item.name} delay={index * 50}>
                <button
                  onClick={() => {
                    setCity(active ? "" : item.name);
                    setSlide(0);
                  }}
                  className={`group relative block h-40 w-full overflow-hidden rounded-card text-left sm:h-56 lg:h-64 ${active ? "ring-2 ring-forest ring-offset-2 ring-offset-paper" : ""}`}
                >
                  <img src={item.image} alt="" className="zoom-img h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
                  <div className="absolute right-3 bottom-3 left-3 text-card">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium">{item.name}</p>
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-card/15">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <p className="text-xs text-card/80">Avg. Price {item.price}</p>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link to="/buy" search={buySearch({ place: city, type: "Any" })} className="inline-flex items-center gap-1">
            Listings in {placeLabel} <ArrowRight className="size-4" />
          </Link>
          <Link to="/projects" search={projectSearch({ place: city || "Any" })} className="inline-flex items-center gap-1">
            Projects in {placeLabel} <ArrowRight className="size-4" />
          </Link>
          <Link to="/rent" search={rentSearch({ place: city, type: "Any" })} className="inline-flex items-center gap-1">
            Rentals in {placeLabel} <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-widest text-muted">WHY CHOOSE HAVENNEST</p>
            <h2 className="mt-2 max-w-md text-3xl sm:text-4xl">A better real estate experience.</h2>
          </div>
          <p className="max-w-md text-sm text-muted">
            We combine verified listings, market insights and expert guidance to make your property journey simple and rewarding.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((item) => (
            <div key={item.title} className="border-line lg:border-l lg:pl-5">
              <item.icon className="size-6 text-forest" strokeWidth={1.5} />
              <h3 className="mt-4 font-sans text-base font-semibold tracking-normal">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {current ? (
        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 sm:pb-16">
          <div className="banner-frame relative overflow-hidden rounded-card">
            <img src={current.images[0]} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/75 to-forest-deep/10" />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-10">
              <div className="max-w-md text-card">
                <p className="text-xs tracking-widest text-card/75">NEW LAUNCHES</p>
                <h2 className="mt-3 text-3xl text-balance sm:text-5xl">Premium projects for a brighter tomorrow.</h2>
                <p className="mt-3 text-sm text-card/80">
                  {city ? `New launches in ${city} from trusted developers.` : "Explore new launches from trusted developers in prime locations."}
                </p>
                <Link to="/projects" search={projectSearch({ place: city || "Any", status: "new" })} className="tap mt-6 inline-flex h-11 items-center rounded-pill border border-card/40 px-5 text-sm">
                  View all projects →
                </Link>
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-end">
                <div className="flex gap-2">
                  <button
                    aria-label="Previous launch"
                    onClick={() => setSlide((value) => (value - 1 + launches.length) % launches.length)}
                    className="grid size-10 place-items-center rounded-full bg-card/90 text-ink"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    aria-label="Next launch"
                    onClick={() => setSlide((value) => (value + 1) % launches.length)}
                    className="grid size-10 place-items-center rounded-full bg-card/90 text-ink"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
                <Link to="/property/$slug" params={{ slug: current.slug }} className="w-full max-w-sm rounded-card bg-card p-4 text-ink shadow-lg sm:w-80">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-medium">{current.name}</p>
                      <p className="text-sm text-muted">{current.address}</p>
                      <p className="mt-2 text-sm">
                        {current.bhkLabel} | {formatCr(current.priceCr)} Onwards
                      </p>
                    </div>
                    <ArrowRight className="mt-1 size-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-card px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <img src="/images/dining.jpg" alt="Dining room prepared for a long evening" className="h-72 w-full object-cover lg:h-full" />
        <div className="flex flex-col justify-center bg-ivory px-6 py-12 sm:px-10">
          <p className="text-xs tracking-widest text-muted">LOOKING TO SELL?</p>
          <h2 className="mt-3 max-w-md text-3xl sm:text-4xl">Get the right value for your property.</h2>
          <p className="mt-3 max-w-md text-sm text-muted">List your property and connect with serious buyers and tenants.</p>
          <button onClick={() => openLead("list")} className="tap mt-6 h-11 w-fit rounded-pill bg-forest px-5 text-sm text-card">
            List Your Property →
          </button>
        </div>
      </section>
    </main>
  );
}
