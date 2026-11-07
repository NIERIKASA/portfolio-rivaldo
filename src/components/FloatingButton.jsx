import { MessageSquareMore } from "lucide-react";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50">
      <button className="flex items-center gap-3 text-sm font-bold text-gray-900 hover:text-[#f35953] transition-colors group bg-white/70 backdrop-blur-md py-2.5 px-4 lg:py-3 lg:px-5 rounded-full shadow-xl border border-white">
        <span className="hidden md:block">Let's Chat</span>
        <div className="relative w-10 h-10 bg-black rounded-xl rounded-tr-sm flex items-center justify-center text-white shadow-md group-hover:-translate-y-1 group-hover:bg-[#f35953] transition-all duration-300">
          <MessageSquareMore className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
      </button>
    </div>
  );
}
