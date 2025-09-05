import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Timer */}
          <div className="mb-6">
            <CountdownTimer />
          </div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-block evidence-card p-4 rounded-lg">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl font-mono text-muted-foreground line-through">
                  R$ 57,00
                </span>
                <span className="text-4xl font-typewriter text-evidence-gold">
                  R$ 27,90
                </span>
              </div>
              <p className="text-sm font-mono text-aged-paper mt-2">
                Oferta por tempo limitado
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-evidence-gold hover:bg-evidence-gold/90 text-background font-typewriter tracking-wider transform hover:scale-105 transition-all duration-300"
            >
              Comece a investigar agora!
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;