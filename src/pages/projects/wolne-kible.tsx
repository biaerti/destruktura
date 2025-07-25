// src/pages/projects/wolne-kible.tsx

import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroParticles from '../../components/HeroParticles';
import DynamicBracketLogo from '../../components/DynamicBracketLogo';

type Socials = {
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
};

const stats = [
  { label: 'Z kim walczymy?', value: 'PKP' },
  { label: 'O kogo walczymy?', value: 'Podróżni w potrzebie' },
  { label: 'Orientacja polityczna', value: 'Lewicowy' },
];

const team: {
  name: string;
  role: string;
  socials: Socials;
}[] = [
  {
    name: 'Bartosz Kuniński',
    role: 'Scenariusze',
    socials: {
      instagram: 'https://www.instagram.com/b.aerti/',
    },
  },
  {
    name: 'Vladyslav Panchenco',
    role: 'Produkcja Video',
    socials: {
      instagram: 'https://www.instagram.com/vlp_vision_/',
    },
  },
  {
    name: 'Julia Rosołek',
    role: 'Design',
    socials: {
      instagram: 'https://www.instagram.com/zupisk0/',
    },
  },
  {
    name: 'Marcin Banach',
    role: 'Development Strony',
    socials: {
      linkedin: 'https://www.linkedin.com/in/marcin-banach-3ba46a2b4/',
    },
  },
];

const articles = [
  {
    title: 'Wolne Kible walczą o bezpłatne toalety – Ludziom się należy',
    href: 'https://vibez.pl/myimpact/wolne-kible-walcza-o-bezplatne-toalety-ludziom-sie-nalezy-7027160867990496a',
  },
  {
    title: 'Walcza o pęcherze Polaków. Wolne Kible żądają bezpłatnych toalet',
    href: 'https://bialystok.eska.pl/walcza-o-pecherze-polakow-wolne-kible-zadaja-bezplatnych-toalet-aa-FtNa-t8GW-Lb4S.html',
  },
  {
    title: 'Wytrzymasz? Wytrzymam – aktywiści Wolnych Kibli walczą o bezpłatne publiczne toalety',
    href: 'https://zycie.hellozdrowie.pl/wytrzymasz-wytrzymam-aktywisci-wolnych-kibli-walcza-o-bezplatne-publiczne-toalety/',
  },
  {
    title: 'Wolne Kible walczą o bezpłatne toalety na dworcu w Toruniu',
    href: 'https://topnewsy.pl/4751,wolne-kible-walcza-o-bezplatne-toalety-na-dworcu-w-toruniu-kosztuje-4-zl',
  },
  {
    title: 'Afera toaletowa w Toruniu – w internecie zawrzało, to jest absurd',
    href: 'https://wiadomosci.radiozet.pl/torun/afera-toaletowa-w-toruniu-w-internecie-zawrzalo-to-jest-absurd',
  },
  {
    title: 'Podcast: Wytrzymasz przed kiblem? Rozmowa o Wolnych Kiblach',
    href: 'https://open.spotify.com/episode/6RJu7EfVIzyqRxBjqzxCe1',
  },
];

