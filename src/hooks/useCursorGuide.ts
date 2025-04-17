import { useEffect, useRef } from "react";
import useCameraStore from "./useCameraStore";

const useCursorGuide = () => {
  const { cameraViewIndex } = useCameraStore();
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const isFirstView = cameraViewIndex === 0;

    if (!isFirstView) {
      cursorRef.current?.remove();
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.left = `${clientX}px`;
          cursorRef.current.style.top = `${clientY}px`;
        }
      });
    };

    cursorRef.current = document.createElement("div");
    cursorRef.current.innerHTML = `
      <div class="text-white uppercase text-lg text-center font-medium tracking-wider animate-bounce select-none leading-5">
        Scroll<br />down
      </div>
    `;
    cursorRef.current.style.position = "fixed";
    cursorRef.current.style.pointerEvents = "none";
    cursorRef.current.style.zIndex = "9999";
    cursorRef.current.style.fontSize = "20px";
    cursorRef.current.style.transform = "translate(-50%, -50%)";
    cursorRef.current.style.cursor = "none !important";
    document.body.appendChild(cursorRef.current);
    document.body.classList.add("cursor-none");
    const style = document.createElement("style");
    style.innerHTML = `
      .cursor-none * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.body.classList.remove("cursor-none");
      style.remove();
    };
  }, [cameraViewIndex]);
};

export default useCursorGuide;
