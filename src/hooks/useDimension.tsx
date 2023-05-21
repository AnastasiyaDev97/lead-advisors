import { useState, useEffect } from 'react';

const getWindowDimensions = (): { width: number; height: number } => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

type useWindowDimensionReturnType = {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopXL: boolean;
};

const useWindowDimensions = (): useWindowDimensionReturnType => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isDesktopXL, setIsDesktopXL] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
      setIsMobile(getWindowDimensions().width < 575);
      setIsTablet(getWindowDimensions().width < 990);
      setIsDesktop(getWindowDimensions().width < 1200);
      setIsDesktopXL(getWindowDimensions().width < 1919);
    };

    setIsMobile(getWindowDimensions().width < 575);
    setIsTablet(getWindowDimensions().width < 990);
    setIsDesktop(getWindowDimensions().width < 1200);
    setIsDesktopXL(getWindowDimensions().width < 1919);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width: windowDimensions.width,
    height: windowDimensions.height,
    isMobile,
    isTablet,
    isDesktop,
    isDesktopXL,
  };
};

export default useWindowDimensions;
