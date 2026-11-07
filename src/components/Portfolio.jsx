import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import sertifikatMagang from "../assets/sertifikatJSC.png";
import sertifikatBootcamp from "../assets/sertifBootcamp.png";

export default function Portfolio() {
  return (
    <section id="work" className="w-full py-32 px-8 lg:px-16 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-gray-800 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 block mb-4">Selected Work & Achievements</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">Showcasing Expertise</h2>
          </div>
          <Link to="/projects" className="text-sm font-medium border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                <h3 className="text-xl font-medium mb-2">Sertifikat Magang Jakarta Smart City</h3>
                <p className="text-gray-500 text-sm">Professional Achievement</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </article>

          {/* Item 2: Project Lainnya */}
          <article className="group cursor-pointer">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-900 mb-6 border border-gray-800">
              <img
                src={sertifikatBootcamp}
                alt="Data Dashboard Project"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-2">IT Bootcamp</h3>
                <p className="text-gray-500 text-sm">Software Development</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
