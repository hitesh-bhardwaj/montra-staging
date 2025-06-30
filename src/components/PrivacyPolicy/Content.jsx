"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const contentBlocks = [
  {
    id: "first-block",
    title: "DATA/INFORMATION WE MAY COLLECT FROM YOU",
    type: "paragraph",
    tag: "Use of the Montra....",
    content:"<p>The lawful basis of processing your Personal Information under the Nigeria Data Protection Act(NDPA) 2023 are:</p><ul class='pl-[2vw] space-y-[1vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[2vw]'><li><span class='font-semibold'>Your Consent:</span>Where you have agreed for us to to process your personal data/information by using our Services.</li><li><span class='font-semibold'>Contractual Obligation:</span> Our services are only provided to you when there is a contractual obligation. Without your personal information we cannot provide the service to you.</li><li><span class='font-semibold'>Legal Obligation:</span> We are required to collect and store your personal information to prevent fraud and money laundering as well as to ensure that we are fully compliant with all applicable financial legislations. By Law, we are required to retain certain information of an account opened with us and the data of customers beyond the date when they cease to be our customers</li></ul><p>We receive and store any information you enter on our website, app, or give us in any other way. When you create an account with us or log into an existing account; provide information in your account; visit our website or download our app; order products/content from us; use our payment services, access our platform or use our services; contact us for customer care.</p><p>We may need to collect, use, process, store, or transfer information about you and your computer to allow you to use some of our services. The personal information may include but not limited to:</p><ul class='pl-[2vw] space-y-[1vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[2vw]'><li><span class='font-semibold'>Identity data:</span> First name, middle name, last name, email, marital status, title, date of birth and gender.</li><li><span class='font-semibold'>Identification documents:</span> Your government-issued identity number, passport photograph and other registration information.</li><li><span class='font-semibold'>Contact data:</span> Contact and billing address, email, telephone numbers and details of the device you use.</li><li><span class='font-semibold'>Financial and Payment data:</span> Bank account, Bank Verification Number (BVN), amount, financial account information, and other payment details.</li><li><span class='font-semibold'>Transaction data:</span> Payment information and other details of products and services you have subscribed to.</li><li><span class='font-semibold'>Technical data:</span> your geo-location, internet protocol (IP) address, your login data, browser type and version, length of visit on certain pages, device identifier, log-in information, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li><li><span class='font-semibold'>Profile data:</span> Information placed on your personal profile (e.g., personal description or passport photograph). Your username and password, your interests, preferences, feedback and survey responses.</li><li><span class='font-semibold'>Usage data:</span> information about how you use our website, products and services.</li><li><span class='font-semibold'>Marketing and communications data:</span> records of your preferences in receiving marketing materials from us and our third parties. Communication details provided when you contact us.</li></ul><p>When you are asked to provide personal data, you may decline. And you may use web browser or operating system controls to prevent certain types of automatic data collection. But if you choose not to provide or allow information that is necessary for certain services or features, those services or features may not be available or fully functional.</p>"

  },
  {
    id: "second-block",
    title: "HOW WE COLLECT YOUR PERSONAL INFORMATION",
    type: "list",
    tag: "Acceptance",
    content:"<p>The Personal Information we have about you is directly made available to us when you:</p><ul class='pl-[2vw] space-y-[1vw] list-disc max-sm:pl-[5vw] max-sm:space-y-[2vw]'><li><span class='font-semibold'>Direct Engagement: </span>When you choose to use any of our services through our website, mobile app, sign-up for an account, upload any documentation, send any communication by email or phone call, fill-out any form, make an enquiry, or any other communication received directly or indirectly from you.</li><li><span class='font-semibold'>Automatically:</span>As you browse our websites certain information relating to your browsing patterns and technical data about the equipment you are using to access the website is automatically collected using cookies, server logs and other similar technologies. Please see our Cookie preference for further information.</li><li><span class='font-semibold'>From third parties/public sources:</span>We utilise third-party service providers to secure information related to financial crime, fraud, sanctions and Politically Exposed Persons. Also technical data may be obtained from analytics providers, advertising networks, search information providers etc.</li></ul>",
  },
  {
    id: "third-block",
    title: "HOW WE USE YOUR PERSONAL INFORMATION",
    tag: "Eligibility",
    type: "list",
    content:"",
  },
];

