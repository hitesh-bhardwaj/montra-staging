"use client";
import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import Benefits from "@/components/Common/Benefits";
import Steps from "@/components/Common/Steps";
import WhatWhy from "@/components/Common/WhatWhy";
import React from "react";
import { fadeUpAnim } from "@/components/gsapAnimations";

const businessBanking = () => {
  fadeUpAnim();
  return (
    <>
      <Hero
        primaryHeading={"Montra Business Account:  "}
        titleWidth={"w-[95%]"}
        paraWidth={"w-[85%]"}
        heading={"Simplifying Your Business Banking"}
        content={
          "Montra revolutionizes the way businesses handle their financial needs. We offer a range of tailored solutions that streamline your payment processing, improve cash flow, and ensure that you stay ahead in today’s fast-paced market."
        }
      />
      <Overview
       content={overviewContent}
      />
      
      <Benefits data={benefitsData} />
      <Steps stepData={stepData}/>
      <WhatWhy height={"h-[68vw]"} data={whatWhyData}/>
      <SectionBreak content={"Whether you're tracking payments, linking accounts, or accepting digital transactions, Montra has everything you need to grow your business with ease."} width={"w-[95%]"}/>
      <FAQs content={faqContent} />
    </>
  );
};

export default businessBanking;
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
  icon1: "/assets/images/business-banking/business-loan.svg",
  icon2: "/assets/images/business-banking/instant-payment.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-banking/overview-banking-icon.svg",
  title: "Unlocking the Power of Digital Financial Solutions",
  content: [
    "Montra offers businesses of all sizes a seamless way to manage financial transactions, access credit, and protect assets—all in one place. Whether you’re a small business owner or an enterprise, Montra simplifies your banking needs with digital-first solutions that save time, reduce costs, and drive growth.",
  ],
  subcontent1: "Instant Payment Links",
  subcontent2: "Business Loans",
};

const whatWhyData = {
  heading:"Link Your Bank Account to Montra for Seamless Transactions",
  headingWidth:"w-[90%]",
  top:"top-[31%]",
  para:"",
  content:[
  {
    number:"01",
    title:"Select Your Bank Account",
    para:"Choose the bank account you'd like to link with your Montra Account. Montra will verify your details and set up an eMandate for secure transactions."
  },
  {
    number:"02",
    title:"Verify Ownership",
    para:"Make a refundable payment from your bank account to confirm ownership. Once verified, your eMandate will be activated and your account will be ready for linking."
  },
  {
    number:"03",
    title:"Fund Your Montra Account",
    para:"Transfer funds from your linked bank account to Montra for easy access and smooth transactions."
  },
  {
    number:"04",
    title:"You're All Set!",
    para:"Your bank account is now linked to your Montra Account, and you can start making payment requests directly from this account within the Montra App."
  }
],
}

const  benefitsData = {
  heading:"Streamlining Your Business Finances With Ease",
  para:"Open your free Montra digital account in minutes.",
  headingWidth:"w-[80%]",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "No Account Fees", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "Risk-Free Deposits", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "Track Payments Seamlessly", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Rest easy knowing your funds are secure. Your deposits are never converted into risky assets.", title: "Unmatched Security", z: "z-[4]",  width:"w-[21vw]", height:"17vw" },
  ]
}
const stepData = {
  heading: "Get started in minutes",
  steps: [
      {
          number: "01",
          title: "Sign Up for Montra Business Account",
          para: "Download the Montra App and register as an individual. Then, easily switch to BUSINESS mode using the toggle bar. Ensure your KYC Level 2 is completed to sign up for a business account.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
      {
          number: "02",
          title: "Sign Up for Montra Business Account",
          para: "Download the Montra App and register as an individual. Then, easily switch to BUSINESS mode using the toggle bar. Ensure your KYC Level 2 is completed to sign up for a business account.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
      {
          number: "03",
          title: "Sign Up for Montra Business Account",
          para: "Download the Montra App and register as an individual. Then, easily switch to BUSINESS mode using the toggle bar. Ensure your KYC Level 2 is completed to sign up for a business account.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
      {
          number: "04",
          title: "Sign Up for Montra Business Account",
          para: "Download the Montra App and register as an individual. Then, easily switch to BUSINESS mode using the toggle bar. Ensure your KYC Level 2 is completed to sign up for a business account.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
  ],
};