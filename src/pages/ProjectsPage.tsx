import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Users, Cpu, Star } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico con integración de pagos y gestión de inventario.',
    image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    stats: {
      users: '10,000+',
      transactions: '50,000+',
      uptime: '99.99%',
      performance: '95%'
    }
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    description: 'Panel de control con análisis predictivo y visualización de datos en tiempo real.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'AWS'],
    category: 'AI & Data',
    stats: {
      users: '5,000+',
      transactions: '25,000+',
      uptime: '99.95%',
      performance: '98%'
    }
  },
  {
    id: 3,
    title: 'Blockchain Wallet',
    description: 'Billetera digital con soporte para múltiples criptomonedas y tokens.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800',
    technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
    category: 'Blockchain',
    stats: {
      users: '20,000+',
      transactions: '100,000+',
      uptime: '99.99%',
      performance: '97%'
    }
  }
];

const categories = ['Todos', 'Web Development', 'AI & Data', 'Blockchain'];

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Nuestros <span className="text-techno-purple">Proyectos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre nuestra colección de proyectos innovadores que están transformando industrias.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-techno-purple text-white'
                    : 'bg-techno-dark/50 text-gray-300 hover:bg-techno-dark'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 bg-techno-dark/50 text-white rounded-lg border border-techno-purple/30 focus:outline-none focus:border-techno-purple"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl border border-techno-purple/20 bg-techno-dark/50 transition-all duration-300 hover:border-techno-purple/50"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm border border-techno-purple/30 text-techno-purple bg-black/50 mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-black/50 text-techno-purple-light rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-techno-purple mr-2" />
                    <span className="text-sm text-gray-300">{project.stats.users}</span>
                  </div>
                  <div className="flex items-center">
                    <Code2 className="w-4 h-4 text-techno-purple mr-2" />
                    <span className="text-sm text-gray-300">{project.stats.transactions}</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 text-techno-purple mr-2" />
                    <span className="text-sm text-gray-300">{project.stats.uptime}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-techno-purple mr-2" />
                    <span className="text-sm text-gray-300">{project.stats.performance}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center px-4 py-2 bg-techno-purple/20 hover:bg-techno-purple/30 border border-techno-purple/30 text-white rounded-lg transition-colors group"
                >
                  Ver Detalles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage; 