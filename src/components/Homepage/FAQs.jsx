'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function FAQs({ allowMultiple = false , content}) {
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
    <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw]">
      <div className="flex flex-col items-center gap-[4vw] max-sm:gap-[10vw]">
        <h2 className="font-display font-medium text-[5.7vw] text-center leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left">
          Frequently Asked Questions
        </h2>
        <div className="w-4/5 space-y-[2vw] max-sm:w-full max-sm:space-y-[5vw]">
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
  )
}

function Accordion({ question, answer, isOpen, onToggle }) {
  return (
    <div className="w-full group overflow-hidden">
      <div className="w-[90%] mr-auto bg-white border border-gray rounded-3xl px-[3vw] max-sm:w-full max-sm:pl-[6vw] max-sm:py-[2vw] max-sm:rounded-[4.2vw]">
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          className="relative cursor-pointer w-full h-full py-[2vw] flex items-center justify-between"
        >
          <h4 className="text-[1.9vw] text-left leading-[1.2] max-sm:text-[5.2vw] max-sm:w-[70%]">
            {question}
          </h4>
          <div
            className={`
              bg-primary absolute h-full right-0 duration-400 transition-transform max-sm:bg-transparent max-sm:border max-sm:border-primary max-sm:justify-center max-sm:w-[12vw] max-sm:static max-sm:h-[10vw]
              z-[-1] w-[15vw] flex items-center justify-end rounded-3xl top-0 max-sm:z-[10] max-sm:rounded-[2vw]
              ${isOpen ? 'translate-x-[10vw] max-sm:translate-x-0' : 'group-hover:translate-x-[10vw]'}
            `}
          >
            <span
              className={`
                relative mr-[3.5vw] flex items-center justify-center max-sm:mr-0
                duration-400 ${isOpen ? 'rotate-45' : ''}
              `}
            >
              <span className="bg-white absolute block h-[2vw] w-[1.5px] max-sm:bg-primary max-sm:h-[5.5vw]" />
              <span className="bg-white absolute block h-[2vw] w-[1.5px] rotate-90 max-sm:bg-primary max-sm:h-[5.5vw]" />
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
              <div className="pb-[1.5vw] w-4/5 max-sm:py-[5vw]">
                <p>{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