const Content = () => {
  const sectionRefs = useRef([]);
  const lineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  const handleClick = (index) => {
    isScrolling.current = true;

    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: sectionRefs.current[index],
        offsetY: 80,
      },
      ease: "power2.inOut",
      onComplete: () => {
        isScrolling.current = false;
        setActiveIndex(index); // ensures text-primary works on click
        animateLine(index); // keep progress line in sync
      },
    });
  };

  const animateLine = (index) => {
    const percent = (index / (contentBlocks.length - 1)) * 100;
    gsap.to(lineRef.current, {
      height: `${percent}%`,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;

      const scrollY = window.scrollY;
      const offsets = sectionRefs.current.map((ref) =>
        ref ? ref.offsetTop - 150 : 0
      );

      const current = offsets.findIndex((offset, i) => {
        const nextOffset = offsets[i + 1] || Infinity;
        return scrollY >= offset && scrollY < nextOffset;
      });

      if (current !== -1 && current !== activeIndex) {
        setActiveIndex(current);
        animateLine(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  return (
    <section
      className="w-screen h-fit py-[10%] pt-[15%] bg-[#FBFBFB] px-[4vw]"
      id="content"
    >
      <div className="w-full flex flex-col items-end gap-[4vw]">
        <div className="space-y-[1vw] w-[80%]">
            <p>
              Montra Technology Solutions Limited is a private limited liability
              company (“Montra”, “Company”, “we”, “us” or “our”) licensed by the
              Central Bank of Nigeria to provide electronic payment systems
              services and registered office at 20 Layi Yusuf Crescent, Lekki
              Phase 1, Lagos State. Montra offers an online payment platform
              that allows customers to make seamless digital payments. The
              Montra Privacy Policy (“Privacy Policy”) describes how we treat
              your personal information as private and confidential, how we
              collect, use, store, share, and protect personal data from our
              website, merchants, customers and vendors who engage with our
              services. It also applies to our website, mobile applications and
              payment platforms (&quot;Services&quot;) provided by Montra.
            </p>
            <p>
              Our Services are intended for and provided to businesses
              (Merchants). This Privacy Policy does not apply to services that
              are not owned or controlled by Montra, including third-party
              websites and the services of Montra Merchants. We process personal
              data at the direction of and on behalf of Merchants. We do not
              control these third-party websites and are not responsible for
              their privacy statements. Please consult such third parties’
              privacy statements. We are committed to protecting your personal
              in accordance with this Privacy Policy and in compliance with the
              Nigeria Data Protection Regulation (NDPR) 2019. By using or
              accessing our Services, you agree to the collection, use, and
              disclosure of your personal data as described in this Privacy
              Policy.
            </p>
            <p>
              We may need to update, modify or amend our Privacy Policy as our
              technology evolves and as required by law. We reserve the right to
              post any revisions we make to our Privacy Policy on this page and
              such revised policy becomes effective as at the time it is posted.
              We will notify you when any changes to our privacy policy have
              been made. We also encourage you to check this page from time to
              time for updates to this policy.
            </p>

        </div>

      <div className="w-full flex justify-between">
        {/* Navigation */}
        <div className="w-[20%] sticky top-[20%] h-fit mt-[2vw]">
          <div className="flex">
            {/* Circles and Progress Line */}
            <div className="flex gap-3 w-[3vw] h-fit relative z-[5]">
              <div className="w-[1vw] flex flex-col gap-[2vw] items-center relative">
                <div className="w-[1.5px] h-full bg-black/20 absolute top-0 left-1/2 -translate-x-1/2">
                  <div
                    ref={lineRef}
                    className="w-full bg-primary absolute top-0 left-0"
                    style={{ height: "0%" }}
                  />
                </div>
                {contentBlocks.map((_, i) => (
                  <div
                    key={i}
                    className={`w-[0.8vw] h-[0.8vw] rounded-full border relative z-[2] transition-all duration-300 ${
                      i <= activeIndex
                        ? "bg-primary border-primary"
                        : "bg-white border-black/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col w-[70%] text-[1vw] gap-[1.5vw] -mt-[0.5vw] font-display">
              {contentBlocks.map((item, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer transition-colors duration-500 ${
                    index === activeIndex
                      ? "text-primary font-medium"
                      : "text-[#D2D2D2]"
                  }`}
                >
                  {item.tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[80%]">
          <div className="flex flex-col gap-[4vw]">
          
            {contentBlocks.map((block, index) => (
              <div
                key={block.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="space-y-[2vw] w-[85%]"
                id={block.id}
              >
                <h2 className="text-[3.4vw] font-display font-medium leading-[1.2] w-[70%]">
                  {block.title}
                </h2>
                <div className="space-y-[1.5vw]" dangerouslySetInnerHTML={{__html:block.content}}/>
                  
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Content;
