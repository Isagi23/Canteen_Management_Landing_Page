import { ArrowRight, Download, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: 'radial-gradient(circle at top left, rgba(30, 41, 59, 0.07), transparent 30%), radial-gradient(circle at right, rgba(3, 2, 19, 0.06), transparent 28%)' }} />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: 'var(--primary)' }} />
              Digital operations for modern canteens
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight">
              Simple, connected canteen management for teams that move fast.
            </h1>
            <p className="text-lg leading-8 text-gray-600 max-w-xl">
              Replace paper workflows with one clear system for ordering, tracking, and payroll-ready deductions.
              Everything is organized, easy to understand, and built for day-to-day use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('features')}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-white transition-colors shadow-lg hover:shadow-xl"
                style={{ backgroundColor: 'var(--primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                Download SDK
                <Download size={20} />
              </button>
              <button
                onClick={() => scrollToSection('preview')}
                className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-gray-700 transition-colors"
                style={{ borderColor: 'rgba(15, 23, 42, 0.12)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Smartphone size={20} />
                View demo
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 pt-4">
              {[
                { value: '1 flow', label: 'for ordering and deductions' },
                { value: 'Real-time', label: 'status for daily operations' },
                { value: 'Clear', label: 'UI for quick staff training' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                  <div className="mt-1 text-sm leading-6 text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Built for a clean rollout, faster adoption, and fewer manual steps.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] border border-gray-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-600">
                <span>Mobile app preview</span>
                <span className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 shadow-sm">Ready to use</span>
              </div>
              <div className="mt-4 aspect-[9/16] rounded-[1.5rem] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, rgba(3,2,19,0.96) 0%, rgba(15,23,42,0.9) 100%)' }}>
                <div className="flex flex-col items-center gap-4 px-8 text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/10 backdrop-blur-sm">
                    <Smartphone size={72} className="text-white/90" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/60">Canteen suite</p>
                    <p className="text-lg font-medium text-white">Fast, simple, and built for clarity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-4 w-64 h-64 rounded-full blur-3xl opacity-25 -z-10" style={{ backgroundColor: 'var(--tertiary)' }}></div>
            <div className="absolute -bottom-8 -left-6 w-72 h-72 rounded-full blur-3xl opacity-15 -z-10" style={{ backgroundColor: 'var(--primary-light)' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
