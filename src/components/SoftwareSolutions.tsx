import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Code, Database, Cloud, Cpu, BarChart, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

// Datos de soluciones de software con imágenes representativas
const softwareSolutions = [
  {
    id: 1,
    title: 'Desarrollo de aplicaciones a medida',
    description: 'Creamos software personalizado alineado con tus necesidades específicas',
    icon: Code,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    metrics: {
      tiempo: '-30%',
      eficiencia: '+75%',
      adaptación: '100%',
      rendimiento: '99.9%'
    },
    visualFocus: 'development'
  },
  {
    id: 2,
    title: 'Inteligencia artificial y analítica',
    description: 'Aprovecha el poder de los datos con soluciones de IA avanzadas',
    icon: Cpu,
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop',
    metrics: {
      precisión: '98.2%',
      escalabilidad: '∞',
      rendimiento: '5x',
      ahorro: '+45%'
    },
    visualFocus: 'ai'
  },
  {
    id: 3,
    title: 'Infraestructura y servicios cloud',
    description: 'Plataformas robustas y escalables para tus aplicaciones críticas',
    icon: Cloud,
    imageUrl: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1000&auto=format&fit=crop',
    metrics: {
      disponibilidad: '99.99%',
      escalabilidad: '∞',
      seguridad: '24/7',
      ahorro: '+60%'
    },
    visualFocus: 'cloud'
  },
  {
    id: 4,
    title: 'Integración de sistemas y APIs',
    description: 'Conectamos tus aplicaciones existentes para un ecosistema digital fluido',
    icon: Server,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    metrics: {
      conexiones: '100+',
      fiabilidad: '99.9%',
      tiempo: '-45%',
      errores: '-95%'
    },
    visualFocus: 'integration'
  }
];

