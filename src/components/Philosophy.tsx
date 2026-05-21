import React from 'react';
import { motion } from 'framer-motion';

const philosophies = [
  { 
    title: '第二生活空间', 
    desc: '这不仅是地理坐标的迁徙，更是生命重心的重构。我们为渴望脱离都市异化的灵魂，提供一个可以“重新降落”的生命系统。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0003.jpg' 
  },
  { 
    title: '在地文化优先', 
    desc: '拒绝表象的符号堆砌。我们致力于考古式的挖掘，将土地深处的微光转译为可感知的场域灵魂，让每一寸空间都拥有时间的厚度。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_6676.jpg' 
  },
  { 
    title: '自然疗愈', 
    desc: '空间是人与自然握手言和的媒介。通过对气流、光影与植被的精密调度，我们构建出能够自发引导呼吸、抚平焦虑的生命场域。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/9.jpg' 
  },
  { 
    title: '长期主义', 
    desc: '我们不追求瞬间的视觉高潮。DAC的逻辑是构建可持续生长的生态闭环，让空间在时间的洗练下，愈发呈现出深邃的生命力。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/2ba93b022af6f62491d4950acd0e4dd0.jpg' 
  },
  { 
    title: '精神栖居', 
    desc: '当所有的功能退居幕后，剩下的便是对自我的面对。我们营造极致的留白与静谧，为躁动的时代提供一个可以安放灵魂的永恒角落。', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/IMG_7344.jpg' 
  }
];

const Philosophy: React.FC = () => {
  return (
    <section className="py-24 md:py-48 px-8 md:px-16 bg-transparent text-[#d4d4d4]">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-48"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline text-white">
            <div className="lg:col-span-8 text-white">
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono block mb-8">Vol. 03 / Philosophy</span>
              <h2 className="text-4xl md:text-8xl font-serif-sc leading-none text-white/90">
                旅行的本质不是抵达目的地，<br />
                而是<span className="italic font-light opacity-60">重新连接生活。</span>
              </h2>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <div className="w-16 h-px bg-white/20" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {philosophies.map((p, index) => (
            <div 
              key={p.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-32 items-center relative`}
            >
              {/* Background Large Number */}
              <div className={`absolute -top-24 ${index % 2 === 0 ? 'left-0' : 'right-0'} text-[100px] md:text-[200px] font-serif-sc font-bold opacity-[0.03] select-none pointer-events-none text-white leading-none z-0`}>
                0{index + 1}
              </div>

              {/* Image Side - Redesigned with Frosted Glass & Dynamic Clarity */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-[50%] relative z-10"
              >
                <div className="aspect-[16/10] overflow-hidden bg-zinc-900 shadow-xl relative group cursor-crosshair">
                  {/* Image with scaling and initial slight blur */}
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Frosted Glass Overlay (Backdrop Blur) - Lightened for restraint */}
                  <motion.div 
                    className="absolute inset-0 z-20 backdrop-blur-[4px] bg-white/5 group-hover:backdrop-blur-none group-hover:bg-transparent transition-all duration-1000 ease-out"
                  />

                  {/* Aesthetic Tint Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-40 group-hover:opacity-10 transition-opacity duration-1000" />

                  {/* Decorative Frame */}
                  <div className="absolute inset-4 border border-white/10 z-30 pointer-events-none group-hover:inset-12 group-hover:border-white/20 transition-all duration-1000" />
                  
                  {/* Interactive Status Tag */}
                  <div className="absolute top-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                     <span className="text-[9px] tracking-[0.5em] text-white uppercase bg-black/40 px-3 py-1">Focus / Resolved</span>
                  </div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[45%] space-y-8 z-10 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end flex flex-col'}`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? '' : 'items-end'} space-y-4`}>
                  <div className="flex items-center gap-4">
                    {index % 2 !== 0 && <div className="h-px w-12 bg-white/10" />}
                    <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase font-bold">Concept / 0{index + 1}</span>
                    {index % 2 === 0 && <div className="h-px w-12 bg-white/10" />}
                  </div>
                  <h3 className="text-3xl md:text-6xl font-serif-sc tracking-widest text-white/90">{p.title}</h3>
                </div>
                
                <div className={`space-y-6 max-w-md ${index % 2 === 0 ? '' : 'text-right'}`}>
                  <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-light font-serif-sc italic">
                    {p.desc}
                  </p>
                  <div className={`h-px w-24 bg-white/5 ${index % 2 === 0 ? '' : 'ml-auto'}`} />
                  <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-medium">
                    Architecting the resonance of existence.
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
