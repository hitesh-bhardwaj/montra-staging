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
import Features from '@/components/Common/Features'
import WhatWhy from '@/components/Common/WhatWhy'
import { fadeUpAnim } from '@/components/gsapAnimations'


const businessPaymentGateway = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Boost Your Sales with our Payment Gateway"} content={"Whether you're selling on a website, app, or social media, Montra makes it easy to get paid with just a few clicks."} paraWidth={"w-[55%]"} />
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <Steps stepData={stepData}/>
   <Features featuresData={featuresData}/>
   <Rewards rewardsData={rewardsData}/>
   <BenefitCards cardData={cardData}/>
   <WhatWhy data={whatWhyData} height={"h-[47vw]"}/>
   <SectionBreak content={"MontraPay makes it simple for businesses of all sizes to accept secure payments online or offline"} width={"w-[90%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessPaymentGateway

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
  icon1:"/assets/images/payment-gateway/quick-integration.svg",
  icon2:"/assets/images/payment-gateway/secure.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Accept Payments Online, Seamlessly and Securely",
  content:[
    "Montra Payment Gateway makes it easy for businesses of all sizes to accept payments online—quickly, securely, and with no tech complexity. Whether you run an eCommerce store, mobile app, or offer services via social platforms, Montra helps you collect payments from customers using a wide range of payment methods."
  ],
  subcontent1:"Secure Transactions",
  subcontent2:"Quick Integration"
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
  const featuresData = {
    heading:"Effortlessly Accept Payments with MontraPay Integration",
    headingSize:"text-[3.4vw]",
    paraWidth:"w-[50%]",
    features:[
    {
      icon:"/assets/images/payment-gateway/web-sdk.svg",
      text:"Web SDK",
      color:"bg-[#7A78FF]"
    },
    {
      icon:"/assets/images/payment-gateway/mobile-sdk.svg",
      text:"Mobile SDK",
      color:"bg-[#35C771]"
    },
    
  ]
  }
const rewardsData={
  heading:"Flexible Payment Methods for Seamless Transactions",
  headingWidth:"w-[80%]",
  gridCols:"grid-cols-3",
  cards:[
      {
          icon:"/assets/images/payment-gateway/pay-on-delivery.svg",
          title:"Pay on Delivery (POD)",
          para:" Enable POD and send customers a payment link via email, allowing them to pay upon delivery."
      },
      {
          icon:"/assets/images/payment-gateway/pay-now.svg",
          title:"Pay Now",
          para:"Customers can pay instantly using their Montra account, linked bank accounts, or cards."
      },
      {
          icon:"/assets/images/payment-gateway/escrow.svg",
          title:"Escrow Pay",
          para:"Ensure secure transactions by holding funds in an escrow account until the product or service is delivered, based on agreed terms and conditions."
      },
     
  ]
}
const cardData ={
    heading:"Simplify Payment Acceptance with Flexible Methods",
    subHeading:"MontraPay offers a variety of payment acceptance methods for seamless transactions",
    headingWidth:"w-[80%]",
    icon1:"/assets/images/business-payments/qr.svg",
    icon2:"/assets/images/business-payments/tap-n-pay.svg",
    icon3:"/assets/images/business-payments/qr.svg",
    icon4:"/assets/images/business-payments/bank-transfer.svg",
    cardTitle1:"QR Scan",
    cardTitle2:"New & Saved Cards",
    cardTitle3:"Pay using Montra App",
    cardTitle4:"USSD",
    cardContent1:"<p>Customers can complete payments through their Montra app, using available options like Montra account, linked accounts, linked cards, and installments.</p>",
    cardContent2:"<p>Customers can complete payments through their Montra app, using available options like Montra account, linked accounts, linked cards, and installments.</p>",
    cardContent3:"<p>Customers can complete payments through their Montra app, using available options like Montra account, linked accounts, linked cards, and installments.</p>",
    cardContent4:"<p>Customers can complete payments through their Montra app, using available options like Montra account, linked accounts, linked cards, and installments.</p>",
    
  }
  const whatWhyData = {
    heading:"Get Paid Instantly with Montra Payment Links",
    headingWidth:"w-[85%]",
    top:"top-[37.5%]",
    para:"Start selling online without the need for a website or app. Just create and share a payment link in minutes—no technical setup required.",
    content:[
    {
      number:"01",
      title:"Sign In to Your Montra App or Merchant Portal",
      para:"Download the Montra App and sign up for a free Business Account, or log in if you're already registered."
    },
    {
      number:"02",
      title:"Create Your Payment Link",
      para:"Easily generate a Payment Link for the product or service you’re offering—straight from the app or portal."
    },
    {
      number:"03",
      title:"Share & Get Paid",
      para:"Send the link via SMS, Email, WhatsApp, or any other channel. Customers can pay instantly, and you get notified as soon as the payment is completed."
    }
  ],
  }
  const stepData = {
    heading: "MontraPay: Fast & Easy Checkout",
    steps: [
        {
            number: "01",
            title: "Add to Cart",
            para: "Customers browse through your products or services and simply add their selected items to the checkout cart—just like shopping anywhere else, but faster and easier.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Add to cart"
        },
        {
            number: "02",
            title: "Add to Cart",
            para: "Customers browse through your products or services and simply add their selected items to the checkout cart—just like shopping anywhere else, but faster and easier.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Add to cart"

        },
        {
            number: "03",
            title: "Add to Cart",
            para: "Customers browse through your products or services and simply add their selected items to the checkout cart—just like shopping anywhere else, but faster and easier.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Add to cart"

        },
        {
            number: "04",
            title: "Add to Cart",
            para: "Customers browse through your products or services and simply add their selected items to the checkout cart—just like shopping anywhere else, but faster and easier.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Add to cart"

        },
    ],
};
