import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Discover from '@/components/PersonalPayments/Discover'
import Track from '@/components/PersonalPayments/Track'
import Ways from '@/components/PersonalPayments/Ways'
import React from 'react'

const personalPayments = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Personal Account:"} heading={"The Easiest Way to Pay, Anywhere"} content={"Whether you're paying bills, splitting dinner, or sending money to loved ones—Montra makes it effortless. Say goodbye to cash and long queues. With Montra, your phone becomes your wallet."}/>
   <Overview icon1={overviewContent.icon1} icon2={overviewContent.icon2} mainImg={overviewContent.mainImg} bgImg={overviewContent.bgImg} title={overviewContent.title} content={overviewContent.content} subcontent1={overviewContent.subcontent1} subcontent2={overviewContent.subcontent2}/>
   <Ways/>
   <Track/>
   <Discover/>
   {/* <SectionBreak content={"Whether you're paying bills, sending money, or shopping online—do it all in one place, with complete peace of mind."}/> */}
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalPayments

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
  icon1:"/assets/images/personal-banking/overview-icon-1.svg",
  icon2:"/assets/images/personal-banking/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Fast, Easy Payments—Right from Your Phone",
  content:[
    "Montra gives you a smarter way to manage your money—no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands.",
    "Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple—with just a few taps."
  ],
  subcontent1:"safe payments",
  subcontent2:"smart savings"
}