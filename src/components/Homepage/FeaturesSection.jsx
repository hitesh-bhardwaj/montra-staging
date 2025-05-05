'use client'

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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


const icons = [
    {
        src: "/assets/images/homepage/image-1.png",
        alt: "Receive",
        style: { top: "30%", left: "15%" },
        mobileStyle: { top: "20%", left: "10%" },
        mobilexOffset:0,
        mobileyOffset:-200,
        xOffset: -300,
        yOffset: -100,
    },
    {
        src: "/assets/images/homepage/image-2.png",
        alt: "Pay",
        style: { top: "30%", right: "15%" },
        mobileStyle: { top: "20%", right: "10%" },
        mobilexOffset:+10,
        mobileyOffset:-140,
        xOffset: +400,
        yOffset: -50,
    },
    {
        src: "/assets/images/homepage/image-3.png",
        alt: "Currency",
        style: { bottom: "20%", left: "20%" },
        mobileStyle: { bottom: "40%", left: "10%" },
        mobilexOffset:-20,
        mobileyOffset:+180,
        xOffset: -450,
        yOffset: +50,
    },
    {
        src: "/assets/images/homepage/image-4.png",
        alt: "Scan",
        style: { bottom: "30%", right: "20%" },
        mobileStyle: { bottom: "40%", right: "10%" },
        mobilexOffset:+40,
        mobileyOffset:+140,
        xOffset: +380,
        yOffset: +100,
    },
];

const container = {
    hidden: {},
};

const item = {
    hidden: ({
        x: 0,
        y: 0,
    }),
    visible: ({ xOffset, yOffset }) => ({
        x: xOffset,
        y: yOffset,
        transition: {
            duration: 3,
            ease: easeOut,
        },
    }),
}

const FeatureSection = () => {
      const isMobile = useIsMobile();

    return (
        <motion.section
            className="w-full h-full flex items-end justify-center relative overflow-hidden bg-white  pt-[2vw] max-sm:pt-[50vw] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div
                className="relative inline-block z-10 w-[55vw] h-[52vw] translate-y-[-15%] max-sm:translate-y-0  max-sm:w-[100vw] max-sm:h-[120vw]"
            >
                <Image
                    src="/assets/images/homepage/phone-mockup.png"
                    alt="App mockup"
                    width={600}
                    height={900}
                    className="w-full h-auto block max-sm:translate-x-0 max-sm:object-cover max-sm:w-[120vw] max-sm:h-[130vw]"
                />
                {icons.map((icon, i) => (
                    isMobile? <motion.img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    className="absolute w-[10vw] h-[10vw] object-contain max-sm:w-[25vw] max-sm:h-[25vw]"
                    style={icon.mobileStyle}
                    custom={{ xOffset: icon.mobilexOffset, yOffset: icon.mobileyOffset }}
                    variants={item}
                />:
                    <motion.img
                        key={i}
                        src={icon.src}
                        alt={icon.alt}
                        className="absolute w-[10vw] h-[10vw] object-contain max-sm:w-[25vw] max-sm:h-[25vw]"
                        style={icon.style}
                        custom={{ xOffset: icon.xOffset, yOffset: icon.yOffset }}
                        variants={item}
                    />
                ))}
            </div>
        </motion.section>
    );
}

export default FeatureSection;