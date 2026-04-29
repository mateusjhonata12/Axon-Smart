import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-nero my-48">
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-nero z-0 flex items-center justify-center"
          >
            <div className="w-full h-full shimmer opacity-10"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
      >
        <source src="/input_file_1.mp4" type="video/mp4" />
        <source src="/input_file_0.mp4" type="video/mp4" />
      </video>
      
      <div className="relative z-10 text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.5em' }}
          transition={{ duration: 1.5 }}
          className="text-white text-2xl md:text-4xl font-light uppercase tracking-luxury"
        >
          AXON EXCELLENCE
        </motion.h2>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none"></div>
    </section>
  );
}
