import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Project" },
    { id: "tools", label: "Tools" },
    { id: "experience", label: "Experience" },
  ];

  useEffect(() => {
    // Mengamati section mana yang sedang berada di area pandang layar
    const sections = document.querySelectorAll("section[id], main[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Menyesuaikan ambang batas pengamatan di layar
        rootMargin: "-30% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <header className="bg-white/90 backdrop-blur-md border border-gray-200/80 px-4 md:px-6 py-2.5 rounded-full flex items-center justify-between md:justify-start gap-4 md:gap-8 shadow-sm transition-all duration-300">
        {/* Logo / Brand Name */}
        <a href="#home" className="font-bold text-sm tracking-tight cursor-pointer uppercase px-2">
          Rivaldo.
        </a>

        {/* Navigation Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-black text-white shadow-sm font-semibold scale-105" : "text-gray-500 hover:text-black hover:bg-gray-100/60"}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block bg-gray-100 text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 border border-gray-200/50">
          Let's Talk
        </a>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-1.5 rounded-full hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-xl md:hidden flex flex-col gap-2 z-50">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {item.label}
              </a>
            );
          })}
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 text-center bg-black text-white text-sm font-medium py-2.5 rounded-xl">
            Let's Talk
          </a>
        </div>
      )}
    </div>
  );
}
