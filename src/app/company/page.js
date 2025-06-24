import Hero from "@/components/Company/Hero";
import Impact from "@/components/Company/Impact";
import MontraAnimation from "@/components/Company/MontraAnimation";
import MontraAnimationMobile from "@/components/Company/MontraAnimationMobile";
import Network from "@/components/Company/Network";
import SectionBreak from "@/components/Company/SectionBreak";
import TextBreak from "@/components/Company/TextBreak";
import Timeline from "@/components/Company/Timeline";
import VisionMission from "@/components/Homepage/VisionMission";
import { WebpageJsonLd } from "@/lib/json-ld";
import { getPageMetadata } from "@/lib/seo.config";
import { homepage } from '@/lib/util'

export const metadata = getPageMetadata({
  title: "Montra – Inclusive Fintech for Emerging Markets | Digital Wallet & Financial Ecosystem",
  description: "Montra is an all‑in‑one digital wallet and fintech platform designed for emerging markets. We empower individuals and businesses to manage payments, banking, credit, investments, and insurance—with simplicity, security, and accessibility to bridge the cash‑to‑digital transition. Join us in building a more inclusive financial future.",
  url: "company",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/company",
    languages: {
      "x-default": "/company",
    },
  },
  openGraph: {
    url: "company",
    images: [
      {
        url: `${homepage}/assets/images/seo/company.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

export default function CompanyPage() {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <Hero />
      <Impact />
      <Network />
      <VisionMission />
      <div className="max-sm:min-h-[90vh] w-screen max-md:min-h-screen">
        <MontraAnimationMobile />
        <MontraAnimation />
      </div>
      <TextBreak />
      <Timeline />
      <SectionBreak />
    </>
  )
}