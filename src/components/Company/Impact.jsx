import { NftIcon } from "../Buttons/icons";
import Copy from "../Copy";
import Heading from "../Heading";

const Impact = () => {
  return (
    <section className="px-[4vw] py-[6vw] w-full max-sm:px-[7vw] bg-white max-sm:py-[10vw]">
      <div className="flex flex-col items-start gap-[10vw] max-sm:gap-[10vw]">
        <Heading>
          <h2 className="font-display w-[65%] font-medium text-[5.7vw] text-left leading-[1.2] max-sm:text-[10.5vw] max-sm:text-left max-sm:w-[85%]">
            Simple Tools. Real Impact. Lasting Change.
          </h2>
        </Heading>
        <div className="grid grid-cols-3 gap-x-[6vw] max-sm:flex-col max-sm:gap-[10vw] max-sm:flex max-md:flex max-md:flex-wrap max-md:gap-[8vw] ">
          <div className="text-black-1 col-span-1 col-start-1 group max-md:w-[45%]  max-sm:w-full">
            <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw] fadeupanim max-md:h-[8vw] max-md:w-[8vw] max-md:mb-[3vw]" />
            <Copy>
              <p className="mb-[3vw] max-sm:mb-[8vw] max-md:mb-[8vw]">
                We are a fintech company dedicated to connecting cash-based
                communities with the digital economy through simple, accessible
                financial tools.
              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray ">
              <span className="block w-0 bg-primary h-full origin-left group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          </div>
          <div className="text-black-1 col-span-1 col-start-2 group max-md:w-[45%]  max-sm:w-full">
            <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw] fadeupanim max-md:h-[8vw] max-md:w-[8vw]  max-md:mb-[3vw]" />
            <Copy>
              <p className="mb-[3vw] max-sm:mb-[8vw]  max-md:mb-[8vw]">
                We equip individuals and businesses—especially in underserved
                regions—with the tools to manage money, grow wealth, and thrive
                financially.
              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray ">
              <span className="block w-0 bg-primary h-full origin-left group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          </div>
          <div className="text-black-1 col-span-1 col-start-3 group max-md:w-[45%]  max-sm:w-full">
            <NftIcon className="w-[3vw] h-[3vw] mb-[1.5vw] max-sm:h-[12vw] max-sm:w-[12vw] max-sm:mb-[6vw] fadeupanim max-md:h-[8vw] max-md:w-[8vw]  max-md:mb-[3vw]" />
            <Copy>
              <p className="mb-[3vw] max-sm:mb-[8vw]  max-md:mb-[8vw]">
                Our mission goes beyond access—we focus on unlocking
                opportunity, enabling dignity, and fostering long-term financial
                growth.
              </p>
            </Copy>
            <div className="w-full h-[1.5px] bg-gray ">
              <span className="block w-0 bg-primary h-full origin-left group-hover:w-full transition-all duration-700 ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
