import Hero from '@/components/Common/Hero'
import Overview from '@/components/Common/Overview'
import SectionBreak from '@/components/Common/SectionBreak'
import FAQs from '@/components/Homepage/FAQs'
import Benefits from '@/components/Common/Benefits'
import React from 'react'
import Rewards from '@/components/Common/Rewards'
import BenefitCards from '@/components/Common/BenefitCards'
import { BreadcrumbsJSONLD, FAQJSONLD, WebpageJsonLd } from '@/lib/json-ld'
import { homepage } from '@/lib/util'
import { getPageMetadata } from '@/lib/seo.config'

export const metadata = getPageMetadata({
  title: "Montra for Business: Smart Inventory Management",
  description: "Montra’s Inventory Management gives you control—track stock, minimize losses, and improve profitability with ease.",
  url:"business/inventory-management",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
  alternates: {
    canonical: "/business/inventory-management",
    languages: {
      "x-default": "/business/inventory-management",
    },
  },
  openGraph: {
    url: "business/inventory-management",
    images: [
      {
        url: `${homepage}/assets/images/seo/business-inventory-management.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
});

const businessInventory = () => {
  return (
   <>
   <WebpageJsonLd metadata={metadata}/>
   <FAQJSONLD faqs={faqContent}/>
   <BreadcrumbsJSONLD pathname={metadata.url}/>
   <Hero primaryHeading={"Montra for Business: "} heading={"Smart Inventory Management - Stronger Business"} content={"Montra’s Inventory Management gives you control—track stock, minimize losses, and improve profitability with ease."}/>
   <Overview content={overviewContent}/>
   <Benefits data={benefitsData} />
   <BenefitCards cardData={cardData}/>
   <Rewards rewardsData={rewardsData}/>
   <SectionBreak content={"Built to Empower & Designed for Simplicity. Whether you're running a business or handling personal payments, our fintech tools make it all smoother, faster, and more inclusive."} width={"w-[90%]"}/>
   <FAQs content={faqContent}/>
   </>
  )
}

export default businessInventory

const faqContent = [
    {
      question: "What can I do with Montra’s Inventory Management tool?",
      answer:
        "<p>Montra’s Inventory Management tool gives you full visibility and control over your stock. You can track inventory levels in real time, manage incoming and outgoing products, organize your product catalog, automate restocking alerts, and reduce manual errors. It helps ensure you're never out of stock or overstocked, supporting smoother operations and better customer satisfaction.</p>",
    },
    {
      question: "How does this help my business grow?",
      answer:
        "<p>By simplifying stock control, Montra helps you minimize losses, prevent stockouts, and streamline your order fulfillment process. With better inventory planning, you can meet demand faster, reduce operational waste, and make smarter purchasing decisions. This improves your profit margins and creates room for scale—especially as your customer base grows.</p>",
    },
    {
      question: "Can I sell inventory on credit through Montra?",
      answer:
        "<p>Yes. With Montra, you can offer <span class='font-semibold'>credit sales</span> to trusted business customers. Simply generate a Credit Invoice within the app, and Montra will track the outstanding payments for you. If the buyer misses the due date, Montra can initiate follow-ups and help facilitate payment collection—allowing you to offer flexible terms without worrying about manual tracking or chasing payments.</p>",
    },
    {
      question: "How do I place orders with distributors on Montra?",
      answer:
        "<p>Once you’ve linked your business with a registered distributor on the Montra platform, you can place orders directly through the app. You’ll be able to browse available products, view pricing, choose quantities, and submit orders seamlessly—cutting down on back-and-forth calls or paperwork. The system also keeps records of all your orders for easy tracking and repeat purchasing.</p>",
    },
    
    {
      question: "Can I manage returns and refunds within the inventory system?",
      answer:
        "<p>Yes. Montra’s inventory tool supports full-cycle order management—including handling of <span class='font-semibold'>returns, refunds, and stock adjustments</span>. If a customer returns a product or an order is cancelled, you can update your inventory records in real time and process the refund directly from the app. This keeps your inventory data accurate and your operations consistent.</p>",
    },
    {
      question: "Can I track product performance and make data-driven decisions?",
      answer:
        "<p>Absolutely. Montra provides <span class='font-semibold'>real-time dashboards and reports</span> that show you which products are selling fast, which ones are stagnant, and where your stock levels stand. These insights help you forecast demand, manage suppliers, and identify what’s driving revenue. With better data, you can reduce waste, optimize your catalog, and scale with confidence.</p>",
    },
    {
      question: "Is it possible to buy inventory now and pay later? ",
      answer:
        "<p><span class='font-semibold'> Yes—if you're a registered Montra Business user.</span> Montra gives eligible merchants the ability to buy inventory on credit from sellers who offer flexible payment terms on the platform. Once the seller grants credit, you can complete your purchase immediately and pay later—either in full after the agreed period or through scheduled installments. This feature is especially useful for small and growing businesses looking to manage cash flow, stock up during high-demand seasons, or expand without upfront capital.</p> <p class='italic pl-[2vw]'>Note: Availability of this feature depends on your business profile and the seller’s credit policies.</p>",
    },
  ];
const overviewContent = {
  icon1:"/assets/images/business-inventory/overview-1.svg",
  icon2:"/assets/images/business-inventory/overview-2.svg",
  mainImg:"/assets/images/personal-banking/overview-phone.png",
  bgImg:"/assets/images/personal-payments/overview-bg-icon.svg",
  title:"Effortless Inventory Management for Modern Businesses",
  content:[
    "Keep your business running smoothly with Montra’s easy-to-use inventory management system. Whether you’re managing a retail store, running a service business, or operating multiple outlets, Montra helps you stay organized and in control—right from your phone."
  ],
  subcontent1:"Track, manage, and grow",
  subcontent2:"Get Stock Alerts"
}
const  benefitsData = {
  heading:"Why Choose Montra’s Inventory Tool?",
  para:"It’s inventory management made simple, efficient, and built for growth.",
  headingWidth:"w-[60%]",
  paraWidth:"w-[40%]",
  cards:[
    { classPrefix: "a", left: "!left-[5%]", top: "!top-[25%]", color: "bg-[#D9F7C5]", content: "Buy or sell inventory with instant B2B payments — funds move instantly between Montra Business Accounts, no delays.", title: "Instant Payments, Always", z: "z-[5]", width:"w-[24vw]", height:"17vw" },
    { classPrefix: "b", left: "!left-[27%]", top: "!top-[62.9%]", color: "bg-[#FFEAEE]", content: "Offer credit to other businesses confidently. Montra tracks credit invoices and helps you manage and collect overdue payments smoothly.", title: "Easily Sell on Credit", z: "z-[4]", width:"w-[22vw]", height:"19vw" },
    { classPrefix: "c", left: "!left-[45%]", top: "!top-[15%]", color: "bg-[#EAF1FF]", content: "Enjoy flexible credit terms from sellers on Montra — get the inventory you need now and pay in easy installments.", title: "Buy Now, Pay Later", z: "z-[5]",  width:"w-[22vw]", height:"17vw" },
    { classPrefix: "d", left: "!left-[64%]", top: "!top-[45.9%]", color: "bg-[#CAC5F7]", content: "Once a distributor links to your business, you can place and manage orders directly through the Montra App — making supply chain management simple.", title: "Place Orders with Linked Distributors", z: "z-[4]",  width:"w-[32vw]", height:"22vw" },
  ]
}
const rewardsData={
  heading:"Inventory Meets Innovation",
  headingWidth:"w-[80%]",
  para:"Transform How You Trade on Montra",
  gridCols:"grid-cols-4",
  cards:[
      {
          icon:"/assets/images/business-inventory/instant-payments.svg",
          title:"Instant Payments for Buying & Selling",
          para:"B2B transactions on Montra are fast and frictionless. Whether you’re buying or selling inventory, payments are made instantly between Montra Business Accounts—no delays, no stress."
      },
      {
          icon:"/assets/images/business-inventory/sell-on-credit.svg",
          title:"Sell on Credit, Easily",
          para:"Need to offer flexible payment terms? Montra lets you sell inventory to other businesses on credit. We’ll help you track outstanding invoices and follow up on overdue payments after the agreed due date—so you can focus on business, not chasing funds."
      },
      {
          icon:"/assets/images/business-inventory/buy-now.svg",
          title:"Buy Now, Pay Later",
          para:"Enjoy flexibility when purchasing inventory. Accept credit terms from sellers on the Montra App and split your payments into easy installments. Buy what you need today—pay when it works for you."
      },
      {
          icon:"/assets/images/business-inventory/order.svg",
          title:"Order Directly from Distributors",
          para:"Connected to a distributor on Montra? Great! You can place orders directly with them through the Montra App. Our supply chain solution powers seamless ordering for businesses linked to verified distribution partners."
      },
  ]
}
const cardData ={
    heading:"Smarter Inventory Management on Montra App",
    subHeading:"Smarter Inventory Management on Montra App.",
    headingWidth:"w-[75%]",
    icon1:"/assets/images/business-inventory/card-icon-1.svg",
    icon2:"/assets/images/business-inventory/card-icon-2.svg",
    icon3:"/assets/images/business-inventory/card-icon-3.svg",
    icon4:"/assets/images/business-inventory/card-icon-4.svg",
    cardTitle1:"Buy Inventory",
    cardTitle2:"Manage Your Stock",
    cardTitle3:"Sell Inventory",
    cardTitle4:"Place Orders with Linked Distributors",
    cardContent1:"<p>Purchase stock from other businesses on Montra, receive their invoices, and pay instantly using your Montra Business Account.</p>",
    cardContent2:"<p>Track what you buy and sell through the Montra App to keep your inventory updated. Even your tertiary sales (to consumers) are factored in, and you can edit stock levels anytime to support accurate invoicing and smart restocking decisions.</p>",
    cardContent3:"<p>Send invoices to other businesses on Montra and receive payments instantly, streamlining your sales process.</p>",
    cardContent4:"<p>Easily place orders with distributors you’ve linked to on the Montra App, simplifying your supply chain.</p>",
    
  }
  