"use client"
import { useState, useEffect } from 'react';
const UseMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(globalThis.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(globalThis.innerWidth <= breakpoint);
    };

    globalThis.addEventListener('resize', handleResize);
    return () => globalThis.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export default UseMobile;
