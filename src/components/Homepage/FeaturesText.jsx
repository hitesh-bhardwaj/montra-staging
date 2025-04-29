'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react';
import InfoCarouselSwiper from './InfoCarouselSwiper'

const items = [
    { icon: '/assets/images/homepage/pay.svg', label: 'BANKING', color: 'text-[#FF8100]' },
    { icon: '/assets/images/homepage/receive.svg', label: 'PAYMENTS', color: 'text-primary' },
    { icon: '/assets/images/homepage/sell.svg', label: 'MARKETPLACE', color: 'text-[#35C771]' },
    { icon: '/assets/images/homepage/borrow.svg', label: 'LOANS', color: 'text-black-1]' },
    { icon: '/assets/images/homepage/insaurance.svg', label: 'INSAURANCE', color: 'text-[#7A78FF]' },
    { icon: '/assets/images/homepage/invest.svg', label: 'INVESTMENTS', color: 'text-[#FB2F55]' },
]

export default function PinnedRevealSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    const thresholds = [
        [0.00, 0.10],
        [0.10, 0.20], 
        [0.20, 0.30], 
        [0.30, 0.40], 
        [0.40, 0.50],
    ]

    const transforms = thresholds.map(([from, to]) => ({
        opacity: useTransform(scrollYProgress, [from, to], [0, 1]),
        y: useTransform(scrollYProgress, [from, to], [500, 0]),
    }))

    const arrowTranslateX = useTransform(scrollYProgress, [0.45, 0.65], ['-100%', '0%'])
    const arrowScale = useTransform(scrollYProgress, [0.55, 0.75], [0.5, 3])

    const cardTransforms = ({
        opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
    })

    return (
        <section ref={ref} className="relative h-[700vh]">
            <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-white">
                {/* 1) Six HEADINGS */}
                <div className='flex flex-col justify-center items-center'>
                    <motion.div 
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{duration: 1, ease: 'easeOut'}}
                        className="flex items-center space-x-[2vw]"
                        >
                        <img src={items[0].icon} alt={items[0].label} className="w-[4.5vw] h-[4.5vw]" />
                        <h2 className={`text-[5vw] font-bold font-display ${items[0].color}`}>
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
                            className="flex items-center space-x-[2vw]"
                        >
                            <img src={it.icon} alt={it.label} className="w-[4.5vw] h-[4.5vw]" />
                            <h2 className={`text-[5vw] font-bold font-display ${it.color}`}>
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
                        translateY: -100,
                        transformOrigin: '0% 50%',
                    }}
                    className="absolute inset-0 w-auto h-full"
                    viewBox="0 0 1920 458"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M493.609 357.726C157.996 379.701 -28.7361 432.154 -77.0137 457.957L-0.151009 0.332031C70.1186 59.6346 255.212 158.897 493.609 213.881C724.251 267.076 1023.35 270.209 1161.2 268.267H1855.46L1861.05 238.716L1920 295.299L1841.46 350.416L1846.66 322.049H1508.13L1192.8 325.264C1099.58 326.928 829.223 335.752 493.609 357.726Z"
                        fill="#215CFF"
                    />
                </motion.svg>

                {/* 3) INFO CARDS */}
                <motion.div
                    style={cardTransforms}
                    className="absolute inset-0 z-10">
                    <InfoCarouselSwiper />
                </motion.div>
            </div>
        </section>
    )
}



