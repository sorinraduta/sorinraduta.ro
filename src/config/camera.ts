import { Vector3 } from "three";

export type CameraView = {
  position: Vector3;
  direction: Vector3;
  fov: number;
};

export const cameraViews: CameraView[] = [
  {
    // Desk from door
    position: new Vector3(3.11, 0.98, -0.7),
    direction: new Vector3(0.417, -0.236, -0.877),
    fov: 65,
  },
  {
    // Desk from window
    position: new Vector3(6.485, 1.265, -1.335),
    direction: new Vector3(-0.485, -0.167, -0.858),
    fov: 65,
  },
  {
    // Desk close up
    position: new Vector3(4.928, 1.353, -5.59),
    direction: new Vector3(0.017, -0.695, 0.719),
    fov: 65,
  },
  {
    // Contact form
    position: new Vector3(4.911, 1.031, -4.925),
    direction: new Vector3(0.007, -0.482, 0.876),
    fov: 65,
  },
  {
    // Drawer
    position: new Vector3(3.745, 0.667, -5.29),
    direction: new Vector3(0.581, -0.484, 0.654),
    fov: 65,
  },
];
