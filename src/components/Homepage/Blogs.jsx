import Image from "next/image";
import blog1 from "../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../public/assets/images/homepage/blog-3.png";
import { LinkButton } from "../Buttons";
import { useState } from "react";
import Heading from "../Heading";
import Copy from "../Copy";
// import Link from "next/link";

export default function Blogs() {
    const [active, setActive] = useState(0)
    return (
        <section className="p-[4vw] max-sm:py-[15%] max-sm:px-[7vw] bg-[#FBFBFB] relative">
            <div className="flex flex-col items-center justify-center max-sm:gap-[8vw] max-sm:items-start">
                <Heading>
                    <h2 className="text-[5.7vw] font-display font-medium leading-relaxed mb-[2vw] max-sm:text-[10.5vw]">Recent Articles</h2>
                </Heading>
                <Copy>
                    <div className="w-full flex justify-end max-sm:flex max-sm:order-1 max-sm:justify-center">
                        <LinkButton text={'Read More'} href={"#"} className="text-black-1" />
                    </div>
                </Copy>

                <div className="flex items-start max-sm:flex-col">
                    <div className="w-1/2 grid grid-cols-2 gap-6 max-sm:flex max-sm:flex-col max-sm:w-full">
                        <div className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-2 flex justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out ${active == 0 ? "!bg-primary !text-white" : "bg-white"}`} onMouseEnter={() => {
                            setActive(0)
                        }}>
                            <div className="overflow-hidden w-[25.6vw] h-full max-sm:w-full max-sm:h-[55vw]">
                                <Image src={blog1} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[2vw] w-[45%] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw]">
                                <div>
                                    <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw]">Beyond Faster Payments: A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[4vw] block max-sm:text-[3.4vw]">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className={`text-black-1 group-hover:text-white hover:text-white ${active == 0 ? " !text-white" : ""} `} />
                            </div>
                        </div>

                        <div className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-1 flex flex-col justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out ${active == 1 ? "!bg-primary !text-white" : "bg-white"}`} onMouseEnter={() => {
                            setActive(1)
                        }}>
                            <div className="overflow-hidden w-full h-[12vw] max-sm:w-full max-sm:h-[55vw]">
                                <Image src={blog2} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw]">
                                <div>
                                    <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw]">A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[2vw] block font-display max-sm:text-[3.4vw]">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className={`text-black-1 group-hover:text-white hover:text-white ${active == 1 ? " !text-white" : ""}`} />
                            </div>
                        </div>

                        <div className={`fadeupanim rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white w-full col-span-1 flex flex-col justify-between group max-sm:flex-col max-sm:w-full max-sm:rounded-[5.5vw] transition-colors duration-500 ease-in-out ${active == 2 ? "!bg-primary !text-white" : "bg-white"}`} onMouseEnter={() => {
                            setActive(2)
                        }}>
                            <div className="overflow-hidden w-full h-[12vw]  max-sm:h-[55vw]">
                                <Image src={blog3} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between max-sm:w-full max-sm:py-[4vw] max-sm:px-[4vw]">
                                <div>
                                    <h5 className="mb-[1vw] max-sm:text-[4.5vw] max-sm:mb-[3vw]">A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[2vw] block max-sm:text-[3.4vw]">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className={`text-black-1 group-hover:text-white hover:text-white ${active == 2 ? " !text-white" : ""}`} />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pl-[8vw] pt-[5vw] space-y-[4vw] max-sm:hidden">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="group flex flex-col gap-[1vw]">
                                <Copy>
                                    <h5 className="group-hover:text-primary">
                                        Beyond Faster Payments: A Guide to Complex International Pension Transfers
                                    </h5>
                                </Copy>
                                <Copy>
                                    <span className="text-[1vw] block font-display">19, June 2024</span>
                                </Copy>
                                <Copy>
                                    <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-primary" />
                                </Copy>
                                <div className="block w-full h-[1px] bg-gray-100 lineanim">
                                    <span className="block bg-primary h-full w-full group-hover:scale-x-100 scale-x-0 duration-500 origin-left" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}