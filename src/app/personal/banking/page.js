"use client"
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/PersonalBanking/Benefits'
import Hero from '@/components/PersonalBanking/Hero'
import MontraAnim from '@/components/PersonalBanking/MontraAnim'
import Overview from '@/components/PersonalBanking/Overview'
import WhatWhy from '@/components/PersonalBanking/WhatWhy'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Overview icon1={"/assets/images/personal-banking/overview-icon-1.svg"} icon2={"/assets/images/personal-banking/overview-icon-2.svg"} mainImg={"/assets/images/personal-banking/overview-phone.png"} bgImg={"/assets/images/personal-banking/overview-banking-icon.svg"} title={"Your Digital Gateway To Financial Empowerment"} content={"Montra gives you a smarter way to manage your money—no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands. Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple—with just a few taps."} subcontent1={"safe payments"} subcontent2={"smart savings"}/>
    <MontraAnim/>
    <Benefits/>
    <WhatWhy/>
    <FAQs content={faqContent}/>
    
    </>
  )
}
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
]

export default page