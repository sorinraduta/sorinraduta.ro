import { Vector3 } from "three";

export type CameraViewName =
  | "welcome"
  | "clock"
  | "about"
  | "contact"
  | "drawer"
  | "credits";

export type CameraView = {
  name: CameraViewName;
  position: Vector3;
  direction: Vector3;
  fov: number;
};

export const welcomeCameraView: CameraView = {
  name: "welcome",
  position: new Vector3(3.11, 0.98, -0.7),
  direction: new Vector3(0.417, -0.236, -0.877),
  fov: 65,
};
const clockCameraView: CameraView = {
  name: "clock",
  position: new Vector3(6.485, 1.265, -1.335),
  direction: new Vector3(-0.485, -0.167, -0.858),
  fov: 65,
};
const aboutCameraView: CameraView = {
  name: "about",
  position: new Vector3(4.272, 1.297, -4.978),
  direction: new Vector3(-0.084, -0.95, 0.3),
  fov: 65,
};
const contactCameraView: CameraView = {
  name: "contact",
  position: new Vector3(4.911, 1.031, -4.925),
  direction: new Vector3(0.007, -0.482, 0.876),
  fov: 65,
};
const drawerCameraView: CameraView = {
  name: "drawer",
  position: new Vector3(4.813, 1.116, -5.565),
  direction: new Vector3(-0.493, -0.559, 0.666),
  fov: 65,
};
const creditsCameraView: CameraView = {
  name: "credits",
  position: new Vector3(6.177, 0.376, -4.407),
  direction: new Vector3(-0.582, 0.813, 0.011),
  fov: 65,
};

export const cameraViews: CameraView[] = [
  welcomeCameraView,
  clockCameraView,
  aboutCameraView,
  drawerCameraView,
  contactCameraView,
  creditsCameraView,
];
