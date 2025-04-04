import { useCallback, useEffect, useRef } from "react";
import { DEBUG } from "../config/env";
import useCameraStore from "./useCameraStore";

const SCENE_COOLDOWN = 1000;
const TOUCH_SENSITIVITY = 20;

export function useCameraScrollController() {
  const isLocked = useRef(false);
  const touchStartY = useRef<number | null>(null);
  const { goToNextView, goToPreviousView } = useCameraStore();

  const triggerSceneChange = useCallback(
    (direction: "up" | "down") => {
      if (isLocked.current || DEBUG) return;

      direction === "down" ? goToNextView() : goToPreviousView();
      isLocked.current = true;

      setTimeout(() => {
        isLocked.current = false;
      }, SCENE_COOLDOWN);
    },
    [goToNextView, goToPreviousView]
  );

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      const delta = event.deltaY;
      if (Math.abs(delta) < 20) return; // ignore small movements

      triggerSceneChange(delta > 0 ? "down" : "up");
    },
    [triggerSceneChange]
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const currentY = event.touches[0].clientY;
      const deltaY = touchStartY.current - currentY;

      if (Math.abs(deltaY) < TOUCH_SENSITIVITY) return; // ignore small movements

      triggerSceneChange(deltaY > 0 ? "down" : "up");
      touchStartY.current = null; // prevent multiple triggers during same gesture
    },
    [triggerSceneChange]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);
}
