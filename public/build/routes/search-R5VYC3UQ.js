import {
  ProductGrid
} from "/build/_shared/chunk-3W4OFQ4V.js";
import "/build/_shared/chunk-XJJYUWGV.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData,
  useSearchParams
} from "/build/_shared/chunk-KVTW5EQN.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-F572ATWH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/search.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/search.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/search.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Search() {
  _s();
  const {
    products
  } = useLoaderData();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "Search Results" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      query && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
        'Showing results for "',
        query,
        '"'
      ] }, void 0, true, {
        fileName: "app/routes/search.tsx",
        lineNumber: 48,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    products.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-gray-600 mb-4", children: "No products found" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 mb-8", children: "Try searching with different keywords" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Browse All Products" }, void 0, false, {
        fileName: "app/routes/search.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/search.tsx",
      lineNumber: 53,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { products }, void 0, false, {
      fileName: "app/routes/search.tsx",
      lineNumber: 59,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/search.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_s(Search, "4jykTLGS3CWaCkKfmJA5pLkDwNQ=", false, function() {
  return [useLoaderData, useSearchParams];
});
_c = Search;
var _c;
$RefreshReg$(_c, "Search");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Search as default
};
//# sourceMappingURL=/build/routes/search-R5VYC3UQ.js.map
