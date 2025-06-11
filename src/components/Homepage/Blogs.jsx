'use client'
import Image from "next/image";
import blog1 from "../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../public/assets/images/homepage/blog-3.png";
import { LinkButton } from "../Buttons";
import { useState } from "react";
import Heading from "../Heading";
import Copy from "../Copy";
import { ArrowRight } from "../Buttons/icons";
import Link from "next/link";
// import Link from "next/link";

export default function Blogs() {

  const [active, setActive] = useState(0);

  return (
    <section className="p-[4vw] max-sm:py-[15%] max-sm:px-[7vw] bg-[#FBFBFB] relative max-md:py-[7%]">
      <div className="flex flex-col items-center justify-center max-sm:gap-[8vw] max-sm:items-start max-md:gap-[7vw]">
        <Heading>
          <h2 className="text-[5.7vw] font-display font-medium leading-relaxed mb-[2vw] max-sm:text-[10.5vw] max-md:text-[7.5vw]">
            Recent Articles
          </h2>
        </Heading>
        <Copy>
          <div className="w-full flex justify-end max-sm:flex max-sm:order-1 max-sm:justify-center max-md:order-1 max-md:justify-center">
            <LinkButton
              text={"View All"}
              href={"#"}
              className="text-black-1"
            />
          </div>
        </Copy>

        <div className="flex items-start max-sm:flex-col max-md:flex-wrap w-full">
          <div className="w-1/2 grid grid-cols-2 gap-6 max-sm:flex max-sm:flex-col max-sm:w-full max-md:flex max-md:flex-wrap max-md:w-full">
            <div
              className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-2 flex justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out max-md:w-full max-md:flex-col ${
                active == 0 ? "!bg-primary !text-white" : "bg-white"
              }`}
              onMouseEnter={() => {
                setActive(0);
              }}
            >
              <div className="overflow-hidden w-[25.6vw] h-full max-sm:w-full max-sm:h-[55vw] max-md:w-full max-md:h-[40vw]">
                <Image
                  src={blog1}
                  alt="article image"
                  placeholder="blur"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300"
                />
              </div>
              <div className="px-[1.5vw] py-[2vw] w-[45%] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw] max-md:w-full max-md:px-[3vw] max-md:py-[4vw]">
                <div>
                  <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw] max-md:text-[3.2vw]">
                    Beyond Faster Payments: A Guide to Complex International
                    Pension Transfers
                  </h5>
                  <span className="text-[1vw] mb-[4vw] block max-sm:text-[3.4vw] max-md:text-[2.2vw]">
                    19, June 2024
                  </span>
                </div>
                <Link
                  className={`group w-fit group-hover:text-white block  duration-100 `}
                  href={"/"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/");
                  }}
                >
                  <div className="flex items-center justify-start gap-2">
                    <span className="">Read More</span>
                    <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
                  </div>
                </Link>
              </div>
            </div>

            <div
              className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-1 flex flex-col justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out max-md:w-[44vw] ${
                active == 1 ? "!bg-primary !text-white" : "bg-white"
              }`}
              onMouseEnter={() => {
                setActive(1);
              }}
            >
              <div className="overflow-hidden w-full h-[12vw] max-sm:w-full max-sm:h-[55vw] max-md:h-[30vw]">
                <Image
                  src={blog2}
                  alt="article image"
                  placeholder="blur"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300"
                />
              </div>
              <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw] max-md:px-[3vw] max-md:py-[3vw]">
                <div>
                  <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw] max-md:text-[3.2vw]">
                    A Guide to Complex International Pension Transfers
                  </h5>
                  <span className="text-[1vw] mb-[2vw] block font-display max-sm:text-[3.4vw] max-md:text-[2.2vw]">
                    19, June 2024
                  </span>
                </div>
                <Link
                  className={`group w-fit group-hover:text-white block duration-100 `}
                  href={"/"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/");
                  }}
                >
                  <div className="flex items-center justify-start gap-2">
                    <span className="">Read More</span>
                    <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
                  </div>
                </Link>
              </div>
            </div>

            <div
              className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-1 flex flex-col justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out max-md:w-[44vw] ${
                active == 2 ? "!bg-primary !text-white" : "bg-white"
              }`}
              onMouseEnter={() => {
                setActive(2);
              }}
            >
              <div className="overflow-hidden w-full h-[12vw]  max-sm:h-[55vw] max-md:h-[30vw]">
                <Image
                  src={blog3}
                  alt="article image"
                  placeholder="blur"
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300"
                />
              </div>
              <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw] max-md:px-[3vw] max-md:py-[3vw]">
                <div>
                  <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw] max-md:text-[3.2vw]">
                    A Guide to Complex International Pension Transfers
                  </h5>
                  <span className="text-[1vw] mb-[2vw] block max-sm:text-[3.4vw] max-md:text-[2.2vw]">
                    19, June 2024
                  </span>
                </div>
                <LinkButton
                  text={"Read More"}
                  href="#"
                  className={`text-black-1 group-hover:text-white hover:text-white ${
                    active == 2 ? " !text-white" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-[8vw] pt-[5vw] space-y-[4vw] max-sm:hidden max-md:hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="group flex flex-col gap-[1vw]">
                <Copy>
                  <h5 className="group-hover:text-primary">
                    Beyond Faster Payments: A Guide to Complex International
                    Pension Transfers
                  </h5>
                </Copy>
                <Copy>
                  <span className="text-[1vw] block font-display">
                    19, June 2024
                  </span>
                </Copy>
                <Copy>
                  <Link
                    className={`group w-fit group-hover:text-primary block duration-300 `}
                    href={"/"}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo("/");
                    }}
                  >
                    <div className="flex items-center justify-start gap-2">
                      <span className="">Read More</span>
                      <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300 w-[1vw] h-[1vw] max-sm:w-[4vw] max-sm:h-[4vw] max-md:w-[2.5vw] max-md:h-[2.5vw]" />
                    </div>
                  </Link>
                </Copy>
                {/* <div className="block w-full h-[1px] bg-gray-100 lineanim">
                                    <span className="block bg-primary h-full w-full group-hover:scale-x-100 scale-x-0 duration-500 origin-left" />
                                </div> */}
                <div className="w-full h-[1px] bg-gray-100 lineanim overflow-hidden">
                  <span className="block scale-x-0 bg-primary h-full origin-[100%] group-hover:scale-x-100 transition-transform duration-700 ease-link-line group-hover:origin-[0]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
