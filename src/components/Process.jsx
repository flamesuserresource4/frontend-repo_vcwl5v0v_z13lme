export default function Process() {
  const steps = [
    {
      title: 'Share your space',
      text: 'Send photos, a quick video, or a sketch. We keep it easy and low‑pressure.'
    },
    {
      title: 'Meet your designer',
      text: 'We hop on a call to understand your goals, budget, and style preferences.'
    },
    {
      title: 'Get a clear plan',
      text: 'Receive layouts, color direction, and links to products that fit your budget.'
    },
    {
      title: 'Implement at your pace',
      text: 'Use the guide to shop and style over time—no full renovation required.'
    }
  ]

  return (
    <section id="process" className="bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900">How it works</h2>
          <p className="mt-2 text-stone-700">A streamlined path from idea to a home you love.</p>
        </div>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl bg-white p-6 shadow-sm border border-stone-200/70">
              <div className="text-stone-500 text-sm">Step {i + 1}</div>
              <h3 className="mt-1 font-medium text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
