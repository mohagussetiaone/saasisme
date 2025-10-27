import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linier-to-br from-blue-50 to-indigo-100 p-4">
      {/* Animasi 404 */}
      <div className="relative">
        <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-linier-to-r from-blue-600 to-purple-600 animate-pulse">404</div>

        {/* Efek glow */}
        <div className="absolute inset-0 bg-linier-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 animate-pulse -z-10"></div>
      </div>

      {/* Pesan Error */}
      <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800 text-center">Halaman Tidak Ditemukan</h1>

      <p className="mt-4 text-lg text-gray-600 max-w-md text-center">Sepertinya Anda tersesat! Halaman yang Anda cari tidak ada atau telah dipindahkan.</p>

      {/* Tombol Aksi */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link to="/" className="px-8 py-3 text-black rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          Kembali ke Beranda
        </Link>

        <button onClick={() => window.history.back()} className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300">
          Kembali ke Halaman Sebelumnya
        </button>
      </div>

      {/* Ilustrasi */}
      <div className="mt-12 max-w-lg">
        <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Astronot */}
          <circle cx="200" cy="120" r="40" fill="#E0E7FF" />
          <path d="M180 120C180 100 220 100 220 120L215 140C215 145 185 145 185 140L180 120Z" fill="#6366F1" />
          <circle cx="190" cy="115" r="3" fill="white" />
          <circle cx="210" cy="115" r="3" fill="white" />

          {/* Planet */}
          <circle cx="100" cy="200" r="30" fill="#A5B4FC" opacity="0.7" />
          <circle cx="300" cy="80" r="20" fill="#C7D2FE" opacity="0.5" />

          {/* Bintang */}
          <circle cx="50" cy="50" r="2" fill="#818CF8" />
          <circle cx="350" cy="40" r="3" fill="#6366F1" />
          <circle cx="320" cy="250" r="2" fill="#A5B4FC" />
        </svg>
      </div>
    </div>
  );
};

export default NotFound;
