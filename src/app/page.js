"use client"
import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";

import Payments from "@/components/Homepage/Payment";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";
import Vision from "@/components/Homepage/Vision";
import Loader from "@/components/Loader";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <>
    <Loader/>
    {/* <HomepageHeader/> */}
      <Hero />
      <FeatureSection />
      <FeaturesText />
      <Payments />
      <SectionBreak />
      <Vision />
      <Testimonials />
      <Blogs />
      <FAQs />
    </>
  );
}