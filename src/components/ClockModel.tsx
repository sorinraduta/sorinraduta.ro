import { useCursor, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import { Mesh } from "three";

import useCameraStore from "../hooks/useCameraStore";
export default function ClockModel() {
  const { scene } = useGLTF("/assets/models/clock.glb");
  const { goToNextView } = useCameraStore();
  const [hovered, setHovered] = useState(false);

  useCursor(hovered);

  useEffect(() => {
    const clockHourPin = scene.getObjectByName("mdlwc_2_hour_pointer");
    clockHourPin?.position.set(4.9, 69.2, 0.7);
    clockHourPin?.rotateY(1.45);

    const clockMinutePin = scene.getObjectByName("mdlwc_2_min_pointer");
    clockMinutePin?.position.set(-8.85, 49.3, 1);
    clockMinutePin?.rotateY(2.88);
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = child.material.clone(); // prevent shared material bug
        child.material.emissiveIntensity = hovered ? 0.5 : 0;
        child.material.needsUpdate = true;
      }
    });
  }, [hovered, scene]);

  scene.scale.set(0.4, 0.4, 0.4);
  scene.position.set(2.414, 1.5, -3.7);
  scene.rotation.set(0, 1.57, 0);

  return (
    <primitive
      object={scene}
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        goToNextView();
      }}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    />
  );
}
