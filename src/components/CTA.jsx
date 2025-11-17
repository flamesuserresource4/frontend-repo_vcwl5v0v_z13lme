export default function CTA() {
  return (
    <section id="contact" className="bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 p-8 sm:p-12 border border-amber-200/60">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-semibold text-stone-900">Ready to get started?</h3>
            <p className="mt-2 text-stone-700">Book a friendly, no‑pressure consultation. We’ll talk through your space and map out next steps.</p>
            <form className="mt-6 grid sm:grid-cols-3 gap-3">
              <input type="text" placeholder="Your name" className="w-full rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400" />
              <input type="email" placeholder="Email" className="w-full rounded-full border border-stone-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400" />
              <button type="button" className="rounded-full bg-stone-900 text-stone-50 px-5 py-3 text-sm font-medium hover:bg-stone-800 transition-colors">Request consult</button>
            </form>
            <p className="mt-3 text-xs text-stone-600">We’ll reply within 1–2 business days.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
