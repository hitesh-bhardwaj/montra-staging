import Features from "@/components/Business/Features";
import Hero from "@/components/Business/Hero";
import TextBreak from "@/components/Business/TextBreak";
import { LinkButton } from "@/components/Buttons";
import Header from "@/components/Header";
import FAQs from "@/components/Homepage/FAQs";

export default function Business() {
  return (
    <>
    <Header/>
    <Hero/>
    <TextBreak/> 
    {/* <Features/> */}
    <FAQs/> 
    </>
  );
}



