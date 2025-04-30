"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const controlContent = [
  {
    src: "/assets/images/personal/personal-icon-1.png",
    iconText:"banking",
    color:"text-[#FF8100]",
    contenTitle:"",
    contentImg:"",
    link:"/",
    content:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    src: "/assets/images/personal/personal-icon-5.png",
    question: "Is Montra licensed?",
    iconText:"payments",
    color:"text-primary",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    src: "/assets/images/personal/personal-icon-2.png",
    question: "What is unique about Montra?",
    iconText:"finance",
    color:"text-[#35C771]",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
  {
    src: "/assets/images/personal/personal-icon-4.png",
    question: "How do we Sign-Up on Montra?",
    iconText:"chat",
    color:"text-[#FB2F55]",
    
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
  },
  {
    src: "/assets/images/personal/personal-icon-3.png",
    question: "How do we Sign-In on Montra?",
    iconText:"Shop",
    color:"text-[#111111]",
    answer:
      "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
  },
];

export default function Control({ allowMultiple = false }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([]);

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
    <section className="px-[5vw] py-[6vw] w-full">
      <div className="flex flex-col items-center gap-[15vw]">
        <h2 className="font-display font-medium text-[11.5vw] leading-[1.2]">
          Take Control of Your Money. Effortlessly.
        </h2>
        <div className="w-full space-y-[2vw]">
          {controlContent.map((f, i) => (
            <Accordion
              key={i}
              src={f.src}
              iconText={f.iconText}
              color={f.color}
              question={f.question}
              answer={f.answer}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ question, answer, isOpen, onToggle ,src ,iconText,color}) {
  return (
    <div className="w-full group overflow-hidden">
      <div className="w-full mr-auto bg-white  px-[3vw]">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full py-[4vw] flex items-center justify-between"
        >
          <div className="w-full flex gap-[6vw] items-center">
            <div className="w-[15vw] h-[15vw]">
              <Image
                src={src}
                alt="perosnal-icons"
                className="w-full h-full object-contain"
                height={200}
                width={200}
              />
            </div>
            <div className={`text-[11vw] font-display uppercase font-bold ${color}`}>
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="pb-[1.5vw] w-4/5">
                <p>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full h-[1px] bg-black/20" />
      </div>
    </div>
  );
}
