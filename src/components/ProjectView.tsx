import React from 'react';
import { ArrowRight, Github, Globe, Calendar, Users, Rocket, ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

interface ProjectDetails {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  timeline: string;
  team: number;
  demoUrl: string;
  githubUrl: string;
  category: string;
  status: 'Completed' | 'In Progress' | 'Maintenance';
}

const projectDetails: ProjectDetails[] = [
  {
    id: 1,
    title: "Marketplace NFTs",
    subtitle: "Marketplace of NFTS",
    description: "Plataforma de compra y venta de NFTs con integración de wallet y smart contracts.",
    longDescription: `Desarrollamos una plataforma completa para la compra, venta y subasta de NFTs, 
    integrando tecnologías blockchain de última generación. La plataforma permite a los usuarios:
    
    • Crear y mintear sus propios NFTs
    • Participar en subastas en tiempo real
    • Gestionar su wallet y colecciones
    • Explorar y descubrir nuevo arte digital
    
    El sistema incluye características avanzadas como previsualización de contenido, historial de transacciones
    y análisis de mercado en tiempo real.`,
    image: "https://img1.wsimg.com/isteam/ip/88429ef8-a359-41b8-9d2b-259533652b46/troop-of-bored-ape-nfts-rises-above-the-compe.jpeg",
    gallery: [
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/DBB7/production/_122074265_hi071843849.jpg.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_SOw8-bgIWwUnfM_5nmgIRBH8gdy8GivFg&s",
      "https://www.kfadv.it/wp-content/uploads/Bored_Apes.jpg"
    ],
    techStack: ["React", "Ganache-Cli", "Truffle", "Infura", "TailwindCSS", "NodeJS", "CometChat SDK", "Yarn", "Metamask"],
    features: [
      "Autenticación con Web3",
      "Sistema de subastas en tiempo real",
      "Galería de NFTs interactiva",
      "Integración con múltiples wallets",
      "Sistema de notificaciones",
      "Analytics en tiempo real"
    ],
    timeline: "4 meses",
    team: 5,
    demoUrl: "https://demo.thynk-unlimited.com/nft-marketplace",
    githubUrl: "https://github.com/thynk-unlimited/nft-marketplace",
    category: "Blockchain",
    status: "Completed"
  },
  {
    id: 2,
    title: "Lottery Jackpots",
    subtitle: "Smart Contract Lottery",
    description: "Sistema de lotería descentralizada basada en smart contracts con generación de números aleatorios verificable.",
    longDescription: `Desarrollamos un sistema de lotería descentralizada que garantiza la transparencia y la aleatoriedad 
    en la selección de ganadores. El sistema incluye:
    
    • Smart contracts auditados para la gestión de premios
    • Integración con Chainlink VRF para números aleatorios verificables
    • Sistema automatizado de distribución de premios
    • Panel de administración para gestión de sorteos
    
    La plataforma está diseñada para ser completamente transparente y a prueba de manipulaciones.`,
    image: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=800",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800",
      "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=800",
      "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=800"
    ],
    techStack: ["Solidity", "Web3.js", "React", "Chainlink VRF", "TailwindCSS", "Hardhat"],
    features: [
      "Generación de números aleatorios verificable",
      "Sistema automatizado de premios",
      "Panel de administración",
      "Histórico de sorteos",
      "Integración con múltiples tokens",
      "Sistema de referidos"
    ],
    timeline: "3 meses",
    team: 4,
    demoUrl: "https://demo.thynk-unlimited.com/lottery",
    githubUrl: "https://github.com/thynk-unlimited/lottery",
    category: "DeFi",
    status: "Completed"
  },
  {
    id: 3,
    title: "Justice Law",
    subtitle: "Legal Services Platform",
    description: "Plataforma digital para servicios legales con sistema de citas y gestión de casos.",
    longDescription: `Desarrollamos una plataforma integral para la gestión de servicios legales que facilita 
    la conexión entre abogados y clientes. La plataforma incluye:
    
    • Sistema de agendamiento de citas
    • Gestión digital de casos y documentos
    • Chat en tiempo real entre cliente y abogado
    • Sistema de facturación y pagos
    
    La plataforma está diseñada para optimizar el flujo de trabajo de despachos jurídicos y mejorar 
    la experiencia del cliente.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=800",
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=800"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS", "JWT"],
    features: [
      "Sistema de citas online",
      "Gestión digital de documentos",
      "Chat en tiempo real",
      "Sistema de facturación",
      "Panel de control personalizado",
      "Notificaciones automáticas"
    ],
    timeline: "5 meses",
    team: 6,
    demoUrl: "https://demo.thynk-unlimited.com/justice",
    githubUrl: "https://github.com/thynk-unlimited/justice",
    category: "Services",
    status: "In Progress"
  }
];

export function ProjectView() {
  const { id } = useParams();
  const project = projectDetails.find(p => p.id === Number(id)) || projectDetails[0];

  return (
    <div className="min-h-screen bg-techno-dark">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-techno-dark via-techno-dark/70 to-transparent"></div>
        
        {/* Back Button */}
        <Link
          to="/portfolio"
          className="absolute top-8 left-8 inline-flex items-center px-4 py-2 bg-black/50 hover:bg-techno-purple/20 border border-techno-purple/30 rounded-lg text-white transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al Portfolio
        </Link>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-sm border border-techno-purple/30 text-techno-purple bg-black/50 mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="prose prose-invert max-w-none mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Descripción del Proyecto</h2>
              <div className="text-gray-300 whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Características Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start p-4 bg-techno-light/10 rounded-lg border border-techno-purple/20"
                  >
                    <Rocket className="w-5 h-5 text-techno-purple mr-3 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Galería</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div 
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden group"
                  >
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Project Info Card */}
              <div className="bg-techno-light/10 rounded-xl border border-techno-purple/20 p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Información del Proyecto</h3>
                
                <div className="space-y-4">
                  {/* Timeline */}
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-techno-purple mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Duración</p>
                      <p className="text-white">{project.timeline}</p>
                    </div>
                  </div>

                  {/* Team Size */}
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-techno-purple mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Tamaño del Equipo</p>
                      <p className="text-white">{project.team} personas</p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center">
                    <Rocket className="w-5 h-5 text-techno-purple mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Estado</p>
                      <p className="text-white">{project.status}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-techno-light/10 rounded-xl border border-techno-purple/20 p-6 mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full text-sm border border-techno-purple/30 text-techno-purple bg-black/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <a
                  href={project.demoUrl}
                  className="flex items-center justify-center w-full px-6 py-3 bg-techno-purple hover:bg-techno-purple-light text-white font-medium rounded-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Ver Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center justify-center w-full px-6 py-3 border border-techno-purple text-techno-purple hover:bg-techno-purple/10 font-medium rounded-lg transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectView; 