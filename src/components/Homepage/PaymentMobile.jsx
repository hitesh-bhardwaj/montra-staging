"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "../Buttons";

const controlContent = [
  {
    src: "/assets/images/personal/personal-icon-1.png",
    iconText: "banking",
    color: "text-[#FF8100]",
    PersonalTitle: "Secure way of accessing World of Banking",
    BusinessTitle: "Business-grade Banking",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/banking",
    contentPersonal: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
    contentBusiness: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
  },
  {
    src: "/assets/images/personal/personal-icon-5.png",
    question: "Is Montra licensed?",
    iconText: "payment",
    color: "text-primary",
    PersonalTitle: "Secure way of accessing World of Banking",
    BusinessTitle: "Secure way of accessing World of Banking",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/payments",
    contentPersonal: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
    contentBusiness: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
  },
  {
    src: "/assets/images/personal/personal-icon-2.png",
    question: "What is unique about Montra?",
    iconText: "finance",
    color: "text-[#35C771]",
    PersonalTitle: "Secure way of accessing World of Banking",
    BusinessTitle: "Secure way of accessing World of Banking",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/finance",
    contentPersonal: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
    contentBusiness: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
  },
  {
    src: "/assets/images/personal/personal-icon-4.png",
    question: "How do we Sign-Up on Montra?",
    iconText: "chat",
    color: "text-[#FB2F55]",
    PersonalTitle: "Secure way of accessing World of Banking",
    BusinessTitle: "Secure way of accessing World of Banking",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/chat",
    contentPersonal: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
    contentBusiness: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
  },
  {
    src: "/assets/images/personal/personal-icon-3.png",
    question: "How do we Sign-In on Montra?",
    iconText: "Shop",
    color: "text-[#111111]",
    PersonalTitle: "Secure way of accessing World of Banking",
    BusinessTitle: "Secure way of accessing World of Banking",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/shop",
    contentPersonal: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
    contentBusiness: "Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.",
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

  return (
    <section ref={sectionRef} className="px-[7vw] max-sm:py-[15%] w-full bg-white relative max-md:py-[7%]">
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
            src={f.src}
            iconText={f.iconText}
            color={f.color}
            contentImg={f.contentImg}
            contentLink={f.link}
            contenTitle={f.PersonalTitle}
            content={f.contentPersonal}
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

}) {
  return (
    <div className="w-full group overflow-hidden">
      <div className="w-full mr-auto  ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:pt-[5vw] max-sm:pb-[7vw] flex items-center justify-between max-md:pt-[3vw] max-md:pb-[5vw]"
        >
          <div className="w-full flex justify-between">
            <h3 className="max-sm:text-[8.5vw] font-display capitalize max-md:text-[5.5vw]">
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

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="w-full flex flex-col max-sm:gap-[5vw] max-sm:pb-[10vw] max-md:items-center max-md:pb-[5vw] max-md:gap-[3vw]">
                <div className="max-sm:w-[80%] max-sm:h-[100vw] max-md:w-[45%] max-md:h-[50vw] max-md:ml-[-10vw] max-sm:ml-0">
                  <Image
                    src={contentImg}
                    alt=""
                    width={600}
                    height={900}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="max-sm:text-[7.5vw] capitalize font-medium font-display max-md:text-[5.5vw]">
                  {contenTitle}
                </h3>
                <p>{content}</p>
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
