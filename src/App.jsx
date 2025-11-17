import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CTA />
      </main>
      <footer className="border-t border-stone-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-600">
          <p>© {new Date().getFullYear()} Ars Vivendi Living Solutions</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-stone-800">Services</a>
            <a href="#process" className="hover:text-stone-800">How it works</a>
            <a href="#contact" className="hover:text-stone-800">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
