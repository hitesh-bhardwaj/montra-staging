import Blogs from "@/components/Homepage/Blogs";
import FAQs from "@/components/Homepage/FAQs";
import FeatureSection from "@/components/Homepage/FeaturesSection";
import FeaturesText from "@/components/Homepage/FeaturesText";
import Hero from "@/components/Homepage/Hero";
import PaymentMobile from "@/components/Homepage/PaymentMobile";
import PaymentSection from "@/components/Homepage/PaymentSection";
import SectionBreak from "@/components/Homepage/SectionBreak";
import Testimonials from "@/components/Homepage/Testimonials";
import VisionMission from "@/components/Homepage/VisionMission";
import LoaderCopy from "@/components/LoaderCopy";
// import NewLoader from "@/components/NewLoader";

export default function Home() {

  return (
    <>
    
      <LoaderCopy />
      <Hero />
      <FeatureSection />
      <FeaturesText />
      <PaymentMobile />
      <PaymentSection />
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
      "<p>Montra is a blend of the two words Money & Transfer and therefore symbolizes the act of Money Transfer.</p><p>Montra is a Financial Technology Platform licensed by CBN in Nigeria.</p><p>Montra introduces innovative products & solutions that promote Financial Inclusion across emerging economies towards transition from cash to digital payments & making accessibility to Credit easy for everyone.</p>",
  },
  {
    question: 'Is Montra licensed?',
    answer:
      "<p>Montra is a Financial Technology Platform licensed by CBN in Nigeria.</p>",
  },
  {
    question: 'What is unique about Montra?',
    answer:
      "<p>Montra offers Digital Payments, Digital Lending, Insurance & Investment services through a single app for both Individuals & Businesses.</p><p>Montra not only offers innovative solutions directly to the end users, but it also works with the ecosystem that consists of Banks & FinTechs and other Financial Institutions.</p>",
  },
  {
    question: 'How do I Sign-Up on Montra?',
    answer:
      "<ol class='list-decimal pl-[2vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Download the Montra App from Google Play Store or Apple App Store.</li><li>Enter your phone number and date of birth.</li><li>Verify your phone with a 6-digit code.</li><li>Set up your password, Face/Fingerprint ID, and create your Montra PIN.</li><li>Complete KYC by providing your BVN or NIN</li></ol><p>You’ll get your Montra Personal Account instantly — and can upgrade your KYC later for higher limits.</p><p> Montra Personal Account users can further set up a Montra Business Account, if they have an existing business where they would like to start accepting payments using variety of payment acceptance methods offered by Montra such as QR scan, Soft-POS & POS terminals.</p>",
  },
  {
    question: 'How do we Sign-In on Montra?',
    answer:
      "<p>If you are a registered user, you can Sign-In these simple steps:</p><ul class='list-disc pl-[1vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>If Face / Touch / Fingerprint ID has been previously enabled:</li><ul class='pl-[1vw] py-[0.5vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Click on Sign-In. Allow your phone to verify your Face / Fingerprint</li><li>Once your Face / Fingerprint is verified, you will be able seamlessly Sign-In on your Montra App.</li></ul></ul><ul class='list-disc pl-[1vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li> If Face / Touch / Fingerprint ID has not been enabled:</li><ul class='pl-[1vw] py-[0.5vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw] list-disc'><li>Click on Sign-In. Enter your CID and Password (CID is your Country ID for Montra App. For a user from Nigeria your Montra CID would be your 10 digits Mobile number with format as <span class='underline text-blue-400'>xxxxxxxxxx@montra.ng</span>. Users can find CID displayed on the home screen of the app)</li><li>Once your Montra CID and Password are authenticated, you will be able to Sign-In on Montra App.</li></ul></ul>",
  },
  {
    question: 'Is enabling Face / Touch / Fingerprint ID safe?',
    answer:
      "<p>Enabling Face / Touch / Fingerprint ID is a safe, secure and smart way to Sign-In on Montra App. Any payment you will make using Montra App is still protected by multiple factors such as:</p><ul class='list-disc pl-[1vw] space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>PIN verification, and mandatory for all requests you submit from Montra App</li><li>Montra Soft Token verification (if you choose Montra Soft Token). This provides another layer of security against hackers and account takeovers.</li><li>Montra Soft Token is a free feature that allows Montra Users to set-up Montra Soft Token account on Verified App. Once you set-up this account, you can simply access your Montra Soft Token (which refreshes every 30 seconds)</li></ul>",
  },
]
