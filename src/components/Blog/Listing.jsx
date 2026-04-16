'use client'

import { useState } from "react";
import blog1 from "../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../public/assets/images/homepage/blog-3.png";
import BlogCard from "./BlogCard";
import Heading from "../Heading";
import { LinkButton } from "../Buttons";
import Link from "next/link";

const blogImages = [blog1, blog2, blog3];

const blogContent = [
  {
    title: "Your passport to the web3 economy",
    date: "19, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "Understanding digital assets in everyday finance",
    date: "21, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "How modern payment rails reshape global transfers",
    date: "24, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "What businesses should know before adopting blockchain",
    date: "27, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "A simple guide to secure cross-border transactions",
    date: "30, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "Why user trust matters in the next internet economy",
    date: "03, July 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "Your passport to the web3 economy",
    date: "19, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "Understanding digital assets in everyday finance",
    date: "21, June 2024",
    link: "/blog/blog-detail",
  },
  {
    title: "How modern payment rails reshape global transfers",
    date: "24, June 2024",
    link: "/blog/blog-detail",
  },
];

const BlogList = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      data-theme="white"
      className="w-screen h-fit py-[7%] bg-white px-[5vw] max-sm:py-[15%] max-sm:px-[5.5vw] max-md:py-[10%]"
      id="blog-listing"
    >
      <div className="flex flex-col gap-[5vw] text-black-1 max-md:gap-[5vw] max-sm:gap-[10vw]">
        <Heading>
          <h3
            className={` text-[5vw] font-display capitalize font-medium max-sm:text-[11vw] max-md:text-[7.5vw] max-md:text-center max-md:w-[90%] max-sm:w-full max-sm:text-left`}
          >
            Explore Expert insights
          </h3>
        </Heading>

        <div className="grid grid-cols-3 gap-[2vw] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[6vw] max-md:gap-[3vw]">
          {blogContent.map((blog, index) => (
            <BlogCard
              key={blog.title + index}
              title={blog.title}
              date={blog.date}
              href={blog.link}
              image={blogImages[index % blogImages.length]}
              layout="vertical"
              active={active === index}
              className="max-md:!w-full"
              onMouseEnter={() => {
                setActive(index);
              }}
            />
          ))}
        </div>
        <div className="mx-auto">
          <Link
            className={`group w-fit hover:text-primary block duration-300 `}
            href={"#"}>
            <div className="flex items-center justify-start gap-2 max-sm:gap-1">
              <span className="link-line">Load more articles...</span>
              <span className="h-[1px] w-[1px] inline-block overflow-hidden"> Loading more articles</span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default BlogList;
