import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const ImageContainer = ({ img1, img2, img3, img4, img5, img6, container }) => {

    const img1Ref = useRef(null);
    const img2Ref = useRef(null);
    const img3Ref = useRef(null);
    const img4Ref = useRef(null);
    const mainImgContainer = useRef(null);
    const img5Ref = useRef(null);
    const img6Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(mainImgContainer.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1,
            })
                .from([img3Ref.current, img4Ref.current], {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                }, "-=0.5")
                .from([img5Ref.current, img2Ref.current], {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                }, "-=0.5");

            const mainTl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
                defaults: {
                    ease: "none",
                }
            })

            mainTl.to(img5Ref.current, {
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
    })

    return (
        <>
            <div ref={img5Ref} style={{ transform: "perspective(1000px) rotateY(20deg)" }} className="absolute left-[10%] z-0 scale-[0.7] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                <Image placeholder="blur" src={img5} alt="Business 1" className="w-full h-full object-cover" />
            </div>

            <div ref={img4Ref} style={{ transform: "perspective(1000px) rotateY(20deg)" }} className="absolute left-[18%] z-0 scale-[0.8] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                <Image placeholder="blur" src={img4} alt="Business 1" className="w-full h-full object-cover" />
            </div>

            <div ref={img2Ref} style={{ transform: "perspective(1000px) rotateY(-20deg)" }} className="absolute right-[10%] z-0 scale-[0.7] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                <Image placeholder="blur" src={img2} alt="Business 1" className="w-full h-full object-cover" />
            </div>

            <div ref={img3Ref} style={{ transform: "perspective(1000px) rotateY(-20deg)" }} className="absolute right-[18%] z-0 scale-[0.8] h-[30vw] w-[43vw] overflow-hidden rounded-[2vw]">
                <Image placeholder="blur" src={img3} alt="Business 1" className="w-full h-full object-cover" />
            </div>

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
        </>
    )
}