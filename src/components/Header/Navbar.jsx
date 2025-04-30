// app/components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: (
      <svg className="w-5 h-5" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.47371 18.8195C5.17242 18.7062 5.75199 19.1115 5.8807 19.7991C6.03735 22.2299 5.69388 24.8762 5.88437 27.2805C6.02412 29.0464 7.4664 30.424 9.22275 30.5468C13.9277 30.877 19.0143 30.2908 23.7589 30.5468C25.3983 30.4174 26.8406 29.0655 27.0127 27.4166C27.2679 24.9689 26.8134 22.1637 27.0546 19.6793C27.454 18.3899 29.2508 18.5451 29.3736 19.9374C29.2294 22.4263 29.5553 25.1101 29.3736 27.5754C29.1728 30.3011 26.8148 32.6223 24.1141 32.8834C19.1658 32.6341 13.835 33.2482 8.93002 32.8959C6.17489 32.6981 3.74043 30.3482 3.53597 27.5754C3.35283 25.088 3.67865 22.3785 3.53891 19.8668C3.57642 19.3726 3.98829 18.8996 4.47371 18.8209V18.8195Z" fill="white" />
        <path d="M16.142 0.0322069C16.5119 -0.0442837 16.9091 0.00793585 17.1908 0.270504L32.6382 15.7179C33.5068 16.83 32.0947 18.2414 30.9833 17.3728L16.4825 2.88222L1.88823 17.4073C0.776915 18.2245 -0.59109 16.7844 0.272371 15.7179L15.683 0.306543C15.8029 0.194749 15.9816 0.0653038 16.142 0.0322069Z" fill="white" />
      </svg>
    ),
  },
  { name: "Personal", href: "/personal" },
  { name: "Business", href: "/business" },
  { name: "Platform", href: "/platform" },
  { name: "Company", href: "/company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [highlight, setHighlight] = useState({ left: 0, width: 0 });

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
    requestAnimationFrame(() => {
      const active = navRef.current.querySelector('a[data-active="true"]');
      movePill(active);
    });
  }, [pathname]);

  return (
    <nav
      className="bg-black rounded-full h-[4.1vw] px-1.5 py-1.5 max-sm:hidden">
      <div 
        ref={navRef}
        className="relative w-full inline-flex h-full items-center overflow-hidden"
        onMouseLeave={() => {
        const active = navRef.current.querySelector('a[data-active="true"]');
        movePill(active);
      }}
        >
        <span
          className="absolute bg-primary rounded-full h-full w-full transition-all duration-500"
          style={{
            transform: `translateX(${highlight.left}px)`,
            width: highlight.width,
          }}
        >
        </span>

        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive ? "true" : undefined}
              aria-label={link.name}
              className="relative z-10 flex text-[1.05vw] min-w-[5vw] h-full items-center px-5 justify-center text-white whitespace-nowrap font-display"
              onMouseEnter={(e) => movePill(e.currentTarget)}
            >
              {link.icon || link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}