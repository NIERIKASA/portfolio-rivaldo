export default function Footer() {
  return (
    <footer className="w-full bg-black pt-32 pb-8 px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
        <div className="max-w-md">
          <h3 className="text-2xl text-white font-medium mb-6">Let's create something together.</h3>
          <a href="mailto:hello@example.com" className="bg-black text-black px-6 py-3 rounded-full text-sm bg-white hover:bg-gray-300">
            rivaldocav5@gmail.com
          </a>
        </div>

        <div className="flex gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-gray-400 uppercase text-xs tracking-wider mb-2">Social</span>
            <a href="https://www.linkedin.com/in/rivaldo-cavarera-devan-14761026a/" className="text-white hover:text-gray-500">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/nierikasa" className="text-white hover:text-gray-500">
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-gray-400 uppercase text-xs tracking-wider mb-2">Sitemap</span>
            <a href="#home" className="text-white hover:text-gray-500">
              Home
            </a>
            <a href="#about" className="text-white hover:text-gray-500">
              About
            </a>
            <a href="#work" className="text-white hover:text-gray-500">
              Work
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
