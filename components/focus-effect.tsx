"use client";

import type React from "react";

import { useEffect, useRef } from "react";

interface FocusEffectProps {
  children: React.ReactNode;
  className?: string;
}

export function FocusEffect({ children, className = "" }: FocusEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(4000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(17, 94, 89, 0.15), transparent 40%)`,
      }}
    >
      {children}
    </div>
  );
}
