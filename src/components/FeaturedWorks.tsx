"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

const works = [
  {
    title: "CHEHRE",
    subtitle: "Award Winning Psychological Thriller",
    role: "Writer / Director",
    quote: "“A descent into madness.”",
    color: "#8b1e1e",
    link: "https://youtu.be/eMSTpE1bEvk?si=ybh3M8QqBcexMr2i",
    image: "https://img.youtube.com/vi/eMSTpE1bEvk/maxresdefault.jpg"
  },
  {
    title: "RWANDA",
    subtitle: "Embassy Stage Performance",
    role: "Lead Writer",
    quote: "“Stories that crossed borders.”",
    color: "#333333",
    link: "https://youtu.be/eRdnh1nuU5c?si=fTfgDGuGeWaJNJZn",
    image: "https://img.youtube.com/vi/eRdnh1nuU5c/maxresdefault.jpg"
  },
  {
    title: "RWANDA II",
    subtitle: "Embassy Stage Performance (Next Year)",
    role: "Head Writer",
    quote: "“The story continues.”",
    color: "#1a1a1a",
    link: "https://youtu.be/dIH8YhcBLrs?si=fS10BxtBtKK0K-Ej",
    image: "https://img.youtube.com/vi/dIH8YhcBLrs/maxresdefault.jpg"
  },
  {
    title: "AD WORK",
    subtitle: "Creative Campaigns",
    role: "Creative Strategist",
    quote: "“Marketing through storytelling.”",
    color: "#552222",
    link: "https://youtu.be/DmSF-h1xvhI?si=7s4kds2JL6Od1ots",
    image: "https://img.youtube.com/vi/DmSF-h1xvhI/maxresdefault.jpg"
  }
];

export default function FeaturedWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (sectionRef.current && containerRef.current) {
          const container = containerRef.current;
          const totalScroll = container.scrollWidth - window.innerWidth;
          
          gsap.to(container, {
            x: -totalScroll,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: `+=${totalScroll}`,
              pin: true,
              scrub: 1.5, 
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen md:h-screen w-full bg-[#050505] overflow-hidden relative">
      <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10">
        <h2 className="font-bebas text-4xl md:text-6xl text-[#f4f4f4] mix-blend-difference">FEATURED WORKS</h2>
      </div>
      
      <div 
        ref={containerRef} 
        className="flex flex-col md:flex-row h-full items-center px-4 md:pl-[10vw] md:pr-[20vw] gap-8 md:gap-[20vw] w-full md:w-fit pt-32 md:pt-0 pb-20 md:pb-0"
      >
        {works.map((work, idx) => (
          <a 
            key={idx} 
            href={work.link}
            target="_blank"
            rel="noreferrer"
            className="group relative w-full md:w-[60vw] h-[50vh] md:h-[70vh] shrink-0 cursor-pointer overflow-hidden bg-[#111] block rounded-sm md:rounded-none"
            data-cursor="PLAY"
          >
            {/* Background Placeholder with Grain & Color */}
            <div 
              className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105 bg-cover bg-center"
              style={{ backgroundColor: work.color, backgroundImage: `url(${work.image})` }}
            >
               <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
               <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
               
               {/* Play button overlay */}
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 backdrop-blur-[2px] z-20">
                 <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center text-white bg-black/50">
                   <Play size={32} className="ml-1" />
                 </div>
               </div>
            </div>
            
            {/* Cinematic Subtitles overlay */}
            <div className="absolute bottom-10 left-0 w-full text-center z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
               <div className="inline-block bg-black/80 px-4 py-2">
                 <p className="font-cormorant italic text-yellow-400 text-xl md:text-2xl tracking-wider">
                   {work.quote}
                 </p>
               </div>
            </div>
            
            {/* Card Content */}
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between z-10 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none">
              <div className="overflow-hidden">
                <h3 className="font-bebas text-6xl md:text-[8vw] leading-[0.8] text-[#f4f4f4] translate-y-0 transition-transform duration-700 group-hover:-translate-y-full opacity-100 group-hover:opacity-0 drop-shadow-2xl">
                  {work.title}
                </h3>
              </div>
              <div>
                <p className="font-inter text-sm md:text-lg tracking-widest text-[#f4f4f4] uppercase font-bold mb-2 drop-shadow-lg">
                  {work.role}
                </p>
                <p className="font-inter text-xs md:text-sm text-[#a0a0a0] uppercase tracking-wider drop-shadow-lg">
                  {work.subtitle}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
