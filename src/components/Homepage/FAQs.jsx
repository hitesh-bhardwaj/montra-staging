'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqContent = [
    {
        question: 'What is Montra?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
        question: 'Is Montra licensed?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
        question: 'What is unique about Montra?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
        question: 'How do we Sign-Up on Montra?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM. Choosing between different options such as online banking.",
    },
    {
        question: 'How do we Sign-In on Montra?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
    {
        question: 'Is enabling Face / Touch / Fingerprint ID safe?',
        answer:
            "Choosing between different options such as online banking, mobile apps, in-person transfers at a bank branch, or using a bank's ATM.",
    },
]

export default function FAQs({ allowMultiple = false }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([])

  function toggleIndex(i) {
    if (allowMultiple) {
      // multiple: toggle in/out of the array
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      )
    } else {
      // single: either clear or only keep this one
      setOpenIndexes((prev) =>
        prev.includes(i) ? [] : [i]
      )
    }
  }

  return (
    <section className="px-[4vw] py-[6vw] w-full">
      <div className="flex flex-col items-center gap-[4vw]">
        <h2 className="font-display font-medium text-[5.7vw] text-center leading-[1.2]">
          Frequently Asked Questions
        </h2>
        <div className="w-4/5 space-y-[2vw]">
          {faqContent.map((f, i) => (
            <Accordion
              key={i}
              question={f.question}
              answer={f.answer}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Accordion({ question, answer, isOpen, onToggle }) {
  return (
    <div className="w-full group overflow-hidden">
      <div className="w-[90%] mr-auto bg-white border border-gray rounded-3xl px-[3vw]">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full py-[2vw] flex items-center justify-between"
        >
          <h4 className="text-[1.9vw] text-left leading-[1.2]">
            {question}
          </h4>
          <div
            className={`
              bg-primary absolute h-full right-0 duration-400 transition-transform
              -z-10 w-[15vw] flex items-center justify-end rounded-3xl top-0
              ${isOpen ? 'translate-x-[10vw]' : 'group-hover:translate-x-[10vw]'}
            `}
          >
            <span
              className={`
                relative mr-[3.5vw] flex items-center justify-center
                duration-400 ${isOpen ? 'rotate-45' : ''}
              `}
            >
              <span className="bg-white absolute block h-[2vw] w-[1.5px]" />
              <span className="bg-white absolute block h-[2vw] w-[1.5px] rotate-90" />
            </span>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="pb-[1.5vw] w-4/5">
                <p>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
