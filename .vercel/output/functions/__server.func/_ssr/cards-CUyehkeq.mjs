import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as House, G as BedDouble, K as Bath, V as Calendar, Y as ArrowUpRight, q as BadgeCheck, x as MapPin } from "../_libs/lucide-react.mjs";
import { D as cn, F as formatArea, I as formatCr, L as formatRent, Q as useApp, h as HeartButton } from "./router-SCxekiOa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cards-CUyehkeq.js
var import_jsx_runtime = require_jsx_runtime();
function statusClass(status) {
	if (status === "New Launch") return "bg-gold text-ink";
	return "bg-forest text-card";
}
function ProjectCard({ listing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group lift relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/property/$slug",
				params: { slug: listing.slug },
				className: "relative block h-48 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: listing.images[0],
					alt: listing.name,
					className: "zoom-img h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("absolute top-3 left-3 rounded-pill px-3 py-1 text-xs", statusClass(listing.status)),
					children: listing.status
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartButton, {
				slug: listing.slug,
				className: "absolute top-3 right-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-1 flex-col p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/property/$slug",
						params: { slug: listing.slug },
						className: "font-medium",
						children: listing.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: listing.developer
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 flex items-center gap-1 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
							" ",
							listing.address
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm font-semibold",
						children: [formatCr(listing.priceCr), " Onwards"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 flex items-center gap-1 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-3.5" }),
							" ",
							listing.bhkLabel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5" }),
							" ",
							listing.possession
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/property/$slug",
						params: { slug: listing.slug },
						"aria-label": `View ${listing.name}`,
						className: "absolute right-4 bottom-4 grid size-9 place-items-center rounded-full bg-forest text-card",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })
					})
				]
			})
		]
	});
}
function ListingRow({ listing }) {
	const { openLead } = useApp();
	const badge = listing.status === "New Launch" ? "New Launch" : "Verified";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group overflow-hidden rounded-card border border-line bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[300px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/property/$slug",
				params: { slug: listing.slug },
				className: "relative block h-56 overflow-hidden md:h-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: listing.images[0],
						alt: listing.name,
						className: "zoom-img h-full w-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("absolute top-3 left-3 inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs", badge === "New Launch" ? "bg-gold text-ink" : "bg-forest text-card"),
						children: [badge === "Verified" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-3.5" }) : null, badge]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1",
						children: listing.images.slice(0, 4).map((image, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", index === 0 ? "bg-card" : "bg-card/50") }, image))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative p-4 sm:p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartButton, {
						slug: listing.slug,
						className: "absolute top-4 right-4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/property/$slug",
						params: { slug: listing.slug },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-lg font-semibold tracking-normal",
							children: listing.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: listing.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
							" ",
							listing.address
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap items-end gap-3",
						children: listing.intent === "rent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-3xl leading-none",
							children: [formatRent(listing.rentMonthly), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1 font-sans text-sm text-muted",
								children: "/ month"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl leading-none",
							children: formatCr(listing.priceCr)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								"₹ ",
								listing.pricePerSqft.toLocaleString("en-IN"),
								" / sq.ft."
							]
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-4 text-sm text-muted",
						children: [
							listing.bhk > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "size-4" }),
									" ",
									listing.bhk,
									" BHK"
								]
							}) : null,
							listing.baths > 0 && listing.type !== "Commercial" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "size-4" }),
									" ",
									listing.baths,
									" Baths"
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatArea(listing.area) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: listing.status })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: listing.tags.slice(0, 3).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-pill bg-chip px-3 py-1 text-xs text-muted",
							children: tag
						}, tag))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => openLead("enquire", listing.name),
							className: "tap h-11 rounded-control border border-line-strong px-5 text-sm",
							children: "Enquire"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/property/$slug",
							params: { slug: listing.slug },
							className: "tap inline-flex h-11 items-center rounded-control bg-forest px-5 text-sm text-card",
							children: "View Details →"
						})]
					})
				]
			})]
		})
	});
}
function FeaturedCard({ listing }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group lift relative overflow-hidden rounded-card border border-line bg-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/property/$slug",
				params: { slug: listing.slug },
				className: "relative block h-52 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: listing.images[0],
					alt: listing.name,
					className: "zoom-img h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("absolute top-3 left-3 inline-flex items-center gap-1 rounded-pill px-3 py-1 text-xs", listing.status === "New Launch" ? "bg-gold text-ink" : "bg-forest text-card"),
					children: listing.status === "New Launch" ? "New Launch" : "Verified"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartButton, {
				slug: listing.slug,
				className: "absolute top-3 right-3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl",
						children: listing.intent === "rent" ? formatRent(listing.rentMonthly) : formatCr(listing.priceCr)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/property/$slug",
						params: { slug: listing.slug },
						className: "mt-1 block text-sm font-medium",
						children: listing.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: listing.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-3 text-xs text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatArea(listing.area) }),
							listing.bhk > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [listing.bhk, " Beds"] }) : null,
							listing.baths > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [listing.baths, " Baths"] }) : null
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ListingRow as n, ProjectCard as r, FeaturedCard as t };
