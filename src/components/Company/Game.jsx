'use client';
import Image from "next/image";
import bgImage from "../../../public/assets/images/Company/company-bg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Game() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "80% 80%",
                    scrub: 0.25,
                    markers: true,
                }
            });

            tl.to(bgRef.current, {
                clipPath: 'ellipse(100vw 120vh at 50% 80%)',
                duration: 1,
                ease: "none",
            })
                .to(imgRef.current, {
                    yPercent: 10,
                    duration: 1,
                    ease: "none",
                }, "0.5")
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="w-screen h-[120vh] z-[2] relative">
            <div className="h-full w-full flex items-end justify-center px-[4vw] py-[5vw]">
                <div
                    ref={bgRef}
                    style={{ clipPath: 'ellipse(20vw 20vw at 50% 35%)' }}
                    className="w-screen h-full absolute top-0 left-0">
                    <Image
                        ref={imgRef}
                        src={bgImage}
                        alt="background-image"
                        placeholder="blur"
                        quality={90}
                        className="w-full h-full object-cover absolute"
                    />
                </div>
                <div className="w-full text-white flex h-auto items-center justify-between relative z-[2]">
                    <h2 className="text-[2.85vw] leading-[1.3] w-[26%] font-display">How We&apos;re Changing the Game</h2>
                    <p className="w-1/2">Montra offers a comprehensive suite of digital products and platforms that serve both individuals and businesses. From easy-to-use apps for payments & account management to powerful tools for accessing credit, making investment, and buying insurance, we help users benefit the transition they make from Cash to instant & secure Digital Payments</p>
                </div>
            </div>
        </div>
    )
}