import BlogContent from "@/components/Blog/BlogDetail/BlogContent";
import Hero from "@/components/Blog/BlogDetail/Hero";
import RelatedBlogs from "@/components/Blog/BlogDetail/RelatedBlogs";
import React from "react";


const BLOG_DATA = {
  title: "Web3 and the Future of Finance",
  slug: "web3-and-future-of-finance",
  image: "https://www.montra.app/assets/images/seo/homepage.png", 
  description: "Web3 is redefining how financial services work at a global scale.",
};
export async function generateMetadata({ params }) {
  const url = `https://www.montra.app/blog/${BLOG_DATA.slug}`;

  return {
    title: BLOG_DATA.title,
    description: BLOG_DATA.description,
    openGraph: {
      title: BLOG_DATA.title,
      description: BLOG_DATA.description,
      url,
      images: [{ url: BLOG_DATA.image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: BLOG_DATA.title,
      description: BLOG_DATA.description,
      images: [BLOG_DATA.image],
    },
  };
}
const page = () => {
 const url = `https://www.montra.app/blog/${BLOG_DATA.slug}`;
  return (
    <>
        <Hero />
        <BlogContent url={url} title={BLOG_DATA.title}  />
        <RelatedBlogs />
    </>
  );
};

export default page;
