// import { Decal, Float, useTexture } from "@react-three/drei";

// const Ball = ({ imgUrl, position = [0, -6, 0] }) => {
//   const [decal] = useTexture([imgUrl]);

//   return (
//     // <Float speed={1.5} rotationIntensity={0.75} floatIntensity={1.5}>
//     <Float
//       speed={1.2}
//       rotationIntensity={1}
//       floatIntensity={1.2}
//       floatingRange={[0.3, 0.6]}
//     >
//       <mesh position={position} scale={1.75} castShadow receiveShadow>
//         <icosahedronGeometry args={[1.15, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading={false} // More realistic lighting
//           metalness={0.3}
//           roughness={0.4}
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[0, 0, 0]}
//           scale={1.15}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };
// export default Ball;

//********************************************************************* */

import { Decal, Float, useTexture } from "@react-three/drei";

const Ball = ({ imgUrl, position = [0, -6, 0], scale = 1.75 }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={1.2}
      rotationIntensity={1}
      floatIntensity={1.2}
      floatingRange={[0.3, 0.6]}
    >
      <mesh position={position} scale={scale} castShadow receiveShadow>
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
