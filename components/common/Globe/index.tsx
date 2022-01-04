import { Canvas } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import { EarthContainer, GlobeWrapper } from "./style";

const Earth = lazy(() => import("./components/Earth"));

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
