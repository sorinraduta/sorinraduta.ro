import { useCursor, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Color, Mesh } from "three";
import { links } from "../config/links";
export default function MugModel() {
  const { scene } = useGLTF("/assets/models/mug.glb");
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  scene.scale.set(0.15, 0.15, 0.15);
  scene.position.set(4.63, 0.8168, -4.67);
  scene.rotation.set(0, 4, 0);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = child.material.clone(); // prevent shared material bug
        child.material.emissive = new Color(hovered ? "#444444" : "#000000");
        child.material.emissiveIntensity = hovered ? 0.5 : 0;
        child.material.needsUpdate = true;
      }
    });
  }, [hovered, scene]);

  return (
    <primitive
      object={scene}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => window.open(links.disconnect, "_blank")}
    />
  );
}
