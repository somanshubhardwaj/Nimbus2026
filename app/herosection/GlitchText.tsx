'use client';

import { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join("")
      );
      
      if(iteration >= text.length){ 
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 5;
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  return (
    <h1 
      className={className}
      style={{ fontFamily: 'Neoform, sans-serif' }}
    >
      {displayText}
    </h1>
  );
}
