import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-[100vh] flex items-center px-6 md:px-12 py-32 overflow-hidden bg-white">
      {/* Background Layer (Placeholder + Video) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          {!isVideoLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-premium-gradient flex items-center justify-center"
            >
              <div className="w-full h-full shimmer opacity-30"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-30' : 'opacity-0'}`}
        >
          <source src="/input_file_1.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col items-start text-left z-20">
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-cold-gray/60 mb-12"
            >
              Vision & Execution
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-[7.5rem] font-bold tracking-hero leading-[0.85] mb-12"
            >
              AXON SMART
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-xl text-nero/70 max-w-md mb-20 font-light leading-relaxed tracking-wide"
            >
              Uma marca universal forjada na intersecção entre tecnologia de ponta, 
              estratégia empresarial e o lifestyle premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-6"
            >
              <Link 
                to="/colecoes"
                className="inline-block bg-nero text-white px-10 md:px-14 py-6 md:py-7 text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-cold-gray active:scale-95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
              >
                Descobrir Coleção
              </Link>
              <a 
                href="https://wa.me/5579996294087" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-nero border border-nero/10 px-10 md:px-14 py-6 md:py-7 text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:bg-gray-50 active:scale-95 shadow-xl"
              >
                Falar com Especialista
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex justify-end relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative w-full aspect-video bg-nero rounded-sm overflow-hidden group shadow-[0_80px_140px_-30px_rgba(0,0,0,0.4)] border border-white/10"
            >
              <div className="absolute inset-0 bg-premium-gradient flex items-center justify-center -z-10">
                <div className="shimmer truncate text-[10px] uppercase tracking-widest text-cold-gray/20">CARREGANDO VISÃO...</div>
              </div>
              
              <iframe 
                className="w-full h-full border-0 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-700 grayscale-[40%] scale-105 group-hover:scale-100 group-hover:grayscale-0"
                src="https://www.youtube.com/embed/1giP-vQ2Y8o?autoplay=1&mute=1&loop=1&playlist=1giP-vQ2Y8o&controls=0&showinfo=0&rel=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="AXON VISION"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-tr from-nero/45 to-transparent pointer-events-none"></div>
              
              {/* UI Overlays */}
              <div className="absolute inset-x-8 inset-y-6 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start opacity-40">
                  <div className="text-[8px] uppercase tracking-widest text-white font-mono">001 // SYSTEM_READY</div>
                  <div className="text-[8px] uppercase tracking-widest text-white font-mono">RECU 0.9s</div>
                </div>

                <div className="flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-10 h-[1px] bg-white/20"></div>
                  <div className="text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                  </div>
                  <div className="w-10 h-[1px] bg-white/20"></div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex gap-3 items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-sm"></div>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-white font-bold drop-shadow-md">LIVE ENGINE</div>
                  </div>
                  <div className="text-[7px] uppercase tracking-widest text-white/40 font-mono">VISION_AXON_v4.0</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
