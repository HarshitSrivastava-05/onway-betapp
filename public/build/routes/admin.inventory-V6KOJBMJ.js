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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/admin.inventory.tsx
var import_node = __toESM(require_node(), 1);

// app/components/admin/InventoryManagement.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/InventoryManagement.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/InventoryManagement.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function InventoryManagement({
  inventory
}) {
  _s();
  const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
  const [filter, setFilter] = (0, import_react.useState)("all");
  const filteredInventory = inventory.filter((item) => item.product.name.toLowerCase().includes(searchTerm.toLowerCase())).filter((item) => filter === "all" ? true : item.quantity <= item.lowStockAlert);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Inventory Management" }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600", children: "Add Stock" }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 flex gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "search", placeholder: "Search products...", className: "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { className: "border rounded-lg px-4 py-2", value: filter, onChange: (e) => setFilter(e.target.value), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "all", children: "All Items" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "low-stock", children: "Low Stock" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Product" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 54,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Quantity" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Status" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Actions" }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 53,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: filteredInventory.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.product.image, alt: item.product.name, className: "w-10 h-10 rounded-lg object-cover" }, void 0, false, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 72,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm font-medium text-gray-900", children: item.product.name }, void 0, false, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 74,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 73,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 70,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          item.quantity,
          " units"
        ] }, void 0, true, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StockStatus, { quantity: item.quantity, lowStockAlert: item.lowStockAlert }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-primary-600 hover:text-primary-900 mr-4", children: "Update Stock" }, void 0, false, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 87,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-gray-600 hover:text-gray-900", children: "View History" }, void 0, false, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this)
      ] }, item.id, true, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 69,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 51,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_s(InventoryManagement, "JGjEKa62gMiFD8ofx3DxJYocoUc=");
_c = InventoryManagement;
function StockStatus({
  quantity,
  lowStockAlert
}) {
  if (quantity <= 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs rounded-full bg-red-100 text-red-800", children: "Out of Stock" }, void 0, false, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 108,
      columnNumber: 12
    }, this);
  }
  if (quantity <= lowStockAlert) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800", children: "Low Stock" }, void 0, false, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 113,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "px-2 py-1 text-xs rounded-full bg-green-100 text-green-800", children: "In Stock" }, void 0, false, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 117,
    columnNumber: 10
  }, this);
}
_c2 = StockStatus;
var _c;
var _c2;
$RefreshReg$(_c, "InventoryManagement");
$RefreshReg$(_c2, "StockStatus");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.inventory.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/admin.inventory.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/admin.inventory.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function AdminInventory() {
  _s2();
  const {
    inventory
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InventoryManagement, { inventory }, void 0, false, {
    fileName: "app/routes/admin.inventory.tsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
}
_s2(AdminInventory, "08ARvJ1x9LHXbleTr6DtL+/Z1cc=", false, function() {
  return [useLoaderData];
});
_c3 = AdminInventory;
var _c3;
$RefreshReg$(_c3, "AdminInventory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminInventory as default
};
//# sourceMappingURL=/build/routes/admin.inventory-V6KOJBMJ.js.map
