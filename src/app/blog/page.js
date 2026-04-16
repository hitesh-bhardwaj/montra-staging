import Hero from "@/components/Blog/Hero";
import BlogList from "@/components/Blog/Listing";
import React from "react";



const blog = () => {
  return (
    <>
      <Hero
        primaryHeading={"Beyond Faster Payments: "}
        titleWidth={"w-full"}
        paraWidth={"w-[45%]"}
        heading={" A Guide to Complex International Pension Transfers "}
        content={
          "Get your Montra Personal Account to start spending, sending and saving in minutes, right from your phone"
        }
      />
      <BlogList/>
    </>
  );
};

export default blog;