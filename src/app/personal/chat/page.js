import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/personalChat/Benefits'
import Investors from '@/components/personalChat/Investors'
import React from 'react'

const personalChat = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Chat:"} heading={" Send Money Like a Message"} content={"Chat, send money, split bills, and stay connected—without ever leaving the conversation."} titleWidth={"w-[65%]"} paraWidth={"w-full"} />
   <Overview content={overviewContent}/>
   <Benefits/>
   <Investors/>
   <SectionBreak content={"Your Conversations, Now Smarter with Montra Chat. It's where talking meets transacting—secure, seamless, and instant."}/>
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