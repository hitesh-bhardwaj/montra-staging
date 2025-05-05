"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MobileHero() {
    const mainCardContainer = useRef(null);
    const frame  = useRef(null);
useEffect(()=>{
    gsap.to(mainCardContainer.current,{
        yPercent:128,
        duration:1,
        ease:"none",
        scrollTrigger:{
            trigger:"#hero",
            start:"5% top",
            end:"38% 30%",
            scrub:true,
            // markers:true
        }
    })
    gsap.to(frame.current,{
        scale:1,
        ease:"none",
        scrollTrigger:{
            trigger:mainCardContainer.current,
            start:"5% top",
            end:"30% top",
            scrub:true,
            // markers:true
        }
    })
       
    
})

    return (
        <section id="hero" className="relative h-[370vh] overflow-hidden ">
            <div className="flex flex-col items-start justify-start text-center  max-sm:gap-[12vw] ">
                <div className="w-full mx-auto space-y-[1.2vw] pt-[14vw] max-sm:pt-[35vw] px-[4vw] max-sm:space-y-[7vw]">
                    <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] max-sm:text-[11.5vw] ">
                        <span className="text-primary">Montra Business Account: </span> Go
                        for Smarter Finance, Bigger Growth
                    </h1>
                    <p className="font-body w-1/2 mx-auto max-sm:w-[85%] ">
                        Everyday business banking essentials, time-saving business
                        management tools and our signature money management features.
                    </p>
                </div>
                <div className=" mx-auto mt-[15vw]">
                    <div className="h-[75vw] w-[85vw] rounded-[6vw] relative z-[5] " ref={mainCardContainer}>
                        <Image src={"/assets/images/business/hero-img1.png"} height={352} width={266} alt="hero-image" className=" h-[70vw] w-[85vw] relative  rounded-[6vw]"/>
                        <div ref={frame} className="bg-black rounded-[6vw] h-[75vw] w-[90vw] absolute top-[-3%] left-[-3%] scale-0 z-[-1] "></div>
                    </div>
                    <div className="h-[70vw] w-[85vw] rounded-[6vw] overflow-hidden absolute top-[16%] left-[10%]">
                        <Image src={"/assets/images/business/hero-img2.png"} height={352} width={266} alt="hero-image" className="object-cover h-[70vw] w-[85vw] scale-[0.8] z-[-1] relative brightness-75 rounded-[6vw]"/>
                    </div>
                    <div className="h-[70vw] w-[85vw] rounded-[6vw] overflow-hidden absolute top-[15%] left-[10%]">
                        <Image src={"/assets/images/business/hero-img3.png"} height={352} width={266} alt="hero-image" className="object-cover h-[70vw] w-[85vw] scale-[0.7] z-[-2] relative brightness-75 rounded-[6vw]"/>
                    </div>
                </div>
                <div className="bg-[#215CFF] py-[15vw] h-[255vh] w-screen !px-[8vw] flex flex-col items-center z-[-1]  ">
                    <div className="text-white text-left">
                        
                    <h2 className="text-[10.5vw] py-[2vw] font-display w-[95%] text-left font-medium mt-[70vw]">
                            Boost Growth With Smart Payments & Tools
                        </h2>
                       <div className="space-y-[6vw]">
                       <p>Montra enables you to Accept Payments easily from everyone, anywhere. Our Merchants can offer payment acceptance to their customers  using:</p>
                            <ul className="list-disc space-y-[2vw] ml-[2vw] ">
                                <li>Interoperable QR Code  - customers can simply scan QR Code using any Mobile Banking App to pay from their bank accounts digitally. Customers using their Montra App can pay from their Montra Account as well as from any Card they may have linked to Montra App.</li>
                                <li>Soft-POS (Tap & Pay) – open the Tap & Pay feature on your Montra App to enter payment amount. Customer can simply Tap any Card on your NFC enabled phone and complete the payment steps on your phone, similar to how they pay on POS.</li>
                                <li>POS – get a POS issued from Montra to start accepting card payments</li>
                            </ul>
                            <div className="space-y-[6vw]">
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-white text-black w-full">
                                    Accept cashless payments with ease
                                </div>
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-[#FFEAEE] text-black w-full">
                                    Access working capital and credit
                                </div>
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-[#EAF1FF] text-black w-full">
                                    Get business insights in real-time
                                </div>
                            </div>
                       </div>

                       <div className="h-[75vw] w-[85vw] rounded-[6vw] relative z-[5] mt-[10vw] " >
                        <Image src={"/assets/images/business/hero-card2.png"} height={352} width={266} alt="hero-image" className=" h-[70vw] w-[85vw] relative  rounded-[6vw]"/>
                        <div  className="bg-black rounded-[6vw] h-[75vw] w-[90vw] absolute top-[-3%] left-[-3%]  z-[-1] "></div>
                    </div>
                    <h2 className="text-[10.5vw] py-[2vw] font-display w-[95%] text-left font-medium ">
                    Smart Financial Tools for Smarter Businesses
                        </h2>
                       <div className="space-y-[6vw]">
                       <p>Whether it's accepting digital payments, managing operations, or unlocking credit and insurance, Montra helps businesses grow with confidence—no matter their size or stage.</p>
                           
                            <div className="space-y-[6vw]">
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-white text-black w-full">
                                    Accept cashless payments with ease
                                </div>
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-[#FFEAEE] text-black w-full">
                                    Access working capital and credit
                                </div>
                                <div className="rounded-[6vw] px-[4vw] py-[3vw] bg-[#EAF1FF] text-black w-full">
                                    Get business insights in real-time
                                </div>
                            </div>
                       </div>

                    </div>


                </div>
                </div>
           
        </section>
    );
}
