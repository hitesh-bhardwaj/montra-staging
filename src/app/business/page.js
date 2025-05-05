'use client'
import BankingSection from "@/components/Business/BankingSection";;
import Hero from "@/components/Business/Hero";
import MobileBanking from "@/components/Business/MobileBanking";
import MobileHero from "@/components/Business/MobileHero";
import SectionBreak from "@/components/Business/SectionBreak";
import Header from "@/components/Header";
import FAQs from "@/components/Homepage/FAQs";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

    useEffect(() => {
      if (globalThis.innerWidth > 1024) {
      const trigger = gsap.to(".primary-container", {
        backgroundColor: "#215CFF",
        ease: "none",
        scrollTrigger: {
          trigger: "#primaryContainer",
          start: "25% top",
          end: "90% top",
          // scrub: true,
          // markers: true,
          onEnter: () => {
            gsap.to(".primary-container", { backgroundColor: "#215CFF", duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(".primary-container", { backgroundColor: "#215CFF", duration: 0.3 });
          },
          onLeaveBack: () => {
            gsap.to(".primary-container", { backgroundColor: "white", duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(".primary-container", { backgroundColor: "white", duration: 0.3 });
          }
        }
      });
    }else {
      
    }
    }, []);
    
  return (
    <>
    <Header/>
    <div className="primary-container z-[-1]" id="primaryContainer">
    {!mobileWidth ? <Hero /> : <MobileHero />}
    </div>
     {!mobileWidth ? <BankingSection/> : <MobileBanking />}
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



