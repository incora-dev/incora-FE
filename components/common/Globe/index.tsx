import { useCallback, useEffect, useRef, useState } from "react";
import { GlobeWrapper } from "./style";
import EarthTexture from "../../../public/images/globe-pattern-2.0.1.png";
import { Mesh, MeshLambertMaterial, SphereBufferGeometry } from "three";

let GlobeGl: Function = () => null;
if (typeof window !== "undefined") GlobeGl = require("react-globe.gl").default;

export interface Point {
  lat: number | undefined;
  lng: number | undefined;
  size: number | undefined;
  radius: number | undefined;
  country?: string | undefined;
}
interface IGlobe {
  reviewIndex: number;
  points: Point[];
}

const Globe = ({ reviewIndex, points }: IGlobe) => {
  const globeEl: any = useRef();
  const [pointCountry, SetPointCountry] = useState<string | undefined>();

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

  const changePointOfView = useCallback(
    (lat: number, lng: number) => {
      if (!points.length) return;
      const altitude = 1.35;
      const latAlign = 30;

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
    },
    [reviewIndex, points]
  );

  const setControlsOptions = () => {
    const controls = globeEl.current.controls();
    controls.enableZoom = false;
    controls.minAzimuthAngle = -1;
    controls.maxAzimuthAngle = 1;
    controls.minPolarAngle = 1.7;
    controls.maxPolarAngle = 2.5;
  };

  const onPointClick = (point: Point) => {
    const { lat, lng } = point;
    const pointCountry = point.country;

    if (lat && lng && pointCountry) {
      SetPointCountry(pointCountry);
      changePointOfView(lat, lng);
    }
  };

  const updatePoints1 = points.map((point, index) => {
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

  const updatePoints2 = points.map((point) => {
    if (pointCountry === point.country) {
      return {
        ...point,
        size: 0.06,
        radius: 1,
      };
    } else {
      return {
        ...point,
        size: 0.03,
        radius: 0.06,
      };
    }
  });

  useEffect(() => {
    setControlsOptions();
  }, []);

  useEffect(() => {
    const { lat, lng } = points[reviewIndex];
    if (lat && lng) {
      changePointOfView(lat, lng);
    }
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
        pointsData={pointCountry ? updatePoints2 : updatePoints1}
        pointAltitude={(point: Point) => {
          return point.size;
        }}
        pointColor={() => "white"}
        pointRadius={0.1}
        onPointClick={onPointClick}
        pointsTransitionDuration={0}
        customLayerData={points}
        customThreeObject={pointsSpheres}
        onCustomLayerClick={onPointClick}
      />
    </GlobeWrapper>
  );
};

export default Globe;
