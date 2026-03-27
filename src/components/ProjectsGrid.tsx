// src/components/ProjectsGrid.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
// dynamiczny import Lottie, ssr:false wyłącza ładowanie po stronie serwera
const Lottie = dynamic(() => import('lottie-react').then(m => m.default), { ssr: false });
// import animacji z folderu src/lottie
import comingSoonAnimation from '@/lottie/coming-soon.json';

const projects: { title: string; description: string; image: string | null; href: string }[] = [
  {
    title: 'Wolne Kible',
    description:
      'Inicjatywa wyzwolenia toalet na dworcach kolejowych spod jarzma opłat.',
    image: '/wolne_kible.svg',
    href: '/projects/wolne-kible',
  },
  {
    title: 'Misjonarze PTGA',
    description:
      'Eksperyment społeczny pokazujący, jak łatwo przyjmujemy to, co już wiemy — zamiast słuchać.',
    image: '/misjonarze_ptga.svg',
    href: '/projects/misjonarze-ptga',
  },
  // Abotax ukryty - projekt jeszcze nieopublikowany
  // { title: 'Abotax', description: '...', image: 'https://abotax.pl/logo_abotax.png', href: '/projects/abotax' },
  {
    title: 'SlamSlot',
    description:
      'Narzędzie do zapisów na slamy poetyckie. Formularz gotowy w kilka sekund, dashboard dla organizatora.',
    image: null,
    href: '/projects/slamslot',
  },
];

export default function ProjectsGrid() {
  return (
    <div className="container mx-auto pt-16 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="relative bg-black rounded-2xl overflow-hidden border-2 border-red-700 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <div className="relative w-full h-48 flex items-center justify-center bg-gray-900">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              ) : (
                <span
                  className="text-white font-black uppercase tracking-widest select-none"
                  style={{ fontSize: '3.2rem', fontFamily: "'Arial Black', Impact, sans-serif", letterSpacing: '0.08em' }}
                >
                  {project.title}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display text-white">
                {project.title}
              </h3>
              <p className="mt-2 font-sans text-gray-400">
                {project.description}
              </p>
              <Link
                href={project.href}
                className="mt-4 inline-block font-sans text-red-600 hover:text-red-500 font-semibold"
              >
                Dowiedz się więcej →
              </Link>
            </div>
          </div>
        ))}

        {/* ---- Coming Soon z animacją Lottie ---- */}
        <div className="flex flex-col items-center justify-center bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-600 p-6">
          <div className="w-32 h-32 mb-4">
            <Lottie
              animationData={comingSoonAnimation}
              loop
              autoplay
              style={{
                filter:
                  'invert(20%) sepia(95%) saturate(6000%) hue-rotate(350deg) brightness(90%) contrast(105%)',
              }}
            />
          </div>
          <h3 className="text-xl font-display mb-2 text-white">
            Coming Soon
          </h3>
          <p className="font-sans text-center text-gray-400">
            Kolejne projekty już wkrótce…
          </p>
        </div>
      </div>

    </div>
  );
}