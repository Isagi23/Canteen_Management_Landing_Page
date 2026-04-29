import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import loginScreen from '../../imports/b9ad11a7-322b-4eee-a816-eec204a31ab4.jpg';
import dashboardScreen from '../../imports/ec6a9ee8-7f71-4b42-8915-1e822d5b8955.jpg';
import staffManagementScreen from '../../imports/f36ab7bd-3202-4bb1-8e20-3c7e5c41d369.jpg';
import recordOrderScreen from '../../imports/ffd9dd55-b138-4ae6-b472-4fbe0abaa5ca.jpg';
import transactionHistoryScreen from '../../imports/256c2f8b-9876-4804-ad44-02f8d9397106.jpg';
import reportsScreen from '../../imports/30815947-7460-4dbd-935a-bfef656fd223.jpg';
import deductionSummaryScreen from '../../imports/a0f6ce1c-4a37-4621-8c6b-1a29bb0f543b.jpg';
import employeeDetailsScreen from '../../imports/a8b7b0be-6cd7-4988-9d54-fde01cdd5776.jpg';
import settingsScreen from '../../imports/1df8c8bc-0da2-4954-8865-09c160a68617.jpg';
import profileManagementScreen from '../../imports/2c0888e4-60f8-4509-b8e1-3eb35d48ca75.jpg';

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
      src: employeeDetailsScreen,
      title: 'Employee Details',
      description: 'Detailed view of staff information',
    },
    {
      src: settingsScreen,
      title: 'Settings',
      description: 'System configuration and preferences',
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
