"use client";
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
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PersonalFinance = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [color, setcolor] = useState(false);

  useEffect(() => {
    const triggers = [];

    triggers.push(
      ScrollTrigger.create({
        trigger: "#benefits-second",
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveNav(1),
        onLeaveBack: () => setActiveNav(0),
      })
    );
    triggers.push(
      ScrollTrigger.create({
        trigger: "#steps",
        start: "top center",
        end: "bottom center",
        // markers: true,
        onEnter: () => setcolor(true),
        onLeave: () => setcolor(false),
        onEnterBack: () => setcolor(true),
        onLeaveBack: () => setcolor(false),
      })
    );

    triggers.push(
      ScrollTrigger.create({
        trigger: "#whatwhy",
        start: "top center",
        end: "bottom center",
        onLeave: () => setActiveNav(2),
        onEnterBack: () => setActiveNav(1),
        onLeaveBack: () => setActiveNav(1),
      })
    );

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);
  // fadeUpAnim();
  return (
    <>
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
        <div className="sticky z-10 h-screen flex w-fit justify-start items-start pt-[28vw] top-0 px-[2vw] max-md:hidden">
          <div className="flex gap-[1vw] font-display text-[1vw] ">
            <span
              className={` opacity-100 transition-colors duration-500  ease-in-out ${color ? "text-white" : "text-primary"
                }`}
            >
              Finance:
            </span>
            <div
              className={`flex flex-col gap-[0.3vw] h-full w-full transition-transform duration-500 ease-in-out ${activeNav == 0 ? "translate-y-0" : ""
                } ${activeNav == 1 ? "translate-y-[-33%]" : ""} ${activeNav == 2 ? "translate-y-[-70%]" : ""
                }`}
            >
              <span
                className={`${activeNav == 0 ? "text-primary" : "opacity-35"
                  } transition-colors duration-500 ease-in-out ${color ? "text-white" : ""
                  } cursor-pointer`}
                onClick={() => {
                  document
                    .getElementById("benefits")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Loans
              </span>
              <span
                className={`${activeNav == 1 ? "text-primary" : "opacity-35"
                  } transition-colors duration-500 ease-in-out ${color ? "text-white" : ""
                  } cursor-pointer`}
                onClick={() => {
                  document.getElementById("benefits-second")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Insurance
              </span>
              <span
                className={`${activeNav == 2 ? "text-primary" : "opacity-35"
                  } transition-colors duration-500 ease-in-out ${color ? "text-white" : ""
                  } cursor-pointer`}
                onClick={() => {
                  document.getElementById("investmentplan")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Investment
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[-100vh] max-md:mt-0">
          <Benefits data={benefitsData} id={"benefits"} />
        </div>
        <Steps stepData={stepData} />
        <Benefits data={benefitsData2} id={"benefits-second"} />
        <Features featuresData={featuresData} />
        <WhatWhy data={whatWhyData} height={"h-[60vw]"} />
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
  icon1: "/assets/images/personal-finance/save-with-purpose.svg",
  icon2: "/assets/images/personal-finance/access-credit.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Finance That Fits Your Life",
  content: [
    "Montra makes personal finance easy, accessible, and stress-free. Whether you're saving for something big, need quick credit, or want to protect your future with insurance, it’s all right here—in one powerful app. ",
    "No banks, no paperwork, no complicated steps. Just the tools you need to build, manage, and grow your money—with full control and total confidence.",
  ],
  subcontent1: "Access Credit Instantly",
  subcontent2: "Save with Purpose",
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
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
      title: "Compare Loan Offers",
      z: "z-[6]",
      width: "w-[21vw]",
      height: "17vw",
    },
    {
      classPrefix: "b",
      left: "!left-[24%]",
      top: "!top-[55%]",
      color: "bg-[#FEFFA7]",
      content:
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
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
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
      title: "Track Your Application",
      z: "z-[7]",
      width: "w-[22vw]",
      height: "17vw",
    },
    {
      classPrefix: "d",
      left: "!left-[80%]",
      top: "!top-[45.9%]",
      color: "bg-[#D9F7C5]",
      content:
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
      title: "Easy Repayments",
      z: "z-[6]",
      width: "w-[18vw]",
      height: "17vw",
    },
    {
      classPrefix: "e",
      left: "!left-[60%]",
      top: "!top-[80%]",
      color: "bg-[#FFD7CB]",
      content:
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
      title: "Smart Payment Reminders",
      z: "z-[4]",
      width: "w-[24vw]",
      height: "17vw",
    },
    {
      classPrefix: "f",
      left: "!left-[16%]",
      top: "!top-[85%]",
      color: "bg-[#CAC5F7]",
      content:
        "Stay updated in real-time. Monitor the progress of your loan applications right from your Montra app.",
      title: "Instant Disbursement",
      z: "z-[4]",
      width: "w-[21vw]",
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
        "Stay covered without the hassle. Renew your existing policies in just a few taps.",
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
        "Stay covered without the hassle. Renew your existing policies in just a few taps.",
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
        "Stay covered without the hassle. Renew your existing policies in just a few taps.",
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
        "Stay covered without the hassle. Renew your existing policies in just a few taps.",
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
      para: "Montra instantly compares premiums and features from multiple insurance partners—so you can make an informed choice.",
    },
    {
      number: "03",
      title: "Buy Your Policy",
      para: "Choose your preferred plan and pay securely using any of the flexible payment options on Montra.",
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
      icon: "/assets/images/personal-finance/two-wheeler-insurance.svg",
      text: "2-wheeler Insurance",
      color: "bg-[#FB2F55]",
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
      para: "Browse the available loan options on Montra and pick one that fits your financial needs.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Choose Plan"
    },
    {
      number: "02",
      title: "Choose a Loan Product",
      para: "Browse the available loan options on Montra and pick one that fits your financial needs.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Choose Plan"
    },
    {
      number: "03",
      title: "Choose a Loan Product",
      para: "Browse the available loan options on Montra and pick one that fits your financial needs.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Choose Plan"
    },
    {
      number: "04",
      title: "Choose a Loan Product",
      para: "Browse the available loan options on Montra and pick one that fits your financial needs.",
      img: "/assets/images/personal-banking/steps-img-1.png",
      tag: "Choose Plan"

    },
  ],
};
