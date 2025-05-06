"use client"
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import usePageVisibilityTitle from "../userPageVisibilityTitle";

const Layout = ({ children }) => {
    usePageVisibilityTitle({
        activeTitle: 'Montra for Personal: Your All-in-One Digital Wallet',
        inactiveTitle: 'Come back please 🙏',
      });
    
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
};

export default Layout;
