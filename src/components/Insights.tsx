import React from 'react';
import { motion } from 'framer-motion';

const insights = [
  { label: '第二生活崛起', value: '85%', desc: '追求高质量的非日常场域体验' },
  { label: '情绪价值', value: '72%', desc: '空间成为情感与记忆的载体' },
  { label: '疗愈经济', value: '2.4x', desc: '自然共生与精神栖居的刚需化' },
  { label: '长住趋势', value: '60%', desc: '从瞬间打卡转向深度的生命转场' }
];

const Insights: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-8 md:px-16 bg-transparent text-[#d4d4d4]">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-40"
        >
          <div className="lg:col-span-8 space-y-8">
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono">第二卷 / 行业分析 Analysis</span>
            <h2 className="text-4xl md:text-8xl font-serif-sc leading-none text-white/90">
              未来的文旅，是一场生活方式的<br />
              <span className="italic font-light opacity-60">结构性回位。</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-xs md:text-sm tracking-[0.3em] text-white/40 uppercase leading-relaxed border-l border-white/10 pl-8">
              破译从单纯的空间消费，向以人为本的“生活系统”的深刻转变。
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border-y border-white/5">
          {insights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="flex flex-col justify-between min-h-[350px] p-10 md:p-12 hover:bg-white/[0.02] transition-colors group cursor-default"
            >
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase block font-mono">Index / 0{index + 1}</span>
                <h4 className="text-lg tracking-widest text-white/60">{item.label}</h4>
              </div>
              
              <div className="space-y-8">
                <div className="text-6xl md:text-8xl font-serif-sc text-white/90 leading-none">
                  {item.value}
                </div>
                <p className="text-[11px] tracking-[0.2em] text-white/40 leading-relaxed uppercase font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Completely Redesigned Full-Display Section */}
        <div className="mt-64 space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase block font-mono">范式转移 / Axiomatic Shift</span>
              <h3 className="text-3xl md:text-7xl font-serif-sc italic text-white/90 leading-none tracking-tighter">
                从“拥有”到“存在”的转折。
              </h3>
            </motion.div>
            <p className="text-[11px] tracking-[0.3em] text-white/20 uppercase max-w-[280px] leading-loose text-right">
              在时间的建筑中，完成生命存在形式的深刻转场。
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="relative w-full aspect-[21/9] md:aspect-[2.4/1] bg-zinc-950 overflow-hidden"
          >
            <motion.img 
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/IMG_0010.jpg" 
              className="w-full h-full object-cover"
              alt="DAC Light & Shadow"
            />
            {/* Subtle floating overlay to connect visually */}
            <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
              <span className="text-[10px] tracking-[0.5em] text-white/60 uppercase mix-blend-difference">Vessel of Light</span>
              <div className="w-12 h-px bg-white/40 mix-blend-difference" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
