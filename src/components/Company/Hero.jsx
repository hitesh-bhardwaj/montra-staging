"use client";
import { AppleStoreButton, PlayStoreButton } from "../Buttons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import Heading from "../Heading";
import Copy from "../Copy";
import { useLenis } from "lenis/react";
import { fadeUpAnim } from "../gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  fadeUpAnim();
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imgRef = useRef(null);
   const lenis = useLenis();

   const [videoSrc, setVideoSrc] = useState(null); 

   useEffect(() => {
     const timeout = setTimeout(() => {
       setVideoSrc("/assets/images/company/company-page-background.mp4");
     }, 3000);
 
     return () => clearTimeout(timeout);
   }, []);
 
   useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".montra-logo", {
        duration: 0,
        scrollTrigger: {
          trigger: "#hero",
          start: "40% top",
          // markers: true,
          onLeaveBack: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(1)",
              duration: 0,
            });
          },
          onEnter: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(16)",
              duration: 0,
            });
          },
          onLeave: () => {
            gsap.to(".montra-logo", {
              filter: "brightness(1)",
              duration: 0,
            });
          },
          onLeaveBack:()=>{
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
      gsap.to(".ham-mobile",{
        backgroundColor: "#215CFF",
        duration:0,
        scrollTrigger: {
          trigger: "#hero",
          start: "40% top",
          // markers: true,
          onEnter: () => {
            gsap.to(".ham-mobile", {
              backgroundColor:"white",
              duration: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to(".ham-mobile", {
              backgroundColor: "#215CFF",
              duration: 0,
            });
          },
          onLeave: () => {
            gsap.to(".ham-mobile", {
              backgroundColor: "#215CFF",
              duration: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(".ham-mobile", {
              backgroundColor: "white",
              duration: 0,
            });
          },
        },
      })
    });
    return () => ctx.revert();
  });

   useEffect(() => {
    lenis && lenis.stop();

    const timeout = setTimeout(() => {
      lenis && lenis.start();
    }, 1500);

    return () => clearTimeout(timeout)
  }, [lenis]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if(globalThis.innerWidth>1024){
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: bgRef.current,
                    start: "top 80%",
                    end: "70% 80%",
                    scrub: 0.25,
                }
            });

            tl.to(bgRef.current, {
                clipPath: 'ellipse(70vw 90vh at 50% 80%)',
                duration: 2,
                ease: "none",
            })
                .to(bgRef.current, {
                    clipPath: 'ellipse(100vw 100vh at 50% 80%)',
                    duration: 1,
                    ease: "none",
                })
            }
        }, sectionRef);
    
        return () => ctx.revert();
    }, []);
    useEffect(()=>{
      const ctx = gsap.context(()=>{
       gsap.from(".fadeup",{
        y:30,
        opacity:0,
        delay:1,
       })

      })
      return()=>ctx.revert()
    },[])

  return (
    <section id="hero" className="w-screen overflow-hidden relative">
      <div className="h-full flex items-center justify-center text-center px-[4vw] max-md:flex-col">
        <div className="w-[80%] mx-auto space-y-[1.2vw] pt-[14%] py-[5vw] max-sm:w-full max-sm:pt-[30vw] max-sm:space-y-[7vw] max-md:pt-[30vw] max-md:w-full max-md:space-y-[5vw]">
          <Heading delay={0.7}>
            <h1 className="text-[5.7vw] font-display font-medium capitalize leading-[1.15] heroAnim max-sm:text-[11.5vw] max-sm:leading-[1.2] max-sm:w-full max-md:text-[8vw] max-md:w-[80%] max-md:mx-auto">
              <span className="text-primary">Montra: </span>Building future of
              an Inclusive Financial Ecosystem
            </h1>
          </Heading>
          <Copy delay={1}>
            <p className="font-body w-[95%] mx-auto heroAnim max-sm:w-[95%] max-md:w-[70%]">
              Montra is reimagining how people and businesses in emerging
              markets access, manage, and grow their money—without the
              complexity of traditional banks. We make finance simple,
              inclusive, and built for real life.
            </p>
          </Copy>
          <div className=" flex gap-10 justify-center mt-[4vw] max-sm:flex-col max-sm:items-center max-sm:gap-5 fadeup">
            <div className="">
              <AppleStoreButton />
            </div>
            <div className="">
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[125vh] flex items-end px-[4vw] py-[5vw] relative z-10  max-sm:pb-[15vw] max-sm:px-[6vw] max-md:pb-[10vw] hero-content">
        <div className="w-full text-white flex h-auto items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-[10vw] max-md:flex-col max-md:items-start max-md:gap-[7vw]">
          <Heading>
            <h2 className="text-[2.85vw] font-medium leading-[1.3] w-[27%] font-display max-sm:w-full max-sm:text-[10vw] max-md:text-[5.5vw] max-md:w-[80%]">
              How We&apos;re Changing the Game
            </h2>
          </Heading>
          <Copy>
            <p className="w-1/2 max-sm:w-full max-md:w-[80%]">
            <span className="font-semibold">We offer more than just payments. </span>
            <br/>
            At Montra, we provide a full suite of digital tools designed for both individuals and businesses. From easy-to-use apps for payments and account management to powerful features that give you access to credit, investments, and insurance, we help you make a smooth shift from cash to fast, secure digital payments.
            </p>
          </Copy>
        </div>
      </div>

            <div
                ref={bgRef}
                style={{ clipPath: 'ellipse(19vw 19vw at 50% 35%)' }}
                // style={{ clipPath: 'ellipse(50vw 50vw at 50% 25%)' }}

                className="w-screen h-[120vh] absolute bottom-0 left-0  max-sm:hidden max-md:hidden fadeup">
                  <video  muted playsInline loop autoPlay
                   src={videoSrc} 
                   poster="/assets/images/company/poster.webp"
                    ref={imgRef} 
                     className="w-full h-full object-cover absolute"/>
            </div>
            <div
                className="w-screen h-[100vh] absolute bottom-0 left-0 hidden max-sm:block max-md:block">
                     <video src={videoSrc} muted playsInline loop autoPlay ref={imgRef}  className="w-full h-full object-cover absolute"/>
            </div>
        </section>
    );
}

export default Hero;
