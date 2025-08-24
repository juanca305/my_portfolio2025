import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
import useWindowSize from "../utils/useWindowSize";
import useHydrated from "../utils/useHydrated";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SectionDivider from "./SectionDivider";

const Tech = () => {
  const { width } = useWindowSize();
  const hydrated = useHydrated();

  const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
    useMemo(() => {
      if (width <= 768) {
        return {
          cols: 2,
          xSpacing: 5.4,
          ySpacing: 3.7,
          scale: 1.25,
          verticalBuffer: 1.0,
          pixelMultiplier: 30,
        };
      }
      if (width <= 1024) {
        return {
          cols: 4,
          xSpacing: 5.8,
          ySpacing: 4.75,
          scale: 1.65,
          verticalBuffer: 1.0,
          pixelMultiplier: 32,
        };
      }
      return {
        cols: 6,
        xSpacing: 5.5,
        ySpacing: 5.3,
        scale: 1.75,
        verticalBuffer: 1.0,
        pixelMultiplier: 35,
      };
    }, [width]);

  if (!hydrated || width === undefined) return null;

  const rows = Math.ceil(technologies.length / cols);
  const totalVerticalSpace = rows * ySpacing + verticalBuffer;

  const dpr = (() => {
    if (width <= 768) return 1;
    if (typeof window !== "undefined") {
      return Math.min(Math.max(window.devicePixelRatio, 1), 2);
    }
    return 1;
  })();

  const cameraZ =
    width <= 768
      ? Math.max(totalVerticalSpace * 1.3, 18)
      : totalVerticalSpace * 1.5;

  const canvasHeight = totalVerticalSpace * pixelMultiplier + 20;

  return (
    <div className="w-full flex flex-col justify-center">
      {/* HEADER SECTION */}
      <div className="mb-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <SectionDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.sectionSubText}
        >
          Technologies I Use
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.sectionHeadText}
        >
          Skills & Tools
        </motion.h2>
      </div>

      {/* CANVAS SECTION */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: `${canvasHeight}px` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="w-full flex items-center justify-center"
          style={{ height: `${canvasHeight}px` }}
        >
          <Canvas
            key={width}
            frameloop="always"
            shadows
            dpr={dpr}
            camera={{ position: [0, 0, cameraZ], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <ambientLight intensity={0.3} color="#fff7e6" />
            <hemisphereLight
              intensity={0.4}
              skyColor="#ffeedd"
              groundColor="#222222"
            />
            <directionalLight
              castShadow
              position={[5, 10, 5]}
              intensity={1.1}
              color="#fff4e1"
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <OrbitControls enableZoom={false} enablePan={false} />

            <group position={[0, -0.3, 0]}>
              {technologies.map((tech, index) => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                const x = (col - (cols - 1) / 2) * xSpacing;
                const y = ((rows - 1) / 2 - row) * ySpacing;

                return (
                  <Ball
                    key={tech.name}
                    imgUrl={tech.icon}
                    position={[x, y, 0]}
                    scale={scale}
                  />
                );
              })}
            </group>
            <Preload all />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
