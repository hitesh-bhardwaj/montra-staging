// lib/seo.config.js
import { homepage, faviconPath } from "./util";

export const defaultMetadata = {
  metadataBase: new URL(homepage),
  title: {
    default: "Montra Personal - All-in-One Digital Wallet for Banking, Payments, Loans.",
    template: "%s | Montra Personal",
  },
  description:
    "Montra Personal is a secure, feature-rich digital wallet app that helps users to manage banking, payments, marketplace, loans and investments in one place.",
  keywords: [
    "digital wallet",
    "payments",
    "loans",
    "investments",
    "Montra",
    "FinTech",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Montra Personal - All-in-One Digital Wallet for Banking, Payments, Loans.",
    description:
      "Montra Personal is a secure, feature-rich digital wallet app that helps users to manage banking, payments, marketplace, loans and investments in one place.",
    url: homepage,
    siteName: "Montra",
    images: [
      {
        url: `${homepage}/assets/images/seo/homepage.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MontraApp",
    title: "Montra Personal - All-in-One Digital Wallet for Banking, Payments & Loans",
    description:
      "Montra Personal is a secure, feature-rich digital wallet app that helps users to manage banking, payments, marketplace, loans and investments in one place.",
    images: [`${homepage}/assets/images/seo/homepage.png`],
  },
};

export function getPageMetadata(overrides) {
  return {
    ...defaultMetadata,
    ...overrides,
    title:
      typeof overrides.title === "string"
        ? { default: overrides.title, template: defaultMetadata.title.template }
        : overrides.title || defaultMetadata.title,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...defaultMetadata.openGraph,
      ...(overrides.openGraph || {}),
    },
    alternates: {
      ...defaultMetadata.alternates,
      ...(overrides.alternates || {}),
    },
  };
}
