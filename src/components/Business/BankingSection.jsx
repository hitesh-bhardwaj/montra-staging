"use client";
import { useRef, useEffect } from "react";
import { LinkButton } from "../Buttons";
import gsap from "gsap";
import Banking from "./Banking";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import UseMobile from "../UseMobile";
gsap.registerPlugin(ScrollTrigger);

export default function Payments() {
  const sectionRef = useRef(null);
  const containerRef = useRef();
  const itemsRef = useRef([]);
  const isMobile = UseMobile();

  const scrollToStep = (index) => {
    if (!sectionRef.current) return;

    const totalItems = data.length;
    const sectionHeight = 95 / totalItems;
    const targetY = (window.innerHeight * index) + 330;
    const scrollTop = sectionRef.current.offsetTop + targetY;

    window.scrollTo({
      top: scrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      if (globalThis.innerWidth > 1024) {
        itemsRef.current = itemsRef.current.slice(0, data.length);
        const totalItems = data.length;
        const sectionHeight = 95 / totalItems;
        const circles = document.querySelectorAll(".svg-circle");
        const labels = document.querySelectorAll(".indicator-label");

        // line fill
        gsap.fromTo(
          ".line-banking",
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "7% top",
              end: "95% bottom",
              scrub: true,
            },
          }
        );

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
                  itemsRef.current.forEach((item, i) =>
                    gsap.set(item, { zIndex: i === index ? 10 : 0 })
                  );
                  gsap.to(circles[index], { fill: "#215CFF", stroke: "#215CFF", duration: 0.3 });
                  gsap.to(labels[index], { color: "#215CFF", duration: 0.3 });
                },
                onEnterBack: () => {
                  itemsRef.current.forEach((item, i) =>
                    gsap.set(item, { zIndex: i === index ? 10 : 0 })
                  );
                  gsap.to(circles[index], { fill: "#215CFF", stroke: "#215CFF", duration: 0.3 });
                  gsap.to(labels[index], { color: "#215CFF", duration: 0.3 });
                },
                onLeaveBack: () => {
                  gsap.to(circles[index], { fill: "white", stroke: "#D2D2D2", duration: 0.3 });
                  gsap.to(labels[index], { color: "#D2D2D2", duration: 0.3 });
                },
              },
            })
            .fromTo(el,
              { opacity: 0, yPercent: 5, ease: "none" },
              { opacity: 1, yPercent: 0, ease: "none" }
            )
            .to(el, {
              opacity: 0,
              yPercent: -5,
              ease: "none",
              delay: 0.2,
            });
        });

        const snapPoints = data.map((_, i) => i / (data.length - 1));
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "7% top",
          end: "95% bottom",
          snap: {
            snapTo: snapPoints,
            duration: 0.5,
            ease: "power1.inOut",
          },
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
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
        <div className="bg-black/5 h-[34%] w-[2px] absolute top-[33%] left-[4.43%]">
          <div className="w-full h-[20%] bg-primary line-banking" />
        </div>
        <div className="flex gap-3 w-[30vw] h-[35%] relative z-[5]">
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
                <div className="space-y-[1.5vw] my-[2vw] w-[90%]" dangerouslySetInnerHTML={{ __html: item.para }} />
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
    para: "<p>Experience seamless digital banking with Montra designed to simplify transactions, manage cash flow, and unlock access to credit and financial tools. Whether you're a small shop or a scaling enterprise, Montra helps you bank smarter, not harder.</p>",
    link: "/business/banking",
    color: "#FF8100",
    icon: "/assets/images/business/banking-icon.svg",
    field: "Banking",
  },
  {
    title: "Accept Payments without Limits",
    para: "<p>Your Montra Business Account unlocks everything you need to get paid, faster and easier.</p><ol class='pl-[2vw] list-decimal space-y-[0.5vw]'><li>Accept payments via QR Scan, Bank Transfers, Tap and Pay, or POS.</li><li>Easily create and send professional invoices to collect payments.</li><li>Share instant Payment Links and watch funds flow in, hassle-free.</li></ol><p>From customer checkout to cash flow, Montra keeps your business moving forward.</p>",
    link: "/business/payments",
    color: "#215CFF",
    icon: "/assets/images/business/payments-icon.svg",
    field: "Payments",
  },
  {
    title: "Earn More as a Montra Agent",
    para: "<p>Bring banking closer, Start offering essential Agency Banking services right in your community</p><p>Register through Montra Business to become an Agent or simply add an Agent account if you’re already a registered Montra Merchant.</p>",
    link: "/business/agency-banking",
    color: "#35C771",
    icon: "/assets/images/business/agency-banking-icon.svg",
    field: "Agency Banking",
  },
  {
    title: "Smarter Inventory. Efficient Business.",
    para: "<p>With your Montra Business Account, you can seamlessly purchase from other businesses, pay directly through invoices, send your own invoices to get paid instantly, and place orders with linked distributors, all in one streamlined system. Simplify operations, stay stocked, and keep your business moving forward with Montra.</p>",
    link: "/business/inventory-management",
    color: "#111111",
    icon: "/assets/images/business/inventory-icon.svg",
    field: "Inventory Management",
  },
  {
    title: "Sell Online  For Free",
    para: "<p>Dream bigger, sell smarter. With Montra, you don’t need a website to reach more customers and grow your business.</p><p>List your products, share your unique store link, and get paid instantly,  all from your phone, with zero setup cost.</p><p>Your shop. Your terms. Your future.</p>",
    link: "/business/montra-store",
    color: "#FB2F55",
    icon: "/assets/images/business/montra-store-icon.svg",
    field: "Montra Store",
  },
  {
    title: "One Gateway, Multiple Payments Methods",
    para: "<p>Seamless Payments. Everywhere.Integrate the Montra Payment Gateway into your website or mobile app and let your customers pay their way: </p><ul class='pl-[2vw] space-y-[0.5vw] list-disc'><li>Debit & Credit Cards</li><li>Bank Accounts via QR Scan</li><li>Montra App; with account balance or Installments</li><li>USSD for offline payments</li></ul><p>Fast integration, secure transactions, and more ways to get paid.</p>",
    link: "/business/payment-gateway",
    color: "#7A78FF",
    icon: "/assets/images/business/payment-gateway-icon.svg",
    field: "Payment Gateway",
  },
  {
    title: "Accept Contactless Payments, No Extra Terminals",
    para: "<p>With Montra’s Tap to Pay, your customers can accept in-person, contactless payments directly on NFC-enabled Android devices  using only the Montra App. No extra terminals, no hardware, just tap and go. Accept payments from any physical card and keep your business moving effortlessly.</p>",
    link: "/business/tap-and-pay",
    color: "#FFB909",
    icon: "/assets/images/business/tap-and-pay-icon.svg",
    field: "Tap & Pay",
  },
];
