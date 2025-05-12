'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LinkButton } from '../Buttons';
import Image from 'next/image';
import Heading from '../Heading';
import Copy from '../Copy';

export default function Payments() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    // 1) MODE STATE + DATA
    const [mode, setMode] = useState('personal');
    const stepsData = {
        personal: [
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Secure way of accessing World of Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
        ],
        business: [
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
            {
                title: 'Business-grade Banking',
                desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.',
                link: '#',
            },
        ],
    };

    const imageSrc = {
        personal: '/assets/images/homepage/personal-mobile-mockup.png',
        business: '/assets/images/homepage/personal-mobile-mockup.png',
    };

    const yStart = 5.5;
    const yEnd = 315.5;
    const length = yEnd - yStart;

    const swapMode = (newMode) => {
        // 1️⃣ Reset scroll to the top of this section
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({
                block: 'start',
                behavior: 'auto'   // instant jump; use 'smooth' if you want a smooth scroll
            });
        }

        // 2️⃣ Then swap the mode (with View Transition if available)
        if (
            typeof document !== 'undefined' &&
            'startViewTransition' in document
        ) {
            // @ts-ignore
            document.startViewTransition(() => setMode(newMode));
        } else {
            setMode(newMode);
        }
    };

    // 3) SKIP HANDLER
    const handleSkip = () => {
        if (!sectionRef.current) return;
        // scroll so that the bottom of the section is aligned to viewport bottom
        sectionRef.current.scrollIntoView({
            block: 'end',
            behavior: 'smooth',
        });
    };

    const thresholds = {
        banking: (6 - yStart) / length,
        payment: (69 - yStart) / length,
        finance: (132 - yStart) / length,
        chat: (195 - yStart) / length,
        shop: (258 - yStart) / length,
        lend: (315.5 - yStart) / length,
    };

    const RAMP = 0.01;
    const inactiveColor = '#EEEEEE';
    const activeColor = '#215CFF';

    // only color transforms now
    const makeColor = (t) =>
        useTransform(
            scrollYProgress,
            [t - RAMP, t],
            [inactiveColor, activeColor]
        );

    const colorBanking = makeColor(thresholds.banking);
    const colorPayment = makeColor(thresholds.payment);
    const colorFinance = makeColor(thresholds.finance);
    const colorChat = makeColor(thresholds.chat);
    const colorShop = makeColor(thresholds.shop);
    const colorLend = makeColor(thresholds.lend);

    // line fill
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // translateY for your step text column:
    const translateY = useTransform(scrollYProgress, [0, 1], ['0', '-82%']);

    return (
        <section ref={sectionRef} className="h-[600vh] bg-white relative" id='payment'>
            <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between">

                {/* ─── CONTROLS ─── */}
                <div className="absolute fadeupanim top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
                    {/* The moving pill */}
                    <motion.div
                        className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300"
                        style={{ translateX: mode === 'personal' ? '0%' : '97%' }}
                    />

                    {/* Buttons */}
                    <button
                        onClick={() => swapMode('personal')}
                        className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${mode === 'personal' ? 'text-white' : ''
                            }`}
                    >
                        Personal
                    </button>
                    <button
                        onClick={() => swapMode('business')}
                        className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${mode === 'business' ? 'text-white' : ''
                            }`}
                    >
                        Business
                    </button>
                </div>

                {/* Skip Button */}
                <button onClick={handleSkip} className="fadeupanim absolute text-[1vw] bottom-10 right-10 z-30 font-display flex items-center gap-1 duration-200 hover:text-primary">
                    <span>Skip</span>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00049 12.71C7.20932 12.71 7.41068 12.7828 7.5708 12.9141L7.63623 12.9736L11.9292 17.2666L12.0005 17.3369L16.3628 12.9746C16.5325 12.8108 16.7598 12.7207 16.9956 12.7227C17.2315 12.7247 17.4577 12.8186 17.6245 12.9854C17.7913 13.1522 17.8861 13.3783 17.8882 13.6143C17.8902 13.8497 17.7995 14.0765 17.6362 14.2461L12.6362 19.2461C12.4675 19.4147 12.239 19.5097 12.0005 19.5098C11.7917 19.5098 11.5903 19.4369 11.4302 19.3057L11.3638 19.2461L6.36377 14.2461C6.19526 14.0774 6.10021 13.8488 6.1001 13.6104C6.1001 13.4016 6.17315 13.2001 6.3042 13.04L6.36377 12.9736C6.53254 12.8049 6.76184 12.71 7.00049 12.71ZM17.0044 6.69727C17.1238 6.69623 17.2425 6.71948 17.353 6.76465C17.4636 6.80987 17.5645 6.87652 17.6489 6.96094C17.7123 7.02435 17.7662 7.09685 17.8081 7.17578L17.8452 7.25684C17.8792 7.33993 17.9006 7.42752 17.9087 7.5166L17.9126 7.60547C17.9116 7.72497 17.8865 7.84332 17.8394 7.95312C17.804 8.0354 17.7564 8.11164 17.6987 8.17969L17.6382 8.24512L17.6362 8.24609L12.6362 13.2461C12.4675 13.4147 12.239 13.5097 12.0005 13.5098C11.7917 13.5098 11.5903 13.4369 11.4302 13.3057L11.3638 13.2461L6.36377 8.24609C6.19526 8.07743 6.10021 7.84876 6.1001 7.61035C6.1001 7.40164 6.17315 7.20014 6.3042 7.04004L6.36377 6.97363C6.53254 6.80491 6.76184 6.70996 7.00049 6.70996C7.20932 6.71001 7.41068 6.78282 7.5708 6.91406L7.63623 6.97363L11.9292 11.2666L12.0005 11.3369L16.3647 6.97266C16.427 6.90821 16.4985 6.85277 16.5767 6.80957L16.6577 6.77051C16.74 6.73523 16.8269 6.71274 16.9155 6.70312L17.0044 6.69727Z" fill="currentColor" stroke="white" strokeWidth="0.2" />
                    </svg>
                </button>

                {/* Progress SVG */}
                <div className="flex gap-4 fadeupanim">
                    <motion.svg
                        className="h-[15vw]"
                        width="14" height="328"
                        viewBox="0 0 14 328"
                        fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="6.95801" y1="5.5" x2="6.95799" y2="315.5"
                            stroke={inactiveColor} strokeWidth="3"
                        />
                        <motion.line
                            x1="6.95801" y1="5.5" x2="6.95799" y2="315.5"
                            stroke={activeColor} strokeWidth="3"
                            style={{ scaleY }} className="!origin-top"
                        />

                        <motion.circle
                            cx="6.95801" cy="6" r="5.5"
                            fill={colorBanking} stroke={colorBanking} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="69" r="5.5"
                            fill={colorPayment} stroke={colorPayment} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="132" r="5.5"
                            fill={colorFinance} stroke={colorFinance} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="195" r="5.5"
                            fill={colorChat} stroke={colorChat} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="258" r="5.5"
                            fill={colorShop} stroke={colorShop} strokeWidth="2"
                        />
                        <motion.circle
                            cx="6.95801" cy="321" r="5.5"
                            fill={colorLend} stroke={colorLend} strokeWidth="2"
                        />
                    </motion.svg>

                    <div className="flex flex-col justify-between font-display text-[1vw] leading-[0.5] pb-1">
                        <motion.span style={{ color: colorBanking }}>
                            Banking
                        </motion.span>
                        <motion.span style={{ color: colorPayment }}>
                            Payment
                        </motion.span>
                        <motion.span style={{ color: colorFinance }}>
                            Finance
                        </motion.span>
                        <motion.span style={{ color: colorChat }}>
                            Chat
                        </motion.span>
                        <motion.span style={{ color: colorShop }}>
                            Shop
                        </motion.span>
                        <motion.span style={{ color: colorLend }}>
                            Lend
                        </motion.span>
                    </div>
                </div>

                {/* ─── TEXT BLOCK ─── */}
                <div className="h-[100vh] overflow-clip w-[40%] relative bg-white">
                    {/* fade masks */}
                    <span className="absolute top-0 inset-x-0 pointer-events-none h-[20vw] bg-gradient-to-b from-white via-[#fff] to-transparent z-10" />
                    <span className="absolute bottom-0 inset-x-0 pointer-events-none h-[14vw] bg-gradient-to-t from-white via-[#fff] to-transparent z-10" />

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
                                <Copy>
                                    <p className="w-[80%] py-8">{step.desc}</p>
                                </Copy>
                                <LinkButton text="Learn More" href={step.link} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* ─── IMAGE BLOCK ─── */}
                <div className="mr-[8vw]">
                    <Image
                        style={{ viewTransitionName: 'payments-image' }}
                        src={imageSrc[mode]}
                        height={605}
                        width={481}
                        className="w-[25vw] h-auto object-cover"
                        alt={`${mode} mobile mockup`}
                    />
                </div>
            </div>
        </section>
    );
}
