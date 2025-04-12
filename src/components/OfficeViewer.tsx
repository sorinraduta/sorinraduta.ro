import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { DEBUG } from "../config/env";
import { useCameraScrollController } from "../hooks/useCameraScrollController";
import useCameraStore from "../hooks/useCameraStore";
import { useDisableZoom } from "../hooks/useDisableZoom";
import { useResetScroll } from "../hooks/useResetScroll";
import AboutModel from "./AboutModel";
import CameraController from "./CameraController";
import { CanvasWrapper } from "./CanvasWrapper";
import ClipboardModel from "./ClipboardModel";
import ClockModel from "./ClockModel";
import ContactFormModel from "./ContactFormModel";
import CreditsModel from "./CreditsModel";
import LogCameraPosition from "./LogCameraPosition";
import MacBookModel from "./MacBookModel";
import MugModel from "./MugModel";
import OfficeModel from "./OfficeModel";

export default function OfficeViewer() {
  const { cameraView } = useCameraStore();

  useResetScroll();
  useCameraScrollController();
  useDisableZoom();

  return (
    <div style={{ height: "100%", overflow: "hidden" }}>
      <CanvasWrapper>
        <Canvas
          camera={cameraView}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onCreated={({ gl }) => {
            gl.setPixelRatio(window.devicePixelRatio);
            gl.setSize(window.innerWidth, window.innerHeight);
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

            <CreditsModel />

            <MugModel />
            <ClockModel />
          </Suspense>
        </Canvas>
      </CanvasWrapper>
    </div>
  );
}
