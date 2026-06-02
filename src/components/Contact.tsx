"use client";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <footer className="bg-black text-[#f4f4f4] py-20 px-4 md:px-20 border-t border-[#333] relative z-10 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="flex flex-col gap-8">
          <h2 className="font-bebas text-6xl md:text-9xl leading-[0.8] tracking-tighter" data-cursor="ENTER STORY">
            LET'S MAKE<br/>
            PEOPLE FEEL<br/>
            SOMETHING.
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <a 
              href="mailto:tgsuryanshisinghcrx@gmail.com" 
              className="group flex items-center gap-2 font-inter text-xl uppercase tracking-widest border border-[#333] w-fit px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              data-cursor="PLAY"
            >
              START A PROJECT
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1F5m8lLCJ-nJwI3Y4QMGrn02UP7EchPrq/view?usp=sharing" 
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 font-inter text-xl uppercase tracking-widest border border-[#333] w-fit px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              data-cursor="READ"
            >
              VIEW RESUME
              <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>
          <a 
            href="tel:+917428274832" 
            className="font-inter text-lg uppercase tracking-widest text-[#a0a0a0] hover:text-white transition-colors duration-300 -mt-4"
          >
            +91 7428274832
          </a>
        </div>
        
        <div className="flex flex-col items-end gap-4 font-inter text-sm tracking-widest text-[#555] uppercase">
          <p>© {new Date().getFullYear()} SURYANSHI KR. SINGH</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/surisingh2006/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="https://www.youtube.com/@kietmoviesociety" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">YOUTUBE</a>
            <a href="https://www.instagram.com/iamver_ma/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">COLLABS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
