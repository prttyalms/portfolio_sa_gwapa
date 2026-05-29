import { useEffect, useRef, useState } from 'react';
import { Music, Palette, Code, Sparkles } from 'lucide-react';

export default function About() {
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

  const hobbies = [
    { icon: <Palette className="w-6 h-6" />, title: 'Digital Designing', emoji: '🎨' },
    { icon: <Music className="w-6 h-6" />, title: 'Music & Performance', emoji: '🎵' },
    { icon: <Code className="w-6 h-6" />, title: 'Coding Projects', emoji: '💻' },
    { icon: <Sparkles className="w-6 h-6" />, title: 'Dancing', emoji: '🕺' }
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white/55 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-[#F4A7B9]/20 border border-white/60">
              <h3 className="text-2xl mb-4 text-[#5C3D4E]">Who I Am</h3>
              <p className="text-[#5C3D4E] leading-relaxed mb-6">
                Creative and tech-savvy IT student with a passion for blending technology and art.
                As a community leader and active volunteer in the tech space, I've contributed to
                multiple organizations including GDSC, Devcon, and Google Developer Groups,
                teaching kids about technology and robotics while building meaningful connections.
              </p>
              <p className="text-[#5C3D4E] leading-relaxed mb-6">
                Currently serving as BSIT Representative and Secretary of STI City Scholar Association,
                I combine leadership with hands-on technical work, designing visually appealing digital
                experiences and building functional systems that make a difference.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#F4A7B9] mb-2">Goals & Dreams</h4>
                  <p className="text-[#5C3D4E] text-sm leading-relaxed">
                    To become a skilled Web Developer and UI/UX Designer — creating beautiful,
                    user-friendly digital solutions, building my own creative brand, and contributing
                    to innovative tech companies while empowering others through technology education
                    and community leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl mb-6 text-[#5C3D4E] text-center md:text-left">
              Hobbies & Passions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-white/55 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-[#F4A7B9]/15 border border-white/60 hover:scale-105 hover:shadow-xl hover:shadow-[#F4A7B9]/25 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-3 text-center">{hobby.emoji}</div>
                  <div className="text-[#F4A7B9] mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {hobby.icon}
                  </div>
                  <p className="text-center text-sm text-[#5C3D4E]">{hobby.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white/55 backdrop-blur-md rounded-2xl p-6 shadow-lg shadow-[#F4A7B9]/15 border border-white/60">
              <h4 className="font-semibold text-[#F4A7B9] mb-3">Quick Facts</h4>
              <div className="space-y-2 text-sm text-[#5C3D4E]">
                <p>📍 Cagayan de Oro, Misamis Oriental</p>
                <p>🎓 BS Information Technology Student</p>
                <p>🎂 21 years old</p>
                <p>👥 Community Leader & Tech Volunteer</p>
                <p>🌟 GDSC & Devcon Active Member</p>
                <p>💡 Tech meets Art enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
