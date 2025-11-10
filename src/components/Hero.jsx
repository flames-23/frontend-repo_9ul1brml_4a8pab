import { motion } from 'framer-motion'
import SafeSpline from './SafeSpline'

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),rgba(56,189,248,0.15),rgba(168,85,247,0.15),transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-50%,rgba(168,85,247,0.20),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              Custom Landing Pages that Convert
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-lg text-indigo-100/90 max-w-xl"
            >
              We design and build high-performing, futuristic landing pages tailored to your brand. Clean. Minimal. Lightning-fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 px-6 py-3 text-white font-semibold shadow-[0_0_35px_-8px] shadow-indigo-500/60 hover:shadow-indigo-500/80 transition"
              >
                Start Your Project
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 backdrop-blur-xl transition"
              >
                See Pricing
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <SafeSpline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030617]/60 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
