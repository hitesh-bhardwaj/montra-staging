import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import Discover from '@/components/PersonalPayments/Discover'
import Track from '@/components/PersonalPayments/Track'
import Ways from '@/components/PersonalPayments/Ways'
import React from 'react'

const personalPayments = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra Personal Account: "} heading={"The Easiest Way to Pay, Anywhere"} content={"Whether you're paying bills, splitting dinner, or sending money to loved ones—Montra makes it effortless. Say goodbye to cash and long queues. With Montra, your phone becomes your wallet."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <Ways/>
   <Track/>
   <Discover/>
   <SectionBreak content={"Whether you're paying bills, sending money, or shopping online—do it all in one place, with complete peace of mind."} width={"w-[85%]"}/>
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
  subcontent1:"Pay Bills",
  subcontent2:"Send Money"
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