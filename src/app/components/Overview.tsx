import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Overview() {
  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Project Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            A comprehensive digital solution designed for Zarria & Tesha Eatery and UniFruti MKAVI
            to streamline canteen operations and automate salary deductions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-rose-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-rose-500 shadow-sm">
                <XCircle className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">The Problem</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1 text-rose-500">•</span>
                <span>Manual paper-based recording ("Bali system") prone to errors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Time-consuming payroll calculations during Kinsenas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Lack of real-time visibility into employee transactions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>Difficult audit trails and report generation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 mt-1">•</span>
                <span>No transparency in salary deduction processes</span>
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[1.5rem] border border-sky-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
                <CheckCircle2 className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900">The Solution</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1" style={{ color: 'var(--primary)' }}>✓</span>
                <span>Digital order recording with real-time data sync</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1" style={{ color: 'var(--primary)' }}>✓</span>
                <span>Automated salary deduction calculations</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1" style={{ color: 'var(--primary)' }}>✓</span>
                <span>Live dashboard for instant monitoring and insights</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1" style={{ color: 'var(--primary)' }}>✓</span>
                <span>Comprehensive reports with one-click generation</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1" style={{ color: 'var(--primary)' }}>✓</span>
                <span>Complete transparency and accountability for all stakeholders</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 rounded-[1.75rem] border border-gray-200 bg-white p-10 text-center shadow-sm"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Who We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-4xl font-semibold" style={{ color: 'var(--primary)' }}>2</div>
              <div className="mt-2 text-gray-600">Partner Eateries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold" style={{ color: 'var(--primary)' }}>4</div>
              <div className="mt-2 text-gray-600">User Roles</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-semibold" style={{ color: 'var(--primary)' }}>100%</div>
              <div className="mt-2 text-gray-600">Digital</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
