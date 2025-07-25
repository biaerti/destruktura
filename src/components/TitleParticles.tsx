// src/components/TitleParticles.tsx
import React from 'react';

interface TitleParticlesProps {
  count?: number;
  radius?: number;
}

export default function TitleParticles({
  count = 12,
  radius = 150,
}: TitleParticlesProps) {
  const dots = Array.from({ length: count }, (_, i) => i);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {dots.map((i) => {
        const delay = (Math.random() * 2).toFixed(2);
        const size = 8 + Math.random() * 6; // 8–14px
        return (
          <span
            key={i}
            className="orbit-dot block bg-red-600 rounded-full absolute"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animation: `orbit 6s linear infinite ${-delay}s`,
              ['--orbit-radius' as any]: `${radius + Math.random() * 40}px`,
            }}
          />
        );
      })}
    </div>
  );
}
