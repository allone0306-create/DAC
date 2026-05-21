import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
      {/* Background Media - Using a high quality architectural image as placeholder for video */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/huwaishui.png" 
            alt="DAC Future Living - Outdoor Water" 
            className="w-full h-full object-cover brightness-[0.5] contrast-[1.1]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-8 md:px-16 flex items-end pb-32">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase block">Vol. 01 / Manifesto</span>
              <motion.h1 
                className="text-4xl sm:text-6xl md:text-8xl font-serif-sc leading-[1.1] text-white max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                未来的文旅，<br />
                不是目的地，<br />
                而是另一种<span className="italic font-light opacity-60">生活。</span>
              </motion.h1>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-white/10 pt-12">
               <p className="text-xs md:text-sm tracking-[0.3em] text-white/50 uppercase max-w-sm leading-relaxed">
                 Architecting secondary systems of existence in the resonance of nature and time.
               </p>
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 2, duration: 1 }}
                 className="flex items-center gap-6"
               >
                 <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">Scroll to explore</span>
                 <div className="w-16 h-px bg-white/20" />
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements/Particles Effect (Simplified) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest opacity-40 uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
