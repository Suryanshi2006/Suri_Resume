"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (textRef.current) {
      const texts = textRef.current.querySelectorAll(".reveal-text");
      
      texts.forEach((text) => {
        gsap.fromTo(
          text,
          { opacity: 0.1, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 1,
            },
          }
        );
      });
    }
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[150vh] bg-[#050505] flex items-center justify-center py-32 px-4 md:px-20 overflow-hidden"
    >
      <div 
        ref={textRef} 
        className="w-full max-w-7xl mx-auto flex flex-col gap-12 md:gap-24"
      >
        <motion.div style={{ y }} className="flex flex-col gap-6 md:gap-12" data-cursor="READ">
          <h2 className="reveal-text font-cormorant font-bold italic text-5xl md:text-8xl text-[#8b1e1e] max-w-4xl leading-tight">
            I don't write content.
          </h2>
          <h2 className="reveal-text font-bebas text-6xl md:text-9xl text-[#f4f4f4] max-w-5xl leading-[0.85]">
            I WRITE MOMENTS PEOPLE REPLAY IN THEIR HEADS.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-24">
          <div className="reveal-text font-inter text-lg md:text-2xl text-[#a0a0a0] leading-relaxed font-light">
            From award-winning short films to viral reel concepts, I create stories designed to hold attention — whether it’s for a brand, a creator, or a stage performance.
          </div>
          <div className="reveal-text font-inter text-lg md:text-2xl text-[#a0a0a0] leading-relaxed font-light">
            I blend cinematic storytelling with internet culture.
            <br/><br/>
            Sometimes that becomes a thriller short film.<br/>
            Sometimes it becomes a 20-second reel.<br/>
            Sometimes it becomes an ad people don’t skip.
          </div>
        </div>

        <div className="mt-32 border-t border-[#222] pt-24 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2 flex justify-center md:justify-start w-full relative min-h-[500px] md:min-h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 grayscale hover:grayscale-0 opacity-60 hover:opacity-100" 
              style={{ 
                backgroundImage: "url('/profile.jpg?v=2')",
                maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 75%)"
              }}
              data-cursor="WATCH"
            >
              {/* Subtle grain overlay on the image */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
            </div>
          </div>
          <div className="md:w-1/2 z-10">
            <h3 className="reveal-text font-bebas text-5xl md:text-7xl text-[#f4f4f4] tracking-widest text-stroke" data-cursor="ENTER STORY">
              I WRITE. I SHOOT. I EDIT.
            </h3>
            <h3 className="reveal-text font-bebas text-6xl md:text-8xl text-[#8b1e1e] mt-4 tracking-wider leading-[0.85]">
              I BUILD EMOTION<br/>FRAME BY FRAME.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
