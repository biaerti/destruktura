import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

// Opcja 5: Taśma "ZAKAZ WSTĘPU/UWAGA"
const CautionTapeFrame = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const topTapeRef = useRef(null);
  const bottomTapeRef = useRef(null);
  
  useEffect(() => {
    // Animacja przesuwania się taśmy
    gsap.to(topTapeRef.current, {
      backgroundPosition: "-200px 0",
      duration: 15,
      repeat: -1,
      ease: "linear"
    });
    
    gsap.to(bottomTapeRef.current, {
      backgroundPosition: "200px 0",
      duration: 15,
      repeat: -1,
      ease: "linear"
    });
    
    return () => {
      gsap.killTweensOf([topTapeRef.current, bottomTapeRef.current]);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-full max-w-3xl py-8">
        {/* Górna taśma "WOLNE KIBLE" */}
        <div 
          ref={topTapeRef}
          className="absolute top-0 left-0 w-full h-6 z-10"
          style={{
            background: "repeating-linear-gradient(45deg, #b30000, #b30000 20px, #000 20px, #000 40px)",
            transform: "rotate(-2deg)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}
        ></div>
        
        {/* Logo */}
        <div ref={logoRef} className="relative w-80 mx-auto sm:w-96 z-20 my-4">
          <Image
            src="/wolne_kible.svg"
            alt="Wolne Kible Logo"
            width={400}
            height={240}
            quality={100} 
            className="w-full h-auto"
            style={{ objectFit: 'contain' }}
          />
        </div>
        
        {/* Dolna taśma "WOLNE KIBLE" */}
        <div 
          ref={bottomTapeRef}
          className="absolute bottom-0 left-0 w-full h-6 z-10"
          style={{
            background: "repeating-linear-gradient(45deg, #b30000, #b30000 20px, #000 20px, #000 40px)",
            transform: "rotate(2deg)",
            boxShadow: "0 -2px 4px rgba(0,0,0,0.3)"
          }}
        ></div>
      </div>
    </div>
  );
};

// Opcja 6: Efekt "Spray Paint" / Szablon
const SprayPaintFrame = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const sprayRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sprayRefs.current.includes(el)) {
      sprayRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Animacja kapania/spływania farby
    sprayRefs.current.forEach((spray, index) => {
      const delay = index * 0.5;
      
      gsap.to(spray, {
        height: "+=2px",
        opacity: '-=0.05',
        duration: 2 + Math.random(),
        delay: delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    return () => {
      gsap.killTweensOf(sprayRefs.current);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-full max-w-3xl py-4">
        {/* Tło sprayu */}
        <div className="absolute inset-0 bg-black rounded-lg border border-gray-800 overflow-hidden">
          {/* Sprawy/kapnięcia */}
          <div 
            ref={addToRefs}
            className="absolute top-0 left-10 w-5 h-14 bg-red-600 rounded-b-lg opacity-60"
            style={{ filter: "blur(2px)" }}
          ></div>
          <div 
            ref={addToRefs}
            className="absolute top-0 right-12 w-3 h-10 bg-red-600 rounded-b-lg opacity-50"
            style={{ filter: "blur(1px)" }}
          ></div>
          <div 
            ref={addToRefs}
            className="absolute bottom-0 left-1/4 w-4 h-12 bg-red-600 rounded-t-lg opacity-60"
            style={{ filter: "blur(1.5px)" }}
          ></div>
          <div 
            ref={addToRefs}
            className="absolute bottom-0 right-1/3 w-6 h-16 bg-red-600 rounded-t-lg opacity-50"
            style={{ filter: "blur(2px)" }}
          ></div>
        </div>
        
        {/* Logo */}
        <div ref={logoRef} className="relative w-80 mx-auto sm:w-96 z-10 py-8">
          <Image
            src="/wolne_kible.svg"
            alt="Wolne Kible Logo"
            width={400}
            height={240}
            quality={100} 
            className="w-full h-auto"
            style={{ 
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.5))'
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Opcja 7: Elementy dekonstrukcji PKP (szyny/tory)
const RailwayFrame = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const leftRailRef = useRef(null);
  const rightRailRef = useRef(null);
  const tiesRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !tiesRefs.current.includes(el)) {
      tiesRefs.current.push(el);
    }
  };
  
  useEffect(() => {
    // Animacja wibracji szyn
    const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
    
    tl.to([leftRailRef.current, rightRailRef.current], {
      y: "-=1px",
      duration: 0.1,
      ease: "steps(1)"
    });
    
    tl.to([leftRailRef.current, rightRailRef.current], {
      y: "+=2px",
      duration: 0.1,
      ease: "steps(1)"
    });
    
    tl.to([leftRailRef.current, rightRailRef.current], {
      y: "-=1px",
      duration: 0.1,
      ease: "steps(1)"
    });
    
    // Animacja podkładów
    tiesRefs.current.forEach((tie, index) => {
      gsap.to(tie, {
        x: index % 2 === 0 ? "+=3px" : "-=3px",
        duration: 2,
        delay: index * 0.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    return () => {
      tl.kill();
      gsap.killTweensOf(tiesRefs.current);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-full max-w-3xl py-4">
        {/* Tory kolejowe dekonstrukcja PKP */}
        <div className="relative h-52 w-full">
          {/* Lewa szyna */}
          <div 
            ref={leftRailRef}
            className="absolute left-16 top-0 bottom-0 w-2 bg-red-700"
            style={{ boxShadow: "inset -1px 0 2px rgba(0,0,0,0.5)" }}
          ></div>
          
          {/* Prawa szyna */}
          <div 
            ref={rightRailRef}
            className="absolute right-16 top-0 bottom-0 w-2 bg-red-700"
            style={{ boxShadow: "inset 1px 0 2px rgba(0,0,0,0.5)" }}
          ></div>
          
          {/* Podkłady */}
          {[...Array(7)].map((_, i) => (
            <div 
              key={i} 
              ref={addToRefs}
              className="absolute w-full h-3 bg-red-800 opacity-75"
              style={{ top: `${i * 16.666}%` }}
            ></div>
          ))}
          
          {/* Logo */}
          <div ref={logoRef} className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-80 sm:w-96">
              <Image
                src="/wolne_kible.svg"
                alt="Wolne Kible Logo"
                width={400}
                height={240}
                quality={100} 
                className="w-full h-auto"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Opcja 8: Statyczna zakłócenia telewizyjne
const TVStaticFrame = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const staticRef = useRef(null);
  const noiseRef = useRef(null);
  
  useEffect(() => {
    // Animacja przesuwającej się linii zakłóceń
    gsap.to(noiseRef.current, {
      y: "-=100%",
      duration: 8,
      repeat: -1,
      ease: "none"
    });
    
    // Okazjonalny "glitch" całego kontenera
    const glitchEffect = () => {
      const tl = gsap.timeline();
      
      tl.to(containerRef.current, {
        x: () => Math.random() * 6 - 3,
        skewX: () => Math.random() * 4 - 2,
        duration: 0.1,
        ease: "steps(1)"
      });
      
      tl.to(containerRef.current, {
        x: 0,
        skewX: 0,
        duration: 0.1,
        ease: "steps(1)"
      });
      
      setTimeout(glitchEffect, Math.random() * 5000 + 2000);
    };
    
    glitchEffect();
    
    return () => {
      gsap.killTweensOf([noiseRef.current, containerRef.current]);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="flex justify-center my-12">
      <div className="relative w-96 sm:w-[32rem] h-48 overflow-hidden rounded border border-gray-800">
        {/* Warstwa statyczna */}
        <div 
          ref={staticRef}
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 250 250\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
          }}
        ></div>
        
        {/* Warstwa zakłóceń poziomych */}
        <div 
          ref={noiseRef}
          className="absolute inset-0 opacity-50"
          style={{ 
            background: "linear-gradient(0deg, transparent 0%, rgba(179, 0, 0, 0.2) 45%, rgba(179, 0, 0, 0.5) 50%, rgba(179, 0, 0, 0.2) 55%, transparent 100%)",
            height: "200%"
          }}
        ></div>
        
        {/* Logo */}
        <div ref={logoRef} className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-72 sm:w-80">
            <Image
              src="/wolne_kible.svg"
              alt="Wolne Kible Logo"
              width={400}
              height={240}
              quality={100} 
              className="w-full h-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        {/* Okazjonalne poziome linie */}
        <div className="absolute inset-x-0 top-1/4 h-px bg-red-600 opacity-80"></div>
        <div className="absolute inset-x-0 bottom-1/3 h-px bg-red-600 opacity-60"></div>
      </div>
    </div>
  );
};

// Połącz wszystkie nowe opcje w jeden komponent do demonstracji
const MoreFrameOptions = ({ option = 5 }) => {
  switch(option) {
    case 5:
      return <CautionTapeFrame />;
    case 6:
      return <SprayPaintFrame />;
    case 7:
      return <RailwayFrame />;
    case 8:
      return <TVStaticFrame />;
    default:
      return <CautionTapeFrame />;
  }
};

export default MoreFrameOptions;