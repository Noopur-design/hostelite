import { C as require_jsx_runtime, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$9 } from "./router-SCxekiOa.mjs";
import { t as ListingPage } from "./listing-page-D-kZ8Tl5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commercial-CpFshAEb.js
var import_jsx_runtime = require_jsx_runtime();
function CommercialPage() {
	const search = Route$9.useSearch();
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListingPage, {
		intent: "commercial",
		search,
		onSearch: (next) => {
			navigate({
				to: "/commercial",
				search: next
			});
		}
	});
}
//#endregion
export { CommercialPage as component };
