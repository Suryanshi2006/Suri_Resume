"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement;
      
      // Look for the closest element with a data-cursor attribute
      const cursorElement = target.closest("[data-cursor]");
      if (cursorElement) {
        setIsHovering(true);
        setCursorText(cursorElement.getAttribute("data-cursor") || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "var(--foreground)",
      borderRadius: "50%",
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "var(--foreground)",
      borderRadius: "50%",
      opacity: isVisible ? 1 : 0,
      color: "var(--background)",
      scale: 1.1,
    },
  };

  return (
    <motion.div
      id="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.5,
      }}
      className="fixed pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center font-bebas text-sm"
    >
      {isHovering && <span className="opacity-100">{cursorText}</span>}
    </motion.div>
  );
}
