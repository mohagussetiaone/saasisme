// src/App.tsx
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Features from "./components/features";
import Portfolio from "./components/portfolio";
import TrustedBy from "./components/trusted-by";
import Contact from "./components/contact";

function Landing() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <TrustedBy />
      <Contact />

      {/* Scroll to Top Button */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full mb-2 right-0 bg-gray-800 text-white text-sm py-1 px-2 rounded-md whitespace-nowrap">
              Scroll ke Atas
              <div className="absolute top-full right-2 -mt-1 border-4 border-transparent border-t-gray-800"></div>
            </div>
          )}

          {/* Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default Landing;
