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

// app/routes/orders.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/orders.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/orders.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function Orders() {
  _s();
  const {
    orders
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-8", children: "My Orders" }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl text-gray-600 mb-4", children: "No orders yet" }, void 0, false, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Start Shopping" }, void 0, false, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 51,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-6", children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold", children: [
            "Order #",
            order.id
          ] }, void 0, true, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: order.date }, void 0, false, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 61,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm", children: order.status }, void 0, false, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t pt-4", children: order.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: item.name }, void 0, false, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 71,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
            "Qty: ",
            item.quantity
          ] }, void 0, true, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 72,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium", children: [
          "\u20B9",
          (item.price * item.quantity).toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)
      ] }, index, true, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 69,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 68,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-t mt-4 pt-4 flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: "Total" }, void 0, false, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold", children: [
          "\u20B9",
          order.total.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 80,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this)
    ] }, order.id, true, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 57,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 56,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(Orders, "REZ/uewjGaXhSxuZZAJ5w5to6lI=", false, function() {
  return [useLoaderData];
});
_c = Orders;
var _c;
$RefreshReg$(_c, "Orders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Orders as default
};
//# sourceMappingURL=/build/routes/orders-3SX7B5K2.js.map
