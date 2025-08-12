import Content from '@/components/PrivacyPolicyComps/Content';
import Hero from '@/components/PrivacyPolicyComps/Hero';
import { WebpageJsonLd } from '@/lib/json-ld';
import { getPageMetadata } from '@/lib/seo.config';
import { homepage } from '@/lib/util';
import React from 'react'

export const metadata = getPageMetadata({
  title: "Montra Privacy Policy",
  description: "How Montra collects, uses, protects, and retains your data under NDPR 2019; your rights, cookie use, data transfers & contact info of the Data Protection Officer.",
  url: "privacy-policy",
  date_published: "2025-06-27T00:00",
  date_modified: "2025-06-27T00:00",
  alternates: {
    canonical: "/privacy-policy",
    languages: {
      "x-default": "/privacy-policy",
    },
  },
  openGraph: {
    url: "privacy-policy",
    images: [
      {
        url: `${homepage}/assets/images/seo/privacy.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function page() {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <Hero />
      <Content />
    </>
  )
}
