'use client'
import blog1 from "../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../public/assets/images/homepage/blog-3.png";
import { LinkButton } from "../Buttons";
import { useState } from "react";
import Heading from "../Heading";
import Copy from "../Copy";
import BlogCard from "../Blog/BlogCard";

export default function Blogs() {

  const [active, setActive] = useState(0);
  const blogCards = [
    {
      title:
        "Beyond Faster Payments: A Guide to Complex International Pension Transfers",
      date: "19, June 2024",
      href: "/blog",
      image: blog1,
      layout: "horizontal",
    },
    {
      title: "A Guide to Complex International Pension Transfers",
      date: "19, June 2024",
      href: "/blog",
      image: blog2,
      layout: "vertical",
    },
    {
      title: "A Guide to Complex International Pension Transfers",
      date: "19, June 2024",
      href: "/blog",
      image: blog3,
      layout: "vertical",
    },
  ];

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
              href={"/blog"}
              className="text-black-1"
            />
          </div>
        </Copy>

        <div className="flex items-start max-sm:flex-col max-md:flex-wrap w-full">
          <div className="w-1/2 grid grid-cols-2 gap-6 max-sm:flex max-sm:flex-col max-sm:w-full max-md:flex max-md:flex-wrap max-md:w-full">
            {blogCards.map((blog, index) => (
              <BlogCard
                key={blog.title + index}
                title={blog.title}
                date={blog.date}
                href={blog.href}
                image={blog.image}
                layout={blog.layout}
                active={active === index}
                onMouseEnter={() => {
                  setActive(index);
                }}
              />
            ))}
          </div>
          <div className="w-1/2 pl-[8vw] pt-[5vw] space-y-[4vw] max-sm:hidden max-md:hidden">
            {blogCards.map((blog, index) => (
              <div key={index} className="group flex flex-col gap-[1vw]">
                <Copy>
                  <h4 className="group-hover:text-primary">{blog.title}</h4>
                </Copy>
                <Copy>
                  <span className="text-[1vw] block font-display">{blog.date}</span>
                </Copy>
                <Copy>
                  <LinkButton text={"Read More"} href={blog.href} className="text-black-1" />
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
