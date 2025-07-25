// src/pages/index.tsx - Updated to fix duplicate "Nasze projekty" heading and padding consistency
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GlitchHero from '@/components/GlitchHero';
import StickyStrip from '@/components/StickyStrip';
import ProjectsGrid from '@/components/ProjectsGrid';
import ProcessSectionWrapper from '@/components/ProcessSectionWrapper';
import ProcessStepper from '@/components/ProcessStepper';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Destruktura – Kreatywne kampanie społeczne</title>
        <meta name="description" content="Agencja kreatywna specjalizująca się w kontrowersyjnych, wyrazistych kampaniach społecznych. Łączymy marketing, sztukę i rebeliancki zapał, żeby przełamywać społeczne tabu." />
      </Head>

      <Header />

      {/* Hero - z fullWidth=false aby cząsteczki były ograniczone do sekcji */}
      <div className="relative overflow-hidden">
        <GlitchHero fullWidth={false} />
      </div>

      {/* Sticky strip - zwiększamy padding, by był spójny z innymi sekcjami */}
      <StickyStrip />

      {/* Projects - używamy jednej sekcji z nagłówkiem */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <ProjectsGrid />
        </div>
      </section>

      {/* Process - bez dodatkowego nagłówka, jest już wewnątrz komponentu */}
      <div id="process" className="py-16">
        <ProcessSectionWrapper>
          <ProcessStepper />
        </ProcessSectionWrapper>
      </div>

      {/* Contact - wyrównujemy padding */}
      <section id="contact" className="py-16 px-6">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}