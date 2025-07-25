// src/components/ProcessStepper.tsx
"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  PencilSquareIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import ExplosionIcon from "../assets/icons/3trojkaty.svg";

const steps = [
  { Icon: PencilSquareIcon,  title: "Brief",        desc: "Zbieramy problem i wyzwania." },
  { Icon: BeakerIcon,         title: "Laboratorium", desc: "Badanie, research, koncept." },
  { Icon: ExplosionIcon,      title: "Eksplozja",    desc: "Produkcja kampanii." },
  { Icon: RocketLaunchIcon,   title: "Launch",       desc: "Wypuszczamy i robimy szum." },
];

export default function ProcessStepper() {
  const containerRef = useRef<HTMLElement>(null);
  const iconRefs     = useRef<Array<SVGSVGElement | null>>(Array(steps.length).fill(null));

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

    // 3) Rysujemy Launch od 2.2s
    const launchEl = iconRefs.current[3];
    if (launchEl) {
      const launchPaths = Array.from(launchEl.querySelectorAll<SVGPathElement>("path"));
      tl.to(launchPaths, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }, 2.2);
    }
  }, []);

  return (
    <section id="process" ref={containerRef} className="bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map(({ Icon, title, desc }, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Icon
                ref={(el: SVGSVGElement | null) => {
                  iconRefs.current[idx] = el;
                }}
                className="w-14 h-14 mb-4 fill-none stroke-primary stroke-[2]"
              />
              <h3 className="font-semibold text-lg mb-2 uppercase tracking-wider">
                {title}
              </h3>
              <p className="text-sm opacity-80 max-w-[12rem]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
