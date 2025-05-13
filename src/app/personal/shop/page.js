"use client"
import Benefits from '@/components/Common/Benefits'
import Features from '@/components/Common/Features'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import { fadeUpAnim } from '@/components/gsapAnimations'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import React from 'react'

const personalShop = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Shop:"} heading={" Everything You Need, All in One App"} content={"Discover a smarter way to shop—right from your Montra App. Whether it's daily essentials, airtime, bill payments, or gifting, Montra brings the marketplace to your fingertips with seamless, secure transactions."} titleWidth={"w-[75%]"} paraWidth={"w-full"} />
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
  <Features featuresData={featuresData}/>
   <SectionBreak content={"Shop Smarter, Safer, and Seamlessly with Montra. Download the Montra App and discover a marketplace designed for your lifestyle."} width={"w-[89%]"}/>
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
  bgImg:"/assets/images/personal-chat/overview-bg-icon.svg",
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
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Chat directly with sellers, jump on a voice or video call, and even make payments—all while staying in the conversation.", title: "One stop shop", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[20%]", top: "!top-[62.9%]", color: "bg-[#FEFFA7]", content: "Chat directly with sellers, jump on a voice or video call, and even make payments—all while staying in the conversation.", title: "Multiple Ways to Pay", z: "z-[4]", width:"w-[22vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Chat directly with sellers, jump on a voice or video call, and even make payments—all while staying in the conversation.", title: "Connect & Shop Smarter", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[65.9%]", color: "bg-[#CAC5F7]", content: "Chat directly with sellers, jump on a voice or video call, and even make payments—all while staying in the conversation.", title: "Flexible Delivery Options", z: "z-[4]",  width:"w-[23vw]", height:"17vw" },
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