"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { motion, useScroll, useTransform } from "motion/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function TextBreak() {
  const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, [breakpoint]);

    return isMobile;
  };

  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const arrowTranslateX = useTransform(
    scrollYProgress,
    [isMobile ? 0.38 : 0.27, 0.7],
    ["-150%", "0%"]
  );
  const arrowScale = useTransform(scrollYProgress, [isMobile ? 0.38 : 0.27, 0.7], [0.1, 5]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        gsap.to(".montra-logo", {
          scrollTrigger: {
            trigger: "#text-break",
            start: "20% top",
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
            onLeaveBack: () => {
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

      }
      else {
        gsap.to(".montra-logo", {
          scrollTrigger: {
            trigger: "#text-break",
            start: "30% top",
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
            onLeaveBack: () => {
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
      }
    });
    return () => ctx.revert();
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionBreakSplit = SplitText.create(textRef.current, {
        type: "words chars",
        aria: false,
        tag: 'span',
        charsClass: 'split-chars'
      });
      const t = Array.from(textRef.current.querySelectorAll(".split-chars"));

      if (globalThis.innerWidth > 1024) {
        gsap.to(".gradient", {
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: ".gradient",
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 30%",
              end: "center 70%",
              scrub: 0.25,
            },
          })
          .to(t, {
            className: "split-chars show",
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.inOut"
          }, 0)
      } else {
        gsap.to(".ham-mobile", {
          backgroundColor: "#215CFF",
          duration: 0,
          scrollTrigger: {
            trigger: "#text-break",
            start: "30% top",
            // markers: true,
            onEnter: () => {
              gsap.to(".ham-mobile", {
                backgroundColor: "white",
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
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#text-break",
              start: "top 90%",
              end: "bottom 50%",
              scrub: 0.25,
            },
          })
          .to(t, {
            className: "split-chars show",
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.inOut"
          }, 0)
      }
    })
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[160vh] w-screen  bg-[#FBFBFB] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-start max-sm:h-[180vh]"
      id="text-break"
    >
      <div className="split__wrapper h-screen flex  justify-center text-center overflow-hidden w-screen mx-auto  max-sm:mt-0 sticky top-0 pt-[17%] max-md:pt-[55%]">
        <h2
          ref={textRef}
          className="text-[5.7vw] w-[75%] font-medium font-display leading-[1.2] text-break text-black-1 max-sm:text-[10.5vw] max-md:text-[7.5vw] "
        >
          We’re not just building products, we’re building possibilities.
        </h2>

        <motion.svg
          style={{
            scale: arrowScale,
            translateX: arrowTranslateX,
            transformOrigin: "0% 50%",
          }}
          className="absolute inset-0 w-auto h-full"
          width="1459"
          height="1073"
          viewBox="0 0 1459 1073"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.000976562 0.510742C84.1488 171.168 459.872 513.205 1289.6 516.178V516.176L1393.16 516.412L1399.45 481.279L1458.43 537.775L1379.49 592.722L1386.13 555.657L1289.75 556.808V556.821C459.917 559.754 84.1538 901.822 0.000976562 1072.49V0.510742Z"
            fill="#215CFF"
          />
        </motion.svg>
      </div>
    </section>
  );
}
