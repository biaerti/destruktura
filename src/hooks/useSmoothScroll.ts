// src/hooks/useSmoothScroll.ts - Hook do obsługi płynnego przewijania
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// Rejestrujemy plugin ScrollToPlugin do gsap
gsap.registerPlugin(ScrollToPlugin);

// Konfiguracja efektu
interface SmoothScrollConfig {
  // Czas trwania animacji w sekundach
  duration?: number;
  // Dodatkowy offset od góry (np. dla sticky header)
  offset?: number;
  // Czy animować cząsteczki podczas przewijania
  animateParticles?: boolean;
  // Czy użyć efektu "destrukcji" podczas przewijania
  useDestructionEffect?: boolean;
}

export default function useSmoothScroll(config: SmoothScrollConfig = {}) {
  const {
    duration = 1.2,
    offset = -80, // Domyślny offset dla sticky header
    animateParticles = true,
    useDestructionEffect = true,
  } = config;

  useEffect(() => {
    // Klasa dla elementów, które mają mieć smooth scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');

    // Tworzymy element do animacji cząsteczek
    let particleEmitter: HTMLDivElement | null = null;
    
    if (animateParticles) {
      particleEmitter = document.createElement('div');
      particleEmitter.className = 'scroll-particles';
      particleEmitter.style.cssText = `
        position: fixed;
        pointer-events: none;
        width: 20px;
        height: 20px;
        z-index: 9999;
        display: none;
      `;
      document.body.appendChild(particleEmitter);
    }

    // Funkcja tworząca cząsteczkę
    const createParticle = (x: number, y: number) => {
      if (!particleEmitter) return;
      
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        background-color: #b30000;
        width: ${2 + Math.random() * 6}px;
        height: ${2 + Math.random() * 6}px;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(179, 0, 0, 0.8);
        transform: translate(-50%, -50%);
        opacity: 0.9;
      `;
      
      particleEmitter.appendChild(particle);
      
      // Animacja cząsteczki - rozproszenie i zanikanie
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: 0.8 + Math.random() * 0.6,
        ease: "power2.out",
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }
      });
    };

    // Funkcja aktualizująca pozycję emittera cząsteczek
    const updateEmitterPosition = (x: number, y: number) => {
      if (!particleEmitter) return;
      
      particleEmitter.style.display = 'block';
      particleEmitter.style.left = `${x}px`;
      particleEmitter.style.top = `${y}px`;
      
      // Tworzymy kilka cząsteczek
      for (let i = 0; i < 5; i++) {
        createParticle(x, y);
      }
    };

    // Efekt "destrukcji" podczas przewijania
    const createDestructionEffect = (targetSection: HTMLElement) => {
      if (!useDestructionEffect) return;
      
      // Zapisujemy oryginalne właściwości elementu
      const originalTransform = targetSection.style.transform;
      const originalOpacity = targetSection.style.opacity;
      const originalTransition = targetSection.style.transition;
      
      // Ustawiamy początkowy wygląd z lekkim przesunięciem i powiększeniem
      gsap.set(targetSection, {
        opacity: 0.3,
        scale: 1.05,
        x: 10,
        filter: 'blur(5px) brightness(1.2)',
      });
      
      // Animujemy do normalnego stanu
      gsap.to(targetSection, {
        opacity: 1,
        scale: 1,
        x: 0,
        filter: 'blur(0px) brightness(1)',
        duration: 0.5,
        ease: "power3.out",
        delay: duration * 0.9, // Opóźnienie, aby efekt pojawił się gdy skończymy przewijanie
      });
    };

    // Obsługa kliknięcia na link z kotwicą
    const handleClick = (e: Event) => {
      e.preventDefault();
      
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href') as string;
      
      // Jeśli to zwykły hasz lub kotwica której nie ma w DOM, to pomijamy
      if (targetId === '#' || !document.querySelector(targetId)) return;
      
      // Element, do którego przewijamy
      const targetSection = document.querySelector(targetId) as HTMLElement;
      
      // Pozycja, do której chcemy przescrollować
      const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;
      
      // Aktualna pozycja Y kliknięcia - do animacji cząsteczek
      const clickY = (e as MouseEvent).clientY;
      const clickX = (e as MouseEvent).clientX;
      
      if (animateParticles) {
        // Pokazujemy emiter cząsteczek w miejscu kliknięcia
        updateEmitterPosition(clickX, clickY);
        
        // Tworzymy interval, który będzie tworzył cząsteczki podczas przewijania
        let lastY = window.scrollY;
        const particlesInterval = setInterval(() => {
          const scrollProgress = Math.abs(window.scrollY - lastY) / 10;
          
          // Im szybciej scrollujemy, tym więcej cząsteczek
          const particlesToCreate = Math.floor(scrollProgress);
          
          // Aktualizujemy pozycję emitera podczas przewijania
          updateEmitterPosition(
            clickX, 
            clickY + (window.scrollY - lastY) * 0.5
          );
          
          // Zapisujemy ostatnią pozycję
          lastY = window.scrollY;
        }, 50);
        
        // Zatrzymujemy interval po zakończeniu przewijania
        setTimeout(() => {
          clearInterval(particlesInterval);
          if (particleEmitter) particleEmitter.style.display = 'none';
        }, duration * 1000 + 100);
      }
      
      // Animujemy przewinięcie do targetPosition
      gsap.to(window, {
        scrollTo: {
          y: targetPosition,
          autoKill: false, // Aby pozwolić na ręczne przerwanie animacji
        },
        duration: duration,
        ease: "power3.inOut", // Zmień na inny efekt jeśli wolisz
        onComplete: () => {
          // Updatujemy URL po zakończeniu przewijania
          window.history.pushState(null, '', targetId);
        }
      });
      
      // Dodajemy efekt "destrukcji" dla sekcji docelowej
      createDestructionEffect(targetSection);
    };

    // Dodajemy obsługę zdarzenia click dla każdego linku z kotwicą
    smoothLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    // Czyszczenie przy odmontowaniu
    return () => {
      smoothLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
      
      if (particleEmitter && particleEmitter.parentNode) {
        particleEmitter.parentNode.removeChild(particleEmitter);
      }
    };
  }, [duration, offset, animateParticles, useDestructionEffect]);
}