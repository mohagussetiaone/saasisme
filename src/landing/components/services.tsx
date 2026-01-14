import Menu1Img from "@/assets/images/banner/asset-1.png";
import Menu2Img from "@/assets/images/banner/asset-2.png";
import Menu3Img from "@/assets/images/banner/asset-3.png";
import Menu4Img from "@/assets/images/banner/asset-4.png";

const Services = () => {
  const services = [
    {
      title: "Pengembangan Aplikasi Kustom",
      description: "Solusi software tailor-made sesuai kebutuhan bisnis spesifik Anda",
      img: Menu1Img,
    },
    {
      title: "Integrasi Sistem",
      description: "Menghubungkan berbagai sistem untuk alur kerja yang efisien",
      img: Menu2Img,
    },
    {
      title: "Cloud Solutions",
      description: "Solusi berbasis cloud untuk skalabilitas dan aksesibilitas maksimal",
      img: Menu3Img,
    },
    {
      title: "Keamanan Siber",
      description: "Perlindungan komprehensif untuk aset digital perusahaan Anda",
      img: Menu4Img,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Solusi Teknologi Terintegrasi untuk Setiap Kebutuhan Bisnis</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <img src={service.img} alt={service.title} className="w-20 h-20" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Butuh Solusi Khusus?</h3>
              <p className="text-blue-100">Tim kami siap membantu merancang solusi software sesuai kebutuhan unik bisnis Anda</p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">Konsultasi Gratis</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
