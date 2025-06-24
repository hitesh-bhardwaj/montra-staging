import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LenisSmoothScroll from "@/components/LenisSmoothScroll";
import InteractiveBackground from "@/components/Background";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { NavigationProvider } from "@/components/NavigationContext";
import { defaultMetadata } from "@/lib/seo.config";

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

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${standerd.variable} antialiased bg-primary`}>
        <LenisSmoothScroll />
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
  );
}