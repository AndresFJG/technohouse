import React from 'react';
import { Code, Cpu, Zap, Users, Globe, Award, Server, Database } from 'lucide-react';

// Datos del equipo
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Fundadora',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Visionaria tecnológica con más de 15 años de experiencia en transformación digital.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Experto en IA y aprendizaje automático, liderando nuestras iniciativas de innovación.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Directora de Diseño',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Especialista en UX enfocada en crear experiencias digitales intuitivas.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
];

// Datos de logros
const achievements = [
  { 
    icon: Cpu, 
    title: '15+ Proyectos', 
    description: 'Implementados con éxito para startups y empresas' 
  },
  { 
    icon: Users, 
    title: '500+ Clientes', 
    description: 'Satisfechos con nuestras soluciones tecnológicas' 
  },
  { 
    icon: Globe, 
    title: '10+ Países', 
    description: 'Alcance internacional de nuestros servicios' 
  },
  { 
    icon: Award, 
    title: '8 Premios', 
    description: 'Por innovación tecnológica y excelencia' 
  }
];

// Datos de pilares de experiencia
const experiencePillars = [
  {
    icon: Cpu,
    title: "Innovación Tecnológica",
    description: "Adoptamos y desarrollamos tecnologías de vanguardia para impulsar soluciones revolucionarias que transforman industrias."
  },
  {
    icon: Code,
    title: "Desarrollo Ágil",
    description: "Aplicamos metodologías ágiles para entregar productos de alta calidad rápidamente, adaptándonos a las necesidades cambiantes."
  },
  {
    icon: Server,
    title: "Infraestructura Escalable",
    description: "Diseñamos arquitecturas que crecen con tu negocio, asegurando rendimiento y disponibilidad en todo momento."
  },
  {
    icon: Database,
    title: "Análisis de Datos",
    description: "Transformamos datos en insights accionables mediante análisis avanzados y visualizaciones intuitivas."
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Operamos internacionalmente, comprendiendo mercados diversos y ofreciendo soluciones adaptadas a cada contexto."
  },
  {
    icon: Zap,
    title: "Disrupción Digital",
    description: "Replanteamos modelos de negocio tradicionales con enfoques digitales innovadores que generan ventajas competitivas."
  }
];

