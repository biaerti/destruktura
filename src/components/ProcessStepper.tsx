// src/components/ProcessStepper.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  PencilSquareIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
// Inline SVG 3 trójkąty - logo Destruktury (Turbopack nie obsługuje @svgr/webpack)
const ExplosionIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" viewBox="241.1 229 177 100" {...props}>
      <defs>
        <linearGradient id="exp-gradient" x1="241" y1="279" x2="418" y2="279" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e8eaea"/>
          <stop offset="0.4" stopColor="#c34348"/>
          <stop offset="1" stopColor="#bb1e24"/>
        </linearGradient>
      </defs>
      <path
        fill="url(#exp-gradient)"
        d="M 331.1 234 L 310.1 304 L 241.1 304 L 331.1 234 M 418.1 229 L 343.1 234 L 345.1 275 L 418.1 229 Z M 385.1 281 L 360.1 299 L 386.1 329 L 385.1 281 Z"
      />
    </svg>
  )
);
ExplosionIcon.displayName = 'ExplosionIcon';

const steps = [
  { 
    Icon: PencilSquareIcon,  
    title: "Brief",        
    desc: "Zbieramy problem i wyzwania.",
    expandedDesc: "Siadamy, gadamy i rozkładamy Twój problem na czynniki pierwsze. To nie marketingowy brief z szablonu – to sesja strategiczna, gdzie wyciągamy prawdziwe wyzwania i znajdujemy lukę, którą można eksplodować. Wychodzimy z konkretnym planem ataku."
  },
  { 
    Icon: BeakerIcon,         
    title: "Laboratorium", 
    desc: "Badanie, research, koncept.",
    expandedDesc: "Wchodzimy w głąb tematu jak detektywi. Sprawdzamy co robi konkurencja, gdzie są białe plamy, jak myśli Twoja grupa docelowa. Budujemy koncepcję, która nie będzie kolejną nudną kampanią, tylko czymś co zatrzyma ludzi w scrollu. Tu powstaje strategia i pierwsze szkice."
  },
  { 
    Icon: ExplosionIcon,      
    title: "Eksplozja",    
    desc: "Produkcja kampanii.",
    expandedDesc: "Realizujemy wszystko od A do Z – kręcimy video, tworzymy serie postów, grafiki, automatyzacje social mediów z dashboardem do zarządzania. Kreatywne video, serie viralowych TikToków z wykorzystaniem najlepszych technik, posty na wszystkie platformy. To nie Google Ads ani nudny marketing mix, tylko pełnokrwista kreatywna kampania. Robimy hitmanstwo: gdy standardowe metody nie działają, my znajdziemy sposób żeby się przebić przez szum."
  },
  { 
    Icon: RocketLaunchIcon,   
    title: "Launch",       
    desc: "Wypuszczamy i robimy szum.",
    expandedDesc: "Odpalamy kampanię i pilnujemy żeby robiła robotę. Dostajesz kompletny plan wdrożenia, wszystkie materiały gotowe do publikacji, automaty skonfigurowane żebyś nie musiał siedzieć nad każdym postem, plus raport z całego procesu. Cel: ludzie mają gadać o Twojej marce."
  },
];

export default function ProcessStepper() {
  const containerRef = useRef<HTMLElement>(null);
  const iconRefs = useRef<Array<SVGSVGElement | null>>(Array(steps.length).fill(null));
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!containerRef.current) return;

    const svgs = iconRefs.current.filter((el): el is SVGSVGElement => !!el);

    // Ukrywamy stroke-dash dla Brief, Laboratorium i Launch
    svgs.forEach((svgEl, idx) => {
      if (idx === 2) return; // pomijamy Eksplozję
      svgEl.querySelectorAll<SVGPathElement>("path").forEach(path => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });
    });

    // Ukrywamy Eksplozję
    const explosionEl = iconRefs.current[2];
    if (explosionEl) gsap.set(explosionEl, { opacity: 0 });

    // Timeline uruchamiany raz przy scrollu do sekcji
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true,
      }
    });

    // 1) Rysujemy stroke-dash dla Brief i Laboratorium
    svgs.forEach((svgEl, idx) => {
      if (idx === 2) return;
      const paths = Array.from(svgEl.querySelectorAll<SVGPathElement>("path"));
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.5,
      }, idx * 0.5);
    });

    // 2) Fade-in Eksplozji po 1.2s
    tl.to(explosionEl, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }, 1.2);

    // 3) Rysujemy Launch od 3.2s (1s delay po Eksplozji)
    const launchEl = iconRefs.current[3];
    if (launchEl) {
      const launchPaths = Array.from(launchEl.querySelectorAll<SVGPathElement>("path"));
      tl.to(launchPaths, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }, 3.2);
    }
  }, []);

  return (
    <section id="process" ref={containerRef} className="bg-black text-white py-0">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map(({ Icon, title, desc, expandedDesc }, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center relative group cursor-pointer"
              onMouseEnter={() => setHoveredStep(idx)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <Icon
                ref={(el: SVGSVGElement | null) => {
                  iconRefs.current[idx] = el;
                }}
                className="w-14 h-14 mb-4 fill-none stroke-primary stroke-[2] transition-all duration-300 group-hover:scale-110 group-hover:stroke-red-500"
              />
              <h3 className="font-semibold text-lg mb-2 uppercase tracking-wider transition-colors duration-300 group-hover:text-red-500">
                {title}
              </h3>
              
              {/* Podstawowy opis - zawsze widoczny */}
              <p className={`text-sm opacity-80 max-w-[12rem] transition-all duration-300 ${hoveredStep === idx ? 'opacity-60' : ''}`}>
                {desc}
              </p>
              
              {/* Rozszerzony opis - pokazuje się na hover */}
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-gray-900 border border-red-600/30 rounded-lg p-4 w-96 max-w-md z-10 transition-all duration-300 ${
                hoveredStep === idx 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 translate-y-2 pointer-events-none'
              }`}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 border-l border-t border-red-600/30 rotate-45"></div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {expandedDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Główny opis pod spodem */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/20 to-black/40 border border-red-600/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-red-500" style={{ fontSize: '24px' }}>
              Tworzymy kampanie, które nie dają się zignorować
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed" style={{ fontSize: '18px' }}>
              Nie robimy kolejnych reklam Google Ads czy standardowych kampanii marketingowych. 
              Specjalizujemy się w kreatywnych prowokacjach, które przebijają się przez szum i zmuszają ludzi do reakcji. 
              Od koncepcji po wdrożenie – video, posty, serie, automatyzacje. 
              Wszystko po to, żeby Twoja marka przestała być niewidzialna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}