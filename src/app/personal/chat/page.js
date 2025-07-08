import Benefits from '@/components/Common/Benefits'
import Features from '@/components/Common/Features'
import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import React from 'react'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'

export const metadata = getPageMetadata({
  title: "Montra Chat - Instant In-App Payments & Secure Messaging",
  description: "Use Montra Chat to send money, split bills, and chat with friends—all in one secure, real‑time messaging experience. Fast payments, group chats, voice & video.",
  url: "personal/chat",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/personal/chat",
    languages: {
      "x-default": "/personal/chat",
    },
  },
  openGraph: {
    url: "personal/chat",
    images: [
      {
        url: `${homepage}/assets/images/seo/personal-chat.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const personalChat = () => {
  return (
    <>
    <WebpageJsonLd metadata={metadata}/>
    <FAQJSONLD faqs={faqContent}/>
    <BreadcrumbsJSONLD pathname={metadata.url}/>
      <Hero primaryHeading={"Montra Chat:"} heading={" Send Money Like a Message"} content={"Chat, Send Money, Request Payments & stay Connected – without ever leaving the conversation"} titleWidth={"w-[65%]"} paraWidth={"w-full"} />
      <Overview content={overviewContent} />
      <Benefits data={benefitsData} />
      <Features featuresData={featuresData} />
      <SectionBreak content={"On Montra Chat, Conversations Turn into Transactions. Chat, pay, or request money — all in one seamless, secure, and instant experience."} width={"w-[92%]"} />
      <FAQs content={faqContent} />
    </>
  )
}

export default personalChat

const faqContent = [
  {
    question: 'What is Montra Chat?',
    answer:
      "<p><span class='font-semibold'>Montra Chat</span> is an integrated communication feature within the Montra app, designed to enhance interactions between businesses and their customers or any two users on the Montra app. It enables real-time messaging, voice, and video calls directly through the app, allowing for seamless communication without the need to switch platforms. By consolidating communication and payment functionalities, Montra Chat simplifies customer engagement, reduces friction in transactions, and supports businesses in delivering efficient and personalized service.</p>",
  },
  {
    question: 'How is Montra Chat different from other chat platforms?',
    answer:
      "<p>Montra is not a social media platform. <span class='font-semibold'>Montra Chat</span> is designed to enable real-time conversations between users—whether they’re buyers, sellers, or business partners. These chats can naturally lead to payment agreements, after which one user can send or request money directly within the conversation. It mirrors how transactions happen in the physical world—you talk, agree, and pay—but in a more seamless, secure, and digital way.</p>",
  },
  {
    question: 'Who can chat on Montra?',
    answer:
      "<p>Any <span class='font-semibold'>Montra user</span>—whether they’re a merchant, vendor, customer, or friend. The Montra app automatically syncs your phone contacts to help you identify those who use the Montra platform, making it easy to start a conversation. You can also <span class='font-semibold'>add contacts</span> or <span class='font-semibold'>invite new users</span> to join Montra and start chatting right away. Whether you're buying, selling, or just staying connected, Montra Chat keeps communication seamless.</p>",
  },
  {
    question: 'How can I “Pay” or “Request” payment on Montra Chat?',
    answer:
      "<p>While chatting with someone on the Montra app, you’ll see a <span class='font-semibold'>“Pay” & “Request” button</span> right at the bottom of the chat. Tap it to:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Send Money:</span> Just enter the amount you want to pay, followed by PIN authentication to send it instantly. The payment confirmation will travel as a message to the other user you’re chatting with, which can be clicked to view the transaction receipt.</li><li><span class='font-semibold'>Request Money:</span> Just enter the amount you want to request for payment. Your request will be sent to the other user as a message within the chat. The user can simply click on <span class='font-semibold'>“Accept”</span> to initiate a payment followed by a PIN authentication to send this money to your Montra account. The payment confirmation will travel as a message to the other user you’re chatting with, which can be clicked to view the transaction receipt.</li></ul><p>It's a simple, secure way to handle payments without leaving the conversation.</p>",
  },
  {
    question: 'How do I choose which Montra account to use when sending or receiving money in Chat?',
    answer:
      "<p>At the bottom of every Montra Chat window, you'll see a default, preselected Montra account displayed. This is the account currently set for sending or receiving payments during that conversation. If you have multiple Montra accounts (e.g. personal, business, or agency), simply tap the displayed account to view your full list. From there, you can select a different account to use as your preferred payment method for that chat. Once selected, the new account becomes your default for that conversation, making future payments quicker and more seamless.</p>",
  },
  {
    question: 'How Secure is Montra Chat?',
    answer:
      "<p>Montra Chat employs <span class='font-semibold'>end-to-end encryption</span>, ensuring that only you and the person you're communicating with can read the messages—no one else, not even Montra. Furthermore, Montra adheres to strict data privacy standards, ensuring that your personal information and communication data are handled with the utmost confidentiality and integrity.</p>",
  },
];

const overviewContent = {
  icon1: "/assets/images/personal-chat/overview-icon-1.svg",
  icon2: "/assets/images/personal-banking/overview-icon-2.svg",
  mainImg: "/assets/images/personal-chat/overview-phone.png",
  bgImg: "/assets/images/personal-chat/overview-bg-icon.svg",
  title: "Chat Meets Finance",
  content: [
    "Montra Chat brings together your conversations and your money—so you can do more while saying less. Whether you're splitting lunch with friends, paying rent, or sending a quick birthday gift, Montra Chat makes it effortless. Just open a chat, tap to pay, and you’re done.",
    "No switching apps. No account numbers. Just fast, secure, and social payments—right inside your chats."
  ],
  subcontent1: "Pay or Request funds",
  subcontent2: "Chat with Sellers"
}
const benefitsData = {
  heading: "Send & Receive Money — Seamlessly While You Chat",
  para: "No need to switch screens or apps. With Montra Chat, payments happen as naturally as conversations.",
  headingWidth: "w-[80%]",
  paraWidth: "w-[40%]",
  cards: [
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Tap “PAY” to instantly send money to the person you’re chatting with.", title: "Pay Instantly", z: "z-[5]", width: "w-[17vw]", height: "17vw" },
    { classPrefix: "b", left: "!left-[20%]", top: "!top-[62.9%]", color: "bg-[#FEFFA7]", content: "Tap “REQUEST” to send a message asking the person you’re chatting with to send you money.", title: "Request with Ease ", z: "z-[4]", width: "w-[20vw]", height: "17vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Any two users or buyers & sellers can use the “PAY” and “REQUEST” features to negotiate and complete payments seamlessly. Every step is recorded as part of the chat conversation.", title: "Real-Time Confirmations", z: "z-[5]", width: "w-[24vw]", height: "22vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[65.9%]", color: "bg-[#CAC5F7]", content: "Tap on any confirmation message from a “PAY” or “REQUEST” action in chat to view the full transaction receipt.", title: "View Receipts Anytime", z: "z-[4]", width: "w-[23vw]", height: "18vw" },
  ]
}
const featuresData = {
  heading: "Turn Conversations into Transactions",
  headingSize: "text-[5.7vw]",
  paraWidth: "w-[90%]",
  features: [
    {
      icon: "/assets/images/personal-chat/investor-icon-1.svg",
      text: "Messaging",
      color: "bg-[#FF8303]"
    },
    {
      icon: "/assets/images/personal-chat/investor-icon-2.svg",
      text: "Group Messaging",
      color: "bg-[#7A78FF]"
    },
    {
      icon: "/assets/images/personal-chat/investor-icon-3.svg",
      text: "Voice Calls",
      color: "bg-[#35C771]"
    },
    {
      icon: "/assets/images/personal-chat/investor-icon-4.svg",
      text: "Video Calls",
      color: "bg-[#111111]"
    },
    {
      icon: "/assets/images/personal-chat/investor-icon-5.svg",
      text: "Make Payments",
      color: "bg-[#FB2F55]"
    },
    {
      icon: "/assets/images/personal-chat/investor-icon-6.svg",
      text: "Request Payments",
      color: "bg-[#215CFF]"
    },
  ]
}