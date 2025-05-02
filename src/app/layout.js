
import { Work_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/Background";



const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

const standerd = localFont({
  src: [
    {
      path: './fonts/Standerd-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Standerd-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Standerd-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Standerd-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

export const metadata = {
  title: "Montra for Personal: Your All-in-One Digital Wallet",
  description: "From everyday payments to long-term goals, Montra for Personal helps you manage, move, and grow your money—right from your phone.",
};

export default function RootLayout({ children }) {
 
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <body className={`${workSans.variable} ${standerd.variable} antialiased`}>
          <Header />
          {/* <InteractiveBackground/> */}
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
