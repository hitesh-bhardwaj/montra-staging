"use client";
import { useRef, useEffect } from "react";
import { LinkButton } from "../Buttons";
import gsap from "gsap";
import Banking from "./Banking";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
gsap.registerPlugin(ScrollTrigger);

export default function Payments() {
  const sectionRef = useRef(null);
  const containerRef = useRef();
  const itemsRef = useRef([]);
  const scrollToStep = (index) => {
    if (!sectionRef.current) return;

    const totalItems = data.length;
    const sectionHeight = 98 / totalItems; // matches the logic in useEffect
    const targetY = (window.innerHeight * index)+495;
    console.log(sectionHeight)
    const scrollTop = sectionRef.current.offsetTop + targetY;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, data.length);
    const totalItems = data.length;
    const sectionHeight = 98 / totalItems;
    const circles = document.querySelectorAll(".svg-circle");
    const labels = document.querySelectorAll(".indicator-label");
   
    itemsRef.current.forEach((el, index) => {
      const start = `${sectionHeight * index + 4}% 30%`;
      const end = `${sectionHeight * (index + 1.1)}% 30%`;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start,
            end,
            scrub: true,
            onEnter: () => {
              // Set zIndex higher
              itemsRef.current.forEach((item, i) => {
                gsap.set(item, { zIndex: i === index ? 10 : 0 });
              });

              gsap.to(circles[index], {
                fill: "#215CFF",
                stroke: "#215CFF",
                duration: 0.3,
              });
              gsap.to(labels[index], { color: "#215CFF", duration: 0.3 });
            },
            onEnterBack: () => {
              // Same as onEnter for reverse scroll
              itemsRef.current.forEach((item, i) => {
                gsap.set(item, { zIndex: i === index ? 10 : 0 });
              });

              gsap.to(circles[index], {
                fill: "#215CFF",
                stroke: "#215CFF",
                duration: 0.3,
              });
              gsap.to(labels[index], { color: "#215CFF", duration: 0.3 });
            },
            onLeave: () => {
              gsap.to(circles[index], {
                fill: "white",
                stroke: "#D2D2D2",
                duration: 0.3,
              });
              gsap.to(labels[index], { color: "#D2D2D2", duration: 0.3 });
            },
            onLeaveBack: () => {
              gsap.to(circles[index], {
                fill: "white",
                stroke: "#D2D2D2",
                duration: 0.3,
              });
              gsap.to(labels[index], { color: "#D2D2D2", duration: 0.3 });
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
          delay: 0.2,
        });
    });
  }, [data]);

  return (
    <section
      ref={sectionRef}
      className="h-[750vh] pt-[10vw] w-screen bg-white max-sm:hidden max-md:hidden"
    >
      <div className="w-full text-center flex items-center justify-center ">
        <Heading>
          <h2 className="text-[5.7vw] font-display font-medium  w-[80%] capitalize leading-[1.2]">
            Smart Business Management Tools For Smarter Businesses
          </h2>
        </Heading>
      </div>
      <div className="sticky top-0 pl-[4vw] h-screen flex items-center justify-between overflow-hidden">
        <div className="flex gap-3 w-[30vw] h-[20vw]">
          <svg
            className="h-full"
            width="14"
            height="390"
            viewBox="0 0 14 390"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="6.95801"
              cy="12"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="73.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="135.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="196.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="255.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="318.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
            <circle
              cx="6.95801"
              cy="380.5"
              r="5.5"
              fill="white"
              stroke="#EEEEEE"
              strokeWidth="2"
              className="svg-circle"
            />
          </svg>
          <div className="flex flex-col w-[12vw] justify-between text-[#D2D2D2] font-display text-[1vw] leading-[1.2] navigation-business">
            {data.map((item, index) => (
              <span
                key={index}
                className="indicator-label cursor-pointer"
                onClick={() => scrollToStep(index)}
              >
                {item.field}
              </span>
            ))}
          </div>
        </div>

        <div ref={containerRef} className="relative h-[700vh]">
          <div className="sticky top-0 h-screen w-[40vw] flex items-center justify-start text-left ml-[1vw]">
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
        <div className="h-screen w-full">
          <Banking />
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/banking",
    color: "#FF8100",
    icon: "/assets/images/business/banking-icon.svg",
    field: "Banking",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/payments",
    color: "#215CFF",
    icon: "/assets/images/business/payments-icon.svg",
    field: "Payments",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/agency-banking",
    color: "#35C771",
    icon: "/assets/images/business/agency-banking-icon.svg",
    field: "Agency Banking",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/inventory-management",
    color: "#111111",
    icon: "/assets/images/business/inventory-icon.svg",
    field: "Inventory Management",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/montra-store",
    color: "#FB2F55",
    icon: "/assets/images/business/montra-icon.svg",
    field: "Montra Store",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/payment-gateway",
    color: "#7A78FF",
    icon: "/assets/images/business/payment-gateway-icon.svg",
    field: "Payment Gateway",
  },
  {
    title: "Banking That Works for Your Business",
    para: "Experience seamless digital banking with Montra—designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.",
    link: "/business/tap-and-pay",
    color: "#FFB909",
    icon: "/assets/images/business/tap-and-pay-icon.svg",
    field: "Tap & Pay",
  },
];
