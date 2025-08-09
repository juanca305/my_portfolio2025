// import React, { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useGLTF } from "@react-three/drei";

// const Earth = ({ screenSize }) => {
//   const earth = useGLTF("/planet/scene.gltf");
//   const earthRef = useRef();

//   // Rotate Earth endlessly
//   useFrame((_, delta) => {
//     if (earthRef.current) {
//       earthRef.current.rotation.y += delta * 0.1;
//     }
//   });

//   // Adjust scale based on screen size
//   let scale = 2.5;
//   if (screenSize === "tablet") scale = 3;
//   if (screenSize === "mobile") scale = 3.5;

//   return (
//     <primitive
//       ref={earthRef}
//       object={earth.scene}
//       scale={scale}
//       position-y={0}
//     />
//   );
// };

// export default Earth;










//********************************************************** */
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("/planet/scene.gltf");
  const earthRef = useRef();

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.1; // Adjust speed as needed
    }
  });

  return (
    <primitive
      ref={earthRef}
      object={earth.scene}
      scale={isMobile ? 3.5 : 2.5}
      position-y={0}
      //rotation-y={0}
    />
  );
};

export default Earth;












//**********************************************************************
// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF('./planet/scene.gltf')
//   return (
//     <primitive
//       object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6]
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI /2}
//           minPolarAngle={Math.PI /2}
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

//************************************** */

// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Earth = () => {
//   const earth = useGLTF('./planet/scene.gltf')
//   return (
//     <primitive
//       object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6]
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI /2}
//           minPolarAngle={Math.PI /2}
//         />
//         <Earth />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;

/************************************* */
// Earth.jsx
// import React from "react";
// import { useGLTF } from "@react-three/drei";

// const Earth = ({ isMobile }) => {
//   const earth = useGLTF("/planet/scene.gltf");
//   return (
//     <primitive
//       object={earth.scene}
//       scale={isMobile ? 1.5 : 2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   );
// };

// export default Earth;

//***************************** */
