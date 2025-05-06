"use client";
import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import Benefits from "@/components/PersonalBanking/Benefits";
import Steps from "@/components/PersonalBanking/Steps";
import WhatWhy from "@/components/PersonalBanking/WhatWhy";
import React from "react";

const page = () => {
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
        icon1={overviewContent.icon1}
        icon2={overviewContent.icon2}
        mainImg={overviewContent.mainImg}
        bgImg={overviewContent.bgImg}
        title={overviewContent.title}
        content={overviewContent.content}
        subcontent1={overviewContent.subcontent1}
        subcontent2={overviewContent.subcontent2}
      />
      <Steps />
      {/* <MontraAnim/> */}
      <Benefits />
      <WhatWhy />
      <SectionBreak content={"From seamless payments to accessible credit options, Montra empowers you to take control of your financial future."}/>
      <FAQs content={faqContent} />
    </>
  );
};
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
export default page;
