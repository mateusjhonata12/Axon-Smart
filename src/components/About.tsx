import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="consultoria" className="py-32 px-6 md:px-12 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.4em] text-cold-gray block mb-8"
        >
          O Manifesto
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold uppercase tracking-hero mb-12"
        >
          A Essência da AXON SMART
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl text-nero font-light leading-relaxed"
        >
          <p>
            "Na AXON SMART, acreditamos que a excelência não conhece fronteiras. 
            Nascemos da intersecção entre a precisão técnica da tecnologia, a visão 
            estratégica da consultoria e a sofisticação do lifestyle contemporâneo."
          </p>
          <p>
            "Nossa missão é criar conexões inteligentes (Axons) em tudo o que tocamos. 
            Seja desenvolvendo soluções digitais de alta performance, orientando negócios 
            rumo ao próximo nível ou curando coleções que expressam identidade e poder, 
            a AXON SMART entrega o que há de mais essencial: resultado com sofisticação."
          </p>
          <p className="font-semibold italic">
            "Não somos apenas uma Startup, somos consultoria e a marca da sua tecnologia. 
            Somos o eixo onde o progresso e o estilo se encontram."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
