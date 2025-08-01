import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import Discover from '@/components/PersonalPayments/Discover'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'
import Cards from '@/components/Common/Cards'

export const metadata = getPageMetadata({
  title: "Montra Personal Payments – Secure, Instant Money Transfers",
  description: "Send money instantly, pay bills, request funds, and split bills securely—all within the Montra Personal app. Fast, safe and seamless digital payments.",
  url: "personal/payments",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/personal/payments",
    languages: {
      "x-default": "/personal/payments",
    },
  },
  openGraph: {
    url: "personal/payments",
    images: [
      {
        url: `${homepage}/assets/images/seo/personal-payments.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const personalPayments = () => {
  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <FAQJSONLD faqs={faqContent} />
      <BreadcrumbsJSONLD pathname={metadata.url} />
      <Hero primaryHeading={"Montra Personal Account: "} heading={"The Easiest Way to Pay, Anywhere"} content={"Whether you're paying bills, splitting dinner, or sending money to loved ones, Montra makes it effortless. Say goodbye to cash and long queues. With Montra, your phone becomes your wallet."} />
      <Overview content={overviewContent} />
      <Benefits data={benefitsData} />
      <Cards cardData={cardData} />
      <Rewards rewardsData={rewardsData} />
      <Discover />
      <SectionBreak content={"Whether you're paying bills, sending money, or shopping online, do it all in one place, with complete peace of mind."} width={"w-[85%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default personalPayments;

const faqContent = [
  {
    question: 'What are the various options available for making payments on the Montra App?',
    answer:
      "<p>Montra users can make payments using Scan & Pay or choose from any four of the available payment methods on the app:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Montra Account </span>- Directly from your Montra Account.</li><li><span class='font-semibold'>Linked Bank Account</span> - From any bank account you've linked to Montra.</li><li><span class='font-semibold'>Linked Cards</span> - Use any linked debit or credit card from your Montra App</li><li><span class='font-semibold'>Installments</span> - Instantly borrow from Montra's lending partners and pay using the loaned amount. (T&Cs apply)</li></ul><p>Payments are secured through Payments are secured through <span class='font-semibold'>Montra PIN</span> and <span class='font-semibold'>Soft Token</span> (if prompted).Montra PIN and Soft Token (if prompted).</p>",
  },
  {
    question: 'Is it safe for me to link my bank cards on the Montra App?',
    answer:
      "<p>Yes, it's safe. Montra is <span class='font-semibold'>PCI DSS certified</span>, adhering to global security standards.</p><p> Your linked <span class='font-semibold'>debit and credit cards are tokenized</span>, ensuring your identity and data always remain protected.</p>",
  },
  {
    question: 'How can I fund my Montra Account?',
    answer:
      "<p>You can add money to your Montra Account using any of these secure methods:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Linked Bank Accounts</span> – Use any linked or newly added bank account.</li><li><span class='font-semibold'>Linked Debit/Credit Cards</span> – Use a saved card or add a new one.</li><li><span class='font-semibold'>Direct Bank Transfer</span> – Use your online/mobile banking to send money directly to your Montra Account.</li></ul>",
  },
  {
    question: 'How can I access my Montra Personal Account Statement?',
    answer:
      "<p>To view your account statement:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Tap <span class='font-semibold'>“Account Statement”</span> on the Personal Home Screen.</li><li>View your <span class='font-semibold'>available balance</span> and recent<span class='font-semibold'> 7-day transaction</span> history with inflow/outflow details.</li><li>Tap <span class='font-semibold'>“Refresh”</span> for the latest updates.</li><li>Scroll down to load more historical transactions in 7-day increments.</li><li>Tap <span class='font-semibold'>“Mini Statement”</span> to view transactions from the last 30 days.</li><li>You can also <span class='font-semibold'>email your statement</span> for a chosen or custom time range.</li></ul>",
  },

];
const overviewContent = {
  icon1: "/assets/images/personal-payments/overview-icon-1.svg",
  icon2: "/assets/images/personal-payments/overview-icon-2.svg",
  mainImg: "/assets/images/personal-payments/personal-payment.png",
  bgImg: "/assets/images/personal-payments/overview-bg-icon.svg",
  title: "Fast, Easy Payments, Right from your Phone",
  content: [
    "Montra gives you a smarter way to manage your Money, no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands.",
    "Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple."
  ],
  subcontent1: "Pay Bills",
  subcontent2: "Send Money"
}
const benefitsData = {
  heading: "The Smarter, Safer Way to Pay",
  para: "Your money. Your data. Protected at every step.",
  headingWidth: "w-full",
  paraWidth: "w-full",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Your Montra App is protected by the password you set; you can also unlock it easily using Face ID or biometric authentication on your phone.", title: "Secure from the Start", z: "z-[5]", width: "w-[22vw]", height: "17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Montra offers you a Free Soft-token service through the Verifyed app. When necessary, you would be prompted to enter the Soft-token code for authenticating your transaction request to protect you against fraud.", title: " Advanced 2FA Protection", z: "z-[4]", width: "w-[24vw]", height: "21vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Every payment on Montra is processed only after you successfully authenticate with your Montra PIN.", title: "Built-In Payment Checks", z: "z-[5]", width: "w-[24vw]", height: "17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "Only you and the person you’re transacting with can see the details of your payment, keeping your transactions private and secure.", title: "Your Privacy, Always", z: "z-[4]", width: "w-[20vw]", height: "17vw" },
  ]
}
const rewardsData = {
  heading: "Track your Rewards, all in One  Place",
  headingWidth: "w-[70%]",
  gridCols: "grid-cols-4",

  cards: [
    {
      icon: "/assets/images/personal-payments/montra-account-statement.svg",
      title: "Montra Account Statement",
      para: "View all your payments in real-time with your Montra Account Statement. Clarity made simple."
    },
    {
      icon: "/assets/images/personal-payments/instant-alerts.svg",
      title: "Instant Alerts",
      para: "Get voice and text notifications on your Montra App every time you receive a payment so you’re always in the loop."
    },
    {
      icon: "/assets/images/personal-payments/reward-points.svg",
      title: "Reward Points Tracker",
      para: "Keep tabs on every reward point earned with a dedicated Reward Point Account Statement no surprises, just benefits."
    },
    {
      icon: "/assets/images/personal-payments/easy-reward.svg",
      title: "Easy Reward Redemption",
      para: "Redeem your points anytime and monitor it all through your Reward Point Redemption Account. Track your perks with ease."
    },
  ]
}
const cardData = {
  heading: "Send Money your Way. Fast, Easy & Secure",
  subHeading: "The Montra App gives you multiple simple and reliable ways to send money, anytime, anywhere.",
  headingWidth: "w-[70%]",
  cards: [
    {
      icon: "/assets/images/personal-payments/card-1.svg",
      icon2:"/assets/images/personal-payments/montra-accounts.svg",
      title: "Montra Account",
      para: "<p>Make fast, hassle-free payments with your Montra Personal or Business Account.</p>",
    },
    {
      icon: "/assets/images/personal-payments/card-2.svg",
      icon2:"/assets/images/personal-payments/linked-bank.svg",
      title: "Linked Bank Accounts",
      para: "<p>Easily link your other  bank accounts on the Montra app and manage all your payments in one place. One  one app for all your bank accounts. </p>",
    },
    {
      icon: "/assets/images/personal-payments/card-3.svg",
      icon2:"/assets/images/personal-payments/linked-cards.svg",
      title: "Linked Cards",
      para: "<p>Securely link your debit or credit cards on the Montra App and make seamless payments,  no need to carry physical cards.</p>",
    },
    {
      icon: "/assets/images/personal-payments/card-4.svg",
      icon2:"/assets/images/personal-payments/installments-blue.svg",
      title: "Installments",
      para: "<p>Don’t have enough cash to make a purchase? On Montra, you can instantly borrow money from our lending partners to complete your payment.</p>",
    }
  ],
}

