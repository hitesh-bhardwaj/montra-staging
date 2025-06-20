import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const AnimatedOpeners = ({ letter, classPrefix, left, top, color, title, z, content,para,h ,mobileh }) => {
  const tlRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (globalThis.innerWidth > 1024) {
      const tl = gsap.timeline({ paused: true });
      tl.to(`.${classPrefix}-container`, {
        x: "-4vw",
        ease: "power3.inOut"
      })
        .to(`.${classPrefix}-alpha`, {
          x: "-4vw",
          delay: -0.5,
          ease: "power3.inOut"
        })
        .to(`.${classPrefix}-circle`, {
          height: `${h}`,
          ease: "power3.inOut",
          delay: -0.3,
        })
        .from(`.${classPrefix}-content`, {
          opacity: 0,
          delay: -0.3,
          ease: "power3.inOut"
        })
      tlRef.current = tl;
      } if(globalThis.innerWidth>541 && globalThis.innerWidth<1024){
        const tl = gsap.timeline({ paused: true });

        tl.to(`.${classPrefix}-container`, {
          x: "-10vw",
          ease: "power3.inOut",
        })
          .to(`.${classPrefix}-alpha`, {
            x: "-10vw",
            delay: -0.5,
            ease: "power3.inOut",
          })
          .to(`.${classPrefix}-circle`, {
            height: "50vw",
            ease: "power3.inOut",
            delay: -0.3,
          })
          .to(`.${classPrefix}-content`, {
            opacity: 1,
            delay: -0.3,
            ease: "power3.inOut",
          });

        tlRef.current = tl;
      }
       if(globalThis.innerWidth<541){
        const tl = gsap.timeline({ paused: true });

        tl.to(`.${classPrefix}-container`, {
          x: "-15vw",
          ease: "power3.inOut",
        })
          .to(`.${classPrefix}-alpha`, {
            x: "-15vw",
            delay: -0.5,
            ease: "power3.inOut",
          })
          .to(`.${classPrefix}-circle`, {
            height: `${mobileh}`,
            ease: "power3.inOut",
            delay: -0.3,
          })
          .to(`.${classPrefix}-content`, {
            opacity: 1,
            delay: -0.3,
            ease: "power3.inOut",
          });

        tlRef.current = tl;
      
      }
    });
    return () => ctx.revert();
  }, [classPrefix]);

  const handleMouseEnter = () => {
    tlRef.current?.play(); 
  };

  const handleMouseLeave = () => {
    tlRef.current?.reverse();
  };

  return (
    <div className={`relative ${left} ${top} ${classPrefix} ${z}  max-sm:static max-sm:h-[15vw] max-sm:w-full ${classPrefix}-circle  max-md:h-[10vw] max-md:static`}>
      <div
        className={`w-[20vw] rounded-[3vw] absolute overflow-hidden max-sm:w-[90vw] max-md:w-[80vw] `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`w-[20vw] h-[4.2vw] border-[2px] relative border-black overflow-hidden rounded-[3vw]  circle ${classPrefix}-circle max-sm:w-[85vw] max-sm:h-[15.5vw] max-sm:rounded-[9vw] max-md:w-[75vw] max-md:rounded-[9vw] max-md:h-[10vw]`}>
          <div className={`w-fit bg-black rounded-[3vw] flex h-full z-[-1] ${classPrefix}-container max-md:rounded-[11vw] max-sm:rounded-[9vw]`}>
            <span
              style={{ backgroundColor: color }}
              className={` h-[4vw] w-[4vw] rounded-full flex justify-center items-center max-sm:w-[14.5vw] max-sm:h-[14.5vw] max-md:w-[10vw] max-md:h-[10vw] `} ><Image width={100} height={100} src={"/assets/icons/arrow-right.svg"} alt='arrow' className='w-[1.5vw] h-[1.5vw] object-contain max-sm:w-[4.5vw] max-sm:h-[4.5vw] max-md:h-[3.5vw] max-md:w-[3.5vw]' /></span>
            <div
              style={{ backgroundColor: color }}
              className={`h-full rounded-[3vw] w-[20vw] text-black-1 px-[2vw] flex flex-col items-start py-[1vw] capitalize relative gap-[1vw] max-sm:w-[85vw] max-sm:rounded-[9vw] max-md:w-[75vw] max-md:rounded-[9vw]`}>
              <div className="h-[3vw] max-sm:text-[4.5vw] max-sm:h-fit max-sm:pt-[3.5vw] max-sm:pl-[3vw] max-md:h-fit max-md:text-[3.5vw] max-md:pt-[1.5vw] max-md:pl-[4vw]">
                {title}
              </div> 
              <div className='absolute right-[8%] cursor-pointer max-md:mt-[2vw] max-sm:mt-[3vw]' >
                <Image className='w-[2vw] h-[2vw] object-contain invert max-sm:w-[7vw] max-sm:h-[7vw] max-md:w-[5vw] max-md:h-[5vw]' alt='cross' src="/assets/icons/cross-icon.svg" width={50} height={50} onClick={handleMouseLeave} />
              </div>
              <div className={`text-[1vw] ${classPrefix}-content font-normal max-sm:mt-[5vw] max-md:pt-[4vw]`}>
                 {para&& <p className="max-sm:text-[4.5vw] max-md:text-[3.5vw] max-sm:pl-[2vw] max-sm:w-[80%] max-sm:mb-[2vw]">{para}</p>  } 
                <ul className="space-y-2  max-sm:text-[4.5vw] max-sm:pl-[5vw] max-md:text-[3.5vw] max-md:pl-[4vw] max-sm:w-[90%]">
                  {content&&content.map((text, index) => (
                    
                    <li key={index} className="list-disc ml-2">{text}</li>
                    
                    
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AnimatedOpeners;