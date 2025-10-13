import { motion } from 'framer-motion';
import { Heart, Users, Search } from 'lucide-react';
import { useShouldDisableAnimations } from '@/hooks/use-reduced-motion';

const TargetAudienceSection = () => {
  const disableAnimations = useShouldDisableAnimations();
  const targetGroups = [{
    icon: Heart,
    text: "Para casais que querem um date diferente",
    delay: 0.1
  }, {
    icon: Users,
    text: "Para amigos que amam mistério",
    delay: 0.2
  }, {
    icon: Search,
    text: "Para fãs de true crime",
    delay: 0.3
  }];
  return <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 vhs-noise opacity-10"></div>
      
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
          <h2 className="text-4xl md:text-5xl font-typewriter text-evidence-gold mb-8">
            Esse jogo é para você se...
          </h2>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="inline-block stamp text-sm mb-8">
            PERFIL DO INVESTIGADOR
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {targetGroups.map((group, index) => {
            const IconComponent = group.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: group.delay
            }} viewport={{
              once: true
            }} className="evidence-card p-8 rounded-lg relative group hover:bg-carbon-black/30 transition-all duration-300">
                  <div className="flex items-center space-x-6">
                    <motion.div className="w-16 h-16 bg-vhs-red/20 rounded-full flex items-center justify-center border-2 border-vhs-red" whileHover={{
                  scale: 1.1,
                  rotate: 5
                }} transition={{
                  duration: 0.3
                }}>
                      <IconComponent className="w-8 h-8 text-vhs-red" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        
                        <p className="text-2xl font-typewriter text-aged-paper">
                          {group.text}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Corner effect */}
                  <motion.div className="absolute bottom-0 right-0 w-0 h-0 border-r-[15px] border-r-transparent border-b-[15px] border-b-vhs-red opacity-20" whileHover={{
                opacity: 40,
                scale: 1.3
              }} transition={{
                duration: 0.3
              }} />
                </motion.div>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default TargetAudienceSection;