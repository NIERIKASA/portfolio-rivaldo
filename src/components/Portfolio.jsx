import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Link } from "react-router-dom";

// Import semua gambar (pastikan path dan nama file sudah benar di komputer Anda)
import portfolioMagang from "../assets/portfolioMagang.jpeg";
import tampilanSistem1 from "../assets/tampilanSistem1.jpeg";
import tampilanSistem2 from "../assets/tampilanSistem2.jpeg";
import tampilanSistem3 from "../assets/tampilanSistem3.jpeg";
import tampilanDashboard from "../assets/tampilanDashboard.jpeg";
import tampilanDetector from "../assets/tampilanDetector.jpeg";
import tampilanDetector2 from "../assets/tampilanDetector2.jpeg";
import tampilanDetector3 from "../assets/tampilanDetector3.jpeg";
import tampilanCleansing from "../assets/tampilanCleansing.jpeg";
import manualStd from "../assets/manualStandarzitation.jpeg";
import tampilanAnalyst from "../assets/tampilanAnalystTools.jpeg";
import tampilanAutomate from "../assets/tampilanAutomate.jpeg";
import tampilanDelimenter from "../assets/tampilanDelimenter.jpeg";
import dataPreview from "../assets/dataPreview.jpeg";
import pembuatanDatabase1 from "../assets/pembuatanDatabase1.jpeg";

// Absensi QR Code
import tampilanLogin from "../assets/absensi/tampilanLogin.jpeg";
import tampilanAdmin from "../assets/absensi/tampilanAdmin.jpeg";
import tampilanInputsiswa from "../assets/absensi/tampilanInputsiswa.jpeg";
import tampilanDatasiswa from "../assets/absensi/tampilanDatasiswa.jpeg";
import scanQR from "../assets/absensi/scanAbsensi.jpeg";
import dataGuru from "../assets/absensi/dataGuru.jpeg";
import inputKelas from "../assets/absensi/inputKelas.jpeg";
import dokumentasiPiala1 from "../assets/absensi/penyerahanPiala.jpeg";
import dokumentasiPiala2 from "../assets/absensi/fotoPiala.png";

export default function Portfolio() {
  // State untuk mengontrol data proyek mana yang sedang ditampilkan di dalam modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Data Array Proyek Portofolio
  const projects = [
    {
      id: 1,
      title: "JSC Tools",
      category: "Professional Achievement",
      thumbnail: tampilanSistem1,
      images: [
        portfolioMagang,
        tampilanSistem1,
        tampilanSistem2,
        tampilanSistem3,
        tampilanDashboard,
        tampilanDetector,
        tampilanDetector2,
        tampilanDetector3,
        tampilanCleansing,
        manualStd,
        dataPreview,
        tampilanDelimenter,
        tampilanAnalyst,
        tampilanAutomate,
        pembuatanDatabase1,
      ],
      description:
        "Proyek ini berfokus pada pengembangan sistem deteksi data dan cleansing data, memvalidasi, serta membersihkan anomali pada dataset. Antarmuka (UI) dirancang untuk memudahkan pengguna dalam membersihkan data secara otomatis, dengan tambahan fitur analisis data untuk mengetahui pola laporan apa yang sedang trend dimasyarakat.",
    },
    {
      id: 2,
      title: "Sistem Absensi Berbasis QR",
      category: "Software Development",
      thumbnail: tampilanLogin,
      images: [tampilanLogin, tampilanAdmin, tampilanInputsiswa, tampilanDatasiswa, inputKelas, dataGuru, scanQR, dokumentasiPiala1, dokumentasiPiala2],
      description:
        "Selama mengikuti kegiatan IT Bootcamp 'Software Development', saya memimpin tim proyek untuk merancang dan mengembangkan aplikasi sistem absensi siswa berbasis website yang terintegrasi dengan teknologi pemindaian QR Code. Sebagai Project Manager dan UI/UX Designer, saya memastikan proyek berjalan sesuai timeline dan memiliki antarmuka yang intuitif.",
    },
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="w-full py-32 px-8 lg:px-16 bg-[#111111] text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 border-b border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 block mb-4">Selected Work & Achievements</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Showcasing Expertise</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
            View All
          </Link>
        </div>

        {/* Grid Cards Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <article key={project.id} onClick={() => setSelectedProject(project)} className="group cursor-pointer">
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800 relative">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
                {/* Overlay indikator interaktif */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-black/80 text-white text-xs font-semibold px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700">Lihat Detail Proyek</span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.category}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ========================================= */}
      {/* POPUP MODAL (Hanya muncul jika card diklik) */}
      {/* ========================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8" onClick={closeModal}>
          <div className="relative max-w-5xl w-full bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-2xl overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Header Modal */}
            <div className="flex justify-between items-start p-6 border-b border-gray-800">
              <div>
                <h4 className="font-semibold text-2xl mb-1 text-white">{selectedProject.title}</h4>
                <p className="text-gray-400 text-sm">{selectedProject.category}</p>
              </div>
              <button onClick={closeModal} className="p-2 bg-gray-800 text-gray-300 rounded-full hover:bg-white hover:text-black transition-colors" aria-label="Close modal">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body Modal (Scrollable) */}
            <div className="w-full max-h-[75vh] overflow-y-auto custom-scrollbar">
              {/* Deskripsi Proyek */}
              <div className="p-6 bg-[#111111]">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Grid Gambar Proyek */}
              <div className={`p-6 grid gap-6 bg-[#1a1a1a] ${selectedProject.images.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 justify-items-center"}`}>
                {selectedProject.images.map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`${selectedProject.title} - Gambar ${idx + 1}`}
                    className={`${selectedProject.images.length > 1 ? "w-full h-full object-cover max-h-[50vh]" : "w-auto h-auto max-h-[60vh] object-contain max-w-full"} border border-gray-800 bg-white shadow-sm rounded-md p-1`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
