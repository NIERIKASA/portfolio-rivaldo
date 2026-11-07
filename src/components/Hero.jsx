import fotoProfile from "../assets/pasfoto.png";

export default function Hero() {
  return (
    <main id="home" className="relative w-full min-h-screen flex flex-col justify-center px-8 lg:px-16 bg-white overflow-hidden pt-32 pb-20">
      {/* Bentuk Abstrak Blur di Background (Memberikan tekstur khas editorial) */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-black rounded-full abstract-blur opacity-[0.03] -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">
        {/* ================= LEFT SECTION (Teks) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl xl:text-[5.5rem] font-semibold tracking-tighter leading-[1.05] mb-8 text-black">
            Data Engineer
            <br className="hidden md:block" />& Analyst.
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 mb-12 leading-relaxed">
            Halo, saya Rivaldo. Seorang Data Engineer dan Fresh graduate S1 Sistem Informasi dari Universitas Bina Sarana Informatika. Saya mengubah data yang kompleks menjadi wawasan yang dapat ditindaklanjuti dan keputusan strategis
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-xs uppercase tracking-widest text-gray-400 font-medium">
            <span>Est. 2026</span>
            <span className="w-12 h-[1px] bg-gray-200"></span>
            <span>Berbasis di Jakarta Utara</span>
          </div>
        </div>

        {/* ================= RIGHT SECTION (Gambar) ================= */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Container transparan tanpa border dan background */}
          <div className="relative w-full max-w-[400px] flex justify-center items-end">
            <img
              src={fotoProfile}
              alt="Rivaldo Cavarera Devan"
              // Menampilkan warna natural tanpa hover, dan mix-blend-multiply untuk menghilangkan background putih bawaan foto
              className="w-full h-auto object-contain object-bottom mix-blend-multiply drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
  