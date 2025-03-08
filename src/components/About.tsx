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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-techno-dark to-black overflow-hidden relative">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 bg-techno-grid opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-purple/15 blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-blue-500/10 blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl techno-border pb-2">
              Tecnologías Emergentes
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mx-auto"></div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Exploramos y aplicamos las últimas innovaciones tecnológicas para crear soluciones que transforman negocios.
          </p>
        </div>

        {/* Sección de videos con animaciones */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:items-start">
            {/* Video principal - ocupa 3/5 del ancho en desktop */}
            <div className="lg:col-span-3 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-techno-light/30 backdrop-blur-sm p-1 sm:p-2 border border-techno-purple/20 shadow-lg shadow-techno-purple/5 transition-all duration-500">
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
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-techno-purple/40 hidden sm:block"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-techno-purple/40 hidden sm:block"></div>
              </div>
              <div className="mt-6 -mx-4 lg:-mx-12 ">
                {/* Contenedor de información del video con diseño mejorado y más ancho */}
                <div className="bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 rounded-lg p-6 transition-all duration-300 hover:border-techno-purple/40 shadow-lg shadow-techno-purple/5 relative overflow-hidden">
                  {/* Elementos decorativos de fondo */}
                  <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-techno-purple/5 blur-3xl rounded-full opacity-30 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-3xl rounded-full opacity-20 pointer-events-none"></div>
                  
                  {/* Cabecera con título y badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                    <h3 className="text-2xl font-bold text-white flex items-center">
                      <div className="mr-3 bg-techno-purple/20 p-2 rounded-md">
                        {React.createElement(videosData[activeVideo].icon, { className: "h-6 w-6 text-techno-purple" })}
                      </div>
                      {videosData[activeVideo].title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="bg-techno-purple/30 text-white text-xs px-3 py-1 rounded-full font-mono">
                        Tecnología Emergente
                      </span>
                      <span className="bg-techno-dark text-xs text-techno-purple px-3 py-1 rounded-full border border-techno-purple/30">
                        {2023 + activeVideo}
                      </span>
                    </div>
                  </div>
                  
                  {/* Línea decorativa con degradado */}
                  <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-techno-purple/50 to-transparent mb-5"></div>
                  
                  {/* Sección principal de contenido - diseño en dos columnas en pantallas más grandes */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
                    {/* Columna de descripción */}
                    <div className="lg:col-span-3 relative ">
                      <div className="absolute -left-1 top-0 bottom-0 w-0.5 bg-techno-purple/30 rounded-full"></div>
                      <div className="pl-4">
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {videosData[activeVideo].description}
                        </p>
                        <p className="mt-3 font-light text-gray-400 italic">
                          Descubre cómo esta tecnología está transformando los negocios y creando nuevas oportunidades en el ecosistema digital.
                        </p>
                        
                        {/* Etiquetas relacionadas */}
                        <div className="flex flex-wrap gap-2 mt-5">
                          <span className="text-xs bg-techno-purple/10 text-techno-purple px-2 py-1 rounded-md border border-techno-purple/20 hover:bg-techno-purple/20 transition-colors cursor-pointer">
                            #Innovación
                          </span>
                          <span className="text-xs bg-techno-purple/10 text-techno-purple px-2 py-1 rounded-md border border-techno-purple/20 hover:bg-techno-purple/20 transition-colors cursor-pointer">
                            #Futuro
                          </span>
                          <span className="text-xs bg-techno-purple/10 text-techno-purple px-2 py-1 rounded-md border border-techno-purple/20 hover:bg-techno-purple/20 transition-colors cursor-pointer">
                            #{videosData[activeVideo].title.replace(/\s/g, '')}
                          </span>
                          <span className="text-xs bg-techno-purple/10 text-techno-purple px-2 py-1 rounded-md border border-techno-purple/20 hover:bg-techno-purple/20 transition-colors cursor-pointer">
                            #Tecnología
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Columna de métricas */}
                    <div className="lg:col-span-2">
                      <div className="bg-techno-dark/30 rounded-lg p-4 border border-techno-purple/10 flex flex-col items-center text-center">
                        <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center justify-center">
                          <Zap className="h-4 w-4 text-techno-purple mr-2" />
                          Análisis de Impacto
                        </h4>
                        
                        {/* Métricas en grid */}
                        <div className="grid grid-cols-2 gap-3 w-full">
                          <div className="bg-techno-dark/70 rounded p-3 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                            <div className="text-techno-purple text-xl font-bold">+{45 + activeVideo * 12}%</div>
                            <div className="text-gray-400 text-xs">Crecimiento anual</div>
                          </div>
                          <div className="bg-techno-dark/70 rounded p-3 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                            <div className="text-techno-purple text-xl font-bold">{(activeVideo + 1) * 5}+</div>
                            <div className="text-gray-400 text-xs">Casos de éxito</div>
                          </div>
                          <div className="bg-techno-dark/70 rounded p-3 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                            <div className="text-techno-purple text-xl font-bold">{80 + activeVideo * 5}%</div>
                            <div className="text-gray-400 text-xs">Adopción empresarial</div>
                          </div>
                          <div className="bg-techno-dark/70 rounded p-3 hover:bg-techno-dark/50 transition-colors flex flex-col items-center">
                            <div className="text-techno-purple text-xl font-bold">{(2 + activeVideo)}x</div>
                            <div className="text-gray-400 text-xs">Retorno de inversión</div>
                          </div>
                        </div>
                        
                        {/* Call to action */}
                        <button className="w-full mt-3 bg-techno-purple/10 text-techno-purple border border-techno-purple/30 rounded p-2 text-sm hover:bg-techno-purple/20 transition-colors flex items-center justify-center">
                          <ArrowRight className="h-3 w-3 mr-2" /> Ver análisis completo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de videos - ocupa 2/5 del ancho en desktop */}
            <div className="lg:col-span-2 lg:mt-0">
              <div className="space-y-4 h-full">
                {videosData.map((video, index) => {
                  const Icon = video.icon;
                  return (
                    <div
                      key={video.id}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeVideo === index
                          ? "bg-techno-purple/20 border border-techno-purple/50"
                          : "bg-techno-light/10 border border-techno-purple/10 hover:border-techno-purple/30"
                      }`}
                      onClick={() => handleVideoPlay(index)}
                    >
                      <div className={`flex-shrink-0 rounded-md p-3 ${
                        activeVideo === index 
                          ? "bg-techno-purple/30 text-white" 
                          : "bg-techno-light/30 text-techno-purple"
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium leading-tight">{video.title}</h4>
                        <p className="text-sm text-gray-400 line-clamp-1">{video.description}</p>
                      </div>
                      {activeVideo === index && (
                        <div className="ml-auto w-1 h-12 rounded-md bg-techno-purple animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact" 
            className="px-6 py-3 bg-techno-purple text-white font-medium rounded-md hover:bg-techno-purple/80 transition-colors duration-200 flex items-center"
          >
            Contactar ahora
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            to="/about" 
            className="px-6 py-3 border border-techno-purple text-white font-medium rounded-md hover:bg-techno-purple/20 transition-colors duration-200"
          >
            Conoce más sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;