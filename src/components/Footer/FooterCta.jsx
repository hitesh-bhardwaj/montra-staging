'use client'
import Image from "next/image";
import mockupImage from "../../../public/assets/images/footer-cta-mockup.png";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

const FooterCta = () => {
    const pathname = usePathname();

    useEffect(() => {
      const canvas = document.getElementById("canvas-18971");
      if (canvas) {
        canvas.style.width = "100vw";
        canvas.style.borderBottomLeftRadius = "0vw";
        canvas.style.borderBottomRightRadius = "0vw";
      }
    }, [pathname]);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo("#canvas-18971", {
                borderBottomLeftRadius: "0vw",
                borderBottomRightRadius: "0vw",
                width: "100%",
            }, {
                borderBottomLeftRadius: "5vw",
                borderBottomRightRadius: "5vw",
                width: "96%",
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: "#footer-cta",
                    start: "bottom bottom",
                    end: "bottom 10%",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            })
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="z-[1] relative" id="footer-cta">
                <div className="py-[5vw] pt-[10vw] px-[4vw] max-sm:px-[7vw] max-sm:py-[15%] max-md:py-[10vw]">
                    <div className="flex items-start justify-center max-sm:flex-col max-md:flex-col max-md:items-center">
                        <div className="w-[30%] max-sm:w-full fadeupanim max-md:w-[60%]">
                            <Image src={mockupImage} alt="phone mockup" className="w-full h-full object-contain" />
                        </div>
                        <div className="w-[65%] flex flex-col items-center text-center max-sm:w-full max-md:w-full">
                            <div className="max-md:w-[75%] max-sm:w-full">
                            <Heading>
                                <h6 className="text-[5.7vw] font-medium leading-[1.2] font-display max-sm:text-[11.5vw] capitalize max-md:text-[7.5vw] ">Take charge of your financial future</h6>
                                <p className="mt-[2vw] max-sm:mt-[4vw]">It only takes few seconds to get started.</p>
                            </Heading>
                            </div>
                            <div className="fadeupanim flex gap-10 justify-center mt-[3vw] max-sm:flex-col max-sm:gap-4 max-sm:mt-[10vw] max-md:mt-[5vw]">
                                <AppleStoreButton />
                                <PlayStoreButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterCta