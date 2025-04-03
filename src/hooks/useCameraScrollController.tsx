import { useCallback, useEffect, useRef } from "react";
import { throttle } from "../utils/throttle";
import useCameraStore from "./useCameraStore";

export function useCameraScrollController() {
  const scrollTicksRef = useRef<number>(0);
  const { goToNextView, goToPreviousView } = useCameraStore();

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const isScrollingDown = event.deltaY > 0;
      scrollTicksRef.current = isScrollingDown
        ? scrollTicksRef.current + 1
        : scrollTicksRef.current - 1;

      if (scrollTicksRef.current > 5) {
        goToNextView();
        scrollTicksRef.current = 0;
      }

      if (scrollTicksRef.current < -5) {
        goToPreviousView();
        scrollTicksRef.current = 0;
      }
    },
    [goToNextView, goToPreviousView]
  );

  useEffect(() => {
    const throttledHandleWheel = throttle(handleWheel, 50);
    window.addEventListener("wheel", throttledHandleWheel);
    return () => window.removeEventListener("wheel", throttledHandleWheel);
  }, [handleWheel]);
}
