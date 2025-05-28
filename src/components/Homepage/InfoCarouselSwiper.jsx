'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import Image from 'next/image'
import Cursor from '../Cursor'
import Copy from '../Copy'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { NextButton, PreviousButton } from '../Buttons/SliderButtons'

gsap.registerPlugin(ScrollTrigger);

const content = [
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Set-up an Instant Bank Account for FREE to save, manage & transfer funds.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Pay anyone, anywhere with just a click . Enabling quick, simple & secure payments.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Get paid faster. Grow your business by accepting Payments from everyone using our QR code, Soft-POS & POS terminal. Receive instant voice & text notifications & settlement advice on Montra App.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Power your business with our Payment Gateway. Simply integrate Montra Payment Gateway with your website or Mobile App to start accepting payments from your customers.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Compare loan offers from our Lending Partners & get instant loan disbursement to meet your cashflow gaps for your Personal & Business finances.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Shop from brands and creators you love powered by quick, simple & secure payments. Offering customers superior online shopping experience with Chat feature enabling them to interact with Sellers & even make payment while chatting.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Build your dream Virtual Store for free to start selling online. Send feeds to build awareness, Chat with those interested in buying, Build relationships with those who follow your store & Offer tailormade payment methods to boost your business.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Compare Insurance Policy Premiums & Features to buy the most suitable plan from our Insurance Partners.' },
    { img: '/assets/images/homepage/features-3.png', bgColor: '#EAF1FF', text: 'Compare best Investment plans available towards maximizing your returns.' },
    { img: '/assets/images/homepage/features-1.png', bgColor: '#F1FFE8', text: 'Simple, reliable, private messaging and calls for free. Montra Chat comes with CHAT PAY feature to enable you to make payments or request payments while you are chatting with someone.' },
    { img: '/assets/images/homepage/features-2.png', bgColor: '#FFEAEE', text: 'Earn exciting rewards when you make Bill Payments or buy Airtime & Data on Montra App.' },
]

export default function InfoCarouselSwiper() {
    const swiperRef = useRef(null); 
  
    const handleNext = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); 
      }
    };
  
    const handlePrev = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev(); 
      }
    };

    useEffect(() => {
        const ctx = gsap.context(() => { 
            gsap.fromTo(".featureSwipeSlide", {
                opacity: 0, y: 50
            }, {
                opacity: 1, y: 0, duration: 1.5, stagger: 0.1, scrollTrigger: { trigger: "#infocarousel", start: 'top 80%', markers: false }
            })
        })
        return () => ctx.revert();
    });
    useEffect(() => {
        const ctx = gsap.context(() => {
    
          gsap.to(".ham-mobile",{
            backgroundColor: "#215CFF",
            duration:0,
            scrollTrigger: {
              trigger: "#infocarousel",
              start: "top top",
              // markers: true,
              onEnter: () => {
                gsap.to(".ham-mobile", {
                  backgroundColor:"white",
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

    return (
        <div className="text-white py-[3vw] bg-primary dark relative h-full" id='infocarousel'>
            <div className='max-md:w-full max-md:flex max-md:justify-center max-sm:justify-start'>
            <Copy>
                <h3 className='ml-[5vw] text-white font-display font-medium text-[3vw] w-[40%] capitalize leading-[1.3] pb-[3vw] max-sm:text-[7.5vw] max-sm:w-[85%] max-sm:pb-[10vw] max-md:text-[7.5vw] max-md:w-[80%] max-md:pb-[6vw] max-md:text-center max-sm:text-left'>Sort All Your Payments And Cash Flow Needs</h3>
            </Copy>

            </div>
            <Swiper
                modules={[Pagination, FreeMode]}
                slidesPerView={1.05}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                speed={1000}
                freeMode={true}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024:{slidesPerView:3,spaceBetween:30}
                }}
                className="!px-[5vw] swipe !pb-16 !h-auto"
            >
                {content.map((c, index) => (
                    <SwiperSlide className=' featureSwipeSlide !h-auto' key={index}>
                        <Card img={c.img} text={c.text} bgColor={c.bgColor} />
                    </SwiperSlide>
                ))}
                 <Cursor />
            </Swiper>
            <div className='w-fit flex gap-4 absolute right-[5%] top-[10%] max-md:hidden'>

            <PreviousButton onClick={handlePrev} />
            <NextButton onClick={handleNext} />
            </div>
        </div>
    )
}

const Card = ({ img, bgColor, text }) => {
    return (
        <div style={{ background: bgColor }} className="overflow-hidden group min-h-[38vw] rounded-[3vw] hover:scale-[0.99] duration-500 transition-transform max-sm:rounded-[9vw] max-md:h-[65vw] max-sm:h-fit max-md:rounded-[5vw]">
            <div className='relative h-[27vw] w-full rounded-b-[3vw] overflow-hidden max-sm:h-[100vw] max-sm:rounded-[9vw] max-md:h-[40vw]'>
                <Image src={img} alt='feature image' fill className='object-cover group-hover:scale-[1.05] duration-500' />
            </div>
            <p className='text-black-1 py-7 px-6'>{text}</p>
        </div>
    )
}