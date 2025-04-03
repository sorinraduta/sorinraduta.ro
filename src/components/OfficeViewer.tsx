import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DEBUG } from "../config/env";
import { useCameraScrollController } from "../hooks/useCameraScrollController";
import useCameraStore from "../hooks/useCameraStore";
import { useResetScroll } from "../hooks/useResetScroll";
import useStopScrollOnViewChange from "../hooks/useStopScrollOnViewChange";
import AboutModel from "./AboutModel";
import CameraController from "./CameraController";
import ClipboardModel from "./ClipboardModel";
import ContactFormModel from "./ContactFormModel";
import LogCameraPosition from "./LogCameraPosition";
import MacBookModel from "./MacBookModel";
import OfficeModel from "./OfficeModel";

export default function OfficeViewer() {
  const { cameraView } = useCameraStore();

  useResetScroll();
  useStopScrollOnViewChange();
  useCameraScrollController();

  return (
    <div
      style={{
        height: "500vh",
        overflowY: "scroll",
        backgroundColor: "grey",
      }}
    >
      <Canvas
        camera={cameraView}
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
          <Environment preset="apartment" />
          <CameraController
            position={cameraView.position}
            direction={cameraView.direction}
          />
          {DEBUG && <LogCameraPosition />}
          <OfficeModel />

          <ClipboardModel />
          <AboutModel />

          <MacBookModel />
          <ContactFormModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Credits
// "Non-Realistic Clipboard" (https://skfb.ly/p9q7H) by kareem.noureddine02 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
// "macbook pro M3 16 inch 2024" (https://skfb.ly/oQJZu) by jackbaeten is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
