import { Html } from "@react-three/drei";
import { useEffect, type RefObject } from "react";
import About from "./About";
import { htmlOverlayRef } from "./htmlOverlayRef";

export default function AboutModel() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  const ref = htmlOverlayRef;

  if (!ref) return null;

  return (
    <Html
      portal={ref as RefObject<HTMLElement>}
      position={[4.203, 0.819, -4.813]}
      rotation={[1.55, 3.15, -0.291]}
      scale={0.08}
      distanceFactor={3}
      transform
      occlude
      fullscreen
      style={{ transform: "translateZ(0)", willChange: "transform" }}
    >
      <About />
    </Html>
  );
}