export default function WolneKible() {
  // Obsługa przypadków, gdy użytkownik wejdzie na stronę bezpośrednio
  // z linkiem zawierającym kotwicę (np. /projects/wolne-kible#team)
  const router = useRouter();

  useEffect(() => {
    // Sprawdzamy, czy URL zawiera hasz (kotwicę)
    if (router.asPath.includes('#') && !router.asPath.startsWith('/#')) {
      // Jeśli to kotwica z innej strony, przekieruj na stronę główną z tą kotwicą
      const hash = router.asPath.split('#')[1];
      if (hash && ['about', 'projects', 'process', 'contact'].includes(hash)) {
        router.push(`/#${hash}`);
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Wolne Kible - Destruktura</title>
        <meta name="description" content="Wolne Kible - kampania społeczna walcząca o darmowe toalety na dworcach PKP." />
      </Head>
      
      <div className="bg-black text-white">
        {/* HEADER */}
        <Header />

        {/* HERO */}
        <section className="relative h-screen overflow-hidden">
          {/* cząsteczki w tle */}
          <div className="absolute inset-0 z-0">
            <HeroParticles onBurst={() => {}} fullWidth={false} />
          </div>
          {/* mockup + tytuł */}
          <div className="relative z-10 flex flex-col lg:flex-row h-full">
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="relative w-52 sm:w-64 md:w-72 overflow-hidden rounded-2xl border-4 border-red-600 shadow-[0_0_20px_rgba(179,0,0,0.6)]">
                <Image
                  src="/mockup_wolne_kible.png"
                  alt="Kampania Wolne Kible"
                  width={845}
                  height={1766}
                  className="object-cover w-full h-auto"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/70 via-transparent to-black/70" />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="text-center">
                <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight">
                  Wolne Kible
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                  Walczyliśmy z PKP o darmowe toalety
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="stats" className="max-w-4xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-800 p-6 rounded-lg text-center">
                <h4 className="text-sm uppercase text-red-600">{s.label}</h4>
                <p className="mt-2 text-xl font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        
      {/* LOGO */}
      <div id="logo" className="flex justify-center mt-8 mb-12">
        <DynamicBracketLogo 
          logoSrc="/wolne_kible.svg"
          logoAlt="Wolne Kible Logo"
          width={240}
          height={240}
        />
      </div>
        {/* DESCRIPTION */}
        <section className="prose prose-invert max-w-3xl mx-auto pb-12 px-4 space-y-6">
          <h3 className="text-2xl mb-4">Prawo, a nie towar</h3>
          <p>
            Walczyliśmy z PKP, wychodząc z założenia, że jeśli coś ma być darmowe w państwie,
            to właśnie toalety. Płacenie za kibel na dworcu jest poniżające — często musisz mieć
            gotówkę, której dziś prawie nikt nie nosi. A nawet jak masz, stoisz pod czujnym wzrokiem
            kogoś, kto pilnuje bramki. Czasami to starsze osoby, które w tej roli tworzą niekomfortową
            barierę, kontrolując Twoją potrzebę fizjologiczną.
          </p>
          <p>
            Podczas naszej akcji <span className="inline-block align-middle">
              <Image src="/wolne_kible.svg" alt="Wolne Kible" width={28} height={28} />
            </span>{' '}
            wskazywaliśmy na absurd opłat dochodzących do 4,50 zł. Cytat zarządcy toruńskiego dworca{' '}
            <Link href="https://ddtorun.pl" className="text-red-600 underline hover:text-red-400 transition">
              <em>„Ludzie to by wszystko chcieli za darmo"</em>
            </Link>{' '}
            — pokazuje mentalność, w której podstawowe potrzeby traktuje się jak przywileje.
            Według tej logiki, jeśli coś jest darmowe, ludzie to „nadużyją". Jakby możliwość
            skorzystania z toalety była luksusem, nie elementem godności.
          </p>
          <p>
            Tymczasem psy mogą załatwiać swoje potrzeby bezpłatnie — nikt nie wrzuca dwóch złotych do kubła
            na psie odchody. Dlaczego więc ludzi traktuje się gorzej niż zwierzęta?
          </p>
          <p>
            Marża jest gigantyczna — spuszczenie wody kosztuje około 3 grosze, a użytkownik płaci
            kilkadziesiąt razy więcej. Nasza akcja wywołała milionowe zasięgi i burzę w mediach,
            pokazując skalę społecznego sprzeciwu.
          </p>
          <p>
            Na stronie{' '}
            <Link href="https://wolnekible.pl" className="text-red-600 underline hover:text-red-400 transition">
              wolnekible.pl
            </Link>{' '}
            użytkownicy mapowali ceny za toaletę w całym kraju, budując realną presję na zmiany.
          </p>
        </section>

        {/* VIRAL TIKTOK */}
        <section className="max-w-3xl mx-auto py-12 px-4">
          <h3 className="text-2xl mb-4">Viralowy filmik</h3>
          <p className="mb-6">
            Klip przedstawia głos sprzeciwu Polaków wobec płatnych toalet – zebrał ponad
            milion wyświetleń i tysiące komentarzy, a o nim pisali m.in. duże portale.
          </p>
          <div className="aspect-[9/16] w-full max-w-xs mx-auto">
            <iframe
              src="https://www.tiktok.com/embed/7365944961252035873"
              allow="autoplay; fullscreen"
              className="w-full h-full rounded-xl"
            />
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="bg-gray-900 py-12 px-4">
          <h3 className="text-3xl text-center mb-8">Project Collaborators</h3>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((m) => (
              <li key={m.name} className="flex flex-col items-center">
                <span className="font-semibold">{m.name}</span>
                <span className="text-sm text-gray-400">{m.role}</span>
                <div className="flex space-x-4 mt-2">
                  {m.socials.linkedin && (
                    <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedinIn className="hover:text-red-600" />
                    </a>
                  )}
                  {m.socials.instagram && (
                    <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="hover:text-red-600" />
                    </a>
                  )}
                  {m.socials.tiktok && (
                    <a href={m.socials.tiktok} target="_blank" rel="noopener noreferrer">
                      <SiTiktok className="hover:text-red-600" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SOCIAL MEDIA */}
        <section id="social" className="py-12 px-4">
          <h3 className="text-3xl text-center mb-6">Znajdź Wolne Kible</h3>
          <div className="flex justify-center space-x-8 text-2xl text-gray-400">
            <a href="https://www.linkedin.com/company/wolne-kible" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="https://www.tiktok.com/@wolne_kible/video/7365944961252035873" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <SiTiktok />
            </a>
            <a href="https://www.instagram.com/wolne_kible/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaInstagram />
            </a>
          </div>
        </section>

        {/* MEDIA */}
        <section id="media" className="max-w-4xl mx-auto py-12 px-4">
          <h3 className="text-3xl mb-6">Media o nas</h3>
          <ul className="space-y-4">
            {articles.map((a) => (
              <li key={a.href}>
                <Link href={a.href} target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition-colors">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        
        {/* FOOTER z przyciskiem powrotu */}
        <div className="py-12 text-center">
          <Link 
            href="/#projects" 
            className="inline-block py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            ← Wróć do wszystkich projektów
          </Link>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </>
  );}