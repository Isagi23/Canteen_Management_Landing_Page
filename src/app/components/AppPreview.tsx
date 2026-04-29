import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import loginScreen from '../../imports/login.jpg';
import dashboardScreen from '../../imports/dashboard.jpg';
import staffManagementScreen from '../../imports/workers.jpg';
import recordOrderScreen from '../../imports/record-order.jpg';
import transactionHistoryScreen from '../../imports/order_history.jpg';
import reportsScreen from '../../imports/reports.jpg';
import deductionSummaryScreen from '../../imports/deduction.jpg';
import profileManagementScreen from '../../imports/profile.jpg';

export function AppPreview() {
  const screenshots = [
    {
      src: loginScreen,
      title: 'Login Screen',
      description: 'Secure authentication with role-based access',
    },
    {
      src: dashboardScreen,
      title: 'Dashboard',
      description: 'Real-time overview of all canteen operations',
    },
    {
      src: staffManagementScreen,
      title: 'Staff Management',
      description: 'Manage employees and their information',
    },
    {
      src: recordOrderScreen,
      title: 'Record Order',
      description: 'Digital order entry replacing paper-based system',
    },
    {
      src: transactionHistoryScreen,
      title: 'Transaction History',
      description: 'Complete audit trail of all orders',
    },
    {
      src: reportsScreen,
      title: 'Reports',
      description: 'Comprehensive reporting and analytics',
    },
    {
      src: deductionSummaryScreen,
      title: 'Deduction Summary',
      description: 'Automated salary deduction calculations',
    },
    {
      src: profileManagementScreen,
      title: 'Profile Management',
      description: 'User account and profile settings',
    },
  ];

  return (
    <section id="preview" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Mobile Application Preview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Experience the intuitive interface designed for seamless canteen management
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.5rem] border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="aspect-[9/16] bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={screenshot.src}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold tracking-tight text-gray-900 mb-1">{screenshot.title}</h3>
                <p className="text-sm text-gray-600">{screenshot.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block rounded-[1.5rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">
              Want to see it in action?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a live demo to experience the full capabilities of the system
            </p>
            <button
              className="text-white px-8 py-3 rounded-full transition-colors shadow-lg"
              style={{ backgroundColor: 'var(--primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            >
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
