import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Vector3 } from "three";

export default function LogCameraPosition() {
  const { camera } = useThree();

  useEffect(() => {
    const log = () => {
      const pos = camera.position;
      const dir = camera.getWorldDirection(new Vector3());
      console.log(
        `Camera position: ${pos.x.toFixed(3)}, ${pos.y.toFixed(
          3
        )}, ${pos.z.toFixed(3)}`
      );
      console.log(
        `Camera direction: ${dir.x.toFixed(3)}, ${dir.y.toFixed(
          3
        )}, ${dir.z.toFixed(3)}`
      );
    };

    window.addEventListener("keydown", (e) => {
      if (e.key === "p") log();
    });

    return () => window.removeEventListener("keydown", log);
  }, []);

  return null;
}
