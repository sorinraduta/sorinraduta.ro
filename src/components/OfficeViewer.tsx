import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { cameraViews } from "../config/camera";
import { DEBUG } from "../config/env";
import { useCameraScrollController } from "../hooks/useCameraScrollController";
import { useResetScroll } from "../hooks/useResetScroll";
import useStopScrollOnViewChange from "../hooks/useStopScrollOnViewChange";
import CameraController from "./CameraController";
import ContactFormModel from "./ContactFormModel";
import LogCameraPosition from "./LogCameraPosition";
import MacBookModel from "./MacBookModel";
import OfficeModel from "./OfficeModel";

export default function OfficeViewer() {
  const [cameraPosIndex, setCameraPosIndex] = useState(0);
  const cameraPos = cameraViews[cameraPosIndex];

  useResetScroll();
  useStopScrollOnViewChange(cameraPosIndex); // Stop mouse wheel scrolling
  useCameraScrollController({
    views: cameraViews,
    setViewIndex: setCameraPosIndex,
  });

  return (
    <div
      style={{
        height: "500vh",
        overflowY: "scroll",
        backgroundColor: "grey",
      }}
    >
      <Canvas
        camera={cameraPos}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: DEBUG ? "auto" : "none",
        }}
      >
        <ambientLight intensity={1} position={[4.11, 2.98, -2.7]} />
        <Suspense fallback={null}>
          <CameraController
            position={cameraPos.position}
            direction={cameraPos.direction}
          />
          <LogCameraPosition />
          <OfficeModel />
          <MacBookModel />
          <ContactFormModel />
          <Environment preset="apartment" />
        </Suspense>
      </Canvas>
    </div>
  );
}
