// src/App.tsx
import { useEffect, useState } from "react";
import Hero from "./landing/components/hero";
import About from "./landing/components/about";
import Services from "./landing/components/services";
import Features from "./landing/components/features";
import Portfolio from "./landing/components/portfolio";
import Footer from "./components/layouts/footer";
import Navbar from "./components/layouts/navbar";
import TrustedBy from "./landing/components/trusted-by";

function App() {
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
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <TrustedBy />
      <Footer />
    </div>
  );
}

export default App;
