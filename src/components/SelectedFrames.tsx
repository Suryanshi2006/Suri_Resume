"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const frames = [
  { id: 1, image: "https://img.youtube.com/vi/eMSTpE1bEvk/maxresdefault.jpg" },
  { id: 2, image: "https://img.youtube.com/vi/eRdnh1nuU5c/maxresdefault.jpg" },
  { id: 3, image: "https://img.youtube.com/vi/DmSF-h1xvhI/maxresdefault.jpg" },
  { id: 4, image: "https://img.youtube.com/vi/dIH8YhcBLrs/maxresdefault.jpg" },
  { id: 5, image: "https://img.youtube.com/vi/eMSTpE1bEvk/hqdefault.jpg" },
  { id: 6, image: "https://img.youtube.com/vi/DmSF-h1xvhI/hqdefault.jpg" },
];

export default function SelectedFrames() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  return (
    <section ref={containerRef} className="py-32 bg-[#050505] relative z-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-start">
        
        <div className="md:w-1/3 sticky top-32">
          <h2 className="font-bebas text-6xl md:text-8xl text-[#f4f4f4] tracking-tighter leading-[0.85]">
            SELECTED<br/>FRAMES
          </h2>
          <p className="mt-8 font-inter text-[#a0a0a0] max-w-sm font-light">
            Cinematic screenshots from CHEHRE, live stage performances, and behind-the-scenes editing timelines.
          </p>
          <div className="mt-12 w-16 h-[1px] bg-[#333]" />
        </div>

        <motion.div 
          style={{ y }} 
          className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
          data-cursor="WATCH"
        >
          {frames.map((frame, index) => (
            <div 
              key={frame.id} 
              className={`relative overflow-hidden group w-full aspect-video md:aspect-[4/5] ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${frame.image})` }}
              >
                {/* Placeholder Grain Effect */}
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-[#f4f4f4]">
                  <span className="font-bebas text-2xl tracking-widest">FRAME_{frame.id}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
