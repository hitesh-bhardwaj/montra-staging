"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useTransitionRouter } from "next-view-transitions";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const router = useTransitionRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  const slideInOut = () => {
    document.documentElement.animate(
      [
        { opacity: 1, transform: "scale(1) translateY(0)", borderRadius: "0" },
        { opacity: 0.2, transform: "scale(0.90) translateY(50px)", borderRadius: "20px" },
      ],
      {
        duration: 1300,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
      ],
      {
        duration: 1300,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const getExactPath = () =>
    typeof window !== "undefined" ? window.location.pathname : "";

  const navigateTo = useCallback(
    (path) => {
      if (isAnimating || getExactPath() === path) return;

      setIsAnimating(true);

      router.push(path, {
        onTransitionReady: slideInOut,
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, 1600);
    },
    [isAnimating, router]
  );

  return (
    <NavigationContext.Provider value={{ navigateTo, isAnimating }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useAnimatedNavigation = () => useContext(NavigationContext);
