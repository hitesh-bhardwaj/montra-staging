'use client'
import img1 from "../../../../public/assets/images/business/hero-img1.png";
import img2 from "../../../../public/assets/images/business/hero-img2.png";
import img3 from "../../../../public/assets/images/business/hero-img3.png";
import img4 from "../../../../public/assets/images/business/hero-img4.png";
import img5 from "../../../../public/assets/images/business/hero-img5.png";
import img6 from "../../../../public/assets/images/business/hero-card2.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TopContent } from "./TopContent";
import { BottomContent } from "./BottomContent";
import { ImageContainer } from "./ImageContainer";
import { ImageContainerMobile } from "./ImageContainerMobile";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const targetRef = useRef(null);

    const [isMobileWidth, setMobileWidth] = useState(false);
    useEffect(() => {
        if (globalThis.innerWidth > 1024) {
            setMobileWidth(false);
        } else {
            setMobileWidth(true);
        }
    }, []);

    return (
        <>
            <section ref={targetRef} id="hero" className="h-full w-screen">
                <div className="relative h-[500vh] max-sm:h-full" >

                    <TopContent />

                    <div className="hidden justify-center pointer-events-none items-center z-10 relative h-[100vw] mt-[20vw] max-sm:flex">
                        {isMobileWidth ? (
                            <ImageContainerMobile
                                img1={img1}
                                img2={img2}
                                img3={img3}
                                container={targetRef}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex justify-center pointer-events-none items-center h-[90vh] sticky top-0 z-10 max-sm:hidden">
                    {isMobileWidth ? (
                        <></>
                    ) : (
                        <ImageContainer
                            img1={img1}
                            img2={img2}
                            img3={img3}
                            img4={img4}
                            img5={img5}
                            img6={img6}
                            container={targetRef}
                        />
                    )}
                    </div>

                    <BottomContent img6={img6} />
                </div>
            </section>
        </>
    )
}