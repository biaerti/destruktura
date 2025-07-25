'use client';
import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  // Podmień "xnndnkwd" na swoje ID formularza z Formspree
  const [state, handleSubmit] = useForm('xnndnkwd');
  const router = useRouter();

  // Po udanym wysłaniu przekierowuj na /thank-you
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => router.push('/thank-you'), 500);
    }
  }, [state.succeeded, router]);

  // Glitchowy jitter na focus pól
  useEffect(() => {
    document.querySelectorAll('input, textarea').forEach((el) =>
      el.addEventListener('focus', () => {
        gsap.fromTo(
          el,
          { x: -1, y: 0 },
          { x: 1, y: 1, duration: 0.1, repeat: 3, yoyo: true }
        );
      })
    );
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      {/* Poprawiony nagłówek - Montserrat 400, do lewej */}
      <h2 className="text-3xl md:text-4xl font-display text-white mb-12 text-center">Skontaktuj się z nami!</h2>
      
      <div className="max-w-md mx-auto p-10 bg-black rounded-2xl border-2 border-red-700/60 font-sans">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Imię */}
          <div>
            <label htmlFor="name" className="block text-gray-300 text-sm mb-1">
              Imię
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-red-600 outline-none py-2"
              placeholder="Twoje imię"
            />
            <ValidationError
              prefix="Imię"
              field="name"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-red-600 outline-none py-2"
              placeholder="email@adres.pl"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Wiadomość */}
          <div>
            <label htmlFor="message" className="block text-gray-300 text-sm mb-1">
              Twoja wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 text-white placeholder-gray-500 focus:border-red-600 outline-none py-2"
              placeholder="Napisz, o co chodzi..."
            />
            <ValidationError
              prefix="Wiadomość"
              field="message"
              errors={state.errors}
              className="text-red-500 text-xs mt-1"
            />
          </div>

          {/* Zgoda na przetwarzanie danych (wymagane) */}
          <div className="flex items-start space-x-2 mt-8">
            <input
              id="agree"
              type="checkbox"
              name="agree"
              required
              className="mt-1 accent-red-600"
            />
            <label htmlFor="agree" className="text-xs text-gray-400 font-sans">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu przygotowania wyceny.
            </label>
          </div>

          {/* Subskrypcja (opcjonalne) */}
          <div className="flex items-start space-x-2">
            <input
              id="subscribe"
              type="checkbox"
              name="subscribe"
              className="mt-1 accent-red-600"
            />
            <label htmlFor="subscribe" className="text-xs text-gray-400 font-sans">
              Chcę otrzymywać informacje o przyszłych projektach Destruktury.
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="
              w-full py-3 mt-10
              bg-red-700/90 hover:bg-red-800/90
              disabled:opacity-50
              rounded-lg
              text-white
              font-sans font-bold
              text-sm uppercase tracking-wide
              transition
            "
          >
            {state.submitting ? 'Wysyłam...' : 'Wyślij wiadomość'}
          </button>
        </form>
      </div>
    </div>
  );
}