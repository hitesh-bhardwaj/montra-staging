'use client'

import { easeOut, motion } from "framer-motion";

const icons = [
    {
        src: "/assets/images/homepage/image-1.png",
        alt: "Receive",
        style: { top: "20%", left: "15%" },
        xOffset: -300,
        yOffset: -100,
    },
    {
        src: "/assets/images/homepage/image-2.png",
        alt: "Pay",
        style: { top: "20%", right: "15%" },
        xOffset: +400,
        yOffset: -50,
    },
    {
        src: "/assets/images/homepage/image-3.png",
        alt: "Currency",
        style: { bottom: "20%", left: "20%" },
        xOffset: -450,
        yOffset: +50,
    },
    {
        src: "/assets/images/homepage/image-4.png",
        alt: "Scan",
        style: { bottom: "30%", right: "20%" },
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

    return (
        <motion.section
            className="w-full h-full flex items-end justify-center relative overflow-hidden bg-white pt-[5vw]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div
                className="relative inline-block z-10 w-[35vw] max-w-xs sm:max-w-md md:max-w-lg fade-in-delay opacity-0"
            >
                <img
                    src="/assets/images/homepage/phone-mockup.png"
                    alt="App mockup"
                    className="w-full h-auto block -translate-x-1/10"
                />
                {icons.map((icon, i) => (
                    <motion.img
                        key={i}
                        src={icon.src}
                        alt={icon.alt}
                        className="absolute w-[10vw] h-[10vw] object-contain"
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