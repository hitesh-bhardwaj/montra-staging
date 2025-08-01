import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import About from '@/components/BusinessTapnPay/About'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'
import Cards from '@/components/Common/Cards'

export const metadata = getPageMetadata({
  title: "Montra Business: Tap. Pay. Go.",
  description: "Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity",
  url: "business/tap-and-pay",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business/tap-and-pay",
    languages: {
      "x-default": "/business/tap-and-pay",
    },
  },
  openGraph: {
    url: "business/tap-and-pay",
    images: [
      {
        url: `${homepage}/assets/images/seo/business-tap-and-pay.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const tapPay = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqContent} />
      <BreadcrumbsJSONLD pathname={metadata.url} />
      <Hero primaryHeading={"Montra for Business: "} heading={"Tap. Pay. Go. It’s That Simple."} content={"Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity. So, you can pay in seconds, without the hassle."} />
      <Overview content={overviewContent} />
      <Benefits data={benefitsData} />
      <Cards cardData={cardData} />
      <About />
      <SectionBreak content={"Montra Tap & Pay uses cutting-edge security, advanced encryption and tokenization to protect every transaction. Your card details are never shared, keeping payments private, safe, and secure."} width={"w-[95%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default tapPay

const faqContent = [
  {
    question: 'What is Tap & Pay? ',
    answer:
      "<p>Tap & Pay allows you, as a merchant, to accept card payments using just your Android smartphone—no physical POS machine required. With this feature, your phone becomes a contactless POS terminal, enabling customers to tap their debit or credit cards to complete transactions.</p><p class='italic'>Note: Tap & Pay is currently only available on Android devices with NFC (Near Field Communication) capability. The Montra App will automatically detect and notify you if your device is NFC-compatible. If your current phone isn’t supported, you can log in on an NFC-enabled phone to access the feature.</p>",
  },
  {
    question: 'How safe is Tap & Pay? ',
    answer:
      "<p>Tap & Pay is highly secure. Montra uses <span class='font-semibold'>advanced encryption</span> and <span class='font-semibold'>tokenization</span> to protect every transaction. This means your customer’s card information is never stored, shared, or exposed. All payments are processed in real time with <span class='font-semibold'>bank-grade security.</span></p>",
  },
  {
    question: 'How do I accept payments using Tap & Pay?',
    answer:
      "<p>Here’s how Tap & Pay works on Montra:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc  max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Open your <span class='font-semibold'>Montra Business Account</span> and tap <span class='font-semibold'>'Tap & Pay'</span> on the home screen.</li><li>Enter the payment amount.</li><li>Ask the customer to tap their <span class='font-semibold'>contactless debit or credit card</span> on the back of your NFC-enabled phone.</li><li>The customer enters their <span class='font-semibold'>card PIN</span> on your screen</li><li>The payment is processed instantly.</li><li>Share  the receipt directly from the app.</li></ul>",
  },
  {
    question: 'What devices can I use for Tap & Pay?',
    answer:
      "<p>Only <span class='font-semibold'>Android smartphones with NFC support</span> are eligible. Most recent Android models support NFC, but the Montra App will let you know if your device qualifies. iPhones are currently not supported due to platform restrictions.</p>",
  },
  {
    question: 'What types of cards can be used for Tap & Pay?',
    answer:
      "<p>Tap & Pay works with most Naira-denominated contactless debit and credit cards issued by Nigerian banks. Cards must support contactless. </p>",
  },

];
const overviewContent = {
  icon1: "/assets/images/business-tapnpay/overview-icon-1.svg",
  icon2: "/assets/images/business-tapnpay/overview-icon-2.svg",
  mainImg: "/assets/images/business-tapnpay/business-tap-n-pay.png",
  bgImg: "/assets/images/business-montra-store/overview-bg-icon.svg",
  title: "Tap & Pay makes everyday purchases quick, easy, and totally stress-free.",
  content: [
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach.",
  ],
  subcontent1: "Make your phone a POS",
  subcontent2: "Accept Contactless Payments"
}

const benefitsData = {
  heading: "The Future of Payments. Tap, Pay, Done",
  para: "Accept contactless payments instantly with your NFC-enabled phone . No extra devices, no friction, just fast, secure transactions with Montra Tap & Pay.",
  headingWidth: "w-[80%]",
  paraWidth: "w-[70%]",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: " bg-[#D9F7C5]", content: "Process every payment with confidence, backed by Montra’s robust security standards.", title: "Secure & Reliable Transactions", z: "z-[5]", width: "w-[27vw]", height: "14vw" },
    { classPrefix: "b", left: "!left-[68%]", top: "!top-[50.9%]", color: "bg-[#FFEAEE]", content: "With Tap to Pay solution, you can accept contactless payments from any physical cards. No extra hardware required.", title: "Accept Contactless Payments ", z: "z-[4]", width: "w-[25vw]", height: "14vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: " bg-[#EAF1FF]", content: "Access detailed reports on payments, settlements, and refunds, giving you the insights you need to make smarter business decisions.", title: "Powerful Dashboard ", z: "z-[5]", width: "w-[24vw]", height: "20vw" },
    { classPrefix: "d", left: "!left-[28%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "With Montra’s Tap to Pay, your smartphone becomes a POS device. Accept contactless card payments by simply letting customers tap their cards on your phone. Available on Android devices with NFC", title: "Make your phone a POS ", z: "z-[4]", width: "w-[28vw]", height: "17vw" },
  ]
}

const cardData = {
  heading: "Turn your Phone into a POS with Montra Tap & Pay",
  subHeading: "Accepting payments has never been easier.",
  headingWidth: "w-[75%]",
  cards: [
    {
      icon: "/assets/images/business-tapnpay/card-icon-1.svg",
      icon2:"/assets/images/business-tapnpay/accept.svg",
      title: "Accept Contactless Cards Instantly",
      para: "<p>Easily accept payments from any physical contactless debit or credit card. No extra hardware or dongles needed.</p>",
    },
    {
      icon: "/assets/images/business-tapnpay/card-icon-2.svg",
      icon2:"/assets/images/business-tapnpay/get-started.svg",
      title: "Get Started Fast",
      para: "<p>Activate Tap & Pay directly in your Montra App and start accepting payments right away.</p>",
    },
    {
      icon: "/assets/images/business-tapnpay/card-icon-3.svg",
      icon2:"/assets/images/business-tapnpay/smart-dashboard.svg",
      title: "Smart Dashboard",
      para: "<p>Track transactions, monitor performance, and access real-time data to make better business decisions.</p>",
    },
    {
      icon: "/assets/images/business-tapnpay/card-icon-4.svg",
      icon2:"/assets/images/business-tapnpay/fast-setup.svg",
      title: "Fast Setup & Activation",
      para: "<p>Enable Tap & Pay inside the Montra App with minimal setup.</p>",
    },
  ]
}
