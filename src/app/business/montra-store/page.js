"use client"
import BenefitCards from '@/components/Common/BenefitCards'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import { fadeUpAnim } from '@/components/gsapAnimations'

const montraStore = () => {
  fadeUpAnim();
  return (
   <>
   <Header/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Start Selling Online — No Website Required"} content={"Create your free, customized Montra Store to showcase your products, reach more customers, accept payments seamlessly, and grow your business — all within the Montra App."}/>
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
      question: 'What is Montra Store and how is it different from other marketplaces? ',
      answer:
        "<p>Montra Store is a virtual storefront designed to help merchants sell directly to customers online—via chat, social media, or in-app browsing—while also integrating payment, inventory, and order management tools in one place. Unlike other marketplaces, it’s built into the Montra ecosystem for faster settlements and smarter control. Every store has a unique URL you can copy and share via WhatsApp, SMS, Instagram bio, or anywhere else online. You can also share individual product links directly from your dashboard.</p>",
    },
    {
      question: 'How do I set up my Montra Store? ',
      answer:
        "<p>Log into your Montra Business Account → Go to the <span class='font-semibold'>Store</span> tab → Add your products, prices, descriptions, and images → Publish your store link. You can share this link across your social media or with customers via chat, WhatsApp, SMS, or email.</p>",
    },
    {
      question: 'Can I customize my Montra Store? ',
      answer:
        "<p>Yes. You can upload your logo, update your store name, write a short brand description, and group products into categories. While design customization is currently limited, the layout is optimized for mobile-friendly, fast browsing.</p>",
    },
    {
      question: 'How do payments work on Montra Store? ',
      answer:
        "<p>Customers can pay instantly via MontraPay (Montra App users), cards, bank transfers, or Escrow Pay. Payments are settled instantly into your Montra Business Account once the transaction is successful. You can also  enable POD as a payment method. Montra will generate a secure payment link to be sent to the customer via email or SMS once the order is delivered, allowing them to pay safely.</p>",
    },
    {
      question: 'Can I offer discounts or promo codes on my Montra Store? ',
      answer:
        "<p>Currently, promo code functionality is being rolled out. For now, you can create discounted product listings manually or communicate special offers directly to customers through Montra Chat.</p>",
    },
    {
      question: 'How do I manage inventory on Montra Store? ',
      answer:
        "<p>Go to the <span class='font-semibold'>Inventory</span> tab in your merchant dashboard. You can update stock levels, enable out-of-stock alerts, and view sales history. Inventory syncs in real time with your store and order management.</p>",
    },
    {
      question: 'Is there a commission or fee to use Montra Store? ',
      answer:
        "<p>There’s no listing fee. Montra charges a small transaction fee only when you make a sale. This covers payment processing, security, and access to business tools.</p>",
    },
  ];
const overviewContent = {
  icon1:"/assets/images/business-montra-store/overview-icon-1.svg",
  icon2:"/assets/images/business-montra-store/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/business-montra-store/overview-bg-icon.svg",
  title:"Your Online Store, Smarter and Simple",
  content:[
    "Montra Store lets you set up a free, customized online storefront — no website or hosting fees required.  You can reach more customers, accept flexible and manage products, orders, and sales effortlessly, all within the Montra App. Selling online has never been this easy.",
 
  ],
  subcontent1:"Customizable Storefront",
  subcontent2:"Free Set Up "
}
const  benefitsData = {
  heading:"Financial Infrastructure for the Modern Enterprise",
  para:"Set Up Your Free Montra Store in minutes",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Bring your idea to life with Montra Store & start selling. You can set-up your store using Montra App & Montra Store Web Portal & scale your business faster with built-in, reliable data—no setup required.", title: "Build your Store", z: "z-[5]", width:"w-[20vw]", height:"22vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Customers can make payments using their Montra Account, Debit or Credit Cards, Linked Bank Accounts as well as in Instalments and you would collect this payment instantly in your Montra Business Accounts", title: "Accept payment through variety of payment methods", z: "z-[4]", width:"w-[40vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Scale without limits. Montra can help you open Stores in countries Montra is acquiring. Montra can also help businesses who have a valid company registration, accept global payments from any customer anywhere in the world.", title: "Sell Across Borders", z: "z-[5]",  width:"w-[22vw]", height:"23vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "Make checkout your own using customizable features that fit your unique business needs. You can enable or disable from the available options of accepting Payment on Delivery (POD), Pay Now & Escrow Pay", title: "The best checkout with Montra Pay", z: "z-[4]",  width:"w-[31vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Smarter Commerce. Deeper Control.",
  para:"From insights to fulfillment, Montra gives you the tools to run your business better—every step of the way.",
  headingWidth:"w-[60%]",
  gridCols:"grid-cols-4",
  cards:[
      {
          icon:"/assets/images/business-montra-store/reward-icon-1.svg",
          title:"Get the Insights You Need to Grow",
          para:"Track key performance metrics on your dashboard and dive deeper into data to understand trends, optimize decisions, and grow confidently."
      },
      {
          icon:"/assets/images/business-montra-store/reward-icon-2.svg",
          title:"Chat, Call & Get Paid—all in one place",
          para:"With Montra Chat, customers can message sellers, make voice or video calls, and even complete payments—all without leaving the conversation."
      },
      {
          icon:"/assets/images/business-montra-store/reward-icon-3.svg",
          title:"Flexible & Secure Payment Options",
          para:"Let customers choose how they pay—via secure Pay on Delivery links or Escrow Pay. Funds are safely held until products or services are delivered based on agreed terms."
      },
      {
          icon:"/assets/images/business-montra-store/reward-icon-4.svg",
          title:"Simplify Fulfillment with Centralized Order Management",
          para:"Seamlessly manage inventory, orders, returns, and refunds from one place—ensuring your products reach the right hands with ease and efficiency."
      },
  ]
}
const cardData ={
  heading:"Your Business, Your Way — Powered by Montra Store",
  subHeading:"From rentals and deliveries to takeout, bookings, and home or professional services, Montra Store helps you sell and manage it all — reaching more customers, all in one simple platform.",
  headingWidth:"w-[70%]",
  icon1:"/assets/images/business-montra-store/card-icon-1.svg",
  icon2:"/assets/images/business-montra-store/card-icon-2.svg",
  icon3:"/assets/images/business-montra-store/card-icon-3.svg",
  icon4:"/assets/images/business-montra-store/card-icon-4.svg",
  cardTitle1:"Delivery/ Takeout/ Rentals",
  cardTitle2:"Dine-in",
  cardTitle3:"Home Services",
  cardTitle4:"Appointments",
  cardContent1:"<p>Sell your products on Montra Store and set the model that fits your business. Activate Rentals if you only offer items for rent, Delivery if you ship products to customers’ addresses, or Takeout if customers will pick up orders from your location.</p>",
  cardContent2:"<p>Restaurants can create a Montra Store to let customers book tables for dine-in. Share your menu online so customers can easily make reservations or place orders for food delivery.</p>",
  cardContent3:"<p>Offer home services like cleaning, pest control, electrical work, plumbing, carpentry, salon and spa treatments, painting, appliance repairs, or healthcare. Montra helps you reach customers who need services delivered right to their doorstep.</p>",
  cardContent4:"<p>For professional services offered in-office or virtually — like doctors, consultants, beauty services, or home improvement experts —  customers can book appointments directly through your Montra Store.</p>",
  
}
