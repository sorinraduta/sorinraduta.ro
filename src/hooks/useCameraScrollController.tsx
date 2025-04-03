import { useEffect } from "react";
import { cameraViews } from "../config/views";
import useCameraStore from "./useCameraStore";

export const useCameraScrollController = () => {
  const { setCameraViewIndex } = useCameraStore();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const stepSize = 400;
      const index = Math.floor(scrollY / stepSize);
      const newIndex = Math.max(0, Math.min(cameraViews.length - 1, index));
      setCameraViewIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
