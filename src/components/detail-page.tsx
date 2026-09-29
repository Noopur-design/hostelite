import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Baby,
  Bath,
  Building2,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Footprints,
  GraduationCap,
  Heart,
  HeartPulse,
  Home,
  Mail,
  MapPin,
  Maximize,
  Phone,
  Play,
  Share2,
  Shield,
  ShoppingBag,
  Sparkles,
  TrainFront,
  Trees,
  UserRound,
  Users,
  UtensilsCrossed,
  Waves,
  Zap,
  Briefcase,
  Gamepad2,
} from "lucide-react";
import { useApp } from "@/components/app-state";
import { copyText } from "@/components/chrome";
import {
  AMENITIES,
  destinationsFor,
  developerOf,
  floorConfigs,
  formatArea,
  formatCr,
  formatRent,
  formatSqft,
  mapSrc,
  nearbyFor,
  pinFor,
  priceTrend,
  similarListings,
  type Listing,
} from "@/data/catalog";
import { cn } from "@/lib/cn";
import { buySearch, commercialSearch, rentSearch } from "@/lib/search";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "amenities", label: "Amenities" },
  { id: "floor-plan", label: "Floor Plan" },
  { id: "location", label: "Location" },
  { id: "price", label: "Price Insights" },
  { id: "builder", label: "Builder" },
  { id: "similar", label: "Similar Properties" },
];

const AMENITY_ICONS = [Building2, Waves, Dumbbell, Trees, Baby, Shield, Zap, Users, Sparkles, Gamepad2, Footprints, Home];
const NEAR_ICONS = [GraduationCap, HeartPulse, ShoppingBag, Briefcase, UtensilsCrossed, TrainFront];

