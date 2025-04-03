import { useGLTF } from "@react-three/drei";

export default function MacBookModel() {
  const { scene } = useGLTF("/assets/models/macbook.glb");

  scene.scale.set(0.0095, 0.0095, 0.0095);
  scene.position.set(4.916, 0.8232, -4.8);
  scene.rotation.set(0, 3.15, 0);

  return <primitive object={scene} />;
}
