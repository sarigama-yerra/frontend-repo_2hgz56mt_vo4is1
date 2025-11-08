export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Who we are</h2>
            <p className="mt-4 text-slate-600">
              Lanciere Technologies Pvt Ltd is a product engineering studio helping startups and enterprises turn ideas into scalable, resilient products. Our team brings deep expertise across frontend, backend, DevOps, and design, with a relentless focus on delivering measurable business value.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Outcome-driven delivery</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Transparent, collaborative process</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" /> Security and performance by default</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-sky-50 to-cyan-50 p-1">
              <div className="h-full w-full rounded-xl bg-white p-6">
                <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-2">
                  <div className="rounded-lg bg-slate-50" />
                  <div className="rounded-lg bg-slate-100" />
                  <div className="rounded-lg bg-slate-50" />
                  <div className="rounded-lg bg-slate-100" />
                  <div className="rounded-lg bg-slate-50" />
                  <div className="rounded-lg bg-slate-100" />
                  <div className="rounded-lg bg-slate-50" />
                  <div className="rounded-lg bg-slate-100" />
                  <div className="rounded-lg bg-slate-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
