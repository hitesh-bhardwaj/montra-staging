import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const Steps = () => {
  const imageRefs = useRef([]);
  const images = [
    "/assets/images/personal-banking/steps-img-1.png",
    "/assets/images/personal-banking/steps-img-1.png",
    "/assets/images/personal-banking/steps-img-1.png",
    "/assets/images/personal-banking/steps-img-1.png",
  ];

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.set(img, { opacity: i === 0 ? 1 : 0 });
    });

    let index = 0;
    const interval = setInterval(() => {
      const current = imageRefs.current[index];
      const nextIndex = (index + 1) % images.length;
      const next = imageRefs.current[nextIndex];

      gsap.to(current, { opacity: 0, duration: 1 });
      gsap.to(next, { opacity: 1, duration: 2, delay: 1 });

      index = nextIndex;
    }, 5800);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const circles = document.querySelectorAll(".step-circle svg circle");
    

    gsap.fromTo(
      circles,
      { strokeDashoffset: 126 },
      {
        strokeDashoffset: 0,
        duration: 6,
        stagger: 6,
        repeat: -1,
       
        ease: "none",
      }
    );
  }, []);

  return (
    <section className="w-screen h-screen bg-primary px-[4vw] py-[5%]">
      <div className="w-full h-full flex justify-between text-white">
        <div className="w-[40%]">
          <h2 className="text-[5vw] leading-[1.1] font-display">Get started in minutes</h2>
        </div>
        <div className="w-[40%] relative h-[60vw] mt-[-5vw]">
          {images.map((src, i) => (
            <Image
              key={i}
              ref={(el) => (imageRefs.current[i] = el)}
              src={src}
              alt={`steps-img-${i + 1}`}
              className="w-full h-full object-cover absolute top-0 left-0 "
              width={800}
              height={1200}
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>
        <div className="w-[60%] flex flex-col justify-end h-full items-start gap-[10vw] pl-[5vw]">
          <div className="w-full flex flex-col gap-[1vw] h-fit ">
            <h3 className="text-[3.4vw] capitalize  font-display"> download montra app</h3>
            <p className="w-[70%]">
              You can download Montra App from Google & IOS App stores.
            </p>
          </div>
          <div className="flex gap-[0.5vw]">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="w-fit flex gap-[1vw] items-center">
                <div className="step-circle w-[2.5vw] h-[2.5vw] rounded-full border border-white font-display flex justify-center items-center relative">
                  {`0${num}`}
                  <svg className="absolute top-0 left-0 w-full h-full -rotate-[90deg]" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="20"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="126"
                      strokeDashoffset="126"
                    />
                  </svg>
                </div>
                <p
                  className={`${
                    num === 1 ? "mr-[2vw] text-[1vw]" : "w-0 overflow-hidden"
                  } font-display`}
                >
                  Download App
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;