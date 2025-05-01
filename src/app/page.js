"use client"
import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";
import Payments from "@/components/Homepage/Payment";
import PaymentMobile from "@/components/Homepage/PaymentMobile";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";
import Vision from "@/components/Homepage/Vision";
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
  return (
    <>
    {/* <Loader/> */}
    {/* <HomepageHeader/> */}
      <Hero />
      <FeatureSection />
      <FeaturesText />
      {mobileWidth?<PaymentMobile/>:<Payments />}
      <SectionBreak />
      <Vision />
      <Testimonials />
      <Blogs />
      <FAQs />
    </>
  );
}