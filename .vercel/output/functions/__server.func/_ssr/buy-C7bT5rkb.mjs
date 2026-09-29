import { C as require_jsx_runtime, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as Route$11 } from "./router-SCxekiOa.mjs";
import { t as ListingPage } from "./listing-page-D-kZ8Tl5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/buy-C7bT5rkb.js
var import_jsx_runtime = require_jsx_runtime();
function BuyPage() {
	const search = Route$11.useSearch();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingPage, {
		intent: "buy",
		search,
		onSearch: (next) => {
			navigate({
				to: "/buy",
				search: next
			});
		}
	});
}
//#endregion
export { BuyPage as component };
