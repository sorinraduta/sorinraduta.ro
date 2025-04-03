import { create } from "zustand";
import {
  cameraViews,
  type CameraView,
  type CameraViewName,
} from "../config/views";

interface CameraState {
  cameraView: CameraView;
  cameraViewIndex: number;
  setCameraViewIndex: (index: number) => void;
  setView: (viewName: CameraViewName) => void;
}

const useCameraStore = create<CameraState>((set) => ({
  cameraView: cameraViews[0],
  cameraViewIndex: 0,
  setCameraViewIndex: (index: number) =>
    set(() => ({
      cameraViewIndex: index,
      cameraView: cameraViews[index],
    })),
  setView: (viewName: string) =>
    set(() => ({
      cameraView: cameraViews.find((view) => view.name === viewName),
      cameraViewIndex: cameraViews.findIndex((view) => view.name === viewName),
    })),
}));

export default useCameraStore;
