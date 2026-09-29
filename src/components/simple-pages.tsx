import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ListingRow, ProjectCard } from "@/components/cards";
import { ARTICLES, CITIES, CITY_GEO, filterHomes, filterProjects, mapSrc } from "@/data/catalog";
import { useApp } from "@/components/app-state";
import { buySearch, projectSearch, rentSearch } from "@/lib/search";

export function LocationsPage() {
  const [city, setCity] = useState(CITIES[0]?.name ?? "Gurugram");
  const geo = CITY_GEO[city] ?? CITY_GEO.Gurugram;
  const projects = filterProjects(projectSearch({ place: city, type: "Any", status: "all" })).slice(0, 4);
  const homes = filterHomes("buy", buySearch({ place: city, type: "Any" })).slice(0, 3);
  const rentals = filterHomes("rent", rentSearch({ place: city, type: "Any" })).slice(0, 2);
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="text-xs tracking-widest text-muted">LOCATIONS</p>
      <h1 className="mt-2 text-4xl text-balance sm:text-5xl">Explore top locations</h1>
      <p className="mt-3 max-w-xl text-sm text-muted">
        Choose a city. Projects and listings below switch to that market.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
        {CITIES.map((item) => {
          const active = city === item.name;
          return (
            <button
              key={item.name}
              onClick={() => setCity(item.name)}
              className={`group overflow-hidden rounded-card text-left ${active ? "ring-2 ring-forest ring-offset-2 ring-offset-paper" : ""}`}
            >
              <div className="relative h-40 sm:h-52">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" />
                <div className="absolute right-3 bottom-3 left-3 text-card">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-card/80">Avg. Price {item.price}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-8 overflow-hidden rounded-card border border-line bg-card">
        <div className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-sans text-lg font-semibold tracking-normal">{city}</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link to="/buy" search={buySearch({ place: city, type: "Any" })} className="text-forest">
              Homes
            </Link>
            <Link to="/rent" search={rentSearch({ place: city, type: "Any" })} className="text-forest">
              Rent
            </Link>
            <Link to="/projects" search={projectSearch({ place: city })} className="text-forest">
              Projects
            </Link>
          </div>
        </div>
        <iframe title={city} src={mapSrc(geo.lat, geo.lon)} className="h-64 w-full border-t border-line sm:h-80" />
      </div>

      <section className="mt-12">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl sm:text-4xl">Projects in {city}</h2>
          <Link to="/projects" search={projectSearch({ place: city })} className="inline-flex items-center gap-1 text-sm">
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
        {projects.length === 0 ? (
          <p className="mt-4 text-sm text-muted">No projects listed in {city} yet.</p>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((listing) => (
              <ProjectCard key={listing.slug} listing={listing} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-12">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl sm:text-4xl">Listings in {city}</h2>
          <Link to="/buy" search={buySearch({ place: city, type: "Any" })} className="inline-flex items-center gap-1 text-sm">
            All listings <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {homes.map((listing) => (
            <ListingRow key={listing.slug} listing={listing} />
          ))}
          {rentals.map((listing) => (
            <ListingRow key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>
    </main>
  );
}

export function InsightsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs tracking-widest text-muted">INSIGHTS</p>
      <h1 className="mt-2 text-4xl text-balance sm:text-5xl">Notes from the desk</h1>
      <p className="mt-3 text-sm text-muted">Market context for the homes in this catalogue.</p>
      <div className="mt-8 space-y-10">
        {ARTICLES.map((article) => (
          <article key={article.id} id={article.id} className="scroll-mt-24 overflow-hidden rounded-card border border-line bg-card">
            <img src={article.image} alt="" className="h-56 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs tracking-widest text-muted">{article.kicker}</p>
              <h2 className="mt-2 text-3xl">{article.title}</h2>
              <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
              <div className="mt-4 space-y-3 text-sm text-ink/80">
                {article.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs tracking-widest text-muted">COMPANY</p>
      <h1 className="mt-2 text-4xl text-balance sm:text-5xl">A quieter way to look at homes.</h1>
      <div className="mt-6 space-y-4 text-sm text-muted">
        <p>
          HavenNest is a demo real-estate desk for buyers, tenants and investors comparing homes in Gurugram, Bengaluru, Mumbai, Hyderabad, Pune and Delhi.
        </p>
        <p>
          Listings, prices and possession dates on this site are sample catalogue data so you can try search, filters, saved homes and visit requests without a brokerage account.
        </p>
        <p>Homes. Investments. A better tomorrow.</p>
      </div>
    </article>
  );
}

export function CareersPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs tracking-widest text-muted">CAREERS</p>
      <h1 className="mt-2 text-4xl text-balance sm:text-5xl">Work with the desk.</h1>
      <p className="mt-4 text-sm text-muted">
        We are not hiring through this demo. If you still want to introduce yourself, send a note and it stays on this device.
      </p>
      <NoteForm label="Send a note" storeKey="havennest-careers" />
    </article>
  );
}

export function ContactPage() {
  const { openLead } = useApp();
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-xs tracking-widest text-muted">CONTACT</p>
      <h1 className="mt-2 text-4xl text-balance sm:text-5xl">Talk to HavenNest.</h1>
      <p className="mt-4 max-w-xl text-sm text-muted">
        Ask about a project, a locality, or listing your own home. Advisors in this demo reply only inside the success state — nothing is sent to a server.
      </p>
      <button onClick={() => openLead("expert")} className="tap mt-6 h-11 rounded-pill bg-forest px-5 text-sm text-card">
        Talk to an Expert
      </button>
      <NoteForm label="Or write to us" storeKey="havennest-contact" />
    </article>
  );
}

function NoteForm({ label, storeKey }: { label: string; storeKey: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function submit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2) return setError("Enter your name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email");
    if (note.trim().length < 8) return setError("Add a short note");
    const existing = JSON.parse(localStorage.getItem(storeKey) || "[]") as unknown[];
    existing.push({ name, email, note, at: Date.now() });
    localStorage.setItem(storeKey, JSON.stringify(existing));
    setError("");
    setDone(true);
  }

  if (done) return <p className="mt-6 text-sm">Received. We have saved your note on this device.</p>;

  return (
    <form onSubmit={submit} className="mt-8 max-w-lg space-y-3" noValidate>
      <h2 className="font-sans text-lg font-semibold tracking-normal">{label}</h2>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Full name" className="h-12 w-full rounded-control border border-line bg-card px-3 text-sm outline-none" />
      <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="h-12 w-full rounded-control border border-line bg-card px-3 text-sm outline-none" />
      <textarea value={note} onChange={(event) => setNote(event.target.value)} placeholder="How can we help?" className="min-h-28 w-full rounded-control border border-line bg-card px-3 py-3 text-sm outline-none" />
      {error ? <p className="text-xs text-forest-soft">{error}</p> : null}
      <button className="tap h-11 rounded-pill bg-forest px-5 text-sm text-card">Send</button>
    </form>
  );
}

export function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 text-sm text-muted sm:px-6">
      <h1 className="text-4xl text-balance text-ink sm:text-5xl">Terms</h1>
      <p className="mt-4">
        HavenNest is a portfolio demonstration. Prices, floor areas, possession months and developer statistics are sample content for browsing the interface. They are not offers, advertisements or commitments by any developer named here.
      </p>
      <p className="mt-3">Do not use this demo to make a purchase decision. Confirm every detail on the developer's RERA page and with your own lawyer before you pay a booking amount.</p>
    </article>
  );
}

export function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 text-sm text-muted sm:px-6">
      <h1 className="text-4xl text-balance text-ink sm:text-5xl">Privacy</h1>
      <p className="mt-4">
        Forms on this demo — visits, enquiries, login and the newsletter — are stored in your browser's local storage. They are not uploaded to HavenNest or to a database.
      </p>
      <p className="mt-3">Clear the site data in your browser to remove saved homes, demo accounts and enquiries.</p>
    </article>
  );
}

export function SitemapPage() {
  const links = [
    ["Home", "/"],
    ["Buy", "/buy"],
    ["Rent", "/rent"],
    ["Projects", "/projects"],
    ["Commercial", "/commercial"],
    ["Locations", "/locations"],
    ["Insights", "/insights"],
    ["About", "/about"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
    ["Terms", "/terms"],
    ["Privacy", "/privacy"],
  ] as const;
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl text-balance sm:text-5xl">Sitemap</h1>
      <ul className="mt-6 space-y-2">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link to={href} className="text-sm hover:text-forest">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Link to="/buy" search={buySearch()} className="rounded-pill bg-chip px-3 py-1">
          Gurugram apartments
        </Link>
        <Link to="/projects" search={projectSearch()} className="rounded-pill bg-chip px-3 py-1">
          New projects
        </Link>
        <Link to="/rent" search={rentSearch()} className="rounded-pill bg-chip px-3 py-1">
          Homes for rent
        </Link>
      </div>
    </main>
  );
}
