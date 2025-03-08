import React, { useState } from 'react';

const categories = ['All', 'AI & ML', 'Web Development', 'Mobile Apps', 'Cybersecurity'];

const projects = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Advanced analytics platform using machine learning algorithms.',
    techStack: ['Python', 'TensorFlow', 'React', 'AWS'],
  },
  {
    id: 2,
    title: 'E-Commerce Mobile App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Full-featured mobile shopping experience.',
    techStack: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Enterprise Security Suite',
    category: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Comprehensive security solution for large organizations.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-techno-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative elements */}
        <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-techno-purple/5 blur-3xl"></div>
        <div className="hidden lg:block absolute top-60 left-4 w-1 h-32 bg-gradient-to-b from-techno-purple to-transparent"></div>
        
        <div className="text-center relative z-10">
          <div className="inline-block">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white sm:text-4xl techno-border pb-2">
              Our Portfolio
            </h2>
            <div className="h-0.5 w-1/3 bg-techno-purple mx-auto"></div>
          </div>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            Explore our latest projects and success stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-techno-purple text-white shadow-techno-sm'
                  : 'bg-techno-light/30 text-gray-300 hover:bg-techno-light/50 hover:text-white border border-techno-purple/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-techno-light/30 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/10 hover:border-techno-purple/40 hover:shadow-techno-sm transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-48 sm:h-56 md:h-64 brightness-75"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-techno-dark to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 text-xs bg-techno-purple/80 text-white px-2 py-1 rounded-full">
                  {project.category}
                </div>
                {/* Techno house flourish */}
                <div className="absolute top-0 right-0 w-20 h-1 bg-techno-purple transform -skew-x-45"></div>
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-techno-purple transform skew-x-45"></div>
              </div>
              <div className="p-4 sm:p-6 relative">
                <div className="absolute -top-3 right-6 w-6 h-6 border-r border-b border-techno-purple/40"></div>
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-techno-purple transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-techno-purple bg-techno-purple/10 border border-techno-purple/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}