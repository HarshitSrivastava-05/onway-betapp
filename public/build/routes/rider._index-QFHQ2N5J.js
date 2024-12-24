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

// app/routes/rider._index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/rider/RiderDashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/rider/RiderDashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/rider/RiderDashboard.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function RiderDashboard({
  rider
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
          "Welcome, ",
          rider.name
        ] }, void 0, true, {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "Have a great day delivering!" }, void 0, false, {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusToggle, { status: rider.status }, void 0, false, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Today's Deliveries", value: rider.todaysDeliveries, icon: "\u{1F69A}" }, void 0, false, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Today's Earnings", value: `\u20B9${rider.todaysEarnings}`, icon: "\u{1F4B0}" }, void 0, false, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    rider.currentOrder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CurrentDelivery, { order: rider.currentOrder }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 38,
      columnNumber: 29
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NoActiveDelivery, {}, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 38,
      columnNumber: 78
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = RiderDashboard;
function StatusToggle({
  status
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: `px-4 py-2 rounded-full flex items-center ${status === "online" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `w-2 h-2 rounded-full mr-2 ${status === "online" ? "bg-green-500" : "bg-gray-500"}` }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    status === "online" ? "Online" : "Offline"
  ] }, void 0, true, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c2 = StatusToggle;
function StatCard({
  title,
  value,
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: title }, void 0, false, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold mt-1", children: value }, void 0, false, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: icon }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c3 = StatCard;
function NoActiveDelivery() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl mb-4", children: "\u{1F6F5}" }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: "No Active Delivery" }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "New delivery requests will appear here when available" }, void 0, false, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 68,
    columnNumber: 10
  }, this);
}
_c4 = NoActiveDelivery;
function CurrentDelivery({
  order
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Current Delivery" }, void 0, false, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c5 = CurrentDelivery;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "RiderDashboard");
$RefreshReg$(_c2, "StatusToggle");
$RefreshReg$(_c3, "StatCard");
$RefreshReg$(_c4, "NoActiveDelivery");
$RefreshReg$(_c5, "CurrentDelivery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/rider._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/rider._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/rider._index.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function RiderIndex() {
  _s();
  const {
    rider
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RiderDashboard, { rider }, void 0, false, {
    fileName: "app/routes/rider._index.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(RiderIndex, "Vw+mEvCdCHVz0TvdejfCNh9xjaw=", false, function() {
  return [useLoaderData];
});
_c6 = RiderIndex;
var _c6;
$RefreshReg$(_c6, "RiderIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RiderIndex as default
};
//# sourceMappingURL=/build/routes/rider._index-QFHQ2N5J.js.map
