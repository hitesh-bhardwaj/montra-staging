'use client'

import gsap from "gsap";
import { useScroll, useTransform, motion, easeOut } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Device type hook
const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState("desktop");

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            if (width < 541) {
                setDeviceType("mobile");
            } else if (width >= 541 && width < 1024) {
                setDeviceType("tablet");
            } else {
                setDeviceType("desktop");
            }
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return deviceType;
};

const icons = [
    {
        poster: '/assets/images/homepage/image-1.png',
        src: "/assets/images/homepage/feature-vid-3.mp4",
        alt: "Receive",
        style: { top: "20%", left: "30%" },
        tabletStyle: { top: "22%", left: "28%" },
        mobileStyle: { top: "20%", left: "30%" },
        xOffset: -300,
        yOffset: -200,
        tabletxOffset: -100,
        tabletyOffset: -350,
        mobilexOffset: -70,
        mobileyOffset: -250,
    },
    {
        poster: '/assets/images/homepage/image-2.webp',
        src: "/assets/images/homepage/feature-vid-6.mp4",
        alt: "Pay",
        style: { top: "15%", left: "30%" },
        tabletStyle: { top: "18%", left: "15%" },
        mobileStyle: { top: "10%", left: "30%" },
        xOffset: -450,
        yOffset: 100,
        tabletxOffset: -100,
        tabletyOffset: 0,
        mobilexOffset: -90,
        mobileyOffset: -10,
    },
    {
        poster: '/assets/images/homepage/image-3.png',
        src: "/assets/images/homepage/feature-vid-4.mp4",
        alt: "Currency",
        style: { bottom: "40%", left: "30%" },
        tabletStyle: { bottom: "42%", left: "35%" },
        mobileStyle: { bottom: "40%", left: "30%" },
        xOffset: -350,
        yOffset: 150,
        tabletxOffset: -200,
        tabletyOffset: 150,
        mobilexOffset: -70,
        mobileyOffset: 100,
    },
    {
        poster: '/assets/images/homepage/image-4.webp',
        src: "/assets/images/homepage/video-4.mp4",
        alt: "Scan",
        style: { top: "10%", right: "30%" },
        tabletStyle: { top: "20%", right: "25%" },
        mobileStyle: { top: "40%", right: "30%" },
        xOffset: 300,
        yOffset: -100,
        tabletxOffset: 150,
        tabletyOffset: -200,
        mobilexOffset: 40,
        mobileyOffset: 140,
    },
    {
        poster: '/assets/images/homepage/image-6.png',
        src: "/assets/images/homepage/feature-vid-2.mp4",
        alt: "Receive",
        style: { top: "30%", right: "25%" },
        tabletStyle: { top: "32%", right: "28%" },
        mobileStyle: { top: "20%", right: "30%" },
        xOffset: 400,
        yOffset: 50,
        tabletxOffset: 250,
        tabletyOffset: 0,
        mobilexOffset: 70,
        mobileyOffset: -250,
    },
    {
        poster: '/assets/images/homepage/image-5.webp',
        src: "/assets/images/homepage/feature-vid-1.mp4",
        alt: "Pay",
        style: { bottom: "35%", right: "35%" },
        tabletStyle: { bottom: "30%", right: "28%" },
        mobileStyle: { bottom: "20%", right: "30%" },
        xOffset: 400,
        yOffset: 150,
        tabletxOffset: 100,
        tabletyOffset: 100,
        mobilexOffset: 90,
        mobileyOffset: -140,
    },
    {
        poster: '/assets/images/homepage/image-5.webp',
        src: "/assets/images/homepage/feature-vid-5.mp4",
        alt: "Pay",
        style: { top: "35%", right: "35%" },
        tabletStyle: { top: "30%", right: "28%" },
        mobileStyle: { top: "20%", right: "30%" },
        xOffset: -50,
        yOffset: -390,
        tabletxOffset: 100,
        tabletyOffset: 100,
        mobilexOffset: 90,
        mobileyOffset: -80,
    },
];

const container = {
    hidden: {},
};

const item = {
    hidden: ({ x = 0, y = 0 }) => ({ x, y }),
    visible: ({ xOffset, yOffset }) => ({
        x: xOffset,
        y: yOffset,
        transition: {
            duration: 2,
            ease: easeOut,
        },
    }),
};

const FeatureSection = () => {
    const sectionRef = useRef(null);
    const deviceType = useDeviceType();
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".phone-mockup-desktop", {
                opacity: 0,
                yPercent: 10,
                delay: 4.2,
            })
        })
        return () => ctx.revert()
    }, [])
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const startValue = deviceType === "desktop"
        ? "-10%"
        : deviceType === "tablet"
            ? "-50%"
            : "-35";

    const endValue = deviceType === "desktop"
        ? "10%"
        : deviceType === "tablet"
            ? "-18%"
            : "-0%";

    const y = useTransform(scrollYProgress, [0, 0.45], [startValue, endValue]);

    return (
        <motion.section
            ref={sectionRef}
            className="w-screen h-full flex items-end justify-center relative max-sm:pt-[50vw] max-md:pt-[20vw]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div className="relative inline-block z-[99] w-[45vw] h-[52vw] max-sm:translate-y-0 max-sm:w-[100vw] max-sm:h-[120vw] max-md:w-[85vw] max-md:h-[80vw] mockup-container">
                <motion.div className="h-[110%]" style={{ y }}>
                    <div className="relative translate-x-[-10%] max-md:translate-x-[-4%] max-sm:translate-x-[-10%]">
                        <Image
                            src="/assets/images/homepage/hand-mockup-phone.png"
                            alt="App mockup"
                            width={800}
                            height={1000}
                            className="opacity-0 loader-phonemockup object-contain z-[9999] absolute w-[40vw] h-auto top-0 left-0 max-md:opacity-100 max-md:w-[70vw] max-sm:w-[90vw]"
                        />
                        <Image
                            src="/assets/images/homepage/hand-mockup-hand.png"
                            alt="App mockup"
                            width={800}
                            height={1000}
                            className="phone-mockup-desktop object-contain absolute w-[40vw] h-auto top-0 left-0 max-md:w-[70vw] max-sm:w-[90vw]"
                        />
                    </div>
                </motion.div>
                {icons.map((icon, i) => {
                    const style =
                        deviceType === "mobile"
                            ? icon.mobileStyle
                            : deviceType === "tablet"
                                ? icon.tabletStyle
                                : icon.style;

                    const offsets =
                        deviceType === "mobile"
                            ? { xOffset: icon.mobilexOffset, yOffset: icon.mobileyOffset }
                            : deviceType === "tablet"
                                ? { xOffset: icon.tabletxOffset, yOffset: icon.tabletyOffset }
                                : { xOffset: icon.xOffset, yOffset: icon.yOffset };

                    return (
                        <motion.div
                            key={i}
                            className="absolute w-[10vw] h-[10vw] rounded-[2.5vw] overflow-hidden max-sm:w-[25vw] max-sm:h-[25vw] max-md:w-[15vw] max-md:h-[15vw] max-md:rounded-[4vw] max-sm:rounded-[7vw]"
                            style={style}
                            variants={item}
                            custom={offsets}
                        >
                            <video
                                poster={icon.poster}
                                src={icon.src}
                                alt={icon.alt}
                                muted
                                loop
                                autoPlay
                                playsInline
                                className="h-full w-full object-cover scale-[1.02] max-md:scale-[1.03]"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default FeatureSection;
