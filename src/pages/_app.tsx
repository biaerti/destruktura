// pages/_app.tsx
import "@/styles/globals.css";
import "@/styles/particles.css"; // Dodajemy import particles.css
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}