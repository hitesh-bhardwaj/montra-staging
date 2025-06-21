import { homepage, faviconPath } from './util';

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
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
    <script
    async
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
    <script
    async
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
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
    <script
    async
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const { title, path, metaDescription, date_published, date_modified } = metadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homepage}/${path}#webpage`,
    url: `${homepage}/${path}`,
    name: `${title}`,
    description: `${metaDescription}`,
    datePublished: `${date_published}`,
    dateModified: `${date_modified}`,
    publisher: {
      "@type": "Organization",
      name: "Montra",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/${faviconPath}`,
      }
    },
    "about": {
      "@id": `${homepage}/${path}#organization`
    },
    "isPartOf": {
      "@id": `${homepage}/${path}#website`
    },
    "inLanguage": "en_US",
  };

  return (
    <script
      async
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Montra",
    "image": `https://www.m4cs.vercel.app/montra-logo.png`,
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
    <script
    async
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  );
}