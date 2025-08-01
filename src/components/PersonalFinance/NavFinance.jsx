"use client"
import React, { useEffect, useState } from 'react'
import Benefits from '../Common/Benefits';
import Steps from '../Common/Steps';
import Features from '../Common/Features';
import WhatWhy from '../Common/WhatWhy';
import InvestmentPlans from './InvestmentPlans';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const NavFinance = () => {
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
  return (
    <div>
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
      <WhatWhy data={whatWhyData} height={"h-[59vw]"} />
      <InvestmentPlans />
    </div>
  )
}

export default NavFinance

const benefitsData = {
  heading:
    "Compare <span class='text-primary'>Loan </span> Offers. Get Funded Instantly.",
  para: "Explore personalized loan options from trusted lending partners and receive funds in minutes, right from your Montra App",
  headingWidth: "w-[60%]",
  paraWidth: "w-[45%]",
  cards: [
    {
      classPrefix: "a",
      left: "!left-[17%]",
      top: "!top-[25%]",
      color: "bg-[#EAF1FF]",
      content:
        "On Montra, you can explore a variety of digital loan products from our lending partners, compare offers, and make informed borrowing decisions.",
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
        "You can view Loan Statements for all the loans you been have availed on the Montra Personal App.",
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
        "Track the status of the loans you applied for.",
      title: " Track Loan Applications",
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
        "You can easily pay your monthly instalments or any other Due repayments.",
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
        "Montra sends you timely alerts to remind you to pay your due and overdue amounts, helping you avoid penal charges.",
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
        "Once you submit a loan request, Montra and your chosen lending partner ensure the approved amount is disbursed instantly.",
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
        "Access all your insurance plan details anytime, right from your phone.",
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
        "Easily renew your existing policies right in the app.",
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
  para: "Secure the right coverage quickly and easily with these simple steps: ",
  content: [
    {
      number: "01",
      title: "Pick a Plan",
      para: "Browse available insurance products and select one that fits your needs.",
    },
    {
      number: "02",
      title: "Compare Offers Instantly",
      para: "Montra lets you compare premiums and features from multiple insurance partners, helping you make informed decisions. ",
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