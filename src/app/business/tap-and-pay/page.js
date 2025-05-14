"use client"
import BenefitCards from '@/components/Common/BenefitCards'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import About from '@/components/BusinessTapnPay/About'
import { fadeUpAnim } from '@/components/gsapAnimations'


const tapPay = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Tap. Pay. Go. It’s That Simple."} content={"Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity—so you can pay in seconds, without the hassle."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <About/>
   <SectionBreak content={"Our secure Tap & Pay service uses state-of-the-art encryption to protect your financial details. Each transaction is tokenized, ensuring your card information is never shared."} width={"w-[95%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default tapPay

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
  icon1:"/assets/images/business-tapnpay/overview-icon-1.svg",
  icon2:"/assets/images/business-tapnpay/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/business-montra-store/overview-bg-icon.svg",
  title:"Tap & Pay makes everyday purchases quick, easy, and totally stress-free.",
  content:[
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach.",
 
  ],
  subcontent1:"Tap it. Done",
  subcontent2:"Pay faster. Live smarter"
}
const  benefitsData = {
  heading:"The Future of Payments— Right at Your Fingertips",
  para:"It’s inventory management made simple, efficient, and built for growth.",
  headingWidth:"w-[80%]",
  paraWidth:"w-[70%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: " bg-[#D9F7C5]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Secure from the Start", z: "z-[5]", width:"w-[24vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: " Authentication Before Payment", z: "z-[4]", width:"w-[27vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: " bg-[#EAF1FF]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Advanced 2FA Protection", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: " bg-[#CAC5F7]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Your Payment Stays Private", z: "z-[4]",  width:"w-[27vw]", height:"17vw" },
  ]
}

const cardData ={
  heading:"Turn Your Phone Into a POS with Tap & Pay on Montra App",
  subHeading:"Offer everyday banking services to your community—all from your shop.",
  headingWidth:"w-[75%]",
  icon1:"/assets/images/business-tapnpay/card-icon-1.svg",
  icon2:"/assets/images/business-tapnpay/card-icon-2.svg",
  icon3:"/assets/images/business-tapnpay/card-icon-1.svg",
  icon4:"/assets/images/business-tapnpay/card-icon-4.svg",
  cardTitle1:"Accept Contactless Card Payments",
  cardTitle2:"Secure & Reliable Transactions",
  cardTitle3:"Get Started Instantly",
  cardTitle4:"Smart Dashboard ",
  cardContent1:"<p>Open a free Montra Business Account and start accepting payments in minutes—right from your smartphone.</p>",
  cardContent2:"<p>Open a free Montra Business Account and start accepting payments in minutes—right from your smartphone.</p>",
  cardContent3:"<p>Open a free Montra Business Account and start accepting payments in minutes—right from your smartphone.</p>",
  cardContent4:"<p>Open a free Montra Business Account and start accepting payments in minutes—right from your smartphone.</p>",
  
}
