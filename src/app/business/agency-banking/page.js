import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import BenefitCards from '@/components/Common/BenefitCards'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'

export const metadata = getPageMetadata({
  title: "Montra for Business: Earn as a Montra Agent",
  description: "Empowering you to grow your income and expand your impact with seamless digital transactions and community banking services.",
  url: "business/agency-banking",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business/agency-banking",
    languages: {
      "x-default": "/business/agency-banking",
    },
  },
  openGraph: {
    url: "business/agency-banking",
    images: [
      {
        url: `${homepage}/assets/images/seo/business-agency-banking.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const businessAgencyBanking = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqContent} />
      <BreadcrumbsJSONLD pathname={metadata.url} />
      <Hero primaryHeading={"Montra for Business: "} heading={"Earn as a Montra Agent"} content={"Empowering you to grow your income and expand your impact with seamless digital transactions and community banking services."} paraWidth={"w-[70%]"} titleWidth={"w-[70%]"} />
      <Overview content={overviewContent} />
      <Benefits data={benefitsData} />
      <BenefitCards cardData={cardData} />
      <Rewards rewardsData={rewardsData} />
      <SectionBreak content={"Start small. Dream big. Montra’s Agency Banking supports your journey with the tools and rewards to help you thrive—your way."} width={"w-[95%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default businessAgencyBanking

const faqContent = [
  {
    question: "What is Montra Agency Banking?",
    answer:
      "<p>Montra Agency Banking  is the typical POS business we have today, it allows individuals and small business owners to act as financial service providers in their communities. As a Montra Agent, you can offer services like cash deposits, withdrawals, bill payments, and account onboarding—bringing essential banking services closer to underserved areas.</p>",
  },
  {
    question: "Who can become a Montra Agent?",
    answer:
      "<p>Anyone with a smartphone, valid ID, and a physical location (like a shop, stall, or kiosk) can apply to become a Montra Agent. It's ideal for shop owners, entrepreneurs, and community leaders who want to earn extra income and provide value to their neighborhoods.</p>",
  },
  {
    question: "What do I need to get started?",
    answer:
      "<p>To become a Montra Agent, you'll need:</p><ul class='pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw] list-disc'><li>A smartphone with the Montra App installed</li><li>A valid means of identification (e.g., NIN, BVN, or national ID)</li><li>A clear photo of your business location.</li><li>A Montra Business/Merchant  account for commissions and settlement.</li></ul><p>Once registered, you’ll get access to your Agent dashboard to start offering services immediately.</p>",
  },
  {
    question: "How do I earn as a Montra Agent?",
    answer:
      "<p>You earn a <span class='font-semibold'>commission</span> on every successful transaction you process. The more transactions you handle, the more you earn. Montra also offers <span class='font-semibold'>performance-based rewards</span> and special incentives for high-performing agents</p>",
  },

  {
    question: "Is there training or support for new agents?",
    answer:
      "<p>Yes. Montra provides onboarding guides, video tutorials, and ongoing customer support. You'll also get access to a dedicated <span class='font-semibold'>Agent Success Team</span> to help you grow your business, resolve issues, and maximize your earnings.</p>",
  },

];
const overviewContent = {
  icon1: "/assets/images/business-agency-banking/reliable-banking.svg",
  icon2: "/assets/images/business-agency-banking/steady-income.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Empowering Local Agents with Digital Banking",
  content: [
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach."
  ],
  subcontent1: "Steady Income",
  subcontent2: "Reliable Banking Tools"
}
const benefitsData = {
  heading: "Become a Montra Agent. Simple Setup. Real Earnings.",
  para: "Get stated in Minutes. Open a Free Montra Business Account",
  headingWidth: "w-[80%]",
  paraWidth: "w-full",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the freedom of managing your money without worrying about hidden fees or surprise charges.", title: "No Account Fees", z: "z-[5]", width: "w-[20vw]", height: "17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Your funds stay safe — Montra never converts your deposits into risky assets, giving you full peace of mind.", title: " Risk-Free Deposits", z: "z-[4]", width: "w-[20vw]", height: "17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Effortlessly monitor all your incoming payments and transactions in one place, so you always know where your money is.", title: "Track Payments Seamlessly", z: "z-[5]", width: "w-[25vw]", height: "17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "With Montra’s multi-layered security — including PIN, biometric login, 2FA Soft Token, and fraud monitoring — your account stays protected, every step of the way.", title: "Unmatched Security", z: "z-[4]", width: "w-[20vw]", height: "20vw" },
  ]
}
const rewardsData = {
  heading: "Stay on Top of Your Earnings & Rewards with Montra",
  headingWidth: "w-[80%]",
  gridCols: "grid-cols-4",
  cards: [
    {
      icon: "/assets/images/personal-payments/montra-account-statement.svg",
      title: "Business Account Statement",
      para: "Track all your payment collections using Montra Business Account through Montra Account Statement."
    },
    {
      icon: "/assets/images/personal-payments/instant-alerts.svg",
      title: "Instant Alerts",
      para: "Get voice and text notifications on your Montra App every time you receive a payment—so you’re always in the loop."
    },
    {
      icon: "/assets/images/personal-payments/reward-points.svg",
      title: "Reward Points Tracker",
      para: "Keep tabs on every reward point earned with a dedicated Reward Point Account Statement—no surprises, just benefits."
    },
    {
      icon: "/assets/images/personal-payments/easy-reward.svg",
      title: "Easy Reward Redemption",
      para: "Redeem your reward points in your Reward Point Redemption Account and track through a statement for this account on Montra App."
    },
  ]
}
const cardData = {
  heading: "Empower Your Community with Montra Services",
  subHeading: "Offer everyday banking services to your community—all from your shop.",
  headingWidth: "w-[70%]",
  icon1: "/assets/images/business-agency-banking/card-icon-1.svg",
  icon2: "/assets/images/business-agency-banking/card-icon-2.svg",
  icon3: "/assets/images/business-agency-banking/card-icon-3.svg",
  icon4: "/assets/images/business-agency-banking/card-icon-4.svg",
  cardTitle1: "Cash Deposit",
  cardTitle2: "Recharge & Bill Payments",
  cardTitle3: "Cash Withdrawal",
  cardTitle4: "Bank Transfer",
  cardContent1: "<p>Anyone — whether a Montra customer or not — can visit a Montra Agent to deposit cash directly into a Montra account or bank account.</p>",
  cardContent2: "<p>Collect cash and process electricity bills, airtime top-ups, and other payments for your customers.</p>",
  cardContent3: "<p>Let customers withdraw cash from their Montra or bank accounts right at your location.</p>",
  cardContent4: "<p>Take cash from customers and transfer it to any bank account they choose — safely and easily.</p>",

}
