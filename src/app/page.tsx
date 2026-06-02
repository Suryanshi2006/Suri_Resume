"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedWorks from "@/components/FeaturedWorks";
import SelectedFrames from "@/components/SelectedFrames";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="w-full min-h-screen bg-black relative">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div data-cursor="WATCH" className="w-full h-screen">
            <Hero />
          </div>
          <Philosophy />
          <FeaturedWorks />
          <SelectedFrames />
          <Services />
          <Contact />
        </>
      )}
    </main>
  );
}
