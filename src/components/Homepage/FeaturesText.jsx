'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react';
import InfoCarouselSwiper from './InfoCarouselSwiper';

const items = [
    { icon: '/assets/images/homepage/pay.svg', label: 'BANKING', color: 'text-[#FF8100]' },
    { icon: '/assets/images/homepage/receive.svg', label: 'PAYMENTS', color: 'text-primary' },
    { icon: '/assets/images/homepage/sell.svg', label: 'MARKETPLACE', color: 'text-[#35C771]' },
    { icon: '/assets/images/homepage/borrow.svg', label: 'LOANS', color: 'text-black-1]' },
    { icon: '/assets/images/homepage/insaurance.svg', label: 'INSURANCE', color: 'text-[#7A78FF]' },
    { icon: '/assets/images/homepage/invest.svg', label: 'INVESTMENTS', color: 'text-[#FB2F55]' },
]

export default function PinnedRevealSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 80%', 'end start'],
    })

    const thresholds = [
        [0.00, 0.15],
        [0.10, 0.25],
        [0.20, 0.35],
        [0.30, 0.45],
        [0.40, 0.55],
    ]

    const transforms = thresholds.map(([from, to]) => ({
        opacity: useTransform(scrollYProgress, [from, to], [0, 1]),
        y: useTransform(scrollYProgress, [from, to], [300, 0]),
    }))

    const arrowTranslateX = useTransform(scrollYProgress, [0.45, 0.65], ['-100%', '0%'])
    const arrowScale = useTransform(scrollYProgress, [0.55, 0.75], [1, 4])

    const cardTransforms = ({
        opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
    })

    return (
        <section ref={ref} className="relative h-[600vh]" id='feature-text'>
            <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-[#FBFBFB]">
                {/* 1) Six HEADINGS */}
                <div className='flex flex-col justify-center items-center max-sm:gap-[4vw]'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="flex items-center space-x-[2vw] max-sm:space-x-[4vw]"
                    >
                        <img src={items[0].icon} alt={items[0].label} className="w-[4.5vw] h-[4.5vw] max-sm:w-[12vw] max-sm:h-[12vw]" />
                        <h2 className={`text-[5vw] font-bold font-display max-sm:text-[10.5vw] ${items[0].color}`}>
                            {items[0].label}
                        </h2>
                    </motion.div>
                    {items.slice(1).map((it, i) => (
                        <motion.div
                            key={it.label}
                            style={{
                                opacity: transforms[i].opacity,
                                y: transforms[i].y,
                            }}
                            className="flex items-center space-x-[2vw] max-sm:space-x-[4vw]"
                        >
                            <img src={it.icon} alt={it.label} className="w-[4.5vw] h-[4.5vw] max-sm:w-[12vw] max-sm:h-[12vw]" />
                            <h2 className={`text-[5vw] font-bold font-display max-sm:text-[10.5vw] ${it.color}`}>
                                {it.label}
                            </h2>
                        </motion.div>
                    ))}
                </div>

                {/* 2) ARROW SVG */}
                <motion.svg
                    style={{
                        scale: arrowScale,
                        translateX: arrowTranslateX,
                        transformOrigin: '0% 50%',
                    }}
                    className="absolute inset-0 w-auto h-full"
                    width="1459"
                    height="1073"
                    viewBox="0 0 1459 1073"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0.000976562 0.510742C84.1488 171.168 459.872 513.205 1289.6 516.178V516.176L1393.16 516.412L1399.45 481.279L1458.43 537.775L1379.49 592.722L1386.13 555.657L1289.75 556.808V556.821C459.917 559.754 84.1538 901.822 0.000976562 1072.49V0.510742Z" fill="#215CFF" />
                </motion.svg>

                {/* 3) INFO CARDS */}
                <motion.div
                    style={cardTransforms}
                    className="absolute inset-0 z-10 max-sm:top-[10%]">
                    <InfoCarouselSwiper />
                </motion.div>
            </div>
        </section>
    )
}



