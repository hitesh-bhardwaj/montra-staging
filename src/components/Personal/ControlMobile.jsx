"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "../Buttons";

const controlContent = [
  {
    src: "/assets/images/personal/personal-icon-1.svg",
    iconText: "banking",
    color: "text-[#FF8100]",
    contenTitle: "Do More with Your Money. Spend and Earn Rewards",
    contentImg: "/assets/images/personal/Banking.png",
    link: "/personal/banking",
    content:"<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1.5vw]'><li>Open a Montra Account, get your free virtual debit card, and start earning rewards when you spend.</li><li>Link your existing bank accounts on the Montra App and manage all your payments in one place — one app for all your bank accounts. </li></ul>",
  },
  {
    src: "/assets/images/personal/personal-icon-5.svg",
    question: "Is Montra licensed?",
    iconText: "payments",
    color: "text-primary",
    contenTitle: "Make Fast, Flexible & Secure Payments",
    contentImg: "/assets/images/personal/Payment.png",
    link: "/personal/payments",
    content:"<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1.5vw]'><li>Enjoy multiple payment methods using your Montra Account, Linked Bank Accounts, Cards, or even via Installments.</li><li>Scan & Pay instantly at Merchants stores</li><li>Every transaction is protected with a Montra PIN and Soft Token authentication.</li></ul><p>With Montra, managing your money is fast, secure, and always in your control.</p>",
  },
  {
    src: "/assets/images/personal/personal-icon-2.svg",
    question: "What is unique about Montra?",
    iconText: "finance",
    color: "text-[#35C771]",
    contenTitle: "Invest, Insure & Borrow with Montra",
    contentImg: "/assets/images/personal/Finance.png",
    link: "/personal/finance",
    content:"<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1.5vw]'><li>Access loans, buy insurance, and invest—all from one powerful app.</li><li>View your transactions in real-time and monitor your financial activity.</li><li>Get intelligent insights to help you plan, save, and spend wisely.</li></ul>",
  },
  {
    src: "/assets/images/personal/personal-icon-4.svg",
    question: "How do we Sign-Up on Montra?",
    iconText: "chat",
    color: "text-[#FB2F55]",
    contenTitle: "Send Money like a Message",
    contentImg: "/assets/images/personal/Chat.png",
    link: "/personal/chat",
    content:"<ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1.5vw]'><li>Turn conversations into transactions </li><li>Send, Request Payments while you chat and receive instant payment confirmations </li><li>Secure & Instant—no app-switching!</li></ul>",
  },
  {
    src: "/assets/images/personal/personal-icon-3.svg",
    question: "How do we Sign-In on Montra?",
    iconText: "Shop",
    color: "text-[#111111]",
    contenTitle: "Montra Shop: Discover. Compare. Pay Smarter.",
    contentImg: "/assets/images/personal/Shop.png",
    link: "/personal/shop",
    content:"<p>Your everyday shopping, powered by Montra:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1.5vw]'><li><span class='font-semibold'>Browse products & deals</span> right within the Montra app</li><li><span class='font-semibold'>Compare prices across partners</span> for better value</li><li><span class='font-semibold'>Instant payment checkout</span> using Montra’s multiple payment options</li><li><span class='font-semibold'>Earn rewards & track purchases</span> with ease</li></ul><p>Shop confidently, pay flexibly</p>",
  },
];

export default function Control({ allowMultiple = false }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([0]);

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
    <section className="px-[7vw] py-[6vw] w-full hidden max-md:block ">
      <div className="flex flex-col items-center max-sm:gap-[15vw] max-md:gap-[7vw]">
        <h2 className="font-display font-medium max-sm:text-[11.5vw] leading-[1.2] max-md:text-[7.5vw]">
          Take Control of Your Finances. Effortlessly.
        </h2>
        <div className="w-full max-sm:space-y-[2vw] max-md:space-y-0">
          {controlContent.map((f, i) => (
            <Accordion
              key={i}
              src={f.src}
              iconText={f.iconText}
              color={f.color}

              contentImg={f.contentImg}
              contentLink={f.link}
              contenTitle={f.contenTitle}
              content={f.content}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
            />
          ))}
        </div>
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
  src,
  iconText,
  color,
}) {
  return (
    <div className="w-full group overflow-hidden ">
      <div className="w-full mr-auto bg-white ">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full max-sm:py-[5vw] flex items-center justify-between max-md:py-[2.5vw]"
        >
          <div className="w-full flex gap-[6vw] items-center">
            <div className="max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw]">
              <Image
                src={src}
                alt="perosnal-icons"
                className="w-full h-full object-contain"
                height={200}
                width={200}
              />
            </div>
            <div
              className={`max-sm:text-[11vw] font-display uppercase font-bold max-md:text-[5.5vw] ${color}`}
            >
              {iconText}
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
              <div className="w-full flex flex-col gap-[5vw] pb-[10vw]">
                <div className="w-[80%] mx-auto max-sm:h-[100vw] max-md:h-[50vw]">
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
                     <div className="w-full max-sm:space-y-[2vw] max-sm:my-[5vw] " dangerouslySetInnerHTML={{__html:content}}/>
                <LinkButton text={"Learn More"} href={contentLink} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-black/20" />
      </div>
    </div>
  );
}
