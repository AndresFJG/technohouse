import React from 'react';
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <section className="min-h-screen py-12 sm:py-16 md:py-20 flex items-center justify-center bg-gradient-to-b from-techno-dark to-techno-dark/90">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Elementos decorativos */}
        <div className="absolute top-32 -left-64 w-96 h-96 rounded-full bg-techno-purple/5 blur-3xl"></div>
        <div className="hidden lg:block absolute bottom-20 right-10 w-10 h-10 border border-techno-purple/40"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-techno-purple/10 blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Sección de texto */}
          <div className="text-center lg:text-left relative z-10">
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center lg:justify-start">
                <AlertTriangle className="h-8 w-8 text-techno-purple mr-2" />
                <span className="text-lg font-mono text-techno-purple">Error_404</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white relative techno-border pb-2">
              Página no encontrada
              <div className="h-0.5 w-1/2 bg-techno-purple mt-2"></div>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              La URL que estás buscando parece estar en otro sector del ciberespacio. Nuestros algoritmos no pueden localizarla.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="/" 
                className="inline-flex items-center px-6 py-3 border border-techno-purple text-base font-medium rounded-md text-white bg-techno-purple hover:bg-techno-purple/80 transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <Home className="mr-2 h-5 w-5" />
                Volver al inicio
              </a>
              
              <button 
                onClick={() => window.history.back()} 
                className="inline-flex items-center px-6 py-3 border border-techno-purple text-base font-medium rounded-md text-white bg-transparent hover:bg-techno-purple/20 transition-colors duration-200 w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Regresar
              </button>
            </div>
          </div>
          
          {/* Sección visual */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto relative">
              {/* Cuadrícula tecnológica de fondo */}
              <div className="absolute inset-0 bg-techno-grid opacity-10"></div>
              
              {/* Números binarios decorativos */}
              <div className="absolute inset-0 overflow-hidden opacity-20 font-mono text-xs text-techno-purple">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="absolute" style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 90 - 45}deg)`
                  }}>
                    {Array.from({length: 8}).map(() => Math.round(Math.random())).join('')}
                  </div>
                ))}
              </div>
              
              {/* Elemento central 404 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-9xl font-bold text-white opacity-10">404</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl font-extrabold text-techno-purple glitch-text">404</div>
                </div>
              </div>
              
              {/* Círculos decorativos */}
              <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-techno-purple/30 opacity-60"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border border-techno-purple/20 opacity-40"></div>
              
              {/* Líneas decorativas */}
              <div className="absolute top-1/4 left-0 w-full h-px bg-techno-purple/20"></div>
              <div className="absolute top-3/4 left-0 w-full h-px bg-techno-purple/20"></div>
              <div className="absolute top-0 left-1/4 w-px h-full bg-techno-purple/20"></div>
              <div className="absolute top-0 left-3/4 w-px h-full bg-techno-purple/20"></div>
            </div>
          </div>
        </div>
        
        {/* Texto decorativo */}
        <div className="mt-16 text-center text-xs text-gray-500 font-mono">
          <div>SYSTEM_ERROR: PAGE_NOT_FOUND</div>
          <div className="mt-1">REFERENCE_CODE: 404_ERROR_EXCEPTION</div>
        </div>
      </div>
    </section>
  );
}