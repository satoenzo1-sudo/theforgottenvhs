import { motion } from 'framer-motion';
import { FileText, Microscope, MessageSquare, MapPin, Camera, Smartphone } from 'lucide-react';
import ProductShowcase from './ProductShowcase';
const IncludedSection = () => {
  const items = [{
    icon: FileText,
    title: "📼 Arquivo policial",
    description: "Documentos confidenciais manchados",
    delay: 0.1
  }, {
    icon: Microscope,
    title: "🩸 Laudos forenses",
    description: "Relatórios médicos digitalizados",
    delay: 0.2
  }, {
    icon: MessageSquare,
    title: "🕵️‍♂️ Relatórios dos detetives",
    description: "Anotações dos investigadores",
    delay: 0.3
  }, {
    icon: Camera,
    title: "📷 Fotografias da cena",
    description: "Fotos reveladoras dos anos 70",
    delay: 0.4
  }, {
    icon: MapPin,
    title: "🔍 Pistas e enigmas",
    description: "Códigos para decifrar",
    delay: 0.5
  }, {
    icon: Smartphone,
    title: "🎵 Jogo do momento",
    description: "O jogo do momento no seu date",
    delay: 0.6
  }];
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-15"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-typewriter text-vhs-red mb-8">
            O que está incluso:
          </h2>
          
          
          {/* Evidence label */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="inline-block stamp text-sm mb-8">
            ARQUIVO DE EVIDÊNCIAS
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {items.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: item.delay
        }} viewport={{
          once: true
        }} className="evidence-card p-4 rounded-lg relative group transform-gpu text-center hover:scale-105 transition-all duration-300">
              {/* Background scanlines */}
              <div className="absolute inset-0 vhs-scanlines opacity-10 rounded-lg"></div>
              
              {/* Icon */}
              <motion.div className="mb-3" whileHover={{
            scale: 1.1
          }} transition={{
            duration: 0.3
          }}>
                <item.icon className="w-6 h-6 text-evidence-gold mx-auto" />
              </motion.div>

              {/* Title */}
              <h3 className="text-sm font-typewriter text-aged-paper mb-2 font-bold group-hover:text-evidence-gold transition-colors duration-300 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-muted-foreground text-xs leading-relaxed">
                {item.description}
              </p>

              {/* Corner tear effect */}
              <motion.div className="absolute top-0 right-0 w-0 h-0 border-l-[15px] border-l-transparent border-t-[15px] border-t-evidence-gold opacity-20" whileHover={{
            opacity: 40
          }} transition={{
            duration: 0.3
          }} />
            </motion.div>)}
        </div>

        {/* Featured Preview */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.8
      }} viewport={{
        once: true
      }} className="mt-16 max-w-4xl mx-auto">
          
        </motion.div>


      </div>
    </section>;
};
export default IncludedSection;