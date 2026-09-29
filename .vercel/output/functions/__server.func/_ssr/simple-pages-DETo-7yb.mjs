import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { X as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as ListingRow, r as ProjectCard } from "./cards-CUyehkeq.mjs";
import { E as buySearch, H as mapSrc, J as rentSearch, M as filterHomes, N as filterProjects, Q as useApp, c as ARTICLES, d as CITIES, f as CITY_GEO, q as projectSearch } from "./router-SCxekiOa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/simple-pages-DETo-7yb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LocationsPage() {
	const [city, setCity] = (0, import_react.useState)(CITIES[0]?.name ?? "Gurugram");
	const geo = CITY_GEO[city] ?? CITY_GEO.Gurugram;
	const projects = filterProjects(projectSearch({
		place: city,
		type: "Any",
		status: "all"
	})).slice(0, 4);
	const homes = filterHomes("buy", buySearch({
		place: city,
		type: "Any"
	})).slice(0, 3);
	const rentals = filterHomes("rent", rentSearch({
		place: city,
		type: "Any"
	})).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-7xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "LOCATIONS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-balance sm:text-5xl",
				children: "Explore top locations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-sm text-muted",
				children: "Choose a city. Projects and listings below switch to that market."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5",
				children: CITIES.map((item) => {
					const active = city === item.name;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCity(item.name),
						className: `group overflow-hidden rounded-card text-left ${active ? "ring-2 ring-forest ring-offset-2 ring-offset-paper" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-40 sm:h-52",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									className: "h-full w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute right-3 bottom-3 left-3 text-card",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: item.name
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
				className: "mt-8 overflow-hidden rounded-card border border-line bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-sans text-lg font-semibold tracking-normal",
						children: city
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-4 gap-y-1 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/buy",
								search: buySearch({
									place: city,
									type: "Any"
								}),
								className: "text-forest",
								children: "Homes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rent",
								search: rentSearch({
									place: city,
									type: "Any"
								}),
								className: "text-forest",
								children: "Rent"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								search: projectSearch({ place: city }),
								className: "text-forest",
								children: "Projects"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: city,
					src: mapSrc(geo.lat, geo.lon),
					className: "h-64 w-full border-t border-line sm:h-80"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-4xl",
						children: ["Projects in ", city]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects",
						search: projectSearch({ place: city }),
						className: "inline-flex items-center gap-1 text-sm",
						children: ["All projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted",
					children: [
						"No projects listed in ",
						city,
						" yet."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: projects.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { listing }, listing.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-4xl",
						children: ["Listings in ", city]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/buy",
						search: buySearch({
							place: city,
							type: "Any"
						}),
						className: "inline-flex items-center gap-1 text-sm",
						children: ["All listings ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4",
					children: [homes.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingRow, { listing }, listing.slug)), rentals.map((listing) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingRow, { listing }, listing.slug))]
				})]
			})
		]
	});
}
function InsightsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "INSIGHTS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-balance sm:text-5xl",
				children: "Notes from the desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Market context for the homes in this catalogue."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-10",
				children: ARTICLES.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					id: article.id,
					className: "scroll-mt-24 overflow-hidden rounded-card border border-line bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: "",
						className: "h-56 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-muted",
								children: article.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl",
								children: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: article.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 space-y-3 text-sm text-ink/80",
								children: article.body.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
							})
						]
					})]
				}, article.id))
			})
		]
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "COMPANY"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-balance sm:text-5xl",
				children: "A quieter way to look at homes."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 space-y-4 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "HavenNest is a demo real-estate desk for buyers, tenants and investors comparing homes in Gurugram, Bengaluru, Mumbai, Hyderabad, Pune and Delhi." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Listings, prices and possession dates on this site are sample catalogue data so you can try search, filters, saved homes and visit requests without a brokerage account." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Homes. Investments. A better tomorrow." })
				]
			})
		]
	});
}
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "CAREERS"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-balance sm:text-5xl",
				children: "Work with the desk."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "We are not hiring through this demo. If you still want to introduce yourself, send a note and it stays on this device."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteForm, {
				label: "Send a note",
				storeKey: "havennest-careers"
			})
		]
	});
}
function ContactPage() {
	const { openLead } = useApp();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-muted",
				children: "CONTACT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-balance sm:text-5xl",
				children: "Talk to HavenNest."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-sm text-muted",
				children: "Ask about a project, a locality, or listing your own home. Advisors in this demo reply only inside the success state — nothing is sent to a server."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => openLead("expert"),
				className: "tap mt-6 h-11 rounded-pill bg-forest px-5 text-sm text-card",
				children: "Talk to an Expert"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoteForm, {
				label: "Or write to us",
				storeKey: "havennest-contact"
			})
		]
	});
}
function NoteForm({ label, storeKey }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	function submit(event) {
		event.preventDefault();
		if (name.trim().length < 2) return setError("Enter your name");
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError("Enter a valid email");
		if (note.trim().length < 8) return setError("Add a short note");
		const existing = JSON.parse(localStorage.getItem(storeKey) || "[]");
		existing.push({
			name,
			email,
			note,
			at: Date.now()
		});
		localStorage.setItem(storeKey, JSON.stringify(existing));
		setError("");
		setDone(true);
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-6 text-sm",
		children: "Received. We have saved your note on this device."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "mt-8 max-w-lg space-y-3",
		noValidate: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-sans text-lg font-semibold tracking-normal",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: name,
				onChange: (event) => setName(event.target.value),
				placeholder: "Full name",
				className: "h-12 w-full rounded-control border border-line bg-card px-3 text-sm outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: email,
				onChange: (event) => setEmail(event.target.value),
				placeholder: "Email",
				className: "h-12 w-full rounded-control border border-line bg-card px-3 text-sm outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: note,
				onChange: (event) => setNote(event.target.value),
				placeholder: "How can we help?",
				className: "min-h-28 w-full rounded-control border border-line bg-card px-3 py-3 text-sm outline-none"
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-forest-soft",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "tap h-11 rounded-pill bg-forest px-5 text-sm text-card",
				children: "Send"
			})
		]
	});
}
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 text-sm text-muted sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-balance text-ink sm:text-5xl",
				children: "Terms"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4",
				children: "HavenNest is a portfolio demonstration. Prices, floor areas, possession months and developer statistics are sample content for browsing the interface. They are not offers, advertisements or commitments by any developer named here."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Do not use this demo to make a purchase decision. Confirm every detail on the developer's RERA page and with your own lawyer before you pay a booking amount."
			})
		]
	});
}
function PrivacyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 text-sm text-muted sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-balance text-ink sm:text-5xl",
				children: "Privacy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4",
				children: "Forms on this demo — visits, enquiries, login and the newsletter — are stored in your browser's local storage. They are not uploaded to HavenNest or to a database."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3",
				children: "Clear the site data in your browser to remove saved homes, demo accounts and enquiries."
			})
		]
	});
}
function SitemapPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl text-balance sm:text-5xl",
				children: "Sitemap"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2",
				children: [
					["Home", "/"],
					["Buy", "/buy"],
					["Rent", "/rent"],
					["Projects", "/projects"],
					["Commercial", "/commercial"],
					["Locations", "/locations"],
					["Insights", "/insights"],
					["About", "/about"],
					["Careers", "/careers"],
					["Contact", "/contact"],
					["Terms", "/terms"],
					["Privacy", "/privacy"]
				].map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: href,
					className: "text-sm hover:text-forest",
					children: label
				}) }, href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/buy",
						search: buySearch(),
						className: "rounded-pill bg-chip px-3 py-1",
						children: "Gurugram apartments"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projects",
						search: projectSearch(),
						className: "rounded-pill bg-chip px-3 py-1",
						children: "New projects"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rent",
						search: rentSearch(),
						className: "rounded-pill bg-chip px-3 py-1",
						children: "Homes for rent"
					})
				]
			})
		]
	});
}
//#endregion
export { LocationsPage as a, TermsPage as c, InsightsPage as i, CareersPage as n, PrivacyPage as o, ContactPage as r, SitemapPage as s, AboutPage as t };
