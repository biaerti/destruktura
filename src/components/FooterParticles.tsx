// src/components/FooterParticles.tsx
import React, { useCallback, useRef, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine, Container } from "tsparticles-engine";

interface FooterParticlesProps {
  fullWidth?: boolean;
}

const FooterParticles: React.FC<FooterParticlesProps> = ({ 
  fullWidth = false 
}) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const particlesRef = useRef<Container | null>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
    setIsInitialized(true);
  }, []);
  
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      particlesRef.current = container;
    }
  }, []);

  return (
    <Particles
      id="footer-particles"
      className={`${fullWidth ? 'fixed inset-0' : 'absolute inset-0'}`}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#b30000", // Red color matching the brand
          },
          links: {
            color: "#b30000",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30, // Fewer particles for subtle effect
          },
          opacity: {
            value: 0.3, // More transparent
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default FooterParticles;