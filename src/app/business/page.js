'use client'
import BankingSection from "@/components/Business/BankingSection";;
import MobileBanking from "@/components/Business/MobileBanking";
// import SectionBreak from "@/components/Business/SectionBreak";
import FAQs from "@/components/Homepage/FAQs";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { fadeUpAnim } from "@/components/gsapAnimations";
import Hero from "@/components/Business/Hero";
import SectionBreak from "@/components/Common/SectionBreak";

gsap.registerPlugin(ScrollTrigger);

export default function Business() {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  fadeUpAnim();

  return (
    <>
      <Hero />
      <div className="max-sm:h-screen max-md:min-h-screen">
      {!mobileWidth ? <BankingSection /> : <MobileBanking />}

      </div>
      <SectionBreak content={"With Montra for Business, you're in control—accept payments, manage cash flow, access credit, and grow your business without the banking complexity."} width={"w-[85%]"} />
      <FAQs content={faqContent} />
    </>
  );
}

const faqContent = [
  {
    question: 'What is the scheduled payments feature?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How sending a bank transfer?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How can I reactivate a terminated card?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How can add money to my account?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: 'How can add money to my account?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How can add money to my account?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
]



