import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import EarthTexture from "../../../../../public/images/globe pattern yellow 8x 9.0.png";
import { useRef } from "react";

const Earth = () => {
  const [earthTexture] = useLoader(TextureLoader, [EarthTexture.src]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <mesh>
        <sphereGeometry args={[3, 55, 55]} />
        <meshStandardMaterial map={earthTexture} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.4}
        />
        <mesh position={[1, 1, 3]}>
          <sphereBufferGeometry args={[0.03, 55, 55]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </mesh>
    </>
  );
};

export default Earth;
