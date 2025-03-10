export interface TeamMember {
    id: string;
    name: string;
    role: string;
    category: string;
    image: string;
    location: string;
    joinedYear: string;
    featured?: string;
    bio: string;
    bioExtended: string;
    quote?: string;
    skills: string[];
    education: string;
    experience: number;
    languages: {
      name: string;
      level: string;
      percentage: number;
    }[];
    certifications?: string[];
    specialties: {
      name: string;
      description: string;
    }[];
    educationHistory: {
      degree: string;
      institution: string;
      years: string;
      description?: string;
    }[];
    social: {
      linkedin: string;
      twitter: string;
      github: string;
    };
    projects?: {
      id: string;
      name: string;
      description: string;
      image: string;
      role: string;
      year: string;
    }[];
    testimonials?: {
      name: string;
      role: string;
      image: string;
      text: string;
    }[];
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "juan-perez",
      name: "Juan Pérez",
      role: "CTO & Desarrollador Senior",
      category: "Development",
      image: "/images/team/juan-perez.jpg",
      location: "Madrid, España",
      joinedYear: "2019",
      featured: "Fundador",
      bio: "Desarrollador full stack con más de 10 años de experiencia en desarrollo web y aplicaciones móviles.",
      bioExtended: "Juan lidera nuestro equipo técnico y define la arquitectura de nuestros proyectos. Con experiencia en startups y grandes empresas, aporta una visión estratégica y técnica a cada desarrollo. Su experiencia se centra en arquitecturas escalables y seguras, implementando las mejores prácticas de la industria.",
      quote: "La tecnología bien aplicada puede transformar cualquier negocio, pero el verdadero cambio siempre comienza con las personas.",
      skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL", "Docker", "Kubernetes", "MongoDB", "CI/CD", "Microservicios"],
      education: "Ingeniería en Sistemas Computacionales",
      experience: 10,
      languages: [
        { name: "Español", level: "Nativo", percentage: 100 },
        { name: "Inglés", level: "Avanzado", percentage: 90 },
        { name: "Alemán", level: "Básico", percentage: 30 }
      ],
      certifications: [
        "AWS Certified Solutions Architect",
        "MongoDB Certified Developer",
        "Google Cloud Professional Developer",
        "Certified Kubernetes Administrator"
      ],
      specialties: [
        {
          name: "Arquitectura de Software",
          description: "Diseño de sistemas escalables y mantenibles utilizando patrones modernos."
        },
        {
          name: "DevOps",
          description: "Implementación de pipelines de CI/CD y gestión de infraestructura como código."
        },
        {
          name: "Desarrollo Frontend",
          description: "Creación de interfaces de usuario modernas con React y TypeScript."
        },
        {
          name: "Computación en la Nube",
          description: "Configuración y optimización de servicios en AWS, GCP y Azure."
        }
      ],
      educationHistory: [
        {
          degree: "Máster en Ingeniería de Software",
          institution: "Universidad Politécnica de Madrid",
          years: "2015 - 2016",
          description: "Especialización en arquitecturas orientadas a servicios y computación en la nube."
        },
        {
          degree: "Ingeniería en Sistemas Computacionales",
          institution: "Universidad Autónoma de Barcelona",
          years: "2010 - 2014"
        }
      ],
      social: {
        linkedin: "https://linkedin.com/in/juanperez",
        twitter: "https://twitter.com/juanperez",
        github: "https://github.com/juanperez"
      },
      projects: [
        {
          id: "proyecto-fintech",
          name: "Plataforma Fintech",
          description: "Desarrollo de una plataforma de gestión financiera para empresas con integración multibancaria.",
          image: "/images/projects/fintech.jpg",
          role: "Arquitecto de Software",
          year: "2022"
        },
        {
          id: "app-ecommerce",
          name: "App de E-Commerce",
          description: "Aplicación móvil para tienda online con funcionalidades de realidad aumentada.",
          image: "/images/projects/ecommerce.jpg",
          role: "Tech Lead",
          year: "2021"
        },
        {
          id: "plataforma-saas",
          name: "Plataforma SaaS B2B",
          description: "Desarrollo de una solución SaaS para gestión de equipos distribuidos.",
          image: "/images/projects/saas.jpg",
          role: "Desarrollador Backend",
          year: "2020"
        }
      ],
      testimonials: [
        {
          name: "María González",
          role: "CEO, TechnoFinance",
          image: "/images/testimonials/maria.jpg",
          text: "Juan transformó nuestra arquitectura tecnológica. Su visión estratégica y conocimientos técnicos nos ayudaron a escalar y mejorar significativamente la experiencia de nuestros usuarios."
        },
        {
          name: "Roberto Sánchez",
          role: "CTO, E-Shop International",
          image: "/images/testimonials/roberto.jpg",
          text: "Trabajar con Juan ha sido una experiencia increíble. Su capacidad para resolver problemas complejos y su enfoque en la calidad del código marcaron la diferencia en nuestro proyecto."
        }
      ]
    },
    {
      id: "maria-rodriguez",
      name: "María Rodríguez",
      role: "Diseñadora UI/UX",
      category: "Design",
      image: "/images/team/maria-rodriguez.jpg",
      location: "Barcelona, España",
      joinedYear: "2020",
      bio: "Diseñadora de experiencias digitales centradas en el usuario con 8 años de experiencia en el sector.",
      bioExtended: "María combina su formación en diseño con conocimientos de psicología cognitiva para crear interfaces intuitivas y atractivas. Ha trabajado en proyectos para sectores como fintech, salud y educación, siempre con el objetivo de mejorar la experiencia del usuario final.",
      quote: "El buen diseño es invisible. El mal diseño está por todas partes.",
      skills: ["UI Design", "UX Research", "Figma", "Adobe XD", "Design Systems", "Wireframing", "User Testing", "Sketch", "Prototyping", "HTML/CSS"],
      education: "Licenciatura en Diseño Digital",
      experience: 8,
      languages: [
        { name: "Español", level: "Nativo", percentage: 100 },
        { name: "Inglés", level: "Fluido", percentage: 85 },
        { name: "Francés", level: "Intermedio", percentage: 60 }
      ],
      certifications: [
        "Certificación Nielsen Norman Group UX",
        "Google UX Design Professional Certificate",
        "Interaction Design Foundation UX Master"
      ],
      specialties: [
        {
          name: "Sistemas de Diseño",
          description: "Creación de sistemas de diseño escalables y consistentes para productos digitales."
        },
        {
          name: "Investigación de Usuarios",
          description: "Realización de entrevistas, pruebas de usabilidad y análisis de comportamiento."
        },
        {
          name: "Diseño de Interacción",
          description: "Definición de flujos de usuario y microinteracciones que mejoran la experiencia."
        },
        {
          name: "Accesibilidad",
          description: "Implementación de principios WCAG para crear interfaces inclusivas."
        }
      ],
      educationHistory: [
        {
          degree: "Máster en Experiencia de Usuario",
          institution: "ELISAVA Barcelona",
          years: "2017 - 2018",
          description: "Especialización en metodologías de investigación y diseño centrado en el usuario."
        },
        {
          degree: "Licenciatura en Diseño Digital",
          institution: "Universidad Pompeu Fabra",
          years: "2012 - 2016"
        }
      ],
      social: {
        linkedin: "https://linkedin.com/in/mariarodriguez",
        twitter: "https://twitter.com/mariarodriguez",
        github: "https://github.com/mariarodriguez"
      },
      projects: [
        {
          id: "app-salud",
          name: "App de Telemedicina",
          description: "Diseño de experiencia de usuario para aplicación de consultas médicas virtuales.",
          image: "/images/projects/telemedicina.jpg",
          role: "Lead UX/UI Designer",
          year: "2023"
        },
        {
          id: "banking-app",
          name: "Banca Móvil",
          description: "Rediseño completo de la aplicación de banca móvil para uno de los principales bancos españoles.",
          image: "/images/projects/banco.jpg",
          role: "UI Designer",
          year: "2022"
        },
        {
          id: "sistema-diseno",
          name: "Sistema de Diseño Corporativo",
          description: "Creación de un sistema de diseño completo para una multinacional del sector retail.",
          image: "/images/projects/design-system.jpg",
          role: "Design System Lead",
          year: "2021"
        }
      ],
      testimonials: [
        {
          name: "Carlos Martínez",
          role: "Product Manager, HealthTech",
          image: "/images/testimonials/carlos.jpg",
          text: "El trabajo de María fue crucial para el éxito de nuestra app. Su enfoque en la experiencia de usuario nos permitió mejorar significativamente nuestras métricas de retención."
        }
      ]
    },
    {
      id: "carlos-lopez",
      name: "Carlos López",
      role: "Marketing Digital",
      category: "Marketing",
      image: "/images/team/carlos-lopez.jpg",
      location: "Valencia, España",
      joinedYear: "2021",
      bio: "Especialista en marketing digital con enfoque en estrategias de crecimiento para empresas tecnológicas.",
      bioExtended: "Carlos ha desarrollado su carrera profesional en el ámbito del marketing digital, especializándose en la captación y retención de usuarios para productos SaaS. Tiene experiencia en la implementación de estrategias de contenido, SEO, SEM y marketing de redes sociales.",
      skills: ["SEO", "SEM", "Growth Hacking", "Email Marketing", "Analytics", "Social Media", "Content Marketing", "Copywriting", "CRO", "Marketing Automation"],
      education: "Máster en Marketing Digital",
      experience: 7,
      languages: [
        { name: "Español", level: "Nativo", percentage: 100 },
        { name: "Inglés", level: "Profesional", percentage: 80 },
        { name: "Portugués", level: "Básico", percentage: 40 }
      ],
      certifications: [
        "Google Ads Certification",
        "HubSpot Inbound Marketing Certification",
        "Google Analytics Individual Qualification"
      ],
      specialties: [
        {
          name: "Growth Marketing",
          description: "Implementación de estrategias para el crecimiento de productos digitales."
        },
        {
          name: "Analítica Digital",
          description: "Análisis de datos para la optimización de campañas y mejora de conversión."
        },
        {
          name: "Automatización de Marketing",
          description: "Configuración de flujos automatizados para nurturing y conversión."
        },
        {
          name: "Posicionamiento SEO",
          description: "Mejora de la visibilidad orgánica mediante estrategias de contenido y técnicas."
        }
      ],
      educationHistory: [
        {
          degree: "Máster en Marketing Digital",
          institution: "ESIC Business & Marketing School",
          years: "2016 - 2017"
        },
        {
          degree: "Licenciatura en Comunicación",
          institution: "Universidad de Valencia",
          years: "2012 - 2016"
        }
      ],
      social: {
        linkedin: "https://linkedin.com/in/carloslopez",
        twitter: "https://twitter.com/carloslopez",
        github: "https://github.com/carloslopez"
      },
      projects: [
        {
          id: "campana-growth",
          name: "Campaña de Crecimiento SaaS",
          description: "Estrategia omnicanal para producto SaaS B2B que incrementó las conversiones en un 150%.",
          image: "/images/projects/growth.jpg",
          role: "Growth Strategist",
          year: "2022"
        },
        {
          id: "seo-ecommerce",
          name: "Estrategia SEO E-commerce",
          description: "Implementación de estrategia SEO completa para plataforma de e-commerce.",
          image: "/images/projects/seo.jpg",
          role: "SEO Specialist",
          year: "2021"
        }
      ]
    },
    {
      id: "ana-gomez",
      name: "Ana Gómez",
      role: "Project Manager",
      category: "Management",
      image: "/images/team/ana-gomez.jpg",
      location: "Sevilla, España",
      joinedYear: "2020",
      bio: "Project Manager con metodologías ágiles y 9 años de experiencia liderando equipos multidisciplinares.",
      bioExtended: "Ana se especializa en la gestión de proyectos tecnológicos complejos, utilizando metodologías ágiles para garantizar entregas de calidad en tiempo y presupuesto. Ha liderado equipos multidisciplinares en diversos sectores, destacando por su capacidad de comunicación y resolución de problemas.",
      skills: ["Scrum", "Kanban", "Jira", "Gestión de equipos", "Análisis de requisitos", "Gestión de riesgos", "Microsoft Project", "Presupuestos", "Comunicación", "Lean Management"],
      education: "Máster en Dirección de Proyectos",
      experience: 9,
      languages: [
        { name: "Español", level: "Nativo", percentage: 100 },
        { name: "Inglés", level: "Profesional", percentage: 95 },
        { name: "Italiano", level: "Intermedio", percentage: 65 }
      ],
      certifications: [
        "Project Management Professional (PMP)",
        "Scrum Master Certified (SMC)",
        "PRINCE2 Foundation"
      ],
      specialties: [
        {
          name: "Metodologías Ágiles",
          description: "Implementación de Scrum, Kanban y marcos de trabajo híbridos."
        },
        {
          name: "Liderazgo de Equipos",
          description: "Gestión y motivación de equipos multifuncionales distribuidos."
        },
        {
          name: "Gestión de Stakeholders",
          description: "Comunicación efectiva con clientes y partes interesadas."
        },
        {
          name: "Análisis de Procesos",
          description: "Optimización de flujos de trabajo para mejorar la eficiencia."
        }
      ],
      educationHistory: [
        {
          degree: "Máster en Dirección de Proyectos",
          institution: "EAE Business School",
          years: "2014 - 2015",
          description: "Especialización en gestión de proyectos tecnológicos y metodologías ágiles."
        },
        {
          degree: "Ingeniería Industrial",
          institution: "Universidad de Sevilla",
          years: "2009 - 2013"
        }
      ],
      social: {
        linkedin: "https://linkedin.com/in/anagomez",
        twitter: "https://twitter.com/anagomez",
        github: "https://github.com/anagomez"
      },
      projects: [
        {
          id: "transformacion-digital",
          name: "Transformación Digital Corporativa",
          description: "Liderazgo del proyecto de transformación digital para empresa del sector asegurador.",
          image: "/images/projects/transformacion.jpg",
          role: "Project Manager",
          year: "2023"
        },
        {
          id: "plataforma-educativa",
          name: "Plataforma Educativa",
          description: "Gestión del desarrollo e implementación de plataforma de e-learning para universidad.",
          image: "/images/projects/educacion.jpg",
          role: "Scrum Master",
          year: "2022"
        }
      ],
      testimonials: [
        {
          name: "Luis Fernández",
          role: "Director de Tecnología, Seguros ABC",
          image: "/images/testimonials/luis.jpg",
          text: "Ana consiguió llevar a buen puerto un proyecto extremadamente complejo. Su capacidad para anticipar problemas y encontrar soluciones fue decisiva para el éxito del proyecto."
        }
      ]
    }
  ];