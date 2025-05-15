import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const ImageContainerMobile = ({ img1, img2, img3, container }) => {
    const img2Ref = useRef(null);
    const img3Ref = useRef(null); 
    const mainImgContainer = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if(globalThis.innerWidth<541){
            gsap.from([mainImgContainer.current, img3Ref.current, img2Ref.current], {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 1,
                stagger: 0.3,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "1800 bottom",
                    scrub: true,
                }
            })

            tl.to([img2Ref.current, img3Ref.current], {
                opacity: 0, y: 40, stagger: 0.4, duration: 1,
            }).to(mainImgContainer.current, {
                borderWidth: 10, yPercent: 140, duration: 4, delay: -0.2,
            })
        }
        if(globalThis.innerWidth > 541  && globalThis.innerWidth < 1024){
            gsap.from([mainImgContainer.current, img3Ref.current, img2Ref.current], {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 1,
                stagger: 0.3,
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "25% 70%",
                    end: "50% top",
                    scrub: true,
                    // markers:true
                }
            })
            tl.to([img2Ref.current, img3Ref.current], {
                opacity: 0, y: 40, stagger: 0.4, duration: 1,
            }).to(mainImgContainer.current, {
                borderWidth: 10, yPercent: 130, duration: 4, delay: -0.2,
            })
        }
        })
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div ref={img2Ref} className="absolute top-[-10%] z-0 scale-[0.75] h-[70vw] w-[90%] overflow-hidden rounded-[8vw]">
                <Image placeholder="blur" src={img2} alt="Business 1" className="w-full h-full object-cover" />
            </div>

            <div ref={img3Ref} className="absolute top-0 z-0 scale-[0.85] h-[70vw] w-[90%] overflow-hidden rounded-[8vw]">
                <Image placeholder="blur" src={img3} alt="Business 1" className="w-full h-full object-cover" />
            </div>

            <div ref={mainImgContainer} className="shadow-2xl fadeinanim relative z-10 w-[90%] h-[70vw] rounded-[8vw] overflow-hidden border-[0px] border-black-1 bg-black-1 hidden flex-col justify-between max-sm:flex max-md:flex">
                <Image placeholder="blur" src={img1} alt="Main Business" className="w-full h-full object-cover absolute top-0 left-0" />
                <div className="relative top-0 left-0 w-full h-full flex flex-col justify-between p-[3vw]">
                    <span className="bg-primary text-white px-2 py-1 rounded-full self-end">
                        Business
                    </span>
                    <h3 className="text-white text-4xl font-bold font-display self-center">₦ 20,000</h3>
                    <div className="bg-white p-2 rounded-2xl flex items-center gap-2 w-full">
                        <span className="w-8 h-8 rounded-full bg-primary" />
                        <div className="text-black-1">
                            <div className="text-[14px]">Total Amount Collected</div>
                            <div className="text-sm font-display">Today</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}