"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LinkButton } from "../Buttons";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PaymentSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const [mode, setMode] = useState("personal");
  const itemsRef = useRef([]);
  const imageRefs = useRef([]);
  const image2Refs = useRef([]);

  // 4) Your scroll thresholds
  const thresholds = {
    banking: 0.0,
    payment: 0.23,
    finance: 0.47,
    chat: 0.7,
    shop: 0.91,
    businessBanking: 0.0,
    businessPayments: 0.18,
    agency: 0.33,
    inventory: 0.50,
    montra: 0.65,
    businessPaymentGateway: 0.82,
    tap: 0.97,
  };

  const RAMP = 0.01;

  // 5) Build one useTransform per key, unconditionally
  const transformsMap = {};
  allThresholdKeys.forEach((key, i) => {
    const start = thresholds[key];
    const nextKey = allThresholdKeys[i + 1];
    const end = nextKey ? thresholds[nextKey] : 1;
    transformsMap[key] = useTransform(
      scrollYProgress,
      [start - RAMP, start, end - RAMP],
      [0, 1, 0]
    );
  });

  // 6) Other utilities (scrollToStep, swapMode, handleSkip, colors…)

  const scrollToStep = (index) => {
    if (!sectionRef.current) return;
    const vh = window.innerHeight * (mode === "personal" ? 1.45 : 1.0);
    const offset = sectionRef.current.offsetTop + index * vh;
    window.scrollTo({ top: offset, behavior: "smooth" });
  };

  const swapMode = (newMode) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ block: "start" });
    }
    if (document.startViewTransition) {
      document.startViewTransition(() => setMode(newMode));
    } else {
      setMode(newMode);
    }
  };

  const handleSkip = () => {
    const next = document.getElementById("section-break");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const inactiveColor = "#C2C2C2";
  const activeColor = "#215CFF";
  const makeColor = (t) =>
    useTransform(scrollYProgress, [t - RAMP, t], [inactiveColor, activeColor]);

  const colorBanking = makeColor(thresholds.banking);
  const colorPayment = makeColor(thresholds.payment);
  const colorFinance = makeColor(thresholds.finance);
  const colorChat = makeColor(thresholds.chat);
  const colorShop = makeColor(thresholds.shop);
  const colorBusinessBanking = makeColor(thresholds.businessBanking);
  const colorBusinessPayments = makeColor(thresholds.businessPayments);
  const colorBusinessAgency = makeColor(thresholds.agency);
  const colorBusinessInventory = makeColor(thresholds.inventory);
  const colorBusinessMontra = makeColor(thresholds.montra);
  const colorBusinessPayment = makeColor(thresholds.businessPaymentGateway);
  const colorBusinessTap = makeColor(thresholds.tap);

  const scaleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, mode === "personal" ? 1 : 0.60]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current = itemsRef.current.slice(0, stepsData[mode].length);
      imageRefs.current = imageRefs.current.slice(0, stepsData[mode].length);
      image2Refs.current = image2Refs.current.slice(0, stepsData[mode].length);
      const totalItems = stepsData[mode].length;
      const sectionHeight = 98 / totalItems;

      itemsRef.current.forEach((el, index) => {
        const start = `${sectionHeight * index + 4}% 70%`;
        const end = `${sectionHeight * (index + 1.2)}% 70%`;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start,
              end,
              scrub: true,
            },
          })
          .fromTo(
            el,
            { opacity: 0, yPercent: 7, zIndex: 1, },
            { opacity: 1, yPercent: 0, zIndex: 5, duration: 1, delay: 0.5, ease: "none" }
          )
          .fromTo(
            imageRefs.current[index],
            { opacity: 1, xPercent: -100, zIndex: index * 1 },
            { opacity: 1, xPercent: 0, zIndex: index * 1, duration: 1 }, "<"
          )
          .fromTo(
            image2Refs.current[index],
            { opacity: 0, scale: 1.2, },
            { opacity: 1, scale: 1, duration: 1, delay: 0.3 }, "<"
          )
          .to(el, { opacity: 0, yPercent: -7, zIndex: 1, duration: 1, delay: 0.5, ease: "none" }
          )
          // .to(imageRefs.current[index], { filter: 'brightness(0.9)', zIndex: 1, duration: 1 }, '<')
          .to(image2Refs.current[index], { opacity: 0, duration: 0.5 }, '<');
      });
    })
    return () => {
      ctx.revert();
    };

  }, [mode]);

  return (
    <section
      ref={sectionRef}
      className="h-[700vh] bg-white relative pb-[5%] max-md:hidden "
      id="payment"
    >
      <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between z-[300]">
        {/* MODE TOGGLE */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 flex gap-2 bg-white border border-[#E2EFFF] rounded-full p-0.5 z-[999]">
          <motion.div
            className="absolute top-[6%] left-0 w-1/2 h-[88%] rounded-full bg-primary "
            style={{ translateX: mode === "personal" ? "2%" : "98%" }}
          />
          <button
            onClick={() => swapMode("personal")}
            className={`relative z-10 px-[1.2vw] py-[0.5vw] rounded-full text-[1vw] ${mode === "personal" ? "text-white" : ""
              }`}
          >
            Personal
          </button>
          <button
            onClick={() => swapMode("business")}
            className={`relative z-10 px-[1.2vw] py-[0.5vw] rounded-full text-[1vw] ${mode === "business" ? "text-white" : ""
              }`}
          >
            Business
          </button>
        </div>

        {/* SKIP */}
        <button
          onClick={handleSkip}
          className="absolute bottom-10 right-10 z-30 text-[1vw] font-display flex items-center gap-1 group hover:text-primary cursor-pointer"
        >
          Skip
          <div className="w-[1.2vw] h-[1.2vw]">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              className="w-full h-full group-hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00049 12.71C7.20932 12.71 7.41068 12.7828 7.5708 12.9141L7.63623 12.9736L11.9292 17.2666L12.0005 17.3369L16.3628 12.9746C16.5325 12.8108 16.7598 12.7207 16.9956 12.7227C17.2315 12.7247 17.4577 12.8186 17.6245 12.9854C17.7913 13.1522 17.8861 13.3783 17.8882 13.6143C17.8902 13.8497 17.7995 14.0765 17.6362 14.2461L12.6362 19.2461C12.4675 19.4147 12.239 19.5097 12.0005 19.5098C11.7917 19.5098 11.5903 19.4369 11.4302 19.3057L11.3638 19.2461L6.36377 14.2461C6.19526 14.0774 6.10021 13.8488 6.1001 13.6104C6.1001 13.4016 6.17315 13.2001 6.3042 13.04L6.36377 12.9736C6.53254 12.8049 6.76184 12.71 7.00049 12.71ZM17.0044 6.69727C17.1238 6.69623 17.2425 6.71948 17.353 6.76465C17.4636 6.80987 17.5645 6.87652 17.6489 6.96094C17.7123 7.02435 17.7662 7.09685 17.8081 7.17578L17.8452 7.25684C17.8792 7.33993 17.9006 7.42752 17.9087 7.5166L17.9126 7.60547C17.9116 7.72497 17.8865 7.84332 17.8394 7.95312C17.804 8.0354 17.7564 8.11164 17.6987 8.17969L17.6382 8.24512L17.6362 8.24609L12.6362 13.2461C12.4675 13.4147 12.239 13.5097 12.0005 13.5098C11.7917 13.5098 11.5903 13.4369 11.4302 13.3057L11.3638 13.2461L6.36377 8.24609C6.19526 8.07743 6.10021 7.84876 6.1001 7.61035C6.1001 7.40164 6.17315 7.20014 6.3042 7.04004L6.36377 6.97363C6.53254 6.80491 6.76184 6.70996 7.00049 6.70996C7.20932 6.71001 7.41068 6.78282 7.5708 6.91406L7.63623 6.97363L11.9292 11.2666L12.0005 11.3369L16.3647 6.97266C16.427 6.90821 16.4985 6.85277 16.5767 6.80957L16.6577 6.77051C16.74 6.73523 16.8269 6.71274 16.9155 6.70312L17.0044 6.69727Z"
                fill="#111111"
                className="w-full h-full group-hover:fill-primary"
                stroke="white"
                strokeWidth="0.2"
              />
            </svg>
          </div>
        </button>

        {/* PERSONAL NAV */}
        {mode === "personal" && (
          <div className="flex gap-4 w-[15vw]">
            <motion.svg
              className="h-[15vw]"
              width="14"
              height="428"
              viewBox="0 0 14 328"
              fill="none"
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
              {thresholdKeys.personal.map((key, i) => {
                const colors = [
                  colorBanking,
                  colorPayment,
                  colorFinance,
                  colorChat,
                  colorShop,
                ];
                const posY = [6, 83, 162, 240, 321][i];
                return (
                  <motion.circle
                    key={key}
                    cx="6.95801"
                    cy={posY}
                    r="5.5"
                    fill={colors[i]}
                    stroke={colors[i]}
                    strokeWidth="2"
                    onClick={() => scrollToStep(i)}
                    className="cursor-pointer"
                  />
                );
              })}
            </motion.svg>
            <div className="flex flex-col justify-between text-[1vw] font-display leading-[0.5] pb-1">
              {["Banking", "Payment", "Finance", "Chat", "Shop"].map(
                (label, i) => (
                  <motion.span
                    key={label}
                    style={{
                      color: [
                        colorBanking,
                        colorPayment,
                        colorFinance,
                        colorChat,
                        colorShop,
                      ][i],
                    }}
                    onClick={() => scrollToStep(i)}
                    className="cursor-pointer"
                  >
                    {label}
                  </motion.span>
                )
              )}
            </div>
          </div>
        )}

        {/* BUSINESS NAV */}
        {mode === "business" && (
          <div className="flex gap-4 w-[15vw]">
            <motion.svg
              className="h-[20vw]"
              width="20"
              height="928"
              viewBox="0 0 14 328"
              fill="none"
            >
              <line
                x1="6.95801"
                y1="5.5"
                x2="6.95799"
                y2="545"
                stroke={inactiveColor}
                strokeWidth="2"
              />
              <motion.line
                x1="6.95801"
                y1="5.5"
                x2="6.95799"
                y2="545"
                stroke={activeColor}
                strokeWidth="2"
                style={{ scaleY }}
                className="!origin-top"
              />
              {thresholdKeys.business.map((key, i) => {
                const colors = [
                  colorBusinessBanking,
                  colorBusinessPayments,
                  colorBusinessAgency,
                  colorBusinessInventory,
                  colorBusinessMontra,
                  colorBusinessPayment,
                  colorBusinessTap,
                ];
                const posY = [5.5, 57, 110, 164, 215, 267, 323][i];
                return (
                  <motion.circle
                    key={key}
                    cx="6.95801"
                    cy={posY}
                    r="4"
                    fill={colors[i]}
                    stroke={colors[i]}
                    strokeWidth="2"
                    onClick={() => scrollToStep(i)}
                    className="cursor-pointer"
                  />
                );
              })}
            </motion.svg>
            <div className="flex flex-col justify-between text-[1vw] font-display leading-[0.5] pb-1 h-[20vw]">
              {[
                "Banking",
                "Payments",
                "Agency Banking",
                "Inventory Management",
                "Montra Store",
                "Payment Gateway",
                "Tap & Pay",
              ].map((label, i) => (
                <motion.span
                  key={label}
                  style={{
                    color: [
                      colorBusinessBanking,
                      colorBusinessPayments,
                      colorBusinessAgency,
                      colorBusinessInventory,
                      colorBusinessMontra,
                      colorBusinessPayment,
                      colorBusinessTap,
                    ][i],
                  }}
                  onClick={() => scrollToStep(i)}
                  className="cursor-pointer"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>
        )}

        {/* TEXT BLOCK */}
        <div ref={containerRef} className="relative h-full">
          <div className="sticky top-0 h-screen w-[40vw] flex items-center justify-start text-left ml-[1vw]">
            {stepsData[mode].map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="absolute text-left w-[40vw] h-screen flex flex-col justify-center"
              >
                <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[80%]">
                  {item.title}
                </h2>
                <div className="space-y-[1.5vw] py-[2vw]" dangerouslySetInnerHTML={{ __html: item.desc }} />
                <div>
                  <LinkButton text="Learn More" href={item.link} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="sticky top-[18%] right-[0%] w-[40%] mt-[10%] h-[80vh] flex items-start justify-center">
          <div className="relative w-full h-[70vh] overflow-hidden fadeupanim">
            <Image className="absolute inset-0 object-contain top-0 left-0 h-full w-full z-20" alt="mobile frame" src="/assets/animation/frame.png" width={500} height={800} quality={100} />
            {stepsData[mode].map((step, idx) => {
              const key = thresholdKeys[mode][idx];
              return (
                <React.Fragment key={key}>
                  <motion.div
                    key={key}
                    className="absolute top-0 left-0 h-full w-full"
                    style={{ opacity: 1, clipPath: 'rect(0% 100% 100% 28% round 14%)' }}
                  >
                    <Image
                      ref={(el) => (imageRefs.current[idx] = el)}
                      src={step.image}
                      alt={step.title}
                      width={415}
                      height={750}
                      quality={100}
                      className="w-full h-full absolute top-0 left-0 object-contain"
                    />
                  </motion.div>
                  <div className="absolute top-0 left-0 h-full w-full z-30">
                    <Image
                      ref={(el) => (image2Refs.current[idx] = el)}
                      src={step.highlightImg}
                      alt={step.title}
                      width={415}
                      height={750}
                      quality={100}
                      className="w-full h-full absolute top-0 left-0 object-contain"
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 1) Your per-step data with individual image URLs
const stepsData = {
  personal: [
    {
      title: "Secure way of accessing World of Banking",
      desc: "<p>Set-up your Montra Personal Account instantly for FREE. Secured with 2FA using Montra Soft Token, you can start making payments & transfers</p>",
      link: "/personal/banking",
      image: "/assets/animation/1-ss.png",
      highlightImg: "/assets/animation/1-pop.png"
    },
    {
      title: "Pay Your Way with Montra",
      desc: '<p>One app. Multiple payment options — all built for ease, speed, and control. With Montra, you can pay using your:</p><ul class="list-disc pl-[1vw] space-y-[0.3vw]"><li class="font-semibold">Montra Account</li><li><span class="font-semibold">Linked Bank Accounts – </span>Pay using your other bank accounts linked to Montra App.</li><li><span class="font-semibold">Linked Cards –  </span>Use your saved debit or credit cards on Montra App.</li><li><span class="font-semibold">Installments –  </span>Borrow instantly to Buy Now and pay overtime.</li></ul><p>Simple. Secure. Seamless.</p>',
      link: "/personal/payments",
      image: "/assets/animation/2-ss.png",
      highlightImg: "/assets/animation/2-pop.png"
    },
    {
      title: "Manage your Finance, on the Go",
      desc: '<p >Wherever life takes you, Montra’s got your back on your Finances.</p> <p>From unexpected expenses to future planning, we offer smart, secure solutions through all major Partner Institutions :</p><ul class="list-disc pl-[1vw] space-y-[0.3vw]"><li><span class="font-semibold">Loans </span></li><li><span class="font-semibold">Insurance Plans</span></li><li><span class="font-semibold">Investment Plans</span></li></ul><p>Because your money should move as smartly as you do.</p> ',
      link: "/personal/finance",
      image: "/assets/animation/3-ss.png",
      highlightImg: "/assets/animation/3-pop.png"
    },
    {
      title: "Send Messages. Send & Request Money. Same Chat.",
      desc: '<p>Introducing <span class="font-semibold">CHAT to PAY — </span>  Montra’s game-changing feature that lets you send or request money without ever leaving your conversation with other Montra users / Merchants.</p>',
      link: "/personal/chat",
      image: "/assets/animation/4-ss.png",
      highlightImg: "/assets/animation/4-pop.png"
    },
    {
      title: "Shopping Meets Simplicity",
      desc: '<p>With <span class="font-semibold">Montra Store</span>, sellers showcase. Buyers discover.</p><p>From local sellers to online brands— everyone gets a place to sell, share, chat, deliver and get paid.</p><p>Easy shopping. Instant payments. Real connections.</p>',
      link: "/personal/shop",
      image: "/assets/animation/5-ss.png",
      highlightImg: "/assets/animation/5-pop.png"
    },
  ],
  business: [
    {
      title: "All-in-One Banking. Built for Businesses",
      desc: '<p>From accepting payments and finance to operations and growth tools, <span class="font-semibold">Montra</span> is your complete ecosystem — designed to help your business grow smarter & faster</p>',
      link: "/business/banking",
      image: "/assets/images/homepage/business-banking.png",
    },
    {
      title: "Accept Payments. Expand Possibilities",
      desc: '<p>Open a Montra Business Account to start receiving payments from anyone — anytime, anywhere. Accept payments using<ul class="pl-[1vw] space-y-[0.3vw] list-disc"><li>QR codes </li> <li>Bank Transfers </li><li>Tap & Pay (Soft POS)</li><li>POS</li></ul></p>',
      link: "/business/payments",
      image: "/assets/images/homepage/business-payment.png",
    },
    {
      title: "Become a Montra Agent. Start Earning",
      desc: "<p>Offer Agency Banking services for offering Cash Deposit & Cahs withdrawal services and get paid for every transaction — it’s that simple.</p>",
      link: "/business/agency-banking",
      image: "/assets/images/homepage/business-agency-banking.png",
    },
    {
      title: "Sell Smarter. Restock Faster. Pay & Get Paid Instantly. ",
      desc: '<p>Manage orders, send invoices, and track stock. With Montra, every part of your business just flows.<ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>Send & receive Invoices</li><li>Track Inventory</li><li>Pay & Receive Instant & Credit based Payments</li></ul></p><p class="font-semibold">One flow. Zero friction!</p>',
      link: "/business/inventory-management",
      image: "/assets/images/homepage/business-inventory-management.png",
    },
    {
      title: "Start Selling Online — For Free",
      desc: '<p>No website? No problem.</p><p>Build your dream Virtual Store for free to start selling online.</p><ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>List your products</li><li>Send feeds to build awareness</li><li>Chat with those interested in buying</li><li>Build relationships with those who follow your store </li><li>Offer tailormade payment methods to boost your business</li><li>Track your Payments</li></ul><p class="font-semibold">Your ready-to-use shop at no cost.</p>',
      link: "/business/montra-store",
      image: "/assets/images/homepage/business-montra-store.png",
    },
    {
      title: "One Gateway. Multiple Payment Options.",
      desc: '<p>Integrate <span class="font-semibold">Montra Payment Gateway</span> into your app or website and accept payments via:</p><ul class="pl-[1vw] list-disc space-y-[0.3vw]"><li>Debit & Credit Cards</li><li>Bank Transfers via QR</li><li>Montra App </li><li>USSD Payments </li></ul> <p class="font-semibold">More ways to get paid. Fast integration. Instant settlement.</p>',
      link: "/business/payment-gateway",
      image: "/assets/images/homepage/business-payment-gateway.png",
    },
    {
      title: "Tap. Accept. Get Paid.",
      desc: '<p>With Montra Tap to Pay, your phone becomes a payment terminal — no extra hardware, no limits.</p><p>Accept contactless payments from cards and grow your business with every tap. <span class="italic">(available on NFC enabled Android devices)*</span></p><p class="font-semibold">It’s fast. It’s secure. And it’s all in your hands.</p>',
      link: "/business/tap-and-pay",
      image: "/assets/images/homepage/business-tap-&-pay.png",
    },
  ],
};

// 2) Master list of all keys (hook count stays constant)
const allThresholdKeys = [
  "banking",
  "payment",
  "finance",
  "chat",
  "shop",
  "businessBanking",
  "businessPayments",
  "agency",
  "inventory",
  "montra",
  "businessPaymentGateway",
  "tap",
];

// 3) Which subset applies to each mode
const thresholdKeys = {
  personal: ["banking", "payment", "finance", "chat", "shop"],
  business: [
    "businessBanking",
    "businessPayments",
    "agency",
    "inventory",
    "montra",
    "businessPaymentGateway",
    "tap",
  ],
};