export function DetailPage({ listing }: { listing: Listing }) {
  const { openLead, openGallery, openVideo, openMap, toast, isSaved, toggleSaved } = useApp();
  const images = listing.images;
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState("overview");
  const [more, setMore] = useState(false);
  const [allAmenities, setAllAmenities] = useState(false);
  const configs = useMemo(() => floorConfigs(listing), [listing]);
  const [configId, setConfigId] = useState(configs.find((item) => item.beds === listing.bhk)?.id ?? configs[0]?.id ?? "3");
  const [visit, setVisit] = useState({ name: "", phone: "", email: "" });
  const [visitErrors, setVisitErrors] = useState<Record<string, string>>({});
  const [visitDone, setVisitDone] = useState(false);
  const [chartOn, setChartOn] = useState(false);
  const config = configs.find((item) => item.id === configId) ?? configs[0];
  const dev = developerOf(listing.developer);
  const pin = pinFor(listing);
  const similar = similarListings(listing);
  const saved = isSaved(listing.slug);

  useEffect(() => {
    setIndex(0);
    setMore(false);
    setVisitDone(false);
    setConfigId(configs.find((item) => item.beds === listing.bhk)?.id ?? configs[0]?.id ?? "3");
  }, [listing.slug, listing.bhk, configs]);

  useEffect(() => {
    setChartOn(true);
    const nodes = TABS.map((tab) => document.getElementById(tab.id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [listing.slug]);

  function scrollTo(id: string) {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function submitVisit(event: FormEvent) {
    event.preventDefault();
    const errors: Record<string, string> = {};
    if (visit.name.trim().length < 2) errors.name = "Enter your full name";
    if (!/^[6-9]\d{9}$/.test(visit.phone.replace(/\D/g, ""))) errors.phone = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visit.email.trim())) errors.email = "Enter a valid email address";
    setVisitErrors(errors);
    if (Object.keys(errors).length) return;
    const leads = JSON.parse(localStorage.getItem("havennest-leads") || "[]") as unknown[];
    leads.push({ ...visit, mode: "visit", project: listing.name, at: Date.now() });
    localStorage.setItem("havennest-leads", JSON.stringify(leads));
    setVisitDone(true);
  }

  const parentHref = listing.intent === "rent" ? "/rent" : listing.intent === "commercial" ? "/commercial" : "/buy";
  const parentSearch =
    listing.intent === "rent"
      ? rentSearch({ place: listing.city, type: "Any" })
      : listing.intent === "commercial"
        ? commercialSearch({ place: listing.city })
        : buySearch({ place: listing.city, type: listing.type === "Commercial" ? "Any" : listing.type });

  const visibleAmenities = allAmenities ? AMENITIES : AMENITIES.slice(0, 8);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="min-w-0 text-xs break-words text-muted sm:text-sm">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="px-1.5">/</span>
          <Link to={parentHref} search={parentSearch} className="hover:text-ink">
            {listing.intent === "rent" ? "Rent" : listing.intent === "commercial" ? "Commercial" : "Buy"}
          </Link>
          <span className="px-1.5">/</span>
          <span>{listing.city}</span>
          <span className="px-1.5">/</span>
          <span className="text-ink">{listing.name}</span>
        </p>
        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => {
              void copyText(window.location.href).then((ok) => toast(ok ? "Link copied" : "Unable to copy link"));
            }}
            className="inline-flex items-center gap-1"
          >
            <Share2 className="size-4" /> Share
          </button>
          <button onClick={() => toggleSaved(listing.slug)} className="inline-flex items-center gap-1">
            <Heart className={cn("size-4", saved && "fill-forest text-forest")} />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-card lg:col-span-2">
          <img src={images[index % images.length]} alt={`${listing.name} photo`} className="gallery-main h-full w-full object-cover" />
          <button aria-label="Previous photo" onClick={() => setIndex((value) => (value - 1 + images.length) % images.length)} className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-card shadow">
            <ChevronLeft className="size-4" />
          </button>
          <button aria-label="Next photo" onClick={() => setIndex((value) => (value + 1) % images.length)} className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-card shadow">
            <ChevronRight className="size-4" />
          </button>
          <button onClick={() => openGallery(images, listing.name, index)} className="absolute bottom-3 left-3 rounded-pill bg-forest/80 px-3 py-1 text-xs text-card">
            Photos ({images.length + 18})
          </button>
        </div>
        <div className="grid gap-3">
          <button onClick={() => openVideo(images, listing.name)} className="relative overflow-hidden rounded-card">
            <img src={images[1 % images.length]} alt="" className="h-44 w-full object-cover lg:h-full" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="inline-flex items-center gap-2 rounded-pill bg-card/90 px-4 py-2 text-sm">
                <Play className="size-4" /> Watch Video
              </span>
            </span>
          </button>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setIndex(2 % images.length)} className="overflow-hidden rounded-card">
              <img src={images[2 % images.length]} alt="" className="h-28 w-full object-cover" />
            </button>
            <button onClick={() => openGallery(images, listing.name, 0)} className="relative overflow-hidden rounded-card">
              <img src={images[3 % images.length]} alt="" className="h-28 w-full object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-forest-deep/45 text-sm text-card">+{images.length + 17} Photos</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0">
          <h1 className="text-3xl text-balance break-words sm:text-5xl">{listing.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 text-muted">
              <MapPin className="size-4" /> {listing.address}
            </span>
            <span className="rounded-pill bg-forest/10 px-3 py-1 text-xs text-forest">{listing.status}</span>
            {listing.rera ? (
              <span className="inline-flex items-center gap-1 rounded-pill bg-chip px-3 py-1 text-xs">
                <span className="size-1.5 rounded-full bg-forest" /> RERA Verified
              </span>
            ) : null}
            {listing.gated ? <span className="rounded-pill bg-chip px-3 py-1 text-xs">Gated Community</span> : null}
          </div>
          <div className="mt-5 flex flex-wrap items-end gap-4">
            <p className="font-serif text-3xl sm:text-4xl">
              {listing.intent === "rent" ? (
                <>
                  {formatRent(listing.rentMonthly)} <span className="font-sans text-base text-muted">/ month</span>
                </>
              ) : (
                formatCr(listing.priceCr)
              )}
            </p>
            {listing.intent !== "rent" ? <p className="text-sm text-muted">{formatSqft(listing.pricePerSqft)}</p> : null}
            <button onClick={() => scrollTo("price")} className="text-sm text-forest">
              View Price Trends →
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {listing.bhk > 0 ? <Spec icon={<Home className="size-4" />} value={`${listing.bhk} BHK`} label="Configuration" /> : <Spec icon={<Maximize className="size-4" />} value={listing.title} label="Type" />}
            <Spec icon={<Maximize className="size-4" />} value={formatArea(listing.area)} label="Super Built-up Area" />
            {listing.baths > 0 ? <Spec icon={<Bath className="size-4" />} value={`${listing.baths} Bathrooms`} label="Bathrooms" /> : null}
            {listing.balconies > 0 ? <Spec icon={<Building2 className="size-4" />} value={`${listing.balconies} Balcony`} label="Balcony" /> : null}
            <Spec icon={<Car className="size-4" />} value={listing.parking} label="Parking" />
          </div>

          <div className="sticky top-16 z-20 -mx-4 mt-8 flex max-w-full gap-1 overflow-x-auto border-b border-line bg-paper/95 px-4 sm:mx-0 sm:px-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                className={cn("shrink-0 border-b-2 px-3 py-3 text-sm", active === tab.id ? "border-ink text-ink" : "border-transparent text-muted")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <section id="overview" className="scroll-mt-32 pt-8">
            <h2 className="text-3xl">About {listing.name}</h2>
            <p className={cn("mt-3 max-w-3xl text-sm text-muted", !more && "line-clamp-3")}>{listing.about}</p>
            <button onClick={() => setMore((value) => !value)} className="mt-3 text-sm text-forest">
              {more ? "Show less" : "Read More →"}
            </button>
          </section>

          <section id="amenities" className="scroll-mt-32 pt-10">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-3xl">Amenities</h2>
              <button onClick={() => setAllAmenities((value) => !value)} className="text-sm">
                {allAmenities ? "Show less" : "View all amenities →"}
              </button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {visibleAmenities.map((label, amenityIndex) => {
                const Icon = AMENITY_ICONS[amenityIndex % AMENITY_ICONS.length] ?? Home;
                return (
                  <div key={label} className="rounded-card border border-line bg-card px-3 py-4 text-center">
                    <Icon className="mx-auto size-5 text-forest" strokeWidth={1.5} />
                    <p className="mt-2 text-xs">{label}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="floor-plan" className="scroll-mt-32 pt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl">Floor Plan</h2>
              <button onClick={() => openGallery(["/images/floorplan.jpg"], `${listing.name} floor plan`)} className="text-sm">
                View all floor plans →
              </button>
            </div>
            {listing.bhk > 0 ? (
              <div className="mt-4 inline-flex rounded-pill bg-chip p-1">
                {configs.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setConfigId(item.id)}
                    className={cn("rounded-pill px-4 py-1.5 text-sm", item.id === config?.id ? "bg-forest text-card" : "text-ink")}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ) : null}
            {config ? (
              <div className="mt-4 grid gap-4 rounded-card border border-line bg-card p-4 md:grid-cols-[1.2fr_1fr]">
                <img src="/images/floorplan.jpg" alt={`${config.name} floor plan`} className="h-64 w-full rounded-control object-contain bg-ivory" />
                <div>
                  <p className="font-medium">{config.name}</p>
                  <p className="text-sm text-muted">{formatArea(config.area)}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {config.beds > 0 ? <li>{config.beds} Bedrooms</li> : <li>Plotted development</li>}
                    {config.baths > 0 ? <li>{config.baths} Bathrooms</li> : null}
                    {config.living > 0 ? <li>{config.living} Living Room</li> : null}
                    {config.kitchen > 0 ? <li>{config.kitchen} Kitchen</li> : null}
                    {config.balcony > 0 ? <li>{config.balcony} Balcony</li> : null}
                  </ul>
                  <button onClick={() => openGallery(["/images/floorplan.jpg"], config.name)} className="tap mt-5 h-11 rounded-control border border-line px-4 text-sm">
                    View Detailed Plan →
                  </button>
                </div>
              </div>
            ) : null}
          </section>

          <section id="location" className="scroll-mt-32 pt-10">
            <h2 className="text-3xl">Location</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <iframe title={`Map of ${listing.name}`} src={mapSrc(pin.lat, pin.lon)} className="h-72 w-full rounded-card border border-line" />
              <div className="rounded-card border border-line bg-card p-5">
                <p className="font-medium">Well connected to key destinations</p>
                <ul className="mt-4 space-y-3">
                  {destinationsFor(listing.city).map((item) => (
                    <li key={item.name} className="flex items-center justify-between text-sm">
                      <span className="inline-flex items-center gap-2 text-muted">
                        <MapPin className="size-4 text-forest" /> {item.name}
                      </span>
                      <span>{item.time}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => openMap(listing.name, pin.lat, pin.lon)} className="tap mt-5 h-11 rounded-control border border-line px-4 text-sm">
                  View on Map →
                </button>
              </div>
            </div>
            <h3 className="mt-8 font-sans text-xl font-semibold tracking-normal">What's nearby</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {nearbyFor(listing.city).map((item, nearIndex) => {
                const Icon = NEAR_ICONS[nearIndex] ?? MapPin;
                return (
                  <div key={item.label} className="rounded-card border border-line bg-card px-3 py-4 text-center">
                    <Icon className="mx-auto size-5 text-forest" strokeWidth={1.5} />
                    <p className="mt-2 text-xs font-medium">{item.label}</p>
                    <p className="text-xs text-muted">{item.time}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="price" className="scroll-mt-32 pt-10">
            <h2 className="text-3xl">Price Insights</h2>
            <p className="mt-2 text-sm text-muted">Indicative price per sq.ft. around {listing.locality}. Figures illustrate the catalogue, not a live index.</p>
            <div className="mt-4 h-64 rounded-card border border-line bg-card p-3">
              {chartOn ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={priceTrend(listing)}>
                    <XAxis dataKey="year" tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "var(--color-muted)", fontSize: 12 }} axisLine={false} tickLine={false} width={48} />
                    <Tooltip formatter={(value) => [`₹ ${Number(value ?? 0).toLocaleString("en-IN")}`, "per sq.ft."]} />
                    <Area type="monotone" dataKey="price" stroke="var(--color-forest)" fill="var(--color-gold)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              ) : null}
            </div>
          </section>

          <section id="builder" className="scroll-mt-32 pt-10">
            <h2 className="text-3xl">Builder</h2>
            <div className="mt-4 rounded-card border border-line bg-card p-5">
              <p className="text-xs tracking-widest text-muted">PROJECT BY</p>
              <p className="mt-2 font-serif text-3xl">{listing.developer}</p>
              <p className="mt-2 max-w-xl text-sm text-muted">{dev.line}</p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <Stat value={dev.years} label="Experience" />
                <Stat value={dev.projects} label="Projects" />
                <Stat value={dev.families} label="Happy Families" />
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <form onSubmit={submitVisit} className="rounded-card border border-line bg-card p-5" noValidate>
            <h2 className="font-sans text-lg font-semibold tracking-normal">Schedule a visit</h2>
            <p className="mt-1 text-sm text-muted">Get in touch with our expert for site visit, pricing details and exclusive offers.</p>
            {visitDone ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid size-11 place-items-center rounded-full bg-forest text-card">
                  <Check className="size-4" />
                </div>
                <p className="mt-3 font-medium">Visit requested</p>
                <p className="text-sm text-muted">We will confirm a time for {listing.name}.</p>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <IconInput icon={<UserRound className="size-4" />} error={visitErrors.name}>
                  <input value={visit.name} onChange={(event) => setVisit({ ...visit, name: event.target.value })} placeholder="Full Name" className="w-full bg-transparent text-sm outline-none" />
                </IconInput>
                <IconInput icon={<Phone className="size-4" />} error={visitErrors.phone}>
                  <input value={visit.phone} onChange={(event) => setVisit({ ...visit, phone: event.target.value })} placeholder="Phone Number" className="w-full bg-transparent text-sm outline-none" />
                </IconInput>
                <IconInput icon={<Mail className="size-4" />} error={visitErrors.email}>
                  <input value={visit.email} onChange={(event) => setVisit({ ...visit, email: event.target.value })} placeholder="Email Address" className="w-full bg-transparent text-sm outline-none" />
                </IconInput>
                <button type="submit" className="tap h-12 w-full rounded-control bg-forest text-sm text-card">
                  Request Site Visit →
                </button>
                <button type="button" onClick={() => openLead("callback", listing.name)} className="tap h-12 w-full rounded-control border border-line text-sm">
                  Get a Callback
                </button>
                <p className="flex items-center justify-center gap-1 text-xs text-muted">
                  <Shield className="size-3.5" /> Your details are safe with us
                </p>
              </div>
            )}
          </form>

          <div className="rounded-card border border-line bg-card p-5">
            <p className="text-xs text-muted">Project by</p>
            <p className="mt-2 font-serif text-2xl">{listing.developer}</p>
            <p className="text-sm text-muted">Trusted Developer</p>
            <button onClick={() => scrollTo("builder")} className="mt-3 text-sm text-forest">
              View Developer Profile →
            </button>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <Stat value={dev.years} label="Experience" />
              <Stat value={dev.projects} label="Projects" />
              <Stat value={dev.families} label="Happy Families" />
            </div>
          </div>

          <div className="rounded-card border border-line bg-card p-5">
            <h2 className="font-sans text-lg font-semibold tracking-normal">Property Highlights</h2>
            <ul className="mt-3 space-y-2">
              {listing.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <Check className="mt-0.5 size-4 shrink-0 text-forest" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <section id="similar" className="scroll-mt-32 py-10 sm:py-12">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl">Similar properties in {listing.city}</h2>
          <Link to={parentHref} search={parentSearch} className="shrink-0 text-sm">
            View all properties →
          </Link>
        </div>
        <div className="mt-5 flex min-w-0 gap-4 overflow-x-auto pb-2">
          {similar.map((item) => (
            <Link key={item.slug} to="/property/$slug" params={{ slug: item.slug }} className="group w-[min(16rem,78vw)] shrink-0 overflow-hidden rounded-card border border-line bg-card">
              <div className="relative h-36 overflow-hidden">
                <img src={item.images[0]} alt="" className="zoom-img h-full w-full object-cover" />
              </div>
              <div className="p-3">
                <p className="font-serif text-xl">{item.intent === "rent" ? formatRent(item.rentMonthly) : formatCr(item.priceCr)}</p>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-muted">{item.name}</p>
                <p className="text-xs text-muted">{formatArea(item.area)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function Spec({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="min-w-0 rounded-card border border-line bg-card px-3 py-3">
      <div className="text-forest">{icon}</div>
      <p className="mt-2 text-sm font-medium break-words">{value}</p>
      <p className="text-xs text-muted break-words">{label}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-sm font-semibold">{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  );
}

function IconInput({ icon, error, children }: { icon: ReactNode; error?: string; children: ReactNode }) {
  return (
    <div>
      <div className="flex h-12 items-center gap-2 rounded-control border border-line px-3">
        <span className="text-muted">{icon}</span>
        {children}
      </div>
      {error ? <p className="mt-1 text-xs text-forest-soft">{error}</p> : null}
    </div>
  );
}
