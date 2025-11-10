import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: '$799',
    desc: 'Perfect for MVPs and early-stage launches',
    features: ['1 custom page', 'Basic animations', 'SEO setup', 'Launch in 5-7 days'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '$1,999',
    desc: 'Best for growing brands that want to stand out',
    features: ['Up to 3 pages', 'Advanced animations', 'CMS-ready', 'Launch in 10-14 days'],
    highlight: true
  },
  {
    name: 'Elite',
    price: '$3,999',
    desc: 'For premium brands needing a flagship experience',
    features: ['Unlimited sections', '3D/interactive art', 'Custom integrations', 'Launch in 3-4 weeks'],
    highlight: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-10 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),transparent_70%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border p-6 backdrop-blur-xl ${
                tier.highlight
                  ? 'border-indigo-400/40 bg-indigo-500/10 shadow-[0_0_40px_-15px] shadow-indigo-500/60'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-indigo-100/80">{tier.desc}</p>
                </div>
                <div className="text-3xl font-bold text-white">{tier.price}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-indigo-100/90">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-400/30">
                      <Check className="h-3.5 w-3.5 text-indigo-200" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-medium text-white transition ${
                tier.highlight
                  ? 'bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 shadow-[0_0_35px_-8px] shadow-indigo-500/60'
                  : 'border border-white/15 bg-white/5 hover:bg-white/10'
              }`}>
                Choose {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
