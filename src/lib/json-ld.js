/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script';
import { homepage, faviconPath } from './util';

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}#organization`,
    name: "Montra",
    description: "Montra is a fintech innovator driving financial inclusion in emerging markets by transitioning users from cash to digital payments. Its unified platform offers consumer and merchant apps, a powerful payment gateway, and advanced card & loan-processing solutions ",
    url: homepage,
    telephone: "",
    email: "info@montra.org",
    address: {
      "@type": 'PostalAddress',
      streetAddress: '',
      addressLocality: '',
      addressRegion: '',
      addressCountry: 'India',
    },
    logo: `${homepage}/favicon.ico`,
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/in/",
      "https://www.linkedin.com/in/",
      "https://x.com/"
    ]
  };

  return (
    <Script
      id="organization-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: 'Montra',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': "en-US",
    "publisher": [
      {
        "@id": `${homepage}/#organization`
      }
    ],
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function ImageObjectJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}/assets/images/seo/homepage.png`,
    url: `${homepage}/assets/images/seo/homepage.png`,
    width: "1920",
    height: "1016",
    inLanguage: "en-US"
  };

  return (
    <Script
      id="image-object-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function LocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Montra",
    "image": `https://www.montra.app/montra-logo.png`,
    "@id": "",
    "url": `${homepage}`,
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "postalCode": "",
      "addressCountry": "",
      "addressRegion": "India"
    },
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.linkedin.com/in/",
      "https://www.linkedin.com/in/",
      "https://x.com/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:30",
        "closes": "06:30"
      }
    ]
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const {
    title,
    url = "/",
    description,
    date_published,
    date_modified,
    metadataBase,
    openGraph,
  } = metadata;

  const name = typeof title === "string" ? title : title.default;
  const base = metadataBase?.href || homepage;
  const fullUrl = new URL(url, base).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name,
    description,
    datePublished: date_published,
    dateModified: date_modified,
    publisher: {
      "@type": "Organization",
      name: "Montra",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/${faviconPath}`,
      },
    },
    about: { "@id": `${fullUrl}#organization` },
    isPartOf: { "@id": `${fullUrl}#website` },
    inLanguage: openGraph?.locale || "en_US",
  };

  return (
    <Script
      id="webpage-jsonld"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {JSON.stringify(jsonLd)}
    </Script>
  );
}


export function BreadcrumbsJSONLD({ pathname}) {
  const segments = pathname.split('/').filter(Boolean);

  const itemListElements = segments.map((segment, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: decodeURIComponent(segment.replace(/-/g, ' ')),
      item: `${homepage}${url}`
    };
  });

  const breadcrumbsJSONLD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements,
  };

  return (
    <Script
      id="breadcrumbs-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbsJSONLD),
      }}
    />
  );
}

export function FAQJSONLD({ faqs }) {
  const faqJSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faqs[0].question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJSONLD),
      }}
    />
  );
}
