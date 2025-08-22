import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import Steps from '@/components/Common/Steps'
import WhatWhy from '@/components/Common/WhatWhy'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'
import Cards from '@/components/Common/Cards'

export const metadata = getPageMetadata({
  title: "Montra Business: Digital Payments That Drive Growth",
  description: "With Montra, getting paid is simple, secure, and built for scale. Empowering your Business with Seamless Digital Transactions",
  url: "business/payments",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business/payments",
    languages: {
      "x-default": "/business/payments",
    },
  },
  openGraph: {
    url: "business/payments",
    images: [
      {
        url: `${homepage}/assets/images/seo/business-payments.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const businessPayments = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqContent}/>
      <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Hero primaryHeading={"Montra for Business: "} heading={"Digital Payments That Drive Growth"} content={"With Montra, getting paid is simple, secure, and built for scale. Empowering your Business with Seamless Digital Transactions "} paraWidth={"w-[60%]"} />
      <Overview content={overviewContent} />
      <Benefits data={benefitsData} />
      <Cards cardData={cardData} />
      <Rewards rewardsData={rewardsData} />
      <Steps stepData={stepData} />
      <WhatWhy data={whatWhyData} height={"h-[50vw]"} />
      <SectionBreak content={"From seamless payment acceptance to powerful business tools, Montra gives you everything you need to manage, move, and grow your money."} width={"w-[85%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default businessPayments

const faqContent = [
  {
    question: "What payment methods can my business accept on Montra?",
    answer:
      "<p>Your Montra Business Account supports a variety of flexible, secure payment channels:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Tap & Pay:</span> Accept contactless card payments using your NFC-enabled smartphone—no extra hardware required.</li><li><span class='font-semibold'>QR Code Payments:</span> Share your unique Montra QR code so customers can scan and pay instantly.</li><li><span class='font-semibold'>POS Terminal:</span> Use Montra’s physical POS device to accept card payments and track transactions.</li><li><span class='font-semibold'>Bank Transfers:</span> Receive payments directly into your Montra Business Account using standard bank transfers.</li></ul>",
  },
  {
    question: "Can I schedule or automate payments?",
    answer:
      "<p>Yes. With Montra, you can set <span class='font-semibold'>recurring payments</span> for subscriptions, bills, or vendor invoices—ensuring you never miss a due date.</p>",
  },
  {
    question: "Are there fees for sending or receiving payments?",
    answer:
      "<p>Basic peer-to-peer payments may be free, but certain transactions (e.g. using Escrow Pay, business tools, or international features) may carry minimal service fees. You'll always see any applicable charges before confirming a transaction.</p>",
  },

];
const overviewContent = {
  icon1: "/assets/images/business-payments/integrated-payments.svg",
  icon2: "/assets/images/business-payments/scalable-infrastructure.svg",
  mainImg: "/assets/images/business-payments/business-payments.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Empowering Your Business with Seamless Digital Transactions",
  content: [
    "Montra offers a robust payment ecosystem tailored for businesses seeking efficient, secure, and scalable digital payment solutions. Our platform connects businesses with banks, merchants, dealers, sellers, lending institutions, and insurance companies, serving as a one-stop solution for all financial needs."
  ],
  subcontent1: "Multiple Payment Acceptance Methods",
  subcontent2: "Send Invoices & Payment Links"
}
const benefitsData = {
  heading: "The Smarter, Safer Way to get Paid",
  para: "Your money. Your data. Protected at every step.",
  headingWidth: "w-full",
  paraWidth: "w-full",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Receive instant voice and text notifications when customers pay via your Montra QR code.", title: "Instant Voice & Text Notification ", z: "z-[5]", width: "w-[28vw]", height: "17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Send <span class='font-semibold'>payment links</span> via email, or social media to receive instant payments from anyone for any product or service.", title: "Get paid with Ease", z: "z-[4]", width: "w-[20vw]", height: "17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Easily monitor your payment collections, view account statements, and stay in control of your cash flow.", title: "Track Every Transaction ", z: "z-[5]", width: "w-[24vw]", height: "17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "Create and send professional invoices to other Montra users and enjoy quicker settlements for your business.", title: "Faster Invoicing, Faster Payments", z: "z-[4]", width: "w-[28vw]", height: "17vw" },
  ]
}
const rewardsData = {
  heading: "Track your Earnings & Rewards, all in One  Place",
  headingWidth: "w-[70%]",
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
      para: "Keep tabs on every reward point earned with a dedicated Reward Point Account Statement. No surprises, just benefits."
    },
    {
      icon: "/assets/images/personal-payments/easy-reward.svg",
      title: "Easy Reward Redemption",
      para: "Redeem your reward points in your Reward Point Redemption Account and track through a statement for this account on Montra App."
    },
  ]
}
const cardData = {
  heading: "Accept & Collect Payments Your Way",
  subHeading: "With Montra, getting paid is easy. It’s quick, safe & customer-friendly. Accept payments your way and keep your business moving forward.",
  headingWidth: "w-[60%]",
  cards: [
    {
      icon: "/assets/images/business-payments/card-icon-1.svg",
      icon2:"/assets/images/business-payments/qr-code.svg",
      title: "QR Scan",
      para: "<p>Customers scan your QR code using the Montra App or any mobile banking app to make payments.</p>",
    },
    {
      icon: "/assets/images/business-payments/card-icon-2.svg",
      icon2:"/assets/images/business-payments/tap-and-pay.svg",
      title: "Tap & Pay",
      para: "<p>Turn your phone into a POS, customers can tap their debit or credit cards on your Montra App for quick, contactless payments.</p>",
    },
    {
      icon: "/assets/images/business-payments/card-icon-3.svg",
      icon2:"/assets/images/business-payments/pos-terminal.svg",
      title: "POS Terminal",
      para: "<p>Use a Montra POS device to accept card payments easily and securely.</p>",
    },
    {
      icon: "/assets/images/business-payments/card-icon-4.svg",
      icon2:"/assets/images/business-payments/bank-transfer-blue.svg",
      title: "Bank Transfer",
      para: "<p>Receive payments directly into your Montra Business Account through customer bank transfers.</p>",
    },
  ],
}

const whatWhyData = {
  heading: "Smart Invoicing. Instant Payments.",
  headingWidth: "w-[55%] max-md:w-[80%]",
  height: "h-[88%]",
  top: "top-[38%]",
  paraWidth: "w-[55%]",
  para: "Bill in any currency, send in seconds, and get paid without the wait, Montra makes cash flow smoother than ever.",
  content: [
    {
      number: "01",
      title: "Sign In or Get Started",
      para: "New to Montra? Download the app and open a Business Account in minutes. Already registered? Simply log in via the Montra App or Merchant Portal."
    },
    {
      number: "02",
      title: "Create & Send Invoices in Seconds",
      para: "Head to the Invoices tab, input your product or service details, add your customer info, select a currency, and hit send. It’s that easy."
    },
    {
      number: "03",
      title: "Get Paid, Hassle-Free",
      para: "Your customers can pay online using multiple payment methods, from anywhere in the world. No delays. No friction. Just smooth, secure payments."
    }
  ],
}
const stepData = {
  heading: "Get Paid Instantly using Payment Links ",
  width:"w-[50%]",
  steps: [
    {
      number: "01",
      title: "Sign In or Get Started",
      para: "New to Montra? Download the app and set up your Business account in minutes. Already onboard? Log in through the Montra App and Set up your Montra Business Account under the Physical Store / Shop / Office category.",
      img: "/assets/images/business-payments/sign-in.png",
      tag: "Sign In"
    },
    {
      number: "02",
      title: "Create a Payment Link",
      para: "Generate a Payment Link for the product or service you're offering directly from the app.",
      img: "/assets/images/business-payments/Create-Link.png",
      tag: "Create Link"
    },
    {
      number: "03",
      title: "Share and Get Paid",
      para: "Send the link via Email, WhatsApp, or any preferred channel. Once the customer pays, the funds are instantly settled into your Montra Business Account.",
      img: "/assets/images/business-payments/Get-Paid.png",
      tag: "Get Paid"
    },
    {
      number: "04",
      title: "Track & Manage Earnings",
      para: "Use your smart Montra dashboard to monitor transactions, settlements, and reports, all in real time.",
      img: "/assets/images/business-payments/track-earning.png",
      tag: "Track Earnings"
    },
  ],
};