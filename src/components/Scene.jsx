import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CarModel from './components/CarModel';

function Scene() {
  return (
    <Canvas
      gl={{ alpha: true }}
      style={{ background: 'transparent', height: '100vh' }}
      camera={{ position: [0, 2, 6] }}
    >
      <ambientLight intensity={1} />
      <CarModel />
      <OrbitControls />
    </Canvas>
  );
}

export default Scene;
