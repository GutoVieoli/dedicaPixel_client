import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points, PointMaterial, Stars, Plane } from "@react-three/drei";

// 🔥 Gerar partículas como Float32Array
const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3); // Cada ponto tem (x, y, z)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10; // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z
  }
  return positions;
};

const Particles = () => {
  const pointsRef = useRef<any>(null);
  const positions = generateParticles(500); // 500 partículas

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime();
      pointsRef.current.rotation.x = Math.sin(time / 4) * 0.3;
      pointsRef.current.rotation.y = Math.sin(time / 2) * 0.3;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial 
        color="rgba(20, 199, 147, 1)" 
        size={0.06} 
        transparent 
        depthWrite={false}
        />
    </Points>
  );
};

const FrostedGlass = () => {
  return (
    <Plane args={[20, 20]} position={[0, 0, 1]}>
      <meshStandardMaterial
        color="white"
        opacity={0.15} // Define a transparência
        transparent
        roughness={0.1} // Superfície fosca
        metalness={0}
      />
    </Plane>
  );
};

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-tr from-blue-800 via-[#1E031F] to-black animate-gradient" //animete-gradient - cores de fundo mexe
    >
      <div className="absolute inset-0 z-10 backdrop-blur-[3px]"> </div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <FrostedGlass />
        <Stars radius={7} depth={80} count={1000} factor={6} fade speed={3} />
        <Particles />
      </Canvas>
    </div>
  );
};
// from-gray-800 or from-red-950 from blue-950

export default Background;
