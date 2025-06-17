import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import { LinkButton } from '../Buttons';


const BankingCard = ({ color, link, title, para, icon, field }) => {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center h-full'>
        <div className={` max-sm:h-[60vw] max-sm:w-full rounded-[6vw] flex  items-center justify-center gap-[3vw] text-white max-md:h-[50vw] max-md:w-[100%]`} style={{ backgroundColor: color }}>
          <Image src={icon} height={70} width={70} alt='banking-icon' />
          <p className='max-sm:text-[6.5vw] font-display font-medium max-sm:w-[40%] max-sm:text-center max-md:text-[5.5vw] max-md:w-[50%]'>{field}</p>

        </div>
        <div className='space-y-[6vw] pt-[8vw] pb-[4vw] px-[1vw]'>
          <h2 className='text-[7vw] font-display w-[90%] capitalize font-medium'>{title}</h2>
          <div className='pb-[4vw] space-y-[2vw]' dangerouslySetInnerHTML={{__html:para}}/>
          {/* <p className='max-sm:w-full max-md:w-[85%]'>{para}</p> */}
          <LinkButton href={link} text={"Learn More"} />

        </div>

      </div>
    </>
  )
}
const MobileBanking = () => {
  const swiperRef = useRef(null);
  const [activeButton, setActiveButton] = useState("");

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setActiveButton("next");
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setActiveButton("prev");
    }
  };
  return (
    <section  className="h-fit w-screen px-[7vw] relative bg-white max-sm:py-[10%] max-md:py-[7%]">
      <div className='space-y-[5vw]'>
    <div className='w-full text-left flex items-center justify-center '>
  <h2 className='max-sm:text-[11vw] font-display font-medium  capitalize leading-[1.15] mb-[7vw] max-md:text-[8vw]'>Smart Business Management Tools For Smarter Businesses</h2>
</div>
<div className=' '>
<Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} spaceBetween={30}
 className="mySwiper" >
  {data.map((item,index)=>(
 <SwiperSlide key={index}><BankingCard color={item.color} title={item.title} para={item.para} icon={item.icon} field={item.field} link={item.link}/></SwiperSlide>
  ))}
      </Swiper>
      <div
          className={`absolute z-[5] w-[10vw] h-[10vw] top-[100%] right-[20%]  border border-black overflow-hidden group  transition-all duration-500 rounded-full prev-button cursor-pointer max-sm:top-[92%] max-sm:w-fit max-sm:h-fit max-sm:p-[1vw]  max-sm:right-[25%] max-md:w-fit max-md:h-fit max-md:right-[20%] max-md:top-[95%] hover:text-white hover:bg-primary hover:border-primary group ease
                ${activeButton === "prev"
                ? " text-black group-hover:text-white"
                : "bg-transparent "
              } transition-colors duration-300`}
            onClick={handlePrev}
          >
            <div className="w-[10vw] h-[10vw]  max-sm:w-[9.5vw] max-sm:h-[9.5vw] relative z-[6] max-md:h-[8vw] max-md:w-[8vw] flex justify-center items-center ">
              <span className="w-[4vw] h-[4vw] flex justify-center items-center max-sm:w-[5vw] max-sm:h-[5vw]  max-md:h-[5vw] max-md:w-[5vw] group-hover:text-white rotate-180">
                <svg width="30" height="30" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1804 8.0298L11.4307 14.7796C11.2899 14.9203 11.0991 14.9994 10.9 14.9994C10.701 14.9994 10.5102 14.9203 10.3694 14.7796C10.2287 14.6389 10.1497 14.448 10.1497 14.249C10.1497 14.05 10.2287 13.8591 10.3694 13.7184L15.8396 8.24917H1.15037C0.95146 8.24917 0.760701 8.17016 0.620053 8.02951C0.479406 7.88886 0.400391 7.6981 0.400391 7.49919C0.400391 7.30029 0.479406 7.10953 0.620053 6.96888C0.760701 6.82823 0.95146 6.74922 1.15037 6.74922L15.8396 6.74922L10.3694 1.28002C10.2287 1.1393 10.1497 0.948432 10.1497 0.749416C10.1497 0.550399 10.2287 0.359534 10.3694 0.218808C10.5102 0.0780824 10.701 -0.000976562 10.9 -0.000976563C11.0991 -0.000976563 11.2899 0.0780824 11.4307 0.218808L18.1804 6.96859C18.2502 7.03824 18.3055 7.12095 18.3432 7.212C18.381 7.30304 18.4004 7.40064 18.4004 7.49919C18.4004 7.59775 18.381 7.69534 18.3432 7.78639C18.3055 7.87744 18.2502 7.96015 18.1804 8.0298Z" fill="#111111" />
                </svg>

              </span>
            </div>
          </div>
          <div
            className={`absolute z-[5] top-[100%] right-[7%] w-[10vw] h-[10vw] overflow-hidden rounded-full next-button hover:bg-primary duration-500 transitiona-all ease cursor-pointer border border-black max-sm:top-[92%] max-sm:w-fit max-sm:h-fit max-sm:p-[1vw]  max-sm:right-[10%] max-md:w-fit max-md:h-fit max-md:right-[10%] max-md:top-[95%] hover:text-white  group ease
                ${activeButton === "next" ? " text-black hover:text-white" : "bg-transparent"
              } transition-colors duration-300`}
            onClick={handleNext}
          >
            <div className="w-[10vw] h-[10vw]  relative z-[6] max-sm:w-[9.5vw] max-sm:h-[9.5vw] max-md:w-[8vw] max-md:h-[8vw] flex justify-center items-center  transition-all duration-500">
              <span className="w-[4vw] h-[4vw] flex justify-center items-center max-sm:w-[5vw] max-sm:h-[5vw] max-md:h-[5vw] max-md:w-[5vw] group-hover:text-white">
                <svg width="30" height="30" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1804 8.0298L11.4307 14.7796C11.2899 14.9203 11.0991 14.9994 10.9 14.9994C10.701 14.9994 10.5102 14.9203 10.3694 14.7796C10.2287 14.6389 10.1497 14.448 10.1497 14.249C10.1497 14.05 10.2287 13.8591 10.3694 13.7184L15.8396 8.24917H1.15037C0.95146 8.24917 0.760701 8.17016 0.620053 8.02951C0.479406 7.88886 0.400391 7.6981 0.400391 7.49919C0.400391 7.30029 0.479406 7.10953 0.620053 6.96888C0.760701 6.82823 0.95146 6.74922 1.15037 6.74922L15.8396 6.74922L10.3694 1.28002C10.2287 1.1393 10.1497 0.948432 10.1497 0.749416C10.1497 0.550399 10.2287 0.359534 10.3694 0.218808C10.5102 0.0780824 10.701 -0.000976562 10.9 -0.000976563C11.0991 -0.000976563 11.2899 0.0780824 11.4307 0.218808L18.1804 6.96859C18.2502 7.03824 18.3055 7.12095 18.3432 7.212C18.381 7.30304 18.4004 7.40064 18.4004 7.49919C18.4004 7.59775 18.381 7.69534 18.3432 7.78639C18.3055 7.87744 18.2502 7.96015 18.1804 8.0298Z" fill="#111111" />
                </svg>

              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MobileBanking

