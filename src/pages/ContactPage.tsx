import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    service: 'desarrollo'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a un servicio de backend
    console.log('Formulario enviado:', formState);
    setSubmitted(true);
  };

  return (
    <main className="pt-16 pb-24 bg-techno-dark min-h-screen">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-3/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      <div className="absolute h-px w-full top-1/3 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
      <div className="absolute h-px w-full top-2/3 left-0 bg-gradient-to-r from-transparent via-techno-purple/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-techno-purple"></span>
              <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Conecta con nosotros</span>
              <span className="h-px w-8 bg-techno-purple"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white sm:text-5xl">
              Potencia tu <span className="text-techno-purple">Visión Digital</span>
            </h1>
            <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
          </div>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos listos para transformar tus ideas en soluciones tecnológicas de vanguardia. Contáctanos hoy mismo y da el primer paso hacia el futuro digital.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Información de contacto */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-techno-light/20 backdrop-blur-sm p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/50 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-6">¿Por qué elegirnos?</h2>
              
              {/* Ventajas */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-techno-purple/10 p-2 mt-1 inline-flex ring-1 ring-techno-purple/30">
                    <CheckCircle className="h-5 w-5 text-techno-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Innovación Constante</h3>
                    <p className="mt-1 text-gray-400">Utilizamos las tecnologías más avanzadas para crear soluciones futuristas y eficientes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-techno-purple/10 p-2 mt-1 inline-flex ring-1 ring-techno-purple/30">
                    <CheckCircle className="h-5 w-5 text-techno-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Enfoque Personalizado</h3>
                    <p className="mt-1 text-gray-400">Cada proyecto es único. Adaptamos nuestras soluciones a tus necesidades específicas.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-techno-purple/10 p-2 mt-1 inline-flex ring-1 ring-techno-purple/30">
                    <CheckCircle className="h-5 w-5 text-techno-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Resultados Tangibles</h3>
                    <p className="mt-1 text-gray-400">Nuestras soluciones generan valor real y medible para tu negocio desde el primer momento.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-techno-purple/20">
                <a href="#form" className="inline-flex items-center text-techno-purple hover:text-techno-purple-light font-medium">
                  Solicita una consulta gratuita <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div id="form" className="lg:col-span-3">
            <div className="bg-techno-light/20 backdrop-blur-sm p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-techno-purple/20 mb-6">
                    <CheckCircle className="h-8 w-8 text-techno-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad posible.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light transition-colors duration-300"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-white mb-6">Contáctanos</h2>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Nombre completo <span className="text-techno-purple">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-techno-dark border border-gray-700 focus:border-techno-purple rounded-md shadow-sm py-3 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Correo electrónico <span className="text-techno-purple">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-techno-dark border border-gray-700 focus:border-techno-purple rounded-md shadow-sm py-3 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                      Servicio de interés <span className="text-techno-purple">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-techno-dark border border-gray-700 focus:border-techno-purple rounded-md shadow-sm py-3 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                    >
                      <option value="desarrollo">Desarrollo Web/App</option>
                      <option value="ia">Inteligencia Artificial</option>
                      <option value="consultoria">Consultoría Tecnológica</option>
                      <option value="automatizacion">Automatización de Procesos</option>
                      <option value="otro">Otro Servicio</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Mensaje <span className="text-techno-purple">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-techno-dark border border-gray-700 focus:border-techno-purple rounded-md shadow-sm py-3 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                      placeholder="Cuéntanos sobre tu proyecto o idea"
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-techno-purple hover:bg-techno-purple-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techno-purple-light transition-all duration-300 group"
                    >
                      <span>Enviar mensaje</span>
                      <Send className="ml-3 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="mt-3 text-xs text-gray-400 text-center">
                      Al enviar este formulario, aceptas nuestra política de privacidad
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage; 