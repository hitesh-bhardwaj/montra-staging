import Benefits from "@/components/Common/Benefits";
import Features from "@/components/Common/Features";
import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import Steps from "@/components/Common/Steps";
import WhatWhy from "@/components/Common/WhatWhy";
import Header from "@/components/Header";
import FAQs from "@/components/Homepage/FAQs";
import InvestmentPlans from "@/components/PersonalFinance/InvestmentPlans";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";import { WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'
import { generateMetadata } from "@/components/Metadata";
gsap.registerPlugin(ScrollTrigger);

export const metadata = generateMetadata({
  homepage,
  title: "Montra Finance – Manage Banking, Loans, Investments & Expenses",
  description: "Track your spending, manage investments, apply for loans, and monitor financial goals—all within Montra’s secure, all-in-one Personal Finance app.",
  url:"personal/finance",
  image: "personal-finance.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
});


const PersonalFinance = () => {
  
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
      <Header />
      <Hero
        primaryHeading={"Montra Personal Account: "}
        heading={"Take Charge of Your Financial Future"}
        content={
          "Managing your finances shouldn’t be complicated. With Montra, you get powerful yet simple tools to save, borrow, insure, and invest—right from your phone."
        }
      />
      <Overview content={overviewContent} />
      <div className="w-full relative">
        <div className="mt-[-100vh] max-md:mt-0">
          <Benefits data={benefitsData} id={"benefits"} />
        </div>
        <Steps stepData={stepData} />
        <Benefits data={benefitsData2} id={"benefits-second"} />
        <Features featuresData={featuresData} />
        <WhatWhy data={whatWhyData} height={"h-[59vw]"} />
        <InvestmentPlans />
      </div>
      <SectionBreak
        content={
          "Whether you're borrowing, insuring, or investing, our app brings everything together in one seamless experience."
        }
        width={"w-[85%]"}
      />
      <FAQs content={faqContent} />
    </>
  );
};

