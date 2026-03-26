import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
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
  facebook?: string;
  youtube?: string;
};

const stats = [
  { label: 'Z kim walczymy?', value: 'LGBT' },
  { label: 'O kogo walczymy?', value: 'Non-gay homosexuals' },
  { label: 'Orientacja polityczna', value: 'Prawicowy' },
];

const team: {
  name: string;
  role: string;
  socials: Socials;
}[] = [
  {
    name: 'Bartosz Kuniński',
    role: 'Koordynacja, scenariusz filmu',
    socials: {
      instagram: 'https://www.instagram.com/b.aerti/',
    },
  },
  {
    name: 'Vladyslav Panchenco',
    role: 'Reżyseria filmu',
    socials: {
      instagram: 'https://www.instagram.com/vlp_vision_/',
    },
  },
  {
    name: 'Miłosz Michniewicz',
    role: 'Realizacja audio/video utworów',
    socials: {
      instagram: 'https://www.instagram.com/milo.jxl/',
    },
  },
];

type Article = {
  title: string;
  href: string;
};

const articles: Article[] = [
  {
    title: 'Chcą wyleczyć gejów rapem',
    href: 'https://tylkotorun.pl/wiadomosci/chca-wyleczyc-gejow-rapem/',
  },
  {
    title: 'Chcą leczyć z homoseksualizmu. Internauci nie kryją oburzenia',
    href: 'https://ddtorun.pl/pl/14_kultura/61066_chca-leczyc-z-homoseksualizmu-internauci-nie-kryja-oburzenia.html',
  },
];

