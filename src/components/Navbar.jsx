import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between p-4">
            <a href="#" className="text-white font-semibold text-lg tracking-wide">
              <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-purple-300 bg-clip-text text-transparent">NeonLanding</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-indigo-400/40 bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-100 shadow-[0_0_30px_-10px] shadow-indigo-500/50 hover:bg-indigo-500/30 transition"
              >
                Get a Quote
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 p-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-indigo-400/40 bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-100 shadow-[0_0_30px_-10px] shadow-indigo-500/50 hover:bg-indigo-500/30 transition"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
