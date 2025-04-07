import React from 'react';
import { Services } from '../components/Services';
import { 
  Clock, 
  Layers, 
  CheckCircle, 
  Calendar, 
  ArrowRight, 
  Star, 
  Users,
  MessageSquare, 
  Settings, 
  PieChart,
  Zap,
  Shield
} from 'lucide-react';

// Datos de precios y paquetes
const pricingPlans = [
  {
    name: 'Básico',
    price: '300€',
    features: [
      'Desarrollo web simple',
      'Hasta 5 páginas',
      'Diseño responsivo básico',
      'Integración de contacto',
      'Soporte por 30 días'
    ],
    highlighted: false,
    cta: 'Comenzar',
    badge: ''
  },
  {
    name: 'Profesional',
    price: '600€',
    features: [
      'Desarrollo web completo',
      'Hasta 10 páginas',
      'Diseño UX/UI avanzado',
      'Optimización SEO',
      'CMS personalizado',
      'Soporte por 6 meses'
    ],
    highlighted: true,
    cta: 'Seleccionar Plan',
    badge: 'Más popular'
  },
  {
    name: 'Empresarial',
    price: 'Personalizado',
    features: [
      'Desarrollo a medida',
      'Páginas ilimitadas',
      'Integración con sistemas',
      'Inteligencia artificial',
      'Dashboard analítico',
      'Soporte prioritario'
    ],
    highlighted: false,
    cta: 'Contactar',
    badge: ''
  }
];

// Información sobre metodología y procesos
const workflowSteps = [
  {
    id: 1,
    title: 'Descubrimiento',
    description: 'Reuniones iniciales para entender tus necesidades y objetivos de negocio.',
    icon: MessageSquare,
    duration: '1-2 semanas'
  },
  {
    id: 2,
    title: 'Planificación',
    description: 'Definición del alcance, arquitectura y diseño de la solución propuesta.',
    icon: PieChart,
    duration: '1-3 semanas'
  },
  {
    id: 3,
    title: 'Desarrollo',
    description: 'Implementación del proyecto con ciclos iterativos de desarrollo y revisión.',
    icon: Settings,
    duration: '4-12 semanas'
  },
  {
    id: 4,
    title: 'Despliegue',
    description: 'Pruebas finales, optimización y lanzamiento de la solución.',
    icon: Zap,
    duration: '1-2 semanas'
  },
  {
    id: 5,
    title: 'Soporte',
    description: 'Mantenimiento continuo, actualizaciones y apoyo técnico.',
    icon: Shield,
    duration: 'Según plan'
  }
];

