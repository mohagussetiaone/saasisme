"use client";

import { useState } from "react";
import { Link } from "react-router";
import nethomeIdProject from "@/assets/images/projects/nethome-project.png";
import nethomeClientProject from "@/assets/images/projects/nethome-clientarea-project.png";
import clientAreaFmi from "@/assets/images/projects/clientarea-fmi-project.png";
import lawsonProject from "@/assets/images/projects/lawson-project.png";
import midErpProject from "@/assets/images/projects/miderp-project.png";
import odnProject from "@/assets/images/projects/odn-project.png";
import weboltProject from "@/assets/images/projects/webolt-project.png";
import spinWebsite from "@/assets/images/projects/spin-website.png";

const Portfolio = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const portfolioItemss = [
    {
      id: 1,
      title: "Nethome Id",
      category: "Web Application",
      description: "Landing page nethome.id sebagai portal pemasangan internet rumah murah dan cepat",
      imageUrl: nethomeIdProject,
      fallbackUrl: nethomeIdProject,
    },
    {
      id: 2,
      title: "Nethome Client Area",
      category: "Web Application",
      description: "Web App Client Area nethome yang digunakan untuk manajemen pembayaran tagihan, informasi tagihan, proses upgrade dan downgrade layanan internet nethome",
      imageUrl: nethomeClientProject,
      fallbackUrl: nethomeClientProject,
    },
    {
      id: 3,
      title: "Client Area Fibermedia",
      category: "Web Application",
      description: "Web App Client Area Fibermedia yang digunakan untuk manajemen ",
      imageUrl: clientAreaFmi,
      fallbackUrl: clientAreaFmi,
    },
    {
      id: 4,
      title: "Mid ERP",
      category: "Middleware Payment Gateway",
      description: "Aplikasi MID ERP sebagai middleware payment gateway",
      imageUrl: midErpProject,
      fallbackUrl: midErpProject,
    },
    {
      id: 5,
      title: "WEB ODN",
      category: "Web Application",
      description: "WEB ODN digunakan sebagai pencatatan data asset ODN",
      imageUrl: odnProject,
      fallbackUrl: odnProject,
    },
    {
      id: 6,
      title: "WEB OLT",
      category: "Web Application",
      description: "WEB OLT digunakan sebagai aktifasi oleh team admin NOC, monotoring akses, hak akses juga manajemen pengelolaan OLT dari PT Remala Abadi yang tersebar dibeberapa wilayah",
      imageUrl: weboltProject,
      fallbackUrl: weboltProject,
    },
    {
      id: 7,
      title: "Lawson Project Wifi",
      category: "Web Application",
      description: "Lawson project wifi digunakan sebagai platform smart wifi Internet gratis yang di berikan oleh Lawson kepada pihak customer dalam meningkatkan kepuasan customer dan meningkatkan penjualan",
      imageUrl: lawsonProject,
      fallbackUrl: lawsonProject,
    },
    {
      id: 8,
      title: "Spin Website",
      category: "Web Application",
      description: "Website Spin yang akan digunakan untuk mengundi hadiah menarik untuk pengunjung pameran",
      imageUrl: spinWebsite,
      fallbackUrl: spinWebsite,
    },
  ];

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
          {portfolioItemss.map((item) => (
            <Link key={item.id} to={`/project/${item.id}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
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
                  <div className="flex flex-col gap-2 justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{item.category}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  <div className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">
                    Lihat Detail
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
