import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import sertifikatMagang from "../assets/sertifikatJSC.png";
import sertifikatBootcamp from "../assets/sertifBootcamp.png";
import sertifikatToefl from "../assets/sertifToefl.png";
import bnspDepan from "../assets/bnspdepan.jpeg";
import bnspBelakang from "../assets/bnspbelakang.jpeg";
import database from "../assets/database.jpeg";
import databaseBelakang from "../assets/database-belakang.jpeg";
import sumihai from "../assets/sumihai.jpeg";
import workshop from "../assets/workshop.jpeg";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-[#111111] text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section dengan tombol kembali */}
        <div className="mb-16 border-b border-gray-800 pb-8 flex flex-col items-start gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-6xl font-medium tracking-tight">Certifications.</h1>
        </div>

        {/* Grid Semua Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* 1: Sertifikat Magang */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={sertifikatMagang}
                alt="Sertifikat Magang Jakarta Smart City"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Sertifikat Magang JSC</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Selama menjalani program magang di Unit Pengelola (UP) Jakarta Smart City pada Divisi Kajian dan Analisa Data, saya terlibat langsung dalam proyek analitik dan manajemen basis data untuk mengoptimalkan layanan sistem
                  cerdas. Saya bertanggung jawab dalam melakukan pembersihan kumpulan data (dataset cleansing) tingkat lanjut dan konfigurasi custom delimiter menggunakan perangkat DBeaver dan PostgreSQL. Selain itu, saya merancang dan
                  membangun aplikasi web internal bernama "JSC tools" yang secara khusus ditujukan untuk membantu para Data Engineer dalam mempercepat alur kerja mereka. Saya juga turut melakukan analisis tren dari laporan CRM, yang
                  hasilnya digunakan untuk mendukung pengambilan keputusan teknis serta meningkatkan efisiensi operasional harian di lingkungan Pemerintah Provinsi DKI Jakarta.
                </p>
              </div>
            </div>
          </article>

          {/* 2: Sertifikat Bootcamp */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={sertifikatBootcamp}
                alt="Sertifikat IT Bootcamp"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">IT Bootcamp Software Development</h3>
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

          {/* 3: Sertifikat TOEFL */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img src={sertifikatToefl} alt="Sertifikat TOEFL" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">TOEFL Prediction English Test</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Untuk menunjang kapabilitas komunikasi profesional di lingkungan teknologi global, saya menempuh pengujian TOEFL Prediction Test yang diselenggarakan oleh Lembaga Bahasa Universitas Bina Sarana Informatika (UBSI). Saya
                  mengikuti serangkaian evaluasi komprehensif yang mengukur ketajaman menyimak (Listening Comprehension), ketepatan penggunaan tata bahasa (Structure and Written Expression), serta daya analisis literatur (Reading
                  Comprehension). Hasil akumulasi skor sebesar 490 dari rangkaian tes ini memvalidasi kemampuan saya dalam menyerap, memahami, serta memproses informasi berbahasa Inggris dengan baik, yang sangat esensial untuk menunjang
                  proses riset dokumentasi sistem dan kolaborasi dalam proyek TI.
                </p>
              </div>
            </div>
          </article>

          {/* 4: BNSP Depan */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img src={bnspDepan} alt="Sertifikat BNSP Depan" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Sertifikat Kompetensi BNSP</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Melalui sertifikasi Analis Program (Software Development) dari Badan Nasional Sertifikasi Profesi (BNSP), saya mendemonstrasikan keahlian teknis secara komprehensif dalam siklus hidup pengembangan perangkat lunak. Saya
                  diuji dan dinilai atas kemampuan dalam merumuskan analisis skalabilitas sistem, merancang serta mengelola struktur basis data SQL, dan mengimplementasikan algoritma pemrograman yang efisien. Dalam proses evaluasi tersebut,
                  saya juga mempraktikkan manajemen penanganan kode (debugging) untuk menyelesaikan berbagai isu teknis, mengeksekusi pengujian unit (unit testing) guna memastikan keandalan fungsi, serta melakukan integrasi program
                  perangkat lunak secara menyeluruh agar memenuhi standar industri.
                </p>
              </div>
            </div>
          </article>

          {/* 5: BNSP Belakang */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={bnspBelakang}
                alt="Sertifikat BNSP Belakang"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Detail Unit Kompetensi BNSP</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Melalui sertifikasi Analis Program (Software Development) dari Badan Nasional Sertifikasi Profesi (BNSP), saya mendemonstrasikan keahlian teknis secara komprehensif dalam siklus hidup pengembangan perangkat lunak. Saya
                  diuji dan dinilai atas kemampuan dalam merumuskan analisis skalabilitas sistem, merancang serta mengelola struktur basis data SQL, dan mengimplementasikan algoritma pemrograman yang efisien. Dalam proses evaluasi tersebut,
                  saya juga mempraktikkan manajemen penanganan kode (debugging) untuk menyelesaikan berbagai isu teknis, mengeksekusi pengujian unit (unit testing) guna memastikan keandalan fungsi, serta melakukan integrasi program
                  perangkat lunak secara menyeluruh agar memenuhi standar industri.
                </p>
              </div>
            </div>
          </article>

          {/* 6: Database Certification */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img src={database} alt="Database Certification" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Database Certification</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  "Dalam sertifikasi Database Systems yang diselenggarakan oleh Ikatan Ahli Informatika Indonesia (IAII), saya membuktikan penguasaan teknis tingkat lanjut dengan meraih predikat Expert. Saya berhasil memvalidasi kemampuan
                  dalam merancang arsitektur basis data relasional serta memodelkan struktur data menggunakan E-R Model. Evaluasi ini menuntut saya untuk memecahkan berbagai skenario kasus menggunakan kueri SQL dari tingkat menengah hingga
                  mahir. Di samping itu, saya juga mendemonstrasikan pemahaman mendalam terkait pemrosesan dan optimasi query, manajemen kontrol konkurensi, perancangan sistem pemulihan data (recovery system), konsep data warehousing dan
                  mining, serta penerapan arsitektur sistem basis data paralel maupun terdistribusi.
                </p>
              </div>
            </div>
          </article>

          {/* 7: Database Certification Belakang */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={databaseBelakang}
                alt="Database Certification Details"
                className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2"
              />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Detail Kompetensi Database</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Dalam sertifikasi Database Systems yang diselenggarakan oleh Ikatan Ahli Informatika Indonesia (IAII), saya membuktikan penguasaan teknis tingkat lanjut dengan meraih predikat Expert. Saya berhasil memvalidasi kemampuan
                  dalam merancang arsitektur basis data relasional serta memodelkan struktur data menggunakan E-R Model. Evaluasi ini menuntut saya untuk memecahkan berbagai skenario kasus menggunakan kueri SQL dari tingkat menengah hingga
                  mahir. Di samping itu, saya juga mendemonstrasikan pemahaman mendalam terkait pemrosesan dan optimasi query, manajemen kontrol konkurensi, perancangan sistem pemulihan data (recovery system), konsep data warehousing dan
                  mining, serta penerapan arsitektur sistem basis data paralel maupun terdistribusi.
                </p>
              </div>
            </div>
          </article>

          {/* 8: Sumihai */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img src={sumihai} alt="Sertifikat Sumihai" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Sertifikat PT. Sumihai</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  Dalam program lokakarya dan sertifikasi kompetensi Enterprise Resource Planning (ERP) bersama PT. Sumihai Teknologi Indonesia, saya mendalami arsitektur sistem informasi operasional dan berhasil meraih predikat Proficient
                  dengan skor yang sangat memuaskan. Saya mempraktikkan langsung cara mengonfigurasi dan mengintegrasikan berbagai modul bisnis untuk merampingkan alur kerja perusahaan. Proses evaluasi mengharuskan saya untuk menyelesaikan
                  berbagai simulasi kasus terkait manajemen sumber daya, pemantauan data, dan optimalisasi proses bisnis. Pengalaman ini memperkuat kemampuan saya dalam memanfaatkan teknologi ERP sebagai instrumen strategis untuk mendukung
                  efisiensi dan pengambilan keputusan berbasis data di skala korporat.
                </p>
              </div>
            </div>
          </article>

          {/* 9: Workshop */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img src={workshop} alt="Sertifikat Workshop" className="w-full h-full object-contain bg-white grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 p-2" />
            </div>
            <div className="flex justify-between items-start">
              <div className="w-full">
                <h3 className="text-xl font-medium mb-2">Sertifikat Workshop</h3>
                <p className="text-gray-500 text-sm max-h-40 overflow-y-auto pr-2 custom-scrollbar">Training & Development</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