export function ServicesPage() {
  return (
    <main className="pt-16 bg-techno-dark">
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        {/* ===== SECCIÓN: PAQUETES Y PRECIOS ===== */}
        <section className="py-16 bg-techno-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent)] blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Precios</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Paquetes de <span className="text-techno-purple">Servicios</span>
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Ofrecemos soluciones escalables que se adaptan a tu presupuesto y necesidades específicas.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={plan.name}
                  className={`relative bg-techno-light/20 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${plan.highlighted ? 'border-2 border-techno-purple shadow-techno-sm transform md:-translate-y-4' : 'border border-techno-purple/30 hover:border-techno-purple/60'}`}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                  
                  {plan.badge && (
                    <div className="absolute top-0 right-0">
                      <div className="text-xs font-semibold text-white bg-techno-purple py-1.5 px-4 rounded-bl-lg">
                        {plan.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      {plan.price !== 'Personalizado' ? (
                        <>
                          <span className="text-4xl font-extrabold text-white">€{plan.price}</span>
                        </>
                      ) : (
                        <span className="text-3xl font-extrabold text-white">Personalizado</span>
                      )}
                    </div>
                    
                    <ul className="mt-6 space-y-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex">
                          <CheckCircle className="h-5 w-5 text-techno-purple flex-shrink-0" />
                          <span className="ml-3 text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium ${plan.highlighted ? 'text-white bg-techno-purple hover:bg-techno-purple-light' : 'text-white bg-techno-dark hover:bg-techno-light border-techno-purple/50'} transition-colors duration-300`}
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400">
                ¿Necesitas una solución personalizada? <a href="/contact" className="text-techno-purple hover:text-techno-purple-light font-medium">Contáctanos</a> para un presupuesto a medida.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SECCIÓN: POR QUÉ ELEGIRNOS ===== */}
        <section className="py-16 bg-gradient-to-b from-techno-dark/95 to-techno-dark relative overflow-hidden">
          <div className="absolute h-px w-full top-0 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Ventajas</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Por qué <span className="text-techno-purple">Elegirnos</span>
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Nos diferenciamos por nuestra dedicación a la excelencia, la innovación y la satisfacción del cliente.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <Clock className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Entregas Puntuales</h3>
                <p className="mt-2 text-gray-400">
                  Nos comprometemos con los plazos establecidos, manteniendo una comunicación transparente durante todo el proceso.
                </p>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <Star className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Calidad Premium</h3>
                <p className="mt-2 text-gray-400">
                  Cada proyecto pasa por rigurosos controles de calidad para garantizar un producto final excepcional y sin errores.
                </p>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <Users className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Equipo Especializado</h3>
                <p className="mt-2 text-gray-400">
                  Contamos con profesionales altamente cualificados en diversas áreas tecnológicas para abordar cualquier desafío.
                </p>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <Calendar className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Soporte Continuo</h3>
                <p className="mt-2 text-gray-400">
                  No desaparecemos después del lanzamiento. Ofrecemos soporte técnico y mantenimiento para garantizar el éxito a largo plazo.
                </p>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <Layers className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Soluciones Escalables</h3>
                <p className="mt-2 text-gray-400">
                  Diseñamos arquitecturas flexibles que pueden crecer con tu negocio, adaptándose a tus necesidades futuras.
                </p>
              </div>
              
              <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                <div className="rounded-full bg-techno-purple/10 p-3 inline-flex ring-1 ring-techno-purple/30">
                  <MessageSquare className="h-6 w-6 text-techno-purple" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">Comunicación Clara</h3>
                <p className="mt-2 text-gray-400">
                  Mantenemos canales abiertos y transparentes para que estés siempre informado sobre el avance de tu proyecto.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Componente de servicios existente */}
        <Services />
        
        {/* ===== SECCIÓN: CÓMO TRABAJAMOS ===== */}
        <section className="py-16 bg-gradient-to-b from-techno-dark to-techno-dark/95 relative overflow-hidden">
          <div className="absolute h-px w-full top-0 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="h-px w-8 bg-techno-purple"></span>
                  <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Proceso</span>
                  <span className="h-px w-8 bg-techno-purple"></span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Cómo <span className="text-techno-purple">Trabajamos</span>
                </h2>
                <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
              </div>
              <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
                Nuestra metodología ágil garantiza resultados de alta calidad en los plazos establecidos, mediante un enfoque estructurado pero flexible.
              </p>
            </div>
            
            <div className="relative mt-12 max-w-5xl mx-auto">
              {/* Línea conectora */}
              <div className="absolute left-16 lg:left-1/2 top-0 h-full w-0.5 bg-techno-purple/20 hidden sm:block"></div>
              
              {/* Pasos del proceso */}
              <div className="space-y-16">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.id} className={`relative sm:grid sm:grid-cols-2 sm:items-center ${index % 2 === 0 ? '' : 'sm:grid-flow-dense'}`}>
                      {/* Círculo con número para pantallas pequeñas */}
                      <div className="sm:hidden absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-techno-dark border border-techno-purple">
                        <span className="text-techno-purple text-sm font-bold">{step.id}</span>
                      </div>
                      
                      {/* Círculo con número para pantallas medianas y grandes */}
                      <div className="hidden sm:flex absolute left-16 lg:left-1/2 top-1/2 -translate-y-1/2 transform -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full bg-techno-dark border-2 border-techno-purple z-10">
                        <span className="text-techno-purple font-bold">{step.id}</span>
                      </div>
                      
                      <div className={`sm:pr-16 lg:pr-24 ${index % 2 === 0 ? 'lg:text-right sm:col-start-1' : 'sm:col-start-2 lg:pl-24 sm:pl-16'}`}>
                        <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all">
                          <div className="flex items-center space-x-3">
                            <div className="rounded-full bg-techno-purple/10 p-2 inline-flex ring-1 ring-techno-purple/30">
                              <Icon className="h-5 w-5 text-techno-purple" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                          </div>
                          <p className="mt-3 text-gray-400">{step.description}</p>
                          <div className="mt-4 inline-flex items-center text-sm font-medium text-techno-purple">
                            <Clock className="mr-2 h-4 w-4 text-techno-purple/70" />
                            <span>Duración: {step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`hidden sm:block ${index % 2 === 0 ? 'sm:col-start-2' : 'sm:col-start-1'}`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* ===== SECCIÓN: LLAMADA A LA ACCIÓN ===== */}
        <section className="py-16 bg-techno-dark relative overflow-hidden">
          <div className="absolute h-px w-full top-0 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1),transparent)] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-techno-light/30 backdrop-blur-sm rounded-xl overflow-hidden border border-techno-purple/30">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              
              <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    ¿Listo para <span className="text-techno-purple">transformar</span> tu visión en realidad?
                  </h2>
                  <p className="mt-4 text-lg text-gray-300">
                    Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos. Agenda una consulta gratuita hoy mismo.
                  </p>
                </div>
                
                <div className="text-center lg:text-right">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-colors duration-300"
                  >
                    Contactar ahora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ServicesPage; 