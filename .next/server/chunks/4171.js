"use strict";
exports.id = 4171;
exports.ids = [4171];
exports.modules = {

/***/ 4171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_Globe)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/Globe/style.ts

const GlobeWrapper = external_styled_components_default().div.withConfig({
  displayName: "style__GlobeWrapper",
  componentId: "sc-1nfcj9s-0"
})(["margin-top:50px;height:400px;width:100%;display:flex;justify-content:center;overflow:hidden;canvas{max-width:100vw;}"]);
const PointLabel = external_styled_components_default().div.withConfig({
  displayName: "style__PointLabel",
  componentId: "sc-1nfcj9s-1"
})(["width:30px;height:30px;border-radius:100px;"]);
;// CONCATENATED MODULE: ./public/images/globe-pattern-2.0.1.png
/* harmony default export */ const globe_pattern_2_0_1 = ({"src":"/_next/static/media/globe-pattern-2.0.1.08e6df91.png","height":5673,"width":10929,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAEBAMAAABB42PDAAAAJFBMVEX+xQb9xQb+xAb9xAb9xAb9xQb+xQb+xQb+xAb+xQb+xQb9xAaYz6zkAAAADHRSTlMAAAAAAgQFBhESHySQKPJwAAAAHElEQVR42mNgYjBgZmCu2qrAIOQxjYHBiNmYCQAcBwLiolhbKQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "three"
var external_three_ = __webpack_require__(2248);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/Globe/index.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







let GlobeGl = () => null;

if (false) {}

const Globe = ({
  reviewIndex,
  points
}) => {
  const globeEl = (0,external_react_.useRef)();

  const pointsSpheres = point => {
    if (globeEl.current) {
      const coords = globeEl.current.getCoords(point.lat, point.lng, point.size);
      const {
        x,
        y,
        z
      } = coords;
      const sphere = new external_three_.Mesh(new external_three_.SphereBufferGeometry(point.radius), new external_three_.MeshLambertMaterial({
        color: "white"
      }));
      sphere.position.x = x;
      sphere.position.y = y;
      sphere.position.z = z;
      return sphere;
    }
  };

  const changePointOfView = (0,external_react_.useCallback)(() => {
    if (!points.length) return;
    const latAlign = 30;
    const altitude = 1.35;
    const {
      lat,
      lng
    } = points[reviewIndex];

    if (lat && lng) {
      globeEl.current.pointOfView({
        lat: lat - latAlign - 10,
        lng: lng - 5,
        altitude
      }, 700);
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
      return _objectSpread(_objectSpread({}, point), {}, {
        size: 0.06
      });
    } else {
      return _objectSpread(_objectSpread({}, point), {}, {
        size: 0.03
      });
    }
  });
  (0,external_react_.useEffect)(() => {
    setControlsOptions();
  }, []);
  (0,external_react_.useEffect)(() => {
    changePointOfView();
  }, [reviewIndex, points]);
  return /*#__PURE__*/jsx_runtime_.jsx(GlobeWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(GlobeGl, {
      ref: globeEl,
      width: 1366,
      height: 1200,
      animateIn: true,
      globeImageUrl: globe_pattern_2_0_1.src,
      backgroundColor: "rgba(0,0,0,0)",
      showAtmosphere: false,
      pointsData: updatePoints,
      pointAltitude: point => {
        return point.size;
      },
      pointColor: () => "white",
      pointRadius: 0.1,
      pointsTransitionDuration: 0,
      customLayerData: points,
      customThreeObject: pointsSpheres
    })
  });
};

/* harmony default export */ const common_Globe = (Globe);

/***/ })

};
;