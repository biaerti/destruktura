// src/components/icons/ExplosionIcon.tsx
import React from "react";

export function ExplosionIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path
        d="
          M50,5
          L65,35
          L95,40
          L70,60
          L75,90
          L50,75
          L25,90
          L30,60
          L5,40
          L35,35
          Z
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  );
}
