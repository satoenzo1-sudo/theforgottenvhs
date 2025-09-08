import { motion } from 'framer-motion';

const CaseHistorySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 vhs-noise opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-typewriter text-vhs-red mb-8">
            O que esconde o Caso Red Ridge VHS 13?
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="case-file rounded-lg p-8 md:p-12 text-center relative"
          >
            {/* Floating Confidential Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 stamp text-xs"
              animate={{ 
                rotate: [15, 12, 18, 15],
                scale: [0.8, 1, 0.9, 0.8]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              EVIDÊNCIA
            </motion.div>

            <motion.div 
              className="absolute -bottom-6 -left-6 stamp text-xs opacity-60"
              animate={{ 
                rotate: [-12, -8, -15, -12],
                scale: [0.9, 1.1, 0.8, 0.9]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              ARQUIVADO
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-mono text-aged-paper leading-relaxed mb-6"
            >
              Entre 1982 e 1985, o condado de Red Ridge, Tennessee, foi marcado por uma sucessão de mortes inexplicáveis. Em apenas três anos, sete mulheres foram assassinadas de forma semelhante, como se seguissem um padrão macabro que ninguém conseguia decifrar.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-mono text-aged-paper leading-relaxed mb-6"
            >
              Em 1984, a prisão de um suspeito parecia encerrar o caso, mas sua morte repentina meses depois apenas aprofundou o mistério. Quando uma nova vítima surgiu após seu falecimento, as autoridades arquivaram o processo às pressas, deixando perguntas sem resposta e uma cidade inteira mergulhada no medo.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-mono text-aged-paper leading-relaxed mb-6"
            >
              Desde então, o Caso Red Ridge permanece envolto em silêncio — entre documentos rasurados, investigações fragmentadas e versões oficiais que nunca se sustentaram.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="my-8 h-px bg-gradient-to-r from-transparent via-evidence-gold to-transparent"
            />

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-mono text-aged-paper leading-relaxed mb-6"
            >
              O que realmente aconteceu em Red Ridge?
            </motion.p>

            {/* Challenge/Competition trigger */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="bg-evidence-gold/10 border-l-4 border-evidence-gold px-6 py-4 rounded-r-lg mb-6"
            >
              <p className="font-mono text-evidence-gold font-bold text-lg">
                🏆 DESAFIO ACEITO?
              </p>
              <p className="font-mono text-aged-paper text-sm mt-2">
                Apenas 23% dos investigadores conseguem resolver este caso. Você tem o que é preciso?
              </p>
            </motion.div>


            {/* VHS Effect Lines */}
            <div className="absolute inset-0 vhs-scanlines opacity-20 rounded-lg"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseHistorySection;