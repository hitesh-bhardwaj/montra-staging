"use client"
import Hero from "@/components/Company/Hero";
import Impact from "@/components/Company/Impact";
import MontraAnimation from "@/components/Company/MontraAnimation";
import MontraAnimationMobile from "@/components/Company/MontraAnimationMobile";
import Network from "@/components/Company/Network";
import SectionBreak from "@/components/Company/SectionBreak";
import TextBreak from "@/components/Company/TextBreak";
import Timeline from "@/components/Company/Timeline";
import { fadeUpAnim } from "@/components/gsapAnimations";
import FAQs from "@/components/Homepage/FAQs";
import VisionMission from "@/components/Homepage/VisionMission";
import { useEffect, useState } from "react";

export default function CompanyPage() {
  fadeUpAnim();
   const useIsMobile = (breakpoint = 541) => {
       const [isMobile, setIsMobile] = useState(false);
   
       useEffect(() => {
           const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
           checkMobile();
           window.addEventListener("resize", checkMobile);
           return () => window.removeEventListener("resize", checkMobile);
       }, [breakpoint]);
   
       return isMobile;
   };

   const isMobile = useIsMobile();
    return (
        <>
            <Hero />
            <Impact />
            <Network />
            <VisionMission />
            {isMobile? <MontraAnimationMobile/> : <MontraAnimation/>}
            <TextBreak/>
            <Timeline />
            <SectionBreak />
            <FAQs content={faqContent} />
        </>
    )
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
 