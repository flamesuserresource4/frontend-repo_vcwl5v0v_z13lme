import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 backdrop-blur-sm/80 bg-[rgba(250,247,242,0.65)] border-b border-[rgba(0,0,0,0.06)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 via-rose-400 to-orange-500" />
          <span className="font-semibold tracking-tight text-stone-800">
            Ars Vivendi <span className="text-stone-500">Living Solutions</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-stone-700">
          <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
          <a href="#process" className="hover:text-stone-900 transition-colors">How it works</a>
          <a href="#guides" className="hover:text-stone-900 transition-colors">Guides</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-sm hover:bg-stone-800 transition-colors">
            <Phone size={16}/> Book a consult
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-stone-300 text-stone-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
