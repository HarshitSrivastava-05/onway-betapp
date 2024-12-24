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

// app/routes/rider.deliveries.tsx
var import_node = __toESM(require_node(), 1);

// app/components/rider/DeliveryHistory.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/rider/DeliveryHistory.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/rider/DeliveryHistory.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function DeliveryHistory({
  deliveries
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Delivery History" }, void 0, false, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Order ID" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Customer" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Locations" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Amount" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Status" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Completed" }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 31,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: deliveries.map((delivery) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: [
          "#",
          delivery.orderId
        ] }, void 0, true, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 54,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: delivery.customerName }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 text-sm text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "From: ",
            delivery.pickupLocation
          ] }, void 0, true, {
            fileName: "app/components/rider/DeliveryHistory.tsx",
            lineNumber: 62,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
            "To: ",
            delivery.dropLocation
          ] }, void 0, true, {
            fileName: "app/components/rider/DeliveryHistory.tsx",
            lineNumber: 63,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 61,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          "\u20B9",
          delivery.amount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeliveryStatus, { status: delivery.status }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(delivery.completedAt).toLocaleString() }, void 0, false, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this)
      ] }, delivery.id, true, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 53,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/rider/DeliveryHistory.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = DeliveryHistory;
function DeliveryStatus({
  status
}) {
  const getStatusColor = (status2) => {
    switch (status2.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(status)}`, children: status }, void 0, false, {
    fileName: "app/components/rider/DeliveryHistory.tsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_c2 = DeliveryStatus;
var _c;
var _c2;
$RefreshReg$(_c, "DeliveryHistory");
$RefreshReg$(_c2, "DeliveryStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/rider.deliveries.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/rider.deliveries.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/rider.deliveries.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function RiderDeliveries() {
  _s();
  const {
    deliveries
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeliveryHistory, { deliveries }, void 0, false, {
    fileName: "app/routes/rider.deliveries.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(RiderDeliveries, "17BifQyK0pwyS4XRitgzsZimmnI=", false, function() {
  return [useLoaderData];
});
_c3 = RiderDeliveries;
var _c3;
$RefreshReg$(_c3, "RiderDeliveries");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RiderDeliveries as default
};
//# sourceMappingURL=/build/routes/rider.deliveries-4J2BEANT.js.map
