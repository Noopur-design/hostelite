import { C as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_-DRV7J2bR.js
var import_jsx_runtime = require_jsx_runtime();
function MissingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: "This page is not on the map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "The address may be out of date."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "tap mt-6 inline-flex h-11 items-center rounded-pill bg-forest px-5 text-sm text-card",
				children: "Back to HavenNest"
			})
		]
	});
}
//#endregion
export { MissingPage as component };
