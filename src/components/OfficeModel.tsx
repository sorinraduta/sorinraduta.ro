import { useGLTF } from "@react-three/drei";

export default function OfficeModel() {
  const { scene, materials } = useGLTF("/assets/models/office.glb");

  return <primitive object={scene} />;
}
