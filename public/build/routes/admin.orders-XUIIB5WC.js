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

// app/routes/admin.orders.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/AdminOrderList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminOrderList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminOrderList.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminOrderList({
  orders
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Orders" }, void 0, false, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded-lg px-4 py-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Orders" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "pending", children: "Pending" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "in_progress", children: "In Progress" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 31,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "delivered", children: "Delivered" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Order ID" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Customer" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Total" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 41,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: [
          "#",
          order.id
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: order.customerName }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OrderStatus, { status: order.status }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 70,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          "\u20B9",
          order.total.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 73,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(order.createdAt).toLocaleDateString() }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-primary-600 hover:text-primary-900", children: "View Details" }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 79,
          columnNumber: 19
        }, this)
      ] }, order.id, true, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 63,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminOrderList.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = AdminOrderList;
function OrderStatus({
  status
}) {
  const getStatusColor = (status2) => {
    switch (status2.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`, children: status }, void 0, false, {
    fileName: "app/components/admin/AdminOrderList.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
}
_c2 = OrderStatus;
var _c;
var _c2;
$RefreshReg$(_c, "AdminOrderList");
$RefreshReg$(_c2, "OrderStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.orders.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.orders.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.orders.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminOrders() {
  _s();
  const {
    orders
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminOrderList, { orders }, void 0, false, {
    fileName: "app/routes/admin.orders.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(AdminOrders, "REZ/uewjGaXhSxuZZAJ5w5to6lI=", false, function() {
  return [useLoaderData];
});
_c3 = AdminOrders;
var _c3;
$RefreshReg$(_c3, "AdminOrders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminOrders as default
};
//# sourceMappingURL=/build/routes/admin.orders-XUIIB5WC.js.map
