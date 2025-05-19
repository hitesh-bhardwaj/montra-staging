'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LinkButton } from '../Buttons';
import Image from 'next/image';
import Heading from '../Heading';
import Copy from '../Copy';

export default function PaymentCopy() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // MODE
  const [mode, setMode] = useState('personal');

  const stepsData = {
    personal: [
      { title: 'Secure way of accessing World of Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/personal/banking' },
      { title: 'Secure way of accessing World of Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/personal/payments' },
      { title: 'Secure way of accessing World of Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/personal/finance' },
      { title: 'Secure way of accessing World of Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/personal/chat' },
      { title: 'Secure way of accessing World of Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/personal/shop' },
    ],
    business: [
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/banking' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/payments' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/agency-banking' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/inventory-management' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/montra-store' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/payment-gateway' },
      { title: 'Business-grade Banking', desc: 'Secured with 2FA through your Montra Soft Token, you can now pay using variety of Payment methods using Montra Accounts, Bank Accounts & Cards you have linked on Montra App and Installments by borrowing loans from our Lending Partners.', link: '/business/tap-and-pay' },
    ],
  };

  const imageSrc = {
    personal: '/assets/images/homepage/personal-mobile-mockup.png',
    business: '/assets/images/homepage/personal-mobile-mockup.png',
  };

  const yStart = 5.5;
  const yEnd = 315.5;
  const length = yEnd - yStart;

  const scrollToStep = (index) => {
    if (!sectionRef.current) return;
    if(mode=='personal'){
        const vh = window.innerHeight*1.3;
        const offset = sectionRef.current.offsetTop + index * vh;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    else{
        const vh = window.innerHeight*0.83;
        const offset = sectionRef.current.offsetTop + index * vh;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    // const offset = sectionRef.current.offsetTop + index * vh;
    
  };

  const swapMode = (newMode) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        block: 'start',
        behavior: 'auto',
      });
    }
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.startViewTransition(() => setMode(newMode));
    } else {
      setMode(newMode);
    }
  };

  const handleSkip = () => {
    const nextSection = document.getElementById('section-break');
    if (!nextSection) return;
    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const thresholds = {
    banking: (6 - yStart) / length,
    payment: (78 - yStart) / length,
    finance: (150 - yStart) / length,
    chat: (215 - yStart) / length,
    shop: (278 - yStart) / length,
    businessBanking: (6 - yStart) / length,
    businessPayments: (52 - yStart) / length,
    agency: (102 - yStart) / length,
    inventory: (145 - yStart) / length,
    montra: (190 - yStart) / length,
    businessPaymentGateway: (240 - yStart) / length,
    tap: (290 - yStart) / length,
  };

  const RAMP = 0.01;
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

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, mode === 'personal' ? 1 : 0.65]);
  const translateY = useTransform(scrollYProgress, [0, 1], ['0', mode === 'personal' ? '-78%' : '-83%']);
  

  return (
    <section ref={sectionRef} className="h-[600vh] bg-white relative py-[4vw]" id="payment">
      <div className="sticky top-0 px-[4vw] h-screen flex items-center justify-between">
        {/* CONTROLS */}
        <div className="absolute fadeupanim top-[10%] left-1/2 -translate-x-1/2 flex gap-2 z-30 bg-white border border-[#E2EFFF] rounded-full overflow-hidden p-0.5">
          <motion.div
            className="absolute top-[3%] left-0 w-1/2 mx-0.5 h-[92%] rounded-full bg-primary z-0 duration-300"
            style={{ translateX: mode === 'personal' ? '0%' : '97%' }}
          />
          <button
            onClick={() => swapMode('personal')}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${mode === 'personal' ? 'text-white' : ''}`}
          >
            Personal
          </button>
          <button
            onClick={() => swapMode('business')}
            className={`relative z-10 px-[2vw] py-[0.5vw] rounded-full transition-colors ${mode === 'business' ? 'text-white' : ''}`}
          >
            Business
          </button>
        </div>

        {/* SKIP */}
        <button onClick={handleSkip} className="fadeupanim absolute z-30 text-[1vw] bottom-10 right-10 font-display flex items-center gap-1 duration-200 hover:text-primary cursor-pointer">
          <span>Skip</span>
        </button>

        {/* PERSONAL PROGRESS */}
        {mode === 'personal' && (
          <div className="flex gap-4 fadeupanim personal-progress">
            <motion.svg className="h-[15vw]" width="14" height="428" viewBox="0 0 14 328" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6.95801" y1="5.5" x2="6.95799" y2="345" stroke={inactiveColor} strokeWidth="3" />
              <motion.line x1="6.95801" y1="5.5" x2="6.95799" y2="345" stroke={activeColor} strokeWidth="3" style={{ scaleY }} className="!origin-top" />
              <motion.circle cx="6.95801" cy="6" r="5.5" fill={colorBanking} stroke={colorBanking} strokeWidth="2" onClick={() => scrollToStep(0)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="83" r="5.5" fill={colorPayment} stroke={colorPayment} strokeWidth="2" onClick={() => scrollToStep(1)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="162" r="5.5" fill={colorFinance} stroke={colorFinance} strokeWidth="2" onClick={() => scrollToStep(2)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="240" r="5.5" fill={colorChat} stroke={colorChat} strokeWidth="2" onClick={() => scrollToStep(3)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="321" r="5.5" fill={colorShop} stroke={colorShop} strokeWidth="2" onClick={() => scrollToStep(4)} className="cursor-pointer" />
            </motion.svg>
            <div className="flex flex-col justify-between font-display text-[1vw] leading-[0.5] pb-1 navigation-personal">
              <motion.span style={{ color: colorBanking }} onClick={() => scrollToStep(0)} className="cursor-pointer">Banking</motion.span>
              <motion.span style={{ color: colorPayment }} onClick={() => scrollToStep(1)} className="cursor-pointer">Payment</motion.span>
              <motion.span style={{ color: colorFinance }} onClick={() => scrollToStep(2)} className="cursor-pointer">Finance</motion.span>
              <motion.span style={{ color: colorChat }} onClick={() => scrollToStep(3)} className="cursor-pointer">Chat</motion.span>
              <motion.span style={{ color: colorShop }} onClick={() => scrollToStep(4)} className="cursor-pointer">Shop</motion.span>
            </div>
          </div>
        )}

        {/* BUSINESS PROGRESS */}
        {mode === 'business' && (
          <div className="flex gap-4 fadeupanim business-progress">
            <motion.svg className="h-[20vw]" width="20" height="928" viewBox="0 0 14 328" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="6.95801" y1="5.5" x2="6.95799" y2="545" stroke={inactiveColor} strokeWidth="2" />
              <motion.line x1="6.95801" y1="5.5" x2="6.95799" y2="545" stroke={activeColor} strokeWidth="2" style={{ scaleY }} className="!origin-top" />
              <motion.circle cx="6.95801" cy="5.5" r="4" fill={colorBusinessBanking} stroke={colorBusinessBanking} strokeWidth="2" onClick={() => scrollToStep(0)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="57" r="4" fill={colorBusinessPayments} stroke={colorBusinessPayments} strokeWidth="2" onClick={() => scrollToStep(1)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="110" r="4" fill={colorBusinessAgency} stroke={colorBusinessAgency} strokeWidth="2" onClick={() => scrollToStep(2)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="164" r="4" fill={colorBusinessInventory} stroke={colorBusinessInventory} strokeWidth="2" onClick={() => scrollToStep(3)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="215" r="4" fill={colorBusinessMontra} stroke={colorBusinessMontra} strokeWidth="2" onClick={() => scrollToStep(4)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="267" r="4" fill={colorBusinessPayment} stroke={colorBusinessPayment} strokeWidth="2" onClick={() => scrollToStep(5)} className="cursor-pointer" />
              <motion.circle cx="6.95801" cy="323" r="4" fill={colorBusinessTap} stroke={colorBusinessTap} strokeWidth="2" onClick={() => scrollToStep(6)} className="cursor-pointer" />
            </motion.svg>
            <div className="flex flex-col justify-between font-display text-[1vw] leading-[0.5] pb-1 h-[20vw] navigation-business">
              <motion.span style={{ color: colorBusinessBanking }} onClick={() => scrollToStep(0)} className="cursor-pointer">Banking</motion.span>
              <motion.span style={{ color: colorBusinessPayments }} onClick={() => scrollToStep(1)} className="cursor-pointer">Payments</motion.span>
              <motion.span style={{ color: colorBusinessAgency }} onClick={() => scrollToStep(2)} className="cursor-pointer">Agency Banking</motion.span>
              <motion.span style={{ color: colorBusinessInventory }} onClick={() => scrollToStep(3)} className="cursor-pointer">Inventory Management</motion.span>
              <motion.span style={{ color: colorBusinessMontra }} onClick={() => scrollToStep(4)} className="cursor-pointer">Montra Store</motion.span>
              <motion.span style={{ color: colorBusinessPayment }} onClick={() => scrollToStep(5)} className="cursor-pointer">Payment Gateway</motion.span>
              <motion.span style={{ color: colorBusinessTap }} onClick={() => scrollToStep(6)} className="cursor-pointer">Tap & Pay</motion.span>
            </div>
          </div>
        )}

        {/* TEXT BLOCK */}
        <div className="h-[100vh] overflow-clip w-[40%] relative bg-white">
          <span className="absolute top-0 inset-x-0 pointer-events-none h-[16vw] bg-gradient-to-b from-white via-white to-transparent z-10" />
          <span className="absolute bottom-0 inset-x-0 pointer-events-none h-[11vw] bg-gradient-to-t from-white via-white to-transparent z-10" />
          <motion.div style={{ translateY }} className="flex flex-col relative space-y-[10vw] pt-[30vh]">
            {stepsData[mode].map((step, i) => (
              <div key={i} className="step-block">
                <Heading>
                  <h3 className="text-[3.4vw] font-display capitalize font-medium leading-[1.2]">
                    {step.title}
                  </h3>
                </Heading>
                <p className="w-[80%] py-8">{step.desc}</p>
                <LinkButton text="Learn More" href={step.link} className="w-fit block" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* IMAGE BLOCK */}
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
