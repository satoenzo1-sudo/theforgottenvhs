import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import { useShouldDisableAnimations } from '@/hooks/use-reduced-motion';

const CTASection = () => {
  const disableAnimations = useShouldDisableAnimations();
  
  return <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center max-w-2xl mx-auto">
          {/* Timer */}
          <div className="mb-6">
            <CountdownTimer />
          </div>

          {/* Pricing */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="mb-8">
            <div className="inline-block evidence-card p-4 rounded-lg">
              <div className="flex items-center justify-center gap-4">
                <span className="text-2xl font-mono text-muted-foreground line-through">
                  R$ 57,00
                </span>
                <span className="text-4xl font-typewriter text-evidence-gold">R$ 19,90</span>
              </div>
              <p className="text-sm font-mono text-aged-paper mt-2">
                Oferta por tempo limitado
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <motion.button whileHover={{
            scale: 1.08,
            y: -3,
            boxShadow: "0 20px 50px hsl(var(--evidence-gold) / 0.7), 0 0 80px hsl(var(--evidence-gold)), 0 0 120px hsl(var(--vhs-red) / 0.5)"
          }} whileTap={{
            scale: 1.02
          }} className="btn-cta-primary text-xl px-12 py-6 font-typewriter tracking-wider rounded-lg relative overflow-hidden" onClick={() => window.open('https://pay.cakto.com.br/3buxx9f_586459', '_blank')}>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-aged-paper/10 to-transparent" animate={disableAnimations ? {} : {
              x: ['-100%', '100%']
            }} transition={{
              duration: 3,
              repeat: disableAnimations ? 0 : Infinity,
              ease: "linear"
            }} />
              <span className="relative z-10">🔥 COMECE A INVESTIGAR AGORA! 🔥</span>
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>;
};
export default CTASection;