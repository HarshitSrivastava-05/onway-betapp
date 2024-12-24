import {
  useCart
} from "/build/_shared/chunk-XJJYUWGV.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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

// app/routes/cart.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/cart.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/cart.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Cart() {
  _s();
  const {
    items,
    total,
    updateQuantity,
    removeItem
  } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "Shopping Cart" }, void 0, false, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    items.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-gray-600 mb-4", children: "Your cart is empty" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Continue Shopping" }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 38,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-2", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.product.image, alt: item.product.name, className: "w-24 h-24 object-cover rounded-lg" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold text-lg", children: item.product.name }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 48,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-sm", children: item.product.description }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex items-center gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center border rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateQuantity(item.product.id, Math.max(0, item.quantity - 1)), className: "px-3 py-1 hover:bg-gray-100 transition-colors", children: "-" }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 52,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 border-x", children: item.quantity }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 55,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => updateQuantity(item.product.id, item.quantity + 1), className: "px-3 py-1 hover:bg-gray-100 transition-colors", children: "+" }, void 0, false, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 56,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 51,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => removeItem(item.product.id), className: "text-red-500 hover:text-red-600 transition-colors", children: "Remove" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 60,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold", children: [
          "\u20B9",
          (item.product.price * item.quantity).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this)
      ] }, item.product.id, true, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 45,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "lg:col-span-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-sm sticky top-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Order Summary" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u20B9",
              total.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delivery Fee" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 80,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u20B940.00" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 81,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t pt-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u20B9",
              (total + 40).toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 86,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 84,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 83,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 74,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/checkout", className: "block w-full py-3 px-4 rounded-full bg-primary-500 text-white text-center font-medium hover:bg-primary-600 transition-colors", children: "Proceed to Checkout" }, void 0, false, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 90,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 43,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(Cart, "ALDj6a7n+0s6dxYl/5dxnRGTvRI=", false, function() {
  return [useCart];
});
_c = Cart;
var _c;
$RefreshReg$(_c, "Cart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Cart as default
};
//# sourceMappingURL=/build/routes/cart-O6ZNBFI6.js.map
