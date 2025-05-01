'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const useIsMobile = (breakpoint = 541) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
};


export default function Vision() {
    const isMobile = useIsMobile();
    const TRAVEL = 1500;
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    const yWhite = useTransform(scrollYProgress, [0, 1], [TRAVEL, 300]);
    const yBlue = useTransform(scrollYProgress, [0, 1], [TRAVEL, 0]);

    return (
        <section
            ref={sectionRef}
            className="w-screen max-sm:!h-full max-sm:py-[15%]"
            style={{ height: `calc(100vh + ${TRAVEL}px)` }}
        >
            <div
                ref={stickyRef}
                className="sticky top-0 h-screen w-screen flex items-center justify-center overflow-hidden px-[4vw] py-[4vw] max-sm:h-full max-sm:flex-col max-sm:gap-[10vw]" 
            >
                <h3 className="relative text-[5.7vw] font-display font-medium leading-[1.2] text-center w-3/4  max-sm:text-left max-sm:text-[10.5vw] max-sm:w-[95%]">
                    Building future of an Inclusive Financial Ecosystem
                </h3>

                <div className="absolute -top-[200%] inset-0 z-10 flex items-center justify-center gap-[2vw] max-sm:static max-sm:flex-col max-sm:items-start">
                    {/* white = slower */}
                    <motion.div
                        style={{ y: isMobile?0:yWhite }}
                        className="border border-gray-100 bg-white w-[28vw] max-sm:w-[90vw] max-sm:px-[5vw]  max-sm:py-[10vw]
                       px-[2.5vw] pt-[5.5vw] pb-[4vw] rounded-[3vw] z-10 max-sm:rounded-[7vw]"
                    >
                        <Image src={"/assets/icons/vision.svg"} alt="vision" width={100} height={100} className="mb-[3vw] max-sm:mb-[12vw] max-sm:w-[16vw] max-sm:h-[16vw]" />
                        <h4 className="font-display font-medium text-[3.4vw] mb-[2vw] max-sm:text-[8vw] max-sm:mb-[6vw]">Our Vision</h4>
                        <p>Offer innovative products and services in collaboration with other players in financial ecosystem, transforming lives & contributing to sustainable living in emerging economies</p>
                    </motion.div>

                    {/* blue = faster */}
                    <motion.div
                        style={{ y: isMobile?0:yBlue }}
                        className="border border-gray-100 bg-primary text-white w-[28vw] max-sm:w-[90vw] max-sm:px-[5vw] max-sm:rounded-[7vw]
                       px-[2.5vw] pt-[5.5vw] pb-[4vw] rounded-[3vw] z-0"
                    >
                        <Image src={"/assets/icons/mission.svg"} alt="vision" width={100} height={100} className="mb-[3vw] max-sm:w-[16vw] max-sm:h-[16vw]" />
                        <h4 className="font-display font-medium text-[3.4vw] mb-[2vw] max-sm:text-[8.5vw]">Our Mission</h4>
                        <p>To make financial services simple, accessible, and inclusive—empowering individuals and businesses in emerging economies to thrive in a digital world</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


