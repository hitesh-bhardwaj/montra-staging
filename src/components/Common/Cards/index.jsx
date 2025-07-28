"use client";
import { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "@/components/Heading";
import Copy from "@/components/Copy";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Cards({ cardData }) {
    const container = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (globalThis.innerWidth > 1024) {
                const cards = cardRefs.current;
                const totalScrollHeight = window.innerHeight * 3;
                const positions = [-160, -53, 53, 160];
                const rotations = [-12, -6, 6, 12];

                // pin cards section
                ScrollTrigger.create({
                    trigger: container.current.querySelector(".cards"),
                    start: "top top",
                    end: () => `+=${totalScrollHeight}`,
                    pin: true,
                    pinSpacing: true,
                });

                // spread cards
                cards.forEach((card, index) => {
                    gsap.to(card, {
                        x: `${positions[index]}%`,
                        rotation: `${rotations[index]}`,
                        ease: "none",
                        scrollTrigger: {
                            trigger: container.current.querySelector(".cards"),
                            start: "top top",
                            end: () => `+=${window.innerHeight}`,
                            scrub: 0.5,
                            id: `spread-${index}`,
                        },
                    });
                });

                // flip cards and reset rotation with staggered effect
                cards.forEach((card, index) => {
                    const frontEl = card.querySelector(".flip-card-front");
                    const backEl = card.querySelector(".flip-card-back");

                    const staggerOffset = index * 0.05;
                    const startOffset = 1 / 3 + staggerOffset;
                    const endOffset = 2 / 3 + staggerOffset;

                    ScrollTrigger.create({
                        trigger: container.current.querySelector(".cards"),
                        start: "top top",
                        end: () => `+=${totalScrollHeight}`,
                        scrub: 0.5,
                        id: `rotate-flip-${index}`,
                        onUpdate: (self) => {
                            const progress = self.progress;
                            if (progress >= startOffset && progress <= endOffset) {
                                const animationProgress = (progress - startOffset) / (1 / 3);
                                const frontRotation = -180 * animationProgress;
                                const backRotation = 180 - 180 * animationProgress;
                                const cardRotation = rotations[index] * (1 - animationProgress);

                                gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
                                gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
                                gsap.to(card, {
                                    rotate: cardRotation,
                                    ease: "power1.out",
                                });
                            }
                        },
                    });
                });
            } else {
                const cards = cardRefs.current;

                // spread cards
                cards.forEach((card, index) => {
                    const cardF = card.querySelector('.card-front');
                    const cardB = card.querySelector('.card-back');

                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: card,
                            start: "top 60%",
                            end: "bottom 60%",
                            scrub: 0.5,
                            id: `spread-${index}`,
                        },
                    })
                    tl.to(cardF, {
                        rotationY: -180,
                        ease: "none",
                    }).to(cardB, {
                        rotationY: -0,
                        ease: "none",
                    }, '<')
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section className="w-screen bg-white relative max-sm:px-[7vw] max-sm:h-full max-md:h-full max-sm:pt-[10%]">
                <div className="w-full text-center flex flex-col gap-[2vw] items-center justify-center max-sm:items-start max-sm:text-left max-sm:gap-[4vw] max-sm:pb-0 max-md:gap-[3vw]">
                    <Heading>
                        <h2
                            className={`text-[5.7vw] font-display font-medium  capitalize leading-[1.15] max-sm:text-[11vw] max-sm:w-full max-md:text-[7.5vw] max-md:w-[95%] ${cardData.headingWidth}`}
                        >
                            {cardData.heading}
                        </h2>
                    </Heading>
                    <Copy>
                        <p className="w-[45%] max-sm:w-full max-md:w-[70%]">{cardData.subHeading}</p>
                    </Copy>
                </div>
            </section>

            <section className="max-md:py-[15%] bg-white" ref={container}>
                <div className="cards h-screen w-screen flex items-center justify-center max-md:h-fit max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1 max-md:gap-y-[7vw]" style={{ perspective: '1500px' }}>
                    {cardData.cards.map((item, index) => (
                        <Card
                            key={index}
                            id={`card-${index + 1}`}
                            icon={item.icon}
                            icon2={item.icon2}
                            cardTitle={item.title}
                            cardContent={item.para}
                            ref={(el) => (cardRefs.current[index] = el)}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}