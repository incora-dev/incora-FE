import { useCallback, useEffect, useRef } from "react";
import { GlobeWrapper } from "./style";
import EarthTexture from "../../../public/images/globe-pattern-2.0.1.png";
import { Mesh, MeshLambertMaterial, SphereBufferGeometry } from "three";
import { useSelector } from "react-redux";
import { pointsSelector } from "../../Homepage/selectors";
import { theme } from "../../../styles/theme";
import { Point } from "../../Homepage/Reviews";

let GlobeGl: Function = () => null;
if (typeof window !== "undefined") GlobeGl = require("react-globe.gl").default;

interface IGlobe {
  reviewIndex: number;
  points: Point[];
}

const Globe = ({ reviewIndex, points }: IGlobe) => {
  const globeEl: any = useRef();

  const pointsSpheres = (point: Point) => {
    if (globeEl.current) {
      const coords = globeEl.current.getCoords(
        point.lat,
        point.lng,
        point.size
      );
      const { x, y, z } = coords;
      const sphere = new Mesh(
        new SphereBufferGeometry(point.radius),
        new MeshLambertMaterial({ color: "white" })
      );
      sphere.position.x = x;
      sphere.position.y = y;
      sphere.position.z = z;

      return sphere;
    }
  };

  const changePointOfView = useCallback(() => {
    if (!points.length) return;
    const latAlign = 30;
    const altitude = 1.35;
    const { lat, lng } = points[reviewIndex];

    if (lat && lng) {
      globeEl.current.pointOfView(
        {
          lat: lat - latAlign - 10,
          lng: lng - 5,
          altitude,
        },
        700
      );
    }
  }, [reviewIndex, points]);

  const setControlsOptions = () => {
    const controls = globeEl.current.controls();
    controls.enableZoom = false;
    controls.minAzimuthAngle = -1;
    controls.maxAzimuthAngle = 1;
    controls.minPolarAngle = 1.7;
    controls.maxPolarAngle = 2.5;
  };

  const updatePoints = points.map((point, index) => {
    if (index === reviewIndex) {
      return {
        ...point,
        size: 0.06,
      };
    } else {
      return {
        ...point,
        size: 0.03,
      };
    }
  });

  useEffect(() => {
    setControlsOptions();
  }, []);

  useEffect(() => {
    changePointOfView();
  }, [reviewIndex, points]);

  return (
    <GlobeWrapper>
      <GlobeGl
        ref={globeEl}
        width={1366}
        height={1200}
        animateIn={true}
        globeImageUrl={EarthTexture.src}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        pointsData={updatePoints}
        pointAltitude={(point: Point) => {
          return point.size;
        }}
        pointColor={() => "white"}
        pointRadius={0.1}
        pointsTransitionDuration={0}
        customLayerData={points}
        customThreeObject={pointsSpheres}
      />
    </GlobeWrapper>
  );
};

export default Globe;
