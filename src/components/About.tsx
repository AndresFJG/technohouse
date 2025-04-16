import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Zap, Code, Server, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Videos de muestra sobre tecnologías emergentes
const videosData = [
  {
    id: 1,
    title: 'Inteligencia Artificial',
    description: 'Avances en aprendizaje automático y procesamiento de lenguaje natural',
    videoUrl: '/videos/inteligencia-artificial.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1677442135773-8b85a155c176?q=80&w=500&auto=format&fit=crop',
    icon: Cpu
  },
  {
    id: 2,
    title: 'Blockchain',
    description: 'Aplicaciones empresariales de tecnología de cadena de bloques',
    videoUrl: '/videos/blockchain.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=500&auto=format&fit=crop',
    icon: Database
  },
  {
    id: 3,
    title: 'Computación Cuántica',
    description: 'El futuro del procesamiento de datos y criptografía',
    videoUrl: '/videos/quantum-computing.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=500&auto=format&fit=crop',
    icon: Server
  },
  {
    id: 4,
    title: 'Realidad Aumentada',
    description: 'Transformando la manera en que interactuamos con el mundo',
    videoUrl: '/videos/augmented-reality.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1633143081780-18d2655928f8?q=80&w=500&auto=format&fit=crop',
    icon: Code
  }
];

