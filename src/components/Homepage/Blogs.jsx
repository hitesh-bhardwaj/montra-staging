import Image from "next/image";
import blog1 from "../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../public/assets/images/homepage/blog-3.png";
import { LinkButton } from "../Buttons";
import Link from "next/link";

export default function Blogs() {
    return (
        <section className="p-[4vw]">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[5.7vw] font-display font-medium leading-relaxed mb-[2vw]">Recent Articles</h2>
                <div className="w-full flex justify-end">
                    <LinkButton text={'Read More'} href={"#"} className="text-black-1" />
                </div>
                <div className="flex items-start">
                    <div className="w-1/2 grid grid-cols-2 gap-6">
                        <div className="rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white duration-300 w-full col-span-2 flex justify-between group">
                            <div className="overflow-hidden w-[25.6vw] h-full">
                                <Image src={blog1} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[2vw] w-[45%] flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-[1vw]">Beyond Faster Payments: A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[4vw] block">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-white hover:text-white" />
                            </div>
                        </div>

                        <div className="rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white duration-300 w-full col-span-1 flex flex-col justify-between group">
                            <div className="overflow-hidden w-full h-[12vw]">
                                <Image src={blog2} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-[1vw]">A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[2vw] block font-display">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-white hover:text-white" />
                            </div>
                        </div>

                        <div className="rounded-[3vw] overflow-hidden bg-white border border-gray hover:bg-primary hover:text-white duration-300 w-full col-span-1 flex flex-col justify-between group">
                            <div className="overflow-hidden w-full h-[12vw]">
                                <Image src={blog3} alt="article image" placeholder="blur" className="w-full h-full object-cover scale-105 group-hover:scale-100 duration-300" />
                            </div>
                            <div className="px-[1.5vw] py-[1.5vw] flex flex-col justify-between">
                                <div>
                                    <h5 className="mb-[1vw]">A Guide to Complex International Pension Transfers</h5>
                                    <span className="text-[1vw] mb-[2vw] block">19, June 2024</span>
                                </div>
                                <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-white hover:text-white" />
                            </div>
                        </div>

                    </div>
                    <div className="w-1/2 pl-[8vw] pt-[5vw] space-y-[4vw]">
                        <div className="group flex flex-col gap-[1vw]">
                            <h5 className="group-hover:text-primary">Beyond Faster Payments: A Guide to Complex International Pension Transfers</h5>
                            <span className="text-[1vw] block font-display">19, June 2024</span>
                            <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-primary" />
                            <span className="block w-full h-[1px] bg-gray-100" />
                        </div>
                        <div className="group flex flex-col gap-[1vw]">
                            <h5 className="group-hover:text-primary">Beyond Faster Payments: A Guide to Complex International Pension Transfers</h5>
                            <span className="text-[1vw] block font-display">19, June 2024</span>
                            <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-primary" />
                            <span className="block w-full h-[1px] bg-gray-100" />
                        </div>
                        <div className="group flex flex-col gap-[1vw]">
                            <h5 className="group-hover:text-primary">Beyond Faster Payments: A Guide to Complex International Pension Transfers</h5>
                            <span className="text-[1vw] block font-display">19, June 2024</span>
                            <LinkButton text={"Read More"} href="#" className="text-black-1 group-hover:text-primary" />
                            <span className="block w-full h-[1px] bg-gray-100" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}