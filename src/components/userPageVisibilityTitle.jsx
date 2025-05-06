'use client'; // required for App Router

import { useEffect } from 'react';

const usePageVisibilityTitle = ({ activeTitle = 'Montra for Personal: Your All-in-One Digital Wallet', inactiveTitle = 'Come back please!' }) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = inactiveTitle;
      } else {
        document.title = activeTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.title = activeTitle;

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTitle, inactiveTitle]);
};

export default usePageVisibilityTitle;
