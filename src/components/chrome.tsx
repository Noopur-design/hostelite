import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Heart,
  Home,
  Instagram,
  Linkedin,
  Menu,
  UserRound,
  X,
  Youtube,
} from "lucide-react";
import { useApp } from "@/components/app-state";
import { pageWindow } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { buySearch, commercialSearch, projectSearch, rentSearch } from "@/lib/search";

const NAV = [
  { label: "Buy", to: "/buy" as const, search: buySearch() },
  { label: "Rent", to: "/rent" as const, search: rentSearch() },
  { label: "Projects", to: "/projects" as const, search: projectSearch() },
  { label: "Commercial", to: "/commercial" as const, search: commercialSearch() },
  { label: "Locations", to: "/locations" as const },
  { label: "Insights", to: "/insights" as const },
];

export function Header() {
  const path = useRouterState({ select: (state) => state.location.pathname });
  const { user, openLogin, openLead, signOut } = useApp();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setAccountOpen(false);
  }, [path]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-card/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <Home className="size-5 shrink-0 text-forest" strokeWidth={1.75} />
          <span className="truncate font-serif text-lg tracking-tight sm:text-xl">HavenNest</span>
        </Link>
        <nav className="ml-4 hidden h-full min-w-0 items-center gap-4 lg:ml-6 lg:flex lg:gap-5 xl:gap-6">
          {NAV.map((item) => {
            const active = path === item.to || path.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.label}
                to={item.to}
                search={"search" in item ? item.search : undefined}
                className={cn(
                  "relative flex h-full items-center text-sm",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 -bottom-px h-0.5",
                    active ? "bg-ink" : "bg-transparent",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => openLead("list")}
            className="tap hidden h-10 items-center rounded-pill border border-line-strong px-4 text-sm sm:inline-flex"
          >
            List Property
          </button>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setAccountOpen((value) => !value)}
                className="tap inline-flex h-10 items-center gap-2 rounded-pill bg-forest px-4 text-sm text-card"
              >
                <UserRound className="size-4" />
                <span className="max-w-28 truncate">{user.name.split(" ")[0]}</span>
              </button>
              <div className={cn("menu menu-pop", accountOpen ? "menu-open" : "menu-closed")} aria-hidden={!accountOpen}>
                <button type="button" onClick={signOut} className="menu-item">
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={openLogin}
              className="tap inline-flex h-10 items-center gap-2 rounded-pill bg-forest px-4 text-sm text-card"
            >
              <span className="hidden sm:inline">Login / Sign Up</span>
              <UserRound className="size-4" />
            </button>
          )}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      <div className={cn("grid transition-[grid-template-rows] duration-200 lg:hidden", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-1 border-t border-line px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                search={"search" in item ? item.search : undefined}
                className="flex h-11 items-center text-sm"
              >
                {item.label}
              </Link>
            ))}
            <button onClick={() => openLead("list")} className="flex h-11 items-center text-sm">
              List Property
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  const { openLead, toast } = useApp();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function subscribe(event: React.FormEvent) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email");
      setDone(false);
      return;
    }
    const list = JSON.parse(localStorage.getItem("havennest-news") || "[]") as string[];
    localStorage.setItem("havennest-news", JSON.stringify([...list, email.trim()]));
    setError("");
    setDone(true);
    setEmail("");
    toast("You're on the list");
  }

  return (
    <footer className="w-full min-w-0 bg-forest-deep text-card">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-6 lg:gap-10 lg:py-14">
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <Home className="size-5" />
            <span className="font-serif text-xl">HavenNest</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-card/70">Homes. Investments. A Better Tomorrow.</p>
          <div className="mt-4 flex gap-2">
            <Social href="https://www.linkedin.com" label="LinkedIn">
              <Linkedin className="size-3.5" />
            </Social>
            <Social href="https://www.instagram.com" label="Instagram">
              <Instagram className="size-3.5" />
            </Social>
            <Social href="https://www.youtube.com" label="YouTube">
              <Youtube className="size-3.5" />
            </Social>
            <Social href="https://www.facebook.com" label="Facebook">
              <Facebook className="size-3.5" />
            </Social>
            <Social href="https://x.com" label="X">
              <span className="text-xs font-semibold">𝕏</span>
            </Social>
          </div>
        </div>
        <FooterCol title="Buy">
          <FooterLink to="/buy" search={buySearch({ type: "Apartment" })}>
            Apartments
          </FooterLink>
          <FooterLink to="/buy" search={buySearch({ type: "Villa", place: "" })}>
            Villas
          </FooterLink>
          <FooterLink to="/buy" search={buySearch({ type: "Builder Floor", place: "" })}>
            Builder Floors
          </FooterLink>
          <FooterLink to="/buy" search={buySearch({ type: "Plot", place: "" })}>
            Plots & Land
          </FooterLink>
          <FooterLink to="/projects" search={projectSearch()}>
            New Projects
          </FooterLink>
        </FooterCol>
        <FooterCol title="Rent">
          <FooterLink to="/rent" search={rentSearch()}>
            Residential
          </FooterLink>
          <FooterLink to="/commercial" search={commercialSearch()}>
            Commercial
          </FooterLink>
        </FooterCol>
        <FooterCol title="Locations">
          {["Gurugram", "Bengaluru", "Mumbai", "Hyderabad", "Delhi"].map((city) => (
            <FooterLink key={city} to="/buy" search={buySearch({ place: city, type: "Any" })}>
              {city}
            </FooterLink>
          ))}
        </FooterCol>
        <FooterCol title="Insights">
          <a href="/insights#market-trends" className="text-sm text-card/75 hover:text-card">
            Market Trends
          </a>
          <a href="/insights#locality-guide" className="text-sm text-card/75 hover:text-card">
            Locality Guide
          </a>
          <a href="/insights#buying-guide" className="text-sm text-card/75 hover:text-card">
            Buying Guide
          </a>
          <a href="/insights#real-estate-news" className="text-sm text-card/75 hover:text-card">
            Real Estate News
          </a>
        </FooterCol>
        <div className="col-span-2 min-w-0 lg:col-span-1">
          <p className="text-sm font-medium">Company</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link to="/about" className="text-sm text-card/75 hover:text-card">
              About Us
            </Link>
            <Link to="/careers" className="text-sm text-card/75 hover:text-card">
              Careers
            </Link>
            <Link to="/contact" className="text-sm text-card/75 hover:text-card">
              Contact Us
            </Link>
          </div>
          <p className="mt-6 text-sm font-medium">Stay updated</p>
          <p className="mt-2 text-sm text-card/70">Get the latest property insights and new launches in your inbox.</p>
          <form onSubmit={subscribe} className="mt-3 flex min-w-0 gap-2">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="h-11 min-w-0 flex-1 rounded-control bg-card px-3 text-sm text-ink outline-none"
            />
            <button aria-label="Subscribe" className="tap grid size-11 shrink-0 place-items-center rounded-control bg-gold text-forest">
              <ArrowRight className="size-4" />
            </button>
          </form>
          {error ? <p className="mt-2 text-xs text-gold">{error}</p> : null}
          {done ? <p className="mt-2 text-xs text-gold">You're on the list.</p> : null}
        </div>
      </div>
      <div className="border-t border-card/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-card/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 HavenNest. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-8 place-items-center rounded-full border border-card/20 text-card/80 hover:text-card"
    >
      {children}
    </a>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium">{title}</p>
      <div className="mt-3 flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FooterLink({
  to,
  search,
  children,
}: {
  to: "/buy" | "/rent" | "/projects" | "/commercial";
  search: unknown;
  children: ReactNode;
}) {
  return (
    <Link to={to} search={search as never} className="text-sm text-card/75 hover:text-card">
      {children}
    </Link>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setOn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", on && "reveal-in", className)}>
      {children}
    </div>
  );
}

