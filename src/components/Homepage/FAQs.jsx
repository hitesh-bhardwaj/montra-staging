"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Heading from '../Heading';
import { FAQJSONLD } from '@/lib/json-ld';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function FAQs({ allowMultiple = false, content }) {
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
    <>
      <FAQJSONLD faqs={content} />
      <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-[#FBFBFB] relative max-sm:pb-[10%] max-sm:py-16">
        <div className="flex flex-col items-center gap-[5vw] max-sm:gap-[10vw] max-md:justify-center max-sm:items-start">
          <Heading>
            <h2 className="font-display font-medium text-[5.7vw] text-center leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-md:text-[7.5vw]">
              Frequently Asked Questions
            </h2>
          </Heading>
          <div className="w-4/5 space-y-[2vw] max-sm:w-full max-sm:space-y-[5vw] max-md:w-[90%] max-md:py-[3vw] max-md:space-y-[3vw]">
            {content.map((f, i) => (
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
    </>
  )
}

function Accordion({ question, answer, isOpen, onToggle }) {
  return (
    <div className="w-full group overflow-hidden relative z-[10] fadeupanim">
      <div className="w-[90%] mr-auto bg-white  overflow-hidden border border-gray rounded-3xl px-[3vw] max-sm:w-full max-sm:pl-[6vw] max-sm:py-[2vw] max-sm:rounded-[4.2vw] max-md:rounded-[3vw]  max-md:py-[2vw] max-md:w-full">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className=" cursor-pointer  w-full h-full py-[2vw] flex items-center justify-between "
        >
          <h5 className="text-[1.9vw] text-left leading-[1.2] max-sm:text-[5vw] max-sm:w-8/10 max-md:text-[3vw] max-md:w-[80%]">
            {question}
          </h5>
          <div
            className={`
              bg-primary absolute h-[6.5vw] right-0 duration-400 transition-all max-sm:bg-transparent max-sm:border max-sm:border-primary max-sm:justify-center max-sm:w-h-8 max-sm:static max-sm:h-8
              z-[-1] w-[15vw] flex items-center justify-end rounded-3xl top-0 max-sm:z-[10] max-sm:rounded-[2vw] -translate-x-[10vw] max-sm:translate-x-0 max-md:translate-x-0 max-md:z-[10] max-md:static max-md:h-[8vw] max-md:w-[8vw] max-md:border max-md:border-primary max-md:bg-transparent max-md:justify-center max-md:rounded-[2vw]
              ${isOpen ? 'translate-x-0 max-sm:translate-x-0 max-sm:!bg-primary max-md:!bg-primary max-md:translate-x-0 ' : 'group-hover:translate-x-0'}
            `}
          >
            <span
              className={`
                relative mr-[4vw] flex items-center justify-center max-sm:mr-0 max-md:mr-0
                duration-400 ${isOpen ? 'rotate-45' : ''}
              `}
            >
              <span className={`bg-white absolute block h-[2vw] w-[1.5px] max-sm:h-4 duration-400 transition-all max-md:h-[3.5vw] ${isOpen ? "max-sm:bg-white max-md:bg-white" : "max-sm:bg-primary max-md:bg-primary"}`} />
              <span className={`bg-white absolute block h-[2vw] w-[1.5px] rotate-90 max-sm:bg-primary max-sm:h-4 duration-400 transition-all max-md:h-[3.5vw] ${isOpen ? "max-sm:bg-white max-md:bg-white" : "max-sm:bg-primary max-md:bg-primary"}`} />
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
              onAnimationComplete={() => {
                ScrollTrigger.refresh();
              }}
              className="overflow-hidden"
            >
              <div className="py-[1.5vw] pb-[3vw] w-[90%] max-sm:py-[8vw] max-sm:w-[90%] space-y-[1.5vw] max-sm:space-y-[2.5vw]" dangerouslySetInnerHTML={{ __html: answer }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
