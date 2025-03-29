import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Light } from "three";

export default function OfficeModel() {
  const { scene } = useGLTF("/assets/models/office.glb");

  useMemo(() => {
    // MacBook
    const macbook1 = scene.getObjectByName("G-GHE_1_14");
    const macbook2 = scene.getObjectByName("G-GHE_1_7");
    const macbook3 = scene.getObjectByName("G-GHE_1_10");
    const macbook4 = scene.getObjectByName("G-GHE_1_7");
    const macbook5 = scene.getObjectByName("G-GHE_1_4");
    const macbook6 = scene.getObjectByName("G-GHE_1_12");
    const macbook7 = scene.getObjectByName("G-GHE_1_8");
    const macbook8 = scene.getObjectByName("G-GHE_1_2");
    const macbook9 = scene.getObjectByName("G-GHE_1_5");
    const macbook10 = scene.getObjectByName("G-GHE_1_13");
    const macbook11 = scene.getObjectByName("G-GHE_1_9");
    const macbook12 = scene.getObjectByName("G-GHE_1_11");
    const macbook13 = scene.getObjectByName("G-GHE_1_6");
    const macbook14 = scene.getObjectByName("G-GHE_1_3");
    macbook1?.parent?.remove(macbook1);
    macbook2?.parent?.remove(macbook2);
    macbook3?.parent?.remove(macbook3);
    macbook4?.parent?.remove(macbook4);
    macbook5?.parent?.remove(macbook5);
    macbook6?.parent?.remove(macbook6);
    macbook7?.parent?.remove(macbook7);
    macbook8?.parent?.remove(macbook8);
    macbook9?.parent?.remove(macbook9);
    macbook10?.parent?.remove(macbook10);
    macbook11?.parent?.remove(macbook11);
    macbook12?.parent?.remove(macbook12);
    macbook13?.parent?.remove(macbook13);
    macbook14?.parent?.remove(macbook14);

    // Book
    const book1 = scene.getObjectByName("G-GHE_1_0");
    const book2 = scene.getObjectByName("G-GHE_1_1");
    book1?.parent?.remove(book1);
    book2?.parent?.remove(book2);

    // Camera
    const camera1 = scene.getObjectByName("G-GHE_1_24");
    const camera2 = scene.getObjectByName("G-GHE_1_22");
    const camera3 = scene.getObjectByName("G-GHE_1_17");
    const camera4 = scene.getObjectByName("G-GHE_1_21");
    const camera5 = scene.getObjectByName("G-GHE_1_16");
    const camera6 = scene.getObjectByName("G-GHE_1_15");
    const camera7 = scene.getObjectByName("G-GHE_1_19");
    const camera8 = scene.getObjectByName("G-GHE_1_18");
    const camera9 = scene.getObjectByName("G-GHE_1_23");
    const camera10 = scene.getObjectByName("G-GHE_1_20");
    camera1?.parent?.remove(camera1);
    camera2?.parent?.remove(camera2);
    camera3?.parent?.remove(camera3);
    camera4?.parent?.remove(camera4);
    camera5?.parent?.remove(camera5);
    camera6?.parent?.remove(camera6);
    camera7?.parent?.remove(camera7);
    camera8?.parent?.remove(camera8);
    camera9?.parent?.remove(camera9);
    camera10?.parent?.remove(camera10);

    // Floor book
    const floorBook = scene.getObjectByName("G-bdkongbai0640");
    floorBook?.parent?.remove(floorBook);

    scene.traverse((child) => {
      if (child instanceof Light) {
        child.intensity = 1;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}