export function SoftwareSolutions() {
  const [activeSolution, setActiveSolution] = useState(0);

  // Manejar cambio de solución activa
  const handleSolutionChange = (index: number) => {
    setActiveSolution(index);
  };

  // Solución actualmente seleccionada
  const currentSolution = softwareSolutions[activeSolution];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-techno-dark to-black overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-purple/15 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/10 blur-3xl opacity-20 pointer-events-none"></div>
      
      {/* Badge superior */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="inline-block bg-techno-purple/20 text-techno-purple rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-techno-purple/30">
        Soluciones
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          {/* Columna izquierda con texto */}
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Tu socio tecnológico para la transformación digital
            </h2>
            
            <p className="text-gray-300 mb-8">
              Desarrollamos soluciones de software innovadoras que impulsan el crecimiento de tu negocio con tecnologías de vanguardia y enfoque centrado en resultados.
            </p>
            
            <div className="space-y-4">
              {softwareSolutions.map((solution, index) => (
                <div 
                  key={solution.id} 
                  className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeSolution === index
                      ? "bg-techno-purple/20 border border-techno-purple/50"
                      : "bg-techno-light/10 border border-techno-purple/10 hover:border-techno-purple/30"
                  }`}
                  onClick={() => handleSolutionChange(index)}
                >
                  <div className={`flex-shrink-0 rounded-md p-3 ${
                    activeSolution === index 
                      ? "bg-techno-purple/30 text-white" 
                      : "bg-techno-light/30 text-techno-purple"
                  }`}>
                    {React.createElement(solution.icon, { className: "h-5 w-5" })}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium leading-tight">{solution.title}</h4>
                    <p className="text-sm text-gray-400 line-clamp-1">{solution.description}</p>
                  </div>
                  {activeSolution === index && (
                    <div className="ml-auto w-1 h-12 rounded-md bg-techno-purple animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna derecha con visualización interactiva - Ahora con imágenes */}
          <div className="relative rounded-lg bg-techno-light/10 backdrop-blur-sm p-6 border border-techno-purple/20 shadow-lg shadow-techno-purple/5 transition-all duration-500 overflow-hidden h-[500px]">
            {/* Imagen principal de fondo */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={currentSolution.imageUrl} 
                alt={currentSolution.title} 
                className="w-full h-full object-cover object-center opacity-50 transition-all duration-700 transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-techno-dark/80 to-transparent"></div>
            </div>
            
            {/* Overlay con efecto según la solución seleccionada */}
            <div className="absolute inset-0">
              {currentSolution.visualFocus === 'development' && (
                <div className="absolute inset-0 bg-gradient-to-r from-techno-purple/20 to-transparent opacity-60"></div>
              )}
              {currentSolution.visualFocus === 'ai' && (
                <div className="absolute inset-0 bg-gradient-to-t from-techno-purple/30 to-blue-500/20 opacity-40"></div>
              )}
              {currentSolution.visualFocus === 'cloud' && (
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-techno-purple/20 opacity-50"></div>
              )}
              {currentSolution.visualFocus === 'integration' && (
                <div className="absolute inset-0 bg-gradient-to-br from-techno-purple/30 to-blue-500/20 opacity-40"></div>
              )}
            </div>
            
            {/* Elementos gráficos según la solución */}
            <div className="relative z-10 h-full w-full flex flex-col justify-between">
              {/* Ícono y título destacado */}
              <div className="bg-techno-dark/70 backdrop-blur-md p-4 rounded-lg border border-techno-purple/30 inline-block max-w-max">
                <div className="flex items-center">
                  {React.createElement(currentSolution.icon, { className: "h-6 w-6 text-techno-purple mr-3" })}
                  <h3 className="text-white font-bold">{currentSolution.title}</h3>
                </div>
              </div>
              
              {/* Elementos visuales específicos según la solución */}
              {currentSolution.visualFocus === 'development' && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 opacity-80">
                  <div className="animate-ping absolute h-8 w-8 rounded-full bg-techno-purple/30"></div>
                  <div className="absolute h-16 w-16 top-20 left-32 rounded-full border border-techno-purple/50"></div>
                  <div className="absolute h-12 w-12 bottom-0 left-10 rounded-full border border-blue-500/50"></div>
                  <div className="absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-techno-purple/50 to-blue-500/50"></div>
                </div>
              )}
              
              {currentSolution.visualFocus === 'ai' && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <div className="w-56 h-56 border border-dashed border-techno-purple/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
                  <div className="absolute w-40 h-40 border border-dotted border-blue-500/40 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
                  <div className="absolute w-8 h-8 bg-techno-purple/40 blur-sm rounded-full"></div>
                </div>
              )}
              
              {currentSolution.visualFocus === 'cloud' && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute w-32 h-16 -top-8 -left-16 bg-blue-500/20 rounded-full blur-md"></div>
                    <div className="absolute w-24 h-12 -top-4 left-0 bg-techno-purple/20 rounded-full blur-md"></div>
                    <div className="absolute w-20 h-10 top-0 -right-10 bg-blue-500/20 rounded-full blur-md"></div>
                    <div className="w-10 h-10 bg-techno-purple/30 rounded-full relative animate-bounce duration-1000"></div>
                  </div>
                </div>
              )}
              
              {currentSolution.visualFocus === 'integration' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute w-px h-full bg-techno-purple/40 left-1/2 top-0"></div>
                    <div className="absolute w-full h-px bg-techno-purple/40 top-1/2 left-0"></div>
                    <div className="absolute w-4 h-4 bg-techno-purple/60 rounded-full top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-4 h-4 bg-techno-purple/60 rounded-full top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute w-4 h-4 bg-techno-purple/60 rounded-full bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute w-4 h-4 bg-techno-purple/60 rounded-full bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute w-6 h-6 bg-blue-500/60 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              )}
              
              {/* Métricas */}
              <div className="grid grid-cols-2 gap-2 bg-techno-dark/80 backdrop-blur-md p-4 rounded-lg border border-techno-purple/20">
                {Object.entries(currentSolution.metrics).map(([key, value]) => (
                  <div key={key} className="bg-techno-dark/70 rounded p-2 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                    <div className="text-techno-purple text-lg font-bold">{value}</div>
                    <div className="text-gray-400 text-xs capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón de acción */}
        <div className="mt-12 flex justify-center">
          <Link 
            to="/soluciones" 
            className="px-6 py-3 inline-flex items-center bg-techno-purple text-white font-medium rounded-md hover:bg-techno-purple/80 transition-colors duration-200"
          >
            Explorar soluciones
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SoftwareSolutions;