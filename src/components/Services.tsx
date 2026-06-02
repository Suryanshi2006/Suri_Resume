"use client";

import { motion } from "framer-motion";

const services = [
  "Cinematic Ad Scripts",
  "Viral Reel Concepts",
  "YouTube Long-Form Storytelling",
  "Creator Content Writing",
  "Brand Storytelling",
  "Short Film Scripts",
  "Editing & Post Production",
  "Visual Direction",
  "Creative Strategy for Startups",
  "Meme & Gen-Z Internet Writing",
];

export default function Services() {
  return (
    <section className="bg-[#f4f4f4] text-[#050505] py-32 px-4 md:px-20 relative z-10 selection:bg-black selection:text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-9xl tracking-tighter leading-[0.8] mb-16 md:mb-32">
          WHAT I CAN CREATE
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 border-t border-black/20 pt-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex items-center justify-between border-b border-black/10 pb-8 cursor-pointer"
              data-cursor="PLAY"
            >
              <h3 className="font-bebas text-3xl md:text-5xl group-hover:pl-4 transition-all duration-300">
                {service}
              </h3>
              <div className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bebas text-[#8b1e1e]">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-black/20">
          <p className="font-cormorant italic text-3xl md:text-5xl text-center max-w-4xl mx-auto leading-tight">
            “The internet is full of content. Very little of it feels human. I try to create work that feels alive — because people forget trends, but they remember emotions.”
          </p>
        </div>
      </div>
    </section>
  );
}
