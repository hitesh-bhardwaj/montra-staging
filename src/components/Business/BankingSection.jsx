'use client';
import { useRef, useEffect } from 'react';
import { LinkButton } from '../Buttons';
import gsap from 'gsap';
import Banking from './Banking';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Payments() {
    const sectionRef = useRef(null);
    const containerRef = useRef();
    const itemsRef = useRef([]);
useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, data.length);
    const totalItems = data.length;
    const sectionHeight = 100 / totalItems;
    const circles = document.querySelectorAll('.svg-circle');
    const labels = document.querySelectorAll('.indicator-label');
  
    itemsRef.current.forEach((el, index) => {
      const start = `${sectionHeight * index-1.5 }% top`;
      const end = `${sectionHeight * (index+0.9 )}% top`;
      console.log(start,end)
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start,
          end,
          scrub: true,
          onEnter: () => {
            gsap.to(circles[index], { fill: '#215CFF', stroke: '#215CFF', duration: 0.3 });
            gsap.to(labels[index], { color: '#215CFF', duration: 0.3 });
          },
          onLeaveBack: () => {
            gsap.to(circles[index], { fill: 'white', stroke: '#D2D2D2', duration: 0.3 });
            gsap.to(labels[index], { color: '#D2D2D2', duration: 0.3 });
          },
          onLeave: () => {
            gsap.to(circles[index], { fill: 'white', stroke: '#D2D2D2', duration: 0.3 });
            gsap.to(labels[index], { color: '#D2D2D2', duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(circles[index], { fill: '#215CFF', stroke: '#215CFF', duration: 0.3 });
            gsap.to(labels[index], { color: '#215CFF', duration: 0.3 });
          },
        },
      })
      .fromTo(
        el,
        { opacity: 0, yPercent: 5, duration: 1, ease: "none" },
        { opacity: 1, yPercent: 0, duration: 1, ease: "none" }
      )
      .to(el, {
        opacity: 0,
        yPercent: -5,
        duration: 1,
        ease: "none",
        delay: -0.2,
      });
    });
  }, [data]);
  
      
    return (
        <section ref={sectionRef} className="h-[580vh] pt-[10vw] w-screen bg-white">
          <div className='w-full text-center flex items-center justify-center '>
        <p className='text-[5.7vw] font-display font-medium  w-[80%] capitalize leading-[1.15]'>Smart Business Management Tools For Smarter Businesses</p>
    </div>
            <div className="sticky top-0 pl-[4vw] h-screen flex items-center justify-between overflow-hidden">
            <div className="flex gap-3 w-[30vw] h-[20vw]">
            <svg className='h-full' width="14" height="390" viewBox="0 0 14 390" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.95801" cy="5.5" r="5" fill="#FF8100" stroke="#EEEEEE" className='svg-circle'/>
<circle cx="6.95801" cy="68.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
<circle cx="6.95801" cy="131.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
<circle cx="6.95801" cy="194.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
<circle cx="6.95801" cy="257.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
<circle cx="6.95801" cy="320.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
<circle cx="6.95801" cy="383.5" r="5.5" fill="white" stroke="#EEEEEE" strokeWidth="2" className='svg-circle'/>
</svg>
  <div className="flex flex-col w-[10vw] justify-between text-[#D2D2D2] font-display text-[1vw] leading-[0.5] ">
    <span className='indicator-label'>Banking</span>
    <span className='indicator-label'>Payments</span>
    <span className='indicator-label'>Agency Banking</span>
    <span  className='indicator-label'>Inventory Management</span>
    <span className='indicator-label'>Montra Store</span>
    <span className='indicator-label'>Payment Gateway</span>
    <span className='indicator-label'>Tap & Pay</span>
  </div>
</div>

            <div ref={containerRef} className="relative h-[700vh]">
  <div className="sticky top-0 h-screen w-[40vw] flex items-center justify-start text-left ml-[5vw]">
    {data.map((item, index) => (
      <div
        key={index}
        ref={(el) => (itemsRef.current[index] = el)}
        className="absolute text-left w-[38vw]"
      >
        <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[80%]">
          {item.title}
        </h2>
        <p className="w-[80%] py-8">{item.para}</p>
        <LinkButton text="Learn More" href={item.link} />
      </div>
    ))}
  </div>
</div>
                <div className='h-screen w-full'>
                    <Banking />
                </div>
            </div>
        </section>
    );
}


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