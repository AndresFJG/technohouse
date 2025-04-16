import React from 'react';
import { Button } from './Button';
import { ArrowRight, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con efecto de gradiente y partículas */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-techno-dark to-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-techno-purple/20 to-transparent opacity-50"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Logo y título */}
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-techno-purple animate-pulse" />
              <div className="absolute inset-0 rounded-full border-2 border-techno-purple/50 animate-ping"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-white">Transformamos ideas en</span>
            <span className="block techno-gradient mt-2">experiencias digitales</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Creamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="group"
            >
              Comienza tu proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/services"
            >
              Ver servicios
            </Button>
          </div>

          {/* Estadísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: 'Años de experiencia' },
              { number: '200+', label: 'Proyectos completados' },
              { number: '50+', label: 'Clientes satisfechos' },
              { number: '24/7', label: 'Soporte técnico' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-techno-purple">{stat.number}</div>
                <div className="mt-2 text-sm md:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Efecto de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-techno-purple/50 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-techno-purple rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}