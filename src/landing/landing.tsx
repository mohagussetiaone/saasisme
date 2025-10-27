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
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <TrustedBy />
      <Contact />
    </div>
  );
}

export default Landing;
