import { Users, Code, Palette, Briefcase } from 'lucide-react';
import rueloImage from '../../imports/RUELO, MARK JASON.jpg';
import abuganImage from '../../imports/abugan.png';

export function Team() {
  const teamMembers = [
    {
      name: 'RUELO, MARK JASON',
      role: 'Lead Developer',
      description: 'Implements core functionality, Firebase integration, and system architecture',
      image: rueloImage,
    },
    {
      name: 'ABUGAN',
      role: 'UI/UX Designer',
      description: 'Creates intuitive designs following Material Design principles',
      image: abuganImage,
    },
    {
      name: 'Project Lead',
      role: 'System Architect & Project Manager',
      description: 'Oversees development, ensures project alignment with business goals',
      icon: Briefcase,
    },
    {
      name: 'QA Specialist',
      role: 'Quality Assurance & Testing',
      description: 'Ensures system reliability, performance, and security standards',
      icon: Users,
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A dedicated team of professionals bringing this vision to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6">
                {member.image ? (
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)' }}>
                    <member.icon className="text-white" size={48} />
                  </div>
                )}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" style={{ backgroundColor: 'var(--tertiary)' }}></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <div className="font-medium mb-3" style={{ color: 'var(--primary)' }}>{member.role}</div>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Developed For
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">Zarria & Tesha Eatery</div>
              <div className="text-gray-600 mt-1">Partner Restaurant</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">UniFruti MKAVI</div>
              <div className="text-gray-600 mt-1">Partner Establishment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
