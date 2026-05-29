import { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, Briefcase } from 'lucide-react';
import cert1 from '../../imports/image-2.png';
import cert2 from '../../imports/image-3.png';
import cert3 from '../../imports/image-8.png';

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certificates = [
    { image: cert1, title: 'DEVCON Geek Up 2025', org: 'Devcon Cagayan de Oro' },
    { image: cert2, title: 'Google I/O Extended CDO 2024', org: 'GDG Cagayan de Oro' },
    { image: cert3, title: 'Global Youth Summit 2024', org: 'GYS Philippines' }
  ];

  const leadershipRoles = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      year: '2025-2026',
      role: 'BSIT Representative',
      org: 'STI College Cagayan de Oro'
    },
    {
      icon: <Users className="w-5 h-5" />,
      year: '2024-2025',
      role: 'Vice President',
      org: 'BSIT Officers'
    },
    {
      icon: <Award className="w-5 h-5" />,
      year: '2025-2026',
      role: 'Secretary',
      org: 'STI City Scholar Association'
    },
    {
      icon: <Users className="w-5 h-5" />,
      year: '2024-2025',
      role: 'Vice President',
      org: 'STI City Scholar Association'
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      year: '2024-2025',
      role: 'Finance Associate',
      org: 'Devcon Cagayan de Oro'
    },
    {
      icon: <Award className="w-5 h-5" />,
      year: '2023-2024',
      role: 'Engagement Ambassador',
      org: 'GDSC STI College CDO'
    }
  ];

  const volunteerWork = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'GDSC Libona Volunteer',
      description: 'Teaching kids technologies and robotics'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Devcon Summit Davao',
      description: 'Selected volunteer for regional tech summit'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'BitSkwela Learn Web3',
      description: 'Volunteer at USTP - Build the Future event'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Github Copilot CDO',
      description: 'Community volunteer for AI coding workshop'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'GDG DevFest CDO 2024',
      description: 'Workshop & seminar participant'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Google I/O CDO 2024',
      description: 'Workshop & seminar participant'
    }
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] bg-clip-text text-transparent">
            Achievements & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] mx-auto rounded-full"></div>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h3
            className={`text-2xl mb-6 text-[#5C3D4E] flex items-center gap-2 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Award className="w-6 h-6 text-[#F4A7B9]" />
            Certificates & Recognitions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg shadow-[#F4A7B9]/20 hover:shadow-xl hover:shadow-[#F4A7B9]/30 hover:scale-105 transition-all duration-300 aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5C3D4E]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold text-sm">{cert.title}</p>
                      <p className="text-xs opacity-90">{cert.org}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Roles */}
        <div className="mb-16">
          <h3
            className={`text-2xl mb-6 text-[#5C3D4E] flex items-center gap-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Users className="w-6 h-6 text-[#F4A7B9]" />
            Leadership Positions
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leadershipRoles.map((role, index) => (
              <div
                key={index}
                className={`bg-white/55 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-[#F4A7B9]/15 border border-white/60 hover:shadow-xl hover:shadow-[#F4A7B9]/25 hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80 + 300}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] text-white rounded-lg">
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#F4A7B9] font-semibold mb-1">{role.year}</p>
                    <h4 className="font-semibold text-[#5C3D4E] mb-1">{role.role}</h4>
                    <p className="text-sm text-[#5C3D4E]/70">{role.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Work */}
        <div>
          <h3
            className={`text-2xl mb-6 text-[#5C3D4E] flex items-center gap-2 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <Heart className="w-6 h-6 text-[#F4A7B9]" />
            Volunteer & Community Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteerWork.map((work, index) => (
              <div
                key={index}
                className={`bg-white/55 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-[#F4A7B9]/15 border border-white/60 hover:shadow-xl hover:shadow-[#F4A7B9]/25 hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 80 + 400}ms` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] text-white rounded-lg">
                    {work.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#5C3D4E] mb-1">{work.title}</h4>
                    <p className="text-sm text-[#5C3D4E]/70">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
