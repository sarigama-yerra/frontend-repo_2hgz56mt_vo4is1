const services = [
  {
    title: 'Custom Software Development',
    desc: 'End-to-end web and mobile apps built with modern stacks, designed for scalability and maintainability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5 21 6m0 0-4.5-4.5M21 6l-4.5 4.5M3 6h6m-6 6h6m-6 6h6m6 0h6m-6-6h6" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Kubernetes, CI/CD, observability, and cost optimization to keep your infrastructure fast and reliable.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 0 0 4 4h10a4 4 0 0 0 1-7.874 5.5 5.5 0 0 0-10.863-1.22A4 4 0 0 0 3 15Z" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    desc: 'Human-centered design, rapid prototyping, and design systems that accelerate delivery.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 21l3.188-1.75L15 21l-.813-5.096M12 3v12m6-6H6" />
      </svg>
    ),
  },
  {
    title: 'AI & Data Engineering',
    desc: 'From data pipelines to AI assistants, we turn your data into intelligent features.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-4 text-slate-600">We combine engineering excellence with thoughtful design to build products your users love.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-white">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
