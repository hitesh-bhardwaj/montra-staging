import Hero from "@/components/Common/Hero";
import Overview from "@/components/Common/Overview";
import SectionBreak from "@/components/Common/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import React from "react";
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from "@/lib/json-ld";
import { homepage } from '@/lib/util'
import NavFinance from "@/components/PersonalFinance/NavFinance";
import { getPageMetadata } from "@/lib/seo.config";

export const metadata = getPageMetadata({
  title: "Montra Finance – Manage Banking, Loans, Investments & Expenses",
  description: "Track your spending, manage investments, apply for loans, and monitor financial goals—all within Montra’s secure, all-in-one Personal Finance app.",
  url: "personal/finance",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/personal/finance",
    languages: {
      "x-default": "/personal/finance",
    },
  },
  openGraph: {
    url: "personal/finance",
    images: [
      {
        url: `${homepage}/assets/images/seo/personal-finance.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const PersonalFinance = () => {

  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqContent}/>
      <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Hero
        primaryHeading={"Montra Personal Account: "}
        heading={"Take Charge of Your Financial Future"}
        content={
          "Managing your finances shouldn’t be complicated. With Montra, you get powerful yet simple tools to save, borrow, insure, and invest—right from your phone."
        }
      />
      <Overview content={overviewContent} />
      <NavFinance />
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
    question: 'What is Montra Finance?',
    answer:
      "<p>Montra Finance is a suite of financial services available on the Montra App, offering:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Loan Products:</span> Borrow instantly from Montra Lending Partners. Some loans may require final approval depending on amount or eligibility.</li><li><span class='font-semibold'>Insurance Products:</span> Get instant premium quotes and pay for new policies or renewals from trusted insurance partners.</li><li><span class='font-semibold'>Investment Products:</span> Invest in mutual funds and other options with detailed info and multiple payment methods for easy transactions.</li></ul>",
  },
  {
    question: 'How can I borrow on Montra App?',
    answer:
      "<p>Borrowing on Montra is simple, just follow these steps:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Open <span class='font-semibold'>Montra Finance</span> and select <span class='font-semibold'>Loans</span>.</li><li>Choose a loan product of interest.</li><li>View and compare eligible loans from approved Lending Partners.</li><li>Select a quote and enter a loan amount.</li><li>Agree to the terms and conditions, then submit your request.</li><li>Authenticate with your <span class='font-semibold'>Montra PIN</span>.</li><li>If eligible for instant disbursal, funds are transferred immediately, otherwise, you’ll receive updates on final approval and disbursal via the app and email.</li><li>Full loan details will be sent to your registered email from the Lending Partner.</li></ul>",
  },
  {
    question: 'How can I buy an Insurance Policy on Montra App?',
    answer:
      "<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Go to <span class='font-semibold'>Montra Finance > Insurance</span>.</li><li>Choose an insurance product and fill in required info.</li><li>Compare premium quotes from approved Insurance Partners.</li><li>Select a quote and proceed to payment.</li><li>Choose a payment method: <span class='font-semibold'>Montra Account, Linked Bank Account, or Linked Card</span>.</li><li>Authenticate with your <span class='font-semibold'>Montra PIN</span>.</li><li>Upon successful payment, you’ll receive the policy on the Montra App and via email.</li><li>Policy details will also be shared directly by the Insurance Company.</li></ul>",
  },
  {
    question: 'How can I invest on Montra App?',
    answer:
      "<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Go to <span class='font-semibold'>Montra Finance > Investment</span>.</li><li>Choose an investment product and enter the required information.</li><li>Compare investment plans from various Investment Partners.</li><li>Select a plan and proceed to make payment.</li><li>Pick your preferred payment method: <span class='font-semibold'>Montra Account, Linked Bank Account, or Linked Card</span>.</li><li>Authenticate the transaction using your <span class='font-semibold'>Montra PIN</span>.</li><li>Upon successful payment, you’ll receive investment confirmation in the Montra App and via email.</li><li>Detailed plan information will also be emailed to you directly by the Investment Company.</li></ul>",
  },
  {
    question: 'How safe is it to use Montra Finance for loans, insurance, and investments?',
    answer:
      "<p>Montra prioritizes your financial security at every step:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>All Lending, Insurance, and Investment Partners are thoroughly vetted and operate under regulatory compliance.</li><li>Loan disbursements are secure, giving you immediate control over your funds.</li><li>Payments for insurance and investments require <span class='font-semibold'>PIN</span> and <span class='font-semibold'>Soft Token</span> authentication to ensure safe transactions.</li><li>Montra provides instant confirmation on every successful policy purchase or investment placement.</li></ul>",
  },
  {
    question: 'Who do I contact if I face an issue with a loan, insurance, or investment on Montra App?',
    answer:
      "<p>Montra is a facilitator, not a lender, insurer, or investment provider. It helps you compare quotes and make informed choices. For any issues related to the product you’ve availed, please contact the respective <span class='font-semibold'>Lending, Insurance, or Investment Partner</span> directly—they are responsible for resolving your concerns.</p>",
  },
];

const overviewContent = {
  icon1: "/assets/images/personal-finance/overview-icon-1.svg",
  icon2: "/assets/images/personal-finance/overview-icon-2.svg",
  mainImg: "/assets/images/personal-finance/overview-phone.png",
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

