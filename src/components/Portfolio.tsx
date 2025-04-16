import React, { useState, useRef, useEffect } from 'react';
import { Button } from './Button';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con integración de pagos y gestión de inventario.',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    url: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    description: 'Panel de control con análisis predictivo y visualización de datos en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'AWS'],
    url: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 3,
    title: 'Blockchain Wallet',
    description: 'Billetera digital con soporte para múltiples criptomonedas y tokens.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    url: 'https://example.com',
    github: 'https://github.com',
  },
];

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const diff = startX - e.touches[0].clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < projects.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsDragging(false);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-12 sm:py-20 md:py-32 overflow-hidden">
      {/* Fondo con efecto de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-techno-dark to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-techno-purple/20 border border-techno-purple/40 mb-4 sm:mb-6">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-techno-purple-light mr-2 animate-pulse" />
            <span className="text-xs sm:text-sm text-techno-purple-light">Nuestro Portafolio</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Proyectos Destacados
            <span className="block techno-gradient mt-2">Que Inspiran</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos más innovadores y exitosos.
          </p>
        </div>

        {/* Contenedor principal del slider con navegación */}
        <div className="relative flex items-center">
          {/* Flecha izquierda - Solo desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-16 z-10 w-12 h-12 rounded-full bg-techno-dark/90 backdrop-blur-sm border border-techno-purple/30 items-center justify-center text-techno-purple hover:bg-techno-purple/20 transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
            disabled={currentIndex === 0}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Contenedor del Slider */}
          <div 
            ref={sliderRef}
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-lg sm:rounded-2xl md:cursor-default touch-pan-y md:touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="relative h-full">
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12">
                    <div className="max-w-3xl mx-auto">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                      
                      {/* Tecnologías */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-mono bg-techno-dark/50 text-techno-purple-light rounded-md border border-techno-purple/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Enlaces */}
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.url}
                          className="group text-sm sm:text-base"
                        >
                          Ver Proyecto
                          <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          href={project.github}
                          className="group text-sm sm:text-base"
                        >
                          Código
                          <Github className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:rotate-12 transition-transform" />
                        </Button>
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-techno-purple/20 hover:bg-techno-purple/30 border border-techno-purple/30 text-white rounded-lg transition-colors group text-sm sm:text-base"
                        >
                          Ver Detalles
                          <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha derecha - Solo desktop */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-16 z-10 w-12 h-12 rounded-full bg-techno-dark/90 backdrop-blur-sm border border-techno-purple/30 items-center justify-center text-techno-purple hover:bg-techno-purple/20 transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
            disabled={currentIndex === projects.length - 1}
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-techno-purple' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-16 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-techno-purple hover:bg-techno-purple-light text-white font-medium rounded-lg transition-colors group text-sm sm:text-base"
          >
            Ver más proyectos
            <Zap className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}