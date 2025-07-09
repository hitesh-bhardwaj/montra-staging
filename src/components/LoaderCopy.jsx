"use client";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);

// Create your custom ease (only once, globally safe)
CustomEase.create("myBezier", "0.86,0,0.07,1");

const LoaderCopy = () => {
  const charsRef = useRef([]);

  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const tl = gsap.timeline();
        tl.fromTo(
          ".svg-arrow",
          {
            xPercent: -102,
          },
          {
            delay: 0.3,
            duration: 1.3,
            opacity: 1,
            xPercent: -85,
            ease: "power3.inOut",
          }
        )
        .to(".svg-arrow",{
          xPercent:0,
          duration: 1.7,
          ease:"myBezier"
        })

          .to(".upper-overlay", {
            duration: 1.6,
            delay: -0.82,
            ease: "myBezier",
            clipPath: "inset(0% 0% 100% 0%)",
          })
          .to(".lower-overlay", {
            duration: 1.6,
            delay: -1.6,
            ease: "myBezier",
            clipPath: "inset(100% 0% 0% 0%)",
          })
          .to(".svg-arrow", {
            opacity: 0,
            duration: 0,
            delay: -1,
          })
          .fromTo(".loader-phonemockup", {
          scale: 1.2,
          opacity: 0,
        }, {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: -0.85,
          ease: "power4.inOut",
        })
          .fromTo(".loader-phonemockup", {
            yPercent: -80,
            zIndex: 100,
          }, {
            yPercent: 0,
            zIndex: 100,
            duration: 1.8,
            delay:-0.5,
            ease: "power4.inOut",
          })
          .to(".mockup-container", {
            zIndex: 100,
            delay: -0.5,
          })
          .to("#loader-copy", {
            opacity: 0,
            onComplete: () => {
              setHidden(true);
            },
          });
      }
      if (globalThis.innerWidth < 1024 && globalThis.innerWidth > 541) {
        const tl = gsap.timeline();
        tl.fromTo(
          ".svg-arrow",
          {
            xPercent: -150,
          },
          {
            delay: 1,
            opacity: 1,
            xPercent: -100,
          }
        )

          .to(".svg-arrow", {
            xPercent: 0,
            //   delay:0.3,
            duration: 1.5,
            ease: "myBezier",
          })

          .to(".upper-overlay", {
            duration: 1.2,
            delay: -0.8,
            ease: "myBezier",
            clipPath: "inset(0% 0% 100% 0%)",
          })
          .to(".lower-overlay", {
            duration: 1.2,
            delay: -1.2,
            ease: "myBezier",
            clipPath: "inset(100% 0% 0% 0%)",
          })

          .to(".svg-arrow", {
            opacity: 0,
            delay: -0.5,
            onComplete: () => {
              gsap.set("#loader-copy", {
                opacity: 0,
              });
              setHidden(true);
            },
          })
          .to("#loader-copy", {
            opacity: 0,
            onComplete: () => {
              setHidden(true);
            },
          });
      }
      if (globalThis.innerWidth < 541) {
        const tl = gsap.timeline();
        tl.fromTo(
          ".svg-arrow",
          {
            xPercent: -150,
          },
          {
            delay: 0.5,
            duration:0.5,
            opacity: 1,
            xPercent: -120,
          }
        )

          .to(".svg-arrow", {
            xPercent: -50,
            duration: 1.2,
            ease: "myBezier",
          })

          .to(".upper-overlay", {
            duration: 1.5,
            delay: -0.5,
            ease: "myBezier",
            clipPath: "inset(0% 0% 100% 0%)",
          })
          .to(".lower-overlay", {
            duration: 1.5,
            delay: -1.5,
            ease: "myBezier",
            clipPath: "inset(100% 0% 0% 0%)",
          })
        
          .to(".svg-arrow", {
            opacity: 0,
            delay: -0.5,
            onComplete: () => {
              gsap.set("#loader-copy", {
                opacity: 0,
              });
              setHidden(true);
            },
          })
          .to("#loader-copy", {
            opacity: 0,
            onComplete: () => {
              setHidden(true);
            },
          });
      }
    });
    return () => ctx.revert();
  }, []);

  const letters = "Loading...".split("");
  return (
    <section
      className={`w-screen h-screen  fixed top-0 left-0 z-[999]  ${
        hidden ? "hidden" : ""
      }`}
      id="loader-copy"
    >
      <div className="w-screen h-[50vh] bg-primary absolute top-0 left-0 upper-overlay" />
      <div className="w-screen h-[50vh] bg-primary absolute bottom-0 left-0 lower-overlay overflow-hidden">
        {/* <div className="breath-container absolute bottom-[5%] left-[5%]">
          {letters.map((char, index) => (
            <span
              key={index}
              id={char === "!" ? "poof" : undefined}
              ref={(el) => (charsRef.current[index] = el)}
              className="breath-char text-white text-[5.7vw] max-sm:text-[9vw]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char}
            </span>
          ))}
        </div> */}
      </div>

      <div className="w-[120vw] h-full flex justify-center items-center">
        <svg
          width="2419"
          height="261"
          className=" svg-arrow max-sm:scale-[2] max-md:scale-[1.4]"
          viewBox="0 0 1919 161"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1918.91 80.9268L1806.67 160.977L1813.9 119.399H-390.45V40.5957H1827.61L1834.64 0.132812L1918.91 80.9268Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default LoaderCopy;
