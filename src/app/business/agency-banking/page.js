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
import { fadeUpAnim } from '@/components/gsapAnimations'


const businessAgencyBanking = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Earn with Montra Agency Banking"} content={"Empowering Your Business with Seamless Digital Transactions"}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <SectionBreak content={"Whether you're starting out or looking to scale, Montra gives you the tools to succeed—backed by technology, support, and rewards."} width={"w-[95%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessAgencyBanking

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
  icon1:"/assets/images/business-agency-banking/robust.svg",
  icon2:"/assets/images/business-agency-banking/earn.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Empowering Local Agents with Digital Banking",
  content:[
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach."
  ],
  subcontent1:"Earn as You Serve",
  subcontent2:"Robust Digital Tools"
}
const  benefitsData = {
  heading:"Become a Montra Agent. Serve More. Earn More.",
  para:"Open your free Montra digital account in minutes.",
  headingWidth:"w-[70%]",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "No Account Fees", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: " Risk-Free Deposits", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "Track Payments Seamlessly", z: "z-[5]",  width:"w-[25vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "Unmatched Security", z: "z-[4]",  width:"w-[20vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Stay on Top of Your Earnings & Rewards with Montra",
  headingWidth:"w-[80%]",
  gridCols:"grid-cols-4",
  cards:[
      {
          icon:"/assets/images/personal-payments/montra-account-statement.svg",
          title:"Business Account Statement",
          para:"View all your incoming payments in real-time with your Montra Business Account Statement—clarity made simple."
      },
      {
          icon:"/assets/images/personal-payments/instant-alerts.svg",
          title:"Instant Alerts",
          para:"Get voice and text notifications on your Montra App every time you receive a payment—so you’re always in the loop."
      },
      {
          icon:"/assets/images/personal-payments/reward-points.svg",
          title:"Reward Points Tracker",
          para:"Keep tabs on every reward point earned with a dedicated Reward Point Account Statement—no surprises, just benefits."
      },
      {
          icon:"/assets/images/personal-payments/easy-reward.svg",
          title:"Easy Reward Redemption",
          para:"Redeem your points anytime and monitor it all through your Reward Point Redemption Account—track your perks with ease."
      },
  ]
}
const cardData ={
    heading:"Empower Your Community with Montra Services",
    subHeading:"Offer everyday banking services to your community—all from your shop.",
    headingWidth:"w-[70%]",
    icon1:"/assets/images/business-agency-banking/cash-deposit.svg",
    icon2:"/assets/images/business-agency-banking/bills.svg",
    icon3:"/assets/images/business-agency-banking/bills.svg",
    icon4:"/assets/images/business-agency-banking/bank-transfer.svg",
    cardTitle1:"Cash Deposit",
    cardTitle2:"Bills & Recharge Payments",
    cardTitle3:"Cash Withdrawal",
    cardTitle4:"Bank Transfer",
    cardContent1:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
    cardContent2:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
    cardContent3:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
    cardContent4:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
    
  }
  