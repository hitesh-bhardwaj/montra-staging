"use client"
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import BenefitCards from '@/components/Common/BenefitCards'
import Steps from '@/components/Common/Steps'
import WhatWhy from '@/components/Common/WhatWhy'
import { fadeUpAnim } from '@/components/gsapAnimations'

const businessPayments = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Digital Payments That Drive Growth"} content={"EWith Montra, getting paid is simple, secure, and built for scale. Empowering your Business with Seamless Digital Transactions "} paraWidth={"w-[60%]"}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <Steps stepData={stepData}/>
   <WhatWhy data={whatWhyData} height={"h-[50vw]"}/>
   <SectionBreak content={"Seamless payments, easy tracking, and total control — Montra helps you run your business your way."} width={"w-[85%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessPayments

const faqContent = [
    {
      question: "What payment methods can my business accept on Montra?",
      answer:
        "<p>Your Montra Business Account supports a variety of flexible, secure payment channels:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc'><li><span class='font-semibold'>Tap & Pay:</span> Accept contactless card payments using your NFC-enabled smartphone—no extra hardware required.</li><li><span class='font-semibold'>QR Code Payments:</span> Share your unique Montra QR code so customers can scan and pay instantly.</li><li><span class='font-semibold'>POS Terminal:</span> Use Montra’s physical POS device to accept card payments and track transactions.</li><li><span class='font-semibold'>Bank Transfers:</span> Receive payments directly into your Montra Business Account using standard bank transfers.</li></ul>",
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
  icon1:"/assets/images/business-payments/integrated-payments.svg",
  icon2:"/assets/images/business-payments/scalable-infrastructure.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Empowering Your Business with Seamless Digital Transactions",
  content:[
    "Montra offers a robust payment ecosystem tailored for businesses seeking efficient, secure, and scalable digital payment solutions. Our platform connects businesses with banks, merchants, dealers, sellers, lending institutions, and insurance companies, serving as a one-stop solution for all financial needs."
  ],
  subcontent1:"Multiple Payment Methods",
  subcontent2:"Instant Payment Settlement"
}
const  benefitsData = {
  heading:"The Smarter, Safer Way to Pay",
  para:"Your money. Your data. Protected at every step.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Your Montra App is protected by the password you set — and you can also unlock it easily using Face ID or biometric authentication on your phone.", title: "Secure from the Start", z: "z-[5]", width:"w-[22vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Every transaction on Montra is protected by our Fraud & Risk Assessment tool, which may prompt you for a Soft Token when needed. You get free access to a Soft Token through the VERIFYED app — available to all Montra users.", title: " Advanced 2FA Protection", z: "z-[4]", width:"w-[24vw]", height:"22vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Every payment on Montra is processed only after you successfully authenticate with your Montra PIN.", title: "Built-In Payment Checks", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "Only you and the person you’re transacting with can see the details of your payment — keeping your transactions private and secure.", title: "Your Privacy, Always", z: "z-[4]",  width:"w-[20vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Track Your Earnings & Rewards—All in One Place",
  headingWidth:"w-[70%]",
  gridCols:"grid-cols-4",
  cards:[
      {
          icon:"/assets/images/personal-payments/montra-account-statement.svg",
          title:"Business Account Statement",
          para:"Track all your payment collections using Montra Business Account through Montra Account Statement."
      },
      {
          icon:"/assets/images/personal-payments/instant-alerts.svg",
          title:"Instant Alerts",
          para:"Get voice and text notifications on your Montra App every time you receive a payment—so you’re always in the loop."
      },
      {
          icon:"/assets/images/personal-payments/reward-points.svg",
          title:"Reward Points Tracker",
          para:"Keep tabs on every reward point earned with a dedicated Reward Point Account Statement—no surprises, just benefits."
      },
      {
          icon:"/assets/images/personal-payments/easy-reward.svg",
          title:"Easy Reward Redemption",
          para:"Redeem your reward points in your Reward Point Redemption Account and track through a statement for this account on Montra App."
      },
  ]
}
const cardData ={
    heading:"Accept & Collect Payments Your Way",
    subHeading:"With Montra, Getting Paid Is Easy it’s Quick. Safe & Customer-friendly. Accept payments your way and keep your business moving forward.",
    headingWidth:"w-[60%]",
    icon1:"/assets/images/business-payments/card-icon-1.svg",
    icon2:"/assets/images/business-payments/card-icon-2.svg",
    icon3:"/assets/images/business-payments/card-icon-3.svg",
    icon4:"/assets/images/business-payments/card-icon-4.svg",
    cardTitle1:"QR Scan",
    cardTitle2:"Tap & Pay",
    cardTitle3:"POS Terminal",
    cardTitle4:"Bank Transfer",
    cardContent1:"<p>Customers scan your QR code using the Montra App or any mobile banking app to make payments.</p>",
    cardContent2:"<p>Turn your phone into a POS — customers can tap their debit or credit cards on your Montra App for quick, contactless payments.</p>",
    cardContent3:"<p>Use a Montra POS device to accept card payments easily and securely.</p>",
    cardContent4:"<p>Receive payments directly into your Montra Business Account through customer bank transfers.</p>",
    
  }
const whatWhyData = {
    heading:"Smart Invoicing. Instant Payments.",
    headingWidth:"w-[85%]",
    height:"h-[88%]",
    top:"top-[38%]",
    paraWidth:"w-[70%]",
    para:"Bill in any currency, send in seconds, and get paid without the wait—Montra makes cash flow smoother than ever.",
    content:[
    {
      number:"01",
      title:"Sign In or Get Started",
      para:"New to Montra? Download the app and open a Business Account in minutes. Already registered? Simply log in via the Montra App or Merchant Portal."
    },
    {
      number:"02",
      title:"Create & Send Invoices in Seconds",
      para:"Head to the Invoices tab, input your product or service details, add your customer info, select a currency, and hit send—it’s that easy."
    },
    {
      number:"03",
      title:"Get Paid, Hassle-Free",
      para:"Your customers can pay online using multiple payment methods, from anywhere in the world. No delays. No friction. Just smooth, secure payments."
    }
  ],
  }
  const stepData = {
    heading: "Get Paid Instantly ",
    steps: [
        {
            number: "01",
            title: "Sign In or Get Started",
            para: "New to Montra? Download the app and set up your Business account in minutes. Already onboard? Log in through the Montra App or Merchant Portal.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Sign In"
        },
        {
            number: "02",
            title: "Enable Payment Options",
            para: "Head to the Payment Section and activate QR scan, bank transfers, tap & pay, POS, or payment links — offer customers multiple ways to pay.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Activate Payments"
        },
        {
            number: "03",
            title: "Accept Instant Payments",
            para: "Start collecting payments instantly — funds land directly in your Montra Business Account, no waiting.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Accept Payments"
        },
        {
            number: "04",
            title: "Track & Manage Earnings",
            para: "Use your smart Montra dashboard to monitor transactions, settlements, and reports — all in real time.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Track Earnings"
        },
    ],
};