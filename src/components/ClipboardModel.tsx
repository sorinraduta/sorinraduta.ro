import { useGLTF } from "@react-three/drei";

export default function ClipboardModel() {
  const { scene } = useGLTF("/assets/models/clipboard.glb");

  scene.scale.set(0.25, 0.25, 0.25);
  scene.position.set(4.2, 0.815, -4.8);
  scene.rotation.set(0, 2.85, 0);

  return <primitive object={scene} />;
}
