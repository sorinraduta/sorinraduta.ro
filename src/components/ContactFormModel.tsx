// Scene.tsx
import { Html } from "@react-three/drei";
import ContactForm from "./ContactForm";

export default function ContactFormModel() {
  return (
    <>
      <Html
        position={[4.9175, 0.935, -4.639]}
        rotation={[0.35, 3.15, 0]}
        scale={0.1}
        distanceFactor={1}
        transform
        occlude
      >
        <ContactForm />
      </Html>
    </>
  );
}
