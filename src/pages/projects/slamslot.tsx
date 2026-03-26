import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroParticles from '../../components/HeroParticles';
import { FaInstagram } from 'react-icons/fa';

const stats = [
  { label: 'Dla kogo?', value: 'Organizatorzy slamów' },
  { label: 'Co rozwiązujemy?', value: 'Chaos z zapisami' },
  { label: 'Model', value: 'Bezpłatny' },
];

const features = [
  { icon: '✍️', title: 'Stwórz slam w kilka sekund', desc: 'Wypełniasz formularz, dostajesz link dla uczestników. Zero rejestracji, zero konfiguracji.' },
  { icon: '📋', title: 'Lista główna + rezerwowa', desc: 'System automatycznie zarządza miejscami i przesuwa uczestników z listy rezerwowej.' },
  { icon: '📧', title: 'Automatyczne potwierdzenia', desc: 'Każdy uczestnik dostaje email z potwierdzeniem zapisu od razu po zgłoszeniu.' },
  { icon: '🔔', title: 'Powiadomienia o miejscu', desc: 'Gdy ktoś zrezygnuje, kolejna osoba z rezerwowej automatycznie dostaje maila.' },
  { icon: '📊', title: 'Dashboard organizatora', desc: 'Zarządzasz listą z jednego widoku — przeciągasz karty, wysyłasz wiadomości do uczestników.' },
  { icon: '🔒', title: 'Bez rejestracji konta', desc: 'Uczestnik podaje tylko imię i email. Żadnych haseł, żadnych kont.' },
];

export default function SlamSlotPage() {
  return (
    <div className="bg-black text-white">
      <Head>
        <title>SlamSlot – Destruktura</title>
        <meta name="description" content="Narzędzie do zapisów na slamy poetyckie. Stwórz formularz w kilka sekund, zarządzaj listą z dashboardu." />
      </Head>

      <Header />

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-gray-900/50" />
        </div>
        <div className="absolute inset-0 z-10">
          <HeroParticles onBurst={() => {}} fullWidth={false} />
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
          <p className="text-red-500 uppercase tracking-widest text-sm mb-4 font-semibold">
            Narzędzie dla organizatorów
          </p>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight">
            Slam<span className="text-red-600">Slot</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Koniec z arkuszami Google i chaosem w komentarzach na Facebooku.
            Formularz zapisów na slam poetycki gotowy w kilka sekund.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="https://slamslot.pl"
              target="_blank"
              className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Przejdź do slamslot.pl →
            </Link>
            <Link
              href="https://slamslot.pl"
              target="_blank"
              className="inline-block border border-red-700 hover:bg-red-700/20 text-white font-bold px-8 py-3 rounded-lg transition-all"
            >
              Stwórz slam za darmo
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-gray-900 border border-red-700/30 p-6 rounded-lg text-center">
              <h4 className="text-sm uppercase text-red-500">{label}</h4>
              <p className="mt-2 text-xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Co dostaje organizator?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ icon, title, desc }) => (
            <div key={title} className="bg-gray-900/50 border border-gray-800 p-6 rounded-lg">
              <div className="text-2xl mb-3">{icon}</div>
              <h4 className="font-bold text-white mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JAK TO DZIAŁA */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold text-center mb-10">Jak to działa?</h3>
        <div className="space-y-6">
          {[
            { n: '1', title: 'Tworzysz slam', desc: 'Podajesz nazwę, datę, liczbę miejsc i email. Zajmuje to 30 sekund.' },
            { n: '2', title: 'Dostajesz dwa linki', desc: 'Link dla uczestników — wrzucasz na Facebooka. Link do dashboardu — tylko dla Ciebie.' },
            { n: '3', title: 'Uczestnicy się zapisują', desc: 'Wypełniają prosty formularz, dostają potwierdzenie na maila. Bez rejestracji.' },
            { n: '4', title: 'Zarządzasz z dashboardu', desc: 'Widzisz listę w czasie rzeczywistym, możesz przesuwać uczestników, wysyłać wiadomości.' },
          ].map(({ n, title, desc }) => (
            <div key={n} className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center font-bold text-lg flex-shrink-0">
                {n}
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* O PROJEKCIE */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <div className="bg-gray-900/50 border border-red-700/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Skąd się wziął SlamSlot?</h3>
          <p className="text-gray-300 mb-4">
            Środowisko slamowe w Polsce jest aktywne — slamy odbywają się co tydzień w dziesiątkach miast.
            Ale zapisy wciąż wyglądają tak samo: komentarz na Facebooku, arkusz Google, albo po prostu
            "wpadnij na miejsce". Chaos i brak informacji odstraszają nowych uczestników.
          </p>
          <p className="text-gray-300">
            SlamSlot to narzędzie stworzone przez Destrukturę, żeby to zmienić.
            Proste, bezpłatne i bez zbędnych komplikacji — bo organizator slamu nie powinien być
            zmuszony do bycia administratorem systemu.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-gradient-to-r from-red-900/30 to-gray-900/30 p-8 rounded-2xl border border-red-700/30">
          <h3 className="text-3xl mb-4">Organizujesz slam?</h3>
          <p className="mb-6 text-lg text-gray-300">
            Stwórz formularz zapisów w kilka sekund i wrzuć link na Facebooka.
          </p>
          <Link
            href="https://slamslot.pl"
            target="_blank"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold px-10 py-4 rounded-lg text-lg transition-all"
          >
            Stwórz slam na slamslot.pl →
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
