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
    name: 'Mateusz Thiede',
    role: 'Scenariusze shortsów',
    socials: {
      instagram: 'https://www.instagram.com/tidekk/',
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
  // Obsługa przypadków, gdy użytkownik wejdzie na stronę bezpośrednio
  // z linkiem zawierającym kotwicę
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
        <title>Misjonarze PTGA - Destruktura</title>
        <meta name="description" content="Misjonarze PTGA - podwójna prowokacja społeczna, która dwukrotnie oszukała całą Polskę, pokazując jak łatwo ludzie przyjmują narracje zgodne z ich przekonaniami." />
      </Head>
    
      <div className="bg-black text-white misjonarze-ptga-page">
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
                  src="/misjonarz_mateusz.png"
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
        
        {/* FILM EMBED - przeniesiony na górę jako rezultat */}
        <section className="max-w-3xl mx-auto py-12 px-4">
          <h3 className="text-2xl mb-4">Nasz film "Nauka mówi jasno! Terapie konwersyjne to oszustwo"</h3>
          <div className="aspect-video w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/watch?v=j_izjiTNsBA&t=1s&ab_channel=MisjonarzePTGA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="prose prose-invert prose-ul:list-disc prose-li:marker:text-red-500 max-w-3xl mx-auto pb-12 px-4 space-y-6">
          <h3 className="text-2xl mb-4">Jak dwukrotnie oszukaliśmy całą Polskę: Misjonarze PTGA</h3>
          
          <p>
            Stworzyliśmy najbardziej kontrowersyjną prowokację w historii polskich mediów społecznościowych. 
            Nasz film "Nauka mówi jasno! Terapie konwersyjne to oszustwo" miał ponad milion wyświetleń, 
            a jego premiera na żywo zgromadziła tysiące widzów, którzy... dwukrotnie zostali wyprowadzeni w pole.
          </p>
          
          <h3 className="text-2xl mb-4">Podwójne oszustwo: film, którego nikt się nie spodziewał</h3>
          
          {/* Sekcja dwukolumnowa */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-3/5">
              <p>
                Na początku pojawił się zwiastun, który obiecywał bezlitosną demaskację terapii konwersyjnych 
                i prawicowych organizacji próbujących "leczyć homoseksualistów". Media lewicowe okrzyknęły nas bohaterami, 
                obrońcami osób LGBT+, którzy infiltrowali i nagrywali "szarlatanów" podczas tajnych spotkań.
              </p>
              
              <p>
                <strong>Ale kiedy widzowie odpalili nasz film spodziewając się lewicowej krytyki...</strong>
              </p>
            </div>
            <div className="md:w-2/5 flex flex-col justify-center items-center">
              <div className="relative w-full">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/watch?v=Q2qaomu6JNA&ab_channel=MisjonarzePTGA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8z"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-400 text-center mt-2">Zwiastun filmu</p>
              </div>
            </div>
          </div>
          
          <p>
            To ją właśnie otrzymali. Ale nie tylko. Nasz film był podzielony na 3 części:
          </p>
          
          <ul className="list-disc pl-5">
            <li>Lewicową narrację składającą się na 28 tematów takich jak: skuteczność terapii, wrodzoność homoseksualizmu czy dyskryminacja</li>
            <li>Dokładnie te same 28 tematów w odbiciu lustrzanym prawicowej narracji - odkłamującej wcześniej zarysowaną propagandę</li>
            <li>Szczere podsumowanie wyjaśniające proces ewolucji projektu oraz cel naszej prowokacji</li>
          </ul>
          
          <p>
            Lewicowi widzowie byli w szoku. Prawicowi triumfowali. A my? Pokazaliśmy, jak łatwo ludzie kupują 
            narracje zgodne z ich przekonaniami, bez weryfikacji faktów.
          </p>
          
          <h3 className="text-2xl mb-4">Jak to zrobiliśmy? Trzy etapy oszustwa idealnego</h3>
          
          <p>
            <strong>I. Śmieszni "uzdrawiacze gejów"</strong>
          </p>
          
          <p>
            Wszystko zaczęło się od utworu <a href="https://www.youtube.com/watch?v=W-dudCgx42I" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">"CHOROBA NIE WYBIERA"</a> – 
            przerysowanej do granic możliwości "terapeutycznej" piosenki rapowej i założenia fikcyjnej fundacji Misjonarze PTGA. 
            Oferowaliśmy "leczenie z homoseksualizmu" i polecaliśmy książkę Gerarda van den Aardwega "Walka o normalność".
          </p>
          
          <p className="flex justify-center">
            <a 
              href="https://www.youtube.com/watch?v=Zl9w7dK6TYE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <span className="mr-2">Zobacz nasz utwór muzyczny "PRZEWODNIK MIŁOŚCI"</span> ▶
            </a>
          </p>
          
          <p>
            Media podchwyciły temat: "Dzień Dobry Toruń" pisał, że to <a href="https://ddtorun.pl/pl/14_kultura/61066_chca-leczyc-z-homoseksualizmu-internauci-nie-kryja-oburzenia.html" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">"humorystyczna akcja by zdobyć zasięgi"</a>, 
            inni byli przekonani, że to autentyczni homofobi. Chociaż sama poważność naszego wizerunku była co najmniej... 
            dyskusyjna, czego przykładem były nasze shortsy takie jak <a href="https://www.tiktok.com/@misjonarze_ptga/video/7446456914390682902" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">ten instruktażowy</a>. 
          </p>
          
          <p>
            Co ciekawe – przez <a href="https://misjonarzeptga.pl/kontakt/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition">formularz</a> 
            na naszej stronie internetowej zaczęli zgłaszać się prawdziwi ludzie, którzy faktycznie szukali pomocy w zmianie swoich skłonności. 
            Nie teoretyczne postaci z debat, a realnie istniejące osoby. To było pierwsze zaskoczenie.
          </p>
          
          <p>
            <strong>II. "Bohaterowie" walki z homofobią</strong>
          </p>
          
          <p>
            10 maja (Międzynarodowy Dzień Walki z Homofobią) wydaliśmy zwiastun filmu, który zapowiadał 
            totalną demolkę konserwatywnych terapeutów konwersyjnych. Pokazaliśmy fragmenty z konferencji 
            <a href="https://iftcc.org/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-400 transition"> IFTCC</a> w Warszawie i tajnych spotkań, 
            na które udało nam się przeniknąć.
          </p>
          
          <p>
            Lewicowe media, do których wysłaliśmy maile, w których "odkrywamy nasze prawdziwe zamiary", zachwycały się: "Chcą zdemaskować szarlatanów", "Infiltrowali środowiska homofobów", 
            "Wreszcie ktoś pokazuje prawdę!". W social mediach już szykowano popcorn na wielką kompromitację 
            "zacofanych fanatyków".
          </p>
          
          <p className="flex justify-center">
            <a 
              href="https://www.youtube.com/watch?v=Q2qaomu6JNA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <span className="mr-2">Zobacz zwiastun do filmu "Nauka mówi jasno! Terapie konwersyjne to oszustwo!"</span> ▶
            </a>
          </p>
          
          <p>
            <strong>III. Bait w baicie, czyli przełamanie narracji</strong>
          </p>
          
          <p>
            A potem nadszedł dzień premiery filmu. Zamiast oczekiwanego "grillowania" terapeutów konwersyjnych, 
            przedstawiliśmy zrównoważone spojrzenie, które:
          </p>
          
          <ul className="list-disc pl-5">
            <li>Pokazało, że badania naukowe zaprzeczają dominującej narracji o niezmienności orientacji</li>
            <li>Oddało głos osobom, które dobrowolnie szukają pomocy w zmianie skłonności homoseksualnych</li>
            <li>Zdemaskowało, jak środowiska aktywistyczne blokują badania i debatę na ten temat</li>
          </ul>
          
          <p>
            Reakcje? Szok, niedowierzanie, wściekłość ze strony lewicy. I nagle zrozumienie ze strony wielu widzów: 
            <strong> zostali świadomie zaprowadzeni tam, gdzie bezkrytycznie przyjęli narrację, która im odpowiadała – 
            a potem zobaczyli jej przeciwieństwo</strong>.
          </p>
          
          <p>
            To właśnie było naszym celem – <strong>stworzyć lustro, w którym każdy widzi własną podatność na manipulację</strong>. 
            Pokazać, jak łatwo wierzymy w to, co pasuje do naszego światopoglądu, i jak trudno nam zaakceptować dane, 
            które mu przeczą.
          </p>
          
          <p className="flex justify-center">
            <a 
              href="https://www.youtube.com/watch?v=j_izjiTNsBA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              <span className="mr-2">Zobacz nasz film "Nauka mówi jasno! Terapie konwersyjne to oszustwo!"</span> ▶
            </a>
          </p>
          
          {/* Osadzony utwór CHOROBA NIE WYBIERA przed sekcją Dogmat w białym fartuchu */}
          <div className="mt-8 mb-8">
            <h3 className="text-xl mb-2">„CHOROBA NIE WYBIERA" - przerysowany utwór rapowy rozpoczynający projekt</h3>
            <div className="aspect-video w-full max-w-2xl mx-auto">
              <iframe
                src="https://www.youtube.com/embed/W-dudCgx42I"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
          
          <h3 className="text-2xl mb-4">Dogmat w białym fartuchu</h3>
          
          <p>
            Najważniejszym odkryciem naszej prowokacji okazał się fakt, że współczesna psychologia i psychiatria 
            zostały w znacznej mierze zdominowane przez lewicową narrację. <a href="https://peplau.psych.ucla.edu/wp-content/uploads/sites/141/2017/07/Garnets-et-al.-91.pdf" target="_blank" rel="noopener noreferrer" 
            className="text-red-600 underline hover:text-red-400 transition">Badania z 1986 roku
            </a> wykazały, że aż 33% Amerykańskiego Stowarzyszenia Psychologów to zadeklarowane osoby nieheteronormatywne co stwarzało już wtedy ogromne pole pod lobbing. 
            Konflikt interesów sprawia, że grupa ta chętnie broni fałszywych narracji nieodwracalności i wrodzoności orientacji i piętnuje każdą próbę zmiany.
          </p>
          
          <p>
            W rezultacie, osoby poszukujące pomocy w zrozumieniu lub zmianie swoich homoseksualnych skłonności 
            trafiają w próżnię – terapeuci masowo odmawiają pomocy, bojąc się oskarżeń o "homofobię" i utraty licencji, z czym "Misjonarz" Bartek podczas prowokacji spotkał się na własnej skórze. 
            Niemal każdy specjalista powtarza jak mantrę, a niektóre placówki nawet kłamią <a href="https://psychomedic.pl/czy-homoseksualizm-to-choroba-rozprawiamy-sie-z-tym-i-innymi-mitami-na-temat-lgbt/" target="_blank" rel="noopener noreferrer" 
            className="text-red-600 underline hover:text-red-400 transition"> na swoich stronach</a>, że "orientacja jest wrodzona i niezmienialna", chociaż 
            badania naukowe są w tej kwestii nie tylko dalekie od jednoznaczności, ale często wskazują na coś przeciwnego.
          </p>
          
          <p>
            Historia zatoczyła ironiczne koło – podczas gdy kiedyś to osoby LGBT+ były prześladowane i zmuszane 
            do ukrywania swojej tożsamości, dziś to tzw. "non-gay homosexuals" – osoby o skłonnościach homoseksualnych, 
            które nie chcą przyjąć gejowskiej tożsamości – stały się dyskryminowaną mniejszością. Osoby te, często 
            z powodów światopoglądowych, religijnych czy zwyczajnie osobistych, chcą żyć w zgodzie z tradycyjnym 
            modelem rodziny, mieć własne biologiczne dzieci i funkcjonować w świecie, gdzie pary się płciowo dopełniają. 
            Są jednak pozbawione prawa do uzyskania profesjonalnej pomocy w tym zakresie.
          </p>
          
          <p>
            Realnie cierpiący ludzie zostają więc pozostawieni sami sobie – zmuszeni albo do zaakceptowania 
            niechcianych skłonności, albo do poszukiwania pomocy w szarej strefie, poza kontrolą jakichkolwiek 
            standardów etycznych.
          </p>
          
          <h3 className="text-2xl mb-4">Prawda poza dogmatami</h3>
          
          <p>
            W Destrukturze wierzymy, że czasem trzeba zaryzykować, by obnażyć podłość kłamstw. 
            Misjonarze PTGA to nasz najbardziej odważny, ale i najbardziej potrzebny eksperyment społeczny – łamiący 
            schematy, zmuszający do myślenia i tworzący pierwszą w polsce podwójną prowokację.
          </p>
          
          <p>
            I tak, okłamaliśmy całą Polskę. Dwukrotnie. Żeby pokazać, jak łatwo dajemy się okłamywać codziennie.
          </p>
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
        
        {/* FOOTER z przyciskiem powrotu */}
        <div className="py-12 text-center">
          <Link 
            href="/#projects" 
            className="inline-block py-3 px-6 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            ← Wróć do wszystkich projektów
          </Link>
        </div>

        {/* Footer component */}npm
        <Footer />
      </div>
    </>
  );}