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
  title: "Montra Shop - In-App Marketplace for Essentials & Services",
  description: "Shop essentials, airtime, bills, subscriptions & gifts seamlessly via Montra’s in-app marketplace. Chat, call sellers, pay securely—all in one convenient app.",
  url:"personal/shop",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/personal/shop",
    languages: {
      "x-default": "/personal/shop",
    },
  },
  openGraph: {
    url: "personal/shop",
    images: [
      {
        url: `${homepage}/assets/images/seo/personal-shop.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const personalShop = () => {
  return (
   <>
   <WebpageJsonLd metadata={metadata}/>
   <FAQJSONLD faqs={faqContent}/>
   <BreadcrumbsJSONLD pathname={metadata.url}/>
   <Hero primaryHeading={"Montra Shop: "} heading={"Your One-Stop Shop for Every Need, Delivered to Your Doorstep"} content={"Montra Marketplace recreates the feel of shopping in the real world. Compare products across sellers, chat, negotiate, and pay, all in one seamless platform"} titleWidth={"w-[75%]"} paraWidth={"w-full"} />
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
  <Features featuresData={featuresData}/>
   <SectionBreak content={"A smarter, safer, and faster way to buy what you need. Download the Montra App and discover a marketplace designed for your lifestyle."} width={"w-[89%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default personalShop

const faqContent = [
  {
    question: 'How can I shop on Montra?',
    answer:
      "<p>Shopping on <span class='font-semibold'>Montra</span> is easy:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Open the Montra App and tap on the <span class='font-semibold'>“Shop”</span> tab.</li><li>Browse or search for products across multiple categories or stores.</li><li>Compare options, chat with sellers if needed, and add items to your cart.</li><li>Proceed to checkout and choose your preferred payment method.</li></ul><p>Once your order is placed, you’ll get real-time updates on its status.</p>",
  },
  {
    question: 'How can I stay updated on new products, trends, and offers from sellers on Montra?',
    answer:
      "<p>You can <span class='font-semibold'>personalize your feed</span> by updating the product categories you're interested in on the Montra App.</p><p>Montra will show you updates based on:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Your selected interest categories</li><li>Products you've recently searched for</li><li>Montra Stores you follow</li></ul><p>This ensures you’re always in the loop on <span class='font-semibold'>new product launches, latest trends, special offers, and seller updates</span>—all tailored to your preferences. You can tap any feed to <span class='font-semibold'>view and buy the product</span> or <span class='font-semibold'>start a chat</span> with the seller directly.</p>",
  },
  {
    question: 'What is Pay on Delivery (POD)?',
    answer:
      "<p><span class='font-semibold'>Pay on Delivery (POD)</span> lets you complete payment only <span class='font-semibold'>after your order is delivered</span>. When you choose this option, Montra will send a <span class='font-semibold'>secure payment link</span> to your email. You can use this link to pay once you’ve received and confirmed the product.</p><p>You can also find all your pending POD requests in the Montra App:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Go to the <span class='font-semibold'>home screen</span></li><li>Tap <span class='font-semibold'>“Payment Links”</span></li><li>Select the relevant link to <span class='font-semibold'>complete the transaction</span> or <span class='font-semibold'>confirm delivery</span></li></ul><p>It’s a safe and convenient way to shop with confidence.</p>",
  },
  {
    question: 'What is Escrow Pay?',
    answer:
      "<p><span class='font-semibold'>Escrow Pay</span> is a secure payment option where Montra temporarily holds your money in an <span class='font-semibold'>Escrow Account</span> until both the buyer and seller fulfill the agreed terms.</p><p>Here’s how it works:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>When you choose Escrow Pay, your funds are <span class='font-semibold'>safely held by Montra</span>.</li><li>Once the product/service is delivered and you <span class='font-semibold'>confirm satisfaction</span>, Montra instantly releases the payment to the seller.</li><li>If the seller fails to deliver or the product doesn't meet the agreed terms, you can <span class='font-semibold'>cancel the order</span>, and Montra will <span class='font-semibold'>refund your money immediately</span>.</li></ul><p>Escrow Pay is ideal for <span class='font-semibold'>high-value or sensitive transactions</span>, offering protection and peace of mind for both parties.</p>",
  },
  {
    question: 'Can I chat with a Montra Store Merchant/Seller?',
    answer:
      "<p><span class='font-semibold'>Yes!</span> Montra lets you connect directly with merchants through <span class='font-semibold'>in-app chat, voice, or video calls</span>.</p><p>Here’s how:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li><span class='font-semibold'>Search</span> for the product or service you’re interested in.</li><li><span class='font-semibold'>Browse</span> the list of sellers offering it.</li><li><span class='font-semibold'>Tap the Chat icon</span> next to any seller to start a conversation—all without leaving the app.</li></ul>",
  },
];

const overviewContent = {
  icon1:"/assets/images/personal-shop/no-queues.svg",
  icon2:"/assets/images/personal-shop/access.svg",
  mainImg:"/assets/images/personal-shop/personal-shop.png",
  bgImg:"/assets/images/personal-shop/shop.svg",
  title:"A Smarter Way to Shop, Right from Your Montra App",
  content:[
    "Montra Shop brings everyday essentials and digital services to your fingertips. From airtime and data top-ups to bill payments, subscriptions, and gifting, you can browse, buy, and pay, all in one seamless, secure experience. No lines. No stress. Just simple, convenient shopping built for your lifestyle."
  ],
  subcontent1:"24/7 Access",
  subcontent2:"No Queues, No Hassles"
}
const  benefitsData = {
  heading:"Why Shop on Montra?",
  para:"Discover a wide range of products and services across multiple categories, right from your Montra app. From daily essentials to specialized services.",
  headingWidth:"w-[80%]",
  paraWidth:"w-[65%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Enjoy the convenience of accessing products and services across a wide range of business categories, all through the Montra App.", title: "Your One-Stop Shop ", z: "z-[5]", width:"w-[20vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[20%]", top: "!top-[62.9%]", color: "bg-[#FEFFA7]", content: "<p>Choose how you pay:  <ul class='list-disc pl-[2vw] py-[0.5vw]'> <li> <span class='font-medium'> Pay on Delivery </span> via payment link</li> <li> <span class='font-medium'> Escrow Pay </span> for secure, condition-based payments </li> <li> <span class='font-medium'> Pay Now  </span> using Montra Account, linked banks, or cards</li> <li> <span class='font-medium'>Pay in Installments  </span> by borrowing instantly and repaying over time</li></ul> Montra gives you flexible payment options that fit your needs.</p>", title: "Multiple Ways to Pay with Montra", z: "z-[4]", width:"w-[28vw]", height:"22vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#FFEAEE]", content: "Message sellers, make voice or video calls, and even send payments  all while chatting on the Montra App.", title: "Connect & Shop Smarter", z: "z-[5]",  width:"w-[24vw]", height:"18vw" },
    { classPrefix: "d", left: "!left-[68%]", top: "!top-[65.9%]", color: "bg-[#CAC5F7]", content: "Montra merchants offer products and services for home delivery, take-out, or by appointment, all at your convenience.", title: "Flexible Delivery Options ", z: "z-[4]",  width:"w-[23vw]", height:"18vw" },
  ]
}
const featuresData = {
  heading:"Explore Our Product & Service Categories",
  headingSize:"text-[3.4vw]",
  paraWidth:"w-[90%]",
  features:[
  {
    icon:"/assets/images/personal-shop/delivery.svg",
    text:"Delivery/ Takeout/ Rentals",
    color:"bg-[#FF8303]"
  },
  {
    icon:"/assets/images/personal-shop/dine-in.svg",
    text:"Dine-in",
    color:"bg-[#7A78FF]"
  },
  {
    icon:"/assets/images/personal-shop/home-services.svg",
    text:"Home Services",
    color:"bg-[#35C771]"
  },
  {
    icon:"/assets/images/personal-shop/appointments.svg",
    text:"Appointments",
    color:"bg-[#FB2F55]"
  },
  
]
}