"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 200); // Extremely fast exit
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15; // Extremely fast progress
      });
    }, 40); // Shorter interval

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1 
          className="font-bebas text-6xl md:text-8xl tracking-widest text-[#f4f4f4] glitch-text"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
        >
          LOADING MEMORY<span className="animate-pulse">...</span>
        </motion.h1>
        
        <div className="w-64 h-[2px] bg-[#333] mt-8 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#f4f4f4]"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          />
        </div>
        
        <div className="mt-4 font-mono text-xs text-[#555] flex justify-between w-64 uppercase tracking-widest">
          <span>Sys.Init</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
