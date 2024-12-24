import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Link,
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

// app/routes/admin._index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/AdminDashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/AdminDashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/AdminDashboard.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminDashboard({
  stats
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Admin Dashboard" }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Total Orders", value: stats.totalOrders, icon: "\u{1F4E6}" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Active Orders", value: stats.activeOrders, icon: "\u{1F69A}" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Total Riders", value: stats.totalRiders, icon: "\u{1F6F5}" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Online Riders", value: stats.onlineRiders, icon: "\u2705" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Low Stock Items", value: stats.lowStockItems, icon: "\u26A0\uFE0F" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, { title: "Total Products", value: stats.totalProducts, icon: "\u{1F4CA}" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuickActions, {}, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecentActivity, {}, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = AdminDashboard;
function StatCard({
  title,
  value,
  icon
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-600", children: title }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold mt-1", children: value }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl", children: icon }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_c2 = StatCard;
function QuickActions() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Quick Actions" }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/orders", className: "p-4 border rounded-lg hover:bg-gray-50 text-center", children: "Manage Orders" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/riders", className: "p-4 border rounded-lg hover:bg-gray-50 text-center", children: "Manage Riders" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/inventory", className: "p-4 border rounded-lg hover:bg-gray-50 text-center", children: "Manage Inventory" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/products", className: "p-4 border rounded-lg hover:bg-gray-50 text-center", children: "Manage Products" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_c3 = QuickActions;
function RecentActivity() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mb-4", children: "Recent Activity" }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActivityItem, { message: "Low stock alert: Organic Bananas", time: "2 minutes ago" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActivityItem, { message: "New order #1234 received", time: "5 minutes ago" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActivityItem, { message: "Rider Mike assigned to order #1233", time: "12 minutes ago" }, void 0, false, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 81,
    columnNumber: 10
  }, this);
}
_c4 = RecentActivity;
function ActivityItem({
  message,
  time
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between py-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-600", children: message }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-xs text-gray-500", children: time }, void 0, false, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_c5 = ActivityItem;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "AdminDashboard");
$RefreshReg$(_c2, "StatCard");
$RefreshReg$(_c3, "QuickActions");
$RefreshReg$(_c4, "RecentActivity");
$RefreshReg$(_c5, "ActivityItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin._index.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminIndex() {
  _s();
  const {
    stats
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminDashboard, { stats }, void 0, false, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_s(AdminIndex, "glWwXbowokwNwpVNU8Yux2Z5J1U=", false, function() {
  return [useLoaderData];
});
_c6 = AdminIndex;
var _c6;
$RefreshReg$(_c6, "AdminIndex");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminIndex as default
};
//# sourceMappingURL=/build/routes/admin._index-NQCQVUCS.js.map
