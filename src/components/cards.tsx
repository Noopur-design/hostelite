import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Bath, BedDouble, MapPin, Calendar, Home } from "lucide-react";
import { HeartButton } from "@/components/chrome";
import { formatArea, formatCr, formatRent, type Listing } from "@/data/catalog";
import { useApp } from "@/components/app-state";
import { cn } from "@/lib/cn";

function statusClass(status: Listing["status"]) {
  if (status === "New Launch") return "bg-gold text-ink";
  return "bg-forest text-card";
}

export function ProjectCard({ listing }: { listing: Listing }) {
  return (
    <article className="group lift relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-card">
      <Link to="/property/$slug" params={{ slug: listing.slug }} className="relative block h-48 overflow-hidden">
        <img src={listing.images[0]} alt={listing.name} className="zoom-img h-full w-full object-cover" />
        <span className={cn("absolute top-3 left-3 rounded-pill px-3 py-1 text-xs", statusClass(listing.status))}>
          {listing.status}
        </span>
      </Link>
      <HeartButton slug={listing.slug} className="absolute top-3 right-3" />
      <div className="relative flex flex-1 flex-col p-4">
        <Link to="/property/$slug" params={{ slug: listing.slug }} className="font-medium">
          {listing.name}
        </Link>
        <p className="text-sm text-muted">{listing.developer}</p>
        <p className="mt-3 flex items-center gap-1 text-sm text-muted">
          <MapPin className="size-3.5" /> {listing.address}
        </p>
        <p className="mt-2 text-sm font-semibold">{formatCr(listing.priceCr)} Onwards</p>
        <p className="mt-2 flex items-center gap-1 text-sm text-muted">
          <Home className="size-3.5" /> {listing.bhkLabel}
        </p>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted">
          <Calendar className="size-3.5" /> {listing.possession}
        </p>
        <Link
          to="/property/$slug"
          params={{ slug: listing.slug }}
          aria-label={`View ${listing.name}`}
          className="absolute right-4 bottom-4 grid size-9 place-items-center rounded-full bg-forest text-card"
        >
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

export function ListingRow({ listing }: { listing: Listing }) {
  const { openLead } = useApp();
  const badge = listing.status === "New Launch" ? "New Launch" : "Verified";
  return (
    <article className="group overflow-hidden rounded-card border border-line bg-card">
      <div className="grid sm:grid-cols-[minmax(0,220px)_minmax(0,1fr)] lg:grid-cols-[300px_minmax(0,1fr)]">
        <Link to="/property/$slug" params={{ slug: listing.slug }} className="relative block h-52 overflow-hidden sm:h-full">
          <img src={listing.images[0]} alt={listing.name} className="zoom-img h-full w-full object-cover" />
          <span className={cn("absolute top-3 left-3 inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs", badge === "New Launch" ? "bg-gold text-ink" : "bg-forest text-card")}>
            {badge === "Verified" ? <BadgeCheck className="size-3.5" /> : null}
            {badge}
          </span>
          <span className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1">
            {listing.images.slice(0, 4).map((image, index) => (
              <span key={image} className={cn("size-1.5 rounded-full", index === 0 ? "bg-card" : "bg-card/50")} />
            ))}
          </span>
        </Link>
        <div className="relative min-w-0 p-4 sm:p-5">
          <HeartButton slug={listing.slug} className="absolute top-4 right-4" />
          <Link to="/property/$slug" params={{ slug: listing.slug }} className="block pr-10">
            <h3 className="font-sans text-lg font-semibold tracking-normal">{listing.title}</h3>
            <p className="font-medium">{listing.name}</p>
          </Link>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted">
            <MapPin className="size-3.5" /> {listing.address}
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            {listing.intent === "rent" ? (
              <p className="font-serif text-3xl leading-none">
                {formatRent(listing.rentMonthly)}
                <span className="ml-1 font-sans text-sm text-muted">/ month</span>
              </p>
            ) : (
              <>
                <p className="font-serif text-3xl leading-none">{formatCr(listing.priceCr)}</p>
                <p className="text-sm text-muted">₹ {listing.pricePerSqft.toLocaleString("en-IN")} / sq.ft.</p>
              </>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted">
            {listing.bhk > 0 ? (
              <span className="inline-flex items-center gap-1">
                <BedDouble className="size-4" /> {listing.bhk} BHK
              </span>
            ) : null}
            {listing.baths > 0 && listing.type !== "Commercial" ? (
              <span className="inline-flex items-center gap-1">
                <Bath className="size-4" /> {listing.baths} Baths
              </span>
            ) : null}
            <span>{formatArea(listing.area)}</span>
            <span>{listing.status}</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {listing.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-pill bg-chip px-3 py-1 text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <button
              onClick={() => openLead("enquire", listing.name)}
              className="tap h-11 rounded-control border border-line-strong px-3 text-sm sm:px-5"
            >
              Enquire
            </button>
            <Link
              to="/property/$slug"
              params={{ slug: listing.slug }}
              className="tap inline-flex h-11 items-center justify-center rounded-control bg-forest px-3 text-sm text-card sm:px-5"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function FeaturedCard({ listing }: { listing: Listing }) {
  return (
    <article className="group lift relative overflow-hidden rounded-card border border-line bg-card">
      <Link to="/property/$slug" params={{ slug: listing.slug }} className="relative block h-52 overflow-hidden">
        <img src={listing.images[0]} alt={listing.name} className="zoom-img h-full w-full object-cover" />
        <span className={cn("absolute top-3 left-3 inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs", listing.status === "New Launch" ? "bg-gold text-ink" : "bg-forest text-card")}>
          {listing.status === "New Launch" ? "New Launch" : "Verified"}
        </span>
      </Link>
      <HeartButton slug={listing.slug} className="absolute top-3 right-3" />
      <div className="relative p-4">
        <p className="font-serif text-2xl">{listing.intent === "rent" ? formatRent(listing.rentMonthly) : formatCr(listing.priceCr)}</p>
        <Link to="/property/$slug" params={{ slug: listing.slug }} className="mt-1 block text-sm font-medium">
          {listing.title}
        </Link>
        <p className="text-sm text-muted">{listing.address}</p>
        <div className="mt-3 flex gap-3 text-xs text-muted">
          <span>{formatArea(listing.area)}</span>
          {listing.bhk > 0 ? <span>{listing.bhk} Beds</span> : null}
          {listing.baths > 0 ? <span>{listing.baths} Baths</span> : null}
        </div>
      </div>
    </article>
  );
}
