import { forwardRef } from "react";
import Image from "next/image";

// eslint-disable-next-line react/display-name
const Card = forwardRef(({ id, icon, cardTitle, cardContent,icon2 }, ref) => {
  return (
    <>
      <div
        id={id} 
        ref={ref}
        className="card w-[22.5vw] h-[35vw] absolute max-sm:static max-sm:w-[85vw] max-sm:h-[100vw] max-md:w-[43vw] max-md:h-[60vw] max-md:static inner-card-main max-md:mx-auto"
        style={{ perspective: "1500px" }}
      >
        <div className="card-inner">
          <div className="card-front flip-card-front bg-primary text-white border-[1.5px] border-white">
            <Image
              src={icon}
              height={50}
              width={50}
              className="max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw] w-[4vw] h-[4vw] object-contain"
              alt="montra-account"
            />
            <h3 className="text-[2.1vw] leading-[1.2] font-display font-medium max-sm:text-[7.5vw] max-md:text-[4.5vw]">
              {cardTitle}
            </h3>
          </div>
          <div className="card-back flip-card-back bg-white text-black border border-[#D2D2D2] h-full w-full flex ">
            <div>
              <Image src={icon2} height={50} width={50}
              className="max-sm:w-[15vw] max-sm:h-[15vw] max-md:w-[10vw] max-md:h-[10vw] w-[4vw] h-[4vw] object-contain"
              alt="montra-account"/>
            </div>
            <div className="space-y-[1.5vw] mt-auto">
            <h3 className="text-[2.1vw] leading-[1.2] font-display font-medium  max-sm:text-[7.5vw] max-md:text-[4.5vw]">
              {cardTitle}
            </h3>
            <div className=""
              dangerouslySetInnerHTML={{ __html: cardContent }}
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Card;
