import {
  useTranslation
} from "/build/_shared/chunk-ZQ3IT2WF.js";
import {
  useCart
} from "/build/_shared/chunk-XJJYUWGV.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-KVTW5EQN.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-F572ATWH.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_node = __toESM(require_node(), 1);

// app/components/layout/SearchBar.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/SearchBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/SearchBar.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function SearchBar() {
  _s();
  const [query, setQuery] = (0, import_react.useState)("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSubmit, className: "relative flex-1 max-w-xl mx-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search for products...", className: "w-full pl-4 pr-12 py-2 rounded-full border focus:ring-2 focus:ring-primary-500 focus:border-primary-500" }, void 0, false, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, false, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/SearchBar.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s(SearchBar, "4dav8M2SLGXQnIi3dGQyN/4cmLs=", false, function() {
  return [useNavigate];
});
_c = SearchBar;
var _c;
$RefreshReg$(_c, "SearchBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/LanguageSwitcher.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/LanguageSwitcher.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/LanguageSwitcher.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function LanguageSwitcher() {
  _s2();
  const {
    i18n
  } = useTranslation();
  const [mounted, setMounted] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setMounted(true);
  }, []);
  const buttonClasses = (isActive) => `px-2 py-1 rounded-md text-sm ${mounted && isActive ? "bg-primary-500 text-white" : "text-gray-600 hover:bg-gray-100"} transition-colors duration-200`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => i18n.changeLanguage("en"), className: buttonClasses(i18n.language === "en"), children: "EN" }, void 0, false, {
      fileName: "app/components/LanguageSwitcher.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => i18n.changeLanguage("hi"), className: buttonClasses(i18n.language === "hi"), children: "\u0939\u093F" }, void 0, false, {
      fileName: "app/components/LanguageSwitcher.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/LanguageSwitcher.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_s2(LanguageSwitcher, "zS3ZnYYrlDw03hXTJ5tho1GBkMo=", false, function() {
  return [useTranslation];
});
_c2 = LanguageSwitcher;
var _c2;
$RefreshReg$(_c2, "LanguageSwitcher");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/layout/Header.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/layout/Header.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/layout/Header.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Header() {
  _s3();
  const {
    items
  } = useCart();
  const {
    t
  } = useTranslation();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "bg-white shadow-md sticky top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between h-16 px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/", className: "text-2xl font-bold text-primary-500 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-3xl mr-2", children: "\u{1F69A}" }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "hidden sm:inline", children: "OnWay" }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:block flex-1 max-w-xl mx-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SearchBar, {}, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 45,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden md:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LanguageSwitcher, {}, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden lg:flex items-center space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/products", className: "text-gray-600 hover:text-primary-500 transition-colors", children: t("nav.products") }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 58,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/offers", className: "text-gray-600 hover:text-primary-500 transition-colors", children: t("nav.offers") }, void 0, false, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 61,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/cart", className: "p-2 text-gray-600 hover:text-primary-500 transition-colors relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this),
          cartItemCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg", children: cartItemCount }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 72,
            columnNumber: 39
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/login", className: "hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-primary-500 hover:bg-primary-50 transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: t("nav.signIn") }, void 0, false, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 37,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s3(Header, "mOehaTGHf58qkCGa3ZZBqQdtbNE=", false, function() {
  return [useCart, useTranslation];
});
_c3 = Header;
var _c3;
$RefreshReg$(_c3, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IMNV33KW.css";

// app/root.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s4();
  const {
    locale
  } = useLoaderData();
  const {
    i18n
  } = useTranslation();
  (0, import_react5.useEffect)(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: locale, className: "h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "h-full bg-gray-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s4(App, "Wdmi10XC9c292grrFwT2fFRVKKI=", false, function() {
  return [useLoaderData, useTranslation];
});
_c4 = App;
var _c4;
$RefreshReg$(_c4, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-CE5CIR63.js.map
