import { useEffect } from "react";
import { AxesHelper, Group, Object3D, type Object3DEventMap } from "three";

const useAxiesHelper = (object?: Group<Object3DEventMap> | Object3D) => {
  useEffect(() => {
    if (!object) return;

    const axesHelper = new AxesHelper(5);
    object.add(axesHelper);

    return () => {
      object.remove(axesHelper);
    };
  }, [object]);
};

export default useAxiesHelper;
