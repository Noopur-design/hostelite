import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as ListingRow, r as ProjectCard } from "./cards-CUyehkeq.mjs";
import { M as filterHomes, N as filterProjects, Q as useApp, S as Pagination, T as SelectField, V as localitiesFor, W as paginate, Y as resolveCity, p as CITY_NAMES, q as projectSearch, u as BUY_SORTS, w as Reveal } from "./router-SCxekiOa.mjs";
import { t as SearchBar } from "./search-bar-Cl2zPhzG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/listing-page-D-kZ8Tl5.js
var import_jsx_runtime = require_jsx_runtime();
var TAB = {
	buy: "Buy",
	rent: "Rent",
	commercial: "Commercial"
};
function titleFor(intent, type, place) {
	const city = resolveCity(place);
	const where = city ? `in ${city}` : place && place !== "Any" ? `in ${place}` : "across India";
	if (intent === "rent") return `Homes for rent ${where}`;
	if (intent === "commercial") {
		if (type === "Retail") return `Retail spaces ${where}`;
		if (type === "Office") return `Offices ${where}`;
		return `Commercial spaces ${where}`;
	}
	if (type === "Apartment") return `Apartments ${where}`;
	if (type === "Villa") return `Villas ${where}`;
	if (type === "Plot") return `Plots & land ${where}`;
	if (type === "Builder Floor") return `Builder floors ${where}`;
	return `Properties ${where}`;
}
function ListingPage({ intent, search, onSearch }) {
	const { openLead } = useApp();
	const items = filterHomes(intent, search);
	const { slice, total, current } = paginate(items, search.page, 5);
	const city = resolveCity(search.place);
	const localities = localitiesFor(city || search.place);
	const heading = titleFor(intent, search.type, search.place);
	const crumb = intent === "rent" ? "Rent" : intent === "commercial" ? "Commercial" : "Buy";
	const projects = filterProjects(projectSearch({
		place: city || "Any",
		type: intent === "commercial" ? "Commercial" : search.type === "Any" ? "Any" : search.type,
		status: "all"
	})).slice(0, 4);
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
					src: "/images/hero-list.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/45 to-forest-deep/15" }),
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
								crumb,
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
									children: crumb.toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-3 text-4xl text-balance sm:text-5xl",
									children: heading
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-card/80",
									children: [
										items.length.toLocaleString("en-IN"),
										" verified ",
										heading.toLowerCase()
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
								tab: TAB[intent],
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
									className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${active ? "border-card bg-card text-ink" : "border-card/30 bg-forest-deep/20 text-card"}`,
									children: name
								}, name);
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl text-balance sm:text-4xl",
						children: [
							items.length.toLocaleString("en-IN"),
							" ",
							heading
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
				localities.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 self-center text-sm text-muted",
						children: ["Localities in ", city]
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
					className: "mt-4 text-sm text-muted",
					children: "Pick a city to see its localities. Listings update with the city."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 space-y-4",
					children: slice.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-card border border-line bg-card px-6 py-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-3xl",
								children: "No homes match these filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: "Try another locality, budget or property type."
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
			className: "mx-auto max-w-7xl px-4 pb-12 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted",
					children: "PROJECTS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 text-3xl sm:text-4xl",
					children: ["New projects in ", city || "India"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					search: projectSearch({ place: city || "Any" }),
					className: "inline-flex items-center gap-1 text-sm",
					children: ["View all projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-muted",
				children: "No projects in this location. Choose another city."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: projects.map((listing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index % 4 * 40,
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
						children: "LOOKING FOR SOMETHING SPECIFIC?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-md text-3xl sm:text-4xl",
						children: "Get personalised property recommendations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-card/75",
						children: "Tell us your requirements and our experts will help you find the best options."
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
//#endregion
export { ListingPage as t };
