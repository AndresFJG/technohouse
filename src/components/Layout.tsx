import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-techno-dark text-white overflow-x-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-techno-purple/20 blur-[100px] opacity-30 pointer-events-none z-0 animate-pulse"></div>
      <div className="fixed top-3/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-techno-purple/20 blur-[100px] opacity-30 pointer-events-none z-0 animate-pulse"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-techno-glow/5 blur-3xl opacity-30 pointer-events-none z-0 animate-pulse"></div>
      
      {/* Noise overlay */}
      <div className="fixed inset-0 bg-noise opacity-5 pointer-events-none z-0"></div>
      
      <Navbar />
      
      <div className="w-full relative z-10">
        <Outlet />
        
        {/* Footer */}
        <footer className="relative overflow-hidden bg-gray-900/80 backdrop-blur-sm text-white py-12 md:py-16 border-t border-techno-purple/30">
          {/* Background effects */}
          <div className="absolute inset-0 bg-techno-grid opacity-10"></div>
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 rounded-full bg-techno-purple/5 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="techno-gradient font-bold text-xl md:text-2xl mb-4">TECHNO HOUSE</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  Transformando ideas en soluciones tecnológicas innovadoras para impulsar el futuro digital.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-techno-purple transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-techno-purple transition-colors">Inicio</a>
                  </li>
                  <li>
                    <a href="/services" className="text-gray-400 hover:text-techno-purple transition-colors">Servicios</a>
                  </li>
                  <li>
                    <a href="/portfolio" className="text-gray-400 hover:text-techno-purple transition-colors">Portafolio</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-techno-purple transition-colors">Contacto</a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400">Desarrollo Web</li>
                  <li className="text-gray-400">Blockchain & NFTs</li>
                  <li className="text-gray-400">IA & Machine Learning</li>
                  <li className="text-gray-400">Cloud & DevOps</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-400">
                    <Mail className="w-5 h-5 mr-2 text-techno-purple" />
                    <span>info@technohouse.com</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Phone className="w-5 h-5 mr-2 text-techno-purple" />
                    <span>+34 123 456 789</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapPin className="w-5 h-5 mr-2 text-techno-purple" />
                    <span>Madrid, España</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  &copy; {new Date().getFullYear()} Techno House. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-sm text-gray-400 hover:text-techno-purple transition-colors">
                    Política de Privacidad
                  </a>
                  <a href="#" className="text-sm text-gray-400 hover:text-techno-purple transition-colors">
                    Términos de Servicio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout; 