import { getPageMetadata } from "@/lib/seo.config";
import Link from "next/link";
import { homepage } from "@/lib/util";

export const metadata = getPageMetadata({
    title: "404 | Page Not Found",
    description: "Montra revolutionizes the way businesses handle their financial needs. We offer a range of tailored solutions that streamline your payment processing, improve cash flow, and ensure that you stay ahead in today’s fast-paced market.",
    alternates: {
        canonical: "/404",
        languages: {
            "x-default": "/404",
        },
    },
    openGraph: {
        url: "404",
        images: [
            {
                url: `${homepage}/assets/images/seo/homepage.png`,
                width: 1200,
                height: 630,
            },
        ],
    },
});

export default function NotFoundPage() {

    return (
        <>
            <div id="hero" className=" h-screen w-screen">
                <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-primary font-medium text-[20vw] max-sm:text-[40vw] max-md:text-[25vw] leading-[1.1]">
                            404
                        </h1>
                        <p>Go back to <Link href="/" className="link-line">Homepage!!!</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}