import { useState } from "react";

const Portfolio = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const portfolioItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    category: ["Web Application", "Mobile App", "Enterprise System", "Cloud Solution"][i % 4],
    description: "Solusi inovatif untuk kebutuhan bisnis modern",
    // Primary source dengan Picsum
    imageUrl: `https://picsum.photos/600/400?random=${i + 1}`,
    // Fallback URLs
    fallbackUrl: `https://picsum.photos/600/400?random=${i + 100}`,
    placeholderUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
        <rect width="600" height="400" fill="#f3f4f6"/>
        <text x="300" y="200" text-anchor="middle" dy=".3em" font-family="Arial" font-size="18" fill="#9ca3af">Loading Project ${i + 1}</text>
      </svg>
    `)}`,
  }));

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageError = (e: any, item: any) => {
    console.log(`Gambar ${item.id} gagal load, menggunakan fallback`);
    e.target.src = item.fallbackUrl;
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Proyek-Proyek Terbaru yang Telah Kami Selesaikan</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${loadedImages[item.id] ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => handleImageLoad(item.id)}
                  onError={(e) => handleImageError(e, item)}
                />
                {!loadedImages[item.id] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-pulse bg-gray-200 w-full h-full flex items-center justify-center">
                      <span className="text-gray-400">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{item.category}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                  Lihat Detail
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors">Lihat Semua Project</button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
