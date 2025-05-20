"use client"

import { fadeUpAnim, lineAnim } from "@/components/gsapAnimations";
import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";
import Payments from "@/components/Homepage/Payment";
import PaymentCopy from "@/components/Homepage/PaymentCopy";
import PaymentMobile from "@/components/Homepage/PaymentMobile";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";
import VisionMission from "@/components/Homepage/VisionMission";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function Home() {

  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  lineAnim();
  fadeUpAnim();

  return (
    <>
      <Loader />
      <Hero />
      <FeatureSection />
      <FeaturesText />
      <div className="max-sm:h-[180vh]">
      {mobileWidth ? <PaymentMobile /> : <PaymentCopy />}

      </div>
      <SectionBreak />
      <VisionMission />
      <Testimonials />
      <Blogs />
      <FAQs content={faqContent} />
    </>
  );
}

const faqContent = [
  {
    question: 'What is Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'Is Montra licensed?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'What is unique about Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'How do we Sign-Up on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    question: 'How do we Sign-In on Montra?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    question: 'Is enabling Face / Touch / Fingerprint ID safe?',
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
]
