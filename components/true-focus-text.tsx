"use client";

import { useEffect, useRef, useState } from "react";

interface TrueFocusTextProps {
  text: string;
  className?: string;
}

export function TrueFocusText({ text, className = "" }: TrueFocusTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const startAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    let iteration = 0;
    const speed = 80;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
        setIsAnimating(false);
        setDisplayText(text);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span
      className={`cursor-pointer ${className}`}
      onMouseEnter={startAnimation}
    >
      {displayText}
    </span>
  );
}
