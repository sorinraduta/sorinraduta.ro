import { useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { Group, Mesh, type Object3DEventMap } from "three";
import useDrawerOpen from "./useDrawerOpen";
import useFolderClick from "./useFolderClick";
import useFolderHover from "./useFolderHover";

const folderNames = [
  "Plane",
  "Plane001",
  "Plane002",
  "Plane003",
  "Plane004",
  "Plane005",
];
const folderColor = "#b18e3e";
const paperColor = "#a8ada9";
const drawerGroup = new Group();

const useDrawer = (scene: Group<Object3DEventMap>) => {
  const { isOpen } = useDrawerOpen();

  const { position } = useSpring({
    position: isOpen ? [8.205, 0.0, -9.3] : [8.205, 0.0, -8.845],
    config: { mass: 2, tension: 100, friction: 25 },
  });

  useFolderClick();
  useFolderHover();

  useFrame(() => {
    if (drawerGroup && position) {
      const [x, y, z] = position.get();
      drawerGroup.position.set(x, y, z);
    }
  });

  useEffect(() => {
    scene.add(drawerGroup);

    scene.traverse((obj) => {
      if (folderNames.includes(obj.name) && obj instanceof Mesh) {
        obj.material = obj.material.clone();
      }
    });

    const folderOutside1 = scene.getObjectByName("Plane");
    const folderInside1 = scene.getObjectByName("Plane001");
    if (folderOutside1 && folderInside1) {
      ((folderOutside1 as Mesh).material as any).color.set(folderColor);
      ((folderInside1 as Mesh).material as any).color.set(paperColor);
      ((folderInside1 as Mesh).material as any).metalness = 0.2;
      ((folderInside1 as Mesh).material as any).roughness = 0.4;

      drawerGroup.add(folderOutside1);
      drawerGroup.add(folderInside1);
    }

    const folderOutside2 = scene.getObjectByName("Plane002");
    const folderInside2 = scene.getObjectByName("Plane003");
    if (folderOutside2 && folderInside2) {
      ((folderOutside2 as Mesh).material as any).color.set(folderColor);
      ((folderInside2 as Mesh).material as any).color.set(paperColor);
      ((folderInside2 as Mesh).material as any).metalness = 0.2;
      ((folderInside2 as Mesh).material as any).roughness = 0.4;

      drawerGroup.add(folderOutside2);
      drawerGroup.add(folderInside2);
    }

    const folderOutside3 = scene.getObjectByName("Plane004");
    const folderInside3 = scene.getObjectByName("Plane005");
    if (folderOutside3 && folderInside3) {
      ((folderOutside3 as Mesh).material as any).color.set(folderColor);
      ((folderInside3 as Mesh).material as any).color.set(paperColor);
      ((folderInside3 as Mesh).material as any).metalness = 0.2;
      ((folderInside3 as Mesh).material as any).roughness = 0.4;

      drawerGroup.add(folderOutside3);
      drawerGroup.add(folderInside3);
    }

    const upperDrawer = scene.getObjectByName("cabinet_210_03002");
    if (upperDrawer) {
      drawerGroup.add(upperDrawer);
    }

    drawerGroup.rotateY(Math.PI);

    const cabinetBody = scene.getObjectByName("cabinet_210_03");
    cabinetBody?.rotateY(Math.PI);

    const bottomDrawer = scene.getObjectByName("cabinet_210_03001");
    bottomDrawer?.rotateY(Math.PI);
    bottomDrawer?.position.set(4.103, 0.02, -4.27);
  }, [scene]);
};

export default useDrawer;
