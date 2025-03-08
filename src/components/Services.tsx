import React from 'react';
import { Monitor, Brain, Shield, Code, Smartphone, Cog, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Soluciones personalizadas desarrolladas por nuestra startup tecnológica para satisfacer las necesidades específicas de tu negocio con código innovador y escalable.',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800',
    url: '/services/custom-software',
  },
  {
    title: 'AI & Machine Learning',
    description: 'Como startup especializada en inteligencia artificial, ofrecemos soluciones avanzadas de IA y aprendizaje automático para transformar tus datos en ventajas competitivas.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442135185-9cc973704d7e?q=80&w=800',
    url: '/services/ai-machine-learning',
  },
  {
    title: 'Cybersecurity',
    description: 'Nuestra startup implementa medidas de ciberseguridad de vanguardia para proteger tu negocio contra amenazas digitales actuales y emergentes.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1548092372-0d1bd40894a3?q=80&w=800',
    url: '/services/cybersecurity',
  },
  {
    title: 'Digital Transformation',
    description: 'Acompaña a tu empresa en el viaje de transformación digital con nuestra startup tecnológica especializada en modernización de procesos y sistemas empresariales.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=800',
    url: '/services/digital-transformation',
  },
  {
    title: 'Mobile Development',
    description: 'Desarrollo de aplicaciones móviles innovadoras por una startup tecnológica que crea experiencias móviles potentes y atractivas para tus usuarios.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=800',
    url: '/services/mobile-development',
  },
  {
    title: 'System Integration',
    description: 'Conecta perfectamente tus sistemas empresariales con soluciones de integración avanzadas desarrolladas por nuestra startup tecnológica especializada.',
    icon: Cog,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800',
    url: '/services/system-integration',
  },
];

export function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-techno-dark to-techno-dark/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-32 -left-64 w-96 h-96 rounded-full bg-techno-purple/5 blur-3xl"></div>
        <div className="hidden lg:block absolute top-1/2 right-10 w-20 h-3/4 border-r border-techno-purple/20"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-10 h-10 border border-techno-purple/40"></div>
        
        <div className="text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl techno-border pb-2">
              Our Services
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mx-auto"></div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Soluciones tecnológicas integrales de nuestra startup para impulsar el crecimiento de tu negocio
          </p>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="relative group bg-techno-light/30 backdrop-blur-sm rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 hover:shadow-techno-sm transition-all duration-300 flex flex-col h-full overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                
                {/* Imagen del servicio */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-60"></div>
                </div>
                
                <div className="p-5 sm:p-6 flex-grow">
                  <div className="flex items-center">
                    <span className="rounded-lg inline-flex p-3 bg-techno-purple/10 text-techno-purple ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60 transition-colors">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                    </span>
                    <h3 className="ml-3 text-base sm:text-lg font-medium text-white group-hover:text-techno-purple transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                  
                  <a 
                    href={service.url}
                    className="mt-5 inline-flex items-center px-4 py-2 border border-techno-purple text-sm font-medium rounded-md text-white bg-techno-dark hover:bg-techno-purple/20 transition-colors duration-200"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-techno-purple to-blue-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}