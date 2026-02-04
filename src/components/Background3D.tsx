import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeContext';

interface FloatingShapeProps {
  position: [number, number, number];
  scale?: number;
  color: string;
  speed?: number;
  rotationSpeed?: number;
}

function FloatingOctahedron({ position, scale = 1, color, speed = 1, rotationSpeed = 0.5 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, scale = 1, color, speed = 1, rotationSpeed = 0.3 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.5;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.5}
          distort={0.15}
          speed={1.5}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({ position, scale = 1, color, speed = 1, rotationSpeed = 0.4 }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed;
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.3;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.55}
          distort={0.25}
          speed={2.5}
          roughness={0.1}
          metalness={0.95}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ particleColor }: { particleColor: string }) {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particleCount = 200;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={particleColor}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const primaryColor = isDark ? '#00d4ff' : '#0099cc';
  const secondaryColor = isDark ? '#8b5cf6' : '#7c3aed';

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main shapes */}
      <FloatingOctahedron position={[-4, 2, -3]} scale={1.2} color={primaryColor} speed={1.2} rotationSpeed={0.4} />
      <FloatingTorus position={[4, -1, -4]} scale={1.5} color={secondaryColor} speed={0.8} rotationSpeed={0.3} />
      <FloatingIcosahedron position={[0, 3, -5]} scale={0.8} color={primaryColor} speed={1} rotationSpeed={0.5} />
      <FloatingOctahedron position={[-3, -3, -2]} scale={0.7} color={secondaryColor} speed={1.5} rotationSpeed={0.6} />
      <FloatingTorus position={[5, 2, -6]} scale={0.9} color={primaryColor} speed={0.9} rotationSpeed={0.35} />
      <FloatingIcosahedron position={[-5, 0, -5]} scale={1.1} color={secondaryColor} speed={1.1} rotationSpeed={0.45} />
      
      {/* Background particles */}
      <ParticleField particleColor={primaryColor} />
      
      {/* Ambient lighting */}
      <ambientLight intensity={isDark ? 0.3 : 0.5} />
      <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 0.6} color={primaryColor} />
      <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.4} color={secondaryColor} />
      <spotLight position={[0, 10, 0]} intensity={isDark ? 0.4 : 0.3} color="#ffffff" angle={0.3} />
    </group>
  );
}

export function Background3D() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const bgColor = isDark ? '#050a14' : '#f5f7fa';

  return (
    <div className="fixed inset-0 -z-10 no-transition">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={[bgColor]} />
        <fog attach="fog" args={[bgColor, 10, 30]} />
        <Scene isDark={isDark} />
      </Canvas>
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
    </div>
  );
}
