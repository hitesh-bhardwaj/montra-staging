'use client'

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
        src: "/assets/images/homepage/video-1.mp4",
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
        poster: '/assets/images/homepage/image-2.png',
        src: "/assets/images/homepage/video-2.mp4",
        alt: "Pay",
        style: { top: "15%", left: "30%" },
        tabletStyle: { top: "18%", left: "15%" },
        mobileStyle: { top: "10%", left: "30%" },
        xOffset: -500,
        yOffset: 100,
        tabletxOffset: -100,
        tabletyOffset: 0,
        mobilexOffset: -90,
        mobileyOffset: -10,
    },
    {
        poster: '/assets/images/homepage/image-3.png',
        src: "/assets/images/homepage/video-3.mp4",
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
        poster: '/assets/images/homepage/image-4.png',
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
        src: "/assets/images/homepage/video-6.mp4",
        alt: "Receive",
        style: { top: "30%", right: "25%" },
        tabletStyle: { top: "32%", right: "28%" },
        mobileStyle: { top: "20%", right: "30%" },
        xOffset: 400,
        yOffset: 50,
        tabletxOffset: 250,
        tabletyOffset: 0,
        mobilexOffset: 70,
        mobileyOffset: -200,
    },
    {
        poster: '/assets/images/homepage/image-5.png',
        src: "/assets/images/homepage/video-5.mp4",
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

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 0.45], ["-30%", "-9%"]);

    return (
        <motion.section
            ref={sectionRef}
            className="w-screen h-full flex items-end justify-center relative max-sm:pt-[50vw]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div className="relative inline-block z-10 w-[55vw] h-[52vw] max-sm:translate-y-0 max-sm:w-[100vw] max-sm:h-[120vw] max-md:w-[80vw] max-md:h-[80vw]">
                <motion.div className="overflow-hidden h-[110%]" style={{ y }}>
                    <Image
                        id="hero-phone-image"
                        src="/assets/images/homepage/phone-mockup.png"
                        alt="App mockup"
                        width={1200}
                        height={1400}
                        className="w-full h-auto block max-sm:translate-x-0 max-sm:object-cover max-sm:w-[120vw] max-sm:h-[130vw]"
                    />
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
                            className="absolute w-[10vw] h-[10vw] rounded-[3vw] overflow-hidden max-sm:w-[25vw] max-sm:h-[25vw] max-md:w-[15vw] max-md:h-[15vw] max-md:rounded-[4vw] max-sm:rounded-[7vw]"
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
                                className="h-full w-full object-cover"
                            />
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default FeatureSection;
