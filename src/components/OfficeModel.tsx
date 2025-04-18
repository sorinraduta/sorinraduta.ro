import { useGLTF } from "@react-three/drei";
import useDrawer from "../hooks/useDrawer";
import useOfficeCleanup from "../hooks/useOfficeCleanup";

export default function OfficeModel() {
  const { scene } = useGLTF("/assets/models/office.glb");

  useOfficeCleanup(scene);
  useDrawer(scene);

  return <primitive object={scene} />;
}
