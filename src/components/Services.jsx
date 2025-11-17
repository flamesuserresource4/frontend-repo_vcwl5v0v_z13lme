import { Video, Phone, Wand2, BookOpen } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Video design consult',
    desc: 'A focused 45–60 min call to review your space, define style, and set a clear plan.'
  },
  {
    icon: Phone,
    title: 'Phone check‑in',
    desc: 'Quick decisions, second opinions, or layout sanity checks in 20 minutes.'
  },
  {
    icon: Wand2,
    title: 'Product recommendations',
    desc: 'Curated furniture, lighting, and decor picks that fit your budget and resources.'
  },
  {
    icon: BookOpen,
    title: 'Digital room guides',
    desc: 'A step‑by‑step roadmap: layout, palette, links, and styling notes you can follow.'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900">Simple services, clear outcomes</h2>
          <p className="mt-2 text-stone-700">Pick what you need now—you can always add more later.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200/70">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 via-rose-400 to-orange-500 text-white">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-stone-900">{title}</h3>
              <p className="mt-2 text-sm text-stone-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
