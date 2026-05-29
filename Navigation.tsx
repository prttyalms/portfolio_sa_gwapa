import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Facebook, Github, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '09706127371',
      link: 'tel:09706127371'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'andaja0318@gmail.com',
      link: 'mailto:andaja0318@gmail.com'
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      value: 'Almirah N. Andajao',
      link: 'https://www.facebook.com/share/1LoWcbaDK8/'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'prttyalms',
      link: 'https://github.com/prttyalms'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Cagayan de Oro, Misamis Oriental, Philippines',
      link: null
    }
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] mx-auto rounded-full"></div>
          <p className="mt-4 text-[#5C3D4E]">
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-2xl mb-6 text-[#5C3D4E]">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/55 backdrop-blur-md rounded-2xl p-4 shadow-md shadow-[#F4A7B9]/15 border border-white/60 hover:shadow-lg hover:shadow-[#F4A7B9]/25 transition-all duration-300"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] text-white rounded-xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[#F4A7B9]">{info.label}</p>
                        <p className="text-[#5C3D4E] group-hover:text-[#F4A7B9] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] text-white rounded-xl">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-[#F4A7B9]">{info.label}</p>
                        <p className="text-[#5C3D4E]">{info.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl mb-6 text-[#5C3D4E]">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-transparent focus:border-[#F4A7B9] focus:bg-white/80 outline-none transition-all text-[#5C3D4E] placeholder-[#5C3D4E]/50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-transparent focus:border-[#F4A7B9] focus:bg-white/80 outline-none transition-all text-[#5C3D4E] placeholder-[#5C3D4E]/50"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-transparent focus:border-[#F4A7B9] focus:bg-white/80 outline-none transition-all text-[#5C3D4E] placeholder-[#5C3D4E]/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#F4A7B9] to-[#E8799A] text-white rounded-full shadow-lg shadow-[#F4A7B9]/45 hover:shadow-xl hover:shadow-[#F4A7B9]/60 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <span>Message Sent!</span>
                    <span>💖</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
