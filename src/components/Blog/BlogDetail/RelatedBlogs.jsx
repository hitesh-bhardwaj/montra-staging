"use client"
import React, { useState } from 'react'
import Copy from '@/components/Copy'
import BlogCard from '../BlogCard'
import blog1 from "../../../../public/assets/images/homepage/blog-1.png";
import blog2 from "../../../../public/assets/images/homepage/blog-2.png";
import blog3 from "../../../../public/assets/images/homepage/blog-3.png";
import { LinkButton } from '@/components/Buttons';


const blogImages = [blog1, blog2, blog3];

const RelatedBlogs = () => {
    const [active, setActive] = useState(0);
  

  
  return (
   <section data-theme="white" className='w-screen h-fit pb-[7%] max-md:pb-[15%] px-[5vw] bg-white text-black-1 max-sm:px-[5.5vw] max-sm:pb-[15%]' id='related-blogs'>
    <div className='w-full flex flex-col gap-[6vw] max-sm:gap-[10vw]'>
        <div className='w-full flex justify-between max-md:pt-[5vw] items-end'>
            <Copy>
            <h2 className='text-[5.7vw] font-display text-black-1 max-md:text-[8vw]'>Related Blogs</h2>

            </Copy>
            <div className='max-md:hidden'>
              <LinkButton text={"View all blogs"} href={"/blog"}/>
            </div>
        </div>
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
             <div className='hidden max-md:block'>
              <LinkButton text={"View all blogs"} href={"/blog"}/>
            </div>
    </div>

   </section>
  )
}

export default RelatedBlogs


const blogContent = [
  {
    img: "/assets/images/blogs/blog-img-2.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-3.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  {
    img: "/assets/images/blogs/blog-img-4.png",
    title: "Your passport to the web3 economy",
    description:
      "If you’ve read this far and you’re wondering what “web3” is exactly, this is one of those need-to-knows, and it’s pretty simple.",
    link: "#",
  },
  
];
