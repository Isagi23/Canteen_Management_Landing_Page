import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Ready to digitize your canteen operations? Let's talk about how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-slate-50 shadow-sm">
                    <Mail style={{ color: 'var(--primary)' }} size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">2301110523@student.buksu.edu.ph</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-slate-50 shadow-sm">
                    <Phone style={{ color: 'var(--primary)' }} size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">09628965421</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-slate-50 shadow-sm">
                    <MapPin style={{ color: 'var(--primary)' }} size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Philippines</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-gray-200 bg-slate-50 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Start Digitizing Today</h3>
              <p className="mb-6 text-gray-600">
                Join Zarria & Tesha Eatery and UniFruti MKAVI in transforming canteen management
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm">✓</span>
                  <span>Free consultation and system demo</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm">✓</span>
                  <span>Customized implementation plan</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-white shadow-sm">✓</span>
                  <span>Training and ongoing support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-[1.5rem] border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
              Request a Demo
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2"
                  style={{
                    ['--focus-ring-color' as any]: 'var(--primary)'
                  }}
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid var(--primary)'}
                  onBlur={(e) => e.currentTarget.style.outline = ''}
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid var(--primary)'}
                  onBlur={(e) => e.currentTarget.style.outline = ''}
                  placeholder="juan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid var(--primary)'}
                  onBlur={(e) => e.currentTarget.style.outline = ''}
                  placeholder="Your Company Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 resize-none"
                  onFocus={(e) => e.currentTarget.style.outline = '2px solid var(--primary)'}
                  onBlur={(e) => e.currentTarget.style.outline = ''}
                  placeholder="Tell us about your canteen management needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl"
                style={{ backgroundColor: 'var(--primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
