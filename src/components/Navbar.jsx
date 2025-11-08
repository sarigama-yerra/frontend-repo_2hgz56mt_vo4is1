import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400" />
            <span className="font-semibold tracking-tight text-slate-900">Lanciere Technologies Pvt Ltd</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-600 hover:text-slate-900 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition-colors">
              Let’s talk
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800" onClick={() => setOpen(false)}>
                Let’s talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
