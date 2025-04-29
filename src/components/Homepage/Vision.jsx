'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Vision() {
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
            className="w-screen"
            style={{ height: `calc(100vh + ${TRAVEL}px)` }}
        >
            <div
                ref={stickyRef}
                className="sticky top-0 h-screen w-screen flex items-center justify-center overflow-hidden px-[4vw] py-[4vw]"
            >
                <h3 className="relative text-[5.7vw] font-display font-medium leading-[1.2] text-center w-3/4">
                    Building future of an Inclusive Financial Ecosystem
                </h3>

                <div className="absolute -top-[200%] inset-0 z-10 flex items-center justify-center gap-[2vw]">
                    {/* white = slower */}
                    <motion.div
                        style={{ y: yWhite }}
                        className="border border-gray-100 bg-white w-[28vw]
                       px-[2.5vw] pt-[5.5vw] pb-[4vw] rounded-[3vw] z-10"
                    >
                        <Image src={"/assets/icons/vision.svg"} alt="vision" width={100} height={100} className="mb-[3vw]" />
                        <h4 className="font-display font-medium text-[3.4vw] mb-[2vw]">Our Vision</h4>
                        <p>Offer innovative products and services in collaboration with other players in financial ecosystem, transforming lives & contributing to sustainable living in emerging economies</p>
                    </motion.div>

                    {/* blue = faster */}
                    <motion.div
                        style={{ y: yBlue }}
                        className="border border-gray-100 bg-primary text-white w-[28vw]
                       px-[2.5vw] pt-[5.5vw] pb-[4vw] rounded-[3vw] z-0"
                    >
                        <Image src={"/assets/icons/mission.svg"} alt="vision" width={100} height={100} className="mb-[3vw]" />
                        <h4 className="font-display font-medium text-[3.4vw] mb-[2vw]">Our Mission</h4>
                        <p>To make financial services simple, accessible, and inclusive—empowering individuals and businesses in emerging economies to thrive in a digital world</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


