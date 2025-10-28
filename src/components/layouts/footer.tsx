import LogoImg from "@/assets/images/logo/logo-light.jpg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={LogoImg} alt="SAAS Logo" width={80} height={80} />
            </div>
            <p className="text-xl mb-6">PT Solusi Aplikasi Andalan Semesta</p>

            <div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex">
                  <span>Ruko Inkopau Blok J3 Jl Raya Bekasi KM 25 RT 15 RW 01, Ujung Menteng Kecamatan Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13960</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(021) 83709269</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-white">
                  Pengembangan Aplikasi
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="text-gray-400 hover:text-white">
                  Integrasi Sistem
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white">
                  Konsultasi IT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-gray-400 hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/#trusted-by" className="text-gray-400 hover:text-white">
                  Partner
                </a>
              </li>
              <li>
                <a href="https://remala.id/aboutus/profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Remala Group
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} PT Solusi Aplikasi Andalan Semesta. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Member of PT Remala Abadi Tbk (Remala Group)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
