import { Html } from "@react-three/drei";
import Credits from "./Credits";

export default function CreditsModel() {
  return (
    <>
      <Html
        position={[6, 0.746, -4.35]}
        rotation={[1.57, 0, -1.56]}
        scale={0.1}
        distanceFactor={2}
        transform
        occlude
      >
        <Credits />
      </Html>
    </>
  );
}
