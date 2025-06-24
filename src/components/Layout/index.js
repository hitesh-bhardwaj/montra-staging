"use client"
import React, { useEffect } from "react";
import Header from "../Header";
import usePageVisibilityTitle from "../userPageVisibilityTitle";
import FooterCta from "../Footer/FooterCta";
import { ImageObjectJsonLd, LocalBusiness, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";

const Layout = ({ children }) => {

  usePageVisibilityTitle({
    activeTitle: 'Montra for Personal: Your All-in-One Digital Wallet',
    inactiveTitle: 'Seriously...? 😤',
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
      <LocalBusiness />
      <OrganizationJsonLd />
      <ImageObjectJsonLd />
      <WebsiteJsonLd />
      <Header />
      {children}
      <FooterCta />
    </>
  );
};

export default Layout;
