import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from "./components/Earth";
import { EarthContainer, GlobeWrapper } from "./style";

const Globe = () => {
  return (
    <GlobeWrapper>
      <EarthContainer>
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </EarthContainer>
    </GlobeWrapper>
  );
};

export default Globe;
