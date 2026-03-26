import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroParticles from '../../components/HeroParticles';
import DynamicBracketLogo from '../../components/DynamicBracketLogo';

type Socials = {
  instagram?: string;
};

const stats = [
  { label: 'Temat', value: 'Tożsamość & konflikt wewnętrzny' },
  { label: 'Format', value: 'Eksperyment społeczny' },
  { label: 'Cel', value: 'Dialog ponad podziałami' },
];

const team: {
  name: string;
  role: string;
  socials: Socials;
}[] = [
  {
    name: 'Bartosz Kuniński',
    role: 'Koordynacja, scenariusz filmu',
    socials: { instagram: 'https://www.instagram.com/b.aerti/' },
  },
  {
    name: 'Vladyslav Panchenco',
    role: 'Reżyseria filmu',
    socials: { instagram: 'https://www.instagram.com/vlp_vision_/' },
  },
  {
    name: 'Miłosz Michniewicz',
    role: 'Realizacja audio/video',
    socials: { instagram: 'https://www.instagram.com/milo.jxl/' },
  },
];

const articles = [
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
        <title>Misjonarze PTGA – Destruktura</title>
        <meta name="description" content="Eksperyment społeczny, który pokazał jak głęboko podzielone jest polskie społeczeństwo — i zaproponował coś, czego brakuje: przestrzeń do rozmowy bez krzyku." />
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
              <div className="text-center max-w-xl">
                <h1 className="text-white font-display text-5xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight">
                  Misjonarze PTGA
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">
                  Eksperyment społeczny, który pokazał jak łatwo przyjmujemy to, co już wiemy — i jak trudno rozmawiać o tym, co nas naprawdę różni.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="max-w-4xl mx-auto py-12 px-4">
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
        <div className="flex justify-center mt-8 mb-12">
          <DynamicBracketLogo
            logoSrc="/misjonarze_ptga.svg"
            logoAlt="Misjonarze PTGA Logo"
            width={320}
            height={160}
          />
        </div>

        {/* DESCRIPTION */}
        <section className="prose prose-invert prose-ul:list-disc prose-li:marker:text-red-500 max-w-3xl mx-auto pb-12 px-4 space-y-6">

          <h3 className="text-2xl mb-4">Eksperyment, który wywołał burzę</h3>

          <p>
            Stworzyliśmy fikcyjną fundację Misjonarze PTGA — celowo przerysowaną, celowo absurdalną.
            Potem obserwowaliśmy, co się stanie. Odpowiedź była jednoznaczna: każda ze stron przyjęła
            nas jako swojego, nie weryfikując intencji. Bo każdy widzi to, co chce zobaczyć.
          </p>

          <p>
            Projekt dotyczył jednego z najtrudniejszych tematów w Polsce — konfliktu między orientacją
            seksualną a tożsamością światopoglądową. Nie po to, żeby go rozstrzygnąć. Po to, żeby
            pokazać, że w tej debacie brakuje czegoś podstawowego: przestrzeni do rozmowy bez krzyku.
          </p>

          <h3 className="text-2xl mb-4">Trzy etapy eksperymentu</h3>

          <p>
            <strong>I. Fundacja, która nie istniała</strong>
          </p>
          <p>
            Założyliśmy fikcyjny kolektyw Misjonarze PTGA i wydaliśmy materiały muzyczne w duchu
            organizacji konwersyjnych. Przerysowanie było celowe — chcieliśmy sprawdzić,
            kto potraktuje to poważnie, a kto zobaczy prowokację.
            Ku naszemu zaskoczeniu przez formularz kontaktowy zgłaszały się prawdziwe osoby
            szukające pomocy. To był sygnał, którego nie można było zignorować.
          </p>

          <p>
            <strong>II. Zwiastun, który zmylił wszystkich</strong>
          </p>
          <p>
            Wydaliśmy trailer sugerujący film demaskujący "szarlatanów". Środowiska afirmatywne
            przyjęły go entuzjastycznie, widząc w nas sojuszników. Środowiska konserwatywne —
            odwrotnie. Żadna strona nie czekała na pełny materiał.
          </p>

          <p>
            <strong>III. Film, który nie dał łatwej odpowiedzi</strong>
          </p>
          <p>
            Zamiast jednostronnej tezy, przedstawiliśmy ponad godzinę czterdzieści materiału: lewicową narrację
            na 28 tematów, te same 28 tematów z perspektywy prawicowej, i szczere podsumowanie
            wyjaśniające cel całego eksperymentu. Reakcje były skrajne — ale po raz pierwszy
            obie strony musiały zmierzyć się z lustrem.
          </p>

          {/* FILM GŁÓWNY */}
          <h3 className="text-2xl mb-4">Film: „Nauka mówi jasno! Terapie konwersyjne to oszustwo"</h3>
          <div className="aspect-video w-full max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/j_izjiTNsBA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>

          <h3 className="text-2xl mb-4">Co z tego wynikło</h3>

          <p>
            Eksperyment ujawnił realną lukę: osoby doświadczające konfliktu między orientacją
            a wyznawanym światopoglądem często nie mają gdzie szukać pomocy.
            Terapie konwersyjne są słusznie zdyskredytowane. Ale standardowe podejście afirmatywne
            też nie odpowiada każdemu. Między nimi jest pustka.
          </p>

          <div className="bg-gray-800 p-6 rounded-lg my-6">
            <h4 className="text-xl mb-4">Propozycja: psycholog orientacji różnicowej</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Neutralny specjalista, który nie narzuca ani afirmacji, ani zmiany orientacji</li>
              <li>Diagnoza i edukacja oparta na aktualnej wiedzy naukowej</li>
              <li>Pomoc w zrozumieniu dostępnych opcji i podjęciu świadomej decyzji</li>
              <li>Kierowanie do terapeuty zgodnie z wyborem pacjenta</li>
              <li>Działanie w granicach etyki i nauki</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              <a href="https://docs.google.com/document/d/1LK-WC4yfLtdYmjNXs1svTsUO_wSECKRsH_ItXp7Gv6U/edit?tab=t.0"
                target="_blank" rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 underline">
                Czytaj pełną koncepcję →
              </a>
            </p>
          </div>

          <p>
            Misjonarze PTGA byli prowokacją — ale z poważnym celem. Dawka absurdu rozłożona
            po równo rozbraja uprzedzenia skuteczniej niż argumenty. W projekt zaangażowały się
            osoby z różnych środowisk, w tym LGBT — bo dystans i poczucie humoru potrafią otworzyć
            rozmowę tam, gdzie dotąd rządził tylko krzyk.
          </p>

        </section>

        {/* TEAM */}
        <section className="bg-gray-900 py-12 px-4">
          <h3 className="text-3xl text-center mb-8">Twórcy projektu</h3>
          <ul className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
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


        {/* SOCIALS */}
        <section className="py-12 px-4">
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
        <section className="max-w-4xl mx-auto py-12 px-4">
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
            className="inline-block py-3 px-6 bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors"
          >
            ← Wróć do wszystkich projektów
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