const data = [
  {
    title: "Banking That Works for Your Business",
    para: "<p>Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.</p>",
    link: "/business/banking",
    color: "#FF8100",
    icon: "/assets/images/business/banking-icon.svg",
    field: "Banking",
  },
  {
    title: "Accept Payments without Limits",
    para: "<p>Your Montra Business Account unlocks everything you need to get paid, faster and easier.</p><ol class='pl-[2vw] list-decimal space-y-[0.5vw] max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Accept payments via QR Scan, Bank Transfers, Tap and Pay, or POS.</li><li>Easily create and send professional invoices to collect payments.</li><li>Share instant Payment Links and watch funds flow in, hassle-free.</li></ol><p>From customer checkout to cash flow, Montra keeps your business moving forward.</p>",
    link: "/business/payments",
    color: "#215CFF",
    icon: "/assets/images/business/payments-icon.svg",
    field: "Payments",
  },
  {
    title: "Earn More as a Montra Agent",
    para: "<p>Bring banking closer, Start offering essential Agency Banking services — right in your community.</p><p>Register through Montra Business to become an Agent or simply add an Agent account if you’re already a registered Montra Merchant.</p>",
    link: "/business/agency-banking",
    color: "#35C771",
    icon: "/assets/images/business/agency-banking-icon.svg",
    field: "Agency Banking",
  },
  {
    title: "Smarter Inventory. Efficient Business.",
    para: "<p>With your Montra Business Account, you can seamlessly purchase from other businesses, pay directly through invoices, send your own invoices to get paid instantly, and place orders with linked distributors — all in one streamlined system. Simplify operations, stay stocked, and keep your business moving forward with Montra.</p>",
    link: "/business/inventory-management",
    color: "#111111",
    icon: "/assets/images/business/inventory-icon.svg",
    field: "Inventory Management",
  },
  {
    title: "Sell Online — For Free",
    para: "<p>Dream bigger, sell smarter. With Montra, you don’t need a website to reach more customers and grow your business.</p><p>List your products, share your unique store link, and get paid instantly — all from your phone, with zero setup cost.</p><p>Your shop. Your terms. Your future.</p>",
    link: "/business/montra-store",
    color: "#FB2F55",
    icon: "/assets/images/business/montra-store-icon.svg",
    field: "Montra Store",
  },
  {
    title: "One Gateway, Multiple Payments Methods",
    para: "<p>Seamless Payments. Everywhere. Integrate the Montra Payment Gateway into your website or mobile app and let your customers pay their way:</p><ul class='pl-[2vw] space-y-[0.5vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[1vw]'><li>Debit & Credit Cards</li><li>Bank Accounts via QR Scan</li><li>Montra App — with account balance or Installments</li><li>USSD for offline payments</li></ul><p>Fast integration, secure transactions, and more ways to get paid — all with MontraPay.</p>",
    link: "/business/payment-gateway",
    color: "#7A78FF",
    icon: "/assets/images/business/payment-gateway-icon.svg",
    field: "Payment Gateway",
  },
  {
    title: "Accept Contactless Payments, No Extra Terminals",
    para: "<p>With Montra’s Tap to Pay, your customers can accept in-person, contactless payments directly on NFC-enabled Android devices — using only the Montra App. No extra terminals, no hardware — just tap and go. Accept payments from any physical card and keep your business moving effortlessly.</p>",
    link: "/business/tap-and-pay",
    color: "#FFB909",
    icon: "/assets/images/business/tap-and-pay-icon.svg",
    field: "Tap & Pay",
  },
];