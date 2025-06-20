"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "../Buttons";

const controlContent = [
  {
    src: "/assets/images/personal/personal-icon-1.png",
    iconText: "banking",
    color: "text-[#FF8100]",
    contenTitle: "Do More with your money. Spend & earn rewards",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/banking",
    content: [
      "Open a Montra Account and get a virtual Montra Card issued instantly.",
      "You can also link your existing Bank accounts on Montra App",
      " Now you can start making payments using your Montra or Linked Bank accounts and earn exciting rewards.",
    ],
  },
  {
    src: "/assets/images/personal/personal-icon-5.png",
    question: "Is Montra licensed?",
    iconText: "payments",
    color: "text-primary",
    contenTitle: "Do More with your money. Spend & earn rewards",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/payments",
    content: [
      "Open a Montra Account and get a virtual Montra Card issued instantly.",
      "You can also link your existing Bank accounts on Montra App",
      " Now you can start making payments using your Montra or Linked Bank accounts and earn exciting rewards.",
    ],
  },
  {
    src: "/assets/images/personal/personal-icon-2.png",
    question: "What is unique about Montra?",
    iconText: "finance",
    color: "text-[#35C771]",
    contenTitle: "Do More with your money. Spend & earn rewards",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/finance",
    content: [
      "Open a Montra Account and get a virtual Montra Card issued instantly.",
      "You can also link your existing Bank accounts on Montra App",
      " Now you can start making payments using your Montra or Linked Bank accounts and earn exciting rewards.",
    ],
  },
  {
    src: "/assets/images/personal/personal-icon-4.png",
    question: "How do we Sign-Up on Montra?",
    iconText: "chat",
    color: "text-[#FB2F55]",
    contenTitle: "Do More with your money. Spend & earn rewards",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/chat",
    content: [
      "Open a Montra Account and get a virtual Montra Card issued instantly.",
      "You can also link your existing Bank accounts on Montra App",
      " Now you can start making payments using your Montra or Linked Bank accounts and earn exciting rewards.",
    ],
  },
  {
    src: "/assets/images/personal/personal-icon-3.png",
    question: "How do we Sign-In on Montra?",
    iconText: "Shop",
    color: "text-[#111111]",
    contenTitle: "Do More with your money. Spend & earn rewards",
    contentImg: "/assets/images/personal/personal-control-img-1.png",
    link: "/personal/shop",
    content: [
      "Open a Montra Account and get a virtual Montra Card issued instantly.",
      "You can also link your existing Bank accounts on Montra App",
      " Now you can start making payments using your Montra or Linked Bank accounts and earn exciting rewards.",
    ],
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
                <div className="w-[80%] max-sm:h-[100vw] max-md:h-[50vw]">
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
                <ul className="list-disc pl-[4vw] space-y-[2vw] mb-[2vw]">
                  {content.map((content, idx) => (
                    <li key={idx}>{content}</li>
                  ))}
                </ul>
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
