'use client'
import BankingSection from "@/components/Business/BankingSection";;
import Hero from "@/components/Business/Hero";
import MobileBanking from "@/components/Business/MobileBanking";
import MobileHero from "@/components/Business/MobileHero";
import SectionBreak from "@/components/Business/SectionBreak";
import Header from "@/components/Header";
import FAQs from "@/components/Homepage/FAQs";
import { useEffect, useState } from "react";

export default function Business() {
  const [mobileWidth, setMobileWidth] = useState(false);
    useEffect(() => {
      if (globalThis.innerWidth > 1024) {
        setMobileWidth(false);
      } else {
        setMobileWidth(true);
      }
    }, []);
  return (
    <>
    <Header/>
    {!mobileWidth ? <Hero /> : <MobileHero />}
     {mobileWidth ? <MobileBanking/> : <MobileBanking />}
    <SectionBreak/>
    <FAQs content={faqContent}/>  
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



