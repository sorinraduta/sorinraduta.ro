import { useCallback, useEffect, useRef } from "react";
import { throttle } from "../utils/throttle";
import useCameraStore from "./useCameraStore";

const SCENE_COOLDOWN = 1000;
const SCROLL_THROTTLE = 50;

export function useCameraScrollController() {
  const isLocked = useRef(false);
  const { goToNextView, goToPreviousView } = useCameraStore();

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (isLocked.current) return;

      const delta = event.deltaY;

      if (Math.abs(delta) < 20) return; // minor jitters

      const isScrollingDown = delta > 0;
      isScrollingDown ? goToNextView() : goToPreviousView();
      isLocked.current = true;

      setTimeout(() => {
        isLocked.current = false;
      }, SCENE_COOLDOWN);
    },
    [goToNextView, goToPreviousView]
  );

  useEffect(() => {
    const throttledHandleWheel = throttle(handleWheel, SCROLL_THROTTLE);
    window.addEventListener("wheel", throttledHandleWheel);
    return () => window.removeEventListener("wheel", throttledHandleWheel);
  }, [handleWheel]);
}
