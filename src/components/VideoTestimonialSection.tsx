import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const VideoTestimonialSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Video Testimonial */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          {/* Video Title */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-typewriter text-evidence-gold text-center mb-8"
          >
            Veja o depoimento abaixo, de uma de nossas detetives satisfeitas
          </motion.h3>

          <div className="evidence-card p-8 rounded-lg relative">
            {/* VHS scanlines */}
            <div className="absolute inset-0 vhs-scanlines opacity-5 rounded-lg"></div>
            
            {/* Confidential watermark */}
            <motion.div 
              className="absolute top-4 right-4 stamp text-xs opacity-30" 
              animate={{ rotate: [12, 15, 10, 12], scale: [0.8, 1, 0.9, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              CONFIDENCIAL
            </motion.div>

            {/* Video embed */}
            <div className="aspect-[9/16] relative rounded-lg overflow-hidden max-w-sm mx-auto border-2 border-evidence-gold">
              <iframe 
                src="https://fast.wistia.com/embed/iframe/eu0qqp84lt" 
                title="Depoimento da Fernanda" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Arrow pointing down */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-evidence-gold"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;