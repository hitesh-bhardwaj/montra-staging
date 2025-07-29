'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from './bankingcard.module.css'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Banking = () => {
    const sliderContainer = useRef(null);
    const wheelRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wheel = wheelRef.current;
            const images = gsap.utils.toArray(`.${styles.wheelCard}`);
            const setup = () => {
                const radius = wheel.offsetWidth / 1.1;
                const center = wheel.offsetWidth / 2;
                const total = images.length;
                const slice = (0.8 * Math.PI) / total;
                images.forEach((item, i) => {
                    const angle = i * slice;
                    const x = center + radius * Math.sin(angle);
                    const y = center - radius * Math.cos(angle);

                    gsap.set(item, {
                        rotation: angle + "_rad",
                        xPercent: -50,
                        yPercent: -50,
                        x: x,
                        y: y,
                    });
                });
            };
            setup();
            window.addEventListener("resize", setup);
            gsap.from(`.${styles.wheel}`, {
                rotate: () => -125,
                ease: "none",
                duration: images.length,
                scrollTrigger: {
                    trigger: sliderContainer.current,
                    start: "center center",
                    end: "630% center",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });
            return () => {
                window.removeEventListener("resize", setup);
            };
        }, sliderContainer);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="products"
            ref={sliderContainer}
            className={`relative h-[100vh] ${styles.sliderContainer} mobile:h-full tablet:h-full pb-[5%] mobile:py-[15%]`}
        >
            <div className="flex flex-col w-[48vw] h-full items-center justify-end pb-[4%] -rotate-90 ">
                <div className={`${styles.sliderSection} `}>
                    <div className={styles.wheel} ref={wheelRef}>
                        {data.map((item, i) => (
                            <div
                                className={`${styles.wheelCard} `}
                                key={i}
                            >
                                <div className="h-[25vw] w-[35vw] py-[4vw] rounded-[2vw] flex items-center rotate-90 justify-center gap-4"
                                    style={{ backgroundColor: item.color }}
                                    ref={(el) => (cardsRef.current[i] = el)}
                                >
                                    <Image
                                        src={item.icon}
                                        height={100}
                                        width={100}
                                        alt={item.field}
                                    />
                                    <p className="text-[3.2vw] w-[40%] flex items-start font-display font-medium text-white">
                                        {item.field}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banking;

const data = [
    {
        color: "#FFB909",
        icon: "/assets/images/business/tap-and-pay-icon.svg",
        field: "Tap & Pay",
    },
    {  
        color: "#7A78FF",
        icon: "/assets/images/business/payment-gateway-icon.svg",
        field: "Payment Gateway",
    },
    {
        color: "#FB2F55",
        icon: "/assets/images/business/montra-icon.svg",
        field: "Montra Store",
    },
    {
        color: "#111111",
        icon: "/assets/images/business/inventory-icon.svg",
        field: "Inventory Management",
    },

    {
        color: "#35C771",
        icon: "/assets/images/business/agency-banking-icon.svg",
        field: "Agency Banking",
    },

    { 
        color: "#215CFF",
        icon: "/assets/images/business/payments-icon.svg",
        field: "Payments",
    },

    {
        color: "#FF8100",
        icon: "/assets/images/business/banking-icon.svg",
        field: "Banking",
    },
]
