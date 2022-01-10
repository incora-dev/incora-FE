import { useCallback, useEffect, useRef } from "react";
import { GlobeWrapper } from "./style";
import EarthTexture from "../../../public/images/globe-pattern-2.0.1.png";
import { Mesh, MeshLambertMaterial, SphereBufferGeometry } from "three";
import { useSelector } from "react-redux";
import { pointsSelector } from "../../Homepage/selectors";
import { Point } from "../../Homepage/interfaces";

let GlobeGl: Function = () => null;
if (typeof window !== "undefined") GlobeGl = require("react-globe.gl").default;

interface IGlobe {
  reviewIndex: number;
}

const Globe = ({ reviewIndex }: IGlobe) => {
  const points: Point[] = useSelector(pointsSelector);
  const globeEl: any = useRef();

  const pointsSpheres = (point: Point) => {
    const coords = globeEl.current.getCoords(point.lat, point.lng, point.size);
    const { x, y, z } = coords;

    const sphere = new Mesh(
      new SphereBufferGeometry(point.radius),
      new MeshLambertMaterial({ color: "white" })
    );
    sphere.position.x = x;
    sphere.position.y = y;
    sphere.position.z = z;

    return sphere;
  };

  const changePointOfView = useCallback(() => {
    const latAlign = 30;
    const altitude = 1.4;
    const { lat, lng } = points[reviewIndex];

    globeEl.current.pointOfView(
      {
        lat: lat - latAlign,
        lng,
        altitude,
      },
      700
    );
    globeEl.current.controls().enableZoom = false;
  }, [points, reviewIndex]);

  useEffect(() => {
    changePointOfView();
  }, [changePointOfView, points, reviewIndex]);

  return (
    <GlobeWrapper>
      <GlobeGl
        ref={globeEl}
        width={1366}
        height={1200}
        animateIn={true}
        globeImageUrl={EarthTexture.src}
        backgroundColor="#18181A"
        showAtmosphere={false}
        pointsData={points}
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
