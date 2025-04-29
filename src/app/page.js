import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";
import Payments from "@/components/Homepage/Payment";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";
import Vision from "@/components/Homepage/Vision";

export default function Home() {
  return (
    <>
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