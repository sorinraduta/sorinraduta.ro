import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export default function CameraController({
  position,
  direction,
}: {
  position: Vector3;
  direction: Vector3;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  useEffect(() => {
    // Set the camera position
    camera.position.set(position.x, position.y, position.z);

    // Compute target point by adding direction vector to position
    const pos = new Vector3(position.x, position.y, position.z);
    const target = pos.clone().add(direction);

    controlsRef.current?.target.copy(target);
    controlsRef.current?.update();
  }, [position, direction]);

  return <OrbitControls ref={controlsRef} makeDefault />;
}
