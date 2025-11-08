import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks ${name}, we will reach out shortly!`);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s build something great</h2>
            <p className="mt-4 text-slate-600">Tell us about your project, timelines, and goals. We typically reply within one business day.</p>
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p><strong className="text-slate-900">Email:</strong> hello@lanciere.tech</p>
              <p><strong className="text-slate-900">Location:</strong> Remote-first, India</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                <input id="company" name="company" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Project details</label>
                <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <button className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-white hover:bg-slate-800">Send message</button>
              <p className="text-sm text-emerald-600">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
