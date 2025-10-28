import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import LogoImg from "@/assets/images/logo/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll to hash ketika location berubah
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleHashClick = (hash: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      closeMenu();
      navigate(`/#${hash}`);
      // Scroll manual setelah navigasi
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    };
  };

  return (
    <nav className="sticky top-0 bg-white w-full z-50 transition-all duration-300">
      <div className="container mx-auto p-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center justify-center">
            <img src={LogoImg} width={80} height={80} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" onClick={handleHashClick("services")} className="hover:text-blue-600 text-black transition-colors">
            Layanan
          </a>
          <a href="#features" onClick={handleHashClick("features")} className="hover:text-blue-600 text-black transition-colors">
            Keunggulan
          </a>
          <a href="#portfolio" onClick={handleHashClick("portfolio")} className="hover:text-blue-600 text-black transition-colors">
            Portfolio
          </a>
          <a href="#about" onClick={handleHashClick("about")} className="hover:text-blue-600 text-black transition-colors">
            Tentang Kami
          </a>
        </div>

        {/* Hubungi Kami Button - Hidden on mobile */}
        <a href="#contact" onClick={handleHashClick("contact")} className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Hubungi Kami
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1 p-2" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden p-2 bg-white absolute top-full left-0 w-full shadow-lg transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <a href="#services" onClick={handleHashClick("services")} className="hover:text-blue-600 text-black transition-colors py-2">
            Layanan
          </a>
          <a href="#features" onClick={handleHashClick("features")} className="hover:text-blue-600 text-black transition-colors py-2">
            Keunggulan
          </a>
          <a href="#portfolio" onClick={handleHashClick("portfolio")} className="hover:text-blue-600 text-black transition-colors py-2">
            Portfolio
          </a>
          <a href="#about" onClick={handleHashClick("about")} className="hover:text-blue-600 text-black transition-colors py-2">
            Tentang Kami
          </a>
          <a href="#contact" onClick={handleHashClick("contact")} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors text-center">
            Hubungi Kami
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
