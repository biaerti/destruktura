// src/components/GlitchHero.tsx - Fix responsive text sizing for hero text
"use client";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import HeroParticles from "./HeroParticles";
gsap.registerPlugin(TextPlugin);

const defaultPhrases = [
  "ŁAMIEMY DOTYCHCZASOWE PERSPEKTYWY",
  "TWORZYMY KREATYWNE KAMPANIE",
  "PODKRĘCAMY MARKI DO CZERWONOŚCI",
  "POGRĄŻAMY ŚWIAT W CHAOSIE",
];

interface GlitchHeroProps {
  title?: string;
  subtitle?: string;
  onBurst?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export default function GlitchHero({
  title,
  subtitle,
  onBurst,
  fullWidth = false,
  className = "",
}: GlitchHeroProps) {
  const phrases = title ? [title] : defaultPhrases;
  const textRef = useRef<HTMLHeadingElement>(null);
  const rotateTimeline = useRef<gsap.core.Timeline | null>(null);
  const [burstDone, setBurstDone] = useState(false);
  
  // Ukryj element przed pierwszym renderem
  useLayoutEffect(() => {
    if (textRef.current) {
      gsap.set(textRef.current, { autoAlpha: 0, scale: 1.2 });
    }
  }, []);
  
  const handleBurst = () => {
    if (!burstDone) {
      setBurstDone(true);
      onBurst?.();
    }
  };
  
  // Po pierwszym burst – fade-in + ewentualna rotacja fraz
  useEffect(() => {
    if (!burstDone || !textRef.current) return;
    const tlIntro = gsap.timeline();
    
    // Ustaw pierwszą frazę zanim zacznie się fade-in
    tlIntro.set(textRef.current, { text: phrases[0] });
    tlIntro.to(textRef.current, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
    
    if (phrases.length > 1) {
      tlIntro.call(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.set(textRef.current!, { text: phrases[0] });
        phrases.slice(1).forEach((phrase) => {
          tl.to(
            textRef.current!,
            { text: phrase, duration: 0.5, ease: "none" },
            "+=3.5"
          );
        });
        rotateTimeline.current = tl;
      });
    }
    
    return () => {
      tlIntro.kill();
      rotateTimeline.current?.kill();
    };
  }, [burstDone, phrases]);
  
  return (
    <section className={`relative w-full h-screen flex items-center justify-center overflow-hidden bg-black ${className}`}>
      <HeroParticles onBurst={handleBurst} fullWidth={fullWidth} />
      
      <div className="absolute z-10 text-center px-4 max-w-full">
        <h1
          ref={textRef}
          className="opacity-0 scale-125 text-white font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight break-words"
        />
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">{subtitle}</p>
        )}
      </div>
    </section>
  );
}