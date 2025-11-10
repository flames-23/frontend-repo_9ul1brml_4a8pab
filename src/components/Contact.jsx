import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // In a real app this would call the backend. For now we just simulate.
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! We will get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center"
        >
          Tell us about your project
        </motion.h2>

        <form onSubmit={onSubmit} className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-white/80">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/80">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="jane@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/80">Budget</label>
              <select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50">
                <option className="bg-slate-900">$1k - $2k</option>
                <option className="bg-slate-900">$2k - $5k</option>
                <option className="bg-slate-900">$5k - $10k</option>
                <option className="bg-slate-900">$10k+</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/80">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="What are you building?" />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-[0_0_35px_-8px] shadow-indigo-500/60 hover:shadow-indigo-500/80 transition">
              Request Proposal
            </button>
            <p className="text-sm text-indigo-100/80">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
