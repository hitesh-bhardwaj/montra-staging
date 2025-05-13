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
   <Hero primaryHeading={"Montra for Business: "} heading={"Digital Payments That Drive Growth"} content={"Empowering Your Business with Seamless Digital Transactions"}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <Steps/>
   <WhatWhy data={whatWhyData} height={"h-[55vw]"}/>
   <SectionBreak content={"From seamless payments to accessible credit options, Montra empowers you to take control of your financial future."} width={"w-[85%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessPayments

const faqContent = [
    {
      question: "What is the scheduled payments feature?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: "How sending a bank transfer?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
    },
    {
      question: "How can I reactivate a terminated card?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: "How can add money to my account?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    
    {
      question: "How can add money to my account?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: "How can add money to my account?",
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
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
  subcontent1:"Scalable Infrastructure",
  subcontent2:"Integrated Payment Solutions"
}
const  benefitsData = {
  heading:"The Smarter, Safer Way to Pay",
  para:"Your money. Your data. Protected at every step.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Secure from the Start", z: "z-[5]", width:"w-[22vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: " Advanced 2FA Protection", z: "z-[4]", width:"w-[24vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Built-In Payment Checks", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Your Privacy, Always", z: "z-[4]",  width:"w-[20vw]", height:"17vw" },
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
          para:"View all your incoming payments in real-time with your Montra Business Account Statement—clarity made simple."
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
          para:"Redeem your points anytime and monitor it all through your Reward Point Redemption Account—track your perks with ease."
      },
  ]
}
const cardData ={
    heading:"Accept & Collect Payments Your Way",
    subHeading:"Montra gives your business the flexibility to get paid quickly, securely, and however your customers prefer. Here’s how you can start accepting & collecting payments with ease:",
    headingWidth:"w-[60%]",
    icon1:"/assets/images/business-payments/qr.svg",
    icon2:"/assets/images/business-payments/tap-n-pay.svg",
    icon3:"/assets/images/business-payments/qr.svg",
    icon4:"/assets/images/business-payments/bank-transfer.svg",
    cardTitle1:"QR Scan",
    cardTitle2:"Tap & Pay",
    cardTitle3:"POS Terminal",
    cardTitle4:"Bank Transfer",
    cardContent1:"<p>Start taking <span class='text-primary'>debit and credit card</span> payments instantly with <span class='text-primary'>Montra POS</span> —fast, secure, and perfect for any business.</p>",
    cardContent2:"<p>Start taking <span class='text-primary'>debit and credit card</span> payments instantly with <span class='text-primary'>Montra POS</span> —fast, secure, and perfect for any business.</p>",
    cardContent3:"<p>Start taking <span class='text-primary'>debit and credit card</span> payments instantly with <span class='text-primary'>Montra POS</span> —fast, secure, and perfect for any business.</p>",
    cardContent4:"<p>Start taking <span class='text-primary'>debit and credit card</span> payments instantly with <span class='text-primary'>Montra POS</span> —fast, secure, and perfect for any business.</p>",
    
  }
const whatWhyData = {
    heading:"Send Invoices. Get Paid. Fast.",
    headingWidth:"w-[85%]",
    height:"h-[90%]",
    top:"top-[33%]",
    paraWidth:"w-[70%]",
    para:"Create and send professional invoices in multiple currencies—and let your customers pay you online, instantly. With Montra, improving your cash flow has never been easier.",
    content:[
    {
      number:"01",
      title:"Sign In or Get Started",
      para:"New to Montra? Download the app and open a Business account in minutes. Already onboard? Log in through the Montra App or Merchant Portal."
    },
    {
      number:"02",
      title:"Create & Send Invoices in Seconds",
      para:"Go to the Invoices tab and fill in your product or service details. Add your customer info, choose the currency, and send—done!"
    },
    {
      number:"03",
      title:"Get Paid, Hassle-Free",
      para:"Your customers can pay online using a variety of payment methods—from anywhere in the world. No delays. No friction."
    }
  ],
  }