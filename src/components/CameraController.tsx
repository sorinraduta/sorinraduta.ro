import { useSpring } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { DEBUG } from "../config/env";

export default function CameraController({
  position,
  direction,
}: {
  position: Vector3;
  direction: Vector3;
}) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const target = position.clone().add(direction);

  useSpring({
    pos: position.toArray(),
    tgt: target.toArray(),
    config: { tension: 120, friction: 20 },
    onChange: ({ value }) => {
      camera.position.set(value.pos[0], value.pos[1], value.pos[2]);
      controlsRef.current?.target.set(value.tgt[0], value.tgt[1], value.tgt[2]);
      controlsRef.current?.update();
    },
  });

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      target={target}
      enableZoom={DEBUG ? true : false}
      enableRotate={DEBUG ? true : false}
      enablePan={DEBUG ? true : false}
    />
  );
}
