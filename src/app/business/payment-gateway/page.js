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
   <Hero primaryHeading={"Montra for Business: "} heading={"Power your Business with MontraPay"} content={"Whether you’re selling on a website, app or on social media, MontraPay makes it easy to get paid with just a few clicks."} paraWidth={"w-[55%]"} />
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
      question: "What is MontraPay and how does it work? ",
      answer:
        "<p>MontraPay is a secure payment gateway that allows you to accept payments via your website, mobile app, or social media. At checkout, customers enter their <span class='font-semibold'>Montra ID</span>, approve the payment in their Montra App, and pay using their Montra Account, linked bank, card, or installments. Payment is <span class='font-semibold'>instantly settled </span>into your Montra Business Account.</p>",
    },
    {
      question: "Who can use MontraPay to make payments?",
      answer:
        "<p>Only customers who are registered on the Montra App can use MontraPay. This ensures secure, app-authenticated transactions with lower risk of fraud or failed payments.</p>",
    },
    {
      question: "How do I integrate MontraPay into my business?",
      answer:
        "<p>Integration is flexible:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>For websites or apps:</span> Use MontraPay’s developer-friendly APIs or plugins to embed the payment flow.</li><li><span class='font-semibold'>No website?</span> You can generate and share secure payment links through chat, WhatsApp, or email—no code required. You’ll find integration guides and support in your <span class='font-semibold'>Montra Merchant Dashboard.</span></li></ul>",
    },
    {
      question: "What types of payments does MontraPay support—and why are there so many options? ",
      answer:
        "<p>MontraPay is designed to meet customers where they are, making payments simple and flexible for everyone—whether they use the Montra App or not.</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>For Montra Users (in-app, seamless experience):</span> These users enjoy full access to Montra’s payment features, allowing them to:<ul class='pl-[2vw] space-y-[0.5vw] list-disc'><li>Pay via Montra Account</li><li>Use Linked Bank Accounts</li><li>Pay with Debit/Credit Cards</li><li>Use QR code scanning or USSD</li><p>These methods ensure fast, secure, and real-time payments within the app.</p></ul></li><li><span class='font-semibold'>For Non-Montra Users (via payment link):</span> To serve a wider customer base, MontraPay also supports link-based payments:<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Pay Now </span>– immediate online payment via card or bank</li><li><span class='font-semibold'>Pay on Delivery (POD)</span> – secure link sent at delivery</li><li><span class='font-semibold'>Escrow Pay</span> – funds are held and released after delivery confirmation</li></ul></li></ul",
    },
    
    {
      question: "Why all these options? ",
      answer:
        "<p>Because every customer pays differently. MontraPay helps you capture more sales by supporting both app-savvy users and those who prefer traditional or cautious payment methods—all without needing extra hardware or complex setup.</p>",
    },
    {
      question: "What is Escrow Pay? ",
      answer:
        "<p><span class='font-semibold'>Escrow Pay</span> is a secure payment option where Montra temporarily holds your money in an <span class='font-semibold'>Escrow Account</span> until both the buyer and seller fulfill the agreed terms.</p><p>Here’s how it works:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>When you choose Escrow Pay, your funds are <span class='font-semibold'>safely held by Montra.</span></li><li>Once the product/service is delivered and you confirm satisfaction, Montra instantly releases the payment to the seller.</li><li>If the seller fails to deliver or the product doesn't meet the agreed terms, you can cancel the order, and Montra will <span class='font-semibold'>refund your money immediately.</span></li></ul><p>Escrow Pay is ideal for high-value or sensitive transactions, offering protection and peace of mind for both parties.</p>",
    },
  ];
