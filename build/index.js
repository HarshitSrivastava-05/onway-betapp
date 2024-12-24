var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(
    /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

// app/lib/hooks/useCart.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        let items = [...get().items], index = items.findIndex((item) => item.product.id === product.id);
        index >= 0 ? items[index].quantity += quantity : items.push({ product, quantity }), set({ items });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId)
        }));
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        set((state) => ({
          items: state.items.map(
            (item) => item.product.id === productId ? { ...item, quantity } : item
          )
        }));
      },
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      }
    }),
    {
      name: "onway-cart"
    }
  )
);

// app/components/layout/SearchBar.tsx
import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function SearchBar() {
  let [query, setQuery] = useState(""), navigate = useNavigate();
  return /* @__PURE__ */ jsxDEV2("form", { onSubmit: (e) => {
    e.preventDefault(), query.trim() && navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }, className: "relative flex-1 max-w-xl mx-4", children: [
    /* @__PURE__ */ jsxDEV2(
      "input",
      {
        type: "search",
        value: query,
        onChange: (e) => setQuery(e.target.value),
        placeholder: "Search for products...",
        className: "w-full pl-4 pr-12 py-2 rounded-full border focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      },
      void 0,
      !1,
      {
        fileName: "app/components/layout/SearchBar.tsx",
        lineNumber: 17,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV2("button", { type: "submit", className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-600 hover:text-gray-900", children: /* @__PURE__ */ jsxDEV2("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV2("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }, void 0, !1, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/SearchBar.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/SearchBar.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";
import { useEffect, useState as useState2 } from "react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function LanguageSwitcher() {
  let { i18n } = useTranslation(), [mounted, setMounted] = useState2(!1);
  useEffect(() => {
    setMounted(!0);
  }, []);
  let buttonClasses = (isActive) => `px-2 py-1 rounded-md text-sm ${mounted && isActive ? "bg-primary-500 text-white" : "text-gray-600 hover:bg-gray-100"} transition-colors duration-200`;
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsxDEV3(
      "button",
      {
        onClick: () => i18n.changeLanguage("en"),
        className: buttonClasses(i18n.language === "en"),
        children: "EN"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LanguageSwitcher.tsx",
        lineNumber: 21,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(
      "button",
      {
        onClick: () => i18n.changeLanguage("hi"),
        className: buttonClasses(i18n.language === "hi"),
        children: "\u0939\u093F"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LanguageSwitcher.tsx",
        lineNumber: 27,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/LanguageSwitcher.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/layout/Header.tsx
import { useTranslation as useTranslation2 } from "react-i18next";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Header() {
  let { items } = useCart(), { t } = useTranslation2(), cartItemCount = items.reduce((total, item) => total + item.quantity, 0);
  return /* @__PURE__ */ jsxDEV4("header", { className: "bg-white shadow-md sticky top-0 z-50", children: /* @__PURE__ */ jsxDEV4("nav", { className: "container mx-auto", children: /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center justify-between h-16 px-4", children: [
    /* @__PURE__ */ jsxDEV4("a", { href: "/", className: "text-2xl font-bold text-primary-500 flex items-center", children: [
      /* @__PURE__ */ jsxDEV4("span", { className: "text-3xl mr-2", children: "\u{1F69A}" }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("span", { className: "hidden sm:inline", children: "OnWay" }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "hidden md:block flex-1 max-w-xl mx-8", children: /* @__PURE__ */ jsxDEV4(SearchBar, {}, void 0, !1, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-6", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxDEV4(LanguageSwitcher, {}, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "hidden lg:flex items-center space-x-8", children: [
        /* @__PURE__ */ jsxDEV4("a", { href: "/products", className: "text-gray-600 hover:text-primary-500 transition-colors", children: t("nav.products") }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("a", { href: "/offers", className: "text-gray-600 hover:text-primary-500 transition-colors", children: t("nav.offers") }, void 0, !1, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV4("a", { href: "/cart", className: "p-2 text-gray-600 hover:text-primary-500 transition-colors relative", children: [
          /* @__PURE__ */ jsxDEV4("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 47,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          cartItemCount > 0 && /* @__PURE__ */ jsxDEV4("span", { className: "absolute -top-1 -right-1 bg-primary-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-lg", children: cartItemCount }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 50,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV4("a", { href: "/login", className: "hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-primary-500 hover:bg-primary-50 transition-colors", children: [
          /* @__PURE__ */ jsxDEV4("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV4("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 56,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV4("span", { children: t("nav.signIn") }, void 0, !1, {
            fileName: "app/components/layout/Header.tsx",
            lineNumber: 59,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/layout/Header.tsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/layout/Header.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layout/Header.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layout/Header.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IMNV33KW.css";

// app/root.tsx
import { useEffect as useEffect2 } from "react";
import { useTranslation as useTranslation3 } from "react-i18next";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
async function loader({ request }) {
  let locale = request.headers.get("Accept-Language") || "en";
  return locale = locale.split(",")[0].split("-")[0], json({ locale });
}
function App() {
  let { locale } = useLoaderData(), { i18n } = useTranslation3();
  return useEffect2(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]), /* @__PURE__ */ jsxDEV5("html", { lang: locale, className: "h-full", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "h-full bg-gray-50", children: [
      /* @__PURE__ */ jsxDEV5(Header, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/rider.deliveries.tsx
var rider_deliveries_exports = {};
__export(rider_deliveries_exports, {
  default: () => RiderDeliveries,
  loader: () => loader2
});
import { json as json2 } from "@remix-run/node";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/components/rider/DeliveryHistory.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function DeliveryHistory({ deliveries }) {
  return /* @__PURE__ */ jsxDEV6("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-2xl font-bold mb-6", children: "Delivery History" }, void 0, !1, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDEV6("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV6("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV6("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV6("tr", { children: [
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Order ID" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 26,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Customer" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Locations" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 32,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Amount" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 35,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Status" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 38,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV6("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Completed" }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 41,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 25,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV6("tbody", { className: "divide-y divide-gray-200", children: deliveries.map((delivery) => /* @__PURE__ */ jsxDEV6("tr", { children: [
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: [
          "#",
          delivery.orderId
        ] }, void 0, !0, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 49,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: delivery.customerName }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 52,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 text-sm text-gray-500", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsxDEV6("span", { children: [
            "From: ",
            delivery.pickupLocation
          ] }, void 0, !0, {
            fileName: "app/components/rider/DeliveryHistory.tsx",
            lineNumber: 57,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV6("span", { children: [
            "To: ",
            delivery.dropLocation
          ] }, void 0, !0, {
            fileName: "app/components/rider/DeliveryHistory.tsx",
            lineNumber: 58,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 55,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          "\u20B9",
          delivery.amount.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV6(DeliveryStatus, { status: delivery.status }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 65,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV6("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(delivery.completedAt).toLocaleString() }, void 0, !1, {
          fileName: "app/components/rider/DeliveryHistory.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, delivery.id, !0, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 48,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/components/rider/DeliveryHistory.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/rider/DeliveryHistory.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/rider/DeliveryHistory.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function DeliveryStatus({ status }) {
  return /* @__PURE__ */ jsxDEV6("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${((status2) => {
    switch (status2.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  })(status)}`, children: status }, void 0, !1, {
    fileName: "app/components/rider/DeliveryHistory.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/rider.deliveries.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
async function loader2() {
  return json2({
    deliveries: [
      {
        id: "1",
        orderId: "1234",
        customerName: "John Doe",
        pickupLocation: "123 Store St",
        dropLocation: "456 Home Ave",
        amount: 299.99,
        status: "completed",
        completedAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  });
}
function RiderDeliveries() {
  let { deliveries } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV7(DeliveryHistory, { deliveries }, void 0, !1, {
    fileName: "app/routes/rider.deliveries.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/routes/admin.inventory.tsx
var admin_inventory_exports = {};
__export(admin_inventory_exports, {
  default: () => AdminInventory,
  loader: () => loader3
});
import { json as json3 } from "@remix-run/node";
import { useLoaderData as useLoaderData3 } from "@remix-run/react";

// app/components/admin/InventoryManagement.tsx
import { useState as useState3 } from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function InventoryManagement({ inventory }) {
  let [searchTerm, setSearchTerm] = useState3(""), [filter, setFilter] = useState3("all"), filteredInventory = inventory.filter(
    (item) => item.product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(
    (item) => filter === "all" ? !0 : item.quantity <= item.lowStockAlert
  );
  return /* @__PURE__ */ jsxDEV8("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV8("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV8("h1", { className: "text-2xl font-bold", children: "Inventory Management" }, void 0, !1, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600", children: "Add Stock" }, void 0, !1, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "mb-6 flex gap-4", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "flex-1", children: /* @__PURE__ */ jsxDEV8(
        "input",
        {
          type: "search",
          placeholder: "Search products...",
          className: "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value)
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 41,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8(
        "select",
        {
          className: "border rounded-lg px-4 py-2",
          value: filter,
          onChange: (e) => setFilter(e.target.value),
          children: [
            /* @__PURE__ */ jsxDEV8("option", { value: "all", children: "All Items" }, void 0, !1, {
              fileName: "app/components/admin/InventoryManagement.tsx",
              lineNumber: 54,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV8("option", { value: "low-stock", children: "Low Stock" }, void 0, !1, {
              fileName: "app/components/admin/InventoryManagement.tsx",
              lineNumber: 55,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 49,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: /* @__PURE__ */ jsxDEV8("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV8("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV8("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV8("tr", { children: [
        /* @__PURE__ */ jsxDEV8("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Product" }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV8("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Quantity" }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV8("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Status" }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV8("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase", children: "Actions" }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 62,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV8("tbody", { className: "divide-y divide-gray-200", children: filteredInventory.map((item) => /* @__PURE__ */ jsxDEV8("tr", { children: [
        /* @__PURE__ */ jsxDEV8("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV8(
            "img",
            {
              src: item.product.image,
              alt: item.product.name,
              className: "w-10 h-10 rounded-lg object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/components/admin/InventoryManagement.tsx",
              lineNumber: 83,
              columnNumber: 23
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8("div", { className: "ml-4", children: /* @__PURE__ */ jsxDEV8("div", { className: "text-sm font-medium text-gray-900", children: item.product.name }, void 0, !1, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 89,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 88,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 81,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          item.quantity,
          " units"
        ] }, void 0, !0, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV8(StockStatus, { quantity: item.quantity, lowStockAlert: item.lowStockAlert }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 99,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 98,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV8("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          /* @__PURE__ */ jsxDEV8("button", { className: "text-primary-600 hover:text-primary-900 mr-4", children: "Update Stock" }, void 0, !1, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 102,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ jsxDEV8("button", { className: "text-gray-600 hover:text-gray-900", children: "View History" }, void 0, !1, {
            fileName: "app/components/admin/InventoryManagement.tsx",
            lineNumber: 105,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/admin/InventoryManagement.tsx",
          lineNumber: 101,
          columnNumber: 19
        }, this)
      ] }, item.id, !0, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/InventoryManagement.tsx",
        lineNumber: 78,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/InventoryManagement.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
function StockStatus({ quantity, lowStockAlert }) {
  return quantity <= 0 ? /* @__PURE__ */ jsxDEV8("span", { className: "px-2 py-1 text-xs rounded-full bg-red-100 text-red-800", children: "Out of Stock" }, void 0, !1, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 122,
    columnNumber: 7
  }, this) : quantity <= lowStockAlert ? /* @__PURE__ */ jsxDEV8("span", { className: "px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800", children: "Low Stock" }, void 0, !1, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 130,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV8("span", { className: "px-2 py-1 text-xs rounded-full bg-green-100 text-green-800", children: "In Stock" }, void 0, !1, {
    fileName: "app/components/admin/InventoryManagement.tsx",
    lineNumber: 137,
    columnNumber: 5
  }, this);
}

// app/routes/admin.inventory.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
async function loader3() {
  return json3({
    inventory: [
      {
        id: "1",
        product: {
          id: "1",
          name: "Organic Bananas",
          image: "/images/products/bananas.jpg"
        },
        quantity: 150,
        lowStockAlert: 20
      },
      {
        id: "2",
        product: {
          id: "2",
          name: "Farm Fresh Eggs",
          image: "/images/products/eggs.jpg"
        },
        quantity: 15,
        lowStockAlert: 30
      }
    ]
  });
}
function AdminInventory() {
  let { inventory } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV9(InventoryManagement, { inventory }, void 0, !1, {
    fileName: "app/routes/admin.inventory.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}

// app/routes/admin._index.tsx
var admin_index_exports = {};
__export(admin_index_exports, {
  default: () => AdminIndex,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/node";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";

// app/components/admin/AdminDashboard.tsx
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function AdminDashboard({ stats }) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV10("h1", { className: "text-2xl font-bold mb-6", children: "Admin Dashboard" }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Total Orders",
          value: stats.totalOrders,
          icon: "\u{1F4E6}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Active Orders",
          value: stats.activeOrders,
          icon: "\u{1F69A}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 27,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Total Riders",
          value: stats.totalRiders,
          icon: "\u{1F6F5}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Online Riders",
          value: stats.onlineRiders,
          icon: "\u2705"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 37,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Low Stock Items",
          value: stats.lowStockItems,
          icon: "\u26A0\uFE0F"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 42,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        StatCard,
        {
          title: "Total Products",
          value: stats.totalProducts,
          icon: "\u{1F4CA}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 47,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxDEV10(QuickActions, {}, void 0, !1, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10(RecentActivity, {}, void 0, !1, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function StatCard({ title, value, icon }) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV10("div", { children: [
      /* @__PURE__ */ jsxDEV10("p", { className: "text-sm text-gray-600", children: title }, void 0, !1, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV10("p", { className: "text-2xl font-bold mt-1", children: value }, void 0, !1, {
        fileName: "app/components/admin/AdminDashboard.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV10("span", { className: "text-2xl", children: icon }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 65,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
function QuickActions() {
  return /* @__PURE__ */ jsxDEV10("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ jsxDEV10("h2", { className: "text-lg font-semibold mb-4", children: "Quick Actions" }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: "/admin/orders",
          className: "p-4 border rounded-lg hover:bg-gray-50 text-center",
          children: "Manage Orders"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 81,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: "/admin/riders",
          className: "p-4 border rounded-lg hover:bg-gray-50 text-center",
          children: "Manage Riders"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 87,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: "/admin/inventory",
          className: "p-4 border rounded-lg hover:bg-gray-50 text-center",
          children: "Manage Inventory"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        Link,
        {
          to: "/admin/products",
          className: "p-4 border rounded-lg hover:bg-gray-50 text-center",
          children: "Manage Products"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 99,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
function RecentActivity() {
  return /* @__PURE__ */ jsxDEV10("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ jsxDEV10("h2", { className: "text-lg font-semibold mb-4", children: "Recent Activity" }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxDEV10(
        ActivityItem,
        {
          message: "Low stock alert: Organic Bananas",
          time: "2 minutes ago"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 115,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        ActivityItem,
        {
          message: "New order #1234 received",
          time: "5 minutes ago"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 119,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV10(
        ActivityItem,
        {
          message: "Rider Mike assigned to order #1233",
          time: "12 minutes ago"
        },
        void 0,
        !1,
        {
          fileName: "app/components/admin/AdminDashboard.tsx",
          lineNumber: 123,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
function ActivityItem({ message, time }) {
  return /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center justify-between py-2", children: [
    /* @__PURE__ */ jsxDEV10("span", { className: "text-sm text-gray-600", children: message }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 135,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10("span", { className: "text-xs text-gray-500", children: time }, void 0, !1, {
      fileName: "app/components/admin/AdminDashboard.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminDashboard.tsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/admin._index.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
async function loader4() {
  return json4({
    stats: {
      totalOrders: 156,
      activeOrders: 12,
      totalRiders: 25,
      onlineRiders: 18
    }
  });
}
function AdminIndex() {
  let { stats } = useLoaderData4();
  return /* @__PURE__ */ jsxDEV11(AdminDashboard, { stats }, void 0, !1, {
    fileName: "app/routes/admin._index.tsx",
    lineNumber: 18,
    columnNumber: 10
  }, this);
}

// app/routes/admin.orders.tsx
var admin_orders_exports = {};
__export(admin_orders_exports, {
  default: () => AdminOrders,
  loader: () => loader5
});
import { json as json5 } from "@remix-run/node";
import { useLoaderData as useLoaderData5 } from "@remix-run/react";

// app/components/admin/AdminOrderList.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function AdminOrderList({ orders }) {
  return /* @__PURE__ */ jsxDEV12("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "text-2xl font-bold", children: "Orders" }, void 0, !1, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV12("div", { className: "flex gap-4", children: /* @__PURE__ */ jsxDEV12("select", { className: "border rounded-lg px-4 py-2", children: [
        /* @__PURE__ */ jsxDEV12("option", { value: "all", children: "All Orders" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("option", { value: "pending", children: "Pending" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("option", { value: "in_progress", children: "In Progress" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV12("option", { value: "delivered", children: "Delivered" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ jsxDEV12("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxDEV12("table", { className: "w-full", children: [
      /* @__PURE__ */ jsxDEV12("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxDEV12("tr", { children: [
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Order ID" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Customer" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 46,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Total" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 49,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Date" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV12("th", { className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Actions" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 38,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12("tbody", { className: "divide-y divide-gray-200", children: orders.map((order) => /* @__PURE__ */ jsxDEV12("tr", { children: [
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: [
          "#",
          order.id
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 63,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: order.customerName }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 66,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap", children: /* @__PURE__ */ jsxDEV12(OrderStatus, { status: order.status }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 69,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: [
          "\u20B9",
          order.total.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: new Date(order.createdAt).toLocaleDateString() }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ jsxDEV12("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: /* @__PURE__ */ jsxDEV12("button", { className: "text-primary-600 hover:text-primary-900", children: "View Details" }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 79,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/components/admin/AdminOrderList.tsx",
          lineNumber: 78,
          columnNumber: 19
        }, this)
      ] }, order.id, !0, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)) }, void 0, !1, {
        fileName: "app/components/admin/AdminOrderList.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/admin/AdminOrderList.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/AdminOrderList.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
function OrderStatus({ status }) {
  return /* @__PURE__ */ jsxDEV12("span", { className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${((status2) => {
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
  })(status)}`, children: status }, void 0, !1, {
    fileName: "app/components/admin/AdminOrderList.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/admin.orders.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
async function loader5() {
  return json5({
    orders: [
      {
        id: "1",
        customerName: "John Doe",
        status: "pending",
        total: 299.99,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        items: [
          { name: "Organic Bananas", quantity: 2, price: 2.99 },
          { name: "Farm Fresh Eggs", quantity: 1, price: 4.99 }
        ]
      }
    ]
  });
}
function AdminOrders() {
  let { orders } = useLoaderData5();
  return /* @__PURE__ */ jsxDEV13(AdminOrderList, { orders }, void 0, !1, {
    fileName: "app/routes/admin.orders.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}

// app/routes/admin.riders.tsx
var admin_riders_exports = {};
__export(admin_riders_exports, {
  default: () => AdminRiders,
  loader: () => loader6
});
import { json as json6 } from "@remix-run/node";
import { useLoaderData as useLoaderData6 } from "@remix-run/react";

// app/components/admin/RiderManagement.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function RiderManagement({ riders }) {
  return /* @__PURE__ */ jsxDEV14("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV14("h1", { className: "text-2xl font-bold", children: "Riders" }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600", children: "Add New Rider" }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: riders.map((rider) => /* @__PURE__ */ jsxDEV14(RiderCard, { rider }, rider.id, !1, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function RiderCard({ rider }) {
  return /* @__PURE__ */ jsxDEV14("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "flex items-center justify-between mb-4", children: [
      /* @__PURE__ */ jsxDEV14("h3", { className: "font-semibold", children: rider.name }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14(RiderStatus, { status: rider.status }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxDEV14("span", { className: "text-gray-600", children: "Total Deliveries" }, void 0, !1, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("span", { className: "font-medium", children: rider.totalDeliveries }, void 0, !1, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxDEV14("span", { className: "text-gray-600", children: "Rating" }, void 0, !1, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("span", { className: "font-medium", children: [
          "\u2B50 ",
          rider.rating.toFixed(1)
        ] }, void 0, !0, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("div", { className: "flex justify-between text-sm", children: [
        /* @__PURE__ */ jsxDEV14("span", { className: "text-gray-600", children: "Active Order" }, void 0, !1, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV14("span", { className: "font-medium", children: rider.activeOrder ? `#${rider.activeOrder}` : "None" }, void 0, !1, {
          fileName: "app/components/admin/RiderManagement.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "mt-4 pt-4 border-t flex justify-end space-x-2", children: [
      /* @__PURE__ */ jsxDEV14("button", { className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-900", children: "View Details" }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV14("button", { className: "px-3 py-1 text-sm text-primary-600 hover:text-primary-900", children: "Assign Order" }, void 0, !1, {
        fileName: "app/components/admin/RiderManagement.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/admin/RiderManagement.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
function RiderStatus({ status }) {
  return /* @__PURE__ */ jsxDEV14("span", { className: `px-2 py-1 text-xs rounded-full ${((status2) => {
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
  })(status)}`, children: status }, void 0, !1, {
    fileName: "app/components/admin/RiderManagement.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/routes/admin.riders.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
async function loader6() {
  return json6({
    riders: [
      {
        id: "1",
        name: "Mike Wilson",
        status: "online",
        totalDeliveries: 156,
        rating: 4.8,
        activeOrder: null
      }
    ]
  });
}
function AdminRiders() {
  let { riders } = useLoaderData6();
  return /* @__PURE__ */ jsxDEV15(RiderManagement, { riders }, void 0, !1, {
    fileName: "app/routes/admin.riders.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}

// app/routes/category.$id.tsx
var category_id_exports = {};
__export(category_id_exports, {
  default: () => CategoryPage,
  loader: () => loader7
});
import { json as json7 } from "@remix-run/node";
import { useLoaderData as useLoaderData7 } from "@remix-run/react";

// app/data/dummy.ts
var categories = [
  {
    id: "1",
    name: "Groceries",
    image: "/images/categories/groceries.jpg",
    count: 45
  },
  {
    id: "2",
    name: "Fresh Produce",
    image: "/images/categories/produce.jpg",
    count: 32
  },
  {
    id: "3",
    name: "Dairy & Eggs",
    image: "/images/categories/dairy.jpg",
    count: 28
  },
  {
    id: "4",
    name: "Bakery",
    image: "/images/categories/bakery.jpg",
    count: 24
  },
  {
    id: "5",
    name: "Beverages",
    image: "/images/categories/beverages.jpg",
    count: 35
  },
  {
    id: "6",
    name: "Snacks",
    image: "/images/categories/snacks.jpg",
    count: 40
  }
], featuredProducts = [
  {
    id: "1",
    name: "Organic Bananas",
    description: "Fresh organic bananas, perfect for smoothies and snacks",
    price: 4.99,
    image: "/images/products/bananas.jpg",
    category: "2",
    inStock: !0
  },
  {
    id: "2",
    name: "Farm Fresh Eggs",
    description: "Free-range eggs from local farms",
    price: 6.99,
    image: "/images/products/eggs.jpg",
    category: "3",
    inStock: !0
  },
  {
    id: "3",
    name: "Sourdough Bread",
    description: "Freshly baked artisanal sourdough",
    price: 5.99,
    image: "/images/products/bread.jpg",
    category: "4",
    inStock: !0
  },
  {
    id: "4",
    name: "Cold Brew Coffee",
    description: "Smooth and refreshing cold brew coffee",
    price: 4.99,
    image: "/images/products/coffee.jpg",
    category: "5",
    inStock: !0
  },
  {
    id: "5",
    name: "Fresh Milk",
    description: "Locally sourced fresh whole milk",
    price: 3.99,
    image: "/images/products/milk.jpg",
    category: "3",
    inStock: !0
  },
  {
    id: "6",
    name: "Mixed Berries",
    description: "Assorted fresh berries pack",
    price: 7.99,
    image: "/images/products/berries.jpg",
    category: "2",
    inStock: !0
  }
];

// app/models/product.server.ts
async function getProductsByCategory(categoryId) {
  return featuredProducts.filter((product) => product.category === categoryId);
}

// app/components/products/ProductCard.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function ProductCard({ product }) {
  let { addItem } = useCart();
  return /* @__PURE__ */ jsxDEV16("div", { className: "bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]", children: [
    /* @__PURE__ */ jsxDEV16("div", { className: "relative h-48 md:h-56 bg-gray-100", children: [
      /* @__PURE__ */ jsxDEV16(
        "img",
        {
          src: product.image,
          alt: product.name,
          className: "w-full h-full object-cover"
        },
        void 0,
        !1,
        {
          fileName: "app/components/products/ProductCard.tsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      ),
      product.inStock ? /* @__PURE__ */ jsxDEV16("span", { className: "absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs rounded-full", children: "In Stock" }, void 0, !1, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV16("span", { className: "absolute top-3 right-3 px-2 py-1 bg-red-500 text-white text-xs rounded-full", children: "Out of Stock" }, void 0, !1, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxDEV16("h3", { className: "font-semibold text-lg text-gray-800", children: product.name }, void 0, !1, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("p", { className: "text-gray-600 text-sm mt-1 line-clamp-2", children: product.description }, void 0, !1, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV16("div", { className: "mt-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV16("span", { className: "text-lg font-bold text-primary-600", children: [
          "\u20B9",
          product.price.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/components/products/ProductCard.tsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV16(
          "button",
          {
            onClick: () => {
              addItem(product);
              let toast = document.createElement("div");
              toast.className = "fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50", toast.textContent = "Added to cart!", document.body.appendChild(toast), setTimeout(() => toast.remove(), 2e3);
            },
            className: "bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors flex items-center",
            disabled: !product.inStock,
            children: [
              /* @__PURE__ */ jsxDEV16("svg", { className: "w-5 h-5 mr-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV16("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }, void 0, !1, {
                fileName: "app/components/products/ProductCard.tsx",
                lineNumber: 42,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/components/products/ProductCard.tsx",
                lineNumber: 41,
                columnNumber: 13
              }, this),
              "Add"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/products/ProductCard.tsx",
            lineNumber: 29,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/products/ProductCard.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/products/ProductCard.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/products/ProductCard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/components/products/ProductGrid.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function ProductGrid({ products }) {
  return /* @__PURE__ */ jsxDEV17("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6", children: products.map((product) => /* @__PURE__ */ jsxDEV17(ProductCard, { product }, product.id, !1, {
    fileName: "app/components/products/ProductGrid.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/products/ProductGrid.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/category.$id.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
async function loader7({ params }) {
  let products = await getProductsByCategory(params.id);
  return json7({ products });
}
function CategoryPage() {
  let { products } = useLoaderData7();
  return /* @__PURE__ */ jsxDEV18("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxDEV18(ProductGrid, { products }, void 0, !1, {
    fileName: "app/routes/category.$id.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/category.$id.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/rider._index.tsx
var rider_index_exports = {};
__export(rider_index_exports, {
  default: () => RiderIndex,
  loader: () => loader8
});
import { json as json8 } from "@remix-run/node";
import { useLoaderData as useLoaderData8 } from "@remix-run/react";

// app/components/rider/RiderDashboard.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function RiderDashboard({ rider }) {
  return /* @__PURE__ */ jsxDEV19("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxDEV19("div", { children: [
        /* @__PURE__ */ jsxDEV19("h1", { className: "text-2xl font-bold", children: [
          "Welcome, ",
          rider.name
        ] }, void 0, !0, {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV19("p", { className: "text-gray-600", children: "Have a great day delivering!" }, void 0, !1, {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV19(StatusToggle, { status: rider.status }, void 0, !1, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: [
      /* @__PURE__ */ jsxDEV19(
        StatCard2,
        {
          title: "Today's Deliveries",
          value: rider.todaysDeliveries,
          icon: "\u{1F69A}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 26,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV19(
        StatCard2,
        {
          title: "Today's Earnings",
          value: `\u20B9${rider.todaysEarnings}`,
          icon: "\u{1F4B0}"
        },
        void 0,
        !1,
        {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 31,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    rider.currentOrder ? /* @__PURE__ */ jsxDEV19(CurrentDelivery, { order: rider.currentOrder }, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV19(NoActiveDelivery, {}, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
function StatusToggle({ status }) {
  return /* @__PURE__ */ jsxDEV19(
    "button",
    {
      className: `px-4 py-2 rounded-full flex items-center ${status === "online" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`,
      children: [
        /* @__PURE__ */ jsxDEV19("span", { className: `w-2 h-2 rounded-full mr-2 ${status === "online" ? "bg-green-500" : "bg-gray-500"}` }, void 0, !1, {
          fileName: "app/components/rider/RiderDashboard.tsx",
          lineNumber: 56,
          columnNumber: 7
        }, this),
        status === "online" ? "Online" : "Offline"
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
}
function StatCard2({ title, value, icon }) {
  return /* @__PURE__ */ jsxDEV19("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxDEV19("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV19("div", { children: [
      /* @__PURE__ */ jsxDEV19("p", { className: "text-sm text-gray-600", children: title }, void 0, !1, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("p", { className: "text-2xl font-bold mt-1", children: value }, void 0, !1, {
        fileName: "app/components/rider/RiderDashboard.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19("span", { className: "text-2xl", children: icon }, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function NoActiveDelivery() {
  return /* @__PURE__ */ jsxDEV19("div", { className: "bg-white rounded-lg shadow-sm p-6 text-center", children: [
    /* @__PURE__ */ jsxDEV19("div", { className: "text-4xl mb-4", children: "\u{1F6F5}" }, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("h2", { className: "text-xl font-semibold mb-2", children: "No Active Delivery" }, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV19("p", { className: "text-gray-600", children: "New delivery requests will appear here when available" }, void 0, !1, {
      fileName: "app/components/rider/RiderDashboard.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
}
function CurrentDelivery({ order }) {
  return /* @__PURE__ */ jsxDEV19("div", { className: "bg-white rounded-lg shadow-sm p-6", children: /* @__PURE__ */ jsxDEV19("h2", { className: "text-xl font-semibold mb-4", children: "Current Delivery" }, void 0, !1, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/rider/RiderDashboard.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}

// app/routes/rider._index.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
async function loader8() {
  return json8({
    rider: {
      id: "1",
      name: "Mike Wilson",
      status: "online",
      todaysDeliveries: 8,
      todaysEarnings: 450,
      currentOrder: null
    }
  });
}
function RiderIndex() {
  let { rider } = useLoaderData8();
  return /* @__PURE__ */ jsxDEV20(RiderDashboard, { rider }, void 0, !1, {
    fileName: "app/routes/rider._index.tsx",
    lineNumber: 20,
    columnNumber: 10
  }, this);
}

// app/routes/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  default: () => Categories,
  loader: () => loader9
});
import { json as json9 } from "@remix-run/node";
import { useLoaderData as useLoaderData9 } from "@remix-run/react";

// app/components/categories/CategoryList.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
function CategoryList({ categories: categories2 }) {
  return /* @__PURE__ */ jsxDEV21("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: categories2.map((category) => /* @__PURE__ */ jsxDEV21(
    "a",
    {
      href: `/category/${category.id}`,
      className: "group relative rounded-2xl overflow-hidden shadow-lg aspect-square transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
      children: [
        /* @__PURE__ */ jsxDEV21(
          "img",
          {
            src: category.image,
            alt: category.name,
            className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          },
          void 0,
          !1,
          {
            fileName: "app/components/categories/CategoryList.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV21("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-end p-6", children: [
          /* @__PURE__ */ jsxDEV21("h3", { className: "text-white text-xl font-bold text-center mb-2", children: category.name }, void 0, !1, {
            fileName: "app/components/categories/CategoryList.tsx",
            lineNumber: 27,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV21("span", { className: "px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm", children: [
            category.count,
            " items"
          ] }, void 0, !0, {
            fileName: "app/components/categories/CategoryList.tsx",
            lineNumber: 28,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/categories/CategoryList.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ]
    },
    category.id,
    !0,
    {
      fileName: "app/components/categories/CategoryList.tsx",
      lineNumber: 16,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/categories/CategoryList.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/categories.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
async function loader9() {
  return json9({ categories });
}
function Categories() {
  let { categories: categories2 } = useLoaderData9();
  return /* @__PURE__ */ jsxDEV22("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV22("h1", { className: "text-2xl font-bold mb-8", children: "All Categories" }, void 0, !1, {
      fileName: "app/routes/categories.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV22(CategoryList, { categories: categories2 }, void 0, !1, {
      fileName: "app/routes/categories.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/categories.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/checkout.tsx
var checkout_exports = {};
__export(checkout_exports, {
  default: () => Checkout,
  loader: () => loader10
});
import { json as json10 } from "@remix-run/node";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
async function loader10() {
  return json10({});
}
function Checkout() {
  let { items, total } = useCart();
  return /* @__PURE__ */ jsxDEV23("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV23("h1", { className: "text-2xl font-bold mb-8", children: "Checkout" }, void 0, !1, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV23("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxDEV23("div", { children: [
        /* @__PURE__ */ jsxDEV23("div", { className: "bg-white p-6 rounded-lg shadow-sm mb-6", children: [
          /* @__PURE__ */ jsxDEV23("h2", { className: "text-xl font-semibold mb-4", children: "Delivery Address" }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("form", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV23("div", { children: [
              /* @__PURE__ */ jsxDEV23("label", { className: "block text-sm font-medium mb-1", children: "Full Name" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 22,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23(
                "input",
                {
                  type: "text",
                  className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 23,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 21,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: [
              /* @__PURE__ */ jsxDEV23("label", { className: "block text-sm font-medium mb-1", children: "Phone Number" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 30,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23(
                "input",
                {
                  type: "tel",
                  className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 31,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: [
              /* @__PURE__ */ jsxDEV23("label", { className: "block text-sm font-medium mb-1", children: "Address" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23(
                "textarea",
                {
                  className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                  rows: 3,
                  required: !0
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 39,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 37,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("div", { children: [
              /* @__PURE__ */ jsxDEV23("label", { className: "block text-sm font-medium mb-1", children: "Delivery Instructions (Optional)" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 46,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23(
                "textarea",
                {
                  className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                  rows: 2,
                  placeholder: "Any specific instructions for delivery"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 47,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 45,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "bg-white p-6 rounded-lg shadow-sm", children: [
          /* @__PURE__ */ jsxDEV23("h2", { className: "text-xl font-semibold mb-4", children: "Payment Method" }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV23("label", { className: "flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxDEV23("input", { type: "radio", name: "payment", value: "cod", className: "mr-3", defaultChecked: !0 }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 60,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23("div", { children: [
                /* @__PURE__ */ jsxDEV23("p", { className: "font-medium", children: "Cash on Delivery" }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 62,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV23("p", { className: "text-sm text-gray-600", children: "Pay when your order arrives" }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV23("label", { className: "flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50", children: [
              /* @__PURE__ */ jsxDEV23("input", { type: "radio", name: "payment", value: "online", className: "mr-3" }, void 0, !1, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV23("div", { children: [
                /* @__PURE__ */ jsxDEV23("p", { className: "font-medium", children: "Online Payment" }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 69,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV23("p", { className: "text-sm text-gray-600", children: "Pay now using UPI, Card, or Net Banking" }, void 0, !1, {
                  fileName: "app/routes/checkout.tsx",
                  lineNumber: 70,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/checkout.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 56,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV23("div", { children: /* @__PURE__ */ jsxDEV23("div", { className: "bg-white p-6 rounded-lg shadow-sm sticky top-24", children: [
        /* @__PURE__ */ jsxDEV23("h2", { className: "text-xl font-semibold mb-4", children: "Order Summary" }, void 0, !1, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "divide-y", children: items.map((item) => /* @__PURE__ */ jsxDEV23("div", { className: "py-3 flex justify-between", children: [
          /* @__PURE__ */ jsxDEV23("div", { children: [
            /* @__PURE__ */ jsxDEV23("p", { className: "font-medium", children: item.product.name }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 84,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV23("p", { className: "text-sm text-gray-600", children: [
              "Qty: ",
              item.quantity
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 85,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 83,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV23("p", { className: "font-medium", children: [
            "\u20B9",
            (item.product.price * item.quantity).toFixed(2)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this)
        ] }, item.product.id, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV23("div", { className: "border-t mt-4 pt-4 space-y-2", children: [
          /* @__PURE__ */ jsxDEV23("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV23("span", { children: "Subtotal" }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV23("span", { children: [
              "\u20B9",
              total.toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV23("span", { children: "Delivery Fee" }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV23("span", { children: "\u20B940.00" }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 99,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV23("div", { className: "border-t pt-2 mt-2", children: /* @__PURE__ */ jsxDEV23("div", { className: "flex justify-between font-semibold", children: [
            /* @__PURE__ */ jsxDEV23("span", { children: "Total" }, void 0, !1, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 103,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV23("span", { children: [
              "\u20B9",
              (total + 40).toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/checkout.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/checkout.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV23(
          "button",
          {
            className: "w-full mt-6 py-3 px-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors",
            onClick: () => {
              alert("Order placed successfully!"), window.location.href = "/orders";
            },
            children: "Place Order"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/checkout.tsx",
            lineNumber: 109,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/checkout.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/checkout.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/checkout.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => Products,
  loader: () => loader11
});
import { json as json11 } from "@remix-run/node";
import { useLoaderData as useLoaderData10 } from "@remix-run/react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
async function loader11() {
  return json11({ products: featuredProducts });
}
function Products() {
  let { products } = useLoaderData10();
  return /* @__PURE__ */ jsxDEV24("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV24("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsxDEV24("h1", { className: "text-2xl font-bold", children: "All Products" }, void 0, !1, {
        fileName: "app/routes/products.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV24("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxDEV24("select", { className: "border rounded-lg px-4 py-2", children: [
        /* @__PURE__ */ jsxDEV24("option", { value: "", children: "Sort by" }, void 0, !1, {
          fileName: "app/routes/products.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV24("option", { value: "price-asc", children: "Price: Low to High" }, void 0, !1, {
          fileName: "app/routes/products.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV24("option", { value: "price-desc", children: "Price: High to Low" }, void 0, !1, {
          fileName: "app/routes/products.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV24("option", { value: "name", children: "Name" }, void 0, !1, {
          fileName: "app/routes/products.tsx",
          lineNumber: 22,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/products.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/products.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/products.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(ProductGrid, { products }, void 0, !1, {
      fileName: "app/routes/products.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/products.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader12
});
import { json as json12 } from "@remix-run/node";
import { useLoaderData as useLoaderData11 } from "@remix-run/react";
import { useTranslation as useTranslation6 } from "react-i18next";

// app/components/categories/CategoryBar.tsx
import { useTranslation as useTranslation4 } from "react-i18next";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
function CategoryBar({ categories: categories2 }) {
  let { t } = useTranslation4();
  return /* @__PURE__ */ jsxDEV25("div", { className: "bg-white shadow-sm border-b", children: /* @__PURE__ */ jsxDEV25("div", { className: "container mx-auto", children: /* @__PURE__ */ jsxDEV25("div", { className: "relative", children: [
    /* @__PURE__ */ jsxDEV25("div", { className: "absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }, void 0, !1, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 20,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { className: "absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }, void 0, !1, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 21,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { className: "overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ jsxDEV25("div", { className: "flex space-x-6 py-6 px-4", children: categories2.map((category) => /* @__PURE__ */ jsxDEV25(
      "a",
      {
        href: `/category/${category.id}`,
        className: "flex-shrink-0 group text-center w-20",
        children: [
          /* @__PURE__ */ jsxDEV25("div", { className: "w-16 h-16 rounded-full overflow-hidden mb-3 bg-gray-100 ring-2 ring-white shadow-lg mx-auto transform transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsxDEV25(
            "img",
            {
              src: category.image,
              alt: category.name,
              className: "w-full h-full object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/components/categories/CategoryBar.tsx",
              lineNumber: 33,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/categories/CategoryBar.tsx",
            lineNumber: 32,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV25("p", { className: "text-sm font-medium text-gray-700 group-hover:text-primary-500 transition-colors", children: t(`categories.${category.name}`) }, void 0, !1, {
            fileName: "app/components/categories/CategoryBar.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV25("p", { className: "text-xs text-gray-500 mt-0.5", children: [
            category.count,
            " ",
            t("common.items")
          ] }, void 0, !0, {
            fileName: "app/components/categories/CategoryBar.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this)
        ]
      },
      category.id,
      !0,
      {
        fileName: "app/components/categories/CategoryBar.tsx",
        lineNumber: 27,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/categories/CategoryBar.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/categories/CategoryBar.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/home/HeroSection.tsx
import { useTranslation as useTranslation5 } from "react-i18next";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function HeroSection() {
  let { t } = useTranslation5();
  return /* @__PURE__ */ jsxDEV26("section", { className: "relative min-h-[85vh] flex items-center", children: [
    /* @__PURE__ */ jsxDEV26("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" }, void 0, !1, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: {
          backgroundImage: "url(/images/hero.jpg)",
          backgroundPosition: "center 60%"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 12,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV26("div", { className: "relative container mx-auto px-4 z-20", children: /* @__PURE__ */ jsxDEV26("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxDEV26("div", { className: "inline-flex items-center px-6 py-2 rounded-full bg-primary-500 bg-opacity-90 backdrop-blur-sm mb-8 shadow-lg", children: /* @__PURE__ */ jsxDEV26("span", { className: "text-white text-base md:text-lg font-medium", children: [
        t("common.deliveryTime"),
        " \u{1F680}"
      ] }, void 0, !0, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV26("h1", { className: "text-5xl md:text-7xl font-bold text-white mb-8 leading-tight", children: [
        t("hero.title"),
        /* @__PURE__ */ jsxDEV26("br", {}, void 0, !1, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV26("span", { className: "text-primary-400", children: t("hero.subtitle") }, void 0, !1, {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV26("p", { className: "text-xl md:text-2xl text-white/90 mb-12 max-w-xl leading-relaxed", children: t("hero.description") }, void 0, !1, {
        fileName: "app/components/home/HeroSection.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV26(
        "a",
        {
          href: "/products",
          className: "inline-flex items-center px-8 py-4 rounded-full text-lg font-medium bg-primary-500 text-white hover:bg-primary-600 transition-all hover:scale-105 shadow-xl hover:shadow-2xl transform hover:-translate-y-1",
          children: [
            t("hero.cta"),
            /* @__PURE__ */ jsxDEV26("svg", { className: "w-5 h-5 ml-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV26("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, !1, {
              fileName: "app/components/home/HeroSection.tsx",
              lineNumber: 49,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/home/HeroSection.tsx",
              lineNumber: 48,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/home/HeroSection.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/home/HeroSection.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/home/HeroSection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
async function loader12() {
  return json12({
    categories,
    featuredProducts
  });
}
function Index() {
  let { categories: categories2, featuredProducts: featuredProducts2 } = useLoaderData11(), { t } = useTranslation6();
  return /* @__PURE__ */ jsxDEV27("main", { children: [
    /* @__PURE__ */ jsxDEV27(HeroSection, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "sticky top-16 z-40 bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV27(CategoryBar, { categories: categories2 }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV27("div", { className: "container mx-auto px-4 py-12", children: [
      /* @__PURE__ */ jsxDEV27("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxDEV27("h2", { className: "text-2xl font-bold", children: t("common.featuredProducts") }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV27(
          "a",
          {
            href: "/products",
            className: "text-primary-500 hover:text-primary-600 flex items-center",
            children: [
              t("common.viewAll"),
              /* @__PURE__ */ jsxDEV27("svg", { className: "w-5 h-5 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV27("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 39,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 38,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 33,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV27("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: featuredProducts2.map((product) => /* @__PURE__ */ jsxDEV27("div", { className: "bg-white rounded-lg shadow-sm overflow-hidden", children: [
        /* @__PURE__ */ jsxDEV27(
          "img",
          {
            src: product.image,
            alt: product.name,
            className: "w-full h-48 object-cover"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 46,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV27("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxDEV27("h3", { className: "font-semibold", children: product.name }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV27("p", { className: "text-gray-600 text-sm mt-1", children: product.description }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 53,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV27("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxDEV27("span", { className: "text-lg font-bold", children: [
              "\u20B9",
              product.price
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 55,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV27("button", { className: "bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600", children: t("common.addToCart") }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 54,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ] }, product.id, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/routes/offers.tsx
var offers_exports = {};
__export(offers_exports, {
  default: () => Offers,
  loader: () => loader13
});
import { json as json13 } from "@remix-run/node";
import { useLoaderData as useLoaderData12 } from "@remix-run/react";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
async function loader13() {
  return json13({
    offers: [
      {
        id: "1",
        title: "First Order Discount",
        description: "Get 50% off on your first order above \u20B9500",
        code: "FIRST50",
        validUntil: "2024-02-29"
      },
      {
        id: "2",
        title: "Free Delivery",
        description: "Free delivery on orders above \u20B9999",
        code: "FREEDEL",
        validUntil: "2024-02-29"
      }
    ]
  });
}
function Offers() {
  let { offers } = useLoaderData12();
  return /* @__PURE__ */ jsxDEV28("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV28("h1", { className: "text-2xl font-bold mb-8", children: "Current Offers" }, void 0, !1, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: offers.map((offer) => /* @__PURE__ */ jsxDEV28("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
      /* @__PURE__ */ jsxDEV28("h2", { className: "text-xl font-semibold mb-2", children: offer.title }, void 0, !1, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28("p", { className: "text-gray-600 mb-4", children: offer.description }, void 0, !1, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV28("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV28("div", { className: "bg-gray-100 px-3 py-1 rounded-full", children: /* @__PURE__ */ jsxDEV28("code", { className: "text-primary-600 font-medium", children: offer.code }, void 0, !1, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV28("span", { className: "text-sm text-gray-500", children: [
          "Valid till ",
          new Date(offer.validUntil).toLocaleDateString()
        ] }, void 0, !0, {
          fileName: "app/routes/offers.tsx",
          lineNumber: 41,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/offers.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, offer.id, !0, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 34,
      columnNumber: 11
    }, this)) }, void 0, !1, {
      fileName: "app/routes/offers.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/offers.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/orders.tsx
var orders_exports = {};
__export(orders_exports, {
  default: () => Orders,
  loader: () => loader14
});
import { json as json14 } from "@remix-run/node";
import { useLoaderData as useLoaderData13 } from "@remix-run/react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
async function loader14() {
  return json14({
    orders: [
      {
        id: "1",
        date: "2024-01-24",
        status: "Delivered",
        total: 299.99,
        items: [
          { name: "Organic Bananas", quantity: 2, price: 2.99 },
          { name: "Farm Fresh Eggs", quantity: 1, price: 4.99 }
        ]
      }
    ]
  });
}
function Orders() {
  let { orders } = useLoaderData13();
  return /* @__PURE__ */ jsxDEV29("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV29("h1", { className: "text-2xl font-bold mb-8", children: "My Orders" }, void 0, !1, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    orders.length === 0 ? /* @__PURE__ */ jsxDEV29("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxDEV29("h2", { className: "text-xl text-gray-600 mb-4", children: "No orders yet" }, void 0, !1, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV29("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Start Shopping" }, void 0, !1, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV29("div", { className: "space-y-6", children: orders.map((order) => /* @__PURE__ */ jsxDEV29("div", { className: "bg-white rounded-lg shadow-sm p-6", children: [
      /* @__PURE__ */ jsxDEV29("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxDEV29("div", { children: [
          /* @__PURE__ */ jsxDEV29("h3", { className: "font-semibold", children: [
            "Order #",
            order.id
          ] }, void 0, !0, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 41,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV29("p", { className: "text-sm text-gray-600", children: order.date }, void 0, !1, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("span", { className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm", children: order.status }, void 0, !1, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 39,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV29("div", { className: "border-t pt-4", children: order.items.map((item, index) => /* @__PURE__ */ jsxDEV29("div", { className: "flex justify-between py-2", children: [
        /* @__PURE__ */ jsxDEV29("div", { children: [
          /* @__PURE__ */ jsxDEV29("p", { className: "font-medium", children: item.name }, void 0, !1, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 53,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ jsxDEV29("p", { className: "text-sm text-gray-600", children: [
            "Qty: ",
            item.quantity
          ] }, void 0, !0, {
            fileName: "app/routes/orders.tsx",
            lineNumber: 54,
            columnNumber: 23
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 52,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV29("p", { className: "font-medium", children: [
          "\u20B9",
          (item.price * item.quantity).toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this)
      ] }, index, !0, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 51,
        columnNumber: 19
      }, this)) }, void 0, !1, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 49,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV29("div", { className: "border-t mt-4 pt-4 flex justify-between", children: [
        /* @__PURE__ */ jsxDEV29("span", { className: "font-semibold", children: "Total" }, void 0, !1, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 62,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV29("span", { className: "font-semibold", children: [
          "\u20B9",
          order.total.toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/routes/orders.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/orders.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this)
    ] }, order.id, !0, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/orders.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/search.tsx
var search_exports = {};
__export(search_exports, {
  default: () => Search,
  loader: () => loader15
});
import { json as json15 } from "@remix-run/node";
import { useLoaderData as useLoaderData14, useSearchParams } from "@remix-run/react";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
async function loader15({ request }) {
  let query = new URL(request.url).searchParams.get("q")?.toLowerCase() || "", products = featuredProducts.filter(
    (product) => product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
  );
  return json15({ products });
}
function Search() {
  let { products } = useLoaderData14(), [searchParams] = useSearchParams(), query = searchParams.get("q") || "";
  return /* @__PURE__ */ jsxDEV30("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV30("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxDEV30("h1", { className: "text-2xl font-bold mb-4", children: "Search Results" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      query && /* @__PURE__ */ jsxDEV30("p", { className: "text-gray-600", children: [
        'Showing results for "',
        query,
        '"'
      ] }, void 0, !0, {
        fileName: "app/routes/search.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    products.length === 0 ? /* @__PURE__ */ jsxDEV30("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxDEV30("h2", { className: "text-xl text-gray-600 mb-4", children: "No products found" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("p", { className: "text-gray-500 mb-8", children: "Try searching with different keywords" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV30("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Browse All Products" }, void 0, !1, {
        fileName: "app/routes/search.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/search.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV30(ProductGrid, { products }, void 0, !1, {
      fileName: "app/routes/search.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/search.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  loader: () => loader16
});
import { json as json16 } from "@remix-run/node";
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
async function loader16() {
  return json16({});
}
function Login() {
  return /* @__PURE__ */ jsxDEV31("div", { className: "container mx-auto px-4 py-8", children: /* @__PURE__ */ jsxDEV31("div", { className: "max-w-md mx-auto", children: [
    /* @__PURE__ */ jsxDEV31("h1", { className: "text-2xl font-bold mb-8", children: "Sign In" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV31("form", { className: "bg-white rounded-lg shadow-sm p-6 space-y-4", children: [
      /* @__PURE__ */ jsxDEV31("div", { children: [
        /* @__PURE__ */ jsxDEV31("label", { className: "block text-sm font-medium mb-1", children: "Email" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 16,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV31(
          "input",
          {
            type: "email",
            className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV31("div", { children: [
        /* @__PURE__ */ jsxDEV31("label", { className: "block text-sm font-medium mb-1", children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV31(
          "input",
          {
            type: "password",
            className: "w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
            required: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 26,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV31("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV31("label", { className: "flex items-center", children: [
          /* @__PURE__ */ jsxDEV31("input", { type: "checkbox", className: "mr-2" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 35,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV31("span", { className: "text-sm text-gray-600", children: "Remember me" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 36,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV31("a", { href: "/forgot-password", className: "text-sm text-primary-500 hover:text-primary-600", children: "Forgot Password?" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV31(
        "button",
        {
          type: "submit",
          className: "w-full py-3 px-4 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors",
          children: "Sign In"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV31("p", { className: "text-center mt-6 text-gray-600", children: [
      "Don't have an account?",
      " ",
      /* @__PURE__ */ jsxDEV31("a", { href: "/register", className: "text-primary-500 hover:text-primary-600", children: "Sign up" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart,
  loader: () => loader17
});
import { json as json17 } from "@remix-run/node";
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
async function loader17() {
  return json17({});
}
function Cart() {
  let { items, total, updateQuantity, removeItem } = useCart();
  return /* @__PURE__ */ jsxDEV32("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxDEV32("h1", { className: "text-2xl font-bold mb-8", children: "Shopping Cart" }, void 0, !1, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    items.length === 0 ? /* @__PURE__ */ jsxDEV32("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsxDEV32("h2", { className: "text-xl text-gray-600 mb-4", children: "Your cart is empty" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV32("a", { href: "/products", className: "inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors", children: "Continue Shopping" }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV32("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV32("div", { className: "lg:col-span-2", children: items.map((item) => /* @__PURE__ */ jsxDEV32("div", { className: "flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm", children: [
        /* @__PURE__ */ jsxDEV32(
          "img",
          {
            src: item.product.image,
            alt: item.product.name,
            className: "w-24 h-24 object-cover rounded-lg"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.tsx",
            lineNumber: 28,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ jsxDEV32("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxDEV32("h3", { className: "font-semibold text-lg", children: item.product.name }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 34,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV32("p", { className: "text-gray-600 text-sm", children: item.product.description }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "mt-2 flex items-center gap-4", children: [
            /* @__PURE__ */ jsxDEV32("div", { className: "flex items-center border rounded-lg", children: [
              /* @__PURE__ */ jsxDEV32(
                "button",
                {
                  onClick: () => updateQuantity(item.product.id, Math.max(0, item.quantity - 1)),
                  className: "px-3 py-1 hover:bg-gray-100 transition-colors",
                  children: "-"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 38,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ jsxDEV32("span", { className: "px-3 py-1 border-x", children: item.quantity }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 44,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ jsxDEV32(
                "button",
                {
                  onClick: () => updateQuantity(item.product.id, item.quantity + 1),
                  className: "px-3 py-1 hover:bg-gray-100 transition-colors",
                  children: "+"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/cart.tsx",
                  lineNumber: 45,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV32(
              "button",
              {
                onClick: () => removeItem(item.product.id),
                className: "text-red-500 hover:text-red-600 transition-colors",
                children: "Remove"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/cart.tsx",
                lineNumber: 52,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV32("div", { className: "text-right", children: /* @__PURE__ */ jsxDEV32("p", { className: "font-semibold", children: [
          "\u20B9",
          (item.product.price * item.quantity).toFixed(2)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this)
      ] }, item.product.id, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 27,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV32("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxDEV32("div", { className: "bg-white p-6 rounded-lg shadow-sm sticky top-24", children: [
        /* @__PURE__ */ jsxDEV32("h2", { className: "text-xl font-semibold mb-4", children: "Order Summary" }, void 0, !1, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV32("div", { className: "space-y-2 mb-4", children: [
          /* @__PURE__ */ jsxDEV32("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV32("span", { children: "Subtotal" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 72,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV32("span", { children: [
              "\u20B9",
              total.toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 71,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxDEV32("span", { children: "Delivery Fee" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 76,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV32("span", { children: "\u20B940.00" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 77,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 75,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV32("div", { className: "border-t pt-2 mt-2", children: /* @__PURE__ */ jsxDEV32("div", { className: "flex justify-between font-semibold", children: [
            /* @__PURE__ */ jsxDEV32("span", { children: "Total" }, void 0, !1, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 81,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ jsxDEV32("span", { children: [
              "\u20B9",
              (total + 40).toFixed(2)
            ] }, void 0, !0, {
              fileName: "app/routes/cart.tsx",
              lineNumber: 82,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 80,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/cart.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV32(
          "a",
          {
            href: "/checkout",
            className: "block w-full py-3 px-4 rounded-full bg-primary-500 text-white text-center font-medium hover:bg-primary-600 transition-colors",
            children: "Proceed to Checkout"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/cart.tsx",
            lineNumber: 86,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/cart.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-JSXM6IL6.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-ZQ3IT2WF.js", "/build/_shared/chunk-KVTW5EQN.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-F572ATWH.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CE5CIR63.js", imports: ["/build/_shared/chunk-XJJYUWGV.js", "/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-SX5ZLLFD.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin._index": { id: "routes/admin._index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin._index-NQCQVUCS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.inventory": { id: "routes/admin.inventory", parentId: "root", path: "admin/inventory", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.inventory-V6KOJBMJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.orders": { id: "routes/admin.orders", parentId: "root", path: "admin/orders", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.orders-XUIIB5WC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/admin.riders": { id: "routes/admin.riders", parentId: "root", path: "admin/riders", index: void 0, caseSensitive: void 0, module: "/build/routes/admin.riders-MT5K6XAZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-O6ZNBFI6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/categories": { id: "routes/categories", parentId: "root", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/categories-7ZUHJB72.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/category.$id": { id: "routes/category.$id", parentId: "root", path: "category/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/category.$id-RZ7H4ZTY.js", imports: ["/build/_shared/chunk-3W4OFQ4V.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/checkout": { id: "routes/checkout", parentId: "root", path: "checkout", index: void 0, caseSensitive: void 0, module: "/build/routes/checkout-W5FZFCXE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-7TSOMRU6.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/offers": { id: "routes/offers", parentId: "root", path: "offers", index: void 0, caseSensitive: void 0, module: "/build/routes/offers-ZIFOVKAQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders": { id: "routes/orders", parentId: "root", path: "orders", index: void 0, caseSensitive: void 0, module: "/build/routes/orders-3SX7B5K2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/products": { id: "routes/products", parentId: "root", path: "products", index: void 0, caseSensitive: void 0, module: "/build/routes/products-UHVMYCNQ.js", imports: ["/build/_shared/chunk-3W4OFQ4V.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/rider._index": { id: "routes/rider._index", parentId: "root", path: "rider", index: !0, caseSensitive: void 0, module: "/build/routes/rider._index-QFHQ2N5J.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/rider.deliveries": { id: "routes/rider.deliveries", parentId: "root", path: "rider/deliveries", index: void 0, caseSensitive: void 0, module: "/build/routes/rider.deliveries-4J2BEANT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/search": { id: "routes/search", parentId: "root", path: "search", index: void 0, caseSensitive: void 0, module: "/build/routes/search-R5VYC3UQ.js", imports: ["/build/_shared/chunk-3W4OFQ4V.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "35e94e93", hmr: { runtime: "/build/_shared/chunk-F572ATWH.js", timestamp: 1735067418665 }, url: "/build/manifest-35E94E93.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/rider.deliveries": {
    id: "routes/rider.deliveries",
    parentId: "root",
    path: "rider/deliveries",
    index: void 0,
    caseSensitive: void 0,
    module: rider_deliveries_exports
  },
  "routes/admin.inventory": {
    id: "routes/admin.inventory",
    parentId: "root",
    path: "admin/inventory",
    index: void 0,
    caseSensitive: void 0,
    module: admin_inventory_exports
  },
  "routes/admin._index": {
    id: "routes/admin._index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_index_exports
  },
  "routes/admin.orders": {
    id: "routes/admin.orders",
    parentId: "root",
    path: "admin/orders",
    index: void 0,
    caseSensitive: void 0,
    module: admin_orders_exports
  },
  "routes/admin.riders": {
    id: "routes/admin.riders",
    parentId: "root",
    path: "admin/riders",
    index: void 0,
    caseSensitive: void 0,
    module: admin_riders_exports
  },
  "routes/category.$id": {
    id: "routes/category.$id",
    parentId: "root",
    path: "category/:id",
    index: void 0,
    caseSensitive: void 0,
    module: category_id_exports
  },
  "routes/rider._index": {
    id: "routes/rider._index",
    parentId: "root",
    path: "rider",
    index: !0,
    caseSensitive: void 0,
    module: rider_index_exports
  },
  "routes/categories": {
    id: "routes/categories",
    parentId: "root",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/checkout": {
    id: "routes/checkout",
    parentId: "root",
    path: "checkout",
    index: void 0,
    caseSensitive: void 0,
    module: checkout_exports
  },
  "routes/products": {
    id: "routes/products",
    parentId: "root",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/offers": {
    id: "routes/offers",
    parentId: "root",
    path: "offers",
    index: void 0,
    caseSensitive: void 0,
    module: offers_exports
  },
  "routes/orders": {
    id: "routes/orders",
    parentId: "root",
    path: "orders",
    index: void 0,
    caseSensitive: void 0,
    module: orders_exports
  },
  "routes/search": {
    id: "routes/search",
    parentId: "root",
    path: "search",
    index: void 0,
    caseSensitive: void 0,
    module: search_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
