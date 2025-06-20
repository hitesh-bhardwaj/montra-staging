import Benefits from '@/components/Common/Benefits'
import Features from '@/components/Common/Features'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import { WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'
import { homepage } from '@/lib/util'
import { generateMetadata } from '@/components/Metadata'

export const metadata = generateMetadata({
  homepage,
  title: "Montra Shop – In-App Marketplace for Essentials & Services",
  description: "Shop essentials, airtime, bills, subscriptions & gifts seamlessly via Montra’s in-app marketplace. Chat, call sellers, pay securely—all in one convenient app.",
  url:"personal/shop",
  image: "personal-wshop.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
});


const personalShop = () => {
  return (
   <>
   <WebpageJsonLd metadata={metadata}/>
   <Header/>
   <Hero primaryHeading={"Montra Shop:"} heading={"Your One-Stop Shop for Every Need - Delivered to Your Doorstep"} content={"Montra Marketplace recreates the feel of shopping in the real world—compare products across sellers, chat, negotiate, and pay—all in one seamless platform."} titleWidth={"w-[75%]"} paraWidth={"w-full"} />
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
  <Features featuresData={featuresData}/>
   <SectionBreak content={"Shop seamlessly with Montra – A smarter, safer, and faster way to buy what you need. Download the Montra App and discover a marketplace designed for your lifestyle."} width={"w-[89%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalShop

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
      question: 'How can I reactivate a terminated card?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
      question: 'How can add money to my account?',
      answer:
        "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
  ];
const overviewContent = {
  icon1:"/assets/images/personal-shop/no-queues.svg",
  icon2:"/assets/images/personal-shop/access.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-shop/shop.svg",
  title:"A Smarter Way to Shop, Right from Your Montra App",
  content:[
    "Montra Shop brings everyday essentials and digital services to your fingertips. From airtime and data top-ups to bill payments, subscriptions, and gifting, you can browse, buy, and pay—all in one seamless, secure experience. No lines. No stress. Just simple, convenient shopping built for your lifestyle."
  ],
  subcontent1:"24/7 Access",
  subcontent2:"No Queues, No Hassles"
}
const  benefitsData = {
  heading:"Why Shop on Montra?",
  para:"Discover a wide range of products and services across multiple categories—right from your Montra app. From daily essentials to specialized services, shopping has never been easier.",
  headingWidth:"w-[80%]",
  paraWidth:"w-[65%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Compare products for every needs across sellers on the Montra app to make informed decisions.", title: "Your One-Stop Shop ", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[20%]", top: "!top-[62.9%]", color: "bg-[#FEFFA7]", content: "Choose Pay on Delivery via a secure payment link or use Escrow Pay  where your money stays protected with Montra until the seller fulfills the agreed terms.", title: "Multiple Ways to Pay", z: "z-[4]", width:"w-[22vw]", height:"20vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Engage sellers for your queries to start conversations using Chat, audio and video call features on the Montra app.", title: "Connect & Shop Smarter", z: "z-[5]",  width:"w-[24vw]", height:"18vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[65.9%]", color: "bg-[#CAC5F7]", content: "Stay updated with categories you love and stores you follow through feeds shared by sellers on the Montra app", title: "Smart Feeds, Just for You", z: "z-[4]",  width:"w-[23vw]", height:"18vw" },
  ]
}
const featuresData = {
  heading:"Explore Our Product & Service Categories",
  headingSize:"text-[3.4vw]",
  paraWidth:"w-[90%]",
  features:[
  {
    icon:"/assets/images/personal-shop/delivery.svg",
    text:"Delivery/ Takeout/ Rentals",
    color:"bg-[#FF8303]"
  },
  {
    icon:"/assets/images/personal-shop/dine-in.svg",
    text:"Dine-in",
    color:"bg-[#7A78FF]"
  },
  {
    icon:"/assets/images/personal-shop/home-services.svg",
    text:"Home Services",
    color:"bg-[#35C771]"
  },
  {
    icon:"/assets/images/personal-shop/appointments.svg",
    text:"Appointments",
    color:"bg-[#FB2F55]"
  },
  
]
}