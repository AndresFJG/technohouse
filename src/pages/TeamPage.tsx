import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { teamMembers } from '../utils/TeamData';

// Tipos para los filtros
type FilterCategory = "all" | "development" | "design" | "marketing" | "management";

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [filteredMembers, setFilteredMembers] = useState(teamMembers);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Estadísticas del equipo
  const totalProjects = teamMembers.reduce((total, member) => total + (member.projects?.length || 0), 0);
  const totalExperience = teamMembers.reduce((total, member) => total + member.experience, 0);
  const skillsSet = new Set<string>();
  teamMembers.forEach(member => {
    member.skills.forEach(skill => skillsSet.add(skill));
  });
  
  useEffect(() => {
    // Filtramos miembros por categoría y búsqueda
    let results = teamMembers;
    
    // Primero filtramos por categoría
    if (activeFilter !== "all") {
      results = results.filter(member => 
        member.category.toLowerCase() === activeFilter
      );
    }
    
    // Luego filtramos por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(member => 
        member.name.toLowerCase().includes(term) || 
        member.role.toLowerCase().includes(term) ||
        member.skills.some(skill => skill.toLowerCase().includes(term))
      );
    }
    
    setFilteredMembers(results);
  }, [activeFilter, searchTerm]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="min-h-screen bg-techno-dark">
      <Helmet>
        <title>Nuestro Equipo | Empresa</title>
        <meta name="description" content="Conoce al equipo de profesionales detrás de nuestros servicios." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-techno-dark py-16 sm:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/team/team-hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-techno-dark to-transparent"></div>
          <div className="absolute inset-0 bg-techno-grid opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white techno-border pb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Nuestro Equipo
            </motion.h1>
            <div className="h-0.5 w-24 bg-techno-purple mx-auto"></div>
            <motion.p 
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conoce a los profesionales que hacen posible la innovación y calidad en cada proyecto.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Estadísticas del equipo */}
      <div className="bg-techno-light/5 border-y border-techno-purple/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">{teamMembers.length}</p>
              <p className="text-sm text-gray-400 mt-1">Profesionales</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">{totalProjects}</p>
              <p className="text-sm text-gray-400 mt-1">Proyectos</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">{totalExperience}+</p>
              <p className="text-sm text-gray-400 mt-1">Años de experiencia</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-white">{skillsSet.size}</p>
              <p className="text-sm text-gray-400 mt-1">Habilidades</p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Filtros y búsqueda */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "all" 
                  ? "bg-techno-purple text-white" 
                  : "bg-techno-light/10 text-gray-300 hover:bg-techno-light/20"
              } transition-colors`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveFilter("development")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "development" 
                  ? "bg-techno-purple text-white" 
                  : "bg-techno-light/10 text-gray-300 hover:bg-techno-light/20"
              } transition-colors`}
            >
              Desarrollo
            </button>
            <button
              onClick={() => setActiveFilter("design")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "design" 
                  ? "bg-techno-purple text-white" 
                  : "bg-techno-light/10 text-gray-300 hover:bg-techno-light/20"
              } transition-colors`}
            >
              Diseño
            </button>
            <button
              onClick={() => setActiveFilter("marketing")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "marketing" 
                  ? "bg-techno-purple text-white" 
                  : "bg-techno-light/10 text-gray-300 hover:bg-techno-light/20"
              } transition-colors`}
            >
              Marketing
            </button>
            <button
              onClick={() => setActiveFilter("management")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "management" 
                  ? "bg-techno-purple text-white" 
                  : "bg-techno-light/10 text-gray-300 hover:bg-techno-light/20"
              } transition-colors`}
            >
              Gestión
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar miembro o habilidad..."
              className="bg-techno-light/10 border border-techno-purple/30 pl-10 pr-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-techno-purple/50 focus:border-transparent w-full sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Resultados */}
        <div className="mt-4 mb-2 text-gray-400 text-sm">
          {filteredMembers.length === 0 ? (
            <p>No se encontraron resultados para tu búsqueda.</p>
          ) : (
            <p>Mostrando {filteredMembers.length} de {teamMembers.length} miembros</p>
          )}
        </div>
        
        {/* Grid de miembros */}
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredMembers.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Link
                to={`/team/${member.id}`}
                className="group block h-full"
              >
                <div className="h-full bg-techno-light/20 rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/50 hover:shadow-techno-sm transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
                  
                  <div className="relative overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-transparent to-transparent"></div>
                    
                    {/* Categoría */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-2 py-1 text-xs uppercase tracking-wider rounded-full bg-techno-light/30 backdrop-blur-sm text-white border border-techno-purple/30">
                        {member.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Ubicación */}
                    <div className="flex items-center mb-2 text-xs text-gray-400">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {member.location}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-techno-purple mb-3">{member.role}</p>
                    
                    {/* Skills */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {member.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-techno-purple/20 text-white">
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-techno-purple/10 text-gray-300">
                            +{member.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Ver más */}
                    <div className="mt-4 flex justify-end">
                      <span className="text-sm text-gray-400 group-hover:text-techno-purple transition-colors flex items-center">
                        Ver perfil
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamPage;