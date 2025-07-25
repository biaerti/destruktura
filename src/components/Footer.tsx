// src/components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-red-800/30 overflow-hidden">
      {/* Background with fixed gradient instead of particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70"></div>
        {/* Optional subtle dot pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(179, 0, 0, 0.2) 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
      </div>
      
   {/* Top part with logo and navigation */}
   <div className="container mx-auto py-12 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo, tagline and contact */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="Destruktura" 
                width={180} 
                height={64} 
                className="mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Agencja kreatywna specjalizująca się w kontrowersyjnych, wyrazistych kampaniach społecznych.
            </p>
            
            {/* Kontakt */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center">
                <MdEmail className="text-red-600 mr-2" />
                <a href="mailto:kontakt@destruktura.pl" className="text-gray-400 hover:text-white transition-colors">
                  kontakt@destruktura.pl
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/o-nas" className="text-gray-400 hover:text-white transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projekty
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-gray-400 hover:text-white transition-colors">
                  Proces
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Polityka Prywatności
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect with us */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 text-red-600">Znajdź nas</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-xl mb-6">
              <a 
                href="https://www.instagram.com/destruktura_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61561222487085" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://www.instagram.com/destruktura_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
            
            {/* Animated bracket element */}
            <div className="relative h-20 mt-4 mx-auto md:mx-0 w-64 md:w-80">
              <div className="footer-bracket-left text-4xl">
                [
              </div>
              <div className="text-center text-xs text-gray-300 px-6"> <br></br>
                <i>W fizyce cząstki zderzają się, by uwolnić energię. 
                W kulturze – idee. W tym procesie – my jesteśmy zderzaczem.</i>
              </div>
              <div className="footer-bracket-right text-4xl">
                ]
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright */}
      <div className="border-t border-gray-800 py-6 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Destruktura. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            <span className="inline-block w-3 h-3 bg-red-600 rounded-full mr-2 align-middle"></span>
            Toruń, Polska
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;