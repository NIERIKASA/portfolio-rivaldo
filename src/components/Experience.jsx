import { useState } from "react";
import { X } from "lucide-react";

// Import foto dari folder assets sesuai dengan nama file
import fotoMagang1 from "../assets/dodoMagang1.jpg";
import fotoMagang2 from "../assets/dodoMagang2.jpg";
import fotoMagang3 from "../assets/dodoMagang3.jpg";
import fotoMagang4 from "../assets/dodoMagang4.jpg";
import fotoG20_1 from "../assets/dodog20.jpeg";
import fotoG20_2 from "../assets/dodog20-1.jpeg";
import fotoKurir from "../assets/dodokurir.jpeg";
import fototelemarketing from "../assets/dodotelemarketing.jpeg";

export default function Experience() {
  const [selectedImages, setSelectedImages] = useState(null);

  const experiences = [
    {
      id: 1,
      period: "Agustus 2025 - November 2025",
      role: "Data Engineer Intern",
      company: "Jakarta Smart City",
      description:
        "Selama kegiatan magang, saya bertanggung jawab dalam manajemen basis data dan optimasi pipeline ETL/ELT menggunakan SQL dan PostgreSQL untuk memastikan ketersediaan data yang bersih dan siap diolah pada tahap analitik. Sebagai inisiatif proyek akhir untuk mempermudah operasional harian tim Data Engineer, saya mengembangkan aplikasi website Advance Cleansing. Saya secara aktif berpartisipasi dalam evaluasi, kolaborasi, dan iterasi pengembangan proyek ini, mempresentasikan progres mingguan secara langsung, serta mengimplementasikan revisi teknis berdasarkan umpan balik tim. Saya juga mengeksekusi pengembangan fitur tingkat lanjut, dengan fokus pada perancangan dan modifikasi halaman 'Analysis Cepat Respon Masyarakat'. Selain pengembangan sistem, saya secara konsisten berhasil menyediakan set data yang bersih, melakukan analisis awal, dan berkolaborasi dengan tim Data Analyst untuk memproduksi dashboard visualisasi yang komprehensif menggunakan Tableau dan PowerBI. Di samping tugas teknis, saya terlibat aktif dalam membangun relasi di lingkungan kerja, mulai dari mengikuti orientasi alur kerja hingga berpartisipasi dalam kegiatan team-building.",
      proofImages: [fotoMagang1, fotoMagang2, fotoMagang3, fotoMagang4],
    },
    {
      id: 2,
      period: "Juni 2022 - Juli 2022",
      role: "Data Entry G20 Bali",
      company: "PT. Unictive Media Indonesia",
      description:
        "Sebagai Data Entry pada Event G20 Bali di bawah naungan PT. Unictive Media Indonesia, saya bertanggung jawab penuh dalam mengelola dan memastikan keakuratan informasi peserta. Tugas utama saya berfokus pada pemeriksaan, validasi, serta pendaftaran data peserta G20 ke dalam sistem registrasi secara teliti. Selain pengelolaan data secara teknis, saya juga bertugas menangani pelaporan dan mendokumentasikan berbagai permasalahan yang muncul selama proses pendaftaran berlangsung. Guna memastikan seluruh alur registrasi berjalan lancar dan efisien, saya secara aktif berkoordinasi dengan tim operasional di lapangan.",
      proofImages: [fotoG20_1, fotoG20_2],
    },
    {
      id: 3,
      period: "Desember 2021 - Desember 2022",
      role: "Kurir Paket",
      company: "PT. Nusantara Ekspres Kilat",
      description:
        "Sebagai Kurir di PT. Nusantara Ekspres Kilat, saya bertanggung jawab mengelola alur penyortiran dan pengelompokan paket harian untuk memastikan pengiriman kepada pelanggan terlaksana secara tepat waktu dan akurat. Selain penanganan distribusi fisik, saya juga bertugas menyusun dan mengelola dokumen Surat Jalan (Delivery Order) guna menjaga ketepatan data pengiriman dan menjamin kelancaran seluruh proses operasional distribusi.",
      proofImages: [fotoKurir],
    },
    {
      id: 4,
      period: "September 2021 - November 2021",
      role: "Telemarketing",
      company: "Cyber Future Forex",
      description:
        "Sebagai staf Telemarketing, saya bertanggung jawab melakukan penawaran produk Forex secara proaktif kepada calon pelanggan melalui panggilan telepon. Dalam praktiknya, saya bertugas mengidentifikasi kebutuhan pelanggan, memberikan penjelasan komprehensif terkait produk dan layanan perusahaan, serta melakukan negosiasi dan follow-up guna mencapai kesepakatan penjualan. Selain berfokus pada konversi, saya juga mengutamakan pembangunan hubungan komunikasi yang baik dan berkelanjutan dengan prospek maupun pelanggan potensial. Untuk memastikan efektivitas operasional, saya secara rutin menyusun laporan aktivitas penjualan, memantau pencapaian target harian, dan membuat laporan kinerja bulanan guna mendukung pencapaian target penjualan perusahaan secara terukur dan terdokumentasi.",
      proofImages: [fototelemarketing],
    },
  ];

  const closeModal = () => {
    setSelectedImages(null);
  };

  return (
    <section id="experience" className="w-full py-32 px-8 lg:px-16 bg-white text-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="text-xs uppercase tracking-widest text-gray-500">Career</div>

          <div className="lg:col-span-3 flex flex-col">
            {experiences.map((exp, index) => {
              const hasProof = exp.proofImages && exp.proofImages.length > 0;
              const isLast = index === experiences.length - 1;

              return (
                <div
                  key={exp.id}
                  onClick={() => hasProof && setSelectedImages(exp.proofImages)}
                  className={`py-8 flex flex-col md:flex-row justify-between items-start gap-4 transition-colors ${
                    hasProof ? "cursor-pointer hover:bg-gray-50 group" : ""
                  } ${index === 0 ? "border-t border-black" : "border-t border-gray-200"} ${isLast ? "border-b border-gray-200" : ""}`}
                >
                  <div className="w-full md:w-1/4">
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>

                  <div className="w-full md:w-2/4">
                    <h3 className={`text-xl font-bold mb-2 transition-colors ${hasProof ? "group-hover:text-gray-600" : ""}`}>{exp.role}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>

                    {/* Teks indikator yang selalu tampil jika ada foto */}
                    {hasProof && (
                      <span className="inline-block mt-4 text-xs font-semibold text-black border rounded-2xl px-3 py-2 border-black hover:text-white hover:border-black hover:bg-black transition-colors">
                        Klik untuk melihat foto ({exp.proofImages.length} Foto) &rarr;
                      </span>
                    )}
                  </div>

                  <div className="w-full md:w-1/4 md:text-right text-gray-400 text-sm">{exp.company}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedImages && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8" onClick={closeModal}>
          <div className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h4 className="font-semibold text-lg">Dokumentasi Kerja</h4>
              <button onClick={closeModal} className="p-2 bg-gray-100 text-black rounded-full hover:bg-gray-200 transition-colors" aria-label="Close modal">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Container Gambar (Grid) */}
            <div className={`w-full max-h-[75vh] overflow-y-auto p-6 bg-gray-50 custom-scrollbar grid gap-6 ${selectedImages.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 justify-items-center"}`}>
              {selectedImages.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  alt={`Bukti Pengalaman Kerja ${idx + 1}`}
                  // Kelas dinamis: jika gambar > 1 maka cover grid, jika hanya 1 maka ukurannya tidak dipaksa membesar
                  className={`${selectedImages.length > 1 ? "w-full h-full object-cover max-h-[60vh]" : "w-auto h-auto max-h-[60vh] object-contain max-w-full"} border border-gray-200 shadow-sm rounded-md`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
