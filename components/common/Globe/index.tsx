import { useEffect, useRef, useState } from "react";
import { GlobeWrapper, PointLabel } from "./style";
import EarthTexture from "../../../public/images/globe pattern yellow 8x 9.0.png";
import { Mesh, SphereBufferGeometry, MeshStandardMaterial } from "three";

let GlobeGl: Function = () => null;
if (typeof window !== "undefined") GlobeGl = require("react-globe.gl").default;

const points = [
  {
    lat: 5,
    lng: 13,
    size: 0.06,
  },
  {
    lat: 5,
    lng: 1,
    size: 0.03,
  },
  {
    lat: 15,
    lng: -5,
    size: 0.03,
  },
];

const Globe = () => {
  const globeEl: any = useRef();
  const latAlign = 30;
  const altitude = 1.4;

  useEffect(() => {
    console.log("globe.current", globeEl.current);
    console.log("points", points);

    const { lat, lng } = points[0];

    globeEl.current.pointOfView({
      lat: lat - latAlign,
      lng,
      altitude,
    });
    globeEl.current.controls().enableZoom = false;
  }, []);

  // const createSphere = (point: typeof pointsSpheres[0]) => {
  //   const sphere = new Mesh(
  //     new SphereBufferGeometry(point.radius),
  //     new MeshStandardMaterial({ color: "white" })
  //   );

  //   sphere.position.x = point.lat;
  //   sphere.position.y = point.lng;

  //   return sphere;
  // };

  const pointsLabels = points.map((point) => {
    return {
      ...point,
      radius: 3,
    };
  });

  return (
    <GlobeWrapper>
        <GlobeGl
          width={1366}
          height={1200}
          ref={globeEl}
          globeImageUrl={EarthTexture.src}
          backgroundColor="#18181A"
          showAtmosphere={false}
          pointsData={points}
          pointAltitude="size"
          pointColor={() => "white"}
          pointRadius={0.1}
        />
    </GlobeWrapper>
  );
};

export default Globe;
