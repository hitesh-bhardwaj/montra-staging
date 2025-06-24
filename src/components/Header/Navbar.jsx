"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "../Buttons/icons";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg
        className="w-5 h-5"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.47371 18.8195C5.17242 18.7062 5.75199 19.1115 5.8807 19.7991C6.03735 22.2299 5.69388 24.8762 5.88437 27.2805C6.02412 29.0464 7.4664 30.424 9.22275 30.5468C13.9277 30.877 19.0143 30.2908 23.7589 30.5468C25.3983 30.4174 26.8406 29.0655 27.0127 27.4166C27.2679 24.9689 26.8134 22.1637 27.0546 19.6793C27.454 18.3899 29.2508 18.5451 29.3736 19.9374C29.2294 22.4263 29.5553 25.1101 29.3736 27.5754C29.1728 30.3011 26.8148 32.6223 24.1141 32.8834C19.1658 32.6341 13.835 33.2482 8.93002 32.8959C6.17489 32.6981 3.74043 30.3482 3.53597 27.5754C3.35283 25.088 3.67865 22.3785 3.53891 19.8668C3.57642 19.3726 3.98829 18.8996 4.47371 18.8209V18.8195Z"
          fill="white"
        />
        <path
          d="M16.142 0.0322069C16.5119 -0.0442837 16.9091 0.00793585 17.1908 0.270504L32.6382 15.7179C33.5068 16.83 32.0947 18.2414 30.9833 17.3728L16.4825 2.88222L1.88823 17.4073C0.776915 18.2245 -0.59109 16.7844 0.272371 15.7179L15.683 0.306543C15.8029 0.194749 15.9816 0.0653038 16.142 0.0322069Z"
          fill="white"
        />
      </svg>
    ),
  },
  { name: "Personal", href: "/personal" },
  { name: "Business", href: "/business" },
  {
    name: "Platform",
    href: "#",
    svgWidth: "w-[0.7vw]",
  },
  { name: "Company", href: "/company" },
];

const navLinkArray = [
  {
    personal: [
      { link: "/personal/banking", name: "Banking" },
      { link: "/personal/payments", name: "Payments" },
      { link: "/personal/finance", name: "Finance" },
      { link: "/personal/chat", name: "Chat" },
      { link: "/personal/shop", name: "Shop" },
    ],
  },
  {
    business: [
      { link: "/business/banking", name: "Banking" },
      { link: "/business/payments", name: "Payments" },
      { link: "/business/agency-banking", name: "Agency Banking" },
      { link: "/business/inventory-management", name: "Inventory Management" },
      { link: "/business/montra-store", name: "Montra Store" },
      { link: "/business/payment-gateway", name: "Payment Gateway" },
      { link: "/business/tap-and-pay", name: "Tap & Pay" },
    ],
  },
];

