import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Y as require_react, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as Search, x as MapPin } from "../_libs/lucide-react.mjs";
import { C as RENT_BUDGETS, D as cn, E as buySearch, J as rentSearch, O as commercialSearch, T as SelectField, l as BUY_BUDGETS, p as CITY_NAMES, q as projectSearch } from "./router-SCxekiOa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-bar-Cl2zPhzG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TYPE_OPTIONS = {
	Buy: [
		"Any",
		"Apartment",
		"Villa",
		"Builder Floor",
		"Plot"
	],
	Rent: [
		"Any",
		"Apartment",
		"Villa",
		"Builder Floor"
	],
	Projects: [
		"Any",
		"Apartment",
		"Villa",
		"Commercial",
		"Plot"
	],
	Commercial: [
		"Any",
		"Office",
		"Retail"
	]
};
function SearchBar({ tab, place, type, budget, showTabs = true, onTab, compact = false }) {
	const navigate = useNavigate();
	const [draftPlace, setDraftPlace] = (0, import_react.useState)(place);
	const [draftType, setDraftType] = (0, import_react.useState)(type);
	const [draftBudget, setDraftBudget] = (0, import_react.useState)(budget);
	const budgets = tab === "Rent" ? RENT_BUDGETS : BUY_BUDGETS;
	(0, import_react.useEffect)(() => {
		setDraftPlace(place);
		setDraftType(type);
		setDraftBudget(budget);
	}, [
		place,
		type,
		budget,
		tab
	]);
	function go(nextTab, nextPlace, nextType, nextBudget) {
		if (nextTab === "Rent") {
			navigate({
				to: "/rent",
				search: rentSearch({
					place: nextPlace,
					type: nextType,
					budget: nextBudget,
					page: 1
				})
			});
			return;
		}
		if (nextTab === "Projects") {
			navigate({
				to: "/projects",
				search: projectSearch({
					place: nextPlace || "Any",
					type: nextType,
					budget: nextBudget,
					page: 1
				})
			});
			return;
		}
		if (nextTab === "Commercial") {
			navigate({
				to: "/commercial",
				search: commercialSearch({
					place: nextPlace,
					type: nextType,
					budget: nextBudget,
					page: 1
				})
			});
			return;
		}
		navigate({
			to: "/buy",
			search: buySearch({
				place: nextPlace,
				type: nextType,
				budget: nextBudget,
				page: 1,
				locality: ""
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: cn("rounded-card bg-card p-3 shadow-lg", compact && "shadow-md"),
		onSubmit: (event) => {
			event.preventDefault();
			go(tab, draftPlace, draftType, draftBudget);
		},
		children: [showTabs ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 inline-flex max-w-full flex-wrap gap-1 rounded-pill bg-chip p-1",
			children: [
				"Buy",
				"Rent",
				"Projects",
				"Commercial"
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => {
					onTab?.(item);
					setDraftType("Any");
					setDraftBudget("Any");
					if (onTab == null) go(item, draftPlace, "Any", "Any");
				},
				className: cn("rounded-pill px-4 py-2 text-sm transition", tab === item ? "bg-forest text-card" : "text-ink hover:bg-card"),
				children: item
			}, item))
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-2 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_auto]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex h-14 items-center gap-2 rounded-control border border-line bg-card px-3 md:col-span-2 lg:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-muted" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: draftPlace,
							onChange: (event) => setDraftPlace(event.target.value),
							placeholder: "Enter location, city or locality",
							list: "haven-cities",
							className: "w-full bg-transparent text-sm outline-none placeholder:text-faint"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
							id: "haven-cities",
							children: CITY_NAMES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: city }, city))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					label: tab === "Projects" ? "Project Type" : "Property Type",
					value: draftType,
					options: TYPE_OPTIONS[tab],
					onChange: setDraftType
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
					label: "Budget",
					value: draftBudget,
					options: budgets.map((item) => item.id),
					onChange: setDraftBudget
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "tap inline-flex h-14 items-center justify-center gap-2 rounded-control bg-forest px-6 text-sm text-card",
					children: ["Search ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" })]
				})
			]
		})]
	});
}
//#endregion
export { SearchBar as t };
