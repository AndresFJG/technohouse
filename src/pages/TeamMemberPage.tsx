import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { teamMembers } from '../utils/TeamData';

const TeamMemberPage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const navigate = useNavigate();
  const [member, setMember] = useState<typeof teamMembers[0] | undefined>(undefined);
  
  // Para la navegación entre miembros
  const currentIndex = teamMembers.findIndex(m => m.id === id);
  const prevMember = currentIndex > 0 ? teamMembers[currentIndex - 1] : null;
  const nextMember = currentIndex < teamMembers.length - 1 ? teamMembers[currentIndex + 1] : null;
  
  useEffect(() => {
    // Actualizar el miembro cuando cambia el ID en la URL
    const currentMember = teamMembers.find(m => m.id === id);
    setMember(currentMember);
    
    // Desplazarse al inicio de la página cuando cambia el miembro
    window.scrollTo(0, 0);
    
    // Redirigir si no se encuentra el miembro
    if (!currentMember) {
      navigate('/team', { replace: true });
    }
  }, [id, navigate]); // Dependencias importantes: id y navigate
  
  if (!member) return null;
  
  return (
    <div className="min-h-screen bg-techno-dark">
      <Helmet>
        <title>{member.name} | Equipo | Empresa</title>
        <meta name="description" content={`Perfil profesional de ${member.name}, ${member.role} en nuestra empresa.`} />
      </Helmet>
      
      {/* Hero Section con Parallax */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url(/images/team/header-bg.jpg)', 
            transform: 'translateZ(0)',
            filter: 'brightness(0.3)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-techno-dark/80 to-techno-dark"></div>
        </div>
        
        <div className="absolute inset-0 bg-techno-grid opacity-20"></div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-techno-purple transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600 mx-2">/</span>
                </li>
                <li>
                  <Link to="/team" className="text-gray-400 hover:text-techno-purple transition-colors">
                    Equipo
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600 mx-2">/</span>
                </li>
                <li>
                  <span className="text-techno-purple">{member.name}</span>
                </li>
              </ol>
            </nav>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              {member.name}
            </h1>
            <p className="text-techno-purple text-lg mt-2">{member.role}</p>
          </div>
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna izquierda */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sticky top-24">
              <div className="relative overflow-hidden rounded-xl bg-techno-light/10 backdrop-blur-sm border border-techno-purple/20 group">
                <div className="absolute inset-0 bg-techno-grid opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-techno-dark/50 to-transparent opacity-80"></div>
                
                {/* Etiqueta destacada */}
                {member.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-techno-purple text-white text-xs uppercase tracking-wider rounded-full">
                      {member.featured}
                    </span>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Desde {member.joinedYear}</p>
                      <p className="text-white mt-1">{member.location}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-techno-purple transition-colors"
                          aria-label="LinkedIn"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                          </svg>
                        </a>
                      )}
                      
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-techno-purple transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      
                      {member.social.github && (
                        <a 
                          href={member.social.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-techno-purple transition-colors"
                          aria-label="GitHub"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tarjetas de información */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-techno-light/10 rounded-lg p-4 border border-techno-purple/20 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Experiencia</p>
                  <p className="text-white text-lg font-medium">{member.experience} años</p>
                </div>
                
                <div className="bg-techno-light/10 rounded-lg p-4 border border-techno-purple/20 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Proyectos</p>
                  <p className="text-white text-lg font-medium">{member.projects?.length || 0}</p>
                </div>
              </div>
              
              {/* Idiomas */}
              <div className="mt-6 bg-techno-light/10 rounded-lg p-5 border border-techno-purple/20 backdrop-blur-sm">
                <h3 className="text-white text-lg font-medium mb-3">Idiomas</h3>
                <div className="space-y-3">
                  {member.languages.map((lang, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-techno-purple text-sm">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-techno-purple rounded-full"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Certificaciones */}
              {member.certifications && member.certifications.length > 0 && (
                <div className="mt-6 bg-techno-light/10 rounded-lg p-5 border border-techno-purple/20 backdrop-blur-sm">
                  <h3 className="text-white text-lg font-medium mb-3">Certificaciones</h3>
                  <ul className="space-y-2">
                    {member.certifications.map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-techno-purple flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-300">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Columna derecha - Contenido principal */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Cita del miembro */}
            {member.quote && (
              <blockquote className="italic text-xl text-gray-300 border-l-4 border-techno-purple pl-4 mb-10">
                "{member.quote}"
              </blockquote>
            )}
            
            {/* Bio */}
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">{member.bio}</p>
              <p className="text-gray-300 leading-relaxed mt-4">{member.bioExtended}</p>
            </div>
            
            {/* Especialidades */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-white">Especialidades</h2>
              <div className="h-1 w-20 bg-techno-purple mt-2 mb-6"></div>
              
              <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-12 mt-6">
                {member.specialties.map((specialty, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-techno-purple/20 text-techno-purple">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">{specialty.name}</h3>
                      <p className="mt-1 text-sm text-gray-400">{specialty.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Habilidades */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white">Habilidades</h2>
              <div className="h-1 w-20 bg-techno-purple mt-2 mb-6"></div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {member.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="bg-techno-light/20 border border-techno-purple/30 rounded-lg p-3 text-center hover:bg-techno-purple/20 transition-colors group"
                  >
                    <span className="text-white group-hover:text-techno-purple transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Educación */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white">Educación</h2>
              <div className="h-1 w-20 bg-techno-purple mt-2 mb-6"></div>
              
              <div className="space-y-6">
                {member.educationHistory.map((edu, index) => (
                  <div key={index} className="relative bg-techno-light/10 rounded-lg p-5 border border-techno-purple/20 backdrop-blur-sm">
                    <div className="flex justify-between flex-wrap">
                      <h3 className="text-lg font-medium text-white">{edu.degree}</h3>
                      <span className="text-techno-purple text-sm">{edu.years}</span>
                    </div>
                    <p className="text-gray-400 mt-1">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-gray-400 mt-3 text-sm">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Proyectos destacados */}
            {member.projects && member.projects.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-white">Proyectos destacados</h2>
                <div className="h-1 w-20 bg-techno-purple mt-2 mb-6"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {member.projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="group relative overflow-hidden rounded-lg bg-techno-light/20 border border-techno-purple/30"
                    >
                      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="object-cover h-full w-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-80"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <span className="inline-block px-2 py-1 text-xs text-white bg-techno-purple/50 rounded mb-2">
                          {project.year}
                        </span>
                        <h3 className="text-lg font-medium text-white group-hover:text-techno-purple transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">{project.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Testimonios o recomendaciones */}
        {member.testimonials && member.testimonials.length > 0 && (
          <div className="mt-20 border-t border-techno-purple/20 pt-12">
            <h2 className="text-2xl font-bold text-white text-center">Lo que dicen de {member.name.split(' ')[0]}</h2>
            <div className="h-1 w-20 bg-techno-purple mx-auto mt-2 mb-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {member.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-techno-light/10 rounded-lg p-6 border border-techno-purple/20 backdrop-blur-sm relative">
                  <svg className="h-12 w-12 absolute -top-4 -left-4 text-techno-purple opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  <div className="text-gray-300 italic">"{testimonial.text}"</div>
                  
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                      <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Navegación entre miembros del equipo */}
        <div className="mt-16 border-t border-techno-purple/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {prevMember ? (
              <Link 
                to={`/team/${prevMember.id}`}
                className="flex items-center text-gray-400 hover:text-techno-purple transition-colors group mb-4 sm:mb-0"
              >
                <svg className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
                </svg>
                <span>
                  <div className="text-xs uppercase tracking-wide">Anterior</div>
                  <div className="text-white group-hover:text-techno-purple transition-colors">{prevMember.name}</div>
                </span>
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link 
              to="/team"
              className="px-5 py-2 border border-techno-purple/30 rounded-lg text-white hover:bg-techno-purple/20 transition-colors"
            >
              Ver todo el equipo
            </Link>
            
            {nextMember ? (
              <Link 
                to={`/team/${nextMember.id}`}
                className="flex items-center text-right text-gray-400 hover:text-techno-purple transition-colors group mt-4 sm:mt-0"
              >
                <span>
                  <div className="text-xs uppercase tracking-wide">Siguiente</div>
                  <div className="text-white group-hover:text-techno-purple transition-colors">{nextMember.name}</div>
                </span>
                <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;