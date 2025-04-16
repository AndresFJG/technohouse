import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  Tag, 
  User, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  ArrowUp,
  Bookmark,
  Share2,
  Star
} from 'lucide-react';

// Datos de las entradas de blog
const blogPosts = [
  {
    id: 1,
    title: "Lanzamiento de nuestra nueva plataforma de IA predictiva",
    excerpt: "Descubre cómo nuestra nueva tecnología de inteligencia artificial puede transformar tus datos en predicciones precisas, con el ritmo y la precisión de la música electrónica.",
    date: "15 Junio, 2023",
    readTime: "5 min",
    author: {
      name: "Carlos Mendoza",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      role: "Director de Tecnología"
    },
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    category: "Tecnología",
    tags: ["IA", "Innovación", "Tech", "Desarrollo"],
    featured: true
  },
  {
    id: 2,
    title: "Techno House reconocida como startup más innovadora 2023",
    excerpt: "Nuestra fusión única de tecnología y cultura musical electrónica nos ha valido el reconocimiento como la startup más innovadora del año.",
    date: "3 Mayo, 2023",
    readTime: "3 min",
    author: {
      name: "Laura Martínez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "Directora General"
    },
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    category: "Reconocimientos",
    tags: ["Premios", "Innovación", "Startup"],
    featured: true
  },
  {
    id: 3,
    title: "Expansión de Techno House en Latinoamérica",
    excerpt: "Estamos emocionados de anunciar la apertura de nuestras nuevas oficinas en Ciudad de México, Santiago y Bogotá, llevando nuestra innovación tecnológica a la región.",
    date: "21 Abril, 2023",
    readTime: "4 min",
    author: {
      name: "Miguel Rodríguez",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      role: "Director de Expansión"
    },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    category: "Expansión",
    tags: ["Crecimiento", "Latinoamérica", "Tecnología"],
    featured: false
  },
  {
    id: 4,
    title: "Tendencias en música techno para 2023",
    excerpt: "Analizamos los sonidos y estilos que están definiendo la escena techno este año y que seguirán siendo relevantes en el futuro próximo.",
    date: "15 Marzo, 2023",
    readTime: "6 min",
    author: {
      name: "Ana López",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      role: "Directora Musical"
    },
    image: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=800&auto=format&fit=crop",
    category: "Música",
    tags: ["Tendencias", "Techno", "House", "2023"],
    featured: false
  },
  {
    id: 5,
    title: "Optimización de eventos con tecnología de última generación",
    excerpt: "Descubre cómo nuestra tecnología de vanguardia mejora la experiencia del público mientras reduce costos operativos.",
    date: "28 Febrero, 2023",
    readTime: "7 min",
    author: {
      name: "David Ramírez",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      role: "Director Técnico"
    },
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
    category: "Tecnología",
    tags: ["Eventos", "Innovación", "Experiencia", "Sonido"],
    featured: false
  },
  {
    id: 6,
    title: "Cómo implementar prácticas de DevSecOps en tu organización",
    excerpt: "Una guía paso a paso para integrar seguridad en tu pipeline de DevOps y crear un enfoque holístico para el desarrollo seguro de software.",
    date: "10 Febrero, 2023",
    readTime: "8 min",
    author: {
      name: "Elena Vázquez",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      role: "Security Lead"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    category: "Seguridad",
    tags: ["DevSecOps", "Seguridad", "DevOps", "Mejores prácticas"],
    featured: false
  },
  {
    id: 7,
    title: "Revolucionando la eficiencia operativa: Nuestro caso de éxito en automatización",
    excerpt: "Descubre cómo implementamos una solución de automatización que redujo los tiempos de procesamiento en un 75% y aumentó la precisión en un 99.9% para uno de nuestros clientes líderes.",
    date: "25 Enero, 2024",
    readTime: "6 min",
    author: {
      name: "Daniel López",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      role: "Lead Developer"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    category: "Automatización",
    tags: ["Automatización", "IA", "Eficiencia", "Transformación Digital", "Caso de Éxito"],
    featured: true
  }
];

// Datos de categorías
const categories = [
  { name: "Tecnología", count: 12 },
  { name: "Innovación", count: 24 },
  { name: "Desarrollo", count: 18 },
  { name: "Empresa", count: 15 },
  { name: "Cultura Tech", count: 21 }
];

// Datos de artículos populares
const popularPosts = [
  {
    id: 101,
    title: "La revolución de la IA en el desarrollo de software",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=300&auto=format&fit=crop",
    date: "5 Enero, 2023"
  },
  {
    id: 102,
    title: "Cómo la música electrónica inspira nuestra metodología ágil",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=300&auto=format&fit=crop",
    date: "18 Diciembre, 2022"
  },
  {
    id: 103,
    title: "El futuro del desarrollo web: tendencias 2023",
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=300&auto=format&fit=crop",
    date: "30 Noviembre, 2022"
  }
];

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  
  // Filtrar posts según la búsqueda y/o categoría
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Posts destacados para el banner principal
  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <main className="pt-16 bg-techno-dark min-h-screen">
      {/* Elementos decorativos de fondo */}
      <div className="fixed inset-0 bg-techno-grid opacity-20 pointer-events-none z-0"></div>
      <div className="fixed top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-techno-glow blur-3xl opacity-20 pointer-events-none z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <div className="inline-block mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="h-px w-8 bg-techno-purple"></span>
              <span className="text-techno-purple text-sm tracking-wider font-mono uppercase">Blog Techno House</span>
              <span className="h-px w-8 bg-techno-purple"></span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white sm:text-5xl">
              Últimas <span className="text-techno-purple">Noticias</span> y Actualizaciones
            </h1>
            <div className="h-0.5 w-1/3 bg-techno-purple mt-4 mx-auto"></div>
          </div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias en tecnología, innovación y desarrollo de software, con el ritmo único de Techno House.
          </p>
        </div>
        
        {/* Barra de búsqueda y filtros */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <div className="relative">
              <input 
                type="text" 
                className="w-full bg-techno-light/20 border border-techno-purple/30 focus:border-techno-purple rounded-md shadow-sm py-3 px-10 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-techno-purple/70" />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button 
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeCategory === 'Todos'
                  ? 'bg-techno-purple text-white shadow-techno-sm'
                  : 'bg-techno-light/30 text-gray-300 hover:bg-techno-light/50 hover:text-white border border-techno-purple/20'
              }`}
              onClick={() => setActiveCategory('Todos')}
            >
              Todos
            </button>
            
            {categories.slice(0, 5).map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? 'bg-techno-purple text-white shadow-techno-sm'
                    : 'bg-techno-light/30 text-gray-300 hover:bg-techno-light/50 hover:text-white border border-techno-purple/20'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Posts destacados - Carousel */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="group relative h-96 rounded-lg overflow-hidden border border-techno-purple/30 transition-all duration-300 hover:border-techno-purple/70 hover:shadow-techno-sm"
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-techno-dark/80 to-transparent"></div>
                  </div>
                  
                  {/* Contenido del post */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-techno-purple/80 text-white text-xs px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-techno-purple transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-8 h-8 rounded-full mr-2 border border-techno-purple/30"
                        />
                        <span className="text-sm text-gray-300">{post.author.name}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="mt-4 inline-flex items-center text-techno-purple hover:text-techno-purple-light font-medium transition-colors"
                    >
                      Leer artículo completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Lista principal de posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-techno-light/20 backdrop-blur-sm rounded-lg overflow-hidden border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-techno-purple/80 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    <span>{post.readTime} lectura</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-techno-purple transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center text-xs bg-techno-purple/10 text-techno-purple px-2 py-1 rounded-md border border-techno-purple/20"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-techno-purple/10">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full mr-2 border border-techno-purple/30"
                    />
                    <div>
                      <div className="text-sm text-white">{post.author.name}</div>
                      <div className="text-xs text-gray-400">{post.author.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-techno-purple transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-techno-purple transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <Link 
                to={`/blog/${post.id}`} 
                className="absolute inset-0 z-10"
                aria-label={`Leer artículo: ${post.title}`}
              />
            </article>
          ))}
        </div>
        
        {/* Mensaje si no hay resultados */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-techno-light/20 backdrop-blur-sm max-w-lg mx-auto p-8 rounded-lg border border-techno-purple/20">
              <h3 className="text-xl text-white mb-2">No se encontraron resultados</h3>
              <p className="text-gray-400 mb-4">
                No hay artículos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
              </p>
              <button 
                className="text-techno-purple hover:text-techno-purple-light transition-colors"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Todos');
                }}
              >
                Limpiar filtros
              </button>
            </div>
          </div>
        )}
        
        {/* Paginación */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2" aria-label="Pagination">
            <span className="px-3 py-2 bg-techno-light/30 rounded-md text-gray-300 font-medium">1</span>
            <a href="#" className="px-3 py-2 rounded-md text-gray-400 hover:bg-techno-light/30 hover:text-white transition-colors">2</a>
            <a href="#" className="px-3 py-2 rounded-md text-gray-400 hover:bg-techno-light/30 hover:text-white transition-colors">3</a>
            <span className="px-3 py-2 text-gray-400">...</span>
            <a href="#" className="px-3 py-2 rounded-md text-gray-400 hover:bg-techno-light/30 hover:text-white transition-colors">8</a>
            <a href="#" className="px-3 py-2 rounded-md text-gray-400 hover:bg-techno-light/30 hover:text-white transition-colors">
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
        
        {/* Barra lateral - visible solo en pantallas grandes como parte de un diseño de dos columnas */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Boletín de suscripción */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-8 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-techno-grid opacity-5 rounded-lg pointer-events-none"></div>
              
              <h3 className="text-xl font-bold text-white mb-3">Suscríbete a nuestro boletín</h3>
              <p className="text-gray-400 mb-4">
                Recibe las últimas noticias, artículos y actualizaciones directamente en tu bandeja de entrada.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-grow bg-techno-dark border border-techno-purple/30 focus:border-techno-purple rounded-md shadow-sm py-2 px-4 text-gray-100 focus:outline-none focus:ring-1 focus:ring-techno-purple transition-colors"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-techno-purple text-white px-6 py-2 rounded-md hover:bg-techno-purple-light transition-colors flex items-center justify-center"
                >
                  Suscribirse
                </button>
              </form>
              
              <div className="mt-3 text-xs text-gray-500">
                Nos importa tu privacidad. No compartiremos tu correo con terceros.
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-8">
            {/* Categorías */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Tag className="mr-2 h-4 w-4 text-techno-purple" />
                Categorías
              </h3>
              
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button 
                      className="w-full flex items-center justify-between py-2 border-b border-techno-purple/10 text-sm text-gray-300 hover:text-techno-purple transition-colors"
                      onClick={() => setActiveCategory(category.name)}
                    >
                      <span>{category.name}</span>
                      <span className="bg-techno-dark px-2 py-0.5 rounded-full text-xs text-techno-purple">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Artículos populares */}
            <div className="bg-techno-light/20 backdrop-blur-sm p-6 rounded-lg border border-techno-purple/20 hover:border-techno-purple/40 transition-all">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Star className="mr-2 h-4 w-4 text-techno-purple" />
                Artículos populares
              </h3>
              
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 group">
                    <div className="flex-shrink-0 w-20 h-20 rounded overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white group-hover:text-techno-purple transition-colors">
                        {post.title}
                      </h4>
                      <div className="text-xs text-gray-400 mt-1 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Botón de volver arriba */}
        <div className="fixed bottom-8 right-8 z-50">
          <button 
            className="bg-techno-purple/80 hover:bg-techno-purple text-white rounded-full p-3 shadow-techno-sm transition-all hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}

export default BlogPage; 