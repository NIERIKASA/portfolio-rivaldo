import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 px-8 lg:px-16 bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight mb-8">
            Ingin <br /> berkolaborasi?
          </h2>
          <p className="text-gray-500 mb-12 max-w-md">Baik Anda sudah memiliki ide proyek yang spesifik maupun sekadar ingin berdiskusi lebih lanjut, mari terhubung.</p>

          <div className="flex flex-col gap-6 text-sm">
            <div>
              <span className="block text-gray-400 uppercase text-xs tracking-wider mb-1">Email</span>
              <a href="mailto:rivaldocav5@gmail.com" className="font-medium hover:underline">
                rivaldocav5@gmail.com
              </a>
            </div>
            <div>
              <span className="block text-gray-400 uppercase text-xs tracking-wider mb-1">Location</span>
              <span className="font-medium">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Minimalist Form */}
        <div>
          <form className="flex flex-col gap-10">
            <div className="relative">
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                What's your name?
              </label>
              <input type="text" id="name" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none" placeholder="" />
            </div>

            <div className="relative">
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                What's your email?
              </label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors rounded-none" placeholder="" />
            </div>

            <div className="relative">
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                Tell me about your project
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors resize-none rounded-none"
                placeholder=""
              ></textarea>
            </div>

            <button type="button" className="group self-start flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Kirim Pesan
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
