import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import Computers from "./Computers";
import Earth from "./Earth";
import Stars from "./Stars";
import Ball from "./Ball";

import CanvasLoader from "../Loader";

const MergedCanvas = ({ scene = "computers", ballIcon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const renderScene = () => {
    switch (scene) {
      case "earth":
        return <Earth isMobile={isMobile} />;
      case "stars":
        return <Stars isMobile={isMobile} />;
      case "ball":
        return <Ball imgUrl={ballIcon} />;
      case "computers":
      default:
        return <Computers isMobile={isMobile} />;
    }
  };

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {renderScene()}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MergedCanvas;
