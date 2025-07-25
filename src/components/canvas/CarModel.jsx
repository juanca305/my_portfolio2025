import { useGLTF } from '@react-three/drei';

export default function CarModel() {
  const { scene } = useGLTF('/car/Tesla.glb');
  return <primitive object={scene} />;
}
