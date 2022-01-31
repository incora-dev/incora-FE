import { useCallback, useEffect, useState } from 'react';
import { theme } from '../styles/theme';

export const useOnClickOutside = (ref: any, handler: (e: any) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
       if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    
    document.addEventListener('mousedown', listener);
    // document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      // document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [width, setWidth] = useState<number>();

  useEffect(() => {
    const mobileWidth = +theme.breakpoints.tablet.replace('px', '');
      const isMobile = mobileWidth >= window.innerWidth;
      setIsMobile(isMobile);
    const onHandleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', onHandleResize);
    return () => window.removeEventListener('resize', onHandleResize);
  }, []);

  useEffect(() => {
    if (width) {
      const mobileWidth = +theme.breakpoints.tablet.replace('px', '');
      const isMobile = mobileWidth >= width;
      setIsMobile(isMobile);
    }
  }, [width])

  return isMobile;
};
