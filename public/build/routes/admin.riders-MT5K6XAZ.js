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

// app/routes/admin.riders.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/RiderManagement.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/RiderManagement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/RiderManagement.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function RiderManagement({
  riders
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Riders" }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600", children: "Add New Rider" }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: riders.map((rider) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiderCard, { rider }, rider.id, false, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 33,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = RiderManagement;
function RiderCard({
  rider
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold", children: rider.name }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiderStatus, { status: rider.status }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Total Deliveries" }, void 0, false, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: rider.totalDeliveries }, void 0, false, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Rating" }, void 0, false, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: [
          "\u2B50 ",
          rider.rating.toFixed(1)
        ] }, void 0, true, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-600", children: "Active Order" }, void 0, false, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: rider.activeOrder ? `#${rider.activeOrder}` : "None" }, void 0, false, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-4 border-t flex justify-end space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-900", children: "View Details" }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "px-3 py-1 text-sm text-primary-600 hover:text-primary-900", children: "Assign Order" }, void 0, false, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c2 = RiderCard;
function RiderStatus({
  status
}) {
  const getStatusColor = (status2) => {
    switch (status2.toLowerCase()) {
      case "online":
        return "bg-green-100 text-green-800";
      case "offline":
        return "bg-gray-100 text-gray-800";
      case "busy":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-1 text-xs rounded-full ${getStatusColor(status)}`, children: status }, void 0, false, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 90,
    columnNumber: 10
  }, this);
}
_c3 = RiderStatus;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "RiderManagement");
$RefreshReg$(_c2, "RiderCard");
$RefreshReg$(_c3, "RiderStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.riders.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.riders.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.riders.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminRiders() {
  _s();
  const {
    riders
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RiderManagement, { riders }, void 0, false, {
    fileName: "app/routes/admin.riders.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(AdminRiders, "bBbM2wAoTjTUXdYnEHbmNqfgwd4=", false, function() {
  return [useLoaderData];
});
_c4 = AdminRiders;
var _c4;
$RefreshReg$(_c4, "AdminRiders");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminRiders as default
};
//# sourceMappingURL=/build/routes/admin.riders-MT5K6XAZ.js.map
