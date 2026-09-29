import { useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { SelectField } from "@/components/chrome";
import { BUY_BUDGETS, CITY_LOCALITIES, CITY_NAMES, resolveCity, RENT_BUDGETS } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { buySearch, commercialSearch, projectSearch, rentSearch } from "@/lib/search";

export type SearchTab = "Buy" | "Rent" | "Projects" | "Commercial";

const TYPE_OPTIONS: Record<SearchTab, string[]> = {
  Buy: ["Any", "Apartment", "Villa", "Builder Floor", "Plot"],
  Rent: ["Any", "Apartment", "Villa", "Builder Floor"],
  Projects: ["Any", "Apartment", "Villa", "Commercial", "Plot"],
  Commercial: ["Any", "Office", "Retail"],
};

export function SearchBar({
  tab,
  place,
  type,
  budget,
  showTabs = true,
  showCities = false,
  onTab,
  compact = false,
}: {
  tab: SearchTab;
  place: string;
  type: string;
  budget: string;
  showTabs?: boolean;
  showCities?: boolean;
  onTab?: (tab: SearchTab) => void;
  compact?: boolean;
}) {
  const navigate = useNavigate();
  const [draftPlace, setDraftPlace] = useState(place);
  const [draftType, setDraftType] = useState(type);
  const [draftBudget, setDraftBudget] = useState(budget);
  const budgets = tab === "Rent" ? RENT_BUDGETS : BUY_BUDGETS;
  const activeCity = resolveCity(draftPlace);

  useEffect(() => {
    setDraftPlace(place);
    setDraftType(type);
    setDraftBudget(budget);
  }, [place, type, budget, tab]);

  function go(nextTab: SearchTab, nextPlace: string, nextType: string, nextBudget: string) {
    if (nextTab === "Rent") {
      void navigate({ to: "/rent", search: rentSearch({ place: nextPlace, type: nextType, budget: nextBudget, page: 1, locality: "" }) });
      return;
    }
    if (nextTab === "Projects") {
      void navigate({
        to: "/projects",
        search: projectSearch({ place: nextPlace || "Any", type: nextType, budget: nextBudget, page: 1 }),
      });
      return;
    }
    if (nextTab === "Commercial") {
      void navigate({
        to: "/commercial",
        search: commercialSearch({ place: nextPlace, type: nextType, budget: nextBudget, page: 1, locality: "" }),
      });
      return;
    }
    void navigate({ to: "/buy", search: buySearch({ place: nextPlace, type: nextType, budget: nextBudget, page: 1, locality: "" }) });
  }

  function commitPlace(nextPlace: string) {
    setDraftPlace(nextPlace);
    if (nextPlace.trim() === place.trim()) return;
    go(tab, nextPlace, draftType, draftBudget);
  }

  return (
    <div>
      <form
        className={cn("rounded-card bg-card p-3 shadow-lg", compact && "shadow-md")}
        onSubmit={(event) => {
          event.preventDefault();
          go(tab, draftPlace, draftType, draftBudget);
        }}
      >
        {showTabs ? (
          <div className="mb-3 flex max-w-full gap-1 overflow-x-auto rounded-pill bg-chip p-1">
            {(["Buy", "Rent", "Projects", "Commercial"] as SearchTab[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  onTab?.(item);
                  setDraftType("Any");
                  setDraftBudget("Any");
                  if (onTab == null) go(item, draftPlace, "Any", "Any");
                }}
                className={cn(
                  "shrink-0 rounded-pill px-3 py-2 text-sm transition sm:px-4",
                  tab === item ? "bg-forest text-card" : "text-ink hover:bg-card",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        ) : null}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)_auto]">
          <PlaceField value={draftPlace} onChange={setDraftPlace} onPick={commitPlace} />
          <SelectField label={tab === "Projects" ? "Project Type" : "Property Type"} value={draftType} options={TYPE_OPTIONS[tab]} onChange={setDraftType} />
          <SelectField label="Budget" value={draftBudget} options={budgets.map((item) => item.id)} onChange={setDraftBudget} />
          <button type="submit" className="tap inline-flex h-12 items-center justify-center gap-2 rounded-control bg-forest px-6 text-sm text-card sm:col-span-2 sm:h-14 lg:col-span-1">
            Search <Search className="size-4" />
          </button>
        </div>
      </form>
      {showCities ? (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {CITY_NAMES.map((name) => {
            const active = activeCity === name;
            return (
              <button
                key={name}
                type="button"
                onClick={() => commitPlace(active ? "" : name)}
                className={cn(
                  "shrink-0 rounded-pill border px-3 py-2 text-sm",
                  active ? "border-card bg-card text-ink" : "border-card/30 bg-forest-deep/25 text-card",
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

function PlaceField({
  value,
  onChange,
  onPick,
}: {
  value: string;
  onChange: (value: string) => void;
  onPick: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const needle = value.trim().toLowerCase();
  const exact =
    CITY_NAMES.some((city) => city.toLowerCase() === needle) ||
    Object.values(CITY_LOCALITIES).some((names) => names.some((name) => name.toLowerCase() === needle));
  const query = exact ? "" : needle;
  const cities = CITY_NAMES.filter((city) => !query || city.toLowerCase().includes(query));
  const localities = Object.entries(CITY_LOCALITIES).flatMap(([city, names]) =>
    names
      .filter((name) => !query || name.toLowerCase().includes(query) || city.toLowerCase().includes(query))
      .map((name) => ({ name, city })),
  );

  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, []);

  function placeMenu(next: boolean) {
    if (next && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setUp(rect.bottom > window.innerHeight * 0.62);
    }
    setOpen(next);
  }

  return (
    <div ref={ref} className="relative min-w-0 sm:col-span-2 lg:col-span-1">
      <div className="flex h-14 items-center gap-2 rounded-control border border-line bg-card px-3">
        <MapPin className="size-4 shrink-0 text-muted" />
        <input
          value={value}
          onChange={(event) => {
            const next = event.target.value;
            onChange(next);
            placeMenu(true);
            const match = CITY_NAMES.find((city) => city.toLowerCase() === next.trim().toLowerCase());
            if (match) onPick(match);
          }}
          onFocus={() => placeMenu(true)}
          placeholder="Enter location, city or locality"
          autoComplete="off"
          aria-expanded={open}
          aria-autocomplete="list"
          className="w-full bg-transparent text-sm outline-none placeholder:text-faint"
        />
        <button
          type="button"
          aria-label={open ? "Hide locations" : "Show locations"}
          onClick={() => placeMenu(!open)}
          className="grid size-8 shrink-0 place-items-center text-muted"
        >
          <ChevronDown className={cn("size-4 transition", open && "rotate-180")} />
        </button>
      </div>
      <div className={cn("menu", up && "menu-up", open ? "menu-open" : "menu-closed")} role="listbox" aria-hidden={!open}>
        {cities.length ? (
          <>
            <p className="menu-label">Cities</p>
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                role="option"
                aria-selected={value === city}
                data-active={value === city}
                onClick={() => {
                  onPick(city);
                  setOpen(false);
                }}
                className="menu-item"
              >
                {city}
              </button>
            ))}
          </>
        ) : null}
        {localities.length ? (
          <>
            <p className="menu-label">Localities</p>
            {localities.map((item) => (
              <button
                key={`${item.city}-${item.name}`}
                type="button"
                role="option"
                aria-selected={value === item.name}
                data-active={value === item.name}
                onClick={() => {
                  onPick(item.name);
                  setOpen(false);
                }}
                className="menu-item"
              >
                <span className="min-w-0 flex-1">{item.name}</span>
                <span className="text-xs text-muted">{item.city}</span>
              </button>
            ))}
          </>
        ) : null}
        {cities.length === 0 && localities.length === 0 ? <p className="menu-empty">No matching locations</p> : null}
      </div>
    </div>
  );
}
