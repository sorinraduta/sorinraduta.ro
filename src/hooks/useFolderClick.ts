import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Raycaster, Vector2 } from "three";
import { links } from "../config/links";
const raycaster = new Raycaster();
const mouse = new Vector2();

const useFolderClick = () => {
  const { camera, scene } = useThree();

  const handleClick = (event: MouseEvent) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    for (let i = 0; i < intersects.length; i++) {
      const object = intersects[i].object;

      if (object.name === "Plane" || object.name === "Plane001") {
        window.open(links.project1, "_blank");
        break;
      }
      if (object.name === "Plane002" || object.name === "Plane003") {
        window.open(links.project2, "_blank");
        break;
      }
      if (object.name === "Plane004" || object.name === "Plane005") {
        window.open(links.project3, "_blank");
        break;
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useFolderClick;
