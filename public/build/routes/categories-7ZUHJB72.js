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

// app/routes/categories.tsx
var import_node = __toESM(require_node(), 1);

// app/components/categories/CategoryList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/categories/CategoryList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/categories/CategoryList.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function CategoryList({
  categories
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/category/${category.id}`, className: "group relative rounded-2xl overflow-hidden shadow-lg aspect-square transition-all duration-300 hover:scale-[1.02] hover:shadow-xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: category.image, alt: category.name, className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" }, void 0, false, {
      fileName: "app/components/categories/CategoryList.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-xl font-bold text-center mb-2", children: category.name }, void 0, false, {
        fileName: "app/components/categories/CategoryList.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm", children: [
        category.count,
        " items"
      ] }, void 0, true, {
        fileName: "app/components/categories/CategoryList.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/categories/CategoryList.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this)
  ] }, category.id, true, {
    fileName: "app/components/categories/CategoryList.tsx",
    lineNumber: 25,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/categories/CategoryList.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = CategoryList;
var _c;
$RefreshReg$(_c, "CategoryList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/categories.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/categories.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/categories.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Categories() {
  _s();
  const {
    categories
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "All Categories" }, void 0, false, {
      fileName: "app/routes/categories.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CategoryList, { categories }, void 0, false, {
      fileName: "app/routes/categories.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(Categories, "J32au3ktFbFwnSn6gfgGrJMoP+o=", false, function() {
  return [useLoaderData];
});
_c2 = Categories;
var _c2;
$RefreshReg$(_c2, "Categories");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Categories as default
};
//# sourceMappingURL=/build/routes/categories-7ZUHJB72.js.map
