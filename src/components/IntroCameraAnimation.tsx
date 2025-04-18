import { useEffect } from "react";
import useCameraStore from "../hooks/useCameraStore";

const IntroCameraAnimation = () => {
  const { cameraViewIndex, setCameraViewIndex } = useCameraStore();

  useEffect(() => {
    if (cameraViewIndex !== -1) {
      return;
    }

    const to = setTimeout(() => {
      setCameraViewIndex(0);
    }, 1000);

    return () => clearTimeout(to);
  }, []);

  return null;
};

export default IntroCameraAnimation;
