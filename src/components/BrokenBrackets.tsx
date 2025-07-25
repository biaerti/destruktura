import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const DynamicBracketLogo = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const leftBracketRef = useRef(null);
  const rightBracketRef = useRef(null);
  const topBracketRef = useRef(null);
  const bottomBracketRef = useRef(null);
  
  useEffect(() => {
    // Główna animacja dla nawiasów
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });
    
    // Początkowe ustawienia
    gsap.set([leftBracketRef.current, rightBracketRef.current, topBracketRef.current, bottomBracketRef.current], {
      opacity: 0.5
    });
    
    // Animacja lewego nawiasu
    tl.to(leftBracketRef.current, {
      x: '8%',
      rotation: -3,
      duration: 3,
      ease: "sine.inOut"
    }, 0);
    
    // Animacja prawego nawiasu
    tl.to(rightBracketRef.current, {
      x: '-8%',
      rotation: 3,
      duration: 3,
      ease: "sine.inOut"
    }, 0);
    
    // Animacja górnego nawiasu
    tl.to(topBracketRef.current, {
      y: '8%',
      rotation: 2,
      duration: 3.5,
      ease: "sine.inOut" 
    }, 0);
    
    // Animacja dolnego nawiasu
    tl.to(bottomBracketRef.current, {
      y: '-8%',
      rotation: -2,
      duration: 3.5,
      ease: "sine.inOut"
    }, 0);
    
    // Pulsujący efekt glow dla logo
    const glowTl = gsap.timeline({repeat: -1, yoyo: true});
    
    glowTl.to(logoRef.current, {
      filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.7)) drop-shadow(0 0 20px rgba(0, 100, 255, 0.5))',
      duration: 2,
      ease: "sine.inOut"
    });
    
    // Okazjonalny subtelny efekt "glitch" dla logo
    const logoGlitchTl = gsap.timeline({repeat: -1});
    
    const createLogoGlitch = () => {
      const delay = Math.random() * 5 + 3; // Dłuższe odstępy między glitchami
      const duration = 0.1;
      
      logoGlitchTl.to(logoRef.current, {
        scale: 1.03,
        filter: 'brightness(1.3) drop-shadow(0 0 10px rgba(255, 0, 0, 0.8))',
        duration: duration,
        ease: "power1.inOut"
      });
      
      logoGlitchTl.to(logoRef.current, {
        scale: 1,
        filter: 'drop-shadow(0 0 8px rgba(255, 0, 0, 0.7)) drop-shadow(0 0 20px rgba(0, 100, 255, 0.5))',
        duration: duration,
        ease: "power1.inOut"
      });
      
      logoGlitchTl.to({}, {duration: delay});
    };
    
    // Utwórz kilka efektów glitch dla logo
    for (let i = 0; i < 3; i++) {
      createLogoGlitch();
    }
    
    return () => {
      tl.kill();
      glowTl.kill();
      logoGlitchTl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-[22rem] sm:w-[30rem] h-[20rem] flex items-center justify-center">
        {/* Lewy nawias */}
        <div ref={leftBracketRef} className="absolute left-0 h-full flex items-center">
          <span className="text-8xl text-red-600 font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">[</span>
        </div>
        
        {/* Prawy nawias */}
        <div ref={rightBracketRef} className="absolute right-0 h-full flex items-center">
          <span className="text-8xl text-red-600 font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)]">]</span>
        </div>
        
        {/* Górny nawias - wydłużony */}
        <div ref={topBracketRef} className="absolute top-2 w-64 sm:w-80 flex justify-center">
          <div className="text-6xl text-red-600 font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] tracking-[2rem] overflow-hidden">
            ⎯⎯⎯
          </div>
        </div>
        
        {/* Dolny nawias - wydłużony */}
        <div ref={bottomBracketRef} className="absolute bottom-2 w-64 sm:w-80 flex justify-center">
          <div className="text-6xl text-red-600 font-bold drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] tracking-[2rem] overflow-hidden">
            ⎯⎯⎯
          </div>
        </div>
        
        {/* Logo bez efektu glow */}
        <div ref={logoRef} className="relative w-48 sm:w-60 z-10">
          <Image
            src="/wolne_kible.svg"
            alt="Wolne Kible Logo"
            width={240}
            height={240}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicBracketLogo;