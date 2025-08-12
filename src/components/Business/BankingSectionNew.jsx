'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { LinkButton } from "../Buttons";
import { BankingData as data } from "./BankingData";
import Banking from "./Banking";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const BankingSectionNew = () => {
    const sectionRef = useRef(null);
    const progressLineRef = useRef(null);

    // content blocks
    const contentRefs = useRef([]);
    contentRefs.current = [];

    // nav circles & labels
    const navCircleRefs = useRef([]);
    navCircleRefs.current = [];
    const navLabelRefs = useRef([]);
    navLabelRefs.current = [];

    const timelineRef = useRef(null);

    const addContentRef = el => el && contentRefs.current.push(el);
    const addNavCircle = el => el && navCircleRefs.current.push(el);
    const addNavLabel = el => el && navLabelRefs.current.push(el);

    const inactiveColor = "#C2C2C2";
    const activeColor = "#215CFF";

    const snapPoints = [0, .17, .34, .50, .67, .83, 1]

    useEffect(() => {
        gsap.set(progressLineRef.current, { scaleY: 0 });
        navCircleRefs.current.forEach(c =>
            gsap.set(c, { fill: inactiveColor, stroke: inactiveColor })
        );
        navLabelRefs.current.forEach(lbl =>
            gsap.set(lbl, { color: inactiveColor })
        );
        contentRefs.current.forEach(c =>
            gsap.set(c, { opacity: 0, yPercent: 0, zIndex: 0 })
        );
        if (contentRefs.current[0]) {
            gsap.set(contentRefs.current[0], { opacity: 1, y: 0, zIndex: 2 });
            gsap.set(navCircleRefs.current[0], { fill: activeColor, stroke: activeColor });
            gsap.set(navLabelRefs.current[0], { color: activeColor });
        }

        // 3) build a fresh GSAP context & timeline
        const ctx = gsap.context(() => {
            if (globalThis.innerWidth > 1024) {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true,
                        snap: {
                            snapTo: snapPoints,
                            duration: { min: 0.3, max: 0.5 },
                            ease: "power1.out"
                        },
                        onUpdate(self) {
                            gsap.set(progressLineRef.current, { scaleY: self.progress });
                        }
                    }
                });

                // 4) step‐by‐step content + image animations
                for (let i = 1; i < contentRefs.current.length; i++) {
                    tl
                        .to(contentRefs.current[i - 1], {
                            opacity: 0,
                            yPercent: -7,
                            zIndex: 1,
                            duration: 1,
                            delay: 1,
                            ease: "none"
                        }, "<")
                        .fromTo(
                            contentRefs.current[i],
                            { opacity: 0, yPercent: 7, zIndex: 1 },
                            {
                                opacity: 1,
                                yPercent: 0,
                                zIndex: 5,
                                duration: 1,
                                delay: 1,
                                ease: "none"
                            },
                            "<"
                        )
                        .fromTo(
                            navCircleRefs.current[i],
                            { fill: inactiveColor, stroke: inactiveColor },
                            {
                                fill: activeColor,
                                stroke: activeColor,
                                duration: 0.3,
                                ease: "none"
                            },
                        )
                        .fromTo(
                            navLabelRefs.current[i],
                            { color: inactiveColor },
                            { color: activeColor, duration: 0.3, ease: "none" },
                        );
                }
                timelineRef.current = tl;
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const scrollToStep = (index) => {
        const st = timelineRef.current.scrollTrigger;
        const targetY = st.start + (st.end - st.start) * snapPoints[index];
        gsap.to(window, {
            duration: 0.6,
            ease: "power1.out",
            scrollTo: { y: targetY, autoKill: true }
        });
    };

    return (
        <section
            ref={sectionRef}
            className="h-[500vh] bg-white relative max-md:hidden"
            id="h_payment_section"
        >
            <div className="sticky top-0 h-screen flex items-center justify-between w-full px-[4vw]">

                {/* SVG NAVIGATION */}
                <div className="absolute top-1/2 left-[4vw] -translate-y-1/2">
                    <div className="flex gap-4 w-[13vw]">
                        <svg className="h-[20vw]" width="20" height="328" viewBox="0 0 14 328" fill="none">
                            {/* inactive background line */}
                            <line x1="6.958" y1="5.5" x2="6.958" y2="320"
                                stroke={inactiveColor} strokeWidth="2" />

                            {/* active progress line */}
                            <line
                                ref={progressLineRef}
                                x1="6.958" y1="5.5" x2="6.958" y2="320"
                                stroke={activeColor} strokeWidth="2"
                                style={{ transformOrigin: "top center", scaleY: 0 }}
                            />

                            {/* nav circles */}
                            {["Banking", "Payments", "Agency Banking", "Inventory Management", "Montra Store", "Payment Gateway", "Tap & Pay"].map((_, i) => (
                                <circle
                                    key={i}
                                    ref={addNavCircle}
                                    cx="6.958" cy={[5.5, 57, 110, 164, 215, 267, 323][i]}
                                    r="4"
                                    fill={inactiveColor}
                                    stroke={inactiveColor}
                                    strokeWidth="2"
                                    onClick={() => scrollToStep(i)}
                                    className="cursor-pointer"
                                />
                            ))}
                        </svg>

                        {/* nav labels */}
                        <div className="flex flex-col justify-between text-[1vw] font-display leading-[0.5] pb-1">
                            {["Banking", "Payments", "Agency Banking", "Inventory Management", "Montra Store", "Payment Gateway", "Tap & Pay"].map((label, i) => (
                                <span
                                    key={i}
                                    ref={addNavLabel}
                                    onClick={() => scrollToStep(i)}
                                    className="cursor-pointer"
                                    style={{ color: inactiveColor }}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Block & SVG */}
                <div className="h-screen flex items-center relative w-[40vw] justify-start text-left ml-[14vw]">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            ref={addContentRef}
                            className="absolute step-block w-[38vw]"
                        >
                            <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[80%]">
                                {item.title}
                            </h2>
                            <div className="space-y-[1.5vw] py-[2vw] w-[90%]" dangerouslySetInnerHTML={{ __html: item.para }} />
                            <div>
                                <LinkButton text="Learn More" href={item.link} />
                            </div>
                        </div>
                    ))}
                </div>

                <Banking container={sectionRef.current} />

            </div>
        </section>
    );
};

export default BankingSectionNew;