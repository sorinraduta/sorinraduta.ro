import { useEffect, useState } from "react";
import { cameraViews } from "../config/views";
import useCameraStore from "./useCameraStore";

const useDrawerOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cameraViewIndex } = useCameraStore();

  useEffect(() => {
    const drawerCameraViewIndex = cameraViews.findIndex(
      (view) => view.name === "drawer"
    );

    if (cameraViewIndex === drawerCameraViewIndex) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [cameraViewIndex]);

  return { isOpen, setIsOpen };
};

export default useDrawerOpen;
