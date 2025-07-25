// src/components/HeroParticles.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { loadDestroyUpdater } from "@tsparticles/updater-destroy";

// Dodajemy fullWidth do interfejsu props
interface Props {
  onBurst?: () => void;
  fullWidth?: boolean;
}

export default function HeroParticles({ onBurst, fullWidth = true }: Props) {
  const [ready, setReady] = useState(false);

  // 1️⃣ Inicjalizacja silnika + pełny bundle + destroy updater z refresh
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // 1.1 Załaduj pełny bundle (zawiera domyślnie updater-destroy)
      await loadFull(engine);
      // 1.2 Egzekutor pluginu destroy, wymuszony refresh modułów
      await loadDestroyUpdater(engine, true); 
    }).then(() => setReady(true));
  }, []);

  // 2️⃣ Wywołuj burst co 15s
  useEffect(() => {
    if (!ready || !onBurst) return;
    onBurst();
    const id = setInterval(onBurst, 15000);
    return () => clearInterval(id);
  }, [ready, onBurst]);

  // 3️⃣ Opcje z destroy:fade
  const options: ISourceOptions = useMemo(() => ({
    fullScreen:   { enable: fullWidth }, // Używamy fullWidth do kontrolowania fullScreen
    detectRetina: true,
    zIndex:       0,

    emitters: {
      life:     { duration: 0.1, count: 0 },
      rate:     { delay: 15, quantity: 50 },
      position: { x: 50, y: 50 },
      size:     { width: 0, height: 0 },
      shape:    'circle',
      fill:     true,
    },

    absorbers: [
      { position: { x: 8,  y: 8  }, size: { value: 80 }, color: { value: '#000' } },
      { position: { x: 92, y: 8  }, size: { value: 80 }, color: { value: '#000' } },
      { position: { x: 8,  y: 92 }, size: { value: 80 }, color: { value: '#000' } },
      { position: { x: 92, y: 92 }, size: { value: 80 }, color: { value: '#000' } },
    ],

    particles: {
      number: { value: 0 },
      shape:  { type: 'circle' },
      color:  { value: ['#b30000', '#ff4d4d'] },
      shadow: { enable: true, blur: 6, color: '#ff4d4d' },
      size:   {
        value:     { min: 4, max: 14 },
        animation: { enable: true, speed: 2, sync: false },
      },
      opacity: {
        value: 1,
        animation: {
          enable: false,  // Nie animujemy opacity bezpośrednio, destroy:fade to zrobi
        }
      },
      links: {
        enable:   true,
        distance: 110,
        color:    '#b30000',
        opacity:  0.75,
        width:    1,
      },
      move: {
        enable: true,
        speed:  { min: 3, max: 8 },
        decay:  0.05,
        outModes: { default: 'destroy' }, // usuwaj po zaniku
      },
      life: {
        duration: { value: { min: 10, max: 12 } },
      },
      destroy: {
        mode: 'fade',     // fade-out przez updater
        duration: 3,      // zwiększony czas zaniku (s)
        delay: 0,         // bez opóźnienia startu efektu
        split: {
          enabled: false  // nie dziel cząsteczek przy niszczeniu
        },
      },
    },
  }), [fullWidth]);

  if (!ready) return null;

  return (
    <Particles
      id="hero-molecules"
      options={options}
      className={
        fullWidth
          ? "fixed inset-0 pointer-events-none"
          : "absolute inset-0 w-full h-full pointer-events-none"
      }
    />
  );
}