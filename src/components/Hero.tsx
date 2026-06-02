"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";

function ParticleBackground() {
  const ref = useRef<any>(null);
  // Generate random points in a sphere
  const sphere = random.inSphere(new Float32Array(5001), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f4f4f4"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const name = "SURYANSHI KR. SINGH".split("");
  
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleBackground />
        </Canvas>
      </div>

      {/* Lighting overlay for mouse reaction could go here */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-bebas text-[15vw] leading-[0.75] tracking-tighter text-[#f4f4f4] flex flex-wrap justify-center overflow-hidden">
          {name.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.1 + index * 0.03,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 md:mt-12 font-inter text-sm md:text-lg tracking-[0.2em] uppercase text-[#8b1e1e] max-w-2xl"
        >
          Writer. Filmmaker. Editor.<br/>
          <span className="text-[#a0a0a0] mt-2 block">Turning ideas into stories people remember.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="font-inter text-xs tracking-widest text-[#555] uppercase mb-2">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-[#333] relative overflow-hidden">
            <motion.div
              className="w-full h-full bg-[#f4f4f4]"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
