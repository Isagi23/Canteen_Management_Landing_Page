import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  FileText,
  Shield,
  TrendingUp,
  Clock,
  DollarSign,
  BarChart3,
} from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: LayoutDashboard,
      title: 'Real-time Dashboard',
      description:
        'Monitor all canteen operations at a glance with live updates, key metrics, and instant insights.',
    },
    {
      icon: Users,
      title: 'Staff Management',
      description:
        'Complete employee database with payroll integration, role assignments, and access control.',
    },
    {
      icon: ShoppingCart,
      title: 'Digital Order Recording',
      description:
        'Replace paper-based "Bali" system with digital order tracking, timestamps, and automated calculations.',
    },
    {
      icon: DollarSign,
      title: 'Automated Deductions',
      description:
        'Instant calculation of salary deductions based on employee purchases during pay periods.',
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description:
        'Generate detailed reports for transactions, deductions, and payroll with one click.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description:
        'Visual charts and trends to help make data-driven decisions for your canteen operations.',
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description:
        'Role-based access control with Firebase authentication ensures data security and privacy.',
    },
    {
      icon: Clock,
      title: 'Time-saving Automation',
      description:
        'Eliminate manual calculations and reduce Kinsenas processing time from hours to minutes.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solution',
      description:
        'Cloud-based architecture that grows with your business and handles increasing transaction volumes.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            System Functionalities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Powerful features designed to transform your canteen management and streamline payroll operations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-[1.5rem] border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300" style={{ backgroundColor: 'rgba(3, 2, 19, 0.04)' }}>
                <feature.icon className="transition-colors duration-300" style={{ color: 'var(--primary)' }} size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-gray-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
