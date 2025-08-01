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
  title: "Montra Personal Banking - Instant Digital Account & Virtual Debit Card",
  description: "Open a free Montra Personal digital account in minutes. Get a virtual debit card, link your bank, make fast & secure payments—manage all your finances in one app.",
  url: "personal/banking",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/personal/banking",
    languages: {
      "x-default": "/personal/banking",
    },
  },
  openGraph: {
    url: "personal/banking",
    images: [
      {
        url: `${homepage}/assets/images/seo/personal-banking.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const personalBanking = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <BreadcrumbsJSONLD pathname={metadata.url}/>
    <FAQJSONLD faqs={faqContent}/>
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
    question: "How do I use my Montra Personal Card?",
    answer: "<p>You can use your Montra Personal Card in following easy steps:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Access</span> your virtual <span class='font-semibold'>Montra Card</span> on your Montra App</li><li>Enter the <span class='font-semibold'>Debit Card Number, Expiry & CVV</span> (you can access CVV by taping on your Virtual Montra Card on the Montra App) details on the website or mobile app where you are using your Montra Personal Card for initiating payment request.</li><li>You would be asked to enter an OTP on the next screen on the website / Mobile App where you have initiated this payment. Please enter your <span class='font-semibold'>Montra Soft Token</span> as your OTP (you have previously set-up on VERIFYED App)</li><li>Montra would authenticate the Soft Token entered by you to <span class='font-semibold'>approve your transaction request</span>. Once your transaction is approved, your Montra Personal Account would be instantly Debited for sending the payment to the merchant (website / mobile app where you initiated this payment request)</li></ul>",
  },
  {
    question: "Is it safe for me to use my Montra Card online?",
    answer: "<p>It is as safe using Montra Card online as it is using any Physical Debit or Credit card. Your access to virtual Montra Card is protected by your sign-in credentials followed by Montra PIN authentication. Further your usage of Montra Card online is protected by authentication of your Montra Soft Token.</p>",
  },
  {
    question: "What is my Limit for usage on my Virtual Montra Debit Card?",
    answer: "<p>Your Daily Transaction Limit on your Virtual Montra Card is in line with your KYC Daily Transaction Limit allowed based on your KYC Level.</p>"
  },
  {
    question: "Do I need to activate my Montra Card before first use?",
    answer: "<p>Yes. You need to activate your Montra Personal Card to agree on the Terms of its use & activate the card.</p>"
  },
  {
    question: "Can I request issuance of a Physical Montra Card as well?",
    answer: "<p>Montra is currently not issuing a Physical Debit Card. You can withdraw Cash from your Montra Account using our Agency Banking network. Also, for online payments, we are offering a Virtual Montra Personal Card on Montra App.</p>",
  },
  {
    question: "What is the Fee on Montra Personal Card?",
    answer: "<p>Currently, Montra Personal Card is being offered as FREE on the Montra App.</p>"
  },
];

const overviewContent = {
  icon1: "/assets/images/personal-banking/overview-icon-1.svg",
  icon2: "/assets/images/personal-banking/overview-icon-2.svg",
  mainImg: "/assets/images/personal-banking/personal-Banking.png",
  bgImg: "/assets/images/personal-banking/overview-banking-icon.svg",
  title: "Your Digital Gateway to Financial Empowerment",
  content: ["Montra gives you a smarter way to manage your Money, no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands. Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple with just a few taps." ],
  subcontent1: "Fast Payments",
  subcontent2: "Secure Banking",
};

const whatWhyData = {
  heading:"Link your other bank accounts. Pay from all your banks, all in one Montra app.",
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
    para:"After verification, simply use the same bank account to load money into your Montra Wallet. With this final step, your account link is complete, and you’re all set to request payments right from the app!"
  }],
}

const  benefitsData = {
  heading:"Banking That’s Built for You",
  para:"Open your free Montra digital account in minutes.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the convenience of mobile banking with your free Montra digital account and Virtual Debit Card.", title: "No Fees, No Hassle", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Your money stays safe with Montra. None of your deposits are converted into risky assets.", title: "Safe & Sound ", z: "z-[4]", width:"w-[18vw]", height:"17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Get a Virtual Debit Card that is ready to use for online shopping, payments and subscriptions, anytime.", title: "Instant Virtual Debit Card", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Your account on Montra app is protected with a Password, PIN and a Soft Token (for OTP / 2FA verification using a FREE Montra  Soft Token account set up on the VERIFYED App) ensuring your account stays safe at all times.", title: "Locked with Extra Security", z: "z-[4]",  width:"w-[24.5vw]", height:"22vw" },
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
          img: "/assets/images/personal-banking/steps-img-2.png",
          tag:"Sign Up"
      },
      {
          number: "03",
          title: "Verify your Account",
          para: "Complete your verification and fund your account to get started.",
          img: "/assets/images/personal-banking/steps-img-3.png",
          tag:"Verify Account"
      },
      {
          number: "04",
          title: "Start Transacting",
          para: "Your bank account is now fully ready to send and receive funds.",
          img: "/assets/images/personal-banking/steps-img-4.png",
          tag:"Transact"
      },
  ],
};