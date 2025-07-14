import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, OrbitControls, Stars } from '@react-three/drei';

export default function ThreeJSTitle() {
  return (
    <div className="absolute inset-0 h-full w-full opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Text
          fontSize={1.5}
          position={[-2, 0, 0]}
          color="#4F46E5"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
        >
          EduSim
        </Text>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}