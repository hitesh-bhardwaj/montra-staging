'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LinkButton } from '../Buttons';
import Image from 'next/image';
import Heading from '../Heading';

export default function PaymentCopy() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const [mode, setMode] = useState('personal');

  // 1) Your per-step data with individual image URLs
  const stepsData = {
    personal: [
      {
        title: 'Secure way of accessing World of Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/personal/banking',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
      {
        title: 'Secure way of accessing World of Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/personal/payments',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
      {
        title: 'Secure way of accessing World of Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/personal/finance',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
      {
        title: 'Secure way of accessing World of Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/personal/chat',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
      {
        title: 'Secure way of accessing World of Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/personal/shop',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
    ],
    business: [
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/banking',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/payments',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/agency-banking',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/inventory-management',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/montra-store',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/payment-gateway',
        image: '/assets/images/homepage/personal-mobile-mockup.png',
      },
      {
        title: 'Business-grade Banking',
        desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
        link: '/business/tap-and-pay',
        image: '/assets/images/homepage/business-mobile-mockup.png',
      },
    ],
  };

  // 2) Master list of all keys (hook count stays constant)
  const allThresholdKeys = [
    'banking',
    'payment',
    'finance',
    'chat',
    'shop',
    'businessBanking',
    'businessPayments',
    'agency',
    'inventory',
    'montra',
    'businessPaymentGateway',
    'tap',
  ];

  // 3) Which subset applies to each mode
  const thresholdKeys = {
    personal: ['banking', 'payment', 'finance', 'chat', 'shop'],
    business: [
      'businessBanking',
      'businessPayments',
      'agency',
      'inventory',
      'montra',
      'businessPaymentGateway',
      'tap',
    ],
  };

  // 4) Your scroll thresholds
  const thresholds = {
    banking: 0.02,
    payment: 0.25,
    finance: 0.50,
    chat: 0.74,
    shop: 0.88,
    businessBanking: 0.02,
    businessPayments: 0.15,
    agency: 0.30,
    inventory: 0.44,
    montra: 0.58,
    businessPaymentGateway: 0.73,
    tap: 0.90,
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
    const vh = window.innerHeight * (mode === 'personal' ? 1.3 : 0.83);
    const offset = sectionRef.current.offsetTop + index * vh;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  const swapMode = (newMode) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ block: 'start' });
    }
    if (document.startViewTransition) {
      document.startViewTransition(() => setMode(newMode));
    } else {
      setMode(newMode);
    }
  };

  const handleSkip = () => {
    const next = document.getElementById('section-break');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  const inactiveColor = '#EEEEEE';
  const activeColor = '#215CFF';
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
    [0, mode === 'personal' ? 1 : 0.65]
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0', mode === 'personal' ? '-78%' : '-83%']
  );

  return (
    <section
      ref={sectionRef}
      className="h-[600vh] bg-white relative py-[4vw]"
      id="payment"
    >
      <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between">
        {/* MODE TOGGLE */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white border border-[#E2EFFF] rounded-full p-0.5">
          <motion.div
            className="absolute top-[3%] left-0 w-1/2 h-[92%] rounded-full bg-primary"
            style={{ translateX: mode === 'personal' ? '0%' : '97%' }}
          />
          <button
            onClick={() => swapMode('personal')}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full ${
              mode === 'personal' ? 'text-white' : ''
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => swapMode('business')}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full ${
              mode === 'business' ? 'text-white' : ''
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
          Skip<div className="w-[1.2vw] h-[1.2vw]">
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
        {mode === 'personal' && (
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
              {['Banking', 'Payment', 'Finance', 'Chat', 'Shop'].map(
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
        {mode === 'business' && (
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
                'Banking',
                'Payments',
                'Agency Banking',
                'Inventory Management',
                'Montra Store',
                'Payment Gateway',
                'Tap & Pay',
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
        <div className="h-[100vh] w-[40%] overflow-clip relative bg-white">
          <span className="absolute top-0 inset-x-0 h-[16vw] bg-gradient-to-b from-white to-transparent z-10" />
          <span className="absolute bottom-0 inset-x-0 h-[11vw] bg-gradient-to-t from-white to-transparent z-10" />
          <motion.div
            style={{ translateY }}
            className="flex flex-col relative space-y-[10vw] pt-[30vh]"
          >
            {stepsData[mode].map((step, i) => (
              <div key={i} className="step-block">
                <Heading>
                  <h3 className="text-[3.4vw] font-display capitalize font-medium leading-[1.2]">
                    {step.title}
                  </h3>
                </Heading>
                <p className="w-[80%] py-8">{step.desc}</p>
                <LinkButton text="Learn More" href={step.link} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* IMAGE BLOCK */}
        <div className="sticky top-0 right-[7%] w-[40%] h-[30vw] flex items-center justify-center">
          <div className="relative w-full h-full">
            {stepsData[mode].map((step, idx) => {
              const key = thresholdKeys[mode][idx];
              return (
                <motion.div
                  key={key}
                  style={{ opacity: transformsMap[key] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
