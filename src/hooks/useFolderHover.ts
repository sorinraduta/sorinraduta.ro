import { useCursor } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Mesh, Raycaster, Vector2 } from "three";

const raycaster = new Raycaster();
const mouse = new Vector2();

const useFolderHover = () => {
  const { camera, scene } = useThree();

  const prevHoveredGroup = useRef<Mesh[]>([]);
  const [currentHoveredGroup, setCurrentHoveredGroup] = useState<string | null>(
    null
  );
  const rafId = useRef<number | null>(null);

  const hoverGroups: Record<string, string[]> = {
    Plane: ["Plane", "Plane001"],
    Plane001: ["Plane", "Plane001"],
    Plane002: ["Plane002", "Plane003"],
    Plane003: ["Plane002", "Plane003"],
    Plane004: ["Plane004", "Plane005"],
    Plane005: ["Plane004", "Plane005"],
  };

  useCursor(!!currentHoveredGroup);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);

        prevHoveredGroup.current.forEach((obj) => {
          if (obj instanceof Mesh) {
            (obj.material as any).metalness = 0.2;
            (obj.material as any).needsUpdate = true;
          }
        });
        prevHoveredGroup.current = [];
        const hovered = intersects[0].object;
        const group = hoverGroups[hovered.name];

        if (intersects.length === 0 || !group) {
          setCurrentHoveredGroup(null);
          return;
        }

        if (currentHoveredGroup !== hovered.name) {
          setCurrentHoveredGroup(hovered.name);
        }

        const groupMeshes: Mesh[] = [];

        group.forEach((name) => {
          const obj = scene.getObjectByName(name);
          if (obj && obj instanceof Mesh) {
            obj.material.metalness = -0.3;
            obj.material.needsUpdate = true;
            groupMeshes.push(obj);
          }
        });

        prevHoveredGroup.current = groupMeshes;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [camera, scene]);
};

export default useFolderHover;
