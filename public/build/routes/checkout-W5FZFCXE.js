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

// app/routes/checkout.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/checkout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/checkout.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Checkout() {
  _s();
  const {
    items,
    total
  } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "Checkout" }, void 0, false, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-sm mb-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Delivery Address" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Full Name" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 42,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500", required: true }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 41,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Phone Number" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "tel", className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500", required: true }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 47,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Address" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 50,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500", rows: 3, required: true }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 51,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Delivery Instructions (Optional)" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 54,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500", rows: 2, placeholder: "Any specific instructions for delivery" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 53,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Payment Method" }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment", value: "cod", className: "mr-3", defaultChecked: true }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 64,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "Cash on Delivery" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 66,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Pay when your order arrives" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 67,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 65,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "payment", value: "online", className: "mr-3" }, void 0, false, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: "Online Payment" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 73,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: "Pay now using UPI, Card, or Net Banking" }, void 0, false, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 72,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 60,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-sm sticky top-24", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Order Summary" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-3 flex justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: item.product.name }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 87,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
              "Qty: ",
              item.quantity
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 88,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 86,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: [
            "\u20B9",
            (item.product.price * item.quantity).toFixed(2)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 90,
            columnNumber: 19
          }, this)
        ] }, item.product.id, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 85,
          columnNumber: 34
        }, this)) }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-4 pt-4 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Subtotal" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 96,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u20B9",
              total.toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 97,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 95,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delivery Fee" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 100,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u20B940.00" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t pt-2 mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Total" }, void 0, false, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 105,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              "\u20B9",
              (total + 40).toFixed(2)
            ] }, void 0, true, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 106,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 103,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "w-full mt-6 py-3 px-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors", onClick: () => {
          alert("Order placed successfully!");
          window.location.href = "/orders";
        }, children: "Place Order" }, void 0, false, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Checkout, "sulvaxeD6t5bDn/5jZPkkQ/WB0A=", false, function() {
  return [useCart];
});
_c = Checkout;
var _c;
$RefreshReg$(_c, "Checkout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Checkout as default
};
//# sourceMappingURL=/build/routes/checkout-W5FZFCXE.js.map
