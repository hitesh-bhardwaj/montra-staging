"use client";
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
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const targetRef = useRef(null);
  const lenis = useLenis();
  const [isMobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
    
      gsap.to(".montra-logo", {
        filter: "brightness(1)",
        duration: 0,
        scrollTrigger: {
          trigger: "#hero",
          start: "20% top",
          // markers: true,
          onEnter: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(16)",
              duration: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(1)",
              duration: 0,
            });
          },
          onLeave: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(1)",
              duration: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(16)",
              duration: 0,
            });
          },
        },
      });
    });
    return () => ctx.revert();
  });
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 2200);

    return () => clearTimeout(timeout);
  }, [lenis]);
  useEffect(() => {
    gsap.to(".businessHero",{
        scrollTrigger:{
            trigger:".businessHero",
            start:"20% top",
            end:"bottom top",
            onEnter:()=>{
                gsap.to(".businessHero",{
                    backgroundColor:"#215CFF",
                    duration:0.5,
                })
            },
            onLeaveBack:()=>{
                gsap.to(".businessHero",{
                    backgroundColor:"transparent",
                    duration:0.5,
                })
            }
        }
    })
  });

  return (
    <>
      <section ref={targetRef} id="hero" className="h-full w-screen">
        <div className="relative h-[500vh] max-sm:h-full max-md:h-full businessHero ">
          <TopContent />

          <div className="hidden justify-center pointer-events-none items-center z-10 relative h-[100vw] mt-[20vw] max-sm:flex max-md:flex">
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
          <div className="flex justify-center pointer-events-none items-center h-[90vh] sticky top-0 z-10 max-sm:hidden max-md:hidden">
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
  );
}
