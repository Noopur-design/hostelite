import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Gamepad2, B as Car, D as Heart, E as House, F as ChevronRight, I as ChevronLeft, J as Baby, K as Bath, O as HeartPulse, P as Dumbbell, R as Check, S as Mail, U as Building2, W as Briefcase, _ as Play, a as UtensilsCrossed, b as Maximize, d as Sparkles, f as ShoppingBag, h as Share2, i as Waves, j as Footprints, k as GraduationCap, l as Trees, o as Users, p as Shield, s as UserRound, t as Zap, u as TrainFront, v as Phone, x as MapPin } from "../_libs/lucide-react.mjs";
import { A as destinationsFor, D as cn, E as buySearch, F as formatArea, G as pinFor, H as mapSrc, I as formatCr, J as rentSearch, K as priceTrend, L as formatRent, O as commercialSearch, P as floorConfigs, Q as useApp, R as formatSqft, U as nearbyFor, X as resolveListing, Z as similarListings, j as developerOf, k as copyText, n as Route, s as AMENITIES } from "./router-SCxekiOa.mjs";
import { a as ResponsiveContainer, i as Area, n as YAxis, o as Tooltip, r as XAxis, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/property._slug-D0-L9YuJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "amenities",
		label: "Amenities"
	},
	{
		id: "floor-plan",
		label: "Floor Plan"
	},
	{
		id: "location",
		label: "Location"
	},
	{
		id: "price",
		label: "Price Insights"
	},
	{
		id: "builder",
		label: "Builder"
	},
	{
		id: "similar",
		label: "Similar Properties"
	}
];
var AMENITY_ICONS = [
	Building2,
	Waves,
	Dumbbell,
	Trees,
	Baby,
	Shield,
	Zap,
	Users,
	Sparkles,
	Gamepad2,
	Footprints,
	House
];
var NEAR_ICONS = [
	GraduationCap,
	HeartPulse,
	ShoppingBag,
	Briefcase,
	UtensilsCrossed,
	TrainFront
];
function DetailPage({ listing }) {
	const { openLead, openGallery, openVideo, openMap, toast, isSaved, toggleSaved } = useApp();
	const images = listing.images;
	const [index, setIndex] = (0, import_react.useState)(0);
	const [active, setActive] = (0, import_react.useState)("overview");
	const [more, setMore] = (0, import_react.useState)(false);
	const [allAmenities, setAllAmenities] = (0, import_react.useState)(false);
	const configs = (0, import_react.useMemo)(() => floorConfigs(listing), [listing]);
	const [configId, setConfigId] = (0, import_react.useState)(configs.find((item) => item.beds === listing.bhk)?.id ?? configs[0]?.id ?? "3");
	const [visit, setVisit] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: ""
	});
	const [visitErrors, setVisitErrors] = (0, import_react.useState)({});
	const [visitDone, setVisitDone] = (0, import_react.useState)(false);
	const [chartOn, setChartOn] = (0, import_react.useState)(false);
	const config = configs.find((item) => item.id === configId) ?? configs[0];
	const dev = developerOf(listing.developer);
	const pin = pinFor(listing);
	const similar = similarListings(listing);
	const saved = isSaved(listing.slug);
	(0, import_react.useEffect)(() => {
		setIndex(0);
		setMore(false);
		setVisitDone(false);
		setConfigId(configs.find((item) => item.beds === listing.bhk)?.id ?? configs[0]?.id ?? "3");
	}, [
		listing.slug,
		listing.bhk,
		configs
	]);
	(0, import_react.useEffect)(() => {
		setChartOn(true);
		const nodes = TABS.map((tab) => document.getElementById(tab.id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-40% 0px -45% 0px",
			threshold: [.15, .4]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, [listing.slug]);
	function scrollTo(id) {
		setActive(id);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	function submitVisit(event) {
		event.preventDefault();
		const errors = {};
		if (visit.name.trim().length < 2) errors.name = "Enter your full name";
		if (!/^[6-9]\d{9}$/.test(visit.phone.replace(/\D/g, ""))) errors.phone = "Enter a valid 10-digit mobile number";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(visit.email.trim())) errors.email = "Enter a valid email address";
		setVisitErrors(errors);
		if (Object.keys(errors).length) return;
		const leads = JSON.parse(localStorage.getItem("havennest-leads") || "[]");
		leads.push({
			...visit,
			mode: "visit",
			project: listing.name,
			at: Date.now()
		});
		localStorage.setItem("havennest-leads", JSON.stringify(leads));
		setVisitDone(true);
	}
	const parentHref = listing.intent === "rent" ? "/rent" : listing.intent === "commercial" ? "/commercial" : "/buy";
	const parentSearch = listing.intent === "rent" ? rentSearch({
		place: listing.city,
		type: "Any"
	}) : listing.intent === "commercial" ? commercialSearch({ place: listing.city }) : buySearch({
		place: listing.city,
		type: listing.type === "Commercial" ? "Any" : listing.type
	});
	const visibleAmenities = allAmenities ? AMENITIES : AMENITIES.slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-6 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-ink",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1.5",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: parentHref,
							search: parentSearch,
							className: "hover:text-ink",
							children: listing.intent === "rent" ? "Rent" : listing.intent === "commercial" ? "Commercial" : "Buy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1.5",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: listing.city }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-1.5",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: listing.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							copyText(window.location.href).then((ok) => toast(ok ? "Link copied" : "Unable to copy link"));
						},
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }), " Share"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleSaved(listing.slug),
						className: "inline-flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", saved && "fill-forest text-forest") }), saved ? "Saved" : "Save"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-card lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[index % images.length],
							alt: `${listing.name} photo`,
							className: "gallery-main h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Previous photo",
							onClick: () => setIndex((value) => (value - 1 + images.length) % images.length),
							className: "absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-card shadow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Next photo",
							onClick: () => setIndex((value) => (value + 1) % images.length),
							className: "absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-card shadow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => openGallery(images, listing.name, index),
							className: "absolute bottom-3 left-3 rounded-pill bg-forest/80 px-3 py-1 text-xs text-card",
							children: [
								"Photos (",
								images.length + 18,
								")"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => openVideo(images, listing.name),
						className: "relative overflow-hidden rounded-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images[1 % images.length],
							alt: "",
							className: "h-44 w-full object-cover lg:h-full"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-0 grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 rounded-pill bg-card/90 px-4 py-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), " Watch Video"]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setIndex(2 % images.length),
							className: "overflow-hidden rounded-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images[2 % images.length],
								alt: "",
								className: "h-28 w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => openGallery(images, listing.name, 0),
							className: "relative overflow-hidden rounded-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: images[3 % images.length],
								alt: "",
								className: "h-28 w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute inset-0 grid place-items-center bg-forest-deep/45 text-sm text-card",
								children: [
									"+",
									images.length + 17,
									" Photos"
								]
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-3xl text-balance break-words sm:text-5xl",
							children: listing.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
										" ",
										listing.address
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-pill bg-forest/10 px-3 py-1 text-xs text-forest",
									children: listing.status
								}),
								listing.rera ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-pill bg-chip px-3 py-1 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-forest" }), " RERA Verified"]
								}) : null,
								listing.gated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-pill bg-chip px-3 py-1 text-xs",
									children: "Gated Community"
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-end gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-4xl",
									children: listing.intent === "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
										formatRent(listing.rentMonthly),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-sans text-base text-muted",
											children: "/ month"
										})
									] }) : formatCr(listing.priceCr)
								}),
								listing.intent !== "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: formatSqft(listing.pricePerSqft)
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => scrollTo("price"),
									className: "text-sm text-forest",
									children: "View Price Trends →"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
							children: [
								listing.bhk > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }),
									value: `${listing.bhk} BHK`,
									label: "Configuration"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-4" }),
									value: listing.title,
									label: "Type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-4" }),
									value: formatArea(listing.area),
									label: "Super Built-up Area"
								}),
								listing.baths > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "size-4" }),
									value: `${listing.baths} Bathrooms`,
									label: "Bathrooms"
								}) : null,
								listing.balconies > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }),
									value: `${listing.balconies} Balcony`,
									label: "Balcony"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spec, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, { className: "size-4" }),
									value: listing.parking,
									label: "Parking"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sticky top-16 z-20 mt-8 flex min-w-0 gap-1 overflow-auto border-b border-line bg-paper/95",
							children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => scrollTo(tab.id),
								className: cn("shrink-0 border-b-2 px-3 py-3 text-sm", active === tab.id ? "border-ink text-ink" : "border-transparent text-muted"),
								children: tab.label
							}, tab.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "overview",
							className: "scroll-mt-32 pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "text-3xl",
									children: ["About ", listing.name]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: cn("mt-3 max-w-3xl text-sm text-muted", !more && "line-clamp-3"),
									children: listing.about
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setMore((value) => !value),
									className: "mt-3 text-sm text-forest",
									children: more ? "Show less" : "Read More →"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "amenities",
							className: "scroll-mt-32 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl",
									children: "Amenities"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setAllAmenities((value) => !value),
									className: "text-sm",
									children: allAmenities ? "Show less" : "View all amenities →"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: visibleAmenities.map((label, amenityIndex) => {
									const Icon = AMENITY_ICONS[amenityIndex % AMENITY_ICONS.length] ?? House;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-card border border-line bg-card px-3 py-4 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "mx-auto size-5 text-forest",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-xs",
											children: label
										})]
									}, label);
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "floor-plan",
							className: "scroll-mt-32 pt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl",
										children: "Floor Plan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => openGallery(["/images/floorplan.jpg"], `${listing.name} floor plan`),
										className: "text-sm",
										children: "View all floor plans →"
									})]
								}),
								listing.bhk > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 inline-flex rounded-pill bg-chip p-1",
									children: configs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setConfigId(item.id),
										className: cn("rounded-pill px-4 py-1.5 text-sm", item.id === config?.id ? "bg-forest text-card" : "text-ink"),
										children: item.label
									}, item.id))
								}) : null,
								config ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-4 rounded-card border border-line bg-card p-4 md:grid-cols-[1.2fr_1fr]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/floorplan.jpg",
										alt: `${config.name} floor plan`,
										className: "h-64 w-full rounded-control object-contain bg-ivory"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: config.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: formatArea(config.area)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
											className: "mt-4 space-y-2 text-sm text-muted",
											children: [
												config.beds > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [config.beds, " Bedrooms"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Plotted development" }),
												config.baths > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [config.baths, " Bathrooms"] }) : null,
												config.living > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [config.living, " Living Room"] }) : null,
												config.kitchen > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [config.kitchen, " Kitchen"] }) : null,
												config.balcony > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [config.balcony, " Balcony"] }) : null
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => openGallery(["/images/floorplan.jpg"], config.name),
											className: "tap mt-5 h-11 rounded-control border border-line px-4 text-sm",
											children: "View Detailed Plan →"
										})
									] })]
								}) : null
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "location",
							className: "scroll-mt-32 pt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl",
									children: "Location"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid gap-4 lg:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										title: `Map of ${listing.name}`,
										src: mapSrc(pin.lat, pin.lon),
										className: "h-72 w-full rounded-card border border-line"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-card border border-line bg-card p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-medium",
												children: "Well connected to key destinations"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-4 space-y-3",
												children: destinationsFor(listing.city).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
													className: "flex items-center justify-between text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-2 text-muted",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 text-forest" }),
															" ",
															item.name
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.time })]
												}, item.name))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => openMap(listing.name, pin.lat, pin.lon),
												className: "tap mt-5 h-11 rounded-control border border-line px-4 text-sm",
												children: "View on Map →"
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-sans text-xl font-semibold tracking-normal",
									children: "What's nearby"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
									children: nearbyFor(listing.city).map((item, nearIndex) => {
										const Icon = NEAR_ICONS[nearIndex] ?? MapPin;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-card border border-line bg-card px-3 py-4 text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "mx-auto size-5 text-forest",
													strokeWidth: 1.5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2 text-xs font-medium",
													children: item.label
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted",
													children: item.time
												})
											]
										}, item.label);
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "price",
							className: "scroll-mt-32 pt-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl",
									children: "Price Insights"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted",
									children: [
										"Indicative price per sq.ft. around ",
										listing.locality,
										". Figures illustrate the catalogue, not a live index."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 h-64 rounded-card border border-line bg-card p-3",
									children: chartOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
											data: priceTrend(listing),
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "year",
													tick: {
														fill: "var(--color-muted)",
														fontSize: 12
													},
													axisLine: false,
													tickLine: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tick: {
														fill: "var(--color-muted)",
														fontSize: 12
													},
													axisLine: false,
													tickLine: false,
													width: 48
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { formatter: (value) => [`₹ ${Number(value ?? 0).toLocaleString("en-IN")}`, "per sq.ft."] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
													type: "monotone",
													dataKey: "price",
													stroke: "var(--color-forest)",
													fill: "var(--color-gold)",
													strokeWidth: 2
												})
											]
										})
									}) : null
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							id: "builder",
							className: "scroll-mt-32 pt-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl",
								children: "Builder"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 rounded-card border border-line bg-card p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-widest text-muted",
										children: "PROJECT BY"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 font-serif text-3xl",
										children: listing.developer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-xl text-sm text-muted",
										children: dev.line
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 grid grid-cols-3 gap-3 text-center",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												value: dev.years,
												label: "Experience"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												value: dev.projects,
												label: "Projects"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
												value: dev.families,
												label: "Happy Families"
											})
										]
									})
								]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-4 lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitVisit,
							className: "rounded-card border border-line bg-card p-5",
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-sans text-lg font-semibold tracking-normal",
									children: "Schedule a visit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: "Get in touch with our expert for site visit, pricing details and exclusive offers."
								}),
								visitDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "py-8 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto grid size-11 place-items-center rounded-full bg-forest text-card",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 font-medium",
											children: "Visit requested"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted",
											children: [
												"We will confirm a time for ",
												listing.name,
												"."
											]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4" }),
											error: visitErrors.name,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: visit.name,
												onChange: (event) => setVisit({
													...visit,
													name: event.target.value
												}),
												placeholder: "Full Name",
												className: "w-full bg-transparent text-sm outline-none"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
											error: visitErrors.phone,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: visit.phone,
												onChange: (event) => setVisit({
													...visit,
													phone: event.target.value
												}),
												placeholder: "Phone Number",
												className: "w-full bg-transparent text-sm outline-none"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInput, {
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" }),
											error: visitErrors.email,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												value: visit.email,
												onChange: (event) => setVisit({
													...visit,
													email: event.target.value
												}),
												placeholder: "Email Address",
												className: "w-full bg-transparent text-sm outline-none"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: "tap h-12 w-full rounded-control bg-forest text-sm text-card",
											children: "Request Site Visit →"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => openLead("callback", listing.name),
											className: "tap h-12 w-full rounded-control border border-line text-sm",
											children: "Get a Callback"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "flex items-center justify-center gap-1 text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3.5" }), " Your details are safe with us"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-card border border-line bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: "Project by"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-2xl",
									children: listing.developer
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: "Trusted Developer"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => scrollTo("builder"),
									className: "mt-3 text-sm text-forest",
									children: "View Developer Profile →"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-3 gap-2 text-center text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: dev.years,
											label: "Experience"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: dev.projects,
											label: "Projects"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
											value: dev.families,
											label: "Happy Families"
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-card border border-line bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-sans text-lg font-semibold tracking-normal",
								children: "Property Highlights"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2",
								children: listing.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm text-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-forest" }),
										" ",
										item
									]
								}, item))
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "similar",
				className: "scroll-mt-32 py-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl",
						children: ["Similar properties in ", listing.city]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: parentHref,
						search: parentSearch,
						className: "text-sm",
						children: "View all properties →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex min-w-0 gap-4 overflow-x-auto pb-2",
					children: similar.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/property/$slug",
						params: { slug: item.slug },
						className: "group w-64 shrink-0 overflow-hidden rounded-card border border-line bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative h-36 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.images[0],
								alt: "",
								className: "zoom-img h-full w-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl",
									children: item.intent === "rent" ? formatRent(item.rentMonthly) : formatCr(item.priceCr)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted",
									children: formatArea(item.area)
								})
							]
						})]
					}, item.slug))
				})]
			})
		]
	});
}
function Spec({ icon, value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-card border border-line bg-card px-3 py-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-forest",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: label
			})
		]
	});
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-semibold",
		children: value
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-muted",
		children: label
	})] });
}
function IconInput({ icon, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-12 items-center gap-2 rounded-control border border-line px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: icon
		}), children]
	}), error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-xs text-forest-soft",
		children: error
	}) : null] });
}
function PropertyRoute() {
	const { slug } = Route.useParams();
	const listing = resolveListing(slug);
	if (!listing) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "We could not find that home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "It may have left the catalogue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "tap mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm text-card",
				children: "Back home"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailPage, { listing });
}
//#endregion
export { PropertyRoute as component };