const overviewContent = {
  icon1:"/assets/images/payment-gateway/quick-integration.svg",
  icon2:"/assets/images/payment-gateway/secure.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Accept Payments Online, Seamlessly & Securely",
  content:[
    "MontraPay makes it easy for businesses of all sizes to accept payments online—quickly, securely, and with no tech complexity. Whether you run an eCommerce store, mobile app, or offer services via social platforms, Montra helps you collect payments from customers using a wide range of payment methods."
  ],
  subcontent1:"Secure Transactions",
  subcontent2:"Quick Integration"
}
const  benefitsData = {
    heading:"Powering Payments, Securing Growth",
    para:"With flexible payments, powerful dashboards, and top-tier security, MontraPay gives your business the tools to scale confidently and get paid easily.",
    headingWidth:"w-full",
    paraWidth:"w-full",
    cards:[
      { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Access detailed reports on payments, settlements, and refunds — giving you the insights you need to make smarter business decisions.", title: "Powerful Dashboard", z: "z-[5]", width:"w-[22vw]", height:"17vw" },
      { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Stay protected with PCI DSS compliance, regular third-party audits, and a dedicated internal security team keeping your data safe.", title: "Robust Security", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
      { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Let customers pay their way with flexible options like Pay on Delivery (POD), Pay Now, Escrow Pay, and even USSD.", title: "Multiple payment options", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
      { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "MontraPay helps your business grow confidently with a secure payment system that safeguards your money and customer data from fraud.", title: "Secure revenue growth", z: "z-[4]",  width:"w-[24vw]", height:"17vw" },
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
          para:"As a merchant, you can enable Pay on Delivery, allowing Montra to send a secure payment link to customers email. Payment is made once the order is delivered."
      },
      {
          icon:"/assets/images/payment-gateway/pay-now.svg",
          title:"Pay Now",
          para:"Customers can pay instantly using their Montra Account, or any linked bank account or card—fast, simple, and secure."
      },
      {
          icon:"/assets/images/payment-gateway/escrow.svg",
          title:"Escrow Pay",
          para:"For added security, customers can opt for Escrow Pay. Funds are held safely until the product or service is delivered as agreed. If terms aren’t met, the payment is refunded."
      },
     
  ]
}
const cardData ={
    heading:"Simplify Payment Acceptance with Flexible Methods",
    subHeading:"MontraPay offers a variety of payment acceptance methods for seamless transactions",
    headingWidth:"w-[80%]",
    icon1:"/assets/images/payment-gateway/card-icon-1.svg",
    icon2:"/assets/images/payment-gateway/card-icon-2.svg",
    icon3:"/assets/images/payment-gateway/card-icon-3.svg",
    icon4:"/assets/images/payment-gateway/card-icon-4.svg",
    cardTitle1:"QR Scan",
    cardTitle2:"New & Saved Cards",
    cardTitle3:"Pay using Montra App",
    cardTitle4:"USSD",
    cardContent1:"<p>Customers can scan the QR code displayed on your web page using any mobile banking app to pay directly into your business account.</p>",
    cardContent2:"<p>Customers can pay using a new debit or credit card or choose a saved card on the Montra platform — no need to re-enter card details.</p>",
    cardContent3:"<p>Registered Montra users receive a notification in their app to complete payments using Montra Account, linked bank accounts, saved cards, or installments. Once done, they get instant confirmation on the web page where the transaction was initiated.</p>",
    cardContent4:"<p>Customers can securely complete payments from their bank accounts using a USSD code.</p>",
    
  }
  const whatWhyData = {
    heading:"Get Paid Instantly with Montra Payment Links",
    headingWidth:"w-[85%]",
    top:"top-[37.5%]",
    para:"Just create and share a payment link in minutes—no technical setup required.",
    content:[
    {
      number:"01",
      title:"Sign In or Get Started",
      para:"Download the Montra App and open a free Business Account or log in through the app or Merchant Portal if you're already registered."
    },
    {
      number:"02",
      title:"Create a Payment Link",
      para:"Quickly generate a secure Payment Link for any product or service—right from the Montra App or Portal."
    },
    {
      number:"03",
      title:"Share & Receive Payment",
      para:"Send the link via SMS, WhatsApp, Email, or any preferred channel. Your customer pays instantly, and you get notified in real time."
    }
  ],
  }
  const stepData = {
    heading: "MontraPay: Fast & Easy Checkout",
    steps: [
        {
            number: "01",
            title: "Add to Cart",
            para: "Customers can browse your products or services and add selected items to the checkout cart — quick, smooth, and familiar.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Add to cart"
        },
        {
            number: "02",
            title: "Confirm Order Details",
            para: "They review their order details, check quantities, and confirm everything before proceeding.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Confirm details"

        },
        {
            number: "03",
            title: "Select Payment Option & Method",
            para: "At checkout, customers choose how they want to pay (Pay Now, Pay on Delivery, Escrow) and complete payment using Montra Account, linked bank, saved cards, installments, or USSD.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Choose a Payment Method"

        },
        {
            number: "04",
            title: "Instant Payment Settlement",
            para: "Payments are securely processed and settled in real time, giving you and your customer immediate confirmation.",
            img: "/assets/images/payment-gateway/steps-img-1.png",
            tag:"Payment Settled"

        },
    ],
};
