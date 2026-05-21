import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-8 md:px-16 bg-transparent">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-start text-[#d4d4d4]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="lg:col-span-5 space-y-24"
        >
          <div className="space-y-8">
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono">Profile / Introduction</span>
            <h2 className="text-4xl md:text-6xl font-serif-sc leading-tight text-white/90 underline underline-offset-[24px] decoration-white/5">我们不是<br />设计公司。</h2>
          </div>
          
          <div className="space-y-12 text-base md:text-xl text-white/50 leading-relaxed font-light">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
              DAC 达成文化，是一处探索未来生活方式的场域实验平台。
            </motion.p>
            
            <div className="space-y-8 pt-12 border-t border-white/5">
              <p className="text-[10px] tracking-widest text-white/30 uppercase">核心路径 / Core Pathways</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                 {['在地文化研究', '空间场域重构', '艺术系统植入', '文旅战略规划', '长期运营陪跑'].map((item, i) => (
                   <motion.div 
                     key={item}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex items-center gap-4 text-[13px]"
                   >
                     <div className="w-1 h-[1px] bg-white/20" />
                     <span className="text-white/70 tracking-widest font-serif-sc">{item}</span>
                   </motion.div>
                 ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8 }}
          className="lg:col-span-7 relative aspect-[16/10] bg-zinc-900 overflow-hidden shadow-2xl"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/2024-12-05%20161021.jpg" 
            alt="DAC Atmosphere" 
            className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-[3s]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
