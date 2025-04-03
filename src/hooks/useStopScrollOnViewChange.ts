import { useEffect } from "react";
import stopScroll from "../utils/stopScroll";
import useCameraStore from "./useCameraStore";

const useStopScrollOnViewChange = () => {
  const { cameraView } = useCameraStore();

  useEffect(() => {
    stopScroll();
  }, [cameraView]);
};

export default useStopScrollOnViewChange;
