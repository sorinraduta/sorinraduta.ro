// Scene.tsx
import { Html } from "@react-three/drei";
import ContactForm from "./ContactForm";

export default function Scene() {
  return (
    <>
      <Html
        position={[4.916, 0.9232, -4.656]}
        rotation={[0.36, 3.15, 0]}
        scale={0.08}
        distanceFactor={3}
        transform
        occlude
      >
        <ContactForm />
      </Html>
    </>
  );
}
