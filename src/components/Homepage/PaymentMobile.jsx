"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "../Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const controlContent = [
  {
    personalIconText: "banking",
    businessIconText: "banking",
    color: "text-[#FF8100]",
    PersonalTitle: "Secure Way Of Accessing A World Of Banking",
    BusinessTitle: "All-in-One Banking. Built for Businesses",
    personalImg: "/assets/images/homepage/personal-banking.png",
    businessImg: "/assets/images/homepage/business-banking.png",
    personalLink: "/personal/banking",
    businessLink: "/business/banking",
    contentPersonal: "<p>Set-up your Montra Personal Account instantly for FREE. Secured with 2FA using Montra Soft Token, you can start making payments & transfers</p>",
    contentBusiness: '<p>From accepting payments and finance to operations and growth tools, <span class="font-semibold">Montra</span> is your complete ecosystem — designed to help your business grow smarter & faster.</p>',
  },
  {
    personalIconText: "payment",
    businessIconText: "payment",
    color: "text-primary",
    PersonalTitle: "Pay Your Way with Montra",
    BusinessTitle: "Accept Payments. Expand Possibilities",
    personalImg: "/assets/images/homepage/personal-payment.png",
    businessImg: "/assets/images/homepage/business-payment.png",
     personalLink: "/personal/payments",
    businessLink: "/business/payments",
    contentPersonal: '<p>One app. Multiple payment options — all built for ease, speed, and control. With Montra, you can pay using your:</p><ul class="list-disc pl-[5vw] space-y-[1vw]"><li class="font-semibold">Montra Account</li><li><span class="font-semibold">Linked Bank Accounts – </span>Pay using your other bank accounts linked to Montra App.</li><li><span class="font-semibold">Linked Cards – </span>Use your saved debit or credit cards on Montra App</li><li><span class="font-semibold">Installments –  </span>Borrow instantly to Buy Now and pay overtime.</li></ul><p>Simple. Secure. Seamless.</p>',
    contentBusiness: '<p>Open a Montra Business Account to start receiving payments from anyone — anytime, anywhere. Accept payments using<ul class="pl-[5vw] space-y-[1vw] list-disc"><li>QR codes </li> <li>Bank Transfers </li><li>Tap & Pay (Soft POS)</li><li>POS</li></ul></p>',
  },
  {
    personalIconText: "finance",
    businessIconText: "Agency Banking",
    color: "text-[#35C771]",
    PersonalTitle: "Manage your Finance, on the Go",
    BusinessTitle: "Become a Montra Agent. Start Earning",
    personalImg: "/assets/images/homepage/personal-finance.png",
    businessImg: "/assets/images/homepage/business-agency-banking.png",
    personalLink: "/personal/finance",
    businessLink: "/business/agency-banking",
    contentPersonal: '<p >Wherever life takes you, Montra’s got your back on your Finances.</p> <p>From unexpected expenses to future planning, we offer smart, secure solutions through all major Partner Institutions :</p><ul class="list-disc pl-[5vw] space-y-[1vw]"><li><span class="font-semibold">Loans </span></li><li><span class="font-semibold">Insurance Plans</span></li><li><span class="font-semibold">Investment Plans</span></li></ul>',
    contentBusiness: "<p>Offer Agency Banking services for offering Cash Deposit & Cash withdrawal services and get paid for every transaction — it’s that simple.</p>",
  },
  {
    personalIconText: "chat",
    businessIconText: "Inventory Management",
    color: "text-[#FB2F55]",
    PersonalTitle: "Send Messages. Send & Request Money. Same Chat.",
    BusinessTitle: "Sell Smarter. Restock Faster. Pay & Get Paid Instantly.",
    personalImg: "/assets/images/homepage/personal-chat.png",
    businessImg: "/assets/images/homepage/business-inventory-management.png",
    personalLink: "/personal/chat",
    businessLink: "/business/inventory-management",
    contentPersonal: '<p>Introducing <span class="font-semibold">CHAT to PAY — </span>  Montra’s game-changing feature that lets you send or request money without ever leaving your conversation with other Montra users / Merchants.</p>',
    contentBusiness: '<p>Manage orders, send invoices, and track stock. With Montra, every part of your business just flows.<ul class="pl-[5vw] list-disc space-y-[1vw]"><li>Send & receive Invoices</li><li>Track Inventory</li><li>Pay & Receive Instant & Credit based Payments</li></ul></p><p class="font-semibold">One flow. Zero friction!</p>',
  },
  {

    personalIconText: "Shop",
    businessIconText: "Montra Store",
    color: "text-[#111111]",
    PersonalTitle: "Shopping Meets Simplicity",
    BusinessTitle: "Start Selling Online — For Free",
    personalImg: "/assets/images/homepage/personal-shop.png",
    businessImg: "/assets/images/homepage/business-montra-store.png",
    personalLink: "/personal/shop",
    businessLink: "/business/montra-store",
    contentPersonal: '<p>With <span class="font-semibold">Montra Store</span>, sellers showcase. Buyers discover.</p><p>From local sellers to online brands— everyone gets a place to sell, share, chat, deliver and get paid.</p><p>Easy shopping. Instant payments. Real connections.</p>',
    contentBusiness: '<p>No website? No problem.</p><p>Build your dream Virtual Store for free to start selling online.</p><ul class="pl-[5vw] list-disc space-y-[1vw]"><li>List your products</li><li>Send feeds to build awareness</li><li>Chat with those interested in buying</li><li>Build relationships with those who follow your store </li><li>Offer tailormade payment methods to boost your business</li><li>Track your Payments</li></ul><p class="font-semibold">Your ready-to-use shop at no cost.</p>',
  },
  {

    businessIconText: "Payment Gateway",
    color: "text-[#111111]",
    BusinessTitle: "One Gateway. Multiple Payment Options.",
    businessImg: "/assets/images/homepage/business-payment-gateway.png",
    businessLink: "/business/payment-gateway",
    contentBusiness: '<p>Integrate <span class="font-semibold">Montra Payment Gateway</span> into your app or website and accept payments via:</p><ul class="pl-[5vw] list-disc space-y-[1.5vw]"><li>Debit & Credit Cards</li><li>Bank Transfers via QR</li><li>Montra App </li><li>USSD Payments </li></ul> <p class="font-semibold">More ways to get paid. Fast integration. Instant settlement.</p>',
  },
  {

    businessIconText: "Tap & Pay",
    color: "text-[#111111]",
    BusinessTitle: "Tap. Accept. Get Paid.",
    businessImg: "/assets/images/homepage/business-tap-&-pay.png",
    businessLink: "/business/tap-and-pay",
    contentBusiness: '<p>With Montra Tap to Pay, your phone becomes a payment terminal — no extra hardware, no limits.</p><p>Accept contactless payments from cards and grow your business with every tap. <span class="italic">(available on NFC enabled Android devices)*</span></p><p class="font-semibold">It’s fast. It’s secure. And it’s all in your hands.</p>',
  },
];

