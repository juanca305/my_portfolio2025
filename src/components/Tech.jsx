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

//   console.log("[Tech] hydrated:", hydrated, "width:", width);

//   if (!hydrated || !width) return null;

//   const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

//   let cols = 6;
//   let xSpacing = 5.75;
//   let ySpacing = 5.75;
//   let scale = 2;
//   let verticalBuffer = 1.5;
//   let pixelMultiplier = 35;

//   if (width <= 1024) {
//     cols = 4;
//     xSpacing = 5.65;
//     ySpacing = 4.65;
//     scale = 1.65;
//     verticalBuffer = 1.25;
//     pixelMultiplier = 32;
//   }

//   if (width <= 768) {
//     cols = 2;
//     xSpacing = 5.5;
//     ySpacing = 3.55;
//     scale = 1.5; // slightly increased for mobile
//     verticalBuffer = 1;
//     pixelMultiplier = 30;
//   }

//   console.log("[Tech] cols:", cols, "scale:", scale, "pixelMultiplier:", pixelMultiplier);

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;
//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);
//   const cameraZ = totalVerticalSpace * 1.75;

//   console.log("[Tech] canvasHeight:", canvasHeight, "cameraZ:", cameraZ);

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
//***********//////*********************************** */ */

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";
// import useHydrated from "../utils/useHydrated";
// import { useMemo } from "react";

// const Tech = () => {
//   const { width } = useWindowSize();
//   const hydrated = useHydrated();

//   // Always call hooks first
//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } = useMemo(() => {
//     if (!width) {
//       // Default values while width is undefined
//       return {
//         cols: 6,
//         xSpacing: 5.75,
//         ySpacing: 5.75,
//         scale: 2,
//         verticalBuffer: 1.5,
//         pixelMultiplier: 35,
//       };
//     }
//     if (width <= 768) {
//       return {
//         cols: 2,
//         xSpacing: 5.5,
//         ySpacing: 3.55,
//         scale: 1.5,
//         verticalBuffer: 1,
//         pixelMultiplier: 30,
//       };
//     }
//     if (width <= 1024) {
//       return {
//         cols: 4,
//         xSpacing: 5.65,
//         ySpacing: 4.65,
//         scale: 1.65,
//         verticalBuffer: 1.25,
//         pixelMultiplier: 32,
//       };
//     }
//     return {
//       cols: 6,
//       xSpacing: 5.75,
//       ySpacing: 5.75,
//       scale: 2,
//       verticalBuffer: 1.5,
//       pixelMultiplier: 35,
//     };
//   }, [width]);

//   // Early return only after hooks
//   if (!hydrated || !width) return null;

//   const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

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

////***************************************************** */

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";
// import useHydrated from "../utils/useHydrated";
// import { useMemo } from "react";

// const Tech = () => {
//   const { width } = useWindowSize();
//   const hydrated = useHydrated();

//   // Memoize layout parameters based on width
//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       if (!width) {
//         return {
//           cols: 6,
//           xSpacing: 5.75,
//           ySpacing: 5.75,
//           scale: 2,
//           verticalBuffer: 1.5,
//           pixelMultiplier: 35,
//         };
//       }
//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.5,
//           ySpacing: 3.55,
//           scale: 1.5,
//           verticalBuffer: 1,
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.65,
//           ySpacing: 4.65,
//           scale: 1.65,
//           verticalBuffer: 1.25,
//           pixelMultiplier: 32,
//         };
//       }

//       return {
//         cols: 6,
//         xSpacing: 5.75,
//         ySpacing: 5.75,
//         scale: 2,
//         verticalBuffer: 1.5,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   // Early return after hooks
//   if (!hydrated || width === null) return null;

//   // Force DPR to 1 on mobile (width <= 768) for testing
//   const dpr =
//     width <= 768
//       ? 1
//       : typeof window !== "undefined"
//       ? window.devicePixelRatio
//       : 1;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;
//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);
//   const cameraZ = totalVerticalSpace * 1.75;

