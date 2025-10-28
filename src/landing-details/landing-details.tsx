"use client";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import nethomeIdProject from "@/assets/images/projects/nethome-project.png";
import nethomeClientProject from "@/assets/images/projects/nethome-clientarea-project.png";
import clientAreaFmi from "@/assets/images/projects/clientarea-fmi-project.png";
import lawsonProject from "@/assets/images/projects/lawson-project.png";
import midErpProject from "@/assets/images/projects/miderp-project.png";
import odnProject from "@/assets/images/projects/odn-project.png";
import weboltProject from "@/assets/images/projects/webolt-project.png";
import spinWebsite from "@/assets/images/projects/spin-website.png";

const projectsData = [
  {
    id: 1,
    title: "Nethome Id",
    category: "Web Application",
    description: "Landing page nethome.id sebagai portal pemasangan internet rumah murah dan cepat",
    imageUrl: nethomeIdProject,
    fullDescription:
      "Nethome.id adalah platform digital yang dirancang untuk memudahkan pelanggan dalam melakukan pemasangan layanan internet rumah. Platform ini menyediakan interface yang user-friendly dengan proses pendaftaran yang cepat dan mudah.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    features: ["Proses pendaftaran online yang mudah", "Kalkulasi harga real-time", "Tracking status pemasangan", "Customer support 24/7"],
    year: 2023,
    client: "Nethome Indonesia",
  },
  {
    id: 2,
    title: "Nethome Client Area",
    category: "Web Application",
    description: "Web App Client Area nethome yang digunakan untuk manajemen pembayaran tagihan, informasi tagihan, proses upgrade dan downgrade layanan internet nethome",
    imageUrl: nethomeClientProject,
    fullDescription:
      "Aplikasi Client Area Nethome adalah dashboard komprehensif yang memungkinkan pelanggan mengelola akun mereka dengan mudah. Fitur-fitur canggih membantu pelanggan memantau penggunaan internet, membayar tagihan, dan mengatur layanan mereka.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Express.js"],
    features: ["Dashboard manajemen akun", "Pembayaran tagihan online", "Upgrade/downgrade layanan", "Riwayat transaksi lengkap", "Notifikasi real-time"],
    year: 2023,
    client: "Nethome Indonesia",
  },
  {
    id: 3,
    title: "Client Area Fibermedia",
    category: "Web Application",
    description: "Web App Client Area Fibermedia yang digunakan untuk manajemen",
    imageUrl: clientAreaFmi,
    fullDescription: "Platform Client Area Fibermedia menyediakan solusi manajemen layanan internet yang komprehensif untuk pelanggan korporat dan individual.",
    technologies: ["React", "Next.js", "PostgreSQL", "Tailwind CSS"],
    features: ["Manajemen layanan internet", "Monitoring kualitas koneksi", "Laporan penggunaan bandwidth", "Support ticket system"],
    year: 2025,
    client: "Fibermedia",
  },
  {
    id: 4,
    title: "Mid ERP",
    category: "Middleware Payment Gateway",
    description: "Aplikasi MID ERP sebagai middleware payment gateway",
    imageUrl: midErpProject,
    fullDescription: "Mid ERP adalah sistem middleware yang mengintegrasikan berbagai payment gateway untuk memproses transaksi dengan aman dan efisien.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    features: ["Integrasi multi-payment gateway", "Enkripsi transaksi tingkat enterprise", "Monitoring real-time", "Reconciliation otomatis", "API documentation lengkap"],
    year: 2025,
    client: "PT Remala Abadi",
  },
  {
    id: 5,
    title: "WEB ODN",
    category: "Web Application",
    description: "WEB ODN digunakan sebagai pencatatan data asset ODN",
    imageUrl: odnProject,
    fullDescription: "Sistem WEB ODN adalah aplikasi manajemen aset yang dirancang untuk mencatat dan melacak semua peralatan Optical Distribution Network.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["Pencatatan aset ODN", "Tracking lokasi peralatan", "Maintenance scheduling", "Laporan aset berkala", "QR code scanning"],
    year: 2025,
    client: "PT Remala Abadi",
  },
  {
    id: 6,
    title: "WEB OLT",
    category: "Web Application",
    description: "WEB OLT digunakan sebagai aktifasi oleh team admin NOC, monotoring akses, hak akses juga manajemen pengelolaan OLT dari PT Remala Abadi yang tersebar dibeberapa wilayah",
    imageUrl: weboltProject,
    fullDescription: "Platform WEB OLT adalah sistem manajemen terpusat untuk mengaktifasi, memonitor, dan mengelola Optical Line Terminal yang tersebar di berbagai lokasi.",
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    features: ["Aktivasi OLT remote", "Real-time monitoring", "Manajemen hak akses", "Alert system", "Multi-region management"],
    year: 2024,
    client: "PT Remala Abadi",
  },
  {
    id: 7,
    title: "Lawson Project Wifi",
    category: "Web Application",
    description: "Lawson project wifi digunakan sebagai platform smart wifi Internet gratis yang di berikan oleh Lawson kepada pihak customer dalam meningkatkan kepuasan customer dan meningkatkan penjualan",
    imageUrl: lawsonProject,
    fullDescription: "Platform Smart WiFi Lawson adalah solusi inovatif yang menyediakan internet gratis kepada pelanggan sambil mengumpulkan data analytics untuk meningkatkan pengalaman berbelanja.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    features: ["WiFi hotspot management", "User authentication", "Analytics dashboard", "Promotional integration", "Bandwidth management"],
    year: 2025,
    client: "Lawson Indonesia",
  },
  {
    id: 8,
    title: "Spin Website",
    category: "Web Application",
    description: "Website Spin yang akan digunakan untuk mengundi hadiah menarik untuk pengunjung pameran",
    imageUrl: spinWebsite,
    fullDescription: "Website Spin adalah platform interaktif untuk mengadakan undian hadiah menarik di acara pameran dan event khusus.",
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    features: ["Spin wheel interaktif", "Prize management", "Winner tracking", "Real-time leaderboard", "Mobile responsive"],
    year: 2025,
    client: "Event Organizer",
  },
];

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === Number(projectId));

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, project yang Anda cari tidak tersedia.</p>
          <Link to="/#portfolio" className="text-blue-600 hover:text-blue-800 font-medium">
            Kembali ke Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/#portfolio" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Portfolio
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{project.description}</p>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>📅 {project.year}</span>
              <span>🏢 {project.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className={`w-full h-full object-contain transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="animate-pulse">
                    <span className="text-gray-400">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Project</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fitur Utama</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Technologies */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Teknologi</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-50 rounded-xl p-6 text-start">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Informasi Project</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Kategori</p>
                    <p className="font-semibold text-gray-900">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Tahun</p>
                    <p className="font-semibold text-gray-900">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Klien</p>
                    <p className="font-semibold text-gray-900">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Lainnya</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projectsData
                .filter((p) => p.id !== Number(projectId))
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} to={`/project/${relatedProject.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                      <div className="h-40 overflow-hidden bg-gray-100">
                        <img src={relatedProject.imageUrl || "/placeholder.svg"} alt={relatedProject.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2">{relatedProject.title}</h3>
                        <p className="text-sm text-gray-600">{relatedProject.category}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
