import { Database, Smartphone, Cloud, Code } from 'lucide-react';

export function TechStack() {
  const technologies = [
    {
      category: 'Mobile Platform',
      icon: Smartphone,
      items: ['Android (Java)', 'Material Design', 'Android Studio'],
      bgColor: 'var(--tertiary-light)',
      iconColor: 'var(--primary)',
    },
    {
      category: 'Backend & Database',
      icon: Database,
      items: ['Firebase Firestore', 'Firebase Authentication', 'Firebase Storage'],
      bgColor: '#FFF3E0',
      iconColor: '#F57C00',
    },
    {
      category: 'Cloud Services',
      icon: Cloud,
      items: ['Firebase Hosting', 'Real-time Sync', 'Cloud Functions'],
      bgColor: '#E3F2FD',
      iconColor: '#1976D2',
    },
    {
      category: 'Libraries & Tools',
      icon: Code,
      items: ['Retrofit', 'Glide', 'MPAndroidChart'],
      bgColor: '#F3E5F5',
      iconColor: '#7B1FA2',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Built with modern, reliable technologies for optimal performance and scalability
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: tech.bgColor }}>
                <tech.icon style={{ color: tech.iconColor }} size={24} />
              </div>
              <h3 className="font-bold text-gray-900 mb-4">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-white rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Why These Technologies?</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl mb-2">🚀</div>
                <h4 className="font-bold mb-2">Fast Development</h4>
                <p className="text-sm opacity-90">
                  Rapid prototyping and deployment with Firebase
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold mb-2">Enterprise Security</h4>
                <p className="text-sm opacity-90">
                  Industry-standard authentication and encryption
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">📈</div>
                <h4 className="font-bold mb-2">Scalable Architecture</h4>
                <p className="text-sm opacity-90">
                  Grows seamlessly as your business expands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
