import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { cameraViews } from "../config/camera";
import CameraController from "./CameraController";
import LogCameraPosition from "./LogCameraPosition";
import OfficeModel from "./OfficeModel";

export default function OfficeViewer() {
  const [cameraPosIndex, setCameraPosIndex] = useState(0);
  const [cameraPos, setCameraPos] = useState(cameraViews[cameraPosIndex]);

  const onCameraPositionChange = () => {
    if (cameraPosIndex < cameraViews.length - 1) {
      setCameraPos(cameraViews[cameraPosIndex + 1]);
      setCameraPosIndex(cameraPosIndex + 1);
    } else {
      setCameraPos(cameraViews[0]);
      setCameraPosIndex(0);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "grey" }}>
      <button onClick={onCameraPositionChange}>Next step</button>
      <Canvas camera={cameraPos}>
        <ambientLight intensity={1} position={[4.11, 2.98, -2.7]} />
        <pointLight intensity={1} position={[3.11, 0.98, -0.7]} color="red" />
        <Suspense fallback={null}>
          <CameraController
            position={cameraPos.position}
            direction={cameraPos.direction}
          />
          <LogCameraPosition />
          <OfficeModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