export default PersonalFinance;

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
  icon1: "/assets/images/personal-finance/overview-icon-1.svg",
  icon2: "/assets/images/personal-finance/overview-icon-2.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Financial products for every step of your journey",
  content: [
    "Montra makes personal finance easy, accessible, and stress-free. Whether you're saving for something big, need quick credit, or want to protect your future with insurance, it’s all right here—in one powerful app. ",
    "No banks, no paperwork, no complicated steps. Just the tools you need to build, manage, and grow your money—with full control and total confidence.",
  ],
  subcontent1: "Insure & Invest",
  subcontent2: "Access Credit Instantly",
  cards: [
    {
      color: "bg-[#7A78FF]",
      icon: "/assets/images/personal-finance/loans.svg",
      text: "Loans",
    },
    {
      color: "bg-[#FF8100]",
      icon: "/assets/images/personal-finance/insurance.svg",
      text: "Insurance",
    },
    {
      color: "bg-[#35C771]",
      icon: "/assets/images/personal-finance/investments.svg",
      text: "Investments",
    },
  ],
};
const benefitsData = {
  heading:
    "Compare <span class='text-primary'>Loan </span> Offers. Get Funded Instantly.",
  para: "Explore personalized loan options from trusted lending partners and receive funds in minutes—right from your Montra App.",
  headingWidth: "w-[60%]",
  paraWidth: "w-[45%]",
  cards: [
    {
      classPrefix: "a",
      left: "!left-[17%]",
      top: "!top-[25%]",
      color: "bg-[#EAF1FF]",
      content:
        "Explore a variety of digital loan products from Montra's lending partners, compare offers, and make informed borrowing decisions.",
      title: "Compare Loan Offers",
      z: "z-[6]",
      width: "w-[21vw]",
      height: "17vw",
    },
    {
      classPrefix: "b",
      left: "!left-[44%]",
      top: "!top-[45%]",
      color: "bg-[#FEFFA7]",
      content:
        "View statements for all loans availed through the Montra Personal App.",
      title: "View Loan Statements",
      z: "z-[5]",
      width: "w-[22vw]",
      height: "17vw",
    },
    {
      classPrefix: "c",
      left: "!left-[55.5%]",
      top: "!top-[15%]",
      color: "bg-[#FFEAEE]",
      content:
        "Check the status of the loans you applied for.",
      title: "Track Loan Application",
      z: "z-[7]",
      width: "w-[22vw]",
      height: "17vw",
    },
    {
      classPrefix: "d",
      left: "!left-[80%]",
      top: "!top-[40%]",
      color: "bg-[#D9F7C5]",
      content:
        "Pay monthly installments or any other due repayments easily.",
      title: "Easy Repayments",
      z: "z-[6]",
      width: "w-[18vw]",
      height: "17vw",
    },
    {
      classPrefix: "e",
      left: "!left-[60%]",
      top: "!top-[67%]",
      color: "bg-[#FFD7CB]",
      content:
        "Get timely alerts from Montra to pay due and overdue amounts — helps avoid penalty charges.",
      title: "Smart Payment Reminders",
      z: "z-[4]",
      width: "w-[24vw]",
      height: "17vw",
    },
    {
      classPrefix: "f",
      left: "!left-[16%]",
      top: "!top-[65%]",
      color: "bg-[#CAC5F7]",
      content:
        "Approved loan amounts are disbursed instantly once your application is submitted.",
      title: "Instant Loan Disbursements",
      z: "z-[4]",
      width: "w-[25vw]",
      height: "17vw",
    },
  ],
};
const benefitsData2 = {
  heading:
    "Compare <span class='text-primary'>Insurance</span> Plans. Choose What Fits You Best.",
  para: "Easily review premiums and features from top insurance partners on Montra, and pick the policy that matches your needs and budget.",
  headingWidth: "w-[80%]",
  paraWidth: "w-[53%]",
  cards: [
    {
      classPrefix: "a",
      left: "!left-[10%]",
      top: "!top-[25%]",
      color: "bg-[#D9F7C5]",
      content:
        "Explore and compare insurance products to choose the best fit.",
      title: "Compare Plans Easily",
      z: "z-[6]",
      width: "w-[22vw]",
      height: "17vw",
    },
    {
      classPrefix: "b",
      left: "!left-[20%]",
      top: "!top-[75%]",
      color: "bg-[#FEFFA7]",
      content:
        "View your insurance plan details anytime, from your phone.",
      title: "Access Policy Details Anytime",
      z: "z-[5]",
      width: "w-[26vw]",
      height: "17vw",
    },
    {
      classPrefix: "c",
      left: "!left-[45.5%]",
      top: "!top-[15%]",
      color: "bg-[#FFEAEE]",
      content:
        "Renew existing policies quickly from within the app.",
      title: "Quick Renewals",
      z: "z-[7]",
      width: "w-[18vw]",
      height: "17vw",
    },
    {
      classPrefix: "d",
      left: "!left-[70%]",
      top: "!top-[45.9%]",
      color: "bg-[#CAC5F7]",
      content:
        "Pay your premiums easily using multiple convenient payment methods.",
      title: "Flexible Payments",
      z: "z-[6]",
      width: "w-[19vw]",
      height: "17vw",
    },
  ],
};
const whatWhyData = {
  heading: "Get Insured in Minutes on the Montra App",
  headingWidth: "w-[85%]",
  top: "top-[34%]",
  para: "Secure the right coverage quickly and easily—just follow these simple steps:",
  content: [
    {
      number: "01",
      title: "Pick a Plan",
      para: "Browse available insurance products and select one that fits your needs.",
    },
    {
      number: "02",
      title: "Compare Offers Instantly",
      para: "Montra lets you compare premiums and features from multiple insurance partners, helping you make informed decisions.",
    },
    {
      number: "03",
      title: "Buy Your Policy",
      para: "Pay your premiums easily using multiple convenient payment methods.",
    },
    {
      number: "04",
      title: "Get Instant Confirmation",
      para: "Once payment is complete, your policy is issued and confirmed right on the app.",
    },
  ],
};
const featuresData = {
  heading: "Insurance Plans Made for You",
  headingSize: "text-[5.7vw]",
  paraWidth: "w-[50%]",
  features: [
    {
      icon: "/assets/images/personal-finance/term-life.svg",
      text: "Term Life",
      color: "bg-[#FF8303]",
    },
    {
      icon: "/assets/images/personal-finance/endowment-plans.svg",
      text: "Endowment Plans",
      color: "bg-[#7A78FF]",
    },
    {
      icon: "/assets/images/personal-finance/health-insurance.svg",
      text: "Health Insurance",
      color: "bg-[#35C771]",
    },
    {
      icon: "/assets/images/personal-finance/car-insurance.svg",
      text: "Car Insurance",
      color: "bg-[#111111]",
    },
   
    {
      icon: "/assets/images/personal-finance/travel-insurance.svg",
      text: "Travel Insurance",
      color: "bg-[#215CFF]",
    },
  ],
};
const stepData = {
  heading: "Borrow in Minutes",
  steps: [
    {
      number: "01",
      title: "Choose a Loan Product",
      para: "Browse loan options on Montra and select the one that fits your needs.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Select Loan product"
    },
    {
      number: "02",
      title: "Check Your Eligibility & Select a Lender",
      para: "View your approved loan amounts from Montra’s lending partners and choose the best offer.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Check Eligibility"
    },
    {
      number: "03",
      title: "Confirm & Submit Loan Request",
      para: "Enter your loan amount (up to your eligibility limit), agree to the terms, and authenticate with your Montra PIN to submit your application.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Submit Request"
    },
    {
      number: "04",
      title: "Receive Funds",
      para: "Where applicable, get an instant disbursement. Otherwise, track your application for approval updates.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Receive Funds"

    },
  ],
};
