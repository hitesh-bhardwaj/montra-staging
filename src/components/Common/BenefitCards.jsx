"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Heading from "../Heading";
import Copy from "../Copy";

gsap.registerPlugin(ScrollTrigger);

const BenefitCards = ({ cardData }) => {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
        const cards = [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
        ];

        gsap.set(cards, {
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          // rotate: -15,
        });
        const moveTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 20%",
            end: "80% 20%",
            scrub: true,
            // markers: true,
            // stagger: 0.1,
          },
        });

        moveTimeline
          .to(card1Ref.current, { rotateZ: -7, ease: "none", duration: 0.2 })
          .to(card2Ref.current, {
            rotateZ: -2,
            ease: "none",
            delay: -0.2,
            duration: 0.2,
          })
          .to(card3Ref.current, {
            rotateZ: 2,
            ease: "none",
            delay: -0.2,
            duration: 0.2,
          })
          .to(card4Ref.current, {
            rotateZ: 7,
            ease: "none",
            delay: -0.2,
            duration: 0.2,
          })
          .to(card1Ref.current, {
            x: "-32vw",
            y: "5vw",
            rotateZ: -20,
            duration: 0.5,
            ease: "none",
          })
          .to(card2Ref.current, {
            x: "-10vw",
            ease: "none",
            rotateZ: -10,
            duration: 0.5,
            delay: -0.5,
          })
          .to(card3Ref.current, {
            x: "10vw",
            ease: "none",
            rotateZ: 10,
            duration: 0.5,
            delay: -0.5,
          })
          .to(card4Ref.current, {
            x: "32vw",
            y: "5vw",
            ease: "none",
            duration: 0.5,
            rotateZ: 20,
            delay: -0.5,
          })
          .to(card1Ref.current, {
            y: "0vw",
            rotateZ: 0,
            ease: "none",
            delay: 0,
            x: "-36vw",
          })
          .to(card2Ref.current, {
            ease: "none",
            rotateZ: 0,
            x: "-12vw",
            delay: -0.5,
          })
          .to(card3Ref.current, {
            ease: "none",
            rotateZ: 0,
            x: "12vw",
            delay: -0.5,
          })
          .to(card4Ref.current, {
            y: "0vw",
            x: "36vw",
            ease: "none",
            rotateZ: 0,
            delay: -0.5,
          })

          .to(card1Ref.current.querySelector(".card-inner"), {
            rotateY: -180,
            ease: "none",
            // duration:0.5,
            delay: -0.5,
          })
          .to(card2Ref.current.querySelector(".card-inner"), {
            rotateY: -180,
            ease: "none",
            // duration:0.5,
            delay: -0.5,
          })
          .to(card3Ref.current.querySelector(".card-inner"), {
            rotateY: -180,
            ease: "none",
            // duration:0.5,
            delay: -0.5,
          })
          .to(card4Ref.current.querySelector(".card-inner"), {
            rotateY: -180,
            ease: "none",
            // duration:0.5,
            delay: -0.5,
          });
      } else {
        const cards = document.querySelectorAll(".card-inner");
        cards.forEach((card) => {
          gsap.to(card, {
            rotateY: -180,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "bottom 60%",
              scrub: true,
              // markers:true
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-[500vh] w-screen pb-[15%] bg-white relative max-sm:px-[7vw] max-sm:h-full max-sm:py-[10%]"
    >
      <div className="w-full text-center flex flex-col gap-[2vw] pb-[10%] items-center justify-center max-sm:items-start max-sm:text-left max-sm:gap-[4vw] max-sm:pb-0">
        <Heading>
          <h2
            className={`text-[5.7vw] font-display font-medium  capitalize leading-[1.3] max-sm:text-[11vw] max-sm:w-full ${cardData.headingWidth}`}
          >
            {cardData.heading}
          </h2>
        </Heading>
        <Copy>
          <p className="w-[45%] max-sm:w-full">{cardData.subHeading}</p>
        </Copy>
      </div>

      <div className=" h-fit w-full sticky top-[20%] pb-[10%] pt-[20%] max-sm:static max-sm:flex max-sm:flex-col max-sm:gap-[7vw] max-sm:pb-0">
        <div
          ref={card1Ref}
          className="card w-[22.5vw] h-[35vw] absolute max-sm:static max-sm:w-[85vw] max-sm:h-[120vw]"
        >
          <div className="card-inner">
            <div className="card-front bg-primary text-white border-[1.5px] border-white">
              <Image
                src={cardData.icon1}
                height={50}
                width={50}
                className="max-sm:w-[15vw] max-sm:h-[15vw]"
                alt="montra-account"
              />
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle1}
              </h3>
            </div>
            <div className="card-back bg-white text-black border border-[#D2D2D2] h-full w-full flex ">
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle1}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardData.cardContent1 }}
              />
            </div>
          </div>
        </div>
        <div
          ref={card2Ref}
          className="card w-[22.5vw] h-[35vw] absolute max-sm:static max-sm:w-[85vw] max-sm:h-[120vw]"
        >
          <div className="card-inner">
            <div className="card-front bg-primary text-white border-[1.5px] border-white">
              <Image
                src={cardData.icon2}
                height={50}
                width={50}
                className="max-sm:w-[15vw] max-sm:h-[15vw]"
                alt="montra-account"
              />
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle2}
              </h3>
            </div>
            <div className="card-back bg-white text-black border border-[#D2D2D2]  ">
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle2}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardData.cardContent2 }}
              />
            </div>
          </div>
        </div>
        <div
          ref={card3Ref}
          className="card w-[22.5vw] h-[35vw] absolute max-sm:static max-sm:w-[85vw] max-sm:h-[120vw]"
        >
          <div className="card-inner">
            <div className="card-front bg-primary text-white border-[1.5px] border-white">
              <Image
                src={cardData.icon3}
                height={50}
                width={50}
                className="max-sm:w-[15vw] max-sm:h-[15vw]"
                alt="montra-account"
              />
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle3}
              </h3>
            </div>
            <div className="card-back bg-white text-black border border-[#D2D2D2]  ">
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle3}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardData.cardContent3 }}
              />
            </div>
          </div>
        </div>
        <div
          ref={card4Ref}
          className="card w-[22.5vw] h-[35vw] absolute max-sm:static max-sm:w-[85vw] max-sm:h-[120vw]"
        >
          <div className="card-inner">
            <div className="card-front bg-primary text-white border-[1.5px] border-white">
              <Image
                src={cardData.icon4}
                height={50}
                width={50}
                className="max-sm:w-[15vw] max-sm:h-[15vw]"
                alt="montra-account"
              />
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle4}
              </h3>
            </div>
            <div className="card-back bg-white text-black border border-[#D2D2D2] ">
              <h3 className="text-[2.4vw] leading-[1] font-display font-medium max-sm:text-[7.5vw]">
                {cardData.cardTitle4}
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: cardData.cardContent4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitCards;
