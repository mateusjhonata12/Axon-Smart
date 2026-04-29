import { Cpu, BarChart, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Tech Solutions',
    description: 'Desenvolvimento de ecossistemas digitais de alta performance e precisão técnica.',
    icon: Cpu,
    id: 'tech'
  },
  {
    title: 'Strategic Consulting',
    description: 'Orientação de negócios rumo ao próximo nível com visão estratégica e analítica.',
    icon: BarChart,
    id: 'consulting'
  },
  {
    title: 'Premium Essentials',
    description: 'Curadoria de coleções exclusivas que expressam identidade, poder e sofisticação.',
    icon: ShoppingBag,
    id: 'lifestyle'
  }
];

export default function Services() {
  return (
    <section id="inovacao" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col items-start group cursor-default"
          >
            <div className="mb-8 p-4 bg-gray-50 group-hover:bg-nero transition-colors duration-500">
              <service.icon className="w-8 h-8 text-nero group-hover:text-white stroke-[1px] transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-hero mb-4 transition-colors group-hover:text-cold-gray">
              {service.title}
            </h3>
            <p className="text-cold-gray leading-relaxed font-light transition-colors group-hover:text-nero">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
