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
  const [isTablet, setIsTablet] = useState<boolean>();
  const [isSmallTablet, setIsSmallTablet] = useState<boolean>();
  const [isMobile, setIsMobile] = useState<boolean>();
  const [isMediumMobile, setIsMediumMobile] = useState<boolean>();
  const [isSmallMobile, setIsSmallMobile] = useState<boolean>();
  const [width, setWidth] = useState<number>();
  
  const breakpointToNumber = (str: string) => {
    return +str.replace('px', '');
  }
  const tablWidth = breakpointToNumber(theme.breakpoints.tablet);
 const sTablWidth = breakpointToNumber(theme.breakpoints.sTablet);
 const mobileWidth = breakpointToNumber(theme.breakpoints.mobile);
 const medMobileWidth = breakpointToNumber(theme.breakpoints.mMobile);
 const xsMobileWidth = breakpointToNumber(theme.breakpoints.xsMobile);
  
  useEffect(() => {
     const isTablet = tablWidth >= window.innerWidth && window.innerWidth > sTablWidth;
      const isSallTablet = sTablWidth >= window.innerWidth;
      const isMobile = mobileWidth >= window.innerWidth;
      const isMedMobile = medMobileWidth >= window.innerWidth;
      const isXSMobile = xsMobileWidth >= window.innerWidth;
      setIsTablet(isTablet);
      setIsSmallTablet(isSallTablet);
      setIsMobile(isMobile);
      setIsMediumMobile(isMedMobile);
      setIsSmallMobile(isXSMobile);
    const onHandleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', onHandleResize);
    return () => window.removeEventListener('resize', onHandleResize);
  }, []);

  useEffect(() => {
    if (width) {
     const isTablet = tablWidth >= window.innerWidth && window.innerWidth > sTablWidth;
      const isSallTablet = sTablWidth >= window.innerWidth;
      const isMobile = mobileWidth >= window.innerWidth;
      const isMedMobile = medMobileWidth >= window.innerWidth;
      const isXSMobile = xsMobileWidth >= window.innerWidth;
      setIsTablet(isTablet);
      setIsSmallTablet(isSallTablet);
      setIsMobile(isMobile);
      setIsMediumMobile(isMedMobile);
      setIsSmallMobile(isXSMobile);
    }
  }, [width])

  return {isTablet, isSmallTablet, isMobile, isMediumMobile, isSmallMobile};
};

