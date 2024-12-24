import {
  ProductGrid
} from "/build/_shared/chunk-3W4OFQ4V.js";
import "/build/_shared/chunk-XJJYUWGV.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/models/product.server
var require_product = __commonJS({
  "empty-module:~/models/product.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/category.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_product = __toESM(require_product(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/category.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/category.$id.tsx"
  );
  import.meta.hot.lastModified = "1735067405681";
}
function CategoryPage() {
  _s();
  const {
    products
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductGrid, { products }, void 0, false, {
    fileName: "app/routes/category.$id.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/category.$id.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(CategoryPage, "myEvnF20fcYyfWpqSQ3PXWXvEBg=", false, function() {
  return [useLoaderData];
});
_c = CategoryPage;
var _c;
$RefreshReg$(_c, "CategoryPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CategoryPage as default
};
//# sourceMappingURL=/build/routes/category.$id-RZ7H4ZTY.js.map
