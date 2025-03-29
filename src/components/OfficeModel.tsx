import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Light } from "three";

export default function OfficeModel() {
  const { scene } = useGLTF("/assets/models/office.glb");

  useMemo(() => {
    scene.traverse((child) => {
      if (child instanceof Light) {
        child.intensity = 1;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}
