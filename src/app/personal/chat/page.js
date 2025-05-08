import Benefits from '@/components/Common/Benefits'
import Features from '@/components/Common/Features'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import React from 'react'

const personalChat = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Chat:"} heading={" Send Money Like a Message"} content={"Chat, send money, split bills, and stay connected—without ever leaving the conversation."} titleWidth={"w-[65%]"} paraWidth={"w-full"} />
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
  <Features featuresData={featuresData}/>
   <SectionBreak content={"Your Conversations, Now Smarter with Montra Chat. It's where talking meets transacting—secure, seamless, and instant."} width={"w-[92%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalChat

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
  icon1:"/assets/images/personal-chat/overview-icon-1.svg",
  icon2:"/assets/images/personal-banking/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-chat/overview-bg-icon.svg",
  title:"Chat Meets Finance",
  content:[
    "Montra Chat brings together your conversations and your money—so you can do more while saying less. Whether you're splitting lunch with friends, paying rent, or sending a quick birthday gift, Montra Chat makes it effortless. Just open a chat, tap to pay, and you’re done.",
    "No switching apps. No account numbers. Just fast, secure, and social payments—right inside your chats."
  ],
  subcontent1:"Smooth user experience",
  subcontent2:"Real-time updates"
}
const  benefitsData = {
  heading:"Send & Receive Money—Right Inside Your Chat",
  para:"No need to switch screens or apps. With Montra Chat, payments happen as naturally as conversations.",
  headingWidth:"w-[80%]",
  paraWidth:"w-[40%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Both users get instant payment alerts, right in the conversation.", title: "Pay Instantly", z: "z-[5]", width:"w-[17vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[20%]", top: "!top-[62.9%]", color: "bg-[#FEFFA7]", content: "Both users get instant payment alerts, right in the conversation.", title: "Request with Ease ", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Both users get instant payment alerts, right in the conversation.", title: "Real-Time Confirmations", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[65.9%]", color: "bg-[#CAC5F7]", content: "Both users get instant payment alerts, right in the conversation.", title: "View Receipts Anytime", z: "z-[4]",  width:"w-[23vw]", height:"17vw" },
  ]
}
const featuresData = {
  heading:"Insurance Plans Made for You",
  headingSize:"text-[5.7vw]",
  paraWidth:"w-[90%]",
  features:[
  {
    icon:"/assets/images/personal-chat/investor-icon-1.svg",
    text:"Messaging",
    color:"bg-[#FF8303]"
  },
  {
    icon:"/assets/images/personal-chat/investor-icon-2.svg",
    text:"Group Messaging",
    color:"bg-[#7A78FF]"
  },
  {
    icon:"/assets/images/personal-chat/investor-icon-3.svg",
    text:"Voice Calls",
    color:"bg-[#35C771]"
  },
  {
    icon:"/assets/images/personal-chat/investor-icon-4.svg",
    text:"Video Calls",
    color:"bg-[#111111]"
  },
  {
    icon:"/assets/images/personal-chat/investor-icon-5.svg",
    text:"Make Payments",
    color:"bg-[#FB2F55]"
  },
  {
    icon:"/assets/images/personal-chat/investor-icon-6.svg",
    text:"Request Payments",
    color:"bg-[#215CFF]"
  },
]
}