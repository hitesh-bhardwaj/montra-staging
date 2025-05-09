import BenefitCards from '@/components/Common/BenefitCards'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'

const montraStore = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Start selling online on Montra App."} content={"Experience next-gen payment convenience. Our contactless Tap & Pay system is designed for speed, security, and simplicity—so you can pay in seconds, without the hassle."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   {/* <Discover/> */}
   <SectionBreak content={"Our fintech solutions are designed to empower individuals and businesses—making everyday transactions effortless, digital wallets seamless, and payment systems more accessible."} width={"w-[95%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default montraStore

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
  icon1:"/assets/images/business-montra-store/overview-icon-1.svg",
  icon2:"/assets/images/business-montra-store/overview-icon-1.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/business-montra-store/overview-bg-icon.svg",
  title:"Smart Payments for Smarter Shoppers",
  content:[
    "Montra’s Agency Banking solution enables individuals and businesses to become local banking agents, extending essential financial services to underserved communities. With just a smartphone and the Montra App, agents can perform cash-in, cash-out, transfers, bill payments, and more—bringing modern banking to people where traditional banks can’t reach.",
 
  ],
  subcontent1:"Shopping Made Flexible",
  subcontent2:"Shopping Made Flexible"
}
const  benefitsData = {
  heading:"Financial Infrastructure for the Modern Enterprise",
  para:"Open your free Montra digital account in minutes.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Build your Store", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: " Sell Everywhere", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Sell Across Borders", z: "z-[5]",  width:"w-[22vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "No payment goes through without your personal Montra PIN. It's your final word on every transaction.", title: "Pay in Installments on Montra", z: "z-[4]",  width:"w-[27vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Stay on Top of Your Earnings & Rewards with Montra",
  headingWidth:"w-[90%]",
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
  icon1:"/assets/images/business-montra-store/card-icon-1.svg",
  icon2:"/assets/images/business-montra-store/card-icon-2.svg",
  icon3:"/assets/images/business-montra-store/card-icon-1.svg",
  icon4:"/assets/images/business-montra-store/card-icon-4.svg",
  cardTitle1:"Delivery/ Takeout/ Rentals",
  cardTitle2:"Dine-in",
  cardTitle3:"Home Services",
  cardTitle4:"Appointments",
  cardContent1:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
  cardContent2:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
  cardContent3:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
  cardContent4:"<p>Enable Montra users or any bank customer to withdraw cash securely right from your outlet.</p>",
  
}
