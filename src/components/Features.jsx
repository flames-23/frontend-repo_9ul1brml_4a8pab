import { motion } from 'framer-motion'
import { Sparkles, Gauge, Palette, Code2 } from 'lucide-react'

const items = [
  {
    icon: Sparkles,
    title: 'Futuristic Aesthetic',
    desc: 'Neon gradients, glass panels, and motion art for a premium, modern feel.'
  },
  {
    icon: Gauge,
    title: 'Speed & Performance',
    desc: 'Optimized builds and best practices to load instantly and rank higher.'
  },
  {
    icon: Palette,
    title: 'On-brand Design',
    desc: 'We tailor typography, color, and layout to your brand’s voice.'
  },
  {
    icon: Code2,
    title: 'Conversion-focused',
    desc: 'Clear CTAs and smart UX patterns that turn clicks into customers.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Everything you need for a standout landing page
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_30px_-15px] shadow-purple-500/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10">
                <Icon className="h-5 w-5 text-indigo-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm text-indigo-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
