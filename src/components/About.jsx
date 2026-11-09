export default function About() {
  return (
    <section id="about" className="w-full bg-[#111111] text-white py-32 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-20 mb-20">
          <div className="text-xs uppercase tracking-widest text-gray-500">Intro</div>
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
              Profesional dengan pengalaman dalam data engineering, manajemen proyek digital, operasional, dan administrasi. Terampil dalam analisis kebutuhan bisnis, koordinasi lintas tim, pengelolaan proyek, validasi data, pelaporan,
              serta implementasi dan pengujian solusi teknis. Berpengalaman bekerja di sektor teknologi, layanan publik, event nasional, dan logistik, dengan kemampuan bekerja secara kolaboratif dan berorientasi pada hasil.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="text-xs uppercase tracking-widest text-gray-500">Keahlian</div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl mb-4">Data Enginner</h3>
              <p className="text-sm text-gray-400">Membangun arsitektur terukur dan sistem *pipeline* data yang tangguh untuk memastikan aliran data yang lancar dan efisien.</p>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-xl mb-4">Data Analyst</h3>
              <p className="text-sm text-gray-400">Mengubah kumpulan data kompleks menjadi wawasan bisnis yang bermakna serta visualisasi yang jelas untuk mendukung keputusan strategis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