export default function PaymentMobile({ allowMultiple = false }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([0]);
  const sectionRef = useRef(null);
  const [mode, setMode] = useState('personal');
  const swapMode = (newMode) => {
    // 1️⃣ Reset scroll to the top of this section
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        block: 'start',
        behavior: 'auto'   // instant jump; use 'smooth' if you want a smooth scroll
      });
    }

    // 2️⃣ Then swap the mode (with View Transition if available)
    if (
      typeof document !== 'undefined' &&
      'startViewTransition' in document
    ) {
      // @ts-ignore
      document.startViewTransition(() => setMode(newMode));
    } else {
      setMode(newMode);
    }
  };

  function toggleIndex(i) {
    if (allowMultiple) {
      // multiple: toggle in/out of the array
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      // single: either clear or only keep this one
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [openIndexes]);

  return (
    <section ref={sectionRef} className="px-[7vw] max-sm:py-[15%] w-full h-fit bg-white relative max-md:py-[7%] hidden max-md:block ">
      <div className="h-[5vh] relative w-full">

        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
          {/* The moving pill */}
          <motion.div
            className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300"
            style={{ translateX: mode === 'personal' ? '0%' : '97%' }}
          />

          {/* Buttons */}
          <button
            onClick={() => swapMode('personal')}
            className={`relative z-10 px-[10vw] py-[2.5vw] rounded-full transition-colors ${mode === 'personal' ? 'text-white' : ''
              }`}
          >
            Personal
          </button>
          <button
            onClick={() => swapMode('business')}
            className={`relative z-10 px-[10vw] py-[2.5vw] rounded-full transition-colors ${mode === 'business' ? 'text-white' : ''
              }`}
          >
            Business
          </button>
        </div>
      </div>

      <div className="w-full space-y-[2vw] max-sm:pt-[20vw] max-md:pt-[10vw]">
        {controlContent.map((f, i) => (
          <Accordion
            key={i}
            index={i}
            mode={mode}
            // src={f.src}
            iconText={mode == "personal" ? f.personalIconText : f.businessIconText}
            color={f.color}
            contentImg={mode == "personal" ? f.personalImg : f.businessImg}
            contentLink={mode == "personal" ? f.personalLink : f.businessLink}
            contenTitle={mode == "personal" ? f.PersonalTitle : f.BusinessTitle}
            content={mode == "personal" ? f.contentPersonal : f.contentBusiness}
            isOpen={openIndexes.includes(i)}
            onToggle={() => toggleIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Accordion({
  contenTitle,
  content,
  contentImg,
  contentLink,
  isOpen,
  onToggle,
  iconText,
  index,
  mode


}) {
  return (
    <div className={`w-full group overflow-hidden ${index > 4 && mode == 'personal' ? "hidden" : ""}`}>
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[7vw] flex items-start justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex justify-between">
            <h3 className="max-sm:text-[8.5vw] font-display capitalize max-md:text-[5.5vw] text-left">
              {iconText}
            </h3>
            <div
              className={`max-sm:w-[13vw] max-sm:h-[12vw] border border-primary relative flex items-center justify-center max-sm:rounded-[3vw] transition-all duration-500 max-md:w-[9vw] max-md:h-[8vw] max-md:rounded-[1.5vw] ${isOpen ? "bg-primary" : "bg-white"}`}
            >
              <span className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${isOpen ? "!rotate-45 bg-white " : "bg-primary"}`} />
              <span className={` absolute block  w-[1.5px] max-sm:h-[5.5vw] transition-all duration-500 max-md:h-[4vw] ${isOpen ? "rotate-[135deg] bg-white" : "rotate-90 bg-primary"}`} />
            </div>
          </div>
        </button>

        <AnimatePresence initial={false} >
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onAnimationComplete={() => {
                ScrollTrigger.refresh();
              }}
              className="overflow-hidden"
            >
              <div className="w-full flex flex-col max-sm:gap-[2vw] max-sm:pb-[10vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="max-sm:w-auto max-sm:h-[80vw] max-md:w-[45%] max-md:h-[50vw] max-md:ml-[-10vw] max-sm:ml-0">
                  <Image
                    src={contentImg}
                    alt=""
                    width={600}
                    height={900}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full">
                  <h3 className="max-sm:text-[7.5vw] capitalize font-medium font-display max-md:text-[5.5vw] text-left">
                    {contenTitle}
                  </h3>
                </div>
                <div
                  className='py-4 space-y-[4vw]'
                  dangerouslySetInnerHTML={{ __html: content }}
                />
                <div className="w-full">
                  <LinkButton text={"Learn More"} href={contentLink} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-black/20" />
      </div>
    </div>
  );
}
