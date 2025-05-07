"use client";
import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import Benefits from "@/components/Common/Benefits";
import Steps from "@/components/Common/Steps";
import WhatWhy from "@/components/Common/WhatWhy";
import React from "react";

const personalBanking = () => {
  return (
    <>
      <Hero
        primaryHeading={"Montra Personal Account: "}
        titleWidth={"w-full"}
        paraWidth={"w-[45%]"}
        heading={"Powerful banking. Simplified finances"}
        content={
          "Get your Montra Personal Account to start spending, sending and saving in minutes, right from your phone"
        }
      />
      <Overview
       content={overviewContent}
      />
      
      <Benefits data={benefitsData} />
      <Steps data={stepData}/>
      <WhatWhy height={"h-[55vw]"} data={whatWhyData}/>
      <SectionBreak content={"From seamless payments to accessible credit options, Montra empowers you to take control of your financial future."}/>
      <FAQs content={faqContent} />
    </>
  );
};

export default personalBanking;
const faqContent = [
  {
    question: "What is the scheduled payments feature?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How sending a bank transfer?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How can I reactivate a terminated card?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: "How can add money to my account?",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
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
  icon1: "/assets/images/personal-banking/overview-icon-1.svg",
  icon2: "/assets/images/personal-banking/overview-icon-2.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-banking/overview-banking-icon.svg",
  title: "Your Digital Gateway To Financial Empowerment",
  content: [
    "Montra gives you a smarter way to manage your money—no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands. Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple—with just a few taps.",
  ],
  subcontent1: "safe payments",
  subcontent2: "smart savings",
};

const whatWhyData = {
  heading:"Connect your bank accounts—everything in one Montra move.",
  content:[
  {
    number:"01",
    title:"Choose Your Bank Account",
    para:"Select the bank account you'd like to use to add money to your Montra Wallet. This allows Montra to verify your details and request your consent for placing an eMandate."
  },
  {
    number:"02",
    title:"Verify Ownership with a Refundable Payment",
    para:"Make a small, refundable payment from the selected account. This confirms you're the account owner and activates the eMandate for secure linking."
  },
  {
    number:"03",
    title:"Fund Your Montra Account",
    para:"Once verified, use the same bank account to add money to your Montra Wallet. This final step confirms the link—and you're ready to make payment requests directly from the app!"
  }],
}

const  benefitsData = {
  heading:"Banking That’s Built for You",
  para:"Open your free Montra digital account in minutes.",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Your deposits stay risk-free and untouched—no conversions, no surprises.", title: "No Fees, No Hassle", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Your deposits stay risk-free and untouched—no conversions, no surprises.", title: "Safe & Sound ", z: "z-[4]", width:"w-[18vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Your deposits stay risk-free and untouched—no conversions, no surprises.", title: "Instant Virtual Debit Card", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Your deposits stay risk-free and untouched—no conversions, no surprises.", title: "Locked with Extra Security", z: "z-[4]",  width:"w-[24.5vw]", height:"17vw" },
  ]
}
const stepData = {
  heading:"Get started in minutes",
  steps:[
    {
      number:"01",
      title:"Download Montra App",
      para:"You can download Montra App from Google & IOS App stores.",
      tag:"Download App",
      img:"/assets/images/personal-banking/steps-img-1.png"
    },
    {
      number:"02",
      title:"Download Montra App",
      para:"You can download Montra App from Google & IOS App stores.",
      tag:"Download App",
      img:"/assets/images/personal-banking/steps-img-1.png"
    },
    {
      number:"03",
      title:"Download Montra App",
      para:"You can download Montra App from Google & IOS App stores.",
      tag:"Download App",
      img:"/assets/images/personal-banking/steps-img-1.png"
    },
    {
      number:"04",
      title:"Download Montra App",
      para:"You can download Montra App from Google & IOS App stores.",
      tag:"Download App",
      img:"/assets/images/personal-banking/steps-img-1.png"
    },
  ]
}