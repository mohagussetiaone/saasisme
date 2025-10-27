// src/components/Features.tsx
const Features = () => {
  const features = [
    {
      title: "Tim Profesional",
      description: "Didukung oleh pengembang berpengalaman dengan sertifikasi internasional",
    },
    {
      title: "Teknologi Terkini",
      description: "Menggunakan framework dan tools terdepan untuk solusi yang future-proof",
    },
    {
      title: "Integrasi Mudah",
      description: "Kemampuan integrasi dengan sistem existing tanpa mengganggu operasional",
    },
    {
      title: "Keamanan Terjamin",
      description: "Standar keamanan tinggi dengan enkripsi end-to-end dan audit rutin",
    },
    {
      title: "Skalabilitas Tinggi",
      description: "Solusi yang dapat berkembang seiring pertumbuhan bisnis Anda",
    },
    {
      title: "Dukungan 24/7",
      description: "Tim support siap membantu kapan saja untuk menjamin kelancaran operasional",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5" style={{ backgroundImage: `url('https://source.unsplash.com/random/1920x1080/?abstract,blue')` }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mengapa Memilih SAAS?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Keunggulan yang Membedakan Kami dari Penyedia Lainnya</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors duration-300">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 p-2 md:p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Dukungan Penuh dari Remala Group</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">Sebagai bagian dari ekosistem Remala Group, kami memiliki akses ke infrastruktur teknologi terdepan dan jaringan industri yang luas</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
