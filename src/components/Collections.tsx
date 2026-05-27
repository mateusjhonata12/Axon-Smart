import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firestoreUtils';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  category: string;
  year?: string;
  longDescription?: string;
}

export default function Collections() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      const path = 'projects';
      try {
        const q = query(collection(db, path), orderBy('order', 'asc'));
        const querySnapshot = await getDocs(q);
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setProjects(projectsData);
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, path);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const preProjects: Project[] = [
    {
      id: 'fap-line',
      title: 'FAP SERVICE',
      description: 'Sistema inovador em fase de desenvolvimento, focado em otimização de fluxos e precisão operacional de atendimento presencial.',
      longDescription: 'O Fap Line representa a vanguarda da gestão de fluxos de atendimento dentro do ecossistema AXON. Desenvolvido para oferecer visibilidade em tempo real e controle absoluto sobre a jornada do usuário, este sistema utiliza algoritmos avançados para otimizar a distribuição de chamados e maximizar a eficiência da recepção. Atualmente em fase Alpha, a solução já demonstra incrementos significativos na redução de tempos de espera nos ambientes de teste controlados.',
      category: 'Pré-Projeto',
      year: '2024'
    },
    {
      id: 'fap-academy',
      title: 'FAP ACADEMY',
      description: 'Plataforma educacional de alta performance para capacitação técnica e liderança empresarial.',
      longDescription: 'A Fap Academy não é apenas uma plataforma de cursos, mas um hub de conhecimento estratégico. Focada em formar os líderes do amanhã, a plataforma integra metodologias de ensino ágeis com conteúdo prático de consultoria AXON. Com trilhas personalizadas para tecnologia, gestão e design, a Academy visa preencher a lacuna entre o conhecimento acadêmico e a demanda real do mercado de alto luxo e tecnologia.',
      category: 'Pré-Projeto',
      year: '2024'
    },
    {
      id: 'axon-store',
      title: 'Axon Store',
      description: 'E-commerce premium integrado ao ecossistema Axon, oferecendo curadoria exclusiva de hardware e lifestyle.',
      longDescription: 'A AXON Store redefine a experiência de compra digital para o mercado premium. Mais do que um e-commerce, é uma curadoria de soluções e equipamentos que compartilham do DNA de inovação AXON. A loja oferecerá acesso exclusivo a hardwares parametrizados pela nossa engenharia, além de peças de design e coleções AXON Originals que traduzem nosso lifestyle em produtos tangíveis.',
      category: 'Pré-Projeto',
      year: '2024'
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <header className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-hero mb-6">Coleções</h1>
          <p className="text-cold-gray max-w-2xl font-light text-lg">
            Uma curadoria dos nossos projetos mais significativos e coleções exclusivas. 
            Cada peça e solução é um reflexo do nosso compromisso com a excelência.
          </p>
        </header>

        {(loading && projects.length === 0) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-gray-50 shimmer"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-32">
            {/* Dynamic Projects from DB */}
            {projects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                {projects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-[16/10] bg-gray-100 mb-8 overflow-hidden">
                      {project.imageUrl ? (
                        <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300 uppercase tracking-widest text-xs bg-premium-gradient">
                          {project.category}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-cold-gray mb-2 block">
                          {project.category} {project.year && `— ${project.year}`}
                        </span>
                        <h3 className="text-2xl font-bold uppercase tracking-hero group-hover:text-cold-gray transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-cold-gray font-light max-w-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Static Pre-Projects Section */}
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-cold-gray mb-12 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-cold-gray"></span>
                Sistemas em Desenvolvimento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {preProjects.map((project, index) => (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="border-l border-gray-100 pl-8 py-4 group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span className="text-[9px] uppercase tracking-widest text-cold-gray mb-2 block opacity-60">
                      Phase: Concept / Alpha
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-hero mb-4 group-hover:text-cold-gray transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cold-gray font-light text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-nero rounded-full animate-pulse"></div>
                       <span className="text-[8px] uppercase tracking-[0.2em] font-bold">EM BREVE</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-white/90 backdrop-blur-md z-[60] cursor-zoom-out"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-6 md:inset-12 lg:inset-24 bg-white z-[70] shadow-2xl overflow-y-auto no-scrollbar border border-gray-100"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-12 right-12 md:top-20 md:right-20 z-[80] p-4 hover:rotate-90 transition-transform bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
              >
                <X size={24} className="text-nero" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
                <div className="bg-gray-50 flex items-center justify-center overflow-hidden">
                  {selectedProject.imageUrl ? (
                    <img 
                      src={selectedProject.imageUrl} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-200 uppercase tracking-[2em] text-xs bg-premium-gradient">
                      {selectedProject.category}
                    </div>
                  )}
                </div>
                
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-cold-gray mb-8 block font-bold">
                    {selectedProject.category} {selectedProject.year && `— ${selectedProject.year}`}
                  </span>
                  
                  <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-hero mb-12 leading-tight">
                    {selectedProject.title}
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl font-light text-nero leading-relaxed">
                      {selectedProject.description}
                    </p>
                    
                    <div className="h-[1px] w-24 bg-nero my-12 opacity-20"></div>
                    
                    <p className="text-cold-gray font-light text-lg leading-relaxed max-w-xl">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>

                    <div className="pt-12">
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="text-[10px] uppercase tracking-luxury font-bold border-b border-nero pb-2 hover:opacity-50 transition-opacity"
                      >
                        Voltar para Coleções
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
