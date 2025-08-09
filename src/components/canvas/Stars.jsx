// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   );

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className="w-full h-auto absolute inset-0 z-[-1]">
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
//**************************************************** */

// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef()
//   // const [sphere] = useState(() =>
//   //   random.inSphere(new Float32Array(5000), { radius: 1.2 })
//   // );

//   const [sphere] = useState(
//     () => random.inSphere(new Float32Array(10000), { radius: 100 }) // bigger radius, try 50 or 100
//   );

//   useFrame((state, delta) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#f272c8"
//           size={0.05}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export default Stars;
//*********************************************************** */

// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();

//   // Keep original star count and increase radius for spread
//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(10000), { radius: 150 }) // radius bigger for spread
//   );

//   useFrame(({ clock, delta }) => {
//     if (ref.current) {
//       ref.current.rotation.x -= delta / 10;
//       ref.current.rotation.y -= delta / 15;

//       // Twinkle effect with smooth sine oscillation for size
//       ref.current.material.size = 0.12 + 0.08 * Math.sin(clock.elapsedTime * 8);
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color="#ffffff" // white stars for nice effect, or keep pink if you prefer
//           size={0.12}     // base size, twinkle modifies this dynamically
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export default Stars;
/////////****************************////////////////////// */

// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const pointsRef = useRef();
//   const materialRef = useRef();

//   const [sphere] = useState(() =>
//     random.inSphere(new Float32Array(10000), { radius: 150 })
//   );

//   useFrame(({ clock, delta }) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.x -= delta / 10;
//       pointsRef.current.rotation.y -= delta / 15;
//     }

//     if (materialRef.current) {
//       materialRef.current.size = 0.12 + 0.08 * Math.sin(clock.elapsedTime * 8);
//     }
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           ref={materialRef}
//           transparent
//           color="#ffffff"
//           size={0.12}
//           sizeAttenuation
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export default Stars;
//*************************************************** */
// import { useState, useRef, Suspense } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// export default Stars;
//************************************************** */

import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = () => {
  const ref = useRef();

  // Spread stars over a larger space
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 20 })
  );

  // Animate rotation
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta * 0.02;
    ref.current.rotation.y -= delta * 0.015;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.06}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default Stars;

