import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Our conversions increased by 64% after launch. The motion and clarity are top-tier.',
    author: 'Maya Patel',
    role: 'CMO, Nimbus AI'
  },
  {
    quote:
      'They delivered a stunning page that feels premium and loads lightning-fast.',
    author: 'Daniel White',
    role: 'Founder, Zeno Labs'
  },
  {
    quote:
      'A flawless process from concept to ship. The animations elevate our brand.',
    author: 'Ari Cohen',
    role: 'Head of Product, NovaPay'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-80 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Loved by modern brands
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-indigo-100/90">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/80">
                <span className="font-medium text-white">{t.author}</span> — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
