import { Html } from "@react-three/drei";
import { useEffect } from "react";
import About from "./About";

export default function AboutModel() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event("resize"));
    });
  }, []);

  return (
    <Html
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
