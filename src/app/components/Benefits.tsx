import { Clock, TrendingDown, Shield, Zap } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Eliminates Paper-Based Errors',
      description: 'Say goodbye to manual calculation mistakes and lost paper records',
      bgColor: '#1976D2',
    },
    {
      icon: Clock,
      title: 'Saves Time During Kinsenas',
      description: 'Reduce payroll processing time from hours to minutes with automation',
      bgColor: 'var(--primary)',
    },
    {
      icon: Shield,
      title: 'Improves Audit Transparency',
      description: 'Complete digital trail with timestamps and user tracking for all transactions',
      bgColor: '#7B1FA2',
    },
    {
      icon: Zap,
      title: 'Ensures Accurate Deductions',
      description: 'Automated calculations guarantee precise salary deductions every time',
      bgColor: '#F57C00',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Transform your canteen operations with measurable improvements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: benefit.bgColor }}></div>
              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-colors duration-300 group-hover:bg-gray-100">
                  <benefit.icon className="text-gray-700 transition-colors duration-300" size={28} />
                </div>
                <h3 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-6 text-gray-600 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-4xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>90%</div>
            <div className="text-gray-600">Time Saved on Payroll</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-4xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>100%</div>
            <div className="text-gray-600">Calculation Accuracy</div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="text-4xl font-semibold mb-2" style={{ color: 'var(--primary)' }}>24/7</div>
            <div className="text-gray-600">Real-time Access</div>
          </div>
        </div>
      </div>
    </section>
  );
}
