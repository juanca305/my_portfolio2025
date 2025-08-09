// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";

// const Tech = () => {
//   return (
//     <div className="w-full h-[600px] flex items-center justify-center">
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, 25], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         {technologies.map((tech, index) => {
//           const cols = 6;
//           const spacing = 5;
//           const row = Math.floor(index / cols);
//           const col = index % cols;
//           const rows = Math.ceil(technologies.length / cols);

//           const x = (col - (cols - 1) / 2) * spacing;
//           const y = ((rows - 1) / 2 - row) * spacing;

//           return (
//             <Ball key={tech.name} imgUrl={tech.icon} position={[x, y, 0]} />
//           );
//         })}
//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");

//************************************************************ */
//**** WORKING!!!!!!!***** */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 4.5;
//   let scale = 1.5;

//   if (width <= 768) {
//     // mobile
//     cols = 2;
//     spacing = 3;
//     scale = 1;
//   } else if (width <= 1024) {
//     // tablet
//     cols = 4;
//     spacing = 4.5;
//     scale = 1.5;
//   }

//   const mobilePaddingY = width <= 768 ? -1.5 : 0; // Move group slightly down on mobile

//   return (
//     <div className="w-full h-[600px] flex items-center justify-center ">
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, 25], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, mobilePaddingY, 0]}>
//         {technologies.map((tech, index) => {
//           const row = Math.floor(index / cols);
//           const col = index % cols;
//           const rows = Math.ceil(technologies.length / cols);

//           const x = (col - (cols - 1) / 2) * spacing;
//           const y = ((rows - 1) / 2 - row) * spacing;

//           return (
//             <Ball
//               key={tech.name}
//               imgUrl={tech.icon}
//               position={[x, y, 0]}
//               scale={scale}
//             />
//           );
//         })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");
//***************************************************** */
//*********************** LAST!!! (CANVASHEIGHT) */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 4.5;
//   let scale = 1.5;

//   if (width <= 768) {
//     // mobile
//     cols = 2;
//     spacing = 3;
//     scale = 1;
//   } else if (width <= 1024) {
//     // tablet
//     cols = 4;
//     spacing = 4.5;
//     scale = 1.5;
//   }

//   const rows = Math.ceil(technologies.length / cols);

//   // Add extra space on mobile to fix bottom cutoff issue
//   const heightMultiplier = width <= 768 ? 1.4 : 1.2;
//   const canvasHeight = rows * spacing * scale * heightMultiplier * 16;

//   const mobilePaddingY = width <= 768 ? -1.5 : 0; // Move group slightly down on mobile

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, 25], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, mobilePaddingY, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;

//             const x = (col - (cols - 1) / 2) * spacing;
//             const y = ((rows - 1) / 2 - row) * spacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");

//******** cANVAShEIGHT V-2 ************* */

//*************************************************** */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 5;
//   let scale = 1.75;

//   if (width <= 768) {
//     cols = 2;
//     spacing = 3.5; // tighter spacing for mobile
//     scale = 1.35;  // slightly bigger balls
//   } else if (width <= 1024) {
//     cols = 4;
//     spacing = 4.2;
//     scale = 1.55;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const cameraZ = width <= 768 ? 28 : 22; // pull back only on mobile

