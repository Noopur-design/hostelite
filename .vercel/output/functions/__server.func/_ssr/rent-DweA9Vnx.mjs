import { C as require_jsx_runtime, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as CalendarClock, X as ArrowRight, q as BadgeCheck, w as KeyRound } from "../_libs/lucide-react.mjs";
import { n as ListingRow, r as ProjectCard } from "./cards-CUyehkeq.mjs";
import { L as formatRent, M as filterHomes, N as filterProjects, Q as useApp, S as Pagination, T as SelectField, V as localitiesFor, W as paginate, Y as resolveCity, p as CITY_NAMES, q as projectSearch, r as Route$3, u as BUY_SORTS, w as Reveal } from "./router-SCxekiOa.mjs";
import { t as SearchBar } from "./search-bar-Cl2zPhzG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rent-DweA9Vnx.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		icon: KeyRound,
		title: "Verified homes",
		body: "Every rental is checked for possession, society and a real monthly rent."
	},
	{
		icon: CalendarClock,
		title: "Move-in ready",
		body: "Ready apartments, villas and floors — not a brochure you wait years for."
	},
	{
		icon: BadgeCheck,
		title: "A clear shortlist",
		body: "Compare area, furnishing and locality without calling ten brokers."
	}
];
function RentPage({ search, onSearch }) {
	const { openLead } = useApp();
	const city = resolveCity(search.place);
	const localities = localitiesFor(search.place);
	const items = filterHomes("rent", search);
	const { slice, total, current } = paginate(items, search.page, 6);
	const projects = filterProjects(projectSearch({
		place: city || "Any",
		type: "Any",
		status: "all"
	})).slice(0, 4);
	const where = city || (search.place && search.place !== "Any" ? search.place : "India");
	const rents = items.map((item) => item.rentMonthly).filter((value) => value > 0);
	const from = rents.length ? Math.min(...rents) : 0;
	function setCity(next) {
		onSearch({
			...search,
			place: next,
			locality: "",
			page: 1
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative hero-frame",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/living-a.jpg",
					alt: "Furnished living room ready to rent",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex hero-frame max-w-7xl flex-col justify-center px-4 py-12 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-card/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "hover:text-card",
									children: "Home"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2",
									children: "/"
								}),
								"Rent",
								city ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2",
									children: "/"
								}), city] }) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-in mt-4 max-w-2xl text-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-card/80",
									children: "HOMES FOR RENT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 text-4xl text-balance sm:text-5xl lg:text-6xl",
									children: "A home you can move into this month."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 max-w-lg text-sm text-card/85 sm:text-base",
									children: [
										"Verified apartments, villas and builder floors across ",
										where === "India" ? "India's prime cities" : where,
										".",
										from ? ` Rents from ${formatRent(from)} a month.` : ""
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
								tab: "Rent",
								place: search.place,
								type: search.type,
								budget: search.budget
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex gap-2 overflow-x-auto pb-1",
							children: CITY_NAMES.map((name) => {
								const active = city === name;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setCity(active ? "" : name),
									className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-card bg-card text-ink" : "border-card/35 bg-forest-deep/25 text-card"}`,
									children: name
								}, name);
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-line bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3",
				children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
						className: "size-6 shrink-0 text-forest",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-base font-semibold tracking-normal",
						children: step.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: step.body
					})] })]
				}, step.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-4xl",
						children: ["Homes for rent ", city ? `in ${city}` : "across India"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [items.length.toLocaleString("en-IN"), " verified rentals match this search."]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full sm:w-64",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
							label: "Sort by",
							value: BUY_SORTS.find((item) => item.id === search.sort)?.label ?? "Relevance",
							options: BUY_SORTS.map((item) => item.label),
							onChange: (label) => {
								const match = BUY_SORTS.find((item) => item.label === label);
								onSearch({
									...search,
									sort: match?.id ?? "relevance",
									page: 1
								});
							}
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex gap-2 overflow-x-auto pb-1",
					children: [
						"Any",
						"Apartment",
						"Villa",
						"Builder Floor"
					].map((type) => {
						const active = (search.type || "Any") === type;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSearch({
								...search,
								type,
								page: 1
							}),
							className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-forest bg-forest text-card" : "border-line bg-card"}`,
							children: type === "Any" ? "All types" : type === "Builder Floor" ? "Floors" : `${type}s`
						}, type);
					})
				}),
				localities.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 self-center text-sm text-muted",
						children: "Localities"
					}), localities.map((locality) => {
						const active = search.locality === locality || search.place.toLowerCase() === locality.toLowerCase();
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSearch({
								...search,
								locality: active ? "" : locality,
								place: city || search.place,
								page: 1
							}),
							className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-ink bg-ink text-card" : "border-line bg-card"}`,
							children: locality
						}, locality);
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "Choose a city to see its localities."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: slice.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-line bg-card px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl",
								children: "No rentals match these filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Try another city, locality or a wider budget."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => onSearch({
									...search,
									locality: "",
									type: "Any",
									budget: "Any",
									place: city,
									page: 1
								}),
								className: "tap mt-5 h-11 rounded-pill bg-forest px-5 text-sm text-card",
								children: "Clear filters"
							})
						]
					}) : slice.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingRow, { listing }, listing.slug))
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
					children: "IF YOU WOULD RATHER BUY"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 text-3xl sm:text-4xl",
					children: ["Projects in ", city || "these cities"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					search: projectSearch({ place: city || "Any" }),
					className: "inline-flex items-center gap-1 text-sm",
					children: ["View all projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "No projects in this location yet. Try another city."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: projects.map((listing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index % 4 * 50,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { listing })
				}, listing.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl overflow-hidden rounded-card px-4 pb-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/living-c.jpg",
				alt: "",
				className: "h-64 w-full object-cover sm:h-72 lg:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-forest px-6 py-12 text-card sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-card/70",
						children: "NEED A SHORTLIST?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-md text-3xl sm:text-4xl",
						children: "Tell us the city, budget and move-in date."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-card/75",
						children: "A HavenNest expert will send rentals that fit — not a generic dump of ads."
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
function RentRoute() {
	const search = Route$3.useSearch();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RentPage, {
		search,
		onSearch: (next) => {
			navigate({
				to: "/rent",
				search: next
			});
		}
	});
}
//#endregion
export { RentRoute as component };