export default function Navbar({ navigateTo, hidden }) {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [active, setActive] = useState(null);
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });
  const [openMenu, setOpenMenu] = useState(false);

  const movePill = (el) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setHighlight({
      left: rect.left - navRect.left,
      width: rect.width,
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fadeup-navlink",
        { yPercent: 100 },
        { yPercent: 0, delay: 0.3, }
      );
      gsap.fromTo(
        ".fadeup-navimg",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.3 }
      );
    });
    return () => ctx.revert();
  }, [active, openMenu]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fadeup-navpolicy",
        { opacity: 0 },
        { opacity: 1, y: 5, delay: 0.5 }
      );
      gsap.fromTo(
        ".fadeup-navicon",
        { opacity: 0 },
        { opacity: 1, y: 5, delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, [openMenu]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const activeEl = navRef.current.querySelector('a[data-active="true"]');
      movePill(activeEl);
    });
  }, [pathname]);

  return (
    <nav className={`bg-black rounded-full h-[4.1vw] max-sm:hidden max-md:hidden relative z-[500] ${pathname === '/' ? "opacity-0" : ""} `} id="nav-container">
      <div
        ref={navRef}
        className="relative w-full inline-flex h-full items-center overflow-hidden z-[54] bg-black rounded-full px-[0.5vw]"
        onMouseLeave={() => {
          const activeEl = navRef.current.querySelector(
            'a[data-active="true"]'
          );
          movePill(activeEl);
        }}
      >
        <span
          className="absolute bg-primary rounded-full h-[82%] w-[90%] transition-all duration-300"
          style={{
            transform: `translateX(${highlight.left - 7}px)`,
            width: highlight.width,
          }}
        ></span>

        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href || pathname.startsWith(`${link.href}/`);

          return (
            <a
              onClick={(e) => {
                e.preventDefault();
                navigateTo(link.href);
              }}
              key={link.href}
              href={link.href}
              data-active={
                isActive
                  ? "true"
                  : link.name === "Personal"
                    ? "personal"
                    : link.name === "Business"
                      ? "business"
                      : undefined
              }
              aria-label={link.name}
              className="relative z-10 flex text-[1.05vw] min-w-[5vw] h-full items-center px-[2vw] justify-center text-white whitespace-nowrap font-display gap-[0.5vw]"
              onMouseEnter={(e) => {
                movePill(e.currentTarget);
                if (link.name === "Personal") {
                  setOpenMenu(true);
                  setActive(1);
                }
                if (link.name === "Business") {
                  setOpenMenu(true);
                  setActive(2);
                }
              }}
              onMouseLeave={() => setOpenMenu(false)}
            >
              {link.icon || link.name}
              <div
                className={`w-[1.2vw] h-[1.2vw] flex justify-center font-bold items-center rounded-full border text-[0.8vw] border-white bg-white absolute top-[20%] left-[76%] text-primary ${link.name === "Personal" || link.name === "Business"
                    ? ""
                    : "hidden"
                  }`}
              >
                {link.name === "Personal" ? <p>5</p> : <p>7</p>}
              </div>
            </a>
          );
        })}
      </div>

      {/* Dropdown Area */}
      <div
        className="absolute top-[10%] left-0 w-full z-[51]"
        onMouseEnter={() => {
          setOpenMenu(true);
          if (active === 1 || active === 2) {
            const selector =
              active === 1
                ? 'a[data-active="personal"]'
                : 'a[data-active="business"]';
            const el = navRef.current?.querySelector(selector);
            movePill(el);
          }
        }}
        onMouseLeave={() => {
          setOpenMenu(false);
          if (!navRef.current) return;


          const el = navRef.current.querySelector('a[data-active="true"]');
          movePill(el);

        }}
      >
        <div
          aria-hidden={true}
          className={`w-full rounded-[2vw] bg-[#FAFBFF] border border-black/10 flex justify-end overflow-hidden transition-all duration-300 ease-out ${openMenu ? "h-[28vw] pt-[4.2vw]" : "h-[3.5vw] pt-0"
            }`}
        >
          <div className="w-[82.5%] flex gap-[1vw] h-full font-display text-primary">
            <div className="w-[60%] h-full py-[2vw] flex flex-col justify-between">
              <div className="flex flex-col gap-[0.7vw] text-[1.1vw]">
                {active === 1 &&
                  navLinkArray[0].personal.map((personal, id) => (
                    <div
                      key={id}
                      className="w-fit flex gap-[0.5vw] items-center group overflow-hidden"
                    >
                      <Link
                        aria-label={`Go to ${personal.name}`}
                        href={personal.link}
                        className="link-line fadeup-navlink font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(personal.link);
                        }}
                      >
                        {personal.name}
                      </Link>
                      <div className="overflow-hidden w-[0.7vw] h-[0.7vw] inline-block">
                        <Image
                          src="/assets/icons/diagonal-arrow.svg"
                          alt="diagonal-arrow"
                          width={40}
                          height={40}
                          className="w-[0.7vw] h-[0.7vw] scale-[0.7] translate-y-[100%] translate-x-[-100%] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-[1] transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>
                  ))}
                {active === 2 &&
                  navLinkArray[1].business.map((business, id) => (
                    <div
                      key={id}
                      className="w-fit flex gap-[0.5vw] items-center group overflow-hidden"
                    >
                      <Link
                        href={business.link}
                        className="link-line fadeup-navlink font-medium"
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(business.link);
                        }}
                      >
                        {business.name}
                      </Link>
                      <div className="overflow-hidden w-[0.7vw] h-[0.7vw] inline-block">
                        <Image
                          src="/assets/icons/diagonal-arrow.svg"
                          alt="diagonal-arrow"
                          width={40}
                          height={40}
                          className="w-[0.7vw] h-[0.7vw] scale-[0.7] translate-y-[100%] translate-x-[-100%] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:scale-[1] transition-all duration-300 ease-in-out"
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-full flex gap-[0.5vw] items-center text-[1vw] fadeup-navpolicy">
                <Link href="/" className="link-line text-black-1">
                  <div>
                    Privacy Policy

                  </div>
                </Link>
                <Image
                  src="/assets/icons/circle.svg"
                  alt="circle"
                  width={40}
                  height={40}
                  className="w-[0.4vw] h-[0.4vw] brightness-0"
                />
                <Link href="/" className="link-line text-black-1">
                  <div>
                    Cookie Policy
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-[55%] h-full flex flex-col py-[2vw] justify-between">
              <div className="w-[90%] h-[70%] rounded-[2vw] overflow-hidden fadeup-navimg">
                <Image
                  src={`${active==1?"/assets/images/header/personal-nav.png":"/assets/images/header/business-nav.png"}`}
                  alt="personal-nav"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex gap-[0.5vw] fadeup-navicon">
                {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-[2vw] h-[2vw] flex justify-center items-center rounded-full border border-black-1 group overflow-hidden transition-all duration-300"
                  >
                    <a
                      href="/"
                      aria-label="to the social links"
                      className="w-[2vw] h-[2vw] flex justify-center items-center group-hover:bg-black-1 transition-all duration-300"
                    >
                      <Icon className="text-black-1 group-hover:text-white transition-all duration-300" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