//   // Debug logs to check sizes and DPR
//   console.log("[Tech] hydrated:", hydrated, "width:", width);
//   console.log(
//     "[Tech] cols:",
//     cols,
//     "scale:",
//     scale,
//     "pixelMultiplier:",
//     pixelMultiplier
//   );
//   console.log(
//     "[Tech] canvasHeight:",
//     canvasHeight,
//     "cameraZ:",
//     cameraZ,
//     "dpr:",
//     dpr
//   );

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{
//         height: `${canvasHeight}px`,
//         border: "1px solid red",
//         backgroundColor: "#222",
//       }} // Added border to visualize container
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
//**************************** */
// import { useMemo } from "react";
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

//   // Memoize layout params based on width
//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       // if (!width) {
//       //   return {
//       //     cols: 6,
//       //     xSpacing: 5.75,
//       //     ySpacing: 5.75,
//       //     scale: 2,
//       //     verticalBuffer: 1.5,
//       //     pixelMultiplier: 35,
//       //   };
//       // }
//       if (!width) {
//         return {
//           cols: 0,
//           xSpacing: 0,
//           ySpacing: 0,
//           scale: 0, // or do not render at all
//           verticalBuffer: 0,
//           pixelMultiplier: 0,
//         };
//       }

//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.5,
//           ySpacing: 3.55,
//           scale: 1.5,
//           verticalBuffer: 1,
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.65,
//           ySpacing: 4.65,
//           scale: 1.65,
//           verticalBuffer: 1.25,
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 5.75,
//         ySpacing: 5.75,
//         scale: 2,
//         verticalBuffer: 1.5,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   // Render only when hydrated and width are valid
//   if (!hydrated || !width) return null;
//   //if (!hydrated || width === null) return null;

//   const dpr = width <= 768 ? 1 : window.devicePixelRatio;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;
//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);
//   const cameraZ = totalVerticalSpace * 1.75;

//   console.log("[Tech] hydrated:", hydrated, "width:", width);
//   console.log(
//     "[Tech] cols:",
//     cols,
//     "scale:",
//     scale,
//     "pixelMultiplier:",
//     pixelMultiplier
//   );
//   console.log(
//     "[Tech] canvasHeight:",
//     canvasHeight,
//     "cameraZ:",
//     cameraZ,
//     "dpr:",
//     dpr
//   );

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
//         {/* Lights and controls */}
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

/////////////*********************** */
// import { useMemo } from "react";
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

//   // Memoize layout params based on width
//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       if (!width) {
//         return {
//           cols: 0,
//           xSpacing: 0,
//           ySpacing: 0,
//           scale: 0,
//           verticalBuffer: 0,
//           pixelMultiplier: 0,
//         };
//       }

//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.5,
//           ySpacing: 3.55,
//           scale: 1.35, // smaller balls on mobile
//           verticalBuffer: 1,
//           pixelMultiplier: 30,
//         };
//       }

//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.65,
//           ySpacing: 4.65,
//           scale: 1.65,
//           verticalBuffer: 1.25,
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 5.75,
//         ySpacing: 5.75,
//         scale: 2,
//         verticalBuffer: 1.5,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   // Render only when hydrated and width are valid
//   if (!hydrated || !width) return null;

//   // Device pixel ratio (fix for mobile DPR)
//   const dpr = width <= 768 ? 1 : window.devicePixelRatio;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;
//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250);

//   // Fix: Set camera distance based on screen size to avoid initial sizing issues
//   const cameraZ =
//     width <= 768
//       ? totalVerticalSpace * 1.2 // Closer camera on mobile for better scale
//       : width <= 1024
//       ? totalVerticalSpace * 1.5 // Medium distance on tablet
//       : totalVerticalSpace * 1.75; // Farther camera on desktop

//   console.log("[Tech] hydrated:", hydrated, "width:", width);
//   console.log(
//     "[Tech] cols:",
//     cols,
//     "scale:",
//     scale,
//     "pixelMultiplier:",
//     pixelMultiplier
//   );
//   console.log(
//     "[Tech] canvasHeight:",
//     canvasHeight,
//     "cameraZ:",
//     cameraZ,
//     "dpr:",
//     dpr
//   );

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       //style={{ height: `${canvasHeight}px` }}
//       style={{
//         height: `${canvasHeight}px`,
//         border: "3px solid #00FF00", // bright green border for visibility
//         boxSizing: "border-box", // ensures border is inside the height
//       }}
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
//*********************************************** */
// import { useMemo } from "react";
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

//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       if (!width) {
//         return {
//           cols: 0,
//           xSpacing: 0,
//           ySpacing: 0,
//           scale: 0,
//           verticalBuffer: 0,
//           pixelMultiplier: 0,
//         };
//       }

//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.5,
//           ySpacing: 3.55,
//           scale: 1.5,
//           verticalBuffer: 1,
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.65,
//           ySpacing: 4.65,
//           scale: 1.65,
//           verticalBuffer: 1.25,
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 5.75,
//         ySpacing: 5.75,
//         scale: 2,
//         verticalBuffer: 1.5,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   if (!hydrated || !width) return null;

//   const dpr = width <= 768 ? 1 : window.devicePixelRatio;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   // Add extra vertical padding in pixels (adjust as needed)
//   const extraVerticalPadding = 40;

//   const canvasHeight =
//     Math.max(totalVerticalSpace * pixelMultiplier, 250) + extraVerticalPadding;

//   const cameraZ = totalVerticalSpace * 1.75;

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{
//         height: `${canvasHeight}px`,
//         border: "2px solid #00FF00", // bright green border for visualization
//         boxSizing: "border-box",
//       }}
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
//         {/* Shift group down by 0.5 units to avoid top clipping */}
//         <group position={[0, -0.5, 0]}>
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

//**************************************************** */

// import { useMemo } from "react";
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

//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     // useMemo(() => {
//     //   if (width <= 768) {
//     //     return {
//     //       cols: 2,
//     //       xSpacing: 5.5,
//     //       ySpacing: 3.55,
//     //       scale: 1.5,
//     //       verticalBuffer: 1.5, // increased buffer on mobile
//     //       pixelMultiplier: 30,
//     //     };
//     //   }
//     //   if (width <= 1024) {
//     //     return {
//     //       cols: 4,
//     //       xSpacing: 5.65,
//     //       ySpacing: 4.65,
//     //       scale: 1.65,
//     //       verticalBuffer: 1.25,
//     //       pixelMultiplier: 32,
//     //     };
//     //   }
//     //   return {
//     //     cols: 6,
//     //     xSpacing: 5.75,
//     //     ySpacing: 5.75,
//     //     scale: 2,
//     //     verticalBuffer: 1.5,
//     //     pixelMultiplier: 35,
//     //   };
//     // }, [width]);

//     useMemo(() => {
//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.4,
//           ySpacing: 3.8,
//           scale: 1.35, // was 1.5 → gives more breathing room
//           verticalBuffer: 1.7, // a bit more top/bottom padding
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.8,
//           ySpacing: 4.85,
//           scale: 1.55, // was 1.65
//           verticalBuffer: 1.35,
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 6,
//         ySpacing: 6,
//         scale: 1.95, // slightly smaller for elegance
//         verticalBuffer: 1.6,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   if (!hydrated || width === undefined) return null;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   const dpr = (() => {
//     if (width <= 768) return 1;
//     if (typeof window !== "undefined") {
//       return Math.min(Math.max(window.devicePixelRatio, 1), 2);
//     }
//     return 1;
//   })();

//   const cameraZ =
//     width <= 768
//       ? Math.max(totalVerticalSpace * 1.5, 20)
//       : totalVerticalSpace * 1.75;

//   const canvasHeight = Math.max(totalVerticalSpace * pixelMultiplier, 250) + 40; // keep your extra padding

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{ height: `${canvasHeight}px` }}
//     >
//       <Canvas
//         key={width}
//         frameloop="always"
//         shadows
//         dpr={dpr}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         {/* Lights and controls */}
//         {/* <ambientLight intensity={0.25} />
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
//         /> */}

//         <ambientLight intensity={0.3} color="#fff7e6" />
//         <hemisphereLight
//           intensity={0.4}
//           skyColor="#ffeedd"
//           groundColor="#222222"
//         />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.1}
//           color="#fff4e1"
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />
//         {/* Shift group down by 0.5 units to avoid top clipping */}
//         <group position={[0, -0.5, 0]}>
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
//************************************************** */
// import { useMemo } from "react";
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

//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.4,
//           ySpacing: 3.8,
//           scale: 1.35,
//           verticalBuffer: 1.7,
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.8,
//           ySpacing: 4.85,
//           scale: 1.55,
//           verticalBuffer: 1.35,
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 6,
//         ySpacing: 6,
//         scale: 1.95,
//         verticalBuffer: 1.6,
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   if (!hydrated || width === undefined) return null;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   const dpr = (() => {
//     if (width <= 768) return 1;
//     if (typeof window !== "undefined") {
//       return Math.min(Math.max(window.devicePixelRatio, 1), 2);
//     }
//     return 1;
//   })();

//   const cameraZ =
//     width <= 768
//       ? Math.max(totalVerticalSpace * 1.5, 20)
//       : totalVerticalSpace * 1.75;

//   // Calculate dynamic height for canvas container to reduce vertical empty space
//   // Multiply totalVerticalSpace by pixelMultiplier to convert units to px,
//   // then add a small padding of 20px top and bottom (total 40px)
//   const canvasHeight = totalVerticalSpace * pixelMultiplier + 40;

//   return (
//     <div
//       className="w-full flex items-center justify-center"
//       style={{
//         height: `${canvasHeight}px`,
//         border: "2px solid #00FF00", // bright green border for clear visibility
//         boxSizing: "border-box",
//       }}
//     >
//       <Canvas
//         key={width}
//         frameloop="always"
//         shadows
//         dpr={dpr}
//         camera={{ position: [0, 0, cameraZ], fov: 45 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <ambientLight intensity={0.3} color="#fff7e6" />
//         <hemisphereLight
//           intensity={0.4}
//           skyColor="#ffeedd"
//           groundColor="#222222"
//         />
//         <directionalLight
//           castShadow
//           position={[5, 10, 5]}
//           intensity={1.1}
//           color="#fff4e1"
//           shadow-mapSize-width={1024}
//           shadow-mapSize-height={1024}
//           shadow-camera-far={50}
//           shadow-camera-left={-10}
//           shadow-camera-right={10}
//           shadow-camera-top={10}
//           shadow-camera-bottom={-10}
//         />

//         <OrbitControls enableZoom={false} enablePan={false} />
//         <group position={[0, -0.5, 0]}>
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
//*********************************************** */
// import { useMemo } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";
// import Ball from "./canvas/Ball";
// import useWindowSize from "../utils/useWindowSize";
// import useHydrated from "../utils/useHydrated";
// import { motion } from "framer-motion";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import SectionDivider from "./SectionDivider";

// const Tech = () => {
//   const { width } = useWindowSize();
//   const hydrated = useHydrated();

//   const { cols, xSpacing, ySpacing, scale, verticalBuffer, pixelMultiplier } =
//     useMemo(() => {
//       if (width <= 768) {
//         return {
//           cols: 2,
//           xSpacing: 5.4,
//           ySpacing: 3.5, // <-- reduced from 3.8 to tighten vertical spacing
//           scale: 1.35,
//           verticalBuffer: 1.0, // <-- reduced from 1.7 to reduce top/bottom padding
//           pixelMultiplier: 30,
//         };
//       }
//       if (width <= 1024) {
//         return {
//           cols: 4,
//           xSpacing: 5.8,
//           ySpacing: 4.75, // <-- reduced from 4.85
//           scale: 1.75,
//           verticalBuffer: 1.0, // <-- reduced from 1.35
//           pixelMultiplier: 32,
//         };
//       }
//       return {
//         cols: 6,
//         xSpacing: 6,
//         ySpacing: 5.5, // <-- reduced from 6
//         scale: 1.8,
//         verticalBuffer: 1.0, // <-- reduced from 1.6
//         pixelMultiplier: 35,
//       };
//     }, [width]);

//   if (!hydrated || width === undefined) return null;

//   const rows = Math.ceil(technologies.length / cols);
//   const totalVerticalSpace = rows * ySpacing + verticalBuffer;

//   const dpr = (() => {
//     if (width <= 768) return 1;
//     if (typeof window !== "undefined") {
//       return Math.min(Math.max(window.devicePixelRatio, 1), 2);
//     }
//     return 1;
//   })();

//   // Zoom camera in a bit for tighter vertical framing
//   const cameraZ =
//     width <= 768
//       ? Math.max(totalVerticalSpace * 1.3, 18) // <-- reduced from 1.5x and min 20
//       : totalVerticalSpace * 1.5; // <-- reduced from 1.75x

//   // Calculate dynamic canvas height with less padding (reduce from 40px to 20px)
//   const canvasHeight = totalVerticalSpace * pixelMultiplier + 20;

//   return (
//     <div className="w-full flex flex-col justify-center">
//       {/* Header & Subheader */}
//       <motion.div
//         variants={textVariant()}
//         className="mb-10 text-left"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.3 }}
//       >
//         {/* Divisor line above header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
//         >
//           <SectionDivider />
//         </motion.div>

//         {/* Subheader */}
//         <motion.p
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
//           className={styles.sectionSubText}
//         >
//           Technologies I Use
//         </motion.p>

//         {/* Header */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20, scale: 0.98 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
//           className={styles.sectionHeadText}
//         >
//           Skills & Tools
//         </motion.h2>
//       </motion.div>

//       <div
//         className="w-full flex items-center justify-center"
//         style={{
//           height: `${canvasHeight}px`,
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20, scale: 0.97 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           viewport={{ once: false, amount: 0.3 }} // replays when visible
//           transition={{
//             duration: 1.5,
//             delay: 0.3, // shorter delay since it runs per scroll
//             ease: "easeOut",
//           }}
//           className="w-full flex items-center justify-center"
//           style={{
//             height: `${canvasHeight}px`,
//           }}
//         >
//           <Canvas
//             key={width}
//             frameloop="always"
//             shadows
//             dpr={dpr}
//             camera={{ position: [0, 0, cameraZ], fov: 45 }}
//             gl={{ preserveDrawingBuffer: true }}
//           >
//             <ambientLight intensity={0.3} color="#fff7e6" />
//             <hemisphereLight
//               intensity={0.4}
//               skyColor="#ffeedd"
//               groundColor="#222222"
//             />
//             <directionalLight
//               castShadow
//               position={[5, 10, 5]}
//               intensity={1.1}
//               color="#fff4e1"
//               shadow-mapSize-width={1024}
//               shadow-mapSize-height={1024}
//               shadow-camera-far={50}
//               shadow-camera-left={-10}
//               shadow-camera-right={10}
//               shadow-camera-top={10}
//               shadow-camera-bottom={-10}
//             />

//             <OrbitControls enableZoom={false} enablePan={false} />

//             {/* Shift group down slightly less to reduce top empty space */}
//             <group position={[0, -0.3, 0]}>
//               {" "}
//               {/* <-- reduced from -0.5 */}
//               {technologies.map((tech, index) => {
//                 const row = Math.floor(index / cols);
//                 const col = index % cols;
//                 const x = (col - (cols - 1) / 2) * xSpacing;
//                 const y = ((rows - 1) / 2 - row) * ySpacing;

//                 return (
//                   <Ball
//                     key={tech.name}
//                     imgUrl={tech.icon}
//                     position={[x, y, 0]}
//                     scale={scale}
//                   />
//                 );
//               })}
//             </group>
//             <Preload all />
//           </Canvas>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "skills");
//**************************************** */
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

