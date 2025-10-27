import { useState } from "react";
import { Send } from "react-feather";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Menampilkan toast dari Sonner
    toast.success("Data Anda sudah terkirim!");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Kami siap membantu Anda. Silakan hubungi kami untuk informasi lebih lanjut tentang produk dan layanan kami.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Formulir Kontak */}
          <div className="bg-white cols-span-3 md:col-span-2 rounded-xl shadow-md p-8 text-start">
            <h3 className="text-xl font-semibold mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subjek
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <Send size={18} className="mr-2" />
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Informasi Kontak & Peta */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <h3 className="text-xl font-semibold p-6 pb-0">Lokasi Kami</h3>
              <div className="p-1">
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182.04181308722258!2d106.846932300898!3d-6.238989466921384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3be7b4fbbcf%3A0xfde275af88883179!2sSolusi%20Aplikasi%20Andalan%20Semesta!5e1!3m2!1sid!2sid!4v1761301266052!5m2!1sid!2sid"
                      width="600"
                      height="450"
                      style={{ border: 0, width: "100%", height: "250px" }}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
