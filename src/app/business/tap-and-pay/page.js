import BenefitCards from '@/components/Common/BenefitCards'
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

export const metadata = getPageMetadata({
  title: "Montra Business: Tap. Pay. Go.",
  description: "Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity",
  url:"business/tap-and-pay",
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
   <WebpageJsonLd metadata={metadata}/>
   <FAQJSONLD faqs={faqContent}/>
   <BreadcrumbsJSONLD pathname={metadata.url}/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Tap. Pay. Go. It’s That Simple."} content={"Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity—so you can pay in seconds, without the hassle."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <About/>
   <SectionBreak content={"Secure. Encrypted. Trusted. Montra Tap & Pay usescut-edging security,  advanced encryption and tokenization to protect every transaction. Your card details are never shared—keeping your payments private, safe, and secure."} width={"w-[95%]"}/>
   <FAQs content={faqContent}/>
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
        "<p>Here’s how Tap & Pay works on Montra:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc  max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Open your <span class='font-semibold'>Montra Business Account</span> and tap span class='font-semibold'>'Tap & Pay'</span> on the home screen.</li><li>Enter the payment amount.</li><li>Ask the customer to tap their <span class='font-semibold'>contactless debit or credit card</span> on the back of your NFC-enabled phone.</li><li>The customer enters their <span class='font-semibold'>card PIN</span> on your screen</li><li>The payment is processed instantly.</li><li>Share  the receipt directly from the app.</li></ul>",
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
  icon1:"/assets/images/business-tapnpay/overview-icon-1.svg",
  icon2:"/assets/images/business-tapnpay/overview-icon-2.svg",
  mainImg:"/assets/images/business-tapnpay/business-tap-n-pay.png",
  bgImg:"/assets/images/business-montra-store/overview-bg-icon.svg",
  title:"Tap & Pay makes everyday purchases quick, easy, and totally stress-free.",
  content:[
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach.",
  ],
  subcontent1: "Make your phone a POS",
  subcontent2: "Accept Contactless Payments"
}

const  benefitsData = {
  heading:"The Future of Payments — Tap, Pay, Done",
  para:"Accept contactless payments instantly with your NFC-enabled phone — no extra devices, no friction, just fast, secure transactions with Montra Tap & Pay.",
  headingWidth:"w-[80%]",
  paraWidth:"w-[70%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: " bg-[#D9F7C5]", content: "Process every payment with confidence, backed by Montra’s robust security standards.", title: "Secure & Reliable Transactions", z: "z-[5]", width:"w-[27vw]", height:"14vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Reduce wait times in-store by letting customers tap their cards for fast, secure transactions.", title: "Quick Checkouts", z: "z-[4]", width:"w-[20vw]", height:"14vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: " bg-[#EAF1FF]", content: "Every transaction on Montra is protected by our Fraud & Risk Assessment tool, which may prompt you for a Soft Token when needed. You get free access to a Soft Token through the VERIFYED app — available to all Montra users.", title: "Advanced 2FA Protection", z: "z-[5]",  width:"w-[24vw]", height:"23vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: " bg-[#CAC5F7]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Your Payment Stays Private", z: "z-[4]",  width:"w-[27vw]", height:"14vw" },
  ]
}

const cardData ={
  heading:"Turn your Phone into a POS with Montra Tap & Pay",
  subHeading:"Accepting payments has never been easier.",
  headingWidth:"w-[75%]",
  icon1:"/assets/images/business-tapnpay/card-icon-1.svg",
  icon2:"/assets/images/business-tapnpay/card-icon-2.svg",
  icon3:"/assets/images/business-tapnpay/card-icon-3.svg",
  icon4:"/assets/images/business-tapnpay/card-icon-4.svg",
  cardTitle1:"Accept Contactless Card Instantly",
  cardTitle4:"Fast Setup & Activation",
  cardTitle2:"Get Started Fast",
  cardTitle3:"Smart Dashboard ",
  cardContent1:"<p>Easily accept payments from any physical contactless debit or credit card — no extra hardware or dongles needed.</p>",
  cardContent2:"<p>Activate Tap & Pay directly in your Montra App and start accepting payments right away.</p>",
  cardContent3:"<p>Track transactions, monitor performance, and access real-time data to make better business decisions.</p>",
  cardContent4:"<p>Enable Tap & Pay inside the Montra App with minimal setup.</p>",
  
}