export function About() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Cambiar video automáticamente cada 8 segundos si no está reproduciéndose
  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setActiveVideo((prev) => (prev + 1) % videosData.length);
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Manejar reproducción de video
  const handleVideoPlay = (index: number) => {
    setActiveVideo(index);
    setIsPlaying(true);
    
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-6 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-techno-dark to-black overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-purple/15 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/10 blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="text-center relative z-10 mb-6 sm:mb-12">
          <div className="inline-block">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white techno-border pb-2">
              Tecnologías Emergentes
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mx-auto"></div>
          </div>
          <p className="mt-2 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-gray-300 px-4 sm:px-0">
            Exploramos y aplicamos las últimas innovaciones tecnológicas para crear soluciones que transforman negocios.
          </p>
        </div>

        {/* Sección de videos con animaciones */}
        <div className="mt-6 sm:mt-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
            {/* Lista de videos en móvil va primero */}
            <div className="lg:col-span-2 order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 lg:gap-4">
                {videosData.map((video, index) => {
                  const Icon = video.icon;
                  return (
                    <div
                      key={video.id}
                      className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeVideo === index
                          ? "bg-techno-purple/20 border border-techno-purple/50"
                          : "bg-techno-light/10 border border-techno-purple/10 hover:border-techno-purple/30"
                      }`}
                      onClick={() => handleVideoPlay(index)}
                    >
                      <div className={`flex-shrink-0 rounded-md p-2 ${
                        activeVideo === index 
                          ? "bg-techno-purple/30 text-white" 
                          : "bg-techno-light/30 text-techno-purple"
                      }`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white leading-tight truncate">
                          {video.title}
                        </h4>
                        <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                          {video.description}
                        </p>
                      </div>
                      {activeVideo === index && (
                        <div className="ml-auto w-1 h-8 rounded-md bg-techno-purple animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video principal */}
            <div className="lg:col-span-3 relative order-2 lg:order-1">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-techno-light/30 backdrop-blur-sm p-1 border border-techno-purple/20 shadow-lg shadow-techno-purple/5 transition-all duration-500">
                <video
                  ref={videoRef}
                  poster={videosData[activeVideo].thumbnail}
                  controls
                  className="w-full h-full object-cover rounded"
                  src={videosData[activeVideo].videoUrl}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    setActiveVideo((prev) => (prev + 1) % videosData.length);
                  }}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
                <div className="absolute -bottom-4 -right-4 w-12 sm:w-24 h-12 sm:h-24 border-r-2 border-b-2 border-techno-purple/40 hidden sm:block"></div>
                <div className="absolute -top-4 -left-4 w-12 sm:w-24 h-12 sm:h-24 border-l-2 border-t-2 border-techno-purple/40 hidden sm:block"></div>
              </div>

              {/* Info del video */}
              <div className="mt-4 sm:mt-6 -mx-3 sm:-mx-4 lg:-mx-12">
                <div className="bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 rounded-lg p-3 sm:p-6 transition-all duration-300 hover:border-techno-purple/40 shadow-lg shadow-techno-purple/5 relative overflow-hidden">
                  {/* Cabecera */}
                  <div className="flex flex-col gap-2 mb-3 sm:mb-5">
                    <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center">
                      <div className="mr-2 bg-techno-purple/20 p-1.5 rounded-md">
                        {React.createElement(videosData[activeVideo].icon, { className: "h-4 w-4 sm:h-6 sm:w-6 text-techno-purple" })}
                      </div>
                      {videosData[activeVideo].title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-techno-purple/30 text-white text-[10px] px-2 py-0.5 rounded-full font-mono">
                        Tecnología Emergente
                      </span>
                      <span className="bg-techno-dark text-[10px] text-techno-purple px-2 py-0.5 rounded-full border border-techno-purple/30">
                        {2023 + activeVideo}
                      </span>
                    </div>
                  </div>
                  
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-techno-purple/50 to-transparent mb-3 sm:mb-5"></div>
                  
                  {/* Contenido principal */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
                    <div className="lg:col-span-3 relative">
                      <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-techno-purple/30 rounded-full"></div>
                      <div className="pl-3">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {videosData[activeVideo].description}
                        </p>
                        <p className="mt-2 text-xs font-light text-gray-400 italic">
                          Descubre cómo esta tecnología está transformando los negocios y creando nuevas oportunidades.
                        </p>
                        
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {['Innovación', 'Futuro', videosData[activeVideo].title.replace(/\s/g, ''), 'Tecnología'].map((tag) => (
                            <span key={tag} className="text-[10px] bg-techno-purple/10 text-techno-purple px-2 py-0.5 rounded-md border border-techno-purple/20 hover:bg-techno-purple/20 transition-colors cursor-pointer">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Métricas */}
                    <div className="lg:col-span-2">
                      <div className="bg-techno-dark/30 rounded-lg p-3 border border-techno-purple/10">
                        <h4 className="text-xs font-medium text-gray-300 mb-2 flex items-center justify-center">
                          <Zap className="h-3 w-3 text-techno-purple mr-1.5" />
                          Análisis de Impacto
                        </h4>
                        
                        <div className="grid grid-cols-2 gap-2 w-full">
                          {[
                            { value: `+${45 + activeVideo * 12}%`, label: 'Crecimiento anual' },
                            { value: `${(activeVideo + 1) * 5}+`, label: 'Casos de éxito' },
                            { value: `${80 + activeVideo * 5}%`, label: 'Adopción empresarial' },
                            { value: `${(2 + activeVideo)}x`, label: 'Retorno de inversión' }
                          ].map((metric, idx) => (
                            <div key={idx} className="bg-techno-dark/70 rounded p-2 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                              <div className="text-techno-purple text-base sm:text-xl font-bold">{metric.value}</div>
                              <div className="text-gray-400 text-[10px] text-center">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <button className="w-full mt-2 bg-techno-purple/10 text-techno-purple border border-techno-purple/30 rounded p-1.5 text-xs hover:bg-techno-purple/20 transition-colors flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 mr-1.5" /> Ver análisis completo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-4">
          <Link 
            to="/contact" 
            className="block w-full sm:w-auto px-4 py-2.5 bg-techno-purple text-white text-sm font-medium rounded-md hover:bg-techno-purple/80 transition-colors duration-200 text-center"
          >
            Contactar ahora
            <ArrowRight className="inline-block ml-1.5 h-3.5 w-3.5" />
          </Link>
          <Link 
            to="/about" 
            className="block w-full sm:w-auto px-4 py-2.5 border border-techno-purple text-white text-sm font-medium rounded-md hover:bg-techno-purple/20 transition-colors duration-200 text-center"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;