import { motion } from 'framer-motion';
import ProductShowcase from './ProductShowcase';

const CasePreviewSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-typewriter text-evidence-gold text-center mb-8">
            Veja por dentro do caso Red Ridge:
          </h3>
          <ProductShowcase />
        </motion.div>
      </div>
    </section>
  );
};

export default CasePreviewSection;