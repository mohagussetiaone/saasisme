import remalaImg from "@/assets/images/logo/logoremala.png";
import tachyonImg from "@/assets/images/logo/tachyon.png";
import lawsonImg from "@/assets/images/logo/lawson.png";
import rsPermataImg from "@/assets/images/logo/rspermata.png";
import fmiImg from "@/assets/images/logo/fmi.png";
import nethomeImg from "@/assets/images/logo/nethome.png";
import fkiImg from "@/assets/images/logo/fki.png";

const TrustedBy = () => {
  const partners = [
    { id: 1, img: remalaImg, name: "PT Remala Abadi Tbk", industry: "Ritel" },
    { id: 2, img: fmiImg, name: "PT Fibermedia Indonesia", industry: "Kesehatan" },
    { id: 3, img: tachyonImg, name: "Tachyon Net", industry: "Pendidikan" },
    { id: 4, img: lawsonImg, name: "Lawson Indonesia", industry: "Pendidikan" },
    { id: 5, img: rsPermataImg, name: "Rumah Sakit Permata Bekasi", industry: "Pendidikan" },
    { id: 6, img: nethomeImg, name: "Nethome.Id", industry: "Media" },
    { id: 7, img: fkiImg, name: "Fiberkerumah Indonesia", industry: "Media" },
  ];

  // Duplikasi data untuk membuat animasi loop yang mulus
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden" id="trusted-by">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Telah Dipercaya Oleh</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Perusahaan-perusahaan terkemuka yang telah mempercayai solusi software kami</p>
        </div>

        {/* Container untuk animasi bergerak */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex flex-col items-center justify-center p-6 mx-4 rounded-lg shrink-0 w-48">
                <div className="w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <img src={partner.img} alt={partner.name} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="font-semibold text-center text-sm whitespace-nowrap">{partner.name}</h3>
                {/* <p className="text-gray-500 text-xs text-center mt-1">{partner.industry}</p> */}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-blue-800 font-medium">7+ Perusahaan telah mempercayai kami</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
