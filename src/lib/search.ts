export type BuySearch = {
  place: string;
  type: string;
  budget: string;
  locality: string;
  sort: string;
  page: number;
};

export type ProjectSearch = {
  place: string;
  type: string;
  budget: string;
  possession: string;
  status: string;
  sort: string;
  developer: string;
  page: number;
};

function pageOf(value: unknown) {
  const page = Number(value);
  return Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
}

export function buySearch(partial: Partial<BuySearch> = {}): BuySearch {
  return {
    place: "Gurugram",
    type: "Apartment",
    budget: "Any",
    locality: "",
    sort: "relevance",
    page: 1,
    ...partial,
  };
}

export function rentSearch(partial: Partial<BuySearch> = {}): BuySearch {
  return buySearch({ place: "Gurugram", type: "Any", ...partial });
}

export function commercialSearch(partial: Partial<BuySearch> = {}): BuySearch {
  return buySearch({ place: "Gurugram", type: "Any", ...partial });
}

export function projectSearch(partial: Partial<ProjectSearch> = {}): ProjectSearch {
  return {
    place: "Gurugram",
    type: "Any",
    budget: "Any",
    possession: "Any",
    status: "all",
    sort: "featured",
    developer: "",
    page: 1,
    ...partial,
  };
}

export function parseBuySearch(search: Record<string, unknown>, fallback: BuySearch): BuySearch {
  return buySearch({
    ...fallback,
    place: typeof search.place === "string" ? search.place : fallback.place,
    type: typeof search.type === "string" ? search.type : fallback.type,
    budget: typeof search.budget === "string" ? search.budget : fallback.budget,
    locality: typeof search.locality === "string" ? search.locality : fallback.locality,
    sort: typeof search.sort === "string" ? search.sort : fallback.sort,
    page: search.page == null ? fallback.page : pageOf(search.page),
  });
}

export function parseProjectSearch(search: Record<string, unknown>): ProjectSearch {
  const base = projectSearch();
  return projectSearch({
    place: typeof search.place === "string" ? search.place : base.place,
    type: typeof search.type === "string" ? search.type : base.type,
    budget: typeof search.budget === "string" ? search.budget : base.budget,
    possession: typeof search.possession === "string" ? search.possession : base.possession,
    status: typeof search.status === "string" ? search.status : base.status,
    sort: typeof search.sort === "string" ? search.sort : base.sort,
    developer: typeof search.developer === "string" ? search.developer : base.developer,
    page: search.page == null ? 1 : pageOf(search.page),
  });
}
