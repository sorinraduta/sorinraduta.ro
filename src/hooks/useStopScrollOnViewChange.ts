import { useEffect } from "react";
import stopScroll from "../utils/stopScroll";

const useStopScrollOnViewChange = (cameraPosIndex: number) => {
  useEffect(() => {
    stopScroll();
  }, [cameraPosIndex]);
};

export default useStopScrollOnViewChange;
