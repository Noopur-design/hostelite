import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as ArrowRight, x as MapPin } from "../_libs/lucide-react.mjs";
import { n as ListingRow, r as ProjectCard } from "./cards-CUyehkeq.mjs";
import { E as buySearch, M as filterHomes, N as filterProjects, Q as useApp, S as Pagination, T as SelectField, V as localitiesFor, W as paginate, Y as resolveCity, _ as LOGO_DEVELOPER, b as PROJECT_TYPES, f as CITY_GEO, i as Route$4, l as BUY_BUDGETS, m as DEVELOPER_LOGOS, p as CITY_NAMES, v as POSSESSION_OPTIONS, w as Reveal, y as PROJECT_SORTS } from "./router-SCxekiOa.mjs";
import { t as SearchBar } from "./search-bar-Cl2zPhzG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Ckp19t_i.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "all",
		label: "All Projects"
	},
	{
		id: "ready",
		label: "Ready to Move"
	},
	{
		id: "uc",
		label: "Under Construction"
	},
	{
		id: "new",
		label: "New Launch"
	}
];
function ProjectsPage({ search, onSearch }) {
	const { openLead, openMap } = useApp();
	const [draft, setDraft] = (0, import_react.useState)(search);
	(0, import_react.useEffect)(() => setDraft(search), [search]);
	const base = filterProjects({
		...search,
		status: "all"
	});
	const counts = {
		all: base.length,
		ready: base.filter((item) => item.status === "Ready to Move").length,
		uc: base.filter((item) => item.status === "Under Construction").length,
		new: base.filter((item) => item.status === "New Launch").length
	};
	const filtered = filterProjects(search);
	const { slice, total, current } = paginate(filtered, search.page, 8);
	const city = resolveCity(search.place);
	const placeLabel = !search.place || search.place === "Any" ? "India" : search.place;
	const localities = localitiesFor(city || search.place);
	const homes = filterHomes("buy", buySearch({
		place: !search.place || search.place === "Any" ? "" : search.place,
		type: "Any",
		budget: search.budget,
		locality: ""
	})).slice(0, 3);
	function applyPlace(place) {
		const next = {
			...draft,
			place,
			page: 1
		};
		setDraft(next);
		onSearch({
			...search,
			...next,
			developer: "",
			page: 1
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative hero-frame",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-projects.jpg",
					alt: "Evening terrace of a luxury residence",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/35 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex hero-frame max-w-7xl flex-col justify-center px-4 py-12 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-in max-w-xl text-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-card/80",
								children: "PREMIUM PROJECTS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-4xl text-balance sm:text-5xl lg:text-6xl",
								children: "Discover tomorrow's landmarks today."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm text-card/85",
								children: "Curated new launches from India's most trusted developers in prime locations."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							tab: "Projects",
							place: search.place === "Any" ? "" : search.place,
							type: search.type,
							budget: search.budget,
							showTabs: false
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs tracking-widest text-muted",
					children: "TRUSTED DEVELOPERS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-between",
					children: DEVELOPER_LOGOS.map((logo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onSearch({
							...search,
							developer: LOGO_DEVELOPER[logo] ?? "",
							place: "Any",
							status: "all",
							page: 1
						}),
						className: "font-serif text-lg tracking-wide text-muted transition hover:text-ink",
						children: logo
					}, logo))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-12 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl text-balance sm:text-4xl",
						children: ["New Projects in ", placeLabel]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							const geo = CITY_GEO[search.place] ?? CITY_GEO.Gurugram;
							openMap(`Projects in ${placeLabel}`, geo.lat, geo.lon);
						},
						className: "inline-flex items-center gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), " View on Map"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Location",
							value: draft.place || "Any",
							options: ["Any", ...CITY_NAMES],
							onChange: applyPlace
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Price Range",
							value: draft.budget,
							options: BUY_BUDGETS.map((item) => item.id),
							onChange: (budget) => setDraft({
								...draft,
								budget
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Project Type",
							value: draft.type,
							options: PROJECT_TYPES,
							onChange: (type) => setDraft({
								...draft,
								type
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Possession",
							value: draft.possession,
							options: POSSESSION_OPTIONS,
							onChange: (possession) => setDraft({
								...draft,
								possession
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSearch({
								...draft,
								status: search.status,
								developer: search.developer,
								page: 1
							}),
							className: "tap h-14 rounded-control bg-forest px-5 text-sm text-card sm:col-span-2 lg:col-span-1",
							children: "Apply Filters"
						})
					]
				}),
				search.developer ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => onSearch({
						...search,
						developer: "",
						page: 1
					}),
					className: "mt-4 rounded-pill bg-chip px-3 py-1 text-sm",
					children: [search.developer, " ×"]
				}) : null,
				localities.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-1",
					children: localities.map((locality) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => applyPlace(locality),
						className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${search.place === locality ? "border-ink bg-ink text-card" : "border-line bg-card"}`,
						children: locality
					}, locality))
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col gap-4 border-b border-line lg:flex-row lg:items-end lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-5 overflow-auto",
						children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onSearch({
								...search,
								status: tab.id,
								page: 1
							}),
							className: `shrink-0 border-b-2 pb-3 text-sm ${search.status === tab.id ? "border-ink text-ink" : "border-transparent text-muted"}`,
							children: [
								tab.label,
								" (",
								counts[tab.id],
								")"
							]
						}, tab.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 w-full sm:w-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Sort",
							value: PROJECT_SORTS.find((item) => item.id === search.sort)?.label ?? "Featured",
							options: PROJECT_SORTS.map((item) => item.label),
							onChange: (label) => {
								const match = PROJECT_SORTS.find((item) => item.label === label);
								onSearch({
									...search,
									sort: match?.id ?? "featured",
									page: 1
								});
							}
						})
					})]
				}),
				slice.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 rounded-card border border-line bg-card px-6 py-16 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-3xl",
						children: "No projects match"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Widen the budget or clear possession."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: slice.map((listing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index % 4 * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { listing })
					}, listing.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pagination, {
					page: current,
					total,
					onPage: (page) => onSearch({
						...search,
						page
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted",
					children: "LISTINGS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 text-3xl sm:text-4xl",
					children: ["Homes for sale in ", placeLabel]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/buy",
					search: buySearch({
						place: city || "",
						type: "Any"
					}),
					className: "inline-flex items-center gap-1 text-sm",
					children: ["View all listings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), homes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "No listings in this location yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-4",
				children: homes.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingRow, { listing }, listing.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/living-d.jpg",
				alt: "",
				className: "h-72 w-full object-cover lg:h-96"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-forest px-6 py-12 text-card sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-card/70",
						children: "PERSONALISED SUPPORT"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-md text-4xl",
						children: "Looking for something specific?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-card/75",
						children: "Our real estate experts will help you find the right project as per your needs, budget and timeline."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openLead("expert"),
						className: "tap mt-6 h-11 w-fit rounded-pill bg-gold px-5 text-sm text-forest",
						children: "Talk to an Expert →"
					})
				]
			})]
		})
	] });
}
function ProjectsRoute() {
	const search = Route$4.useSearch();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsPage, {
		search,
		onSearch: (next) => {
			navigate({
				to: "/projects",
				search: next
			});
		}
	});
}
//#endregion
export { ProjectsRoute as component };
