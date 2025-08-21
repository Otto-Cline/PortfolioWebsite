"use client";

import { useEffect, useRef, useState } from "react";

interface DecryptedTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
}

export function DecryptedText({
  text,
  className = "",
  trigger = true,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated && trigger) {
          startDecryption();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, trigger]);

  const startDecryption = () => {
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
    <span ref={elementRef} className={className}>
      {displayText || text}
    </span>
  );
}
