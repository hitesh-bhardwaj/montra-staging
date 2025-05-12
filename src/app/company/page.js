import Hero from "@/components/Company/Hero";
import Impact from "@/components/Company/Impact";
import MontraAnimation from "@/components/Company/MontraAnimation";
import Network from "@/components/Company/Network";
import Timeline from "@/components/Company/Timeline";
import FAQs from "@/components/Homepage/FAQs";
import SectionBreak from "@/components/Homepage/SectionBreak";
import VisionMission from "@/components/Homepage/VisionMission";

export default function CompanyPage() {
    return (
        <>
            <Hero />
            <Impact />
            <Network />
            <MontraAnimation />
            <VisionMission />
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