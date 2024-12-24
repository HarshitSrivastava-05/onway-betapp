import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  useLoaderData
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

// app/routes/offers.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/offers.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/offers.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Offers() {
  _s();
  const {
    offers
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "Current Offers" }, void 0, false, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: offers.map((offer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: offer.title }, void 0, false, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: offer.description }, void 0, false, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-100 px-3 py-1 rounded-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("code", { className: "text-primary-600 font-medium", children: offer.code }, void 0, false, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
          "Valid till ",
          new Date(offer.validUntil).toLocaleDateString()
        ] }, void 0, true, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 57,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, offer.id, true, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 50,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/offers.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s(Offers, "ab5tJ7MQ9xBAOSEZTlfUkP3j5UQ=", false, function() {
  return [useLoaderData];
});
_c = Offers;
var _c;
$RefreshReg$(_c, "Offers");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Offers as default
};
//# sourceMappingURL=/build/routes/offers-ZIFOVKAQ.js.map
