import { motion } from 'framer-motion';
import { FileX, Zap, Gamepad2 } from 'lucide-react';
import { useShouldDisableAnimations } from '@/hooks/use-reduced-motion';

const HeroSection = () => {
  const disableAnimations = useShouldDisableAnimations();
  
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background VHS Static Effect - Removed temporarily */}
      
      {/* Floating Confidential Stamps */}
      <motion.div className="absolute top-20 left-10 stamp text-xs opacity-30" animate={disableAnimations ? {} : {
      rotate: [-15, -18, -15],
      scale: [1, 1.05, 1]
    }} transition={{
      duration: 5,
      repeat: disableAnimations ? 0 : Infinity,
      ease: "easeInOut"
    }}>
        CONFIDENCIAL
      </motion.div>
      
      <motion.div className="absolute bottom-32 right-12 stamp text-xs opacity-20" animate={disableAnimations ? {} : {
      rotate: [12, 15, 12],
      scale: [0.9, 1.1, 0.9]
    }} transition={{
      duration: 6,
      repeat: disableAnimations ? 0 : Infinity,
      ease: "easeInOut",
      delay: 1
    }}>
        CASO FECHADO
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-20">
        {/* Pre-title */}
        <motion.div initial={{
        opacity: 1,
        y: 0
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4,
        ease: "easeOut"
      }} className="mb-6">
          <p className="text-lg md:text-xl font-mono text-evidence-gold tracking-widest">
            THE FORGOTTEN VHS
          </p>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <motion.div initial={{
        opacity: 1,
        y: 0
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="mb-8">
          <h1 className="text-4xl md:text-6xl font-typewriter font-bold text-aged-paper mb-4 block text-vhs-red">Você teria coragem de abrir um arquivo misterioso, esquecido há mais de 40 anos no interior dos Estados Unidos?</h1>
          
          <motion.div initial={{
          opacity: 1,
          scale: 1
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.4
        }} className="inline-block px-6 py-2 border-2 border-vhs-red text-vhs-red font-mono font-bold text-xl tracking-widest">
            VHS 13
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{
        opacity: 1,
        y: 0
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="text-xl md:text-2xl font-serif-italic text-aged-paper max-w-4xl mx-auto mb-8 leading-relaxed">Entre páginas amareladas, laudos borrados e fotografias que nunca deveriam ter sido reveladas, repousa um mistério que o tempo tentou enterrar.</motion.p>


        {/* Quick Highlight Section */}
        <motion.div initial={{
        opacity: 1,
        y: 0
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4,
        duration: 0.6
      }} className="case-file rounded-lg p-6 max-w-xl mx-auto mb-12">
          <h3 className="text-xl font-typewriter text-evidence-gold mb-4">O jogo do momento para quem ama terror rural e mistério antigo.</h3>
          
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <motion.div whileHover={{
            scale: 1.05
          }} className="flex flex-col items-center">
              <Zap className="w-6 h-6 text-vhs-red mb-2" />
              <p className="font-mono text-aged-paper text-sm">Dificuldade: Médio para Difícil</p>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} className="flex flex-col items-center">
              <Gamepad2 className="w-6 h-6 text-vhs-red mb-2" />
              <p className="font-mono text-aged-paper text-sm">1 a 2 horas de jogabilidade</p>
            </motion.div>
            
            <motion.div whileHover={{
            scale: 1.05
          }} className="flex flex-col items-center col-span-2">
              <FileX className="w-6 h-6 text-vhs-red mb-2" />
              <p className="font-mono text-aged-paper text-sm">Mistério profundo sem spoilers</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={disableAnimations ? {} : {
      y: [0, 8, 0]
    }} transition={{
      duration: 2.5,
      repeat: disableAnimations ? 0 : Infinity,
      ease: "easeInOut"
    }}>
        
      </motion.div>
    </section>;
};
export default HeroSection;