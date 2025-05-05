import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from 'next/image';
import { LinkButton } from '../Buttons';


const BankingCard = ({color,link,title,para, icon ,field})=>{
  return(
    <>
    <div className='w-full flex flex-col items-center justify-center h-full'>
      <div className={` h-[60vw] w-full rounded-[6vw] flex  items-center justify-center gap-[3vw] text-white`} style={{ backgroundColor: color }}>
          <Image src={icon} height={70} width={70} alt='banking-icon'/>
          <p className='text-[6.5vw] font-display font-medium'>{field}</p>
       
        </div>
        <div className='space-y-[6vw] pt-[8vw] pb-[4vw] px-[1vw]'>
        <h2 className='text-[6.5vw] font-display w-[70%] capitalize font-medium'>{title}</h2>
        <p>{para}</p>
        <LinkButton href={link} text={"Learn More"}/>
        
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
    <section  className="h-full w-screen px-[7vw] relative bg-white">
      <div className='space-y-[5vw]'>
    <div className='w-full text-left flex items-center justify-center '>
  <h2 className='text-[11vw] font-display font-medium  capitalize leading-[1.15] mb-[7vw]'>Smart Business Management Tools For Smarter Businesses</h2>
</div>
<div className=' '>
<Swiper onSwiper={(swiper) => (swiperRef.current = swiper)} spaceBetween={30}
 className="mySwiper" >
  {data.map((item,index)=>(
 <SwiperSlide key={index}><BankingCard color={item.color} title={item.title} para={item.para} icon={item.icon} field={item.field} link={item.link}/></SwiperSlide>
  ))}
      </Swiper>
      <div
          className={`absolute z-[5] w-[10vw] h-[10vw] top-[100%] right-[20%]  border border-black overflow-hidden group  transition-all duration-500 rounded-full prev-button cursor-pointer mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw] mobile:right-[25%] mobile:hidden tablet:w-fit tablet:h-fit tablet:right-[12%] tablet:top-[20%] hover:text-white hover:bg-primary hover:border-primary group ease
                ${activeButton === "prev"
              ? " text-black group-hover:text-white"
              : "bg-transparent "
            } transition-colors duration-300`}
          onClick={handlePrev}
        >
          <div className="w-[10vw] h-[10vw]  mobile:w-[7.5vw] mobile:h-[7.5vw] relative z-[6] tablet:w-[5.5vw] tablet:h-[5.5vw] flex justify-center items-center ">
          <span className="w-[4vw] h-[4vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw] group-hover:text-white rotate-180">
            <svg width="30" height="30" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1804 8.0298L11.4307 14.7796C11.2899 14.9203 11.0991 14.9994 10.9 14.9994C10.701 14.9994 10.5102 14.9203 10.3694 14.7796C10.2287 14.6389 10.1497 14.448 10.1497 14.249C10.1497 14.05 10.2287 13.8591 10.3694 13.7184L15.8396 8.24917H1.15037C0.95146 8.24917 0.760701 8.17016 0.620053 8.02951C0.479406 7.88886 0.400391 7.6981 0.400391 7.49919C0.400391 7.30029 0.479406 7.10953 0.620053 6.96888C0.760701 6.82823 0.95146 6.74922 1.15037 6.74922L15.8396 6.74922L10.3694 1.28002C10.2287 1.1393 10.1497 0.948432 10.1497 0.749416C10.1497 0.550399 10.2287 0.359534 10.3694 0.218808C10.5102 0.0780824 10.701 -0.000976562 10.9 -0.000976563C11.0991 -0.000976563 11.2899 0.0780824 11.4307 0.218808L18.1804 6.96859C18.2502 7.03824 18.3055 7.12095 18.3432 7.212C18.381 7.30304 18.4004 7.40064 18.4004 7.49919C18.4004 7.59775 18.381 7.69534 18.3432 7.78639C18.3055 7.87744 18.2502 7.96015 18.1804 8.0298Z" fill="#111111"/>
</svg>

            </span>
          </div>
        </div>
      <div
          className={`absolute z-[5] top-[100%] right-[7%] w-[10vw] h-[10vw] overflow-hidden rounded-full next-button hover:bg-primary duration-500 transitiona-all ease cursor-pointer border border-black hover:border-primary mobile:top-[85%] mobile:w-fit mobile:h-fit mobile:p-[3vw]  group
                ${activeButton === "next" ? " text-black hover:text-white" : "bg-transparent"
            } transition-colors duration-300`}
          onClick={handleNext}
        >
          <div className="w-[10vw] h-[10vw]  relative z-[6] mobile:w-[7.5vw] mobile:h-[7.5vw] tablet:w-[5.5vw] tablet:h-[5.5vw] flex justify-center items-center  transition-all duration-500">
            <span className="w-[4vw] h-[4vw] flex justify-center items-center mobile:w-[5.5vw] mobile:h-[5.5vw] group-hover:text-white">
            <svg width="30" height="30" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1804 8.0298L11.4307 14.7796C11.2899 14.9203 11.0991 14.9994 10.9 14.9994C10.701 14.9994 10.5102 14.9203 10.3694 14.7796C10.2287 14.6389 10.1497 14.448 10.1497 14.249C10.1497 14.05 10.2287 13.8591 10.3694 13.7184L15.8396 8.24917H1.15037C0.95146 8.24917 0.760701 8.17016 0.620053 8.02951C0.479406 7.88886 0.400391 7.6981 0.400391 7.49919C0.400391 7.30029 0.479406 7.10953 0.620053 6.96888C0.760701 6.82823 0.95146 6.74922 1.15037 6.74922L15.8396 6.74922L10.3694 1.28002C10.2287 1.1393 10.1497 0.948432 10.1497 0.749416C10.1497 0.550399 10.2287 0.359534 10.3694 0.218808C10.5102 0.0780824 10.701 -0.000976562 10.9 -0.000976563C11.0991 -0.000976563 11.2899 0.0780824 11.4307 0.218808L18.1804 6.96859C18.2502 7.03824 18.3055 7.12095 18.3432 7.212C18.381 7.30304 18.4004 7.40064 18.4004 7.49919C18.4004 7.59775 18.381 7.69534 18.3432 7.78639C18.3055 7.87744 18.2502 7.96015 18.1804 8.0298Z" fill="#111111"/>
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
    title: 'Banking That Works for Your Business',
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: '#',
    color: "#FF8100",
    icon: "/assets/images/business/banking-icon.svg",
    field: "Banking",
},
{
  title: 'Banking That Works for Your Business',
  para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
  link: '#',
  color: "#215CFF",
  icon: "/assets/images/business/payments-icon.svg",
  field: "Payments",
},
{
  title: 'Banking That Works for Your Business',
  para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
  link: '#',
  color: "#35C771",
  icon: "/assets/images/business/agency-banking-icon.svg",
  field: "Agency Banking",
},
{
  title: 'Banking That Works for Your Business',
  para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
  link: '#',
  color: "#111111",
  icon: "/assets/images/business/inventory-icon.svg",
  field: "Inventory Management",
},
{
  title: 'Banking That Works for Your Business',
  para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
  link: '#',
  color: "#FB2F55",
  icon: "/assets/images/business/montra-icon.svg",
  field: "Montra Store",
},
{
  title: 'Banking That Works for Your Business',
  para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
  link: '#',
  color: "#7A78FF",
  icon: "/assets/images/business/payment-gateway-icon.svg",
  field: "Payment Gateway",
},

  {
      title: 'Banking That Works for Your Business',
      para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
      link: '#',
      color: "#FFB909",
      icon: "/assets/images/business/tap-and-pay-icon.svg",
      field: "Tap & Pay",
  }, 
]