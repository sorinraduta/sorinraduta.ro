import { useEffect, useState } from "react";
import MobileFallback from "./MobileFallback";
import OfficeViewer from "./OfficeViewer";

const MOBILE_BREAKPOINT = 768;

const ResponsivePortal = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileFallback /> : <OfficeViewer />;
};

export default ResponsivePortal;