export function AboutPage() {
  return (
    <main className="pt-16 bg-techno-dark min-h-screen">
      {/* ===== ELEMENTOS DECORATIVOS DE FONDO ===== */}
      <div className="fixed inset-0 bg-techno-grid opacity-10 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-techno-purple/20 blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="fixed bottom-1/3 right-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/10 blur-3xl opacity-20 pointer-events-none z-0"></div>
      
      {/* ===== SECCIÓN HERO (FULL WIDTH) ===== */}
      <section className="relative py-20 sm:py-24 overflow-hidden" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none z-0"></div>
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-3 lg:pr-8">
              <div className="inline-block">
                <span className="bg-techno-purple/20 text-techno-purple text-sm font-medium px-3 py-1 rounded-full">Nuestra Startup</span>
                <h1 id="hero-heading" className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white techno-border pb-2">
                  Impulsando la innovación tecnológica
                </h1>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-2"></div>
              </div>
              <p className="mt-6 text-gray-300 text-lg max-w-3xl">
                Somos una startup tecnológica especializada en soluciones digitales innovadoras que transforman negocios. 
                Nuestra misión es proporcionar tecnología de vanguardia que impulse el crecimiento y éxito de nuestros clientes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#team" className="px-6 py-3 bg-techno-purple text-white font-medium rounded-md hover:bg-techno-purple/80 transition-colors duration-200">
                  Conoce al equipo
                </a>
                <a href="/contact" className="px-6 py-3 border border-techno-purple text-white font-medium rounded-md hover:bg-techno-purple/20 transition-colors duration-200">
                  Contáctanos
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-techno-light/30 backdrop-blur-sm p-2 border border-techno-purple/20">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Nuestro equipo trabajando" 
                  className="object-cover rounded w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-techno-dark/50 to-transparent rounded-lg"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-techno-purple/40"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-techno-purple/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN VALORES (EDGE TO EDGE) ===== */}
      <section className="relative py-16 sm:py-20 w-full" aria-labelledby="valores-heading">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mx-auto">
              <h2 id="valores-heading" className="text-2xl sm:text-3xl font-extrabold text-white techno-border pb-2">
                Nuestros Valores
              </h2>
              <div className="h-0.5 w-2/3 bg-techno-purple mx-auto"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Nuestros principios fundamentales que guían cada decisión y definen nuestra cultura empresarial como startup tecnológica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Valor 1: Innovación */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 transition-all group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60">
                <Code className="h-6 w-6 text-techno-purple" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">Innovación</h3>
              <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                Impulsamos constantemente los límites de lo posible, buscando soluciones creativas para desafíos complejos.
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-techno-purple to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Valor 2: Excelencia */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 transition-all group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60">
                <Zap className="h-6 w-6 text-techno-purple" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">Excelencia</h3>
              <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                Nos comprometemos con la más alta calidad en todo lo que hacemos, superando expectativas en cada proyecto.
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-techno-purple to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
            
            {/* Valor 3: Colaboración */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 transition-all group relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60">
                <Users className="h-6 w-6 text-techno-purple" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">Colaboración</h3>
              <p className="mt-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                Creemos en el poder del trabajo en equipo y las asociaciones estratégicas para alcanzar resultados extraordinarios.
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-techno-purple to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN LOGROS (HORIZONTAL STRIP) ===== */}
      <section className="w-full py-16 sm:py-20 bg-techno-light/5" aria-labelledby="logros-heading">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mx-auto">
              <h2 id="logros-heading" className="text-2xl sm:text-3xl font-extrabold text-white techno-border pb-2">
                Nuestros Logros
              </h2>
              <div className="h-0.5 w-2/3 bg-techno-purple mx-auto"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Hitos que demuestran nuestro compromiso con la excelencia e innovación tecnológica
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-6 sm:p-8 bg-techno-light/10 backdrop-blur-sm rounded-lg border border-techno-purple/10 hover:border-techno-purple/30 transition-all"
                >
                  <div className="inline-flex p-3 bg-techno-purple/10 rounded-full text-techno-purple">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN EXPERIENCIA DIGITAL (FULL WIDTH DESIGN) ===== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-techno-dark to-techno-dark/90 relative overflow-hidden w-full" aria-labelledby="experiencia-heading">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(135,28,219,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none"></div>
        
        {/* Líneas decorativas */}
        <div className="absolute h-px w-full top-1/3 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
        <div className="absolute h-px w-full top-2/3 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="h-px w-8 bg-techno-purple"></span>
                <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Nuestra Trayectoria</span>
                <span className="h-px w-8 bg-techno-purple"></span>
              </div>
              <h2 id="experiencia-heading" className="text-3xl sm:text-4xl font-extrabold text-white sm:text-5xl techno-border">
                Experiencia Digital <span className="text-techno-purple">Revolucionaria</span>
              </h2>
              <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
            </div>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Una startup tecnológica que define el futuro digital a través de soluciones innovadoras
            </p>
          </div>

          {/* Cronología de Experiencia - Diseño Vertical con Línea Temporal */}
          <div className="relative mb-20 mt-20 max-w-4xl mx-auto">
            {/* Línea central vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-techno-purple/50"></div>
            
            <div className="space-y-24 relative">
              {/* Punto 1 - El Inicio */}
              <div className="relative">
                <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-techno-dark border-2 border-techno-purple z-10">
                  <span className="text-techno-purple font-bold text-xl">01</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 pt-8 pb-4 rounded-lg bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 hover:border-techno-purple/40 transition-all p-6 shadow-lg shadow-techno-purple/5">
                    <div className="text-2xl font-semibold text-white mb-3 flex items-center">
                      <span className="text-techno-purple mr-2">2018</span>
                      <span>El Inicio</span>
                    </div>
                    <p className="text-gray-300">
                      Fundamos nuestra startup con una visión clara: revolucionar la forma en que las empresas utilizan la tecnología. Comenzamos con un equipo pequeño pero apasionado por transformar el mundo digital.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Punto 2 - Expansión */}
              <div className="relative">
                <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-techno-dark border-2 border-techno-purple z-10">
                  <span className="text-techno-purple font-bold text-xl">02</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:pr-12 pt-8 pb-4 rounded-lg bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 hover:border-techno-purple/40 transition-all p-6 shadow-lg shadow-techno-purple/5 md:text-right">
                    <div className="text-2xl font-semibold text-white mb-3 md:flex md:justify-end md:items-center">
                      <span className="text-techno-purple mr-2 md:order-2 md:ml-2 md:mr-0">2020</span>
                      <span>Expansión</span>
                    </div>
                    <p className="text-gray-300">
                      Tras nuestro primer gran éxito con clientes internacionales, expandimos nuestro equipo y cartera de servicios, incorporando soluciones avanzadas de IA y aprendizaje automático para resolver problemas complejos.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
              
              {/* Punto 3 - Reconocimiento */}
              <div className="relative">
                <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-techno-dark border-2 border-techno-purple z-10">
                  <span className="text-techno-purple font-bold text-xl">03</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 pt-8 pb-4 rounded-lg bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 hover:border-techno-purple/40 transition-all p-6 shadow-lg shadow-techno-purple/5">
                    <div className="text-2xl font-semibold text-white mb-3 flex items-center">
                      <span className="text-techno-purple mr-2">2022</span>
                      <span>Reconocimiento</span>
                    </div>
                    <p className="text-gray-300">
                      Nuestras innovadoras soluciones tecnológicas nos valieron reconocimiento en la industria y varios premios prestigiosos, posicionándonos como referentes en el campo de la transformación digital.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Punto 4 - Innovación Continua */}
              <div className="relative">
                <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-techno-dark border-2 border-techno-purple z-10">
                  <span className="text-techno-purple font-bold text-xl">04</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:pr-12 pt-8 pb-4 rounded-lg bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 hover:border-techno-purple/40 transition-all p-6 shadow-lg shadow-techno-purple/5 md:text-right">
                    <div className="text-2xl font-semibold text-white mb-3 md:flex md:justify-end md:items-center">
                      <span className="text-techno-purple mr-2 md:order-2 md:ml-2 md:mr-0">Hoy</span>
                      <span>Innovación Continua</span>
                    </div>
                    <p className="text-gray-300">
                      Seguimos redefiniendo los límites de lo posible, trabajando con las últimas tecnologías para ofrecer soluciones vanguardistas que transforman negocios en todo el mundo y definen el futuro digital.
                    </p>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
              </div>
              
              {/* Punto final decorativo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-8 h-8 rounded-full bg-techno-purple/30 blur-sm"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-4 h-4 rounded-full bg-techno-purple"></div>
            </div>
          </div>

          {/* Pilares de nuestra experiencia */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Pilares de Nuestra Experiencia</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mt-4">
                Elementos fundamentales que definen nuestra propuesta única en el ecosistema tecnológico
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {experiencePillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 transition-all duration-300 overflow-hidden h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                    <div className="mb-4 relative z-10">
                      <span className="inline-flex p-3 rounded-lg bg-techno-purple/10 text-techno-purple ring-1 ring-techno-purple/30 group-hover:ring-techno-purple/60 transition-colors">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-white group-hover:text-techno-purple transition-colors mb-3 relative z-10">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors relative z-10">
                      {item.description}
                    </p>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-techno-purple to-blue-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* CTA - Diseño Full Width */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-techno-dark/80 to-techno-dark/80 backdrop-blur-sm border border-techno-purple/30 p-8 sm:p-10 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-techno-grid opacity-5"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-techno-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
                <div className="md:max-w-xl">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-0">Descubre el Futuro Digital con Nosotros</h3>
                  <p className="text-gray-300 mb-0">
                    Únete a las empresas visionarias que ya están transformando sus negocios con nuestras soluciones.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-techno-purple hover:bg-techno-purple/90 transition-all shadow-glow-sm hover:shadow-glow-md whitespace-nowrap"
                  >
                    Contáctanos Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECCIÓN EQUIPO (WIDE CARDS) ===== */}
      <section id="team" className="py-20 sm:py-24 w-full" aria-labelledby="team-heading">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block mx-auto">
              <h2 id="team-heading" className="text-2xl sm:text-3xl font-extrabold text-white techno-border pb-2">
                Nuestro Equipo
              </h2>
              <div className="h-0.5 w-2/3 bg-techno-purple mx-auto"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-4">
              Un grupo de expertos apasionados por la tecnología y la innovación, comprometidos con el éxito de tu empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative bg-techno-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 hover:shadow-techno-sm transition-all h-full"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-60 object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6 sm:p-8 relative">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-techno-purple mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{member.bio}</p>
                  
                  <div className="mt-4 flex space-x-3">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-techno-purple transition-colors" aria-label={`LinkedIn de ${member.name}`}>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-techno-purple transition-colors" aria-label={`Twitter de ${member.name}`}>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-techno-purple transition-colors" aria-label={`GitHub de ${member.name}`}>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;