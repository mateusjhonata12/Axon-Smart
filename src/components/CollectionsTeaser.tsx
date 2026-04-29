import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CollectionsTeaser() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-hero leading-tight mb-12">
              Explorar <br /> 
              <span className="text-cold-gray/20">Coleções Exclusivas</span>
            </h2>
            <p className="text-nero/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-16">
              Mergulhe em nossa curadoria de sistemas e hardwares de precisão. 
              Do Fap Line ao Axon Store, cada projeto é uma declaração de excelência técnica e design minimalista.
            </p>
            <Link 
              to="/colecoes"
              className="group flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold"
            >
              <span className="border-b border-nero pb-2 group-hover:text-cold-gray group-hover:border-cold-gray transition-all">Ver Todas as Coleções</span>
              <div className="w-12 h-12 rounded-full border border-nero/10 flex items-center justify-center group-hover:bg-nero group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            <div className="space-y-4">
              <div className="h-2/3 bg-premium-gradient rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 bg-nero/5 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.2em] font-bold text-white/40">COL_01</div>
              </div>
              <div className="h-1/3 bg-gray-100 rounded-sm"></div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="h-1/3 bg-gray-50 rounded-sm"></div>
              <div className="h-2/3 bg-nero rounded-sm flex items-center justify-center">
                 <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold -rotate-90">AXON SMART</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
