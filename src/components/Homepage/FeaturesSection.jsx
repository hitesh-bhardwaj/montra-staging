'use client'

import { useScroll, useTransform, motion, easeOut } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
        poster: '/assets/images/homepage/image-1.png',
        src: "/assets/images/homepage/video-1.mp4",
        alt: "Receive",
        style: { top: "20%", left: "30%" },
        mobileStyle: { top: "20%", left: "10%" },
        mobilexOffset: 0,
        mobileyOffset: -200,
        xOffset: -500,
        yOffset: -100,
    },
    {
        poster: '/assets/images/homepage/image-2.png',
        src: "/assets/images/homepage/video-2.mp4",
        alt: "Pay",
        style: { top: "15%", left: "10%" },
        mobileStyle: { top: "10%", left: "10%" },
        mobilexOffset: +10,
        mobileyOffset: -140,
        xOffset: -300,
        yOffset: 150,
    },
    {
        poster: '/assets/images/homepage/image-3.png',
        src: "/assets/images/homepage/video-3.mp4",
        alt: "Currency",
        style: { bottom: "40%", left: "30%" },
        mobileStyle: { bottom: "40%", left: "10%" },
        mobilexOffset: -20,
        mobileyOffset: +180,
        xOffset: -350,
        yOffset: 150,
    },
    {
        poster: '/assets/images/homepage/image-4.png',
        src: "/assets/images/homepage/video-4.mp4",
        alt: "Scan",
        style: { top: "10%", right: "30%" },
        mobileStyle: { top: "40%", right: "10%" },
        mobilexOffset: +40,
        mobileyOffset: +140,
        xOffset: +400,
        yOffset: 0,
    },
    {
        poster: '/assets/images/homepage/image-6.png',
        src: "/assets/images/homepage/video-6.mp4",
        alt: "Receive",
        style: { top: "30%", right: "25%" },
        mobileStyle: { top: "20%", right: "10%" },
        mobilexOffset: 0,
        mobileyOffset: -200,
        xOffset: +300,
        yOffset: 50,
    },
    {
        poster: '/assets/images/homepage/image-5.png',
        src: "/assets/images/homepage/video-5.mp4",
        alt: "Pay",
        style: { bottom: "35%", right: "35%" },
        mobileStyle: { bottom: "20%", right: "10%" },
        mobilexOffset: +10,
        mobileyOffset: -140,
        xOffset: 500,
        yOffset: 150,
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
            duration: 2,
            ease: easeOut,
        },
    }),
}

const FeatureSection = () => {

    const sectionRef = useRef(null);
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.7], ["-30%", "-10%"]);

    return (
        <motion.section
            ref={sectionRef}
            className="w-full h-full flex items-end justify-center relative max-sm:pt-[50vw] "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div
                className="relative inline-block z-10 w-[55vw] h-[52vw] max-sm:translate-y-0  max-sm:w-[100vw] max-sm:h-[120vw]"
            >
                <motion.div
                    className="overflow-hidden h-[110%]"
                    style={{ y }}
                >
                    <Image
                        id="hero-phone-image"
                        src="/assets/images/homepage/phone-mockup.png"
                        alt="App mockup"
                        width={1200}
                        height={1400}
                        className="w-full h-auto block max-sm:translate-x-0 max-sm:object-cover max-sm:w-[120vw] max-sm:h-[130vw]"
                    />
                </motion.div>
                {icons.map((icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[10vw] h-[10vw] rounded-[3vw] overflow-hidden max-sm:w-[25vw] max-sm:h-[25vw]"
                        style={isMobile ? icon.mobileStyle : icon.style}
                        variants={item}
                        custom={isMobile
                            ? { xOffset: icon.mobilexOffset, yOffset: icon.mobileyOffset }
                            : { xOffset: icon.xOffset, yOffset: icon.yOffset }
                        }
                    >
                        <video
                            poster={icon.poster}
                            src={icon.src}
                            alt={icon.alt}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default FeatureSection;