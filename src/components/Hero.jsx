import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1l8ad0sR5B3pM1sZ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white shadow-sm">
              Lanciere Technologies Pvt Ltd
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Building reliable digital products for ambitious teams
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We are a startup focused on crafting scalable software, cloud-native systems, and delightful user experiences. From MVP to enterprise, we partner to deliver outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">Explore services</a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-slate-900 hover:bg-slate-50">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
