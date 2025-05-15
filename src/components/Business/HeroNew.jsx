'use client'
import Copy from "../Copy";
import Heading from "../Heading";
import img1 from "../../../public/assets/images/business/hero-img1.png";
import img2 from "../../../public/assets/images/business/hero-img2.png";
import img3 from "../../../public/assets/images/business/hero-img3.png";
import img4 from "../../../public/assets/images/business/hero-img4.png";
import img5 from "../../../public/assets/images/business/hero-img5.png";
import img6 from "../../../public/assets/images/business/hero-card2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { fadeUpAnim } from "../gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function HeroNew() {
    const targetRef = useRef(null);
    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const mainImgContainer = useRef(null);
    const img5Ref = useRef(null);
    const img6Ref = useRef(null);

    fadeUpAnim();

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(mainImgContainer.current, {
                opacity: 0,
                duration: 1,
                delay: 1,
                y: 50,
            }).from([img3Ref.current, img4Ref.current], {
                opacity: 0,
                duration: 1,
                delay: -0.5,
                y: 50,
            }).from([img5Ref.current, img2Ref.current], {
                opacity: 0,
                delay: -0.5,
                duration: 1,
                y: 50,
            })
        })
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: targetRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    markers: true,
                },
                defaults: {
                    ease: "none",
                }
            })

            tl.to(img5Ref.current, {
                xPercent: 30,
                duration: 1,
                opacity: 0,
            })
                .to(img2Ref.current, {
                    xPercent: -30,
                    duration: 1,
                    opacity: 0,
                }, "<")
                .to(img4Ref.current, {
                    xPercent: 20,
                    duration: 1,
                    opacity: 0,
                }, "-=0.5")
                .to(img3Ref.current, {
                    xPercent: -20,
                    duration: 1,
                    opacity: 0,
                }, "<")
                .to(mainImgContainer.current, {
                    borderWidth: 15,
                    duration: 1
                }, "-=0.5")
                .to(mainImgContainer.current, {
                    xPercent: -50,
                    duration: 1
                })
                .to(mainImgContainer.current, {
                    xPercent: 50,
                    yPercent: 10,
                    delay: 2,
                    duration: 1
                })
                .to(img6Ref.current, {
                    opacity: 1,
                    duration: 1,
                }, "<")
        })
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={targetRef} id="hero" className="h-full w-screen">
                <div className="relative h-[500vh]" >

                    {/* Heading Container */}
                    <div className="text-center flex items-center justify-center pt-[14vw] px-[4vw]">
                        <div className="space-y-[1.2vw]">
                            <Heading delay={0.5}>
                                <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15]">
                                    <span className="text-primary">Montra Business Account: </span> Go
                                    for Smarter Finance, Bigger Growth
                                </h1>
                            </Heading>
                            <Copy delay={1}>
                                <p className="font-body w-3/5 mx-auto">
                                    Everyday business banking essentials, time-saving business
                                    management tools and our signature money management features.
                                </p>
                            </Copy>
                        </div>
                    </div>

                    {/* Images Container */}
                    <div className="flex justify-center pointer-events-none items-center h-[90vh] sticky top-0 z-10">
                        {/* Image 5 (leftmost) */}
                        <div ref={img5Ref} style={{ transform: "perspective(1000px) rotateY(20deg)" }} className="absolute left-[10%] z-0 scale-[0.7] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                            <Image placeholder="blur" src={img5} alt="Business 1" className="w-full h-full object-cover" />
                        </div>


                        {/* Image 4 (left) */}
                        <div ref={img4Ref} style={{ transform: "perspective(1000px) rotateY(20deg)" }} className="absolute left-[18%] z-0 scale-[0.8] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                            <Image placeholder="blur" src={img4} alt="Business 1" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 2 (rightmost) */}
                        <div ref={img2Ref} style={{ transform: "perspective(1000px) rotateY(-20deg)" }} className="absolute right-[10%] z-0 scale-[0.7] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                            <Image placeholder="blur" src={img2} alt="Business 1" className="w-full h-full object-cover" />
                        </div>

                        {/* Image 3 (right) */}
                        <div ref={img3Ref} style={{ transform: "perspective(1000px) rotateY(-20deg)" }} className="absolute right-[18%] z-0 scale-[0.8] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                            <Image placeholder="blur" src={img3} alt="Business 1" className="w-full h-full object-cover" />
                        </div>

                        {/* Center card */}
                        <div ref={mainImgContainer} className="shadow-2xl relative z-10 w-[43vw] h-[30vw] rounded-[2vw] overflow-hidden border-0 bg-black-1 flex flex-col justify-between">
                            <Image ref={img1Ref} placeholder="blur" src={img1} alt="Main Business" className="w-full h-full object-cover absolute top-0 left-0" />
                            <Image ref={img6Ref} placeholder="blur" src={img6} alt="Main Business" className="w-full h-full object-cover opacity-0 absolute top-0 left-0" />
                            <div className="relative top-0 left-0 w-full h-full bg-black/20 flex flex-col justify-between p-[1.5vw]">
                                <span className="bg-primary text-white px-[1vw] py-[0.5vw] rounded-full self-end font-medium">
                                    Business
                                </span>
                                <h3 className="text-white text-[3.4vw] font-bold font-display self-center">₦ 20,000</h3>
                                <div className="bg-white p-[1vw] rounded-[1.5vw] flex items-center gap-[1vw] w-fit">
                                    <span className="w-[3vw] h-[3vw] rounded-full bg-primary" />
                                    <div className="pr-[2vw]">
                                        <div className="">Total Amount Collected</div>
                                        <div className="text-[1vw] font-display">Today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-primary w-screen p-[4vw] flex flex-col gap-[20vw] h-fit absolute bottom-0 text-white">
                        <div className="w-[42%] self-end text-left space-y-[2vw]">
                            <Heading>
                                <h2 className="text-[3.4vw] font-display font-medium leading-[1.2]">
                                    Boost Growth With Smart Payments & Tools
                                </h2>
                            </Heading>
                            <div className="space-y-[2vw]">
                                <Copy>
                                    <p>Montra enables you to Accept Payments easily from everyone, anywhere. Our Merchants can offer payment acceptance to their customers  using:</p>
                                </Copy>
                                <ul className="list-disc space-y-[2vw] pl-5">
                                    <Copy>
                                        <li>Interoperable QR Code - customers can simply scan QR Code using any Mobile Banking App to pay from their bank accounts digitally. Customers using their Montra App can pay from their Montra Account as well as from any Card they may have linked to Montra App.</li>
                                    </Copy>
                                    <Copy>
                                        <li>Soft-POS (Tap & Pay) - open the Tap & Pay feature on your Montra App to enter payment amount. Customer can simply Tap any Card on your NFC enabled phone and complete the payment steps on your phone, similar to how they pay on POS.</li>
                                    </Copy>
                                    <Copy>
                                        <li>POS - get a POS issued from Montra to start accepting card payments</li>
                                    </Copy>
                                </ul>
                                <div className="space-y-[1.5vw] w-[78%]">
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black">
                                        Accept cashless payments with ease
                                    </div>
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black">
                                        Access working capital and credit
                                    </div>
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black">
                                        Get business insights in real-time
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[42%] self-start text-left space-y-[2vw]">
                            <Heading>
                                <h2 className="text-[3.4vw] font-display font-medium leading-[1.2]">
                                    Smart Business Management Tools for Smarter Businesses
                                </h2>
                            </Heading>
                            <div className="space-y-[2vw]">
                                <Copy>
                                    <p>Whether it's accepting digital payments, managing operations, or unlocking credit and insurance, Montra helps businesses grow with confidence—no matter their size or stage.</p>
                                </Copy>
                                <div className="space-y-[1.5vw] w-[95%]">
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-white text-black">
                                        Track payment collections & Settlements
                                    </div>
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#FFEAEE] text-black">
                                        Voice & Text notifications for payment confirmation
                                    </div>
                                    <div className="fadeupanim shadow-lg rounded-full px-[2vw] py-[1vw] bg-[#EAF1FF] text-black">
                                        Set up a Montra Store on Montra App & start selling your products & services virtually
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}