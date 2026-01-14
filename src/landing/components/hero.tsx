import { Vortex } from "@/components/ui/vortex";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="w-full mx-auto rounded-md h-screen overflow-hidden">
      <Vortex backgroundColor="black" className="flex items-center flex-col justify-center w-full h-full">
        {/* Konten */}
        <div className="mx-auto px-4 z-10 text-start md:text-center text-white">
          <h3 className="text-3xl md:text-5xl mb-4">PT Solusi Aplikasi Andalan Semesta</h3>
          <p className="text-sm md:text-2xl mb-8 max-w-3xl mx-auto">Solusi Digital untuk Konektivitas dan Bisnis</p>
          <div className="inline-block justify-center text-center">
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="#services" className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-full text-lg transition-colors">
                Jelajahi Layanan
              </Link>
              <Link to="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full text-lg transition-colors">
                Hubungi Kami
              </Link>
            </div>
          </div>
          {/* <div className="mt-12 border border-white/30 bg-white/10 backdrop-blur-md p-4 rounded-lg max-w-2xl mx-auto">
          <p className="text-lg">Leading Internet Service Provider in Indonesia</p>
        </div> */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute border rounded-full border-white p-2 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </Vortex>
    </section>
  );
};

export default Hero;
