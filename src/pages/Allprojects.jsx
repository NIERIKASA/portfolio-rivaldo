import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import sertifikatMagang from "../assets/sertifikatJSC.png";
import sertifikatBootcamp from "../assets/sertifBootcamp.png";
import sertifikatToefl from "../assets/sertifToefl.png";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-[#111111] text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section dengan tombol kembali */}
        <div className="mb-16 border-b border-gray-800 pb-8 flex flex-col items-start gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-6xl font-medium tracking-tight">All Works & Achievements.</h1>
        </div>

        {/* Grid Semua Proyek (Grid 3 kolom untuk halaman penuh) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Item 1: Sertifikat Magang */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={sertifikatMagang}
                alt="Sertifikat Magang Jakarta Smart City"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-2">Sertifikat Magang JSC</h3>
                <p className="text-gray-500 text-sm">Professional Achievement</p>
              </div>
            </div>
          </article>

          {/* Item 2: Sertifikat Bootcamp */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              {/* Diubah menjadi object-contain agar sertifikat tidak terpotong */}
              <img
                src={sertifikatBootcamp}
                alt="Sertifikat IT Bootcamp"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">IT Bootcamp Software Development</h3>
                {/* Ditambahkan max-h-40, overflow-y-auto, dan pr-2 untuk scrollbar */}
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Selama mengikuti kegiatan IT Bootcamp "Software Development", saya memimpin tim proyek untuk merancang dan mengembangkan aplikasi sistem absensi siswa berbasis website yang terintegrasi dengan teknologi pemindaian QR Code.
                  Sebagai Project Manager, saya bertanggung jawab penuh dalam pembentukan tim, pembagian peran, serta penyusunan lini masa (timeline) kerja guna memastikan proyek selesai sesuai target waktu. Di samping tugas manajerial,
                  saya mengambil peran teknis sebagai Software Analyst untuk merumuskan kebutuhan fungsional sistem, sekaligus menjadi UI/UX Designer yang merancang antarmuka pengguna agar interaktif dan intuitif. Saya juga turut
                  berkolaborasi dalam proses penulisan kode (coding) untuk mempercepat tahap pengembangan. Pada tahap akhir proyek, saya mewakili tim untuk mempresentasikan hasil akhir aplikasi, memaparkan alur operasional sistem beserta
                  rancangan arsitekturnya melalui desain UML, serta memandu demonstrasi langsung guna memperlihatkan kinerja fungsionalitas website secara menyeluruh kepada audiens dan penguji.
                </p>
              </div>
            </div>
          </article>

          {/* Item 3: Sertifikat TOEFL */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              {/* Diubah menjadi object-contain agar sertifikat tidak terpotong */}
              <img src={sertifikatToefl} alt="Sertifikat TOEFL" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-2">TOEFL Prediction English Test</h3>
                <p className="text-gray-500 text-sm">Score: 490</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
