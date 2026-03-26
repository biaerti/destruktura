import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroParticles from '../../components/HeroParticles';
import DynamicBracketLogo from '../../components/DynamicBracketLogo';
import { FaInstagram } from 'react-icons/fa';

const stats = [
  { label: 'Z kim walczymy?', value: 'Pro-life i Pro-choice' },
  { label: 'O kogo walczymy?', value: 'Dzieci w domach dziecka' },
  { label: 'Orientacja polityczna', value: 'Antypolaryzujący' },
];

const team = [
  {
    name: 'Bartosz Kuniński',
    role: 'Koncept & Strategia',
    instagram: 'https://www.instagram.com/b.aerti/',
  },
  {
    name: 'Destruktura Team',
    role: 'Realizacja kampanii',
    instagram: 'https://www.instagram.com/destruktura_/',
  },
];

export default function AboTaxPage() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>AboTax / Fundusz Rekompensaty Społecznej – Destruktura</title>
        <meta name="description" content="Systemowe rozwiązanie kończące wojnę kulturową wokół aborcji. Win-win dla obu stron, bo skupiamy się na tym co naprawdę ważne – dzieciach." />
      </Head>

      <Header />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a365d]/60 via-black to-[#1A5F5A]/40" />
        </div>

        <div className="absolute inset-0 z-10">
          <HeroParticles onBurst={() => {}} fullWidth={false} />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-[#c9a227] uppercase tracking-widest text-sm mb-4 font-semibold">
            Inicjatywa obywatelska
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
            AboTax
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-[#c9a227] font-semibold">
            Fundusz Rekompensaty Społecznej
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Pierwsze systemowe rozwiązanie, które kończy wojnę kulturową —
            bo skoro nie możemy się dogadać, niech dogada się matematyka.
          </p>
          <Link
            href="https://abotax.pl/petycja"
            target="_blank"
            className="mt-8 inline-block bg-[#1a365d] hover:bg-[#2d4a7c] border border-[#c9a227]/40 text-white font-bold px-8 py-3 rounded-lg transition-all"
          >
            ✍️ Podpisz petycję
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-[#1a365d]/20 border border-[#1a365d]/50 p-6 rounded-lg text-center">
              <h4 className="text-sm uppercase text-[#c9a227]">{label}</h4>
              <p className="mt-2 text-xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOGO */}
      <div className="flex justify-center mt-4 mb-12">
        <DynamicBracketLogo
          logoSrc="https://abotax.pl/logo_abotax.png"
          logoAlt="AboTax Logo"
          width={300}
          height={300}
        />
      </div>

      {/* MAIN CONTENT */}
      <section className="prose prose-invert max-w-3xl mx-auto pb-12 px-4 space-y-6">
        <h3 className="text-2xl mb-4">Koniec wojny, czas na rozwiązanie</h3>

        <p>
          Od dekad spór o aborcję dzieli Polskę na dwa obozy, które nie potrafią się porozumieć.
          Pro-life i pro-choice okopały się po swoich stronach, a jedyną ofiarą tego pata są dzieci —
          te, które mogłyby trafić do domów dziecka, i te, które już w nich są.
        </p>

        <p>
          <strong>AboTax</strong> to projekt obywatelski, który proponuje coś innego: systemowe rozwiązanie
          oparte na <span className="text-[#c9a227]">ekonomii</span>, nie na moralności.
          Zamiast pytać kto ma rację — pytamy: <em>jak sprawić, żeby obie strony wygrały?</em>
        </p>

        <div className="bg-[#1a365d]/20 border border-[#1a365d]/50 p-6 rounded-lg my-8">
          <h4 className="text-xl mb-4 text-center text-[#c9a227]">Jak to działa?</h4>
          <ul className="space-y-3">
            <li>⚖️ <strong>Aborcja pozostaje legalna</strong> — prawo wyboru zostaje</li>
            <li>💰 <strong>Za każdy zabieg</strong> — równowartość kosztów trafia do domów dziecka</li>
            <li>👶 <strong>Klinika dolicza opłatę solidarnościową</strong> do faktury</li>
            <li>🔒 <strong>Pacjentka pozostaje w pełni anonimowa</strong></li>
            <li>🏠 <strong>100% środków</strong> → etaty opiekunów w domach dziecka</li>
          </ul>
        </div>

        <h3 className="text-2xl mb-4">Win-win dla obu stron</h3>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-[#1A5F5A]/20 p-6 rounded-lg border border-[#1A5F5A]/50">
            <h4 className="text-lg font-bold mb-3 text-[#1A5F5A]" style={{color: '#4ade80'}}>Dla pro-choice</h4>
            <p>Zachowujesz prawo wyboru. Aborcja jest legalna, bezpieczna i dostępna. Bez kary, bez wstydu.</p>
          </div>
          <div className="bg-[#1a365d]/20 p-6 rounded-lg border border-[#1a365d]/50">
            <h4 className="text-lg font-bold mb-3" style={{color: '#c9a227'}}>Dla pro-life</h4>
            <p>Każda decyzja o aborcji bezpośrednio finansuje opiekę nad dziećmi. System ratuje życia przez ekonomię, nie przez zakazy.</p>
          </div>
        </div>

        <p>
          System <strong>samofinansuje się</strong> — szacowane wpływy pokrywają wszystkie wydatki,
          a nadwyżka trafia bezpośrednio do domów dziecka. <strong>Zero kosztów dla budżetu państwa.</strong>
        </p>

        <h3 className="text-2xl mb-4">Kampania społeczna</h3>

        <p>Destruktura stworzyła kompleksową kampanię edukacyjną obejmującą:</p>

        <ul className="space-y-2">
          <li>🛜 <strong>Stronę internetową</strong> z pełnym opisem projektu i projektem ustawy</li>
          <li>✍️ <strong>Petycję obywatelską</strong> otwartą na podpisy</li>
          <li>📊 <strong>Infografiki</strong> wyjaśniające mechanizm</li>
          <li>📱 <strong>Posty</strong> na social media</li>
          <li>💬 <strong>Q&A na Instagramie</strong> — odpowiedzi na wszystkie wątpliwości</li>
        </ul>

        <div className="bg-[#1a365d]/30 border border-[#c9a227]/30 p-8 rounded-lg my-8 text-center">
          <h4 className="text-2xl mb-4">Sprawdź pełną analizę</h4>
          <p className="mb-6 text-gray-300">
            Szczegółowy opis systemu, projekt ustawy i kalkulacje finansowe znajdziesz na oficjalnej stronie:
          </p>
          <Link
            href="https://abotax.pl"
            target="_blank"
            className="inline-block bg-[#1a365d] hover:bg-[#2d4a7c] border border-[#c9a227]/50 text-white font-bold px-8 py-3 rounded-lg transition-all"
          >
            Przejdź do abotax.pl →
          </Link>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#1a365d]/10 border-t border-[#1a365d]/30 py-12 px-4">
        <h3 className="text-3xl text-center mb-8">Twórcy projektu</h3>
        <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {team.map(({ name, role, instagram }) => (
            <li key={name} className="flex flex-col items-center">
              <span className="font-semibold">{name}</span>
              <span className="text-sm text-gray-400">{role}</span>
              <div className="flex space-x-4 mt-2">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-[#c9a227] transition-colors" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-[#1a365d]/20 p-8 rounded-2xl border border-[#c9a227]/30">
          <h3 className="text-3xl mb-4">Podpisz petycję</h3>
          <p className="mb-6 text-lg text-gray-300">
            Jeśli wierzysz, że dialog jest możliwy i że można skupić się na dzieciach
            zamiast na wojnie kulturowej — dołącz do nas.
          </p>
          <Link
            href="https://abotax.pl/petycja"
            target="_blank"
            className="inline-block bg-[#1a365d] hover:bg-[#2d4a7c] border border-[#c9a227] text-white font-bold px-10 py-4 rounded-lg text-lg transition-all"
          >
            Podpisz petycję na abotax.pl →
          </Link>
        </div>
      </section>

      {/* BACK */}
      <div className="py-8 text-center">
        <Link
          href="/#projects"
          className="inline-block py-3 px-6 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors"
        >
          ← Wróć do wszystkich projektów
        </Link>
      </div>

      <Footer />
    </div>
  );
}
