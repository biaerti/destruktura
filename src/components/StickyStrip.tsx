// src/components/StickyStrip.tsx - Improve mobile layout
"use client";
import Image from "next/image";

export default function StickyStrip() {
  return (
    <section id="sticky-strip" className="w-full bg-black pt-0 pb-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image src="/logo.svg" alt="Destruktura logo" width={160} height={64} />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-white font-sans text-lg md:text-xl leading-relaxed" style={{ fontSize: '22px' }}>
            Jesteśmy kolektywem twórców, którzy nie boją się niewygodnych tematów.
            Robimy kampanie społeczne i marketingowe, które przebijają się przez szum —
            bo głośno mówimy o sprawach przemilczanych i przewracamy tematy do góry nogami.
          </p>
          <p className="text-white font-sans text-lg md:text-xl leading-relaxed" style={{ fontSize: '22px' }}>
            Wspieramy także organizacje pozarządowe, instytucje publiczne i odważne
            marki, które pragną wyjść poza utarte <strong>struktury</strong>.
            Opracowujemy niekonwencjonalne strategie, które pomogą Twojej marce
            podkręcić obroty i zdobyć{" "}<strong>
            <span className="text-[#b30000]">czerwoną</span></strong>{" "}kartę w świecie
            przeciętności.
          </p>
        </div>
      </div>
    </section>
  );
}