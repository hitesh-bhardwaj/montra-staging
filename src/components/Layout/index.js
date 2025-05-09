"use client"
import React, { useEffect } from "react";
import Header from "../Header";
import usePageVisibilityTitle from "../userPageVisibilityTitle";
import FooterCta from "../Footer/FooterCta";

const Layout = ({ children }) => {

  usePageVisibilityTitle({
    activeTitle: 'Montra for Personal: Your All-in-One Digital Wallet',
    inactiveTitle: 'Seriously...? 😤',
  });

  return (
    <>
      <Header />
      {children}
      <FooterCta />
    </>
  );
};

export default Layout;
