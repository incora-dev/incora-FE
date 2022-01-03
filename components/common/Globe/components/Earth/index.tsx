import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";

import EarthTexture from "../../../../../public/images/testEarthTexture.jpg";

const Earth = () => {
  const [earthTexture] = useLoader(TextureLoader, [EarthTexture.src]);

  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[2.9, 155, 55]} />
        <meshStandardMaterial map={earthTexture} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
