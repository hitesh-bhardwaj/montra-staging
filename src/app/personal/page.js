"use client";

import FAQs from "@/components/Homepage/FAQs";
import Control from "@/components/Personal/Control";
import ControlMobile from "@/components/Personal/ControlMobile";
import Hero from "@/components/Personal/Hero";
import SectionBreak from "@/components/Personal/SectionBreak";
import { useEffect, useState } from "react";

export default function Personal() {
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
      <Hero />
      {!mobileWidth ? <Control /> : <ControlMobile />}
      <SectionBreak />
      <FAQs  content={faqContent}/>
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
