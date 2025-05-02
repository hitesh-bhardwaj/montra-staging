"use client"
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = React.forwardRef(({ className, active, img }, ref) => {
    return (
        <div className={`h-[30vw] w-[43vw] ${className} ${active ? 'brightness-100 drop-shadow-2xl ' : 'brightness-50'}`} ref={ref}>
            <div className="h-full w-full rounded-[2.2vw] overflow-hidden">
                <Image
                    src={img}
                    height={593}
                    width={779}
                    alt="hero-img1"
                    className="object-cover"
                />
            </div>
            <span className={`bg-primary text-white rounded-[2vw] py-[0.5vw] px-[1vw] absolute top-5 right-5 ${active ? 'block' : 'hidden'}`}>
                Business
            </span>
            <div className={`bg-white absolute bottom-5 left-5 flex items-center justify-start gap-[2vw] rounded-[1.5vw] py-[1vw] px-[1vw] w-fit h-fit ${active ? 'block' : 'hidden'}`}>
                <span className="bg-primary rounded-full h-[3vw] w-[3vw] absolute block" />
                <div className="pl-[4vw] text-left">
                    <p>Total Amount Collected</p>
                    <p className="text-[1vw] font-display">Today</p>
                </div>
            </div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${active ? 'block' : 'hidden'}`}>
                <p className="font-bold font-display text-[3.4vw] text-white">
                    <span className="line-through">N</span> 20,000
                </p>
            </div>
            <div className={`frame absolute z-[-1] top-[-3%] left-[-2.5%] bg-[#111111] rounded-[3vw] w-[45vw] h-[32vw] flex items-center justify-center scale-0   ${active ? 'block' : 'hidden'}`} >
            </div>
        </div>
    );
});
Card.displayName = 'Card';

export default function Hero() {
    const cardContainer = useRef(null);
    const mainCard = useRef(null);
    const cardRefs = useRef([]);
    const mainCardContainer = useRef(null);
    const content1 = useRef(null);
    const content2 = useRef(null);
    const mainCard2 = useRef(null);

    const setCardRef = (el, index) => {
        cardRefs.current[index] = el;
    };

    useEffect(() => {
        if(globalThis.innerWidth>1024){
        const [firstCard, secondCard, thirdCard, fourthCard] = cardRefs.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "5% top",
                end: "15% top",
                scrub: true,
                //   markers:true
            },
        });

        tl.to([firstCard, thirdCard], {
            z: -50,
            translateY:100,
            opacity: 0,
            scale: 0.7,
            duration: 3,
            ease: "power2.out",
        }, 0);
        tl.to([secondCard, fourthCard], {
            z: -50,
            opacity: 0,
            translateY:100,
            scale: 0.7,
            duration: 3,
            ease: "power2.out",
        }, 0);
        gsap.to(".mainCard", {
            scale: 1.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#hero",
                start: "5% top",
                end: "40% top",
                scrub: true,
                //   markers:true
            },
        });
        gsap.to(".frame",
            {
           scale:1,
          
            duration:2,
            ease:"power2.out",
            
            scrollTrigger: {
                trigger: mainCardContainer.current,
                start: "15% 20%",
                end: "40% top",
                scrub: true,
                // markers:true
            },
        })

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mainCard",
                start: "top 20%",
                end: "550% 10%",
                scrub: true,
                // markers: true,
                pin: mainCardContainer.current
            },
        })

        tl2.to(".mainCard", {
            left:"2%",
            delay:0.15,
            ease: "none",
           
        });
        tl2.to(".mainCard",{
            // xPercent:25,
            delay:1,
            left:"52%",
            ease: "none",
           
        });
        tl2.to(".card1",{
        opacity:0,
          ease: "none",
          delay:"-0.3"
         
      });
      tl2.to(".card2",{
        opacity:1,
          ease: "none",
          delay:"-0.55"         
      });
        gsap.to("body", {
            backgroundColor: "#215CFF",
            ease: "none",
            scrollTrigger: {
                trigger: "#hero",
                start: "25% top",
                end: "82% top",
                // scrub: true,
                // markers: true,
                onEnter: () => {
                    gsap.to("body", { backgroundColor: "#215CFF", duration: 0.3 });
                },
                onEnterBack: () => {
                    gsap.to("body", { backgroundColor: "#215CFF", duration: 0.3 });
                },
                onLeaveBack: () => {
                    gsap.to("body", { backgroundColor: "white", duration: 0.3 });
                },
                onLeave: () => {
                    gsap.to("body", { backgroundColor: "white", duration: 0.3 });
                }
            }
        });
        gsap.fromTo(content1.current, {
            opacity: 0,
        }, {
            opacity: 1,
            scrollTrigger: {
                trigger: "#hero",
                start: "40% 80%",
                end: "50% 40%",
                scrub: true,
                // markers:true,
            },
        })
        gsap.fromTo(content2.current, {
            opacity: 0,
            yPercent: 20,
        }, {
            opacity: 1,
            yPercent: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "80% 60%",
                end: "100% 70%",
                scrub: true,
                // markers:true,
            },
        })
    };
    }, []);

    return (
        <section id="hero" className="relative h-[500vh] overflow-hidden">
            <div className="flex flex-col items-start justify-start text-center px-[4vw] ">
                <div className="w-full mx-auto space-y-[1.2vw] pt-[14vw] ">
                    <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15]">
                        <span className="text-primary">Montra Business Account: </span> Go
                        for Smarter Finance, Bigger Growth
                    </h1>
                    <p className="font-body w-1/2 mx-auto">
                        Everyday business banking essentials, time-saving business
                        management tools and our signature money management features.
                    </p>
                </div>
                <div className="w-full relative z-[51]" ref={mainCardContainer}>
                    <Card
                        ref={mainCard}
                        className="absolute left-[25%] translate-y-[30%] z-[50] mainCard card1"
                        active={true}
                        img={"/assets/images/business/hero-img1.png"}
                    />
                    <div ref={mainCard} className={`h-[30vw] w-[43vw] absolute left-[25%] translate-y-[30%] z-[50] mainCard  card2 opacity-0 card2 brightness-100 drop-shadow-2xl `} >
            <div className="h-full w-full rounded-[2.2vw] overflow-hidden">
                <Image
                    src="/assets/images/business/hero-card2.png"
                    height={593}
                    width={779}
                    alt="hero-img1"
                    className="object-cover h-[35vw]"
                />
            </div>
            <span className={`bg-primary text-white rounded-[2vw] py-[0.5vw] px-[1vw] absolute top-5 right-5 block`}>
                Business
            </span>
            <div className={`bg-white absolute bottom-5 left-5 flex items-center justify-start gap-[2vw] rounded-[1.5vw] py-[1vw] px-[1vw] w-fit h-fit }`}>
                <span className="bg-primary rounded-full h-[3vw] w-[3vw] absolute block" />
                <div className="pl-[4vw] text-left">
                    <p>No. of Payments Received</p>
                    <p className="text-[1vw] font-display">10</p>
                </div>
            </div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block}`}>
                <p className="font-bold font-display text-[3.4vw] text-white">
                    <span className="line-through">N</span> 20,000
                </p>
            </div>
            <div className={`frame absolute z-[-1] top-[-3%] left-[-2.5%] bg-[#111111] rounded-[3vw] w-[45vw] h-[32vw] flex items-center justify-center scale-0 }`} >
            </div>
        </div>
                </div>
                <div
                    className="relative flex items-center justify-center w-full ml-[-2vw] h-[5vw] mt-[7vw]"
                    ref={cardContainer}
                >
                    <div ref={(el) => setCardRef(el, 0)}>
                        <Card className="absolute left-1/2 -translate-x-[95%] scale-[0.7] perspective-box" img={"/assets/images/business/hero-img5.png"} />
                    </div>
                    <div ref={(el) => setCardRef(el, 1)}>
                        <Card className="absolute left-1/2 -translate-x-[75%] scale-[0.8] perspective-box-2" img={"/assets/images/business/hero-img4.png"} />
                    </div>
                    <div ref={(el) => setCardRef(el, 2)}>
                        <Card className="absolute left-1/2 translate-x-[0%] scale-[0.7] -rotate-y-[35deg] perspective-box-3" img={"/assets/images/business/hero-img2.png"} />
                    </div>
                    <div ref={(el) => setCardRef(el, 3)}>
                        <Card className="absolute left-1/2 -translate-x-[15%] scale-[0.8] -rotate-y-[40deg] perspective-box-4" img={"/assets/images/business/hero-img3.png"} />
                    </div>
                </div>
                </div>
                <div className="px-[4vw] mt-[70vw] !h-[250vh] justify-between flex flex-col relative z-[-1]">
                    <div ref={content1} className="flex flex-col  translate-x-[110%] text-white w-1/2 py-[4vw] relative z-0 pl-[2vw]">
                        <h2 className="text-[3.4vw] py-[2vw] font-display w-[80%] text-left font-medium">
                            Boost Growth With Smart Payments & Tools
                        </h2>
                        <div className="space-y-[2vw] w-[80%]">
                            <p>Montra enables you to Accept Payments easily from everyone, anywhere. Our Merchants can offer payment acceptance to their customers  using:</p>
                            <ul className="list-disc space-y-[2vw]">
                                <li>Interoperable QR Code  - customers can simply scan QR Code using any Mobile Banking App to pay from their bank accounts digitally. Customers using their Montra App can pay from their Montra Account as well as from any Card they may have linked to Montra App.</li>
                                <li>Soft-POS (Tap & Pay) – open the Tap & Pay feature on your Montra App to enter payment amount. Customer can simply Tap any Card on your NFC enabled phone and complete the payment steps on your phone, similar to how they pay on POS.</li>
                                <li>POS – get a POS issued from Montra to start accepting card payments</li>
                            </ul>
                            <div className="space-y-[2vw]">
                                <div className="rounded-[2vw] px-[2vw] py-[1vw] bg-white text-black w-[78%]">
                                    Accept cashless payments with ease
                                </div>
                                <div className="rounded-[2vw] px-[2vw] py-[1vw] bg-[#FFEAEE] text-black w-[78%]">
                                    Access working capital and credit
                                </div>
                                <div className="rounded-[2vw] px-[2vw] py-[1vw] bg-[#EAF1FF] text-black w-[78%]">
                                    Get business insights in real-time
                                </div>
                            </div>
                        </div>
                    </div>


                    <div ref={content2} className="flex flex-col  text-white w-1/2 py-[4vw] pl-[2vw]">
                        <h2 className="text-[3.4vw] py-[2vw] font-display font-medium w-[75%]">
                            Smart Business Management Tools For Smarter Businesses
                        </h2>
                        <div className="pb-[2vw] w-[80%]">
                            <p>Whether it's accepting digital payments, managing operations, or unlocking credit and insurance, Montra helps businesses grow with confidence—no matter their size or stage.</p>

                        </div>
                        <div className="space-y-[2vw]">
                            <div className="rounded-[2vw] px-[2vw] py-[1vw] bg-white text-black w-[85%]">
                                Track payment collections & Settlements
                            </div>
                            <div className="rounded-[2vw] px-[2vw] py-[1vw] bg-[#FFEAEE] text-black w-[85%]">
                                Voice & Text notifications for payment confirmation
                            </div>
                            <div className="rounded-[3vw] px-[2vw] py-[1.2vw] bg-[#EAF1FF] text-black w-[85%]">
                                Set up a Montra Store on Montra App & start selling your products & services virtually
                            </div>
                        </div>

                    </div>


                </div>
           
        </section>
    );
}
