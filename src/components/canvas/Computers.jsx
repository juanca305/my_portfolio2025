// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   useEffect(() => {
//     computer.scene.traverse((child) => {
//       if (child.isMesh) {
//         const pos = child.geometry?.attributes?.position;
//         if (!pos || !pos.array || pos.array.length === 0) {
//           console.warn("⚠️ Missing or empty position data in:", child.name);
//         } else if ([...pos.array].some((v) => isNaN(v))) {
//           console.error("🚫 Found NaN in position array of:", child.name);
//         }
//       }
//     });
//   }, [computer]);

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// import { useEffect } from "react";
// import { useGLTF } from "@react-three/drei";

// function cleanGeometryNaNs(geometry) {
//   if (!geometry || !geometry.attributes.position) return;

//   const position = geometry.attributes.position;
//   const array = position.array;
//   let hasNaN = false;

//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       hasNaN = true;
//       console.warn(`NaN detected at index ${i}, replacing with 0`);
//       array[i] = 0; // Replace NaN with 0 (or another fallback number)
//     }
//   }

//   if (hasNaN) {
//     // Inform three.js that the attribute has been updated
//     position.needsUpdate = true;

//     // Recompute bounding info after cleaning
//     geometry.computeBoundingBox();
//     geometry.computeBoundingSphere();
//   }
// }

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   useEffect(() => {
//     computer.scene.traverse((child) => {
//       if (child.isMesh) {
//         cleanGeometryNaNs(child.geometry);
//       }
//     });
//   }, [computer]);

//   return (
//     <>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Add a listener for changes to the screen size
//     const mediaQuery = window.matchMedia("(max-width: 500px)");

//     // Set the initial value of the `isMobile` state variable
//     setIsMobile(mediaQuery.matches);

//     // Define a callback function to handle changes to the media query
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     // Add the callback function as a listener for changes to the media query
//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     // Remove the listener when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

//************************************** */
// import * as THREE from "three";
// import { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// function cleanGeometryNaNs(geometry) {
//   if (!geometry || !geometry.attributes?.position) return;

//   const pos = geometry.attributes.position;
//   const array = pos.array;
//   let hasNaN = false;

//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       hasNaN = true;
//       console.warn(`NaN detected at position index ${i}, replacing with 0`);
//       array[i] = 0;
//     }
//   }

//   if (hasNaN) {
//     pos.needsUpdate = true;

//     // override computeBoundingSphere to prevent NaN crash
//     geometry.computeBoundingSphere = function () {
//       this.boundingSphere = this.boundingSphere || new THREE.Sphere();
//       this.boundingSphere.center.set(0, 0, 0);
//       this.boundingSphere.radius = 1; // fallback radius
//       return this.boundingSphere;
//     };

//     // you may also recompute bounding box normally
//     geometry.computeBoundingBox();
//   }
// }

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   useEffect(() => {
//     computer.scene.traverse((child) => {
//       if (child.isMesh) {
//         cleanGeometryNaNs(child.geometry);
//       }
//     });
//   }, [computer]);

//   return (
//     <>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handler = (event) => setIsMobile(event.matches);
//     mediaQuery.addEventListener("change", handler);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       {/* Temporarily remove <Preload all /> until issue is fixed */}
//     </Canvas>
//   );
// };

// export default ComputersCanvas;
//*************************************************** */

// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor='black' />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// function cleanGeometryNaNs(geometry) {
//   if (!geometry || !geometry.attributes?.position) return;

//   const pos = geometry.attributes.position;
//   const array = pos.array;
//   let hasNaN = false;

//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       hasNaN = true;
//       console.warn(`NaN detected at position index ${i}, replacing with 0`);
//       array[i] = 0;
//     }
//   }

//   if (hasNaN) {
//     pos.needsUpdate = true;

//     // Override computeBoundingSphere to prevent NaN crash
//     geometry.computeBoundingSphere = function () {
//       this.boundingSphere = this.boundingSphere || new THREE.Sphere();
//       this.boundingSphere.center.set(0, 0, 0);
//       this.boundingSphere.radius = 1; // fallback radius
//       return this.boundingSphere;
//     };

//     geometry.computeBoundingBox();
//   }
// }

// function cleanGeometryNaNs(geometry) {
//   if (!geometry || !geometry.attributes?.position) {
//     console.warn("⚠️ Geometry has no position attribute");
//     return;
//   }

//   const pos = geometry.attributes.position;
//   const array = pos.array;
//   let hasNaN = false;

//   for (let i = 0; i < array.length; i++) {
//     if (isNaN(array[i])) {
//       hasNaN = true;
//       console.warn(`💥 NaN detected at index ${i}, replacing with 0`);
//       array[i] = 0;
//     }
//   }

//   if (hasNaN) {
//     console.log("🛠️ NaNs cleaned in geometry");

//     pos.needsUpdate = true;

//     geometry.computeBoundingSphere = function () {
//       this.boundingSphere = this.boundingSphere || new THREE.Sphere();
//       this.boundingSphere.center.set(0, 0, 0);
//       this.boundingSphere.radius = 1;
//       return this.boundingSphere;
//     };

//     geometry.computeBoundingBox();
//   } else {
//     console.log("✅ No NaNs found in geometry");
//   }
// }


// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.glb");
  
//   console.log("🧩 computer object:", computer);
//   console.log("🧩 computer.scene:", computer?.scene);

//   // useEffect(() => {
//   //   console.log("useEffect started for cleaning geometries");
//   //   computer.scene.traverse((child) => {
//   //     if (child.isMesh) {
//   //       console.log("Cleaning geometry for mesh:", child.name); // <-- Put it here
//   //       cleanGeometryNaNs(child.geometry);
//   //     }
//   //   });
//   // }, [computer]);

//   console.log("🧩 computer value:", computer);

//   useEffect(() => {
//   console.log("✅ useEffect started for cleaning geometries");

//   if (!computer || !computer.scene) {
//     console.warn("⚠️ Model or scene not loaded yet");
//     return;
//   }

//   computer.scene.traverse((child) => {
//     if (child.isMesh && child.geometry) {
//       console.log(`🧹 Cleaning geometry for mesh: ${child.name || "Unnamed Mesh"}`);
//       cleanGeometryNaNs(child.geometry);
//     }
//   });

//   console.log("✅ Finished cleaning all geometries");
// }, [computer]);


//   return (
//     <>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </>
//   );
// };

// // const ComputersCanvas = () => {
// //   const [isMobile, setIsMobile] = useState(false);

// //   useEffect(() => {
// //     // Add a listener for changes to the screen size
// //     const mediaQuery = window.matchMedia("(max-width: 500px)");

// //     // Set the initial value of the `isMobile` state variable
// //     setIsMobile(mediaQuery.matches);

// //     // Define a callback function to handle changes to the media query
// //     const handleMediaQueryChange = (event) => {
// //       setIsMobile(event.matches);
// //     };

// //     // Add the callback function as a listener for changes to the media query
// //     mediaQuery.addEventListener("change", handleMediaQueryChange);

// //     // Remove the listener when the component is unmounted
// //     return () => {
// //       mediaQuery.removeEventListener("change", handleMediaQueryChange);
// //     };
// //   }, []);

// //   return (
// //     <Canvas
// //       frameloop='demand'
// //       shadows
// //       dpr={[1, 2]}
// //       camera={{ position: [20, 3, 5], fov: 25 }}
// //       gl={{ preserveDrawingBuffer: true }}
// //     >
// //       <Suspense fallback={<CanvasLoader />}>
// //         <OrbitControls
// //           enableZoom={false}
// //           maxPolarAngle={Math.PI / 2}
// //           minPolarAngle={Math.PI / 2}
// //         />
// //         <Computers isMobile={isMobile} />
// //       </Suspense>

// //       <Preload all />
// //     </Canvas>
// //   );
// // };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
//     setIsMobile(mediaQuery.matches);

//     const handler = (e) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handler);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       {/* <Preload all />  <-- comment out until you fix NaNs */}
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

//********************************************************* */

import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function cleanGeometryNaNs(geometry) {
  if (!geometry || !geometry.attributes?.position) {
    console.warn("⚠️ Geometry has no position attribute");
    return;
  }

  const pos = geometry.attributes.position;
  const array = pos.array;
  let hasNaN = false;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) {
      hasNaN = true;
      console.warn(`💥 NaN detected at index ${i}, replacing with 0`);
      array[i] = 0;
    }
  }

  if (hasNaN) {
    console.log("🛠️ NaNs cleaned in geometry");
    pos.needsUpdate = true;

    geometry.computeBoundingSphere = function () {
      this.boundingSphere = this.boundingSphere || new THREE.Sphere();
      this.boundingSphere.center.set(0, 0, 0);
      this.boundingSphere.radius = 1;
      return this.boundingSphere;
    };

    geometry.computeBoundingBox();
  } else {
    console.log("✅ No NaNs found in geometry");
  }
}

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useEffect(() => {
    if (!computer || !computer.scene) return;

    computer.scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        cleanGeometryNaNs(child.geometry);
      }
    });
  }, [computer]);

  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </>
  );
};

export default Computers;

