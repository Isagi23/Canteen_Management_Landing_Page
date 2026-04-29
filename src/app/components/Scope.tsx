import { CheckCircle2, Users, Smartphone, Database } from 'lucide-react';

export function Scope() {
  const included = [
    'Real-time order recording and tracking',
    'Automated salary deduction calculations',
    'Staff and payroll management',
    'Dashboard with live analytics',
    'Multi-role access control',
    'Comprehensive reporting system',
    'Firebase cloud synchronization',
    'Android mobile application',
  ];

  const excluded = [
    'iOS application support',
    'Point-of-sale (POS) hardware integration',
    'Inventory management',
    'Food menu ordering system',
    'Payment gateway integration',
    'Multi-location management',
  ];

  const userRoles = [
    {
      role: 'Manager',
      description: 'Full system access, staff management, and reporting',
      icon: Users,
    },
    {
      role: 'Cashier',
      description: 'Record orders, view staff information, daily reports',
      icon: Smartphone,
    },
    {
      role: 'Treasurer',
      description: 'Payroll management, deduction reports, financial overview',
      icon: Database,
    },
    {
      role: 'Employees',
      description: 'View personal transaction history and deductions',
      icon: Users,
    },
  ];

  return (
    <section id="scope" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Project Scope
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clear boundaries and capabilities of the Canteen Management System
          </p>
        </div>

        {/* User Roles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            System Users
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userRoles.map((user) => (
              <div
                key={user.role}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--tertiary-light)' }}>
                  <user.icon style={{ color: 'var(--primary)' }} size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{user.role}</h4>
                <p className="text-sm text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Included vs Excluded */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's Included */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
                <CheckCircle2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} size={20} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's Excluded */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Out of Scope</h3>
            </div>
            <ul className="space-y-3">
              {excluded.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-gray-400 flex-shrink-0 mt-0.5">✕</span>
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Platform Info */}
        <div className="mt-12 text-white rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
          <h3 className="text-2xl font-bold mb-4">Platform & Technology</h3>
          <div className="flex flex-wrap justify-center gap-8 mt-6">
            <div>
              <div className="text-3xl font-bold">Android</div>
              <div className="text-sm mt-1 opacity-90">Java-based Mobile App</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Firebase</div>
              <div className="text-sm mt-1 opacity-90">Cloud Backend</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Real-time</div>
              <div className="text-sm mt-1 opacity-90">Data Synchronization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
