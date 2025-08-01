"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "framer-motion";
import gsap from "gsap";

const  Steps = ({ stepData }) => {
  const [step, setStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevStepRef = useRef(0);
  const [showRestart, setShowRestart] = useState(false);
  const controlsArray = useRef(stepData.steps.map(() => useAnimation()));
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".montra-logo", {
        scrollTrigger: {
          trigger: "#steps",
          start: "top top",
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
      gsap.to(".ham-mobile", {
        backgroundColor: "#215CFF",
        duration: 0,
        scrollTrigger: {
          trigger: "#steps",
          start: "top top",
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
      });
    });
    return () => ctx.revert();
  });
  useEffect(() => {
    if (inView) {
      if (step === stepData.steps.length - 1) {
        const timeout = setTimeout(() => {
          setShowRestart(true);
        }, 3000);

        return () => clearTimeout(timeout);
      } else {
        setShowRestart(false);
      }
    }
  }, [step]);

  useEffect(() => {
    if (inView && !isAnimating) {
      controlsArray.current.forEach((control, i) => {
        if (i !== step) {
          control.stop();
          control.set({ strokeDashoffset: 126 });
        }
      });

      controlsArray.current[step]
        .start({
          strokeDashoffset: 0,
          transition: { duration: 4, ease: "linear" },
        })
        .then(() => {
          if (step < stepData.steps.length - 1) {
            setStep((s) => s + 1);
          }
        });
    }
  }, [step, inView, isAnimating]);

  useEffect(() => {
    if (inView) {
      if (step !== currentStep) {
        setIsAnimating(true);
        const timeout = setTimeout(() => {
          setCurrentStep(step);
          setIsAnimating(false);
        }, 800);

        return () => clearTimeout(timeout);
      }
    }
  }, [step]);
  return (
    <section
      ref={ref}
      className="w-screen h-full bg-primary px-[4vw] py-[5%] text-white max-sm:py-[15%] max-sm:px-[7vw] relative max-sm:h-fit overflow-hidden max-sm:min-h-[100vh]"
      id="steps"
    >
      <div className="flex flex-col h-full items-start max-sm:flex-col max-md:flex-col">
        <div className={` flex items-center max-sm:w-full max-md:w-full ${stepData.width ? stepData.width : "w-2/5"}`}>
          <h2 className="text-[5vw] font-display leading-[1.1] max-sm:text-[11vw] max-sm:font-medium max-md:text-[7.5vw] max-md:leading-[1.2] max-md:font-medium">
            {stepData.heading}
          </h2>
        </div>
        <div className="w-[75%] flex items-end justify-end ml-[25vw] max-sm:flex-col max-md:flex-col max-sm:ml-0  max-md:ml-0 max-sm:w-full max-md:w-full">
        <div className="w-[50%] relative h-[70vh]  max-sm:w-[100vw] max-sm:h-[100vw] max-sm:left-[-10%] fadeupanim max-md:h-[90vw] max-md:w-[100vw] max-md:left-[0%] max-md:mt-0">
          {stepData.steps.map((s, i) => {
            const isCurrent = i === currentStep;
            const isFadingOut = i === step && isAnimating;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: isCurrent && !isAnimating ? 1 : 0,
                  pointerEvents: isCurrent && !isAnimating ? "auto" : "none",
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ zIndex: isCurrent ? 10 : 0 }}
              >
                <Image  
                  src={s.img}
                  alt={s.title}
                  layout="fill"
                  className="object-contain h-full w-full max-sm:w-full max-sm:h-full max-sm:object-contain max-md:object-contain"
                />
              </motion.div>
            );
          })}
        </div>

        <div className="w-3/5 flex flex-col h-full justify-end items-start gap-[10vw] pl-[5vw] pb-[3vw] max-sm:w-full max-sm max-sm:pl-0 max-sm:justify-center max-sm:h-fit max-mD:pl-0 fadeupanim max-md:w-full max-md:justify-center  ">
          <div>
            <motion.h3
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[3.4vw] font-display mb-[2vw] max-sm:text-[8.5vw] max-sm:font-medium max-md:text-[5.5vw] leading-[1.1]"
            >
              {stepData.steps[step].title}
            </motion.h3>
            <motion.p
              key={step + "para"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-[70%] max-sm:w-[90%]"
            >
              {stepData.steps[step].para}
            </motion.p>
          </div>
          <div className="flex items-center gap-[1vw] max-sm:z-[10] max-sm:flex-wrap max-sm:gap-y-[2vw]">
            {stepData.steps.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-[0.8vw] text-[1vw] cursor-pointer max-sm:gap-[3vw] max-md:gap-[2vw] "
                onClick={() => {
                  const prevStep = prevStepRef.current;
                  controlsArray.current[prevStep].stop();
                  controlsArray.current[prevStep].set({
                    strokeDashoffset: 126,
                  });
                  controlsArray.current[i].start({
                    strokeDashoffset: 0,
                    transition: { duration: 4, ease: "linear" },
                  });

                  setStep(i);
                  prevStepRef.current = i;
                }}
              >
                <div className="relative w-[2.5vw] h-[2.5vw] border border-white rounded-full p-2 max-sm:w-[9vw]  max-sm:h-[9vw] max-md:w-[7vw] max-md:h-[7vw] overflow-hidden">
                  <span className="absolute inset-0 flex justify-center items-center font-display max-sm:text-[4vw] max-md:text-[2.5vw]">
                    {s.number}
                  </span>
                  <svg
                    className="absolute inset-0 -rotate-[90deg] h-full w-full"
                    viewBox="0 0 40 40"
                  >
                    <motion.circle
                      cx="20"
                      cy="20"
                      r="20"
                      stroke="white"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="126"
                      animate={controlsArray.current[i]}
                      initial={{ strokeDashoffset: 126 }}
                    />
                  </svg>
                </div>
                <motion.div
                  className="inline-block overflow-hidden whitespace-nowrap font-display max-sm:text-[4vw] max-md:text-[2.8vw] "
                  animate={{
                    width: i === step ? "auto" : 0,
                    opacity: i === step ? 1 : 0,
                  }}
                  style={{ width: i === step ? "auto" : 0 }}
                >
                  <div className="max-sm:pr-[2.5vw]">
                  {s.tag}

                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        </div>
        {showRestart && (
          <motion.div
            className="ml-4 font-display cursor-pointer opacity-0  group absolute bottom-[5%] right-[5%] rounded-[4vw] flex items-center gap-2 text-[1vw] max-sm:text-[4vw] max-md:text-[3vw] max-sm:bottom-[3%] max-sm:right-[5%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setStep(0)}
          >
            Restart
            <span className="inline-block">
              <Image
                src={"/assets/icons/restart-icon.svg"}
                height={12}
                width={12}
                alt="restart-icon"
                className="group-hover:rotate-[360deg] duration-1000 max-md:w-[2vw] max-md:h-[2vw]"
              />
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Steps;
