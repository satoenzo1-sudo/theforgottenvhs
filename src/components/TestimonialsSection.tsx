import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import TestimonialSlideshow from './TestimonialSlideshow';
import ProductShowcase from './ProductShowcase';
const TestimonialsSection = () => {
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
          <h2 className="text-4xl md:text-6xl font-typewriter text-evidence-gold mb-4">
            O que dizem os detetives amadores:
          </h2>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="mb-4">
            <p className="font-mono text-aged-paper text-lg">
              ⭐ 584+ investigadores já resolveram o caso
            </p>
          </motion.div>
          
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
        }} className="inline-block stamp text-sm">
            DEPOIMENTOS VERIFICADOS
          </motion.div>
        </motion.div>


        {/* Slideshow de Depoimentos */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} viewport={{
        once: true
      }} className="mb-16">
          <TestimonialSlideshow />
        </motion.div>

        {/* CTA Button após primeiro depoimento */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          
        </motion.div>

        {/* Depoimento em vídeo movido para o final */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="max-w-4xl mx-auto">
          {/* Video Title */}
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }} className="text-2xl md:text-3xl font-typewriter text-evidence-gold text-center mb-8">
            Ouça o depoimento abaixo do namorado da Ana
          </motion.h3>

          <div className="evidence-card p-8 rounded-lg relative">
            {/* VHS scanlines */}
            <div className="absolute inset-0 vhs-scanlines opacity-5 rounded-lg"></div>
            
            {/* Confidential watermark */}
            <motion.div className="absolute top-4 right-4 stamp text-xs opacity-30" animate={{
            rotate: [12, 15, 12],
            scale: [0.9, 1, 0.9]
          }} transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}>
              CONFIDENCIAL
            </motion.div>

            {/* Video embed with 1:1 aspect ratio */}
            <div className="aspect-square relative rounded-lg overflow-hidden max-w-sm mx-auto border-2 border-evidence-gold">
              <iframe src="https://fast.wistia.com/embed/iframe/tgl4m1rg8c" title="Depoimento do namorado da Ana" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>;
};
export default TestimonialsSection;