import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as ChevronRight, I as ChevronLeft, M as FileText, X as ArrowRight, Y as ArrowUpRight, m as ShieldCheck, o as Users, z as ChartNoAxesCombined } from "../_libs/lucide-react.mjs";
import { t as FeaturedCard } from "./cards-CUyehkeq.mjs";
import { B as launchProjects, E as buySearch, I as formatCr, J as rentSearch, O as commercialSearch, Q as useApp, d as CITIES, g as LISTINGS, p as CITY_NAMES, q as projectSearch, w as Reveal, x as PROPERTY_TYPES, z as homeFeatured } from "./router-SCxekiOa.mjs";
import { t as SearchBar } from "./search-bar-Cl2zPhzG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D8BWQ6Qx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WHY = [
	{
		icon: ShieldCheck,
		title: "Verified Properties",
		body: "Authentic listings, no fake ads"
	},
	{
		icon: ChartNoAxesCombined,
		title: "Market Insights",
		body: "Data-driven decisions for better value"
	},
	{
		icon: Users,
		title: "Expert Guidance",
		body: "Personalised support at every step"
	},
	{
		icon: FileText,
		title: "Hassle-free Process",
		body: "End-to-end assistance from search to papers"
	}
];
function HomePage() {
	const [city, setCity] = (0, import_react.useState)("");
	const featured = (0, import_react.useMemo)(() => {
		const pool = LISTINGS.filter((item) => item.intent === "buy" && !item.parentSlug && (!city || item.city === city));
		if (!city) return homeFeatured();
		const starred = pool.filter((item) => item.homeFeatured || item.featured);
		return (starred.length ? starred : pool).slice(0, 3);
	}, [city]);
	const launches = (0, import_react.useMemo)(() => {
		const slides = launchProjects();
		if (!city) return slides;
		const local = slides.filter((item) => item.city === city);
		if (local.length) return local;
		return LISTINGS.filter((item) => item.showOnProjects && item.city === city);
	}, [city]);
	const [slide, setSlide] = (0, import_react.useState)(0);
	const current = launches[slide % Math.max(launches.length, 1)];
	const { openLead } = useApp();
	const placeLabel = city || "India";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative hero-frame",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-home.jpg",
					alt: "Sunlit living room overlooking a city skyline",
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/45 to-forest-deep/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex hero-frame max-w-7xl flex-col justify-center px-4 py-12 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-in max-w-xl text-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-card/80",
								children: "REAL ESTATE, REIMAGINED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-lg text-4xl text-balance sm:text-5xl lg:text-6xl",
								children: "Find a place worth coming home to."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-sm text-card/85 sm:text-base",
								children: "Verified homes. Thoughtful guidance. A simpler way to buy, rent or invest in real estate."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-in mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBar, {
							tab: "Buy",
							place: "",
							type: "Any",
							budget: "Any"
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl sm:text-4xl",
					children: "Property types"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Explore properties tailored to your needs."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/buy",
					search: buySearch({
						type: "Any",
						place: city
					}),
					className: "inline-flex items-center gap-1 text-sm",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5",
				children: PROPERTY_TYPES.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index * 60,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.type === "Commercial" ? "/commercial" : "/buy",
						search: item.type === "Commercial" ? commercialSearch({ place: city }) : buySearch({
							type: item.type,
							place: city
						}),
						className: "group relative block h-36 overflow-hidden rounded-card sm:h-44",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.image,
								alt: "",
								className: "zoom-img h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute right-3 bottom-3 left-3 flex items-center justify-between text-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-8 place-items-center rounded-full bg-card/20",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
								})]
							})
						]
					})
				}, item.label))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl text-balance sm:text-4xl",
						children: ["Featured properties", city ? ` in ${city}` : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"Handpicked homes",
							city ? ` in ${city}` : " in the best locations",
							"."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/buy",
						search: buySearch({
							type: "Any",
							place: city
						}),
						className: "inline-flex items-center gap-1 text-sm",
						children: ["View all properties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex gap-2 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCity("");
							setSlide(0);
						},
						className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${city === "" ? "border-forest bg-forest text-card" : "border-line bg-card"}`,
						children: "All cities"
					}), CITY_NAMES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setCity(name);
							setSlide(0);
						},
						className: `shrink-0 rounded-pill border px-3 py-2 text-sm ${city === name ? "border-forest bg-forest text-card" : "border-line bg-card"}`,
						children: name
					}, name))]
				}),
				featured.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"No featured homes in ",
						city,
						" yet."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: featured.map((listing, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: index * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCard, { listing })
					}, listing.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl sm:text-4xl",
						children: "Explore top locations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Pick a city — featured homes and new projects update together."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/locations",
						className: "inline-flex items-center gap-1 text-sm",
						children: ["View all locations ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 lg:grid-cols-5",
					children: CITIES.map((item, index) => {
						const active = city === item.name;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: index * 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setCity(active ? "" : item.name);
									setSlide(0);
								},
								className: `group relative block h-48 w-full overflow-hidden rounded-card text-left sm:h-64 ${active ? "ring-2 ring-forest ring-offset-2 ring-offset-paper" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.image,
										alt: "",
										className: "zoom-img h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute right-3 bottom-3 left-3 text-card",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid size-8 shrink-0 place-items-center rounded-full bg-card/15",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-card/80",
											children: ["Avg. Price ", item.price]
										})]
									})
								]
							})
						}, item.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/buy",
							search: buySearch({
								place: city,
								type: "Any"
							}),
							className: "inline-flex items-center gap-1",
							children: [
								"Listings in ",
								placeLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/projects",
							search: projectSearch({ place: city || "Any" }),
							className: "inline-flex items-center gap-1",
							children: [
								"Projects in ",
								placeLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/rent",
							search: rentSearch({
								place: city,
								type: "Any"
							}),
							className: "inline-flex items-center gap-1",
							children: [
								"Rentals in ",
								placeLabel,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-muted",
					children: "WHY CHOOSE HAVENNEST"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-md text-3xl sm:text-4xl",
					children: "A better real estate experience."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-md text-sm text-muted",
					children: "We combine verified listings, market insights and expert guidance to make your property journey simple and rewarding."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: WHY.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-line lg:border-l lg:pl-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
							className: "size-6 text-forest",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-sans text-base font-semibold tracking-normal",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.body
						})
					]
				}, item.title))
			})]
		}),
		current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "banner-frame relative overflow-hidden rounded-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.images[0],
						alt: "",
						className: "absolute inset-0 h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/75 to-forest-deep/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col justify-between p-6 sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-md text-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-card/75",
									children: "NEW LAUNCHES"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-3xl text-balance sm:text-5xl",
									children: "Premium projects for a brighter tomorrow."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-card/80",
									children: city ? `New launches in ${city} from trusted developers.` : "Explore new launches from trusted developers in prime locations."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/projects",
									search: projectSearch({
										place: city || "Any",
										status: "new"
									}),
									className: "tap mt-6 inline-flex h-11 items-center rounded-pill border border-card/40 px-5 text-sm",
									children: "View all projects →"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Previous launch",
									onClick: () => setSlide((value) => (value - 1 + launches.length) % launches.length),
									className: "grid size-10 place-items-center rounded-full bg-card/90 text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": "Next launch",
									onClick: () => setSlide((value) => (value + 1) % launches.length),
									className: "grid size-10 place-items-center rounded-full bg-card/90 text-ink",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/property/$slug",
								params: { slug: current.slug },
								className: "w-full max-w-sm rounded-card bg-card p-4 text-ink shadow-lg sm:w-80",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: current.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: current.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-2 text-sm",
											children: [
												current.bhkLabel,
												" | ",
												formatCr(current.priceCr),
												" Onwards"
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 size-4" })]
								})
							})]
						})]
					})
				]
			})
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl overflow-hidden rounded-card px-4 pb-16 sm:px-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dining.jpg",
				alt: "Dining room prepared for a long evening",
				className: "h-72 w-full object-cover lg:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center bg-ivory px-6 py-12 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-muted",
						children: "LOOKING TO SELL?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-md text-3xl sm:text-4xl",
						children: "Get the right value for your property."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-md text-sm text-muted",
						children: "List your property and connect with serious buyers and tenants."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openLead("list"),
						className: "tap mt-6 h-11 w-fit rounded-pill bg-forest px-5 text-sm text-card",
						children: "List Your Property →"
					})
				]
			})]
		})
	] });
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
