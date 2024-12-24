import {
  useTranslation
} from "/build/_shared/chunk-ZQ3IT2WF.js";
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/categories/CategoryBar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/categories/CategoryBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/categories/CategoryBar.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function CategoryBar({
  categories
}) {
  _s();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }, void 0, false, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }, void 0, false, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 35,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-6 py-6 px-4", children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: `/category/${category.id}`, className: "flex-shrink-0 group text-center w-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-100 ring-2 ring-white shadow-lg mx-auto transform transition-transform group-hover:scale-105", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: category.image, alt: category.name, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/categories/CategoryBar.tsx",
        lineNumber: 42,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/categories/CategoryBar.tsx",
        lineNumber: 41,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-700 group-hover:text-primary-500 transition-colors", children: t(`categories.${category.name}`) }, void 0, false, {
        fileName: "app/components/categories/CategoryBar.tsx",
        lineNumber: 44,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs text-gray-500 mt-0.5", children: [
        category.count,
        " ",
        t("common.items")
      ] }, void 0, true, {
        fileName: "app/components/categories/CategoryBar.tsx",
        lineNumber: 47,
        columnNumber: 19
      }, this)
    ] }, category.id, true, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 40,
      columnNumber: 43
    }, this)) }, void 0, false, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 39,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(CategoryBar, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c = CategoryBar;
var _c;
$RefreshReg$(_c, "CategoryBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/home/HeroSection.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/home/HeroSection.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/home/HeroSection.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function HeroSection() {
  _s2();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "relative min-h-[85vh] flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" }, void 0, false, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url(/images/hero.jpg)",
      backgroundPosition: "center 60%"
    } }, void 0, false, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative container mx-auto px-4 z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-flex items-center px-6 py-2 rounded-full bg-primary-500 bg-opacity-90 backdrop-blur-sm mb-8 shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-white text-base md:text-lg font-medium", children: [
        t("common.deliveryTime"),
        " \u{1F680}"
      ] }, void 0, true, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-5xl md:text-7xl font-bold text-white mb-8 leading-tight", children: [
        t("hero.title"),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-primary-400", children: t("hero.subtitle") }, void 0, false, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xl md:text-2xl text-white/90 mb-12 max-w-xl leading-relaxed", children: t("hero.description") }, void 0, false, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/products", className: "inline-flex items-center px-8 py-4 rounded-full text-lg font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1", children: [
        t("hero.cta"),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { className: "w-5 h-5 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/home/HeroSection.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_s2(HeroSection, "zlIdU9EjM2llFt74AbE2KsUJXyM=", false, function() {
  return [useTranslation];
});
_c2 = HeroSection;
var _c2;
$RefreshReg$(_c2, "HeroSection");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Index() {
  _s3();
  const {
    categories,
    featuredProducts
  } = useLoaderData();
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HeroSection, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sticky top-16 z-40 bg-white shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CategoryBar, { categories }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-2xl font-bold", children: t("common.featuredProducts") }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 55,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/products", className: "text-primary-500 hover:text-primary-600 flex items-center", children: [
          t("common.viewAll"),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 59,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: featuredProducts.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-48 object-cover" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "font-semibold", children: product.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-600 text-sm mt-1", children: product.description }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 68,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-lg font-bold", children: [
              "\u20B9",
              product.price
            ] }, void 0, true, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 70,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600", children: t("common.addToCart") }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 71,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this)
      ] }, product.id, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 64,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_s3(Index, "blKAer12sWkNy5PFFmjRsrHdOsw=", false, function() {
  return [useLoaderData, useTranslation];
});
_c3 = Index;
var _c3;
$RefreshReg$(_c3, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-SX5ZLLFD.js.map
