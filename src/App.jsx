import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#030617] text-white">
      {/* background grid and glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(2,6,23,1),rgba(3,6,23,1))]" />
        <div className="absolute inset-0 opacity-[0.04] [background:radial-gradient(1px_1px_at_20px_20px,white_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Contact />
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} NeonLanding. All rights reserved.</p>
            <div className="text-white/60 text-sm">Built with love for modern brands.</div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