export function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onPointer(event: MouseEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);
  function toggle() {
    if (!open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setUp(rect.bottom > window.innerHeight * 0.62);
    }
    setOpen((current) => !current);
  }
  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={toggle}
        className="flex h-14 w-full items-center justify-between rounded-control border border-line bg-card px-3 text-left"
      >
        <span>
          <span className="block text-xs text-muted">{label}</span>
          <span className="block text-sm">{value || "Any"}</span>
        </span>
        <ChevronDown className={cn("size-4 text-muted transition", open && "rotate-180")} />
      </button>
      <div className={cn("menu", up && "menu-up", open ? "menu-open" : "menu-closed")} role="listbox" aria-hidden={!open}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            role="option"
            aria-selected={option === value}
            data-active={option === value}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
            className="menu-item"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export function HeartButton({ slug, className }: { slug: string; className?: string }) {
  const { isSaved, toggleSaved } = useApp();
  const saved = isSaved(slug);
  return (
    <button
      type="button"
      aria-label={saved ? "Remove from saved" : "Save property"}
      aria-pressed={saved}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleSaved(slug);
      }}
      className={cn("grid size-9 place-items-center rounded-full bg-card/90 text-ink shadow-sm", className)}
    >
      <Heart className={cn("size-4 transition", saved && "fill-forest text-forest")} />
    </button>
  );
}

export function Pagination({
  page,
  total,
  onPage,
}: {
  page: number;
  total: number;
  onPage: (page: number) => void;
}) {
  if (total <= 1) return null;
  const items = pageWindow(page, total);
  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        aria-label="Previous page"
        disabled={page <= 1}
        onClick={() => onPage(page - 1)}
        className="grid size-10 place-items-center rounded-lg text-ink disabled:opacity-30"
      >
        <ChevronLeft className="size-4" />
      </button>
      {items.map((item, index) =>
        item === "…" ? (
          <span key={`gap-${index}`} className="px-1 text-muted">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onPage(item)}
            className={cn(
              "grid size-10 place-items-center rounded-lg text-sm",
              item === page ? "bg-forest text-card" : "text-ink hover:bg-chip",
            )}
          >
            {item}
          </button>
        ),
      )}
      <button
        aria-label="Next page"
        disabled={page >= total}
        onClick={() => onPage(page + 1)}
        className="grid size-10 place-items-center rounded-lg text-ink disabled:opacity-30"
      >
        <ChevronRight className="size-4" />
      </button>
    </div>
  );
}

export async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = value;
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}
