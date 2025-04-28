import { LinkButton } from "@/components/Buttons";
import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <FeaturesText />
      <SectionBreak />
      <Testimonials />
      <Blogs />
      <FAQs />
    </>
  );
}



