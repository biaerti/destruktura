// src/pages/privacy-policy.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Polityka Prywatności - Destruktura</title>
        <meta name="description" content="Polityka prywatności Destruktura - kreatywnej agencji kampanii społecznych" />
      </Head>

      <Header />

      <main className="pt-20 bg-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-8 text-red-600">Polityka Prywatności</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Informacje ogólne</h2>
              <p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem przez nich z usług oferowanych przez stronę internetową Destruktura.</p>
              <p>Administratorem danych osobowych zawartych na stronie jest:</p>
              <div className="bg-gray-900 p-4 rounded-lg my-4">
                <p>Bartosz Kuniński</p>
                <p>Wojska Polskiego 31/23</p>
                <p>18-400 Łomża</p>
                <p>E-mail: bartosz.kuninski@gmail.com</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Rodzaj i cel przetwarzanych danych</h2>
              <p>Administrator przetwarza następujące dane osobowe, których podanie jest niezbędne do:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy (imię, adres e-mail, treść wiadomości)</li>
                <li>Przygotowania wyceny i realizacji usług</li>
                <li>Przesyłania informacji marketingowych, jeśli Użytkownik wyraził na to zgodę</li>
              </ul>
              <p>Dane są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO).</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Prawa użytkowników</h2>
              <p>Użytkownik ma prawo do:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania danych</li>
                <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania</li>
                <li>Przenoszenia danych</li>
                <li>Sprzeciwu wobec przetwarzania danych</li>
                <li>Wycofania zgody na przetwarzanie danych osobowych w dowolnym momencie</li>
              </ul>
              <p>Aby skorzystać z powyższych praw, należy skontaktować się z Administratorem poprzez adres e-mail: bartosz.kuninski@gmail.com</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Okres przechowywania danych</h2>
              <p>Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, w których zostały zebrane, a następnie przez okres wymagany przez przepisy prawa, w szczególności:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dane związane z przygotowaniem wyceny - do czasu zakończenia procesu wyceny</li>
                <li>Dane związane z usługami - do czasu zakończenia świadczenia usług i przedawnienia roszczeń</li>
                <li>Dane do celów marketingowych - do czasu wycofania zgody przez Użytkownika</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Pliki cookies</h2>
              <p>Strona wykorzystuje pliki cookies (ciasteczka), które są małymi plikami tekstowymi umieszczanymi na urządzeniu końcowym Użytkownika. Służą one do:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Dostosowania zawartości strony do preferencji Użytkownika</li>
                <li>Optymalizacji korzystania ze strony</li>
                <li>Tworzenia statystyk oglądalności</li>
              </ul>
              <p>Użytkownik może w każdej chwili wyłączyć obsługę plików cookies w ustawieniach swojej przeglądarki.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Bezpieczeństwo danych</h2>
              <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych przed nieuprawnionym dostępem, zmianą, ujawnieniem i zniszczeniem.</p>
              <p>W przypadku pytań dotyczących Polityki Prywatności, prosimy o kontakt na adres e-mail: bartosz.kuninski@gmail.com</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;