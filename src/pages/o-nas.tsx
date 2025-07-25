// src/pages/o-nas.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroParticles from '@/components/HeroParticles';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>O nas - Destruktura</title>
        <meta name="description" content="Poznaj ludzi tworzących Destrukturę - kreatywną agencję kampanii społecznych, która łamie dotychczasowe schematy." />
        {/* Dodanie czcionki Montserrat */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      {/* Hero section with particles */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <HeroParticles onBurst={() => {}} fullWidth={false} />
        </div>
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight mb-4">
            Kim jesteśmy
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Grupa pasjonatów, których łączy zamiłowanie do kontrowersji i kreatywnych projektów
          </p>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-black text-white">
        {/* Philosophy section - poprawiony nagłówek */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-montserrat font-normal mb-8">Nasza filozofia</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              Destruktura powstała z zapału do tworzenia czegoś nowego. Jesteśmy grupą pasjonatów, którzy łączą się w różnych konfiguracjach do realizacji konkretnych projektów.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Nazwa Destruktura nie tylko nawiązuje do tego, że w naszych projektach czasem kogoś lub coś "niszczymy" – pokazując nowe perspektywy i łamiąc dotychczasowe schematy – ale również obrazuje nasz proces pracy. Tworzymy, iterujemy, wyrzucamy i budujemy na nowo, aż osiągniemy zamierzony efekt.
            </p>
            <p className="text-xl leading-relaxed">
              Pracujemy w ciągłym napięciu między destrukcją i konstrukcją. W fizyce cząstki zderzają się, by uwolnić energię. W kulturze – idee. W tym procesie – my jesteśmy zderzaczem.
            </p>
          </div>
        </section>

        {/* Team section - poprawiony nagłówek */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-montserrat font-normal mb-8">Lab Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Bartosz - dodany adres e-mail */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-6 w-64 h-64 overflow-hidden rounded-xl border-2 border-red-600">
                  <Image
                    src="/bart.jpg"
                    alt="Bartosz Kuniński"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Bartosz Kuniński</h3>
                <p className="text-red-600 uppercase tracking-wider text-sm mb-4">Chief Experiments Operator</p>
                
                <p className="text-gray-300 mb-4">
                  Długo tworzył muzykę jako biaerti, następnie slamował na slamach poetyckich, występując na VIII Ogólnopolskich Mistrzostwach Slamu Poetyckiego. Całe życie pisze teksty wyłamujące się poza utarte schematy.
                </p>
                <p className="text-gray-300 mb-4">
                  Z wykształcenia psycholog, co pozwala mu głęboko rozumieć reakcje społeczne. Z zawodu zajmuje się także automatyzacjami procesów biznesowych, co daje mu szersze spojrzenie na funkcjonowanie biznesu.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-2">
                  <a 
                    href="https://www.instagram.com/b.aerti/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <FaInstagram className="mr-2" />
                    <span>@b.aerti</span>
                  </a>
                  <a 
                    href="mailto:bartosz.kuninski@destruktura.pl" 
                    className="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
              
              {/* Vladyslav - dodany adres e-mail */}
              <div className="flex flex-col items-center md:items-start">
                <div className="relative mb-6 w-64 h-64 overflow-hidden rounded-xl border-2 border-red-600">
                  <Image
                    src="/vlad.jpg"
                    alt="Vladyslav Panchenco"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">Vladyslav Panchenco</h3>
                <p className="text-red-600 uppercase tracking-wider text-sm mb-4">Chief Visual Alchemist</p>
                
                <p className="text-gray-300 mb-4">
                  Reżyser, operator i designer, który ogarnia całą wizualną stronę projektów. Zawodowo długo tworzył filmy reklamowe produktów dla dużych marek. Jego największą inspiracją jest m.in. David Fincher.
                </p>
                <p className="text-gray-300 mb-4">
                  Odpowiada za szczegóły przy opracowywaniu planu kampanii. Lubi wykorzystywać i mieszać różne nieoczywiste techniki post-produkcji, tworząc w video coś czego jeszcze nie było, wyróżniając tym samym markę.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-2">
                  <a 
                    href="https://www.instagram.com/vlp_vision_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <FaInstagram className="mr-2" />
                    <span>@vlp_vision_</span>
                  </a>
                  <a 
                    href="mailto:vladyslav.panchenco@destruktura.pl" 
                    className="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <FaEnvelope className="mr-2" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Jak pracujemy section - poprawiona animacja */}
        <section className="max-w-4xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-montserrat font-normal mb-8">Jak pracujemy</h2>
          
          <div className="relative" style={{ minHeight: "500px" }}>
            {/* Tło dla animacji - siatka odniesienia */}
            <div className="absolute inset-0 z-0 hidden md:block">
              <div className="absolute w-px h-px top-1/4 left-1/4 bg-red-600/5" id="point-1"></div>
              <div className="absolute w-px h-px top-1/4 right-1/4 bg-red-600/5" id="point-2"></div>
              <div className="absolute w-px h-px bottom-1/4 right-1/4 bg-red-600/5" id="point-3"></div>
              <div className="absolute w-px h-px bottom-1/4 left-1/4 bg-red-600/5" id="point-4"></div>
              
              {/* Linie łączące punkty dla wizualizacji ścieżki */}
              <div className="absolute h-px top-1/4 left-1/4 right-1/4 bg-red-600/5"></div>
              <div className="absolute w-px top-1/4 bottom-1/4 right-1/4 bg-red-600/5"></div>
              <div className="absolute h-px bottom-1/4 left-1/4 right-1/4 bg-red-600/5"></div>
              <div className="absolute w-px top-1/4 bottom-1/4 left-1/4 bg-red-600/5"></div>
            </div>
            
            {/* Animowany element energii */}
            <div className="absolute inset-0 z-10 hidden md:block pointer-events-none overflow-visible">
              {/* Główna kula energii */}
              <div className="energy-orb"></div>
              
              {/* Ślady energii */}
              <div className="energy-path path-1"></div>
              <div className="energy-path path-2"></div>
              <div className="energy-path path-3"></div>
              <div className="energy-path path-4"></div>
            </div>
            
            {/* Kafelki procesu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-5">
              {/* 1. Destrukcja (top left) */}
              <div className="process-card card-1 bg-gray-800/80 p-6 rounded-lg relative" id="step-1">
                <span className="absolute top-4 right-4 text-red-600 text-sm font-bold">01</span>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Destrukcja</h3>
                <p className="text-gray-300">
                  Zaczynamy od rozbijania schematów, kwestionowania powszechnie przyjętych założeń i analizy problemu z nietypowych perspektyw. Nie boimy się kontrowersji ani trudnych tematów – w chaos potrafi zrodzić się najlepsza energia twórcza.
                </p>
              </div>
              
              {/* 2. Konstrukcja (top right) */}
              <div className="process-card card-2 bg-gray-800/80 p-6 rounded-lg relative" id="step-2">
                <span className="absolute top-4 right-4 text-red-600 text-sm font-bold">02</span>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Konstrukcja</h3>
                <p className="text-gray-300">
                  Z zebranych fragmentów i nowych perspektyw budujemy rozwiązania, które przykuwają uwagę i zmuszają do refleksji. Całość przepuszczamy przez sito iteracji – tworzymy, testujemy, przebudowujemy, aż osiągniemy zamierzony efekt.
                </p>
              </div>
              
              {/* 3. Szlif (bottom right) */}
              <div className="process-card card-3 bg-gray-800/80 p-6 rounded-lg relative order-last md:order-3" id="step-3">
                <span className="absolute top-4 right-4 text-red-600 text-sm font-bold">04</span>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Efekt</h3>
                <p className="text-gray-300">
                To faza, w której krystalizuje się ostateczna forma przekazu.Końcowy rezultat zawsze ma silny ładunek emocjonalny i skłania do refleksji. Nasze projekty nie tylko przykuwają uwagę, ale również inicjują zmianę. Jeśli efekt nie spełnia naszych oczekiwań, powtarzamy cały proces od początku – sama Destruktura jest procesem, który nie kończy się, dopóki nie osiągniemy zamierzonego rezultatu.
                </p>
              </div>
              
              {/* 4. Efekt (bottom left) */}
              <div className="process-card card-4 bg-gray-800/80 p-6 rounded-lg relative order-3 md:order-4" id="step-4">
                <span className="absolute top-4 right-4 text-red-600 text-sm font-bold">03</span>
                <h3 className="text-xl font-semibold mb-4 text-red-600">Szlif</h3>
                <p className="text-gray-300">
                Wygładzamy ostre krawędzie, dopracowujemy szczegóły, analizujemy potencjalne przypadki użycia. Nasz zespół specjalistów wnosi unikalne perspektywy i pomaga udoskonalić projekt tak, by rezonował z odbiorcami. To faza, w której krystalizuje się ostateczna forma przekazu.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Style dla animacji */}
      <style jsx global>{`
        /* Font Montserrat */
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
        
        /* Główna kula energii */
        .energy-orb {
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.2);
          filter: blur(5px);
          box-shadow: 
            0 0 10px 5px rgba(239, 68, 68, 0.5),
            0 0 20px 10px rgba(239, 68, 68, 0.3),
            0 0 30px 15px rgba(239, 68, 68, 0.1);
          transform: translate(-50%, -50%);
          z-index: 15;
          animation: moveEnergyOrb 16s infinite;
        }
        
        /* Ścieżki energii */
        .energy-path {
          position: absolute;
          background: linear-gradient(90deg, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0.7), rgba(239, 68, 68, 0));
          opacity: 0;
          filter: blur(5px);
          z-index: 5;
        }
        
        /* Ścieżka 1: od punktu 1 do punktu 2 (pozioma, góra) */
        .path-1 {
          top: calc(25% - 2px);
          left: 25%;
          height: 4px;
          width: 0;
          animation: showPath1 16s infinite;
        }
        
        /* Ścieżka 2: od punktu 2 do punktu 3 (pionowa, prawa) */
        .path-2 {
          top: 25%;
          right: calc(25% - 2px);
          width: 4px;
          height: 0;
          animation: showPath2 16s infinite;
        }
        
        /* Ścieżka 3: od punktu 3 do punktu 4 (pozioma, dół) */
        .path-3 {
          bottom: calc(25% - 2px);
          right: 25%;
          height: 4px;
          width: 0;
          transform-origin: right center;
          animation: showPath3 16s infinite;
        }
        
        /* Ścieżka 4: od punktu 4 do punktu 1 (pionowa, lewa) */
        .path-4 {
          bottom: 25%;
          left: calc(25% - 2px);
          width: 4px;
          height: 0;
          transform-origin: bottom center;
          animation: showPath4 16s infinite;
        }
        
        /* Animacja poruszającej się kuli energii */
        @keyframes moveEnergyOrb {
          /* Start w punkcie 1 (Destrukcja) */
          0%, 100% {
            left: 25%;
            top: 25%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          
          /* Pojawienie się w punkcie 1 */
          2% {
            left: 25%;
            top: 25%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          
          /* Zatrzymanie w punkcie 1 (Destrukcja) */
          4%, 19% {
            left: 25%;
            top: 25%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          
          /* Ruch do punktu 2 (Konstrukcja) */
          24% {
            left: 75%;
            top: 25%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          
          /* Zatrzymanie w punkcie 2 (Konstrukcja) */
          29%, 44% {
            left: 75%;
            top: 25%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          
          /* Ruch do punktu 3 (Szlif) - Prawy dolny róg */
          49% {
            left: 75%;
            top: 75%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          
          /* Zatrzymanie w punkcie 3 (Szlif) - Prawy dolny róg */
          54%, 69% {
            left: 75%;
            top: 75%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          
          /* Ruch do punktu 4 (Efekt) - Lewy dolny róg */
          74% {
            left: 25%;
            top: 75%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          
          /* Zatrzymanie w punkcie 4 (Efekt) - Lewy dolny róg */
          79%, 94% {
            left: 25%;
            top: 75%;
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
          
          /* Zanikanie przed powrotem do punktu 1 */
          98% {
            left: 25%;
            top: 25%;
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
        }
        
        /* Animacje dla ścieżek energii */
        @keyframes showPath1 {
          0%, 4%, 98%, 100% {
            opacity: 0;
            width: 0;
          }
          
          /* Rozpoczęcie animacji ścieżki od punktu 1 do punktu 2 */
          19% {
            opacity: 0.7;
            width: 0;
            left: 25%;
          }
          
          /* Zakończenie animacji ścieżki od punktu 1 do punktu 2 */
          24% {
            opacity: 0.7;
            width: 50%;
            left: 25%;
          }
          
          /* Wygaszenie ścieżki */
          29% {
            opacity: 0;
            width: 50%;
            left: 25%;
          }
        }
        
        @keyframes showPath2 {
          0%, 29%, 100% {
            opacity: 0;
            height: 0;
          }
          
          /* Rozpoczęcie animacji ścieżki od punktu 2 do punktu 3 */
          44% {
            opacity: 0.7;
            height: 0;
            top: 25%;
          }
          
          /* Zakończenie animacji ścieżki od punktu 2 do punktu 3 */
          49% {
            opacity: 0.7;
            height: 50%;
            top: 25%;
          }
          
          /* Wygaszenie ścieżki */
          54% {
            opacity: 0;
            height: 50%;
            top: 25%;
          }
        }
        
        @keyframes showPath3 {
          0%, 54%, 100% {
            opacity: 0;
            width: 0;
          }
          
          /* Rozpoczęcie animacji ścieżki od punktu 3 do punktu 4 */
          69% {
            opacity: 0.7;
            width: 0;
            right: 25%;
          }
          
          /* Zakończenie animacji ścieżki od punktu 3 do punktu 4 */
          74% {
            opacity: 0.7;
            width: 50%;
            right: 25%;
          }
          
          /* Wygaszenie ścieżki */
          79% {
            opacity: 0;
            width: 50%;
            right: 25%;
          }
        }
        
        @keyframes showPath4 {
          0%, 79%, 100% {
            opacity: 0;
            height: 0;
          }
          
          /* Rozpoczęcie animacji ścieżki od punktu 4 do punktu 1 */
          94% {
            opacity: 0.7;
            height: 0;
            bottom: 25%;
          }
          
          /* Zakończenie animacji ścieżki od punktu 4 do punktu 1 */
          98% {
            opacity: 0.7;
            height: 50%;
            bottom: 25%;
          }
          
          /* Wygaszenie ścieżki */
          100% {
            opacity: 0;
            height: 50%;
            bottom: 25%;
          }
        }
        
        /* Animacje dla kafelków */
        .process-card {
          transition: all 0.3s ease-in-out;
          border: 1px solid transparent;
        }
        
        /* Animacja aktywacji kafelka 1 (Destrukcja) */
        .card-1 {
          animation: activateCard1 16s infinite;
        }
        
        @keyframes activateCard1 {
          0%, 2%, 98%, 100% {
            box-shadow: none;
            border-color: transparent;
          }
          4%, 19% {
            box-shadow: 0 0 20px 5px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.5);
          }
          21%, 96% {
            box-shadow: none;
            border-color: transparent;
          }
        }
        
        /* Animacja aktywacji kafelka 2 (Konstrukcja) */
        .card-2 {
          animation: activateCard2 16s infinite;
        }
        
        @keyframes activateCard2 {
          0%, 26%, 100% {
            box-shadow: none;
            border-color: transparent;
          }
          29%, 44% {
            box-shadow: 0 0 20px 5px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.5);
          }
          46%, 98% {
            box-shadow: none;
            border-color: transparent;
          }
        }
        
        /* Animacja aktywacji kafelka 4 (Efekt) - najpierw świeci się Efekt */
        .card-4 {
          animation: activateCard4 16s infinite;
        }
        
        @keyframes activateCard4 {
          0%, 51%, 100% {
            box-shadow: none;
            border-color: transparent;
          }
          54%, 69% {
            box-shadow: 0 0 20px 5px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.5);
          }
          71%, 98% {
            box-shadow: none;
            border-color: transparent;
          }
        }
        
        /* Animacja aktywacji kafelka 3 (Szlif) - potem świeci się Szlif */
        .card-3 {
          animation: activateCard3 16s infinite;
        }
        
        @keyframes activateCard3 {
          0%, 76%, 100% {
            box-shadow: none;
            border-color: transparent;
          }
          79%, 94% {
            box-shadow: 0 0 20px 5px rgba(239, 68, 68, 0.3);
            border-color: rgba(239, 68, 68, 0.5);
          }
          96%, 98% {
            box-shadow: none;
            border-color: transparent;
          }
        }
        
        /* Dodatkowy efekt wewnętrznego blasku aktywnego kafelka */
        .process-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: radial-gradient(circle at center, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0));
          opacity: 0;
          transition: all 0.3s ease-in-out;
          pointer-events: none;
        }
        
        .card-1::after {
          animation: innerGlow1 16s infinite;
        }
        
        .card-2::after {
          animation: innerGlow2 16s infinite;
        }
        
        .card-4::after {
          animation: innerGlow4 16s infinite;
        }
        
        .card-3::after {
          animation: innerGlow3 16s infinite;
        }
        
        @keyframes innerGlow1 {
          0%, 2%, 21%, 100% {
            opacity: 0;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0));
          }
          4%, 7%, 16%, 19% {
            opacity: 0.1;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0));
          }
          10%, 13% {
            opacity: 0.15;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0));
          }
        }
        
        @keyframes innerGlow2 {
          0%, 27%, 46%, 100% {
            opacity: 0;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0));
          }
          29%, 32%, 41%, 44% {
            opacity: 0.1;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0));
          }
          35%, 38% {
            opacity: 0.15;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0));
          }
        }
        
        @keyframes innerGlow4 {
          0%, 52%, 71%, 100% {
            opacity: 0;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0));
          }
          54%, 57%, 66%, 69% {
            opacity: 0.1;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0));
          }
          60%, 63% {
            opacity: 0.15;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0));
          }
        }
        
        @keyframes innerGlow3 {
          0%, 77%, 96%, 100% {
            opacity: 0;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0), rgba(239, 68, 68, 0));
          }
          79%, 82%, 91%, 94% {
            opacity: 0.1;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0));
          }
          85%, 88% {
            opacity: 0.15;
            background: radial-gradient(circle at center, rgba(239, 68, 68, 0.15), rgba(239, 68, 68, 0));
          }
        }
        
        /* Dodatkowy efekt punktu kulminacyjnego energii - impuls energii przy zatrzymaniu */
        @keyframes energyPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        
        /* Dodatkowy blask kuli energii w momentach zatrzymania */
        .energy-orb::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 40px;
          height: 40px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%);
          filter: blur(8px);
          opacity: 0;
          pointer-events: none;
          animation: orbGlow 16s infinite;
        }
        
        @keyframes orbGlow {
          0%, 3%, 20%, 28%, 45%, 53%, 70%, 78%, 95%, 100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          
          /* Efekt w punkcie 1 (Destrukcja) */
          10%, 13% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
          
          /* Efekt w punkcie 2 (Konstrukcja) */
          35%, 38% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
          
          /* Efekt w punkcie 4 (Efekt) - teraz trzeci w kolejności */
          60%, 63% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
          
          /* Efekt w punkcie 3 (Szlif) - teraz czwarty w kolejności */
          85%, 88% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
        }
      `}</style>
    </>
  );
}