export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-12 px-4 sm:px-6 lg:px-8 text-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm" style={{ backgroundColor: 'var(--primary)' }}>
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-semibold text-lg tracking-tight text-gray-900">
                Canteen & Salary Deduction Management
              </span>
            </div>
            <p className="text-gray-600 max-w-md leading-7">
              Digitizing canteen operations for Zarria & Tesha Eatery and UniFruti MKAVI.
              From manual paper records to automated, real-time management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg tracking-tight text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-600 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('overview')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('preview')}
                  className="text-gray-400 transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-light)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  App Preview
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg tracking-tight text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>canteen.support@example.com</li>
              <li>+63 XXX XXX XXXX</li>
              <li>Philippines</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Canteen Management System. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <span>Application Development</span>
              <span>•</span>
              <span>Built with Android & Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
