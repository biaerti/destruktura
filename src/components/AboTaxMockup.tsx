// src/components/AboTaxMockup.tsx
import React from 'react';
import Image from 'next/image';

type Props = {
  /** Jeśli musisz dodać niestandardowe klasy (np. układ), przekaż je tutaj. */
  className?: string;
};

/**
 * Telefon-mockup z ekranem kampanii AboTax.
 * Obudowa, ramka, światło i cieniowanie są identyczne jak w wersji landingowej.
 */
export default function AboTaxMockup({ className = '' }: Props) {
  return (
    <div className={`relative w-52 sm:w-64 md:w-72 lg:w-96 overflow-hidden rounded-2xl border-4 border-purple-600 shadow-[0_0_20px_rgba(124,77,255,0.6)] ${className}`}>
      <Image
        src="/mockup_abotax.png"           
        alt="Podgląd aplikacji AboTax na telefonie"
        width={845}
        height={1766}
        className="object-cover w-full h-auto"
        priority
      />
      {/* przyciemnienie góra/dół identyczne jak w landing page   */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/70" />
    </div>
  );
}
