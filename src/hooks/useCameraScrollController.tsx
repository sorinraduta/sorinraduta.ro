import { useEffect } from "react";
import type { CameraView } from "../config/camera";
export const useCameraScrollController = ({
  views,
  setViewIndex,
}: {
  views: CameraView[];
  setViewIndex: (index: number) => void;
}) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stepSize = 400;
      const index = Math.floor(scrollY / stepSize);
      const newIndex = Math.max(0, Math.min(views.length - 1, index));
      setViewIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
