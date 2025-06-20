import Hero from "@/components/Company/Hero";
import Impact from "@/components/Company/Impact";
import MontraAnimation from "@/components/Company/MontraAnimation";
import MontraAnimationMobile from "@/components/Company/MontraAnimationMobile";
import Network from "@/components/Company/Network";
import SectionBreak from "@/components/Company/SectionBreak";
import TextBreak from "@/components/Company/TextBreak";
import Timeline from "@/components/Company/Timeline";
import FAQs from "@/components/Homepage/FAQs";
import VisionMission from "@/components/Homepage/VisionMission";
import { generateMetadata } from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'


export const metadata = generateMetadata({
  homepage,
  title: "Montra – Inclusive Fintech for Emerging Markets | Digital Wallet & Financial Ecosystem",
  description: "Montra is an all‑in‑one digital wallet and fintech platform designed for emerging markets. We empower individuals and businesses to manage payments, banking, credit, investments, and insurance—with simplicity, security, and accessibility to bridge the cash‑to‑digital transition. Join us in building a more inclusive financial future.",
  url:"company",
  image: "company.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
});


export default function CompanyPage() {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
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
      <FAQs content={faqContent} />
    </>
  )
}

const faqContent = [
  {
    question: 'What is the scheduled payments feature?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How sending a bank transfer?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'What is unique about Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How do we Sign-Up on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: 'How do we Sign-In on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'Is enabling Face / Touch / Fingerprint ID safe?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
]
