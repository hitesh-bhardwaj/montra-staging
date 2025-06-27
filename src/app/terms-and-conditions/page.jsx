
import React from 'react'
import Hero from "@/components/TermsAndConditions/Hero"
import Content from '@/components/TermsAndConditions/Content'
import { getPageMetadata } from '@/lib/seo.config';
import { homepage } from '@/lib/util';
import { WebpageJsonLd } from '@/lib/json-ld';

export const metadata = getPageMetadata({
  title: "Montra Terms & Conditions",
  description: "Terms governing use of Montra’s platform and services—including SSOID, recharge, bill payments—eligibility, liabilities, dispute resolution & refund policy.",
  url: "terms-and-conditions",
  date_published: "2025-06-27T00:00",
  date_modified: "2025-06-27T00:00",
  alternates: {
    canonical: "/terms-and-conditions",
    languages: {
      "x-default": "/terms-and-conditions",
    },
  },
  openGraph: {
    url: "terms-and-conditions",
    images: [
      {
        url: `${homepage}/assets/images/seo/terms.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});
const page = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    {/* <div className='dark'> */}
        <Hero />
        <Content />
    {/* </div> */}
    </>
  )
}

export default page
