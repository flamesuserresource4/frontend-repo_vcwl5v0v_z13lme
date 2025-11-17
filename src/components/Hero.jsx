import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden" aria-label="Ars Vivendi hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-2xl bg-[rgba(250,247,242,0.7)] backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-700/80">Ars Vivendi Living Solutions</p>
            <h1 className="mt-3 text-3xl sm:text-5xl font-semibold leading-tight text-stone-900">
              Professional interior guidance without the premium agency price tag
            </h1>
            <p className="mt-4 text-stone-700/90 text-base sm:text-lg">
              Smart, affordable design consults, product picks, and digital room guides. For renters, first-time owners, and anyone wanting clarity and cohesion—on a real-life budget.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex justify-center items-center rounded-full bg-amber-700 text-stone-50 px-5 py-3 text-sm font-medium hover:bg-amber-800 transition-colors">
                Start with a 30‑min consult
              </a>
              <a href="#services" className="inline-flex justify-center items-center rounded-full border border-stone-300 text-stone-800 px-5 py-3 text-sm font-medium hover:border-stone-400 hover:bg-white/50 transition-colors">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
    </section>
  );
}
