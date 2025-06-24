"use client";
import { useEffect, useRef } from "react";

export default function usePageVisibilityTitle({ inactiveTitle }) {
  const originalTitle = useRef("");

  useEffect(() => {
    originalTitle.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = inactiveTitle;
      } else {
        document.title = originalTitle.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle.current;
    };
  }, [inactiveTitle]);
}
