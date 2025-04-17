import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { Raycaster, Vector2 } from "three";

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
        console.log("Project1");
        break;
      }
      if (object.name === "Plane002" || object.name === "Plane003") {
        console.log("Project2");
        break;
      }
      if (object.name === "Plane004" || object.name === "Plane005") {
        console.log("Project3");
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
