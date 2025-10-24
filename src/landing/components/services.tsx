const Services = () => {
  const services = [
    {
      title: "Pengembangan Aplikasi Kustom",
      description: "Solusi software tailor-made sesuai kebutuhan bisnis spesifik Anda",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      title: "Integrasi Sistem",
      description: "Menghubungkan berbagai sistem untuk alur kerja yang efisien",
      icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    },
    {
      title: "Cloud Solutions",
      description: "Solusi berbasis cloud untuk skalabilitas dan aksesibilitas maksimal",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z",
    },
    {
      title: "Keamanan Siber",
      description: "Perlindungan komprehensif untuk aset digital perusahaan Anda",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Solusi Teknologi Terintegrasi untuk Setiap Kebutuhan Bisnis</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Butuh Solusi Khusus?</h3>
              <p className="text-blue-100">Tim kami siap membantu merancang solusi software sesuai kebutuhan unik bisnis Anda</p>
            </div>
            <div className="md:w-1/3 text-center md:text-right">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">Konsultasi Gratis</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
