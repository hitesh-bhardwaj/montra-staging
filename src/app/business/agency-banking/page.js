import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'
import Cards from '@/components/Common/Cards'

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
      <Cards cardData={cardData} />
      <Rewards rewardsData={rewardsData} />
      <SectionBreak content={"Start small. Dream big. Montra’s Agency Banking supports your journey with the tools and rewards to help you thrive, your way."} width={"w-[95%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default businessAgencyBanking

const faqContent = [
  {
    question: "What is Montra Agency Banking?",
    answer:
      "<p>Montra Agency Banking  allows individuals and small business owners to act as financial service providers in their communities. As a Montra Agent, you can offer services like cash deposits, withdrawals, bill payments, and fund transfers—bringing essential banking services closer to underserved areas.</p>",
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
  mainImg: "/assets/images/business-agency-banking/business-agency-banking.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Empowering Local Agents with Digital Banking",
  content: [
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities.    With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more, bringing modern banking to people where traditional banks can’t reach."
  ],
  subcontent1: "Cash Deposit & Withdrawal",
  subcontent2: "Bill Payments & Transfers"
}
const benefitsData = {
  heading: "Become a Montra Agent & Earn More, offering Cash Deposit & Withdrawal Services. ",
  para: "Get stated in Minutes. Get Onboarded Easily ",
  headingWidth: "w-[95%]",
  paraWidth: "w-full",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the freedom of managing your money without worrying about hidden fees or surprise charges", title: "No Account Fees", z: "z-[5]", width: "w-[20vw]", height: "17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[55.9%]", color: "bg-[#FFEAEE]", content: "Get commissions on every transaction; deposits, withdrawals, transfers, airtime, bills, and more. The more services you provide, the more you earn. No sales pressure, just steady income from everyday financial services.", title: " Earn as an Agent ", z: "z-[4]", width: "w-[20vw]", height: "22vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Effortlessly monitor all your incoming payments and transactions in one place, so you always know where your money is.", title: "Track Payments Seamlessly", z: "z-[5]", width: "w-[25vw]", height: "17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Becoming a Montra Agent is fast and easy. Just download the Montra App, sign up as a business or individual, and complete basic KYC with a valid ID, photo, and address proof. Once verified, you can start transacting in minutes using just your phone no. setup or delays.", title: "Easy Onboarding ", z: "z-[4]", width: "w-[27vw]", height: "30vw" },
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
      para: "Get voice and text notifications on your Montra App every time you receive a payment, so you’re always in the loop."
    },
    {
      icon: "/assets/images/personal-payments/reward-points.svg",
      title: "Reward Points Tracker",
      para: "Keep tabs on every reward point earned with a dedicated Reward Point Account Statement, no surprises, just benefits."
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
  cards: [
    {
      icon: '/assets/images/business-agency-banking/card-icon-1.svg',
      icon2: '/assets/images/business-agency-banking/cash-deposit.svg',
      title: 'Cash Deposit',
      para: '<p>Anyone, whether a Montra customer or not  can visit a Montra Agent to deposit cash directly into a Montra account or bank account.</p>',
    },
    {
      icon: '/assets/images/business-agency-banking/card-icon-2.svg',
      icon2: '/assets/images/business-agency-banking/recharge.svg',
      title: 'Recharge & Bill Payments',
      para: '<p>Collect cash and process electricity bills, airtime top-ups, and other payments for your customers.</p>',
    },
    {
      icon: '/assets/images/business-agency-banking/card-icon-3.svg',
      icon2: '/assets/images/business-agency-banking/cash-withdrawl.svg',
      title: 'Cash Withdrawal',
      para: '<p>Let customers withdraw cash from their Montra or bank accounts right at your location.</p>',
    },
    {
      icon: '/assets/images/business-agency-banking/card-icon-4.svg',
      icon2: '/assets/images/business-agency-banking/bank-transfer.svg',
      title: 'Bank Transfer',
      para: '<p>Take cash from customers and transfer it to any bank account they choose  safely and easily.</p>',
    },
  ],
}
