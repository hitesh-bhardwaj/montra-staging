import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import Benefits from "@/components/Common/Benefits";
import Steps from "@/components/Common/Steps";
import WhatWhy from "@/components/Common/WhatWhy";
import React from "react";
import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'
import { generateMetadata } from "@/components/Metadata";


export const metadata = generateMetadata({
  homepage,
  title: "Montra Personal Banking – Instant Digital Account & Virtual Debit Card",
  description: "Open a free Montra Personal digital account in minutes. Get a virtual debit card, link your bank, make fast & secure payments—manage all your finances in one app.",
  url:"personal/banking",
  image: "personal-banking.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
});



const personalBanking = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
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
      <Steps stepData={stepData}/>
      <WhatWhy height={"h-[51vw]"} data={whatWhyData}/>
      <SectionBreak content={"From seamless payments to accessible credit options, Montra empowers you to take control of your financial future."} width={"w-[88%]"}/>
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
  subcontent1: "Fast Payments",
  subcontent2: "Secure Banking",
};

const whatWhyData = {
  heading:"Link your other bank accounts — pay from all your banks, all in one Montra app.",
  headingWidth:"w-[95%]",
  top:"top-[37%]",
  para:"",
  content:[
  {
    number:"01",
    title:"Select Your Bank Account",
    para:"Choose the bank account you’d like to link to fund your Montra Account. This lets Montra securely verify your account details and get your consent for Montra to send your payment requests to your bank, each time you pay on Montra App using this linked account."
  },
  {
    number:"02",
    title:"Verify Account Ownership",
    para:"To securely link your account, make a quick refundable payment from the account you’ve selected. This verifies you as the rightful owner and sets up the eMandate for smooth future transactions."
  },
  {
    number:"03",
    title:"Add Funds to Your Montra Account",
    para:"After verification, simply use the same bank account to load money into your Montra Wallet. With this final step, your account link is complete — and you’re all set to request payments right from the app!"
  }],
}

const  benefitsData = {
  heading:"Banking That’s Built for You",
  para:"Open your free Montra digital account in minutes.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the convenience of mobile banking with your free Montra digital account and Virtual Debit Card.", title: "No Fees, No Hassle", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Your money stays safe with Montra — none of your deposits are converted into risky assets.", title: "Safe & Sound ", z: "z-[4]", width:"w-[18vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Get a Virtual Debit Card that is ready to use for online shopping, payments and subscriptions, anytime.", title: "Instant Virtual Debit Card", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Your account on Montra app is protected with a Password, PIN and a Soft Token (for OTP / 2FA verification using a FREE Montra Soft Token account set up on the VERIFYED App) — ensuring your account stays safe at all times.", title: "Locked with Extra Security", z: "z-[4]",  width:"w-[24.5vw]", height:"22vw" },
  ]
}
const stepData = {
  heading: "Get started in minutes",
  steps: [
      {
          number: "01",
          title: "Download the Montra App",
          para: "Go to Google & Apple stores to download the Montra App.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Download App"
      },
      {
          number: "02",
          title: "Sign Up",
          para: "Enter your details to register on the Montra App.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
      {
          number: "03",
          title: "Verify your Account",
          para: "Complete your verification and fund your account to get started.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Verify Account"
      },
      {
          number: "04",
          title: "Start Transacting",
          para: "Your bank account is now fully ready to send and receive funds.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Transact"
      },
  ],
};