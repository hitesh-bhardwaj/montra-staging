"use client";
import { useEffect, useRef } from "react";
import Card from "./Card";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Heading from "@/components/Heading";
import Copy from "@/components/Copy";

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

                // Pin cards section
                ScrollTrigger.create({
                    trigger: container.current.querySelector(".cards"),
                    start: "top top",
                    end: () => `+=${totalScrollHeight}`,
                    pin: true,
                    pinSpacing: true,
                });

                // Create a main timeline for all animations
                const mainTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container.current.querySelector(".cards"),
                        start: "top top",
                        end: () => `+=${totalScrollHeight}`,
                        scrub: 0.5,
                    }
                });

                // Add spread animations (all at the start of the timeline, duration 1 unit ~ first viewport)
                cards.forEach((card, index) => {
                    mainTl.to(card, {
                        x: `${positions[index]}%`,
                        rotation: `${rotations[index]}`,
                        ease: "none",
                        duration: 1 // Corresponds to first third
                    }, 0); // All start at time 0
                });

                // Add flip animations (staggered, starting at timeline position 1 ~ second viewport)
                cards.forEach((card, index) => {
                    const frontEl = card.querySelector(".flip-card-front");
                    const backEl = card.querySelector(".flip-card-back");
                    const staggerOffset = index * 0.05;

                    mainTl.to(frontEl, {
                        rotateY: -180,
                        ease: "power1.out",
                        duration: 1 // Corresponds to middle third
                    }, 1 + staggerOffset)
                        .to(backEl, {
                            rotateY: 0, // Assuming back starts at 180, ends at 0
                            ease: "power1.out",
                            duration: 1
                        }, 1 + staggerOffset, "<") // Simultaneous with front
                        .to(card, {
                            rotation: 0,
                            ease: "power1.out",
                            duration: 1
                        }, 1 + staggerOffset, "<"); // Simultaneous reset rotation
                });

                // The last third (from time 2 to 3) is idle by default
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
                            className={`text-[5.7vw] font-display font-medium leading-[1.15] max-sm:text-[11vw] max-sm:w-full max-md:text-[7.5vw] max-md:w-[95%] ${cardData.headingWidth}`}
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