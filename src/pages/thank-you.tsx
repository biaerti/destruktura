// pages/thank-you.tsx
import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Dziękujemy!</h1>
      <p className="mb-6 text-center">
        Skontaktujemy się z Tobą w ciągu 48 godzin.
      </p>
      <Link href="/" className="mt-4 inline-block px-6 py-2 bg-red-700 hover:bg-red-800 rounded-lg uppercase tracking-wide text-sm">
        Powrót na stronę główną
      </Link>
    </div>
  );
}
