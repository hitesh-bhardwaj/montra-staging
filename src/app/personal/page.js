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
      <FAQs />
    </>
  );
}
