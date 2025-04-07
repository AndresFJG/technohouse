import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { 
  ArrowRight, 
  Zap, 
  CheckCircle, 
  Users, 
  Award, 
  BarChart3,
  Code,
  Database,
  Server,
  Plus,
  Minus,
  ChevronRight,
  Building2,
  Globe,
  Briefcase,
  LayoutGrid,
  Cpu,
  ShieldCheck,
  Smartphone,
  BrainCircuit,
  CloudCog
} from 'lucide-react';

export function HomePage() {
  // Datos para las estadísticas
  const stats = [
    { id: 1, value: '200+', label: 'Proyectos completados', icon: CheckCircle },
    { id: 2, value: '95%', label: 'Clientes satisfechos', icon: Users },
    { id: 3, value: '12+', label: 'Años de experiencia', icon: Award },
    { id: 4, value: '40%', label: 'Crecimiento anual', icon: BarChart3 }
  ];

  // Servicios principales
  const services = [
    {
      id: 1,
      title: "Desarrollo de Software a Medida",
      description: "Creamos soluciones personalizadas que se adaptan perfectamente a los procesos y necesidades específicas de tu negocio.",
      icon: Code,
      color: "from-blue-600 to-techno-purple"
    },
    {
      id: 2,
      title: "Consultoría en Transformación Digital",
      description: "Asesoramos en la implementación de tecnologías disruptivas para optimizar procesos y aumentar la competitividad.",
      icon: LayoutGrid,
      color: "from-green-500 to-techno-purple"
    },
    {
      id: 3,
      title: "Inteligencia Artificial y Machine Learning",
      description: "Aplicamos algoritmos avanzados para analizar datos y generar insights accionables para tu empresa.",
      icon: BrainCircuit,
      color: "from-purple-600 to-techno-purple"
    },
    {
      id: 4,
      title: "Desarrollo Web y Móvil",
      description: "Diseñamos experiencias digitales intuitivas y atractivas que conectan con tus usuarios y potencian tu marca.",
      icon: Smartphone,
      color: "from-orange-500 to-techno-purple"
    },
    {
      id: 5,
      title: "Ciberseguridad",
      description: "Protegemos tus activos digitales con estrategias avanzadas de seguridad y cumplimiento normativo.",
      icon: ShieldCheck,
      color: "from-red-500 to-techno-purple"
    },
    {
      id: 6,
      title: "Servicios Cloud",
      description: "Optimizamos tu infraestructura tecnológica con soluciones escalables, seguras y rentables.",
      icon: CloudCog,
      color: "from-cyan-500 to-techno-purple"
    }
  ];

  // Testimonios de clientes
  const testimonials = [
    {
      id: 1,
      quote: "Su equipo transformó completamente nuestras operaciones digitales en tiempo récord. Altamente recomendado.",
      author: "Ana García",
      position: "CEO, TechCorp",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      quote: "La implementación de IA que desarrollaron para nosotros ha incrementado nuestra eficiencia operativa en un 35%.",
      author: "Miguel Rodríguez",
      position: "Director de Innovación",
      company: "Global Finance",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: 3,
      quote: "Entregaron un producto que superó todas nuestras expectativas. Su enfoque en la experiencia de usuario es extraordinario.",
      author: "Laura Martínez",
      position: "Directora de Producto",
      company: "NexGen Apps",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Noticias y actualizaciones recientes
  const newsItems = [
    {
      id: 1,
      title: "Lanzamiento de nuestro nuevo servicio de IA predictiva",
      date: "15 Junio, 2023",
      thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Reconocidos como líderes en innovación tecnológica 2023",
      date: "3 Mayo, 2023",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Expansión de operaciones en Latinoamérica",
      date: "21 Abril, 2023",
      thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop"
    }
  ];

  // Casos de éxito
  const caseStudies = [
    {
      id: 1,
      title: "Transformación digital de ACME Corp",
      description: "Implementamos una solución integral que digitalizó todos los procesos clave, reduciendo costos operativos en un 42%.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      industry: "Manufactura",
      results: {
        efficiency: "+42%",
        costs: "-37%",
        productivity: "+28%"
      },
      icon: Building2,
      color: "from-blue-600/20 to-techno-purple/20"
    },
    {
      id: 2,
      title: "Plataforma e-commerce para Global Retail",
      description: "Desarrollamos una robusta plataforma de comercio electrónico que incrementó las ventas online un 156% en 6 meses.",
      image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
      industry: "Retail",
      results: {
        sales: "+156%",
        conversion: "+64%",
        customers: "+112%"
      },
      icon: Globe,
      color: "from-emerald-600/20 to-techno-purple/20"
    },
    {
      id: 3,
      title: "Sistema inteligente para FinTech Solutions",
      description: "Creamos un sistema de IA para detección de fraudes que redujo incidentes en un 92%, ahorrando millones anualmente.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
      industry: "Finanzas",
      results: {
        fraudReduction: "-92%",
        savings: "$4.5M",
        accuracy: "99.7%"
      },
      icon: Briefcase,
      color: "from-amber-600/20 to-techno-purple/20"
    }
  ];

  // Preguntas frecuentes
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "¿Qué servicios tecnológicos ofrecen?",
      answer: "Ofrecemos una amplia gama de servicios tecnológicos que incluyen desarrollo de software a medida, consultoría en transformación digital, implementación de soluciones de IA y machine learning, desarrollo web y móvil, ciberseguridad, y servicios cloud. Adaptamos nuestras soluciones a las necesidades específicas de cada cliente para maximizar el impacto y el retorno de inversión."
    },
    {
      question: "¿Cuánto tiempo tarda desarrollar un proyecto típico?",
      answer: "La duración de un proyecto varía según su complejidad y alcance. Proyectos pequeños pueden completarse en 4-6 semanas, mientras que los proyectos más complejos pueden llevar de 3 a 6 meses. Durante nuestra fase inicial de descubrimiento, establecemos un cronograma detallado con hitos claros para garantizar una entrega puntual y dentro del presupuesto."
    },
    {
      question: "¿Trabajan con empresas de cualquier tamaño?",
      answer: "Sí, trabajamos con empresas de todos los tamaños, desde startups y PyMEs hasta grandes corporaciones. Nuestro enfoque se adapta a las necesidades específicas y presupuesto de cada cliente, asegurando que todas las organizaciones puedan beneficiarse de soluciones tecnológicas de alta calidad que impulsarán su crecimiento."
    },
    {
      question: "¿Cómo garantizan la calidad de sus entregables?",
      answer: "Implementamos rigurosos controles de calidad en todas las etapas del desarrollo. Esto incluye revisiones de código, pruebas automatizadas, pruebas de usuario y QA exhaustivo. Seguimos metodologías ágiles con ciclos de retroalimentación constantes. Además, todos nuestros proyectos incluyen un período de soporte posterior al lanzamiento para asegurar que todo funcione perfectamente."
    },
    {
      question: "¿Ofrecen soporte continuo después de finalizar el proyecto?",
      answer: "Absolutamente. Ofrecemos diversos planes de soporte y mantenimiento post-lanzamiento para garantizar que su solución siga funcionando óptimamente a largo plazo. Estos planes incluyen monitoreo proactivo, actualizaciones de seguridad, optimizaciones de rendimiento, y soporte técnico con diferentes niveles de SLA según las necesidades de su negocio."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="bg-techno-dark">
      {/* Hero section - Mantener como primera sección por su impacto visual */}
      <Hero />

      <div className="relative z-10">
        {/* 1. Sección CTA principal - Llamado a la acción destacado */}
        <section className="py-16 bg-gradient-to-b from-techno-dark to-techno-dark/95 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Potencia tu empresa con <span className="text-techno-purple">soluciones digitales</span> a medida
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Desarrollamos software innovador que resuelve problemas reales y acelera el crecimiento de tu negocio. Nuestro enfoque combina tecnología de vanguardia con estrategias centradas en resultados.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-colors duration-300"
                  >
                    Solicita una consulta gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-transparent hover:bg-techno-light/20 transition-colors"
                  >
                    Explorar servicios
                  </Link>
                </div>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/30">
                <h3 className="text-xl font-bold text-white mb-4">¿Listo para dar el siguiente paso?</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-techno-dark border border-techno-purple/30 focus:border-techno-purple rounded-md shadow-sm py-2 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-techno-dark border border-techno-purple/30 focus:border-techno-purple rounded-md shadow-sm py-2 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                      placeholder="tu@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">Interesado en</label>
                    <select 
                      id="interest" 
                      className="w-full bg-techno-dark border border-techno-purple/30 focus:border-techno-purple rounded-md shadow-sm py-2 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="software">Desarrollo de Software</option>
                      <option value="consulting">Consultoría Digital</option>
                      <option value="ai">Inteligencia Artificial</option>
                      <option value="web">Desarrollo Web/Móvil</option>
                      <option value="security">Ciberseguridad</option>
                      <option value="cloud">Servicios Cloud</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-colors duration-300"
                  >
                    Solicitar información
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* 2. Sección de servicios principales */}
        <section className="py-20 bg-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Nuestros Servicios</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Soluciones <span className="text-techno-purple">Tecnológicas</span> Integrales
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Cubrimos todo el espectro digital con servicios especializados diseñados para potenciar la eficiencia y crecimiento de tu negocio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className={`mx-auto w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-techno-purple transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6">
                        {service.description}
                      </p>
                      
                      <Link 
                        to={`/services#${service.id}`} 
                        className="inline-flex items-center text-techno-purple hover:text-techno-purple-light font-medium transition-colors"
                      >
                        Más información
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techno-purple-light transition-all duration-300">
                Explorar todos los servicios
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* 3. Sección de estadísticas impactantes - Datos clave que validan la empresa */}
        <section className="py-16 bg-gradient-to-b from-techno-dark to-techno-dark/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.id} className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                    <div className="relative z-10">
                      <div className="mx-auto rounded-full bg-techno-purple/10 p-3 inline-flex mb-4 ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60">
                        <Icon className="h-6 w-6 text-techno-purple" />
                      </div>
                      <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <Link to="/about" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techno-purple-light transition-all duration-300">
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Sección de proceso de trabajo */}
        <section className="py-20 bg-gradient-to-b from-techno-dark/95 to-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Metodología</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Nuestro <span className="text-techno-purple">Proceso</span> de Trabajo
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Un enfoque estructurado y transparente que garantiza resultados excepcionales en cada proyecto.
              </p>
            </div>

            <div className="relative">
              {/* Línea de conexión */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-techno-purple/30 hidden md:block"></div>
              
              <div className="space-y-12 md:space-y-0 relative">
                {/* Paso 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative md:items-center">
                  <div className="md:text-right mb-8 md:mb-0">
                    <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-white mb-3">1. Descubrimiento y Análisis</h3>
                      <p className="text-gray-400">
                        Realizamos un diagnóstico exhaustivo para entender tus necesidades, objetivos y desafíos. Definimos métricas de éxito y elaboramos un plan estratégico.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto de la línea temporal */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-techno-purple flex items-center justify-center border-4 border-techno-dark">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                </div>
                
                {/* Paso 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative md:items-center mt-12">
                  <div className="hidden md:block"></div>
                  
                  <div className="mb-8 md:mb-0">
                    <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-white mb-3">2. Diseño y Planificación</h3>
                      <p className="text-gray-400">
                        Creamos prototipos y arquitecturas detalladas de la solución. Definimos tecnologías, plazos y entregables con un roadmap claro.
                      </p>
                    </div>
                  </div>
                  
                  {/* Punto de la línea temporal */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-techno-purple flex items-center justify-center border-4 border-techno-dark">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                </div>
                
                {/* Paso 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative md:items-center mt-12">
                  <div className="md:text-right mb-8 md:mb-0">
                    <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-white mb-3">3. Desarrollo e Implementación</h3>
                      <p className="text-gray-400">
                        Construimos la solución utilizando metodologías ágiles con sprints y demostraciones frecuentes para mantener transparencia y adaptar según feedback.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto de la línea temporal */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-techno-purple flex items-center justify-center border-4 border-techno-dark">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                </div>
                
                {/* Paso 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative md:items-center mt-12">
                  <div className="hidden md:block"></div>
                  
                  <div className="mb-8 md:mb-0">
                    <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-white mb-3">4. Pruebas y Validación</h3>
                      <p className="text-gray-400">
                        Realizamos pruebas exhaustivas de calidad, rendimiento y seguridad. Validamos la solución con usuarios reales para asegurar resultados óptimos.
                      </p>
                    </div>
                  </div>
                  
                  {/* Punto de la línea temporal */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-techno-purple flex items-center justify-center border-4 border-techno-dark">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                </div>
                
                {/* Paso 5 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative md:items-center mt-12">
                  <div className="md:text-right mb-8 md:mb-0">
                    <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                      <h3 className="text-xl font-bold text-white mb-3">5. Lanzamiento y Soporte</h3>
                      <p className="text-gray-400">
                        Desplegamos la solución y proporcionamos capacitación completa. Ofrecemos soporte continuo y planes de mantenimiento para garantizar el éxito a largo plazo.
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block"></div>
                  
                  {/* Punto de la línea temporal */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-techno-purple flex items-center justify-center border-4 border-techno-dark">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-all duration-300">
                Comienza tu proyecto
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Sección de Casos de Éxito - Pruebas tangibles de valor */}
        <section className="py-20 bg-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Casos de Éxito</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Transformamos <span className="text-techno-purple">Negocios</span> a través de la Tecnología
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Descubre cómo hemos ayudado a empresas líderes a alcanzar sus objetivos mediante soluciones tecnológicas innovadoras y personalizadas.
              </p>
            </div>

            {/* Grid de casos de éxito */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {caseStudies.map((caseStudy) => {
                const Icon = caseStudy.icon;
                return (
                  <div key={caseStudy.id} className="group relative bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all duration-300 hover:shadow-techno-sm flex flex-col h-full">
                    {/* Imagen del caso */}
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={caseStudy.image} 
                        alt={caseStudy.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-80"></div>
                      
                      {/* Badge de industria */}
                      <div className="absolute top-4 left-4 bg-techno-dark/80 backdrop-blur-sm border border-techno-purple/30 text-white text-xs px-3 py-1 rounded-full flex items-center">
                        <Icon className="h-3 w-3 mr-1 text-techno-purple" />
                        {caseStudy.industry}
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-techno-purple transition-colors">
                        {caseStudy.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 flex-grow">
                        {caseStudy.description}
                      </p>
                      
                      {/* Resultados */}
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        {Object.entries(caseStudy.results).map(([key, value]) => (
                          <div key={key} className={`bg-gradient-to-br ${caseStudy.color} p-3 rounded-lg text-center`}>
                            <div className="text-xl font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-300 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/portfolio/${caseStudy.id}`} 
                        className="inline-flex items-center text-techno-purple hover:text-techno-purple-light font-medium transition-colors"
                      >
                        Ver caso completo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/portfolio" className="inline-flex items-center px-6 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-techno-dark hover:bg-techno-light/20 transition-colors">
                Ver todos los casos
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Sección de Equipo - Expertise y credibilidad */}
        <section className="py-20 bg-gradient-to-b from-techno-dark/95 to-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Nuestro Equipo</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Expertos <span className="text-techno-purple">Apasionados</span> por la Innovación
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Nuestro equipo está formado por profesionales con amplia experiencia en el desarrollo de soluciones tecnológicas de alto impacto.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Miembro 1 */}
              <div className="bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="CEO" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-90"></div>
                </div>
                
                <div className="p-5 text-center relative -mt-16">
                  <div className="w-20 h-20 rounded-full bg-techno-dark mx-auto overflow-hidden border-4 border-techno-dark">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-techno-purple transition-colors">
                    Alejandro Martínez
                  </h3>
                  <div className="text-techno-purple text-sm font-medium mb-3">
                    CEO & Fundador
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Más de 15 años de experiencia en dirección de proyectos tecnológicos y transformación digital.
                  </p>
                </div>
              </div>
              
              {/* Miembro 2 */}
              <div className="bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="CTO" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-90"></div>
                </div>
                
                <div className="p-5 text-center relative -mt-16">
                  <div className="w-20 h-20 rounded-full bg-techno-dark mx-auto overflow-hidden border-4 border-techno-dark">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="CTO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-techno-purple transition-colors">
                    Carmen Rodríguez
                  </h3>
                  <div className="text-techno-purple text-sm font-medium mb-3">
                    CTO
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Ingeniera de software con especialización en IA y arquitecturas escalables de alto rendimiento.
                  </p>
                </div>
              </div>
              
              {/* Miembro 3 */}
              <div className="bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://randomuser.me/api/portraits/men/67.jpg" 
                    alt="Lead Developer" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-90"></div>
                </div>
                
                <div className="p-5 text-center relative -mt-16">
                  <div className="w-20 h-20 rounded-full bg-techno-dark mx-auto overflow-hidden border-4 border-techno-dark">
                    <img 
                      src="https://randomuser.me/api/portraits/men/67.jpg" 
                      alt="Lead Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-techno-purple transition-colors">
                    Daniel López
                  </h3>
                  <div className="text-techno-purple text-sm font-medium mb-3">
                    Lead Developer
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Experto en arquitecturas cloud y soluciones serverless con enfoque en escalabilidad y seguridad.
                  </p>
                </div>
              </div>
              
              {/* Miembro 4 */}
              <div className="bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 transition-all group">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src="https://randomuser.me/api/portraits/women/56.jpg" 
                    alt="UX Director" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-90"></div>
                </div>
                
                <div className="p-5 text-center relative -mt-16">
                  <div className="w-20 h-20 rounded-full bg-techno-dark mx-auto overflow-hidden border-4 border-techno-dark">
                    <img 
                      src="https://randomuser.me/api/portraits/women/56.jpg" 
                      alt="UX Director" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mt-3 group-hover:text-techno-purple transition-colors">
                    Laura Sánchez
                  </h3>
                  <div className="text-techno-purple text-sm font-medium mb-3">
                    Directora UX/UI
                  </div>
                  <p className="text-sm text-gray-400 mb-4">
                    Diseñadora de experiencias digitales centradas en el usuario con enfoque en accesibilidad e innovación.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/team" className="inline-flex items-center px-6 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-techno-dark hover:bg-techno-light/20 transition-colors">
                Conoce a todo el equipo
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. Sección FAQ - Información útil para resolver dudas */}
        <section className="py-16 bg-gradient-to-b from-techno-dark to-techno-dark/95 relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(147,51,234,0.1),transparent_70%)] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">FAQ</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Preguntas <span className="text-techno-purple">Frecuentes</span>
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Respuestas a las preguntas más comunes sobre nuestros servicios y metodología de trabajo.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-techno-light/20 backdrop-blur-sm rounded-lg border border-techno-purple/20 overflow-hidden transition-all duration-300"
                >
                  <button 
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openFAQ === index}
                  >
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <span className={`ml-4 flex-shrink-0 p-2 rounded-full bg-techno-dark border border-techno-purple/30 transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      {openFAQ === index ? (
                        <Minus className="h-4 w-4 text-techno-purple" />
                      ) : (
                        <Plus className="h-4 w-4 text-techno-purple" />
                      )}
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-400 mb-6">
                ¿No encuentras respuesta a tu pregunta?
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-techno-dark hover:bg-techno-light/20 transition-colors"
              >
                Contáctanos directamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. CTA Secundario - Impulsar conversión */}
        <section className="py-16 bg-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent)] pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-techno-light/30 backdrop-blur-sm rounded-xl overflow-hidden border border-techno-purple/30">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              
              <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-techno-purple/20 mb-6">
                  <Zap className="h-8 w-8 text-techno-purple" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  ¿Listo para transformar tu <span className="text-techno-purple">futuro digital</span>?
                </h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
                  Contáctanos hoy para descubrir cómo nuestras soluciones tecnológicas pueden impulsar tu negocio al siguiente nivel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-colors duration-300"
                  >
                    Agenda una demostración gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center justify-center px-8 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-transparent hover:bg-techno-light/20 transition-colors"
                  >
                    Ver casos de éxito
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Noticias y actualizaciones recientes - Contenido actualizado para mostrar actividad */}
        <section className="py-16 bg-gradient-to-b from-techno-dark/90 to-techno-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <div>
                <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Últimas noticias</span>
                <h2 className="text-2xl font-bold text-white">Novedades y actualizaciones</h2>
              </div>
              <Link to="/blog" className="text-techno-purple hover:text-techno-purple-light flex items-center">
                Ver todas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <div key={item.id} className="group bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/40 transition-all">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-techno-purple text-sm mb-2">{item.date}</div>
                    <h3 className="text-white font-medium text-lg mb-3 group-hover:text-techno-purple transition-colors">
                      {item.title}
                    </h3>
                    <Link to={`/blog/${item.id}`} className="inline-flex items-center text-techno-purple hover:text-techno-purple-light text-sm font-medium">
                      Leer más
                      <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 border border-techno-purple rounded-md text-base font-medium text-white bg-techno-dark hover:bg-techno-light/20 transition-colors"
              >
                Explorar nuestro blog
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage; 