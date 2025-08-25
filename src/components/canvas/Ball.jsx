import { Decal, Float, useTexture } from "@react-three/drei";
import { useMemo } from "react";
useMemo;
const Ball = ({ imgUrl, position = [0, -6, 0], scale = 1.75 }) => {
  const [decal] = useTexture([imgUrl]);

  const speed = useMemo(() => 1 + Math.random() * 0.4, []);
  const rotationIntensity = useMemo(() => 0.8 + Math.random() * 0.6, []);
  const floatIntensity = useMemo(() => 1 + Math.random() * 0.4, []);

  const z = useMemo(() => (Math.random() - 0.5) * 1.5, []);

  return (
    // <Float
    //   speed={1.2}
    //   rotationIntensity={1}
    //   floatIntensity={1.2}
    //   floatingRange={[0.3, 0.6]}
    // >
    <Float
      speed={speed}
      rotationIntensity={rotationIntensity}
      floatIntensity={floatIntensity}
      floatingRange={[0.25, 0.6]}
    >
      {/* <mesh position={position} scale={scale} castShadow receiveShadow> */}
      <mesh
        position={[position[0], position[1], z]}
        scale={scale}
        castShadow
        receiveShadow
      >
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading={false}
          metalness={0.3}
          roughness={0.4}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.25}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export default Ball;
