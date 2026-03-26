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

{/* Sticky strip - przylega do hero na górze */}
<StickyStrip />


    {/* Projects */}
    <section id="projects" className="py-16 px-6">
      <ProjectsGrid />  {/* ← bez dodatkowego container */}
    </section>

      {/* Process - bez dodatkowego nagłówka, jest już wewnątrz komponentu */}
      <div id="process" className="py-4">
        <ProcessSectionWrapper>
          <ProcessStepper />
        </ProcessSectionWrapper>
      </div>

      {/* Contact - wyrównujemy padding */}
      <section id="contact" className="py-12 px-6">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}