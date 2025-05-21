"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion"; // Fixed import
import { LinkButton } from "../Buttons";
import Image from "next/image";
import Heading from "../Heading";
import Copy from "../Copy";

export default function Payments() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [mode, setMode] = useState("personal");

  const stepsData = {
    personal: [
      {
        title: "Secure way of accessing World of Banking",
        desc: "Access banking with Montra Soft Token & linked accounts/cards.",
        link: "/personal/banking",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Personal Payments",
        desc: "Make fast, secure personal payments.",
        link: "/personal/payments",
        image: "/assets/images/homepage/personal-step-1.png",
      },
      {
        title: "Manage Your Finances",
        desc: "Finance tracking tools with smart insights.",
        link: "/personal/finance",
        image: "/assets/images/homepage/personal-step-2.png",
      },
      {
        title: "Chat and Pay",
        desc: "Use Montra Chat to manage transactions with ease.",
        link: "/personal/chat",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Shop Smart",
        desc: "Purchase using Montra for seamless checkout.",
        link: "/personal/shop",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
    ],
    business: [
      {
        title: "Business-grade Banking",
        desc: "Full suite banking tools for enterprises.",
        link: "/business/banking",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Business Payments",
        desc: "Send/receive business payments efficiently.",
        link: "/business/payments",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Agency Banking",
        desc: "Expand services through Montra Agency banking.",
        link: "/business/agency-banking",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Inventory Management",
        desc: "Track and manage your inventory easily.",
        link: "/business/inventory-management",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Payment Gateway",
        desc: "Integrate Montra payment gateway into your platform.",
        link: "/business/payment-gateway",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Tap and Pay",
        desc: "NFC-based fast checkout.",
        link: "/business/tap-and-pay",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
      {
        title: "Montra Store",
        desc: "Host and sell your goods via Montra platform.",
        link: "/business/montra-store",
        image: "/assets/images/homepage/personal-mobile-mockup.png",
      },
    ],
  };

  const yStart = 5.5;
  const yEnd = 315.5;
  const length = yEnd - yStart;

  const swapMode = (newMode) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "auto" });
    }
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => setMode(newMode));
    } else {
      setMode(newMode);
    }
  };

  const handleSkip = () => {
    const nextSection = document.getElementById("section-break");
    if (!nextSection) return;
    nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const thresholds = {
    banking: (6 - yStart) / length,
    payment: (69 - yStart) / length,
    finance: (132 - yStart) / length,
    chat: (195 - yStart) / length,
    shop: (258 - yStart) / length,
  };

  const RAMP = 0.01;
  const inactiveColor = "#EEEEEE";
  const activeColor = "#215CFF";

  const makeColor = (t) =>
    useTransform(scrollYProgress, [t - RAMP, t], [inactiveColor, activeColor]);

  const colorBanking = makeColor(thresholds.banking);
  const colorPayment = makeColor(thresholds.payment);
  const colorFinance = makeColor(thresholds.finance);
  const colorChat = makeColor(thresholds.chat);
  const colorShop = makeColor(thresholds.shop);

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      ref={sectionRef}
      className="h-[600vh] bg-white relative py-[4vw]"
      id="payment"
    >
      <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between">
        {/* Toggle */}
        <div className="absolute fadeupanim top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
          <motion.div
            className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300"
            style={{ translateX: mode === "personal" ? "0%" : "97%" }}
          />
          <button
            onClick={() => swapMode("personal")}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${
              mode === "personal" ? "text-white" : ""
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => swapMode("business")}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${
              mode === "business" ? "text-white" : ""
            }`}
          >
            Business
          </button>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="fadeupanim absolute z-30 text-[1vw] bottom-10 right-10 font-display"
        >
          Skip{" "}
          <div className="w-[2vw] h-[2vw]">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00049 12.71C7.20932 12.71 7.41068 12.7828 7.5708 12.9141L7.63623 12.9736L11.9292 17.2666L12.0005 17.3369L16.3628 12.9746C16.5325 12.8108 16.7598 12.7207 16.9956 12.7227C17.2315 12.7247 17.4577 12.8186 17.6245 12.9854C17.7913 13.1522 17.8861 13.3783 17.8882 13.6143C17.8902 13.8497 17.7995 14.0765 17.6362 14.2461L12.6362 19.2461C12.4675 19.4147 12.239 19.5097 12.0005 19.5098C11.7917 19.5098 11.5903 19.4369 11.4302 19.3057L11.3638 19.2461L6.36377 14.2461C6.19526 14.0774 6.10021 13.8488 6.1001 13.6104C6.1001 13.4016 6.17315 13.2001 6.3042 13.04L6.36377 12.9736C6.53254 12.8049 6.76184 12.71 7.00049 12.71ZM17.0044 6.69727C17.1238 6.69623 17.2425 6.71948 17.353 6.76465C17.4636 6.80987 17.5645 6.87652 17.6489 6.96094C17.7123 7.02435 17.7662 7.09685 17.8081 7.17578L17.8452 7.25684C17.8792 7.33993 17.9006 7.42752 17.9087 7.5166L17.9126 7.60547C17.9116 7.72497 17.8865 7.84332 17.8394 7.95312C17.804 8.0354 17.7564 8.11164 17.6987 8.17969L17.6382 8.24512L17.6362 8.24609L12.6362 13.2461C12.4675 13.4147 12.239 13.5097 12.0005 13.5098C11.7917 13.5098 11.5903 13.4369 11.4302 13.3057L11.3638 13.2461L6.36377 8.24609C6.19526 8.07743 6.10021 7.84876 6.1001 7.61035C6.1001 7.40164 6.17315 7.20014 6.3042 7.04004L6.36377 6.97363C6.53254 6.80491 6.76184 6.70996 7.00049 6.70996C7.20932 6.71001 7.41068 6.78282 7.5708 6.91406L7.63623 6.97363L11.9292 11.2666L12.0005 11.3369L16.3647 6.97266C16.427 6.90821 16.4985 6.85277 16.5767 6.80957L16.6577 6.77051C16.74 6.73523 16.8269 6.71274 16.9155 6.70312L17.0044 6.69727Z"
                fill="#111111"
                stroke="white"
                stroke-width="0.2"
              />
            </svg>
          </div>
        </button>

        {/* SVG Progress Line */}
        <div className="flex gap-4 fadeupanim">
          <motion.svg
            className="h-[15vw]"
            width="14"
            height="428"
            viewBox="0 0 14 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="6.95801"
              y1="5.5"
              x2="6.95799"
              y2="345"
              stroke={inactiveColor}
              strokeWidth="3"
            />
            <motion.line
              x1="6.95801"
              y1="5.5"
              x2="6.95799"
              y2="345"
              stroke={activeColor}
              strokeWidth="3"
              style={{ scaleY }}
              className="!origin-top"
            />
            <motion.circle cx="6.95801" cy="6" r="5.5" fill={colorBanking} />
            <motion.circle cx="6.95801" cy="83" r="5.5" fill={colorPayment} />
            <motion.circle cx="6.95801" cy="162" r="5.5" fill={colorFinance} />
            <motion.circle cx="6.95801" cy="240" r="5.5" fill={colorChat} />
            <motion.circle cx="6.95801" cy="321" r="5.5" fill={colorShop} />
          </motion.svg>

          <div className="flex flex-col justify-between font-display text-[1vw] leading-[0.5] pb-1">
            <motion.span style={{ color: colorBanking }}>Banking</motion.span>
            <motion.span style={{ color: colorPayment }}>Payment</motion.span>
            <motion.span style={{ color: colorFinance }}>Finance</motion.span>
            <motion.span style={{ color: colorChat }}>Chat</motion.span>
            <motion.span style={{ color: colorShop }}>Shop</motion.span>
          </div>
        </div>

        {/* TEXT BLOCK */}
        <div className="h-[100vh] overflow-clip w-[40%] relative bg-white">
          <span className="absolute top-0 inset-x-0 pointer-events-none h-[16vw] bg-gradient-to-b from-white via-white to-transparent z-10" />
          <span className="absolute bottom-0 inset-x-0 pointer-events-none h-[11vw] bg-gradient-to-t from-white via-white to-transparent z-10" />
          <motion.div
            style={{ translateY }}
            className="flex flex-col relative space-y-[10vw] pt-[30vh]"
          >
            {stepsData[mode].map((step, i) => (
              <div key={i} className="step-block w-fit">
                <Heading>
                  <h3 className="text-[3.4vw] font-display capitalize font-medium leading-[1.2]">
                    {step.title}
                  </h3>
                </Heading>
                <Copy>
                  <p className="w-[80%] py-8">{step.desc}</p>
                </Copy>
                <LinkButton
                  text="Learn More"
                  href={step.link}
                  className="!w-fit block"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* IMAGE BLOCK with Scroll-based Fading */}
        <div className="mr-[8vw] w-[25vw] h-[50vh] relative">
          {stepsData[mode].map((step, index) => {
            const sectionTop = yStart + index * 63.5;
            const sectionBottom = sectionTop + 63.5;
            const start = (sectionTop - yStart) / length;
            const end = (sectionBottom - yStart) / length;
            // console.log(step)
            const opacity = useTransform(
              scrollYProgress,
              [start - 0.1, start, end, end + 0.1],
              [0, 1, 1, 0]
            );
            const scale = useTransform(
              scrollYProgress,
              [start, end],
              [0.95, 1]
            );

            return (
              <motion.div
                key={index}
                className="absolute top-0 left-0 w-full h-full"
                style={{ opacity, scale }}
              >
                <Image
                  src={step.image}
                  height={605}
                  width={481}
                  className="w-full h-auto object-contain"
                  alt={`${mode} mobile mockup ${index}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
