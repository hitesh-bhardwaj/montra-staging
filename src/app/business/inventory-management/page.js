import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import BenefitCards from '@/components/Common/BenefitCards'


const businessInventory = () => {
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business:"} heading={"Smarter Inventory Management"} content={"Montra’s Inventory Management tool helps you stay in control of your stock, reduce losses, and improve your bottom line."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <SectionBreak content={"Whether you're buying, selling, or tracking inventory, Montra gives you the tools to manage it all in one place."} width={"w-[90%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessInventory

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
  icon1:"/assets/images/business-inventory/low-stocks.svg",
  icon2:"/assets/images/business-inventory/track.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Effortless Inventory Management for Modern Businesses",
  content:[
    "Keep your business running smoothly with Montra’s easy-to-use inventory management system. Whether you’re managing a retail store, running a service business, or operating multiple outlets, Montra helps you stay organized and in control—right from your phone."
  ],
  subcontent1:"Track, manage, and grow",
  subcontent2:"Low stock alerts"
}
const  benefitsData = {
  heading:"Why Choose Montra’s Inventory Tool?",
  para:"It’s inventory management made simple, efficient, and built for growth.",
  headingWidth:"w-[60%]",
  paraWidth:"w-[40%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Every transaction requires confirmation with your unique Montra PIN, adding an extra layer of protection before any payment is processed.", title: "Secure from the Start", z: "z-[5]", width:"w-[22vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Every transaction requires confirmation with your unique Montra PIN, adding an extra layer of protection before any payment is processed.", title: " Authentication Before Payment", z: "z-[4]", width:"w-[27vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Every transaction requires confirmation with your unique Montra PIN, adding an extra layer of protection before any payment is processed.", title: "Advanced 2FA Protection", z: "z-[5]",  width:"w-[25vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Every transaction requires confirmation with your unique Montra PIN, adding an extra layer of protection before any payment is processed.", title: "Your Payment Stays Private", z: "z-[4]",  width:"w-[24vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Seamlessly Track Payments & Inventory on Montra",
  headingWidth:"w-[80%]",
  cards:[
      {
          icon:"/assets/images/business-inventory/instant-payments.svg",
          title:"Instant Payments for Buying & Selling",
          para:" Whether you're buying or selling inventory, payments happen instantly between Montra Business Accounts—no delays, no hassle."
      },
      {
          icon:"/assets/images/business-inventory/sell-on-credit.svg",
          title:"Sell on Credit, Easily",
          para:"Offer credit terms and let Montra handle tracking and follow-ups, so you can focus on growth, not chasing funds."
      },
      {
          icon:"/assets/images/business-inventory/buy-now.svg",
          title:"Buy Now, Pay Later",
          para:"Get the flexibility you need. Accept seller credit and pay in easy installments—all within the Montra App."
      },
      {
          icon:"/assets/images/business-inventory/order.svg",
          title:"Order Directly from Distributors",
          para:"Connected to a distributor? Place and manage orders directly with linked distributors in the app."
      },
  ]
}
const cardData ={
    heading:"Smarter Inventory Management on Montra App",
    subHeading:"Smarter Inventory Management on Montra App.",
    headingWidth:"w-[75%]",
    icon1:"/assets/images/business-inventory/buy-inventory.svg",
    icon2:"/assets/images/business-inventory/manage-your-stock.svg",
    icon3:"/assets/images/business-inventory/buy-inventory.svg",
    icon4:"/assets/images/business-inventory/place-orders.svg",
    cardTitle1:"Buy Inventory",
    cardTitle2:"Manage Your Stock",
    cardTitle3:"Sell Inventory",
    cardTitle4:"Place Orders with Linked Distributors",
    cardContent1:"<p>Send invoices to other Montra-registered businesses and get paid instantly into your Business Account.</p>",
    cardContent2:"<p>Send invoices to other Montra-registered businesses and get paid instantly into your Business Account.</p>",
    cardContent3:"<p>Send invoices to other Montra-registered businesses and get paid instantly into your Business Account.</p>",
    cardContent4:"<p>Send invoices to other Montra-registered businesses and get paid instantly into your Business Account.</p>",
    
  }
  