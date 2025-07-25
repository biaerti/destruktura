import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useRouter } from 'next/router';

type DynamicBracketLogoProps = {
  logoSrc?: string;
  logoAlt?: string;
  width?: number;
  height?: number;
  forceProject?: string;
};

const DynamicBracketLogo = ({ 
  logoSrc,
  logoAlt,
  width = 240, 
  height = 240,
  forceProject
}: DynamicBracketLogoProps) => {
  const containerRef = useRef(null);
  const leftBracketRef = useRef(null);
  const rightBracketRef = useRef(null);
  const logoRef = useRef(null);
  const router = useRouter();

  // Determine which project/logo to show based on current path or forceProject prop
  const projectPath = forceProject || router.pathname;
  
  // Use provided props if they exist - this should take priority
  // Only fall back to auto-detection if props aren't provided
  const actualLogoSrc = logoSrc || (
    projectPath.includes('misjonarze-ptga') 
      ? "/misjonarze_ptga.svg" 
      : "/wolne_kible.svg"
  );
  
  const actualLogoAlt = logoAlt || (
    projectPath.includes('misjonarze-ptga')
      ? "Misjonarze PTGA Logo"
      : "Wolne Kible Logo"
  );

  useEffect(() => {
    // Create GSAP timeline for the animation
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true
    });
    
    // Initial setup
    gsap.set([leftBracketRef.current, rightBracketRef.current], {
      opacity: 0.3,
      scale: 1
    });
    
    // Left bracket animation
    tl.to(leftBracketRef.current, {
      x: '5%',
      rotation: -2,
      duration: 2.5,
      ease: "sine.inOut"
    }, 0);
    
    // Right bracket animation
    tl.to(rightBracketRef.current, {
      x: '-5%',
      rotation: 2,
      duration: 2.5,
      ease: "sine.inOut"
    }, 0);
    
    // Slight pulse effect on brackets
    tl.to([leftBracketRef.current, rightBracketRef.current], {
      opacity: 0.5,
      scale: 1.03,
      duration: 1.2,
      ease: "power1.inOut",
      stagger: 0.1
    }, 0.5);
    
    // Return to original state
    tl.to([leftBracketRef.current, rightBracketRef.current], {
      opacity: 0.3,
      scale: 1,
      duration: 1.2,
      ease: "power1.inOut",
      stagger: 0.1
    }, 1.7);
    
    // Random glitch effects for the logo
    const glitchTl = gsap.timeline({repeat: -1});
    
    // Function to create random glitch effect
    const createGlitchEffect = () => {
      const duration = Math.random() * 0.2 + 0.1;
      const delay = Math.random() * 5 + 2;
      
      glitchTl.to(logoRef.current, {
        x: () => Math.random() * 3 - 1.5,
        y: () => Math.random() * 3 - 1.5,
        skewX: () => Math.random() * 2 - 1,
        skewY: () => Math.random() * 2 - 1,
        duration: duration,
        ease: "steps(1)",
        filter: "brightness(1.2) contrast(1.3)",
        boxShadow: "0 0 8px rgba(179, 0, 0, 0.8)"
      });
      
      glitchTl.to(logoRef.current, {
        x: 0,
        y: 0,
        skewX: 0,
        skewY: 0,
        duration: duration,
        ease: "steps(1)",
        filter: "brightness(1) contrast(1)",
        boxShadow: "none"
      });
      
      glitchTl.to({}, {duration: delay});
    };
    
    // Create multiple glitch effects
    for (let i = 0; i < 5; i++) {
      createGlitchEffect();
    }
    
    return () => {
      tl.kill();
      glitchTl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-full max-w-3xl flex items-center justify-center">
        {/* Left bracket */}
        <div 
          ref={leftBracketRef}
          className="absolute left-0 text-red-600 opacity-30 z-10 flex items-center h-full"
          style={{ left: "-5%" }}
        >
          <div className="text-8xl md:text-9xl font-bold relative overflow-visible h-fit">
            [
          </div>
        </div>
        
        {/* Logo with glitch effect */}
        <div ref={logoRef} className="relative w-56 sm:w-72 z-20 mx-16">
          <div className="absolute inset-0 glitch-layer layer1"></div>
          <div className="absolute inset-0 glitch-layer layer2"></div>
          <Image
            src={actualLogoSrc}
            alt={actualLogoAlt}
            width={width}
            height={height}
            className="relative w-full h-auto"
          />
        </div>
        
        {/* Right bracket */}
        <div 
          ref={rightBracketRef}
          className="absolute right-0 text-red-600 opacity-30 z-10 flex items-center h-full"
          style={{ right: "-5%" }}
        >
          <div className="text-8xl md:text-9xl font-bold relative overflow-visible h-fit">
            ]
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicBracketLogo;