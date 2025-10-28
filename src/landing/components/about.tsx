import SAASOfficeImg from "@/assets/images/background/office.jpg";
import LogoRemala from "@/assets/images/logo/logoremala.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tentang kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Solusi Inovatif untuk Transformasi Digital Bisnis Anda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">PT Solusi Aplikasi Andalan Semesta</h3>
            <p className="text-gray-600 mb-4">
              Perusahaan pengembang solusi software terkemuka yang merupakan bagian dari PT Remala Abadi Tbk (Remala Group). Sebagai anak perusahaan dari salah satu penyedia layanan internet terbesar di Indonesia, kami menghadirkan solusi
              teknologi yang inovatif dan terintegrasi untuk berbagai kebutuhan bisnis.
            </p>
            <p className="text-gray-600 mb-4">
              Dengan pengalaman lebih dari 4 tahun di industri teknologi, kami telah membantu ratusan perusahaan dalam melakukan transformasi digital melalui solusi software yang handal, aman, dan scalable.
            </p>
            <div className="flex items-center mt-6">
              <div className="mr-4">
                <div className="w-14 h-14 p-2 bg-blue-100 rounded-full flex items-center justify-center">
                  <img src={LogoRemala} alt="Remala Group Logo" />
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg">Bagian dari Remala Group</h4>
                <p className="text-gray-600">Didukung oleh infrastruktur teknologi terkini</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white p-2 rounded-xl shadow-xl">
              <img src={SAASOfficeImg} alt="SAAS Office" className="rounded-lg" />
            </div>
            <div className="absolute h-[200px] -bottom-3 -right-3 z-0 bg-blue-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="font-bold">10+ Project Selesai</p>
              <p>Untuk berbagai industri di Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
