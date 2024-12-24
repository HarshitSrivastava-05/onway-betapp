import {
  useCart
} from "/build/_shared/chunk-XJJYUWGV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-F572ATWH.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/products/ProductCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/ProductCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/ProductCard.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function ProductCard({
  product
}) {
  _s();
  const {
    addItem
  } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative h-48 md:h-56 bg-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      product.inStock ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs rounded-full", children: "In Stock" }, void 0, false, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 33,
        columnNumber: 28
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs rounded-full", children: "Out of Stock" }, void 0, false, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg text-gray-800", children: product.name }, void 0, false, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm mt-1 line-clamp-2", children: product.description }, void 0, false, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-bold text-primary-600", children: [
          "\u20B9",
          product.price.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/products/ProductCard.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => {
          addItem(product);
          const toast = document.createElement("div");
          toast.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50";
          toast.textContent = "Added to cart!";
          document.body.appendChild(toast);
          setTimeout(() => toast.remove(), 2e3);
        }, className: "bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors flex items-center", disabled: !product.inStock, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }, void 0, false, {
            fileName: "app/components/products/ProductCard.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/products/ProductCard.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          "Add"
        ] }, void 0, true, {
          fileName: "app/components/products/ProductCard.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/products/ProductCard.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
}
_s(ProductCard, "3LNLw4tPbVBVCiFLdiRUbDVWYfc=", false, function() {
  return [useCart];
});
_c = ProductCard;
var _c;
$RefreshReg$(_c, "ProductCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/products/ProductGrid.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/products/ProductGrid.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/products/ProductGrid.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function ProductGrid({
  products
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductCard, { product }, product.id, false, {
    fileName: "app/components/products/ProductGrid.tsx",
    lineNumber: 26,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/products/ProductGrid.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = ProductGrid;
var _c2;
$RefreshReg$(_c2, "ProductGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ProductGrid
};
//# sourceMappingURL=/build/_shared/chunk-3W4OFQ4V.js.map
