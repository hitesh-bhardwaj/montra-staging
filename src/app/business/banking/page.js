import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import Benefits from "@/components/Common/Benefits";
import Steps from "@/components/Common/Steps";
import WhatWhy from "@/components/Common/WhatWhy";
import React from "react";
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'
import { getPageMetadata } from "@/lib/seo.config";

export const metadata = getPageMetadata({
  title: "Montra Business Account:Simplifying Your Business Banking",
  description: "Montra revolutionizes the way businesses handle their financial needs. We offer a range of tailored solutions that streamline your payment processing, improve cash flow, and ensure that you stay ahead in today’s fast-paced market.",
  url:"business/banking",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business/banking",
    languages: {
      "x-default": "/business/banking",
    },
  },
  openGraph: {
    url: "business/banking",
    images: [
      {
        url: `${homepage}/assets/images/seo/business-banking.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const businessBanking = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <FAQJSONLD faqs={faqContent}/>
    <BreadcrumbsJSONLD pathname={metadata.url}/>
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
      <WhatWhy height={"h-[63vw]"} data={whatWhyData}/>
      <SectionBreak content={"Whether you're tracking payments, linking accounts, or accepting digital transactions, Montra has everything you need to grow your business with ease."} width={"w-[95%]"}/>
      <FAQs content={faqContent} />
    </>
  );
};

export default businessBanking;
const faqContent = [
  {
    question: "What is a Montra Business Account?",
    answer:
      "<p>A Montra Business Account is a <span class='font-semibold'>free digital account</span> built to help small businesses manage their finances. You can accept and track payments, view balances in real time, manage transactions, and keep your personal and business finances separate—all from one simple dashboard.</p>",
  },
  {
    question: "Who can open a Montra Business Account?",
    answer:
      "<p>Any business owner, freelancer, or merchant in Nigeria can open a Montra Business Account—whether you’re registered or unregistered. All you need is a smartphone, a valid means of identification, and basic business details to get started.</p>",
  },
  {
    question: "What can I do with my Montra Business Account?",
    answer:
      "<p>Your Business Account gives you access to:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>A unique account number for bank transfers</li><li>Real-time payment tracking and transaction history</li><li>Easy access to funds collected through POS, QR, Tap & Pay, and payment links</li><li>Business-friendly tools like invoicing, inventory tracking, and expense management</li><li>A dedicated wallet for managing day-to-day operations</li></ul>",
  },
  {
    question: "Can I separate personal and business finances on Montra?",
    answer:
      "<p>Absolutely. Having a dedicated Montra Business Account helps you track income and expenses for your business separately from your personal finances, making it easier to stay organized and make better financial decisions.</p>",
  },
  
  {
    question: "Is my money safe with Montra?",
    answer:
      "<p>Yes. Montra uses <span class='font-semibold'>bank-grade encryption, secure authentication,</span> and complies with <span class='font-semibold'>regulatory standards</span> to ensure your funds and data are safe. You also get real-time alerts for every transaction on your account.</p>",
  },
 
];
const overviewContent = {
  icon1: "/assets/images/business-banking/seamless-banking.svg",
  icon2: "/assets/images/business-banking/multiple-payments.svg",
  mainImg: "/assets/images/personal-banking/overview-phone.png",
  bgImg: "/assets/images/personal-banking/overview-banking-icon.svg",
  title: "Unlocking the Power of Digital Financial Solutions",
  content: [
    "Montra offers businesses of all sizes a seamless way to manage financial transactions, access credit, and protect assets—all in one place. Whether you’re a small business owner or an enterprise, Montra simplifies your banking needs with digital-first solutions that save time, reduce costs, and drive growth.",
  ],
  subcontent1: "Multiple Payment Methods ",
  subcontent2: "Seamless Business Banking",
};

const whatWhyData = {
  heading:"Link Your Bank Account to Montra for Seamless Transactions",
  headingWidth:"w-[90%]",
  // height:"h-[30vw]",
  top:"top-[29%]",
  para:"",
  content:[
  {
    number:"01",
    title:"Select Your Bank Account",
    para:"Choose the bank account you’d like to link to fund your Montra Account. This lets Montra securely verify your account details and get your consent for Montra to send your payment requests to your bank, each time you pay on Montra App using this linked account. "
  },
  {
    number:"02",
    title:"Verify Account Ownership",
    para:"To securely link your account, make a quick refundable payment from the account you’ve selected. This verifies you as the rightful owner and sets up the eMandate for smooth future transactions."
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
  para:"Open a Free Montra Business Account in Minutes.",
  headingWidth:"w-[80%]",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the freedom of a fully digital, mobile-first account — no hidden charges, ever.", title: "No Account Fees", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Your funds stay safe and protected — we will never convert your deposits into risky assets.", title: "Risk-Free Deposits", z: "z-[4]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Accept payments through multiple channels on the Montra App and track every collection with ease.", title: "Track Payments Seamlessly", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Your account is guarded by your personal Montra PIN and 2FA Soft Token via the VERIFYED App — keeping your money and data safe, always.", title: "Unmatched Security", z: "z-[4]",  width:"w-[21vw]", height:"17vw" },
  ]
}
const stepData = {
  heading: "Get started in minutes",
  steps: [
      {
          number: "01",
          title: "Sign Up for Montra Business Account",
          para: "Download the Montra App, register as an individual, switch to BUSINESS mode, and complete KYC Level 2.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Sign Up"
      },
      {
          number: "02",
          title: "Set Up Your Profile",
          para: "Select your business type (physical store, online store, virtual store, or agency service) and fill in key business details.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Switch to Business Mode"
      },
      {
          number: "03",
          title: "Provide Registration Details",
          para: "Enter your business registration number (if applicable), verify it, and optionally upload your business logo.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Complete Business Setup"
      },
      {
          number: "04",
          title: "Activate & Start Accepting Payments",
          para: "Access your Montra Business Account, get your QR code, and start collecting payments seamlessly.",
          img: "/assets/images/personal-banking/steps-img-1.png",
          tag:"Accept Payments"
      },
  ],
};