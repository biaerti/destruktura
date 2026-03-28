'use client';
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/router';

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        setTimeout(() => router.push('/thank-you'), 500);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

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
    <div className="max-w-4xl mx-auto py-0 px-6">
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
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu w sprawach komercyjnych.
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

          {status === 'error' && (
            <p className="text-red-500 text-sm">Coś poszło nie tak. Spróbuj jeszcze raz.</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'submitting'}
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
            {status === 'submitting' ? 'Wysyłam...' : 'Wyślij wiadomość'}
          </button>
        </form>
      </div>
    </div>
  );
}
