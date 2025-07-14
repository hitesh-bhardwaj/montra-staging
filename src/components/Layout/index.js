"use client"
import React, { useEffect } from "react";
import Header from "../Header";
import usePageVisibilityTitle from "../userPageVisibilityTitle";
import FooterCta from "../Footer/FooterCta";
import { ImageObjectJsonLd, LocalBusiness, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";

const Layout = ({ children }) => {

  usePageVisibilityTitle({
    inactiveTitle: 'Hey, We Miss You 🥲!',
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      <OrganizationJsonLd />
      <LocalBusiness />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Header />
      {children}
      <FooterCta />
    </>
  );
};

export default Layout;
