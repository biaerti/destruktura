
// src/components/Header.tsx - Adding mobile menu functionality
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const nav = [
  { label: "O nas",     href: "/o-nas" },
  { label: "Projekty",  href: "/#projects" },
  { label: "Proces",    href: "/#process" },
  { label: "Kontakt",   href: "/#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="Destruktura" width={160} height={56} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          {nav.map((l) => (
            <Link 
              key={l.href} 
              href={l.href} 
              className="hover:text-red-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">
            {mobileMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-menu" 
          className="md:hidden bg-black/90 backdrop-blur-md py-4 px-6 border-t border-red-900/30"
        >
          <ul className="flex flex-col gap-4">
            {nav.map((l) => (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="block py-2 text-white hover:text-red-600 text-lg uppercase tracking-wide transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;