import { create } from "zustand";
import {
  cameraViews,
  initialCameraView,
  type CameraView,
  type CameraViewName,
} from "../config/views";

interface CameraState {
  cameraView: CameraView;
  cameraViewIndex: number;
  setCameraViewIndex: (index: number) => void;
  setView: (viewName: CameraViewName) => void;
  goToNextView: () => void;
  goToPreviousView: () => void;
}

const useCameraStore = create<CameraState>((set) => ({
  cameraView: initialCameraView,
  cameraViewIndex: -1,
  setCameraViewIndex: (index: number) =>
    set(() => ({
      cameraViewIndex: index,
      cameraView: cameraViews[index],
    })),
  goToNextView: () =>
    set((state) => {
      const nextIndex = Math.min(
        state.cameraViewIndex + 1,
        cameraViews.length - 1
      );
      return {
        cameraViewIndex: nextIndex,
        cameraView: cameraViews[nextIndex],
      };
    }),
  goToPreviousView: () =>
    set((state) => {
      const previousIndex = Math.max(state.cameraViewIndex - 1, 0);
      return {
        cameraViewIndex: previousIndex,
        cameraView: cameraViews[previousIndex],
      };
    }),
  setView: (viewName: string) =>
    set(() => ({
      cameraView:
        cameraViews.find((view) => view.name === viewName) || cameraViews[0],
      cameraViewIndex:
        cameraViews.findIndex((view) => view.name === viewName) || 0,
    })),
}));

export default useCameraStore;
