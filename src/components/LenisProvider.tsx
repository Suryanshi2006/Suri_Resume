"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
