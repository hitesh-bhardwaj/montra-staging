import BenefitCards from '@/components/Common/BenefitCards'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import Header from '@/components/Header'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import Discover from '@/components/PersonalPayments/Discover'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import { WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { generateMetadata } from '@/components/Metadata'

export const metadata = generateMetadata({
  homepage,
  title: "Montra Personal Payments – Secure, Instant Money Transfers",
  description: "Send money instantly, pay bills, request funds, and split bills securely—all within the Montra Personal app. Fast, safe and seamless digital payments.",
  url:"personal/payments",
  image: "personal-payments.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
});


const personalPayments = () => {
  return (
   <>
   <WebpageJsonLd metadata={metadata}/>
   <Header/>
   <Hero primaryHeading={"Montra Personal Account: "} heading={"The Easiest Way to Pay, Anywhere"} content={"Whether you're paying bills, splitting dinner, or sending money to loved ones—Montra makes it effortless. Say goodbye to cash and long queues. With Montra, your phone becomes your wallet."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <Discover/>
   <SectionBreak content={"Whether you're paying bills, sending money, or shopping online—do it all in one place, with complete peace of mind."} width={"w-[85%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalPayments

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
  ];
const overviewContent = {
  icon1:"/assets/images/personal-payments/overview-icon-1.svg",
  icon2:"/assets/images/personal-payments/overview-icon-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Fast, Easy Payments—Right from Your Phone",
  content:[
    "Montra gives you a smarter way to manage your money—no cash, no complications. From sending money to friends and family, to paying bills, shopping, and more, Montra puts secure, fast, and reliable payments in your hands.",
    "Whether you're buying airtime, paying rent, or splitting the tab, Montra keeps it simple."
  ],
  subcontent1:"Pay Bills",
  subcontent2:"Send Money"
}
const  benefitsData = {
  heading:"The Smarter, Safer Way to Pay",
  para:"Your money. Your data. Protected at every step.",
  headingWidth:"w-full",
  paraWidth:"w-full",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#EAF1FF]", content: "Your Montra App is protected by the password you set — and you can also unlock it easily using Face ID or biometric authentication on your phone.", title: "Secure from the Start", z: "z-[5]", width:"w-[22vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#CAC5F7]", content: "Montra offers you a Free Soft-token service through the Verified app. When necessary, you would be prompted to enter the Soft-token code for authenticating your transaction request to protect you against fraud.", title: " Advanced 2FA Protection", z: "z-[4]", width:"w-[24vw]", height:"21vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Every payment on Montra is processed only after you successfully authenticate with your Montra PIN.", title: "Built-In Payment Checks", z: "z-[5]",  width:"w-[24vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[45.9%]", color: "bg-[#D9F7C5]", content: "Only you and the person you’re transacting with can see the details of your payment — keeping your transactions private and secure.", title: "Your Privacy, Always", z: "z-[4]",  width:"w-[20vw]", height:"17vw" },
  ]
}
const rewardsData={
  heading:"Track Your & Rewards—All in One Place",
  headingWidth:"w-[70%]",
  gridCols:"grid-cols-4",

  cards:[
      {
          icon:"/assets/images/personal-payments/montra-account-statement.svg",
          title:"Montra Account Statement",
          para:"View all your payments in real-time with your Montra  Account Statement—clarity made simple."
      },
      {
          icon:"/assets/images/personal-payments/instant-alerts.svg",
          title:"Instant Alerts",
          para:"Get voice and text notifications on your Montra App every time you receive a payment—so you’re always in the loop."
      },
      {
          icon:"/assets/images/personal-payments/reward-points.svg",
          title:"Reward Points Tracker",
          para:"Keep tabs on every reward point earned with a dedicated Reward Point Account Statement—no surprises, just benefits."
      },
      {
          icon:"/assets/images/personal-payments/easy-reward.svg",
          title:"Easy Reward Redemption",
          para:"Redeem your points anytime and monitor it all through your Reward Point Redemption Account—track your perks with ease."
      },
  ]
}
const cardData ={
  heading:"Send Money Your Way—Fast, Easy & Secure",
  subHeading:"The Montra App gives you multiple simple and reliable ways to send money—anytime, anywhere.",
  headingWidth:"w-[70%]",
  icon1:"/assets/images/personal-payments/card-1.svg",
  icon2:"/assets/images/personal-payments/card-2.svg",
  icon3:"/assets/images/personal-payments/card-3.svg",
  icon4:"/assets/images/personal-payments/card-4.svg",
  cardTitle1:"Montra Account",
  cardTitle2:"Linked Bank Accounts",
  cardTitle3:"Linked Cards",
  cardTitle4:"Installments",
  cardContent1:"<p>Make fast, hassle-free payments with your Montra Personal or Business Account.</p>",
  cardContent2:"<p>Easily link your other bank accounts on the Montra app and manage all your payments in one place — one app for all your bank accounts.</p>",
  cardContent3:"<p>Securely link your debit or credit cards on the Montra App and make seamless payments — no need to carry physical cards.</p>",
  cardContent4:"<p>Don’t have enough cash? On Montra, you can instantly borrow money from our lending partners to complete your payment.</p>",
  
}

