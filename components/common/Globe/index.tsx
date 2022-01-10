import { useEffect, useRef, useState } from "react";
import { GlobeWrapper, PointLabel } from "./style";
import EarthTexture from "../../../public/images/globe pattern yellow 8x 9.0.png";
import THREE, { Mesh, MeshLambertMaterial, SphereBufferGeometry } from "three";

let GlobeGl: Function = () => null;
if (typeof window !== "undefined") GlobeGl = require("react-globe.gl").default;

const points = [
  {
    lat: 5,
    lng: 13,
    size: 0.06,
    radius: 1,
  },
  {
    lat: 5,
    lng: 1,
    size: 0.03,
    radius: 0.6,
  },
  {
    lat: 15,
    lng: -5,
    size: 0.03,
    radius: 0.6,
  },
];

type Point = typeof points[0];

const Globe = () => {
  const globeEl: any = useRef();
  const latAlign = 30;
  const altitude = 1.4;

  useEffect(() => {
    const { lat, lng } = points[0];

    globeEl.current.pointOfView({
      lat: lat - latAlign,
      lng,
      altitude,
    });
    globeEl.current.controls().enableZoom = false;
  }, []);

  const pointsSpheres = (point: Point) => {
    const coords = globeEl.current.getCoords(point.lat, point.lng, point.size);

    const sphere = new Mesh(
      new SphereBufferGeometry(point.radius),
      new MeshLambertMaterial({ color: "white" })
    );
    sphere.position.x = coords.x;
    sphere.position.y = coords.y;
    sphere.position.z = coords.z;

    return sphere;
  };

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
        customLayerData={points}
        customThreeObject={pointsSpheres}
      />
    </GlobeWrapper>
  );
};

export default Globe;
