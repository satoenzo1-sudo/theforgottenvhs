import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const EvidenceVisualSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Featured Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="case-file rounded-lg p-8 text-center relative">
            {/* Confidential watermark */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl md:text-8xl font-typewriter text-vhs-red opacity-5 transform rotate-12">
                CONFIDENCIAL
              </div>
            </div>
            
            <motion.div 
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Camera className="w-16 h-16 text-evidence-gold mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-typewriter text-evidence-gold mb-4">
                Evidência Visual Exclusiva
              </h3>
              <p className="text-lg font-mono text-aged-paper leading-relaxed">
                Fotos da cena do crime, documentos manuscritos, transcrições de fitas, laudos de autópsias, mapas detalhados e muito mais. Tudo em alta resolução para uma experiência investigativa imersiva.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EvidenceVisualSection;