import { json } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { Header } from "~/components/layout/Header";
import styles from "~/styles/tailwind.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const links = () => [
  { rel: "stylesheet", href: styles }
];

export async function loader({ request }) {
  let locale = request.headers.get("Accept-Language") || "en";
  locale = locale.split(",")[0].split("-")[0];
  return json({ locale });
}

export default function App() {
  const { locale } = useLoaderData();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale, i18n]);

  return (
    <html lang={locale} className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-gray-50">
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}