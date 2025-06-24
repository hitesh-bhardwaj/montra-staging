import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import InteractiveBackground from "@/components/Background";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { NavigationProvider } from "@/components/NavigationContext";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

const standerd = localFont({
  src: [
    {
      path: "./fonts/Standerd-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Standerd-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui, sans-serif"],
});

export const metadata = {
  title: "Montra for Personal: Your All-in-One Digital Wallet",
  description:"From everyday payments to long-term goals, Montra for Personal helps you manage, move, and grow your money—right from your phone.",
  path: "",
  img: "homepage.png",
  date_published: "2025-06-20T00:00",
  date_modified: "2025-06-20T00:00",
};

export default function RootLayout({ children }) {
  return (
    <>
      <LenisSmoothScroll />
      <html lang="en">
        <body
          className={`${workSans.variable} ${standerd.variable} antialiased bg-primary`}
        >
          <ViewTransitions>
            <NavigationProvider>
              <main className="relative z-[1] bg-primary max-sm:rounded-b-[10vw] max-sm:bg-white max-md:bg-white">
                <Layout>
                  <InteractiveBackground />
                  <div style={{ position: "relative" }}>
                    {children}
                  </div>
                </Layout>
              </main>
              <Footer />
            </NavigationProvider>
          </ViewTransitions>
        </body>
      </html>
    </>
  );
}