//   return (
//     <div className="w-full flex items-center justify-center py-10 relative">
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         {technologies.map((tech, index) => {
//           const row = Math.floor(index / cols);
//           const col = index % cols;
//           const totalRows = Math.ceil(technologies.length / cols);

//           const x = (col - (cols - 1) / 2) * spacing;
//           const y = ((totalRows - 1) / 2 - row) * spacing;

//           return (
//             <Ball
//               key={tech.name}
//               imgUrl={tech.icon}
//               position={[x, y, 0]}
//               scale={scale}
//             />
//           );
//         })}

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");
//*********************************************** */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 5.5;
//   let scale = 1.85;

//   if (width <= 768) {
//     // mobile
//     cols = 2;
//     spacing = 3;
//     scale = 1;
//   } else if (width <= 1024) {
//     // tablet
//     cols = 4;
//     spacing = 4.5;
//     scale = 1.5;
//   }

//   const rows = Math.ceil(technologies.length / cols);

//   // Add extra space on mobile to fix bottom cutoff issue
//   const heightMultiplier = width <= 768 ? 1.4 : 1.2;
//   const canvasHeight = rows * spacing * scale * heightMultiplier * 16;

//   const mobilePaddingY = width <= 768 ? -1.5 : 0; // Move group slightly down on mobile

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, 25], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, mobilePaddingY, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;

//             const x = (col - (cols - 1) / 2) * spacing;
//             const y = ((rows - 1) / 2 - row) * spacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");
//******************************************************* */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 4;
//   let scale = 1.15;
//   let verticalBuffer = 1.2; // extra space to avoid cutoffs

//   if (width <= 768) {
//     cols = 2;
//     spacing = 2;
//     scale = 0.75;
//     verticalBuffer = 2.4;
//   } else if (width <= 1024) {
//     cols = 4;
//     spacing = 3.75;
//     scale = 1.1;
//     verticalBuffer = 1.0;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * spacing + verticalBuffer;
//   const canvasHeight = totalVerticalSpace * 40; // convert world units to px approx

//   const cameraZ = totalVerticalSpace * 1.2; // pull back the camera

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, 0, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;

//             const x = (col - (cols - 1) / 2) * spacing;
//             const y = ((rows - 1) / 2 - row) * spacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let xSpacing = 6;
//   let ySpacing = 6;
//   let scale = 1.75;
//   let verticalBuffer = 2;

//   if (width <= 768) {
//     cols = 2;
//     xSpacing = 4.5;       // wider horizontal spacing
//     ySpacing = 3.25;      // keep vertical spacing tight
//     scale = 1.15;
//     verticalBuffer = 2.5;
//   } else if (width <= 1024) {
//     cols = 4;
//     xSpacing = 5.25;
//     ySpacing = 4.5;
//     scale = 1.5;
//     verticalBuffer = 2.2;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   const canvasHeight = totalVerticalSpace * 50; // tighter canvas
//   const cameraZ = totalVerticalSpace * 2.0;     // tighter camera

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, 0, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;

//             const x = (col - (cols - 1) / 2) * xSpacing;
//             const y = ((rows - 1) / 2 - row) * ySpacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");

// const Tech = () => {
//   const { width } = useWindowSize();
//   //if (!width) return null; // or a loading spinner
//   if (typeof window !== "undefined" && !width) return null;


//   let cols = 6;
//   let xSpacing = 5.75;
//   let ySpacing = 5.75;
//   let scale = 2;
//   let verticalBuffer = 1.5;
//   let pixelMultiplier = 35;

//   if (width <= 768) {
//     cols = 2;
//     xSpacing = 5.5;
//     ySpacing = 3.55;
//     scale = 1.25;
//     verticalBuffer = 1;
//     pixelMultiplier = 28;
//   } else if (width <= 1024) {
//     cols = 4;
//     xSpacing = 5.65;
//     ySpacing = 4.65;
//     scale = 1.65;
//     verticalBuffer = 1.25;
//     pixelMultiplier = 32;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250); // minimum height
//   const cameraZ = totalVerticalSpace * 1.75; // camera gets closer

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, 0, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;

//             const x = (col - (cols - 1) / 2) * xSpacing;
//             const y = ((rows - 1) / 2 - row) * ySpacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");

//********/////****************///////**************************** */ */ */
// const Tech = () => {
//   const { width } = useWindowSize();

//   let cols = 6;
//   let spacing = 4.5;
//   let scale = 1.5;

//   if (width <= 768) {
//     cols = 2;
//     spacing = 2.7;
//     scale = 0.8;
//   } else if (width <= 1024) {
//     cols = 4;
//     spacing = 4.5;
//     scale = 1.5;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const rowHeight = spacing * scale * 60; // Empirical scale-to-px estimation
//   const buffer = 120; // Add extra spacing to avoid tight fit

//   const canvasHeight = rowHeight * rows + buffer;

//   const mobilePaddingY = width <= 768 ? -1.5 : 0;

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={[1, 1]}
//         camera={{ position: [0, -2, 25], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, mobilePaddingY, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;
//             const x = (col - (cols - 1) / 2) * spacing;
//             const y = ((rows - 1) / 2 - row) * spacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

//export default SectionWrapper(Tech, "skills");
//***************///********************************* */ */
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";

// import useHydrated from "../utils/useHydrated";

// const Tech = () => {
//   const { width } = useWindowSize();
//   const hydrated = useHydrated();

//   if (!hydrated || !width) return null;

//   // Fallback if window width is not yet available (can show spinner here if desired)
//   //if (!width) return null;

//   // Get device pixel ratio safely
//   const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

//   // Default (desktop)
//   let cols = 6;
//   let xSpacing = 5.75;
//   let ySpacing = 5.75;
//   let scale = 2;
//   let verticalBuffer = 1.5;
//   let pixelMultiplier = 35;

//   // Tablet
//   if (width <= 1024) {
//     cols = 4;
//     xSpacing = 5.65;
//     ySpacing = 4.65;
//     scale = 1.65;
//     verticalBuffer = 1.25;
//     pixelMultiplier = 32;
//   }

//   // Mobile
//   if (width <= 768) {
//     cols = 2;
//     xSpacing = 5.5;
//     ySpacing = 3.55;
//     scale = 1.35; // Increased for larger mobile balls
//     verticalBuffer = 1;
//     pixelMultiplier = 30;
//   }

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;
//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);
//   const cameraZ = totalVerticalSpace * 1.75;

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         frameloop="always"
//         shadows
//         dpr={dpr}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.25} />
//         <hemisphereLight intensity={0.35} groundColor="black" />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.2}
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />

//         <group position={[0, 0, 0]}>
//           {technologies.map((tech, index) => {
//             const row = Math.floor(index / cols);
//             const col = index % cols;
//             const x = (col - (cols - 1) / 2) * xSpacing;
//             const y = ((rows - 1) / 2 - row) * ySpacing;

//             return (
//               <Ball
//                 key={tech.name}
//                 imgUrl={tech.icon}
//                 position={[x, y, 0]}
//                 scale={scale}
//               />
//             );
//           })}
//         </group>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");
//*********************************************************** */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
import useWindowSize from "../utils/useWindowSize";
import useHydrated from "../utils/useHydrated";

const Tech = () => {
  const { width } = useWindowSize();
  const hydrated = useHydrated();

  if (!hydrated || !width) return null;

  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  let cols = 6;
  let xSpacing = 5.75;
  let ySpacing = 5.75;
  let scale = 2;
  let verticalBuffer = 1.5;
  let pixelMultiplier = 35;

  if (width <= 1024) {
    cols = 4;
    xSpacing = 5.65;
    ySpacing = 4.65;
    scale = 1.65;
    verticalBuffer = 1.25;
    pixelMultiplier = 32;
  }

  if (width <= 768) {
    cols = 2;
    xSpacing = 5.5;
    ySpacing = 3.55;
    scale = 1.5; // slightly increased for mobile
    verticalBuffer = 1;
    pixelMultiplier = 30;
  }

  const rows = Math.ceil(technologies.length / cols);
  const totalVerticalSpace = rows * ySpacing + verticalBuffer;
  const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);
  const cameraZ = totalVerticalSpace * 1.75;

  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: `${canvasHeight}px` }}
    >
      <Canvas
        frameloop="always"
        shadows
        dpr={dpr}
        camera={{ position: [0, 0, cameraZ], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.25} />
        <hemisphereLight intensity={0.35} groundColor="black" />
        <directionalLight
          castShadow
          position={[5, 10, 5]}
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <OrbitControls enableZoom={false} enablePan={false} />

        <group position={[0, 0, 0]}>
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
    </div>
  );
};

export default SectionWrapper(Tech, "skills");





