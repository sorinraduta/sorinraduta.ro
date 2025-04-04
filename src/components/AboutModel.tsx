import { Html } from "@react-three/drei";
import About from "./About";

export default function AboutModel() {
  return (
    <>
      <Html
        position={[4.203, 0.819, -4.813]}
        rotation={[1.55, 3.15, -0.291]}
        scale={0.08}
        distanceFactor={3}
        transform
        occlude
      >
        <About />
      </Html>
    </>
  );
}
