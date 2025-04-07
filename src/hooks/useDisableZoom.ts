import { useEffect } from "react";

export const useDisableZoom = () => {
  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const keydownHandler = (e: KeyboardEvent) => {
      const zoomKeys = ["=", "-", "+", "0"];
      if ((e.ctrlKey || e.metaKey) && zoomKeys.includes(e.key)) {
        e.preventDefault();
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        (e.code === "Equal" || e.code === "Minus" || e.code === "Digit0")
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });
    window.addEventListener("keydown", keydownHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("keydown", keydownHandler);
    };
  }, []);
};