export default function MisjonarzePTGA() {
  const router = useRouter();

  useEffect(() => {
    if (router.asPath.includes('#') && !router.asPath.startsWith('/#')) {
      const hash = router.asPath.split('#')[1];
      if (hash && ['about', 'projects', 'process', 'contact'].includes(hash)) {
        router.push(`/#${hash}`);
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Misjonarze PTGA - Destruktura</title>
        <meta name="description" content="Misjonarze PTGA - podwójna prowokacja społeczna, która pokazała polaryzację w debacie o orientacji seksualnej i potrzebę neutralnego podejścia." />
      </Head>
    
      <div className="bg-black text-white misjonarze-ptga-page">
        <Header />

        {/* HERO */}
        <section className="relative h-screen overflow-hidden">
          <div className="absolute inset-0 z-0">
            <HeroParticles onBurst={() => {}} fullWidth={false} />
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row h-full">
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="relative w-52 sm:w-64 md:w-72 overflow-hidden rounded-2xl border-4 border-red-600 shadow-[0_0_20px_rgba(179,0,0,0.6)]">
                <Image
                  src="/draze_misjonarze.png"
                  alt="Kampania Misjonarze PTGA"
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
                  Misjonarze PTGA
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                  Walczyliśmy z LGBT o możliwość uzyskania pomocy osobom o niechcianych skłonnościach
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
            logoSrc="/misjonarze_ptga.svg"
            logoAlt="Misjonarze PTGA Logo"
            width={320}
            height={160}
          />
        </div>
        
        {/* FILM EMBED */}
      

        {/* DESCRIPTION */}
        <section className="prose prose-invert prose-ul:list-disc prose-li:marker:text-red-500 max-w-3xl mx-auto pb-12 px-4 space-y-6">
          <h3 className="text-2xl mb-4">Eksperyment społeczny, który wywołał burzę: Misjonarze PTGA</h3>
          
          <p>
            Stworzyliśmy kontrowersyjną prowokację, która ujawniła głębokie podziały w polskim społeczeństwie. 
            Nasz film "Nauka mówi jasno! Terapie konwersyjne to oszustwo"
            wywołał gorącą dyskusję na temat jednego z najbardziej objętych cenzurą tematów - terapii zmiany orientacji seksualnej.
          </p>
          
          <h3 className="text-2xl mb-4">Podwójne lustro: film, który zaskoczył wszystkich</h3>
          
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-3/5">
              <p>
                Na początku pojawił się zwiastun, który sugerował bezlitosną krytykę terapii konwersyjnych 
                i prawicowych organizacji. Niektóre osoby o poglądach lewicowych entuzjastycznie przyjęły zapowiedź, 
                widząc w nas sojuszników w walce o prawa osób LGBT+.
              </p>
              
              <p>
                <strong>Ale gdy widzowie obejrzeli pełny film...</strong>
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col justify-center items-center">
              <div className="relative w-full">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/Q2qaomu6JNA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center mt-2">Zwiastun filmu</p>
              </div>
            </div>
          </div>
          
          <p>
            Okazało się, że przygotowaliśmy znacznie bardziej złożony materiał. Film był podzielony na 3 części:
          </p>
          
          <ul className="list-disc pl-5">
            <li>Najpierw przedstawiliśmy lewicową narrację na 28 tematów związanych z orientacją seksualną</li>
            <li>Następnie te same 28 tematów z perspektywy prawicowej - pokazując alternatywne interpretacje</li>
            <li>Na końcu szczere podsumowanie wyjaśniające cel naszego eksperymentu</li>
          </ul>
          
          <p>
            Reakcje były skrajne - od zachwytu po oburzenie. Pokazaliśmy, jak łatwo przyjmujemy 
            informacje zgodne z naszymi przekonaniami, bez głębszej refleksji czy weryfikacji.
          </p>
          
          <h3 className="text-2xl mb-4">Trzy etapy eksperymentu</h3>
          
          <p>
            <strong>I. Przerysowana fundacja</strong>
          </p>
          
          <p>
            Rozpoczęliśmy od utworu <a href="https://www.youtube.com/watch?v=W-dudCgx42I" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">"CHOROBA NIE WYBIERA"</a> 
            i założenia fikcyjnej fundacji Misjonarze PTGA. Celowo przerysowaliśmy wizerunek, 
            by sprawdzić, kto potraktuje nas poważnie, a kto zobaczy prowokację.
          </p>
          
          <div className="mt-8 mb-8">
            <h3 className="text-xl mb-2">„CHOROBA NIE WYBIERA" - utwór rozpoczynający projekt</h3>
            <div className="aspect-video w-full max-w-2xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/W-dudCgx42I"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
          
          <p>
            Ku naszemu zaskoczeniu, przez <a href="https://misjonarzeptga.pl/kontakt/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">formularz kontaktowy </a> 
            zgłaszały się prawdziwe osoby szukające pomocy. To pokazało nam skalę problemu - są w Polsceludzie, 
            którzy czują się pozostawieni bez wsparcia w swoim konflikcie tożsamościowym.
          </p>
          
          <p>
            <strong>II. Zwiastun, który miał cel zmylić</strong>
          </p>
          
          <p>
            2 czerwca wydaliśmy zwiastun sugerujący film demaskujący "szarlatanów". 
            Pokazaliśmy fragmenty z konferencji <a href="https://iftcc.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">IFTCC </a> 
            i spotkań terapeutycznych. Stategia zakładała, że ludzie przyjmą to entuzjastycznie, nie weryfikując naszych intencji.
          </p>
          
          <p>
            <strong>III. Film, który pokazał złożoność problemu</strong>
          </p>
          
          <p>
            Premiera filmu zaskoczyła wszystkich. Zamiast jednostronnej krytyki, przedstawiliśmy:
          </p>
          
          <ul className="list-disc pl-5">
            <li>Różne perspektywy naukowe na temat orientacji seksualnej</li>
            <li>Głosy osób, które z własnej woli szukają pomocy w radzeniu sobie ze swoimi skłonnościami</li>
            <li>Problem braku neutralnego wsparcia dla osób w konflikcie między orientacją a światopoglądem</li>
          </ul>
          <section className="max-w-3xl mx-auto py-12 px-4">
          <h3 className="text-2xl mb-4">Nasz film "Nauka mówi jasno! Terapie konwersyjne to oszustwo"</h3>
          <div className="aspect-video w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/j_izjiTNsBA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </section>
          <h3 className="text-2xl mb-4">Dogmat w białym fartuchu</h3>
          
          <p>
            Nasz eksperyment ujawnił istotny problem - brak przestrzeni dla neutralnej pomocy. 
            Osoby doświadczające konfliktu między orientacją seksualną a wyznawanym światopoglądem 
            często nie mogą znaleźć profesjonalnego wsparcia. Z jednej strony terapie konwersyjne 
            są zdyskredytowane, z drugiej - standardowe podejście afirmatywne może nie odpowiadać 
            wszystkim potrzebującym.
          </p>
          
          <p>
            Badania pokazują, że część osób faktycznie szuka pomocy w życiu zgodnym ze swoimi 
            wartościami religijnymi czy światopoglądowymi. Nie chodzi tu o "leczenie" orientacji, 
            ale o znalezienie sposobu na pogodzenie różnych aspektów tożsamości.
          </p>
          
          <h3 className="text-2xl mb-4">Nasza propozycja: Psycholog orientacji różnicowej</h3>
          
          <p>
            Uznajemy, że osoby cierpiące z powodu konfliktu tożsamościowego potrzebują profesjonalnej pomocy. 
            Jednocześnie zdajemy sobie sprawę z ryzyka dyskryminacji i szkód, jakie mogą wynikać 
            z niewłaściwych interwencji. Dlatego proponujemy nową koncepcję - 
            <strong><a href="https://docs.google.com/document/d/1LK-WC4yfLtdYmjNXs1svTsUO_wSECKRsH_ItXp7Gv6U/edit?tab=t.0" 
            target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">
            psychologa orientacji różnicowej</a></strong>.
          </p>
          
          <div className="bg-gray-800 p-6 rounded-lg my-6">
            <h4 className="text-xl mb-4">Czym jest psycholog orientacji różnicowej?</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Neutralny specjalista, który nie narzuca ani afirmacji, ani zmiany orientacji</li>
              <li>Przeprowadza diagnozę i edukację opartą na aktualnej wiedzy naukowej</li>
              <li>Pomaga osobie zrozumieć dostępne opcje i podjąć świadomą decyzję</li>
              <li>Kieruje do odpowiedniego terapeuty zgodnie z wyborem pacjenta</li>
              <li>Działa w granicach etyki zawodowej i wiedzy naukowej</li>
            </ul>
          </div>
          
          <p>
            Taki model pozwoliłby zachować równowagę między dwoma sprzecznymi prawami: autonomią pacjenta a ochroną przed szkodliwymi praktykami. 
            To propozycja dialogu między różnymi podejściami, która stawia dobro osoby potrzebującej pomocy 
            na pierwszym miejscu.
          </p>
          
          <h3 className="text-2xl mb-4">Wnioski z eksperymentu</h3>
          
          <p>
            Misjonarze PTGA pokazali, jak głęboko podzielone jest nasze społeczeństwo w kwestiach 
            orientacji seksualnej i tożsamości. Jednocześnie ujawniliśmy realny problem - brak neutralnej 
            przestrzeni dla osób szukających pomocy w pogodzeniu różnych aspektów swojej tożsamości.
          </p>
                 <div className="mt-8 mb-8">
          </div>
          <p>
            Nasz eksperyment był prowokacją, ale jego cel był poważny - zwrócić uwagę na lukę w systemie 
            wsparcia i zaproponować konstruktywne rozwiązanie. Wierzymy, że dialog jest możliwy, 
            a osoby w kryzysie tożsamościowym zasługują na profesjonalną, etyczną pomoc.
          </p>
          <p>
            Jednocześnie zależało nam, by pokazać, że nawet najbardziej kontrowersyjny, naładowany emocjami temat da się okiełznać, jeśli świadomie przerysuje się obie skrajności. W ten sposób celowo oddaliśmy głos konserwatystom, a jako twórcy-ateiści nie pozostawiliśmy pola do łatwych oskarżeń o stronniczość. Dawka absurdu rozłożona po równo wyrównuje szanse, rozbraja uprzedzenia i otwiera realną przestrzeń do dialogu. Co ważne, w projekt zaangażowały się też osoby LGBT – śmiały się razem z nami, bo dystans i poczucie humoru potrafią skutecznie przebić mur wzajemnych oskarżeń i ułatwić rozmowę tam, gdzie dotąd rządził tylko krzyk.
          </p>

                   <h3 className="text-xl mb-2">„PRZEWODNIK MIŁOŚCI" - drugi utwór projektu</h3>
<div className="aspect-video w-full max-w-2xl mx-auto">
  <iframe
    src="https://www.youtube.com/embed/Zl9w7dK6TYE?rel=0"
    title="Misjonarze PTGA – teaser"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
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
                  {m.socials.instagram && (
                    <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="hover:text-red-600" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="max-w-3xl mx-auto px-4 py-6 mt-8 bg-gray-900/60 border border-gray-700 rounded-lg">
  <h4 className="text-xl font-semibold mb-2 text-red-500">Disclaimer</h4>
  <p className="text-gray-300">
    W początkowym etapie projektu w niektórych działaniach brał udział Mateusz Thiede. 
    Jego udział ograniczał się wyłącznie do fazy koncepcyjnej i pierwszych nagrań. 
    Dalszy kierunek projektu, finalna interpretacja oraz cała komunikacja publiczna były już tworzone 
    niezależnie od niego. 
    <br /><br />
    Mateusz Thiede nie utożsamia się z późniejszym charakterem projektu ani narracją przedstawioną 
    w jego finalnej formie. Nasze drogi twórcze rozeszły się na wczesnym etapie, dlatego prosimy, 
    aby nie łączyć jego osoby z późniejszym przekazem projektu.
  </p>
</section>
        {/* SOCIAL MEDIA */}
        <section id="social" className="py-12 px-4">
          <h3 className="text-3xl text-center mb-6">Znajdź Misjonarzy PTGA</h3>
          <div className="flex justify-center space-x-8 text-2xl text-gray-400">
            <a href="https://www.facebook.com/misjonarze.ptga/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com/@MisjonarzePTGA" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@misjonarze_ptga" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
              <SiTiktok />
            </a>
            <a href="https://www.instagram.com/misjonarze_ptga/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">
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

        <div className="py-12 text-center">
          <Link 
            href="/#projects" 
            className="inline-block py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            ← Wróć do wszystkich projektów
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}