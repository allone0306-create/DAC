import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const services = [
  { 
    id: 'A', 
    title: '在地文化研究', 
    desc: '地域精神内核的挖掘与IP转化',
    detail: '深入土地的微观生活史，通过田野调查、县志考究与非遗访谈，建立地域文化基因库。我们将破碎的文化符号转译为具备商业溢价的精神资产，为项目注入独一无二的灵魂内核。'
  },
  { 
    id: 'B', 
    title: '文旅策划规划', 
    desc: '以生活方式为导向的顶层设计',
    detail: '拒绝同质化的开发逻辑。我们从未来的生活需求出发，进行顶层战略设计与产品业态规划。通过对人流、物流与情绪流的精密推演，构建具备自生长能力的文旅场域系统。'
  },
  { 
    id: 'C', 
    title: '空间场域设计', 
    desc: '构建具有情绪感染力的建筑空间',
    detail: '建筑是情绪的容器。我们关注光影的流转、材料的触感与空间的开合，通过克制而精准的介入，让物理空间产生情感共鸣。从建筑方案到室内陈设，实现全维度的叙事表达。'
  },
  { 
    id: 'D', 
    title: '艺术软装系统', 
    desc: '艺术介入生活系统的完整叙事',
    detail: '艺术不是点缀，而是空间的灵魂。我们通过艺术品的系统化策划与陈设，在日常场景中构建艺术化的生活触点。让艺术回归生活，让居住成为一场永不落幕的感官实验。'
  },
  { 
    id: 'E', 
    title: '品牌视觉系统', 
    desc: '数字化时代的审美表达与连接',
    detail: '基于互联网传播逻辑与当代审美高度，构建完整的视觉识别系统。从Logo设计到数字化界面，我们为项目建立一套具备强识别性与美学认同感的品牌语言。'
  },
  { 
    id: 'F', 
    title: '内容运营系统', 
    desc: '构建人与空间发生连接的活动机制',
    detail: '空间交付仅是开始，内容的持续生长才是核心。我们通过策划高品质的艺术展览、文化沙龙与生活方式活动，建立紧密的社群粘性，让空间成为活性的能量中心。'
  },
  { 
    id: 'G', 
    title: '长期运营陪跑', 
    desc: '专业团队持续在场的资产增值',
    detail: '以利益共同体模式深度介入项目运营。通过持续的数据优化、内容迭代与专业团队陪跑，确保项目资产的长期溢价与品牌生命力的持续生长。'
  },
  { 
    id: 'H', 
    title: '未来生活系统', 
    desc: '构建完整的、可持续生长的第二人生',
    detail: '定义未来旅居的新标准。我们将文化、艺术、健康与社群高度整合，构建一套完整的“第二生活”配套体系。为现代精英阶层提供一套可以脱离城市压力的精神栖居系统。'
  }
];

const ServiceMap: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  // Group services into logic phases
  const phases = [
    { name: 'Research / 研究', services: [0, 1] },
    { name: 'Creation / 创作', services: [2, 3] },
    { name: 'Identity / 认同', services: [4, 5] },
    { name: 'Symbiosis / 共生', services: [6, 7] }
  ];

  return (
    <section className="py-40 md:py-64 bg-[#0a0a0a] overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <span className="text-[9px] tracking-[0.6em] text-white/30 uppercase mb-8 block font-mono">第四卷 / 服务体系 System System</span>
            <h2 className="text-4xl md:text-8xl font-serif-sc leading-none text-white/90">
              从研究到运营的<br />
              <span className="italic font-light opacity-40">全链条闭环.</span>
            </h2>
          </motion.div>
          <div className="lg:col-span-4 border-l border-white/10 pl-8 text-[#a3a3a3]">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase leading-relaxed max-w-xs">
              通过模块化整合，构建超越物理边界的生命系统。
            </p>
          </div>
        </div>

        {/* System Diagram Layout - Responsive optimized */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {phases.map((phase) => (
            <div key={phase.name} className="relative flex flex-col group/phase">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] tracking-[0.6em] text-white/30 uppercase p-10 border-b border-white/5"
              >
                {phase.name}
              </motion.div>

              <div className="flex-1 flex flex-col">
                {phase.services.map((sIndex) => (
                  <motion.div
                    key={services[sIndex].id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIndex * 0.05 }}
                    onClick={() => setActiveService(sIndex)}
                    className="flex-1 p-10 md:p-12 hover:bg-white transition-colors cursor-pointer group/item border-b border-white/5 last:border-b-0 relative overflow-hidden"
                  >
                    <div className="flex flex-col justify-between h-full space-y-12 text-white">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-mono opacity-20 group-hover/item:opacity-100 group-hover/item:text-[#c5a059] transition-all tracking-widest">{services[sIndex].id}</span>
                        <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover/item:opacity-100 group-hover/item:border-[#c5a059]/40 transition-all duration-700">
                          <span className="text-[#c5a059]">+</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <h3 className="text-xl font-serif-sc tracking-widest opacity-80 group-hover/item:opacity-100 group-hover/item:italic transition-all duration-500">
                          {services[sIndex].title}
                        </h3>
                        <p className="text-[10px] tracking-[0.3em] opacity-40 uppercase leading-relaxed group-hover/item:opacity-60 transition-opacity">
                          {services[sIndex].desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Narrative */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-64 flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="space-y-8 max-w-2xl">
            <div className="w-16 h-px bg-white/20" />
            <p className="text-3xl md:text-5xl font-serif-sc italic text-white/90 leading-tight">
              从考古到运营，我们构建的是一个会呼吸的生命闭环。
            </p>
          </div>
          <p className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-mono">
            / Total System Logic
          </p>
        </motion.div>
      </div>

      {/* Expanded Overlay */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`service-${activeService}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 p-8 md:p-16 max-w-2xl w-full relative z-10"
            >
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.4em] text-white/30 uppercase font-mono">
                    System / 0{activeService + 1}
                  </span>
                  <div className="h-px w-12 bg-white/10" />
                </div>

                <h3 className="text-3xl md:text-5xl font-serif-sc tracking-widest">
                  {services[activeService].title}
                </h3>

                <p className="text-xl text-white/80 leading-relaxed font-light font-serif-sc italic">
                  “{services[activeService].desc}”
                </p>

                <div className="h-px w-full bg-white/5" />

                <p className="text-white/50 leading-relaxed text-lg font-light">
                  {services[activeService].detail}
                </p>

                <div className="pt-8 flex justify-end">
                  <button 
                    onClick={() => setActiveService(null)}
                    className="text-[10px] tracking-[0.4em] uppercase border border-white/10 px-8 py-3 hover:bg-white hover:text-black transition-all"
                  >
                    Close Discovery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServiceMap;
