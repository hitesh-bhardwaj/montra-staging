"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import Heading from "../Heading";

const Discover = () => {
  const marqueeRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1025px)", () => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const container = marquee.parentElement;
        const items = itemRefs.current.filter(el => el);
        if (!items.length) return;

        const vwToPx = (vw) => window.innerWidth * (vw / 100);
        const itemHeight = vwToPx(8);
        const totalHeight = itemHeight * data.length;
        const animationDuration = 8;

        // Set initial positions
        gsap.set(marquee, { y: 0 });

        // Marquee animation
        const marqueeTl = gsap.timeline({ repeat: -1 });
        marqueeTl.to(marquee, {
          y: -totalHeight,
          duration: animationDuration,
          ease: "none",
          onUpdate: () => {
            // Seamless loop: reset position when items move out of view
            const progress = marqueeTl.progress();
            const currentY = gsap.getProperty(marquee, "y");
            if (currentY <= -totalHeight) {
              gsap.set(marquee, { y: currentY + totalHeight });
            }

            // Scaling based on position
            const containerRect = container.getBoundingClientRect();
            const centerY = containerRect.top + containerRect.height / 2;

            items.forEach((el) => {
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const elCenter = rect.top + rect.height / 2;
              const dist = Math.abs(centerY - elCenter);
              const maxDist = containerRect.height / 2;

              const scale = gsap.utils.clamp(
                0.8,
                1.3,
                gsap.utils.mapRange(0, maxDist, 1.3, 0.8, dist)
              );

              gsap.set(el, { scale });
            });
          },
        });
      });

      // Mobile animations (max-width: 540px)
      mm.add("(max-width: 540px)", () => {
        gsap.to(".montra-logo", {
          scrollTrigger: {
            trigger: "#discover",
            start: "top top",
            onLeaveBack: () => {
              gsap.to(".montra-logo", { filter: "brightness(1)", duration: 0 });
            },
            onEnter: () => {
              gsap.to(".montra-logo", { filter: "brightness(16)", duration: 0 });
            },
            onLeave: () => {
              gsap.to(".montra-logo", { filter: "brightness(1)", duration: 0 });
            },
            onEnterBack: () => {
              gsap.to(".montra-logo", { filter: "brightness(16)", duration: 0 });
            },
          },
        });

        gsap.to(".ham-mobile", {
          backgroundColor: "#215CFF",
          duration: 0,
          scrollTrigger: {
            trigger: "#discover",
            start: "top top",
            onEnter: () => {
              gsap.to(".ham-mobile", { backgroundColor: "white", duration: 0 });
            },
            onLeaveBack: () => {
              gsap.to(".ham-mobile", { backgroundColor: "#215CFF", duration: 0 });
            },
            onLeave: () => {
              gsap.to(".ham-mobile", { backgroundColor: "#215CFF", duration: 0 });
            },
            onEnterBack: () => {
              gsap.to(".ham-mobile", { backgroundColor: "white", duration: 0 });
            },
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-[6vw] py-[4vw] h-full w-screen bg-white max-sm:px-0 max-sm:py-0 max-md:px-0 max-md:py-0 max-md:mt-0" id="discover">
      <div className="flex items-center relative justify-between overflow-hidden bg-primary rounded-[4vw] py-[4vw] px-[2vw] pl-[4vw] max-sm:flex-col max-sm:px-0 max-sm:py-0 max-sm:pl-0 max-sm:rounded-none max-sm:gap-[12vw] max-sm:pt-[10%] max-md:flex max-md:flex-col max-md:px-0 max-md:py-0 max-md:pt-[10vw] max-md:pl-0 max-md:border-none max-md:gap-[10vw] max-md:rounded-[0vw]">
        <div className="w-[70%] max-sm:py-[4vw] max-sm:w-full max-sm:px-[7vw]">
          <Heading>
            <h2 className="text-[5.7vw] font-display font-medium w-[80%] capitalize leading-[1.15] text-white max-sm:text-[11vw] max-sm:leading-[1.2] max-md:text-[7.5vw] max-md:w-full">
              Discover More on Montra Marketplace
            </h2>
          </Heading>
        </div>
        <div className="w-screen h-[8vw] absolute left-0 top-0 z-[10] bg-gradient-to-t from-transparent via-primary/80 to-primary max-sm:top-[35%] max-sm:h-[25vw] max-md:h-[25vw] max-md:top-[25%]" />
        <div className="w-screen h-[8vw] absolute left-0 bottom-0 z-[10] bg-gradient-to-b from-transparent via-primary/80 to-primary max-sm:h-[25vw] max-md:h-[20vw]" />
        <div className="h-[33vw] w-[40vw] max-sm:h-[120vw] max-sm:w-full max-sm:overflow-hidden max-md:!overflow-hidden max-md:h-[95vw] max-md:w-full">
          <div
            ref={marqueeRef}
            className="w-full marquee-vertical h-fit overflow-hidden flex flex-col items-center max-md:gap-[4vw]"
          >
            {[...data, ...data].map((item, index) => (
                <div
                  key={index}
                  className="h-[8vw] flex items-center max-md:h-fit"
                >
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className="bg-[#111111] rounded-[6vw] h-fit w-fit p-[0.1vw] flex max-sm:rounded-[9vw] max-sm:p-[0.35vw]"
                >
                  <div className="h-[4.5vw] w-[4.5vw] bg-white rounded-full flex items-center justify-center max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw]">
                    <Image
                      src={item.icon}
                      height={28}
                      width={28}
                      alt="electricity-icon"
                      className="h-[2.2vw] w-[2.2vw] max-sm:w-[8vw] max-sm:h-[8vw] max-sm:object-contain max-md:h-[5vw] max-md:w-[5vw]"
                    />
                  </div>
                  <div
                    className={`h-[4.5vw] w-[14.5vw] px-[2.5vw] rounded-[6vw] flex items-center justify-center text-center max-sm:w-[70vw] max-sm:rounded-[9vw] max-sm:h-[15vw] max-sm:text-left max-sm:justify-start max-sm:pl-[7vw] max-md:w-[40vw] max-md:rounded-[7vw] max-md:h-[10vw]`}
                    style={{ backgroundColor: item.color }}
                  >
                    <p className="font-medium">{item.text}</p>
                  </div>
                </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;

const data = [
  {
    icon: "/assets/images/personal-payments/airtime.svg",
    color: "#D9F7C5",
    text: "Airtime top-up",
  },
  {
    icon: "/assets/images/personal-payments/data-recharge.svg",
    color: "#FFEAEE",
    text: "Data Recharge",
  },
  {
    icon: "/assets/images/personal-payments/cable-tv.svg",
    color: "#EAF1FF",
    text: "Cable TV",
  },
  {
    icon: "/assets/images/personal-payments/electricity-icon.svg",
    color: "#FEFFA7",
    text: "Electricity Bill",
  },
  {
    icon: "/assets/images/personal-payments/utility-bill.svg",
    color: "#CAC5F7",
    text: "Bills Payment",
  },
  {
    icon: "/assets/images/personal-payments/broadband.svg",
    color: "#FFD7CB",
    text: "Broadband",
  },
  {
    icon: "/assets/images/personal-payments/shop.svg",
    color: "#A4F3FF",
    text: "Shop",
  },
];


// "use client";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import React from "react";
// import Heading from "../Heading";

// gsap.registerPlugin(ScrollTrigger);

// const Discover = () => {
//   const marqueeRef = useRef(null);
//   const itemRefs = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // Desktop animations (min-width: 1025px)
//       mm.add("(min-width: 1025px)", () => {
//         const marquee = marqueeRef.current;
//         if (!marquee) return;

//         const container = marquee.parentElement;
//         const items = itemRefs.current.filter(el => el);
//         if (!items.length) return;

//         // Calculate heights in pixels
//         const vwToPx = (vw) => window.innerWidth * (vw / 100);
//         const itemHeight = vwToPx(8); // Item height: 8vw
//         const gapHeight = vwToPx(4); // Gap between items: 4vw
//         const numItems = data.length; // Number of items in one set
//         const totalHeight = (numItems * itemHeight) + ((numItems - 1) * gapHeight); // Total height of one set
//         const animationDuration = 8; // Match original CSS duration

//         // Duplicate items in DOM, so total items = data.length * 2
//         const totalItems = items.length;
//         const loopHeight = totalHeight * 2; // Total height of all items

//         // Set initial positions
//         gsap.set(marquee, { y: 0 });

//         // Marquee animation
//         const marqueeTl = gsap.timeline({ repeat: -1 });
//         marqueeTl.to(marquee, {
//           y: -totalHeight, // Move up by height of one set (items + gaps)
//           duration: animationDuration,
//           ease: "none",
//           onUpdate: () => {
//             // Seamless loop: reset position when items move out of view
//             const currentY = gsap.getProperty(marquee, "y");
//             if (currentY <= -totalHeight) {
//               gsap.set(marquee, { y: currentY + totalHeight });
//             }

//             // Scaling based on position
//             const containerRect = container.getBoundingClientRect();
//             const centerY = containerRect.top + containerRect.height / 2;

//             items.forEach((el) => {
//               if (!el) return;
//               const rect = el.getBoundingClientRect();
//               const elCenter = rect.top + rect.height / 2;
//               const dist = Math.abs(centerY - elCenter);
//               const maxDist = containerRect.height / 2;

//               const scale = gsap.utils.clamp(
//                 0.8,
//                 1.3,
//                 gsap.utils.mapRange(0, maxDist, 1.3, 0.8, dist)
//               );

//               gsap.set(el, { scale });
//             });
//           },
//         });
//       });

//       // Mobile animations (max-width: 540px)
//       mm.add("(max-width: 540px)", () => {
//         gsap.to(".montra-logo", {
//           scrollTrigger: {
//             trigger: "#discover",
//             start: "top top",
//             onLeaveBack: () => {
//               gsap.to(".montra-logo", { filter: "brightness(1)", duration: 0 });
//             },
//             onEnter: () => {
//               gsap.to(".montra-logo", { filter: "brightness(16)", duration: 0 });
//             },
//             onLeave: () => {
//               gsap.to(".montra-logo", { filter: "brightness(1)", duration: 0 });
//             },
//             onEnterBack: () => {
//               gsap.to(".montra-logo", { filter: "brightness(16)", duration: 0 });
//             },
//           },
//         });

//         gsap.to(".ham-mobile", {
//           backgroundColor: "#215CFF",
//           duration: 0,
//           scrollTrigger: {
//             trigger: "#discover",
//             start: "top top",
//             onEnter: () => {
//               gsap.to(".ham-mobile", { backgroundColor: "white", duration: 0 });
//             },
//             onLeaveBack: () => {
//               gsap.to(".ham-mobile", { backgroundColor: "#215CFF", duration: 0 });
//             },
//             onLeave: () => {
//               gsap.to(".ham-mobile", { backgroundColor: "#215CFF", duration: 0 });
//             },
//             onEnterBack: () => {
//               gsap.to(".ham-mobile", { backgroundColor: "white", duration: 0 });
//             },
//           },
//         });
//       });

//       // Handle resize to update vw-based calculations
//       const handleResize = () => {
//         ScrollTrigger.refresh();
//       };
//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("resize", handleResize);
//       };
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="px-[6vw] py-[4vw] h-full w-screen bg-white max-sm:px-0 max-sm:py-0 max-md:px-0 max-md:py-0 max-md:mt-0" id="discover">
//       <div className="flex items-center relative justify-between overflow-hidden bg-primary rounded-[4vw] py-[4vw] px-[2vw] pl-[4vw] max-sm:flex-col max-sm:px-0 max-sm:py-0 max-sm:pl-0 max-sm:rounded-none max-sm:gap-[12vw] max-sm:pt-[10%] max-md:flex max-md:flex-col max-md:px-0 max-md:py-0 max-md:pt-[10vw] max-md:pl-0 max-md:border-none max-md:gap-[10vw] max-md:rounded-[0vw]">
//         <div className="w-[70%] max-sm:py-[4vw] max-sm:w-full max-sm:px-[7vw]">
//           <Heading>
//             <h2 className="text-[5.7vw] font-display font-medium w-[80%] capitalize leading-[1.15] text-white max-sm:text-[11vw] max-sm:leading-[1.2] max-md:text-[7.5vw] max-md:w-full">
//               Discover More on Montra Marketplace
//             </h2>
//           </Heading>
//         </div>
//         <div className="w-screen h-[8vw] absolute left-0 top-0 z-[10] bg-gradient-to-t from-transparent via-primary/50 to-primary max-sm:top-[35%] max-sm:h-[25vw] max-md:h-[25vw] max-md:top-[25%]" />
//         <div className="w-screen h-[8vw] absolute left-0 bottom-0 z-[10] bg-gradient-to-b from-transparent via-primary/50 to-primary max-sm:h-[25vw] max-sm:via-primary/50 max-md:h-[20vw]" />
//         <div className="h-[33vw] w-[40vw] max-sm:h-[120vw] max-sm:w-full max-sm:overflow-hidden max-md:!overflow-hidden max-md:h-[95vw] max-md:w-full">
//           <div
//             ref={marqueeRef}
//             className="w-full marquee-vertical h-fit overflow-hidden flex flex-col items-center max-sm:gap-[4vw] max-md:gap-[4vw]"
//           >
//             {[...data, ...data].map((item, index) => (
//               <div 
//                 key={index}
//                 className="h-[8vw] flex items-center"
//               >
//                 <div
//                   ref={(el) => (itemRefs.current[index] = el)}
//                   className="bg-[#111111] rounded-[6vw] h-fit w-fit p-[0.1vw] flex max-sm:rounded-[9vw] max-sm:p-[0.35vw]"
//                 >
//                   <div className="h-[4.5vw] w-[4.5vw] bg-white rounded-full flex items-center justify-center max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw]">
//                     <Image
//                       src={item.icon}
//                       height={28}
//                       width={28}
//                       alt="electricity-icon"
//                       className="h-[2.2vw] w-[2.2vw] max-sm:w-[8vw] max-sm:h-[8vw] max-sm:object-contain max-md:h-[5vw] max-md:w-[5vw]"
//                     />
//                   </div>
//                   <div
//                     className={`h-[4.5vw] w-[14.5vw] px-[2.5vw] rounded-[6vw] flex items-center justify-center text-center max-sm:w-[70vw] max-sm:rounded-[9vw] max-sm:h-[15vw] max-sm:text-left max-sm:justify-start max-sm:pl-[7vw] max-md:w-[40vw] max-md:rounded-[7vw] max-md:h-[10vw]`}
//                     style={{ backgroundColor: item.color }}
//                   >
//                     <p className="font-medium">{item.text}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Discover;

// const data = [
//   {
//     icon: "/assets/images/personal-payments/airtime.svg",
//     color: "#D9F7C5",
//     text: "Airtime top-up",
//   },
//   {
//     icon: "/assets/images/personal-payments/data-recharge.svg",
//     color: "#FFEAEE",
//     text: "Data Recharge",
//   },
//   {
//     icon: "/assets/images/personal-payments/cable-tv.svg",
//     color: "#EAF1FF",
//     text: "Cable TV",
//   },
//   {
//     icon: "/assets/images/personal-payments/electricity-icon.svg",
//     color: "#FEFFA7",
//     text: "Electricity Bill",
//   },
//   {
//     icon: "/assets/images/personal-payments/utility-bill.svg",
//     color: "#CAC5F7",
//     text: "Bills Payment",
//   },
//   {
//     icon: "/assets/images/personal-payments/broadband.svg",
//     color: "#FFD7CB",
//     text: "Broadband",
//   },
//   {
//     icon: "/assets/images/personal-payments/shop.svg",
//     color: "#A4F3FF",
//     text: "Shop",
//   },
// ];
