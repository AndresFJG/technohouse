import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Smartphone, 
  Cloud, 
  Shield, 
  Brain, 
  Database,
  ArrowRight,
  Workflow
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Desarrollo Web Avanzado',
    description: 'Creamos sitios web modernos y responsivos con las últimas tecnologías, optimizados para SEO y conversión.',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    url: '/services/web-development',
    features: ['Diseño Responsivo', 'Optimización SEO', 'Alta Velocidad', 'Seguridad Avanzada']
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    description: 'Desarrollamos aplicaciones móviles nativas e híbridas que destacan en las tiendas de aplicaciones.',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800',
    url: '/services/mobile-apps',
    features: ['iOS y Android', 'UI/UX Premium', 'Integración API', 'Notificaciones Push']
  },
  {
    id: 3,
    title: 'Automatización de Procesos',
    description: 'Implementamos soluciones de IA para automatizar tareas repetitivas y optimizar flujos de trabajo empresariales.',
    icon: Workflow,
    image: '/img/automatizacion.jpeg',
    url: '/services/process-automation',
    features: ['RPA Avanzado', 'Automatización de Tareas', 'Optimización de Flujos', 'Integración de Sistemas']
  },
  {
    id: 4,
    title: 'Ciberseguridad',
    description: 'Protegemos tus activos digitales con soluciones de seguridad avanzadas y monitoreo constante.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
    url: '/services/cybersecurity',
    features: ['Pentesting', 'Firewalls', 'Encriptación', 'Monitoreo 24/7']
  },
  {
    id: 5,
    title: 'Inteligencia Artificial',
    description: 'Implementamos soluciones de IA y Machine Learning para automatizar procesos y mejorar la toma de decisiones.',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800',
    url: '/services/artificial-intelligence',
    features: ['Machine Learning', 'Procesamiento NLP', 'Visión por Computadora', 'Análisis Predictivo']
  },
  {
    id: 6,
    title: 'Bases de Datos',
    description: 'Diseñamos y optimizamos bases de datos robustas para manejar grandes volúmenes de información.',
    icon: Database,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    url: '/services/database',
    features: ['SQL/NoSQL', 'Optimización', 'Replicación', 'Recuperación']
  }
];

const Services = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-techno-dark to-techno-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-6 sm:w-8 bg-techno-purple"></span>
              <span className="text-techno-purple text-xs sm:text-sm tracking-wider font-mono uppercase">Nuestros Servicios</span>
              <span className="h-px w-6 sm:w-8 bg-techno-purple"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Soluciones <span className="text-techno-purple">Tecnológicas</span> Integrales
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mt-3 sm:mt-4 mx-auto"></div>
          </div>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Ofrecemos un portafolio completo de servicios tecnológicos diseñados para impulsar el crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all duration-300 hover:shadow-techno-sm"
              >
                <div className="h-36 sm:h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-techno-purple/20 backdrop-blur-sm border border-techno-purple/30 flex items-center justify-center">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-techno-purple" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-techno-purple transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-xs sm:text-sm text-gray-300">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-techno-purple mr-1.5 sm:mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.url} 
                    className="inline-flex items-center text-sm sm:text-base text-techno-purple hover:text-techno-purple-light font-medium transition-colors"
                  >
                    Más información
                    <ArrowRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-techno-purple rounded-md text-sm sm:text-base font-medium text-white bg-techno-dark hover:bg-techno-light/20 transition-colors"
          >
            Solicita una consulta gratuita
            <ArrowRight className="ml-1.5 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;