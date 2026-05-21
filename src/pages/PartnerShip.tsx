import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, Zap, Calendar, Award } from 'lucide-react';
import ServiceMap from '../components/ServiceMap';

const PartnerShip: React.FC = () => {
  const [activePillar, setActivePillar] = React.useState<number | null>(null);

  const steps = [
    { 
      title: '在地文化转译', 
      desc: '深度调研土地内核，构建独特的精神IP系统。通过对在地材料、光影与习俗的考古，为项目注入差异化的灵魂。', 
      icon: <Users className="w-6 h-6" />,
      detail: '我们的工作从“土地考古”开始。调研团队深入县志与民俗，输出详尽的《在地文化白皮书》。我们拒绝平庸的复制，而是通过对材料质感、地域光影的当代转译，奠定项目的差异化根基，让空间拥有可以被阅读的故事。'
    },
    { 
      title: '空间场域构建', 
      desc: '以生活方式为导向，打造具备情绪溢价的物理空间。我们关注的是“在此刻如何度过时间”，而不仅仅是视觉的堆砌。', 
      icon: <Zap className="w-6 h-6" />,
      detail: '我们设计的不只是建筑，而是“如何度过时间”。从空间、视觉到内容全维度整合，确保每一处动线都服务于生活方式的展开。通过对非日常场域的极致塑造，构建具备情绪感染力的物理载体。'
    },
    { 
      title: '内容运营导入', 
      desc: '植入持续生长的生活内容，建立社群粘性。从艺术沙龙、在地市集到康养工坊，让场域保持持久的鲜活度。', 
      icon: <Calendar className="w-6 h-6" />,
      detail: '开业前进行系统的监理与团队培训，开业后实施季度稽查与月度内容更新。我们建立数据复盘机制，根据客户反馈动态调整运营模块（如在地市集、艺术展览等），确保场域灵魂持续生长，保持高复购率。'
    },
    { 
      title: '长期资产增值', 
      desc: '通过持续优化与品牌溢价，实现资产的长期稳健增长。我们将运营数据转化为空间进化的驱动力，实现全生命周期管理。', 
      icon: <Award className="w-6 h-6" />,
      detail: '我们将我们的利益与项目的营业额深度绑定。通过持续的品牌溢价管理和运营效能优化，服务项目营业额平均增长达 30%-50%。我们致力于成为投资人的长期伙伴，实现资产的全生命周期稳健增值。'
    }
  ];

  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] min-h-screen pt-40 pb-24 px-4 md:px-8 space-y-16">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-8 md:space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-64 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="lg:col-span-8 space-y-16"
            >
              <div className="space-y-12">
              <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-mono block">战略伙伴关系 / Strategic Partnership</span>
              <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-serif-sc leading-none text-white/90 tracking-tighter">
                长久同行
              </h1>
              </div>
              
              <div className="max-w-2xl space-y-12 text-lg md:text-2xl text-white/50 leading-relaxed font-light">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="text-white/80 italic font-serif-sc"
                >
                  “一种新型的商业文明。”
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                >
                  在传统的文旅开发中，设计、建设与运营往往是脱节的断层。DAC 提出的“长久同行”模式，旨在打破这种割裂。
                </motion.p>
              </div>
            </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="lg:col-span-4 border-l border-white/5 pl-12 pt-48 space-y-16"
          >
            <div className="space-y-6">
               <div className="text-6xl font-serif-sc text-white/20 italic">01</div>
               <h3 className="text-xl tracking-widest text-white/80">七折进场</h3>
               <p className="text-sm text-white/30 leading-loose tracking-widest">大幅降低前期咨询与设计门槛，体现我们对项目成功的长期信心与承诺。</p>
            </div>
            <div className="space-y-6">
               <div className="text-6xl font-serif-sc text-white/20 italic">02</div>
               <h3 className="text-xl tracking-widest text-white/80">收益分成</h3>
               <p className="text-sm text-white/30 leading-loose tracking-widest">利益深度对齐，将传统的“甲乙供需”关系转化为共生共荣的“命运共同体”。</p>
            </div>
          </motion.div>
          </div>

          {/* Pillars - Interative */}
          <div className="mb-64">
            <div className="flex items-center gap-12 mb-32">
               <h2 className="text-3xl md:text-6xl font-serif-sc text-white/90">长久同行模式的四大支柱</h2>
               <div className="flex-1 h-px bg-white/5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActivePillar(activePillar === i ? null : i)}
                  className={`p-12 border border-white/5 bg-[#121212]/40 hover:bg-white transition-all group relative cursor-pointer overflow-hidden ${
                    activePillar === i ? 'h-auto ring-1 ring-[#c5a059]/40 bg-white' : 'aspect-square flex flex-col justify-between'
                  }`}
                >
                  <div className={`absolute top-0 right-0 p-8 text-8 font-serif-sc pointer-events-none transition-all duration-700 ${activePillar === i ? 'text-black/5 opacity-100 scale-150' : 'text-white/5 opacity-20'}`}>
                    0{i + 1}
                  </div>

                  <div className="space-y-8 relative z-10">
                    <div className={`transition-colors duration-500 ${activePillar === i ? 'text-[#c5a059]' : 'text-white/20 group-hover:text-black/40'}`}>
                      {step.icon}
                    </div>
                    <div className="space-y-6">
                      <h4 className={`text-xl font-serif-sc transition-colors duration-500 ${activePillar === i ? 'text-black font-bold' : 'text-white/90 group-hover:text-black'}`}>{step.title}</h4>
                      <p className={`text-[11px] leading-relaxed uppercase tracking-widest font-medium transition-all duration-500 ${activePillar === i ? 'text-black/60' : 'text-white/30 group-hover:text-black/40'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {activePillar === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 pt-8 border-t border-black/5 relative z-10"
                      >
                        <p className="text-sm md:text-lg text-black/70 leading-relaxed font-light font-serif-sc italic">
                          {step.detail}
                        </p>
                        <div className="mt-12 flex justify-end">
                           <span className="text-[9px] tracking-[0.4em] text-[#c5a059] uppercase font-bold">执行阶段 / 战略布局 / 0{i + 1}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className={`mt-auto pt-8 flex items-center gap-4 transition-all duration-500 ${activePillar === i ? 'opacity-0' : 'opacity-100'}`}>
                     <div className="w-8 h-px bg-white/10 group-hover:bg-black/20 group-hover:w-12 transition-all duration-700" />
                     <span className="text-[9px] tracking-[0.3em] text-white/20 uppercase group-hover:text-black/40">展开详情 / Details</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        {/* Comparison Section */}
        <div className="bg-white text-black p-16 md:p-32 mb-64 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 text-[15rem] font-bold opacity-[0.03] select-none">VS</div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-32">
            <div className="space-y-12">
              <span className="text-[10px] tracking-[0.6em] opacity-30 uppercase font-mono">传统模式 / Traditional</span>
              <h3 className="text-3xl font-serif-sc opacity-60">设计/顾问公司</h3>
              <ul className="space-y-8">
                {['设计与运营脱节', '交付即终结，无人对增长负责', '内容老化快，缺乏生命力'].map(item => (
                   <li key={item} className="flex items-center gap-4 text-sm opacity-40">
                     <div className="w-1.5 h-1.5 rounded-full border border-black/20" />
                     {item}
                   </li>
                ))}
              </ul>
            </div>
            <div className="space-y-12">
              <span className="text-[10px] tracking-[0.6em] font-bold uppercase font-mono">DAC 共生模式 / DAC Symbiosis</span>
              <h3 className="text-3xl font-serif-sc">长久同行模式</h3>
              <ul className="space-y-8">
                {[
                  '全生命周期参与，设计服务于运营', 
                  '利益深度绑定，专家团队持续在线', 
                  '内容季度更新，保持场域灵魂鲜活'
                ].map(item => (
                   <li key={item} className="flex items-center gap-4 text-sm font-medium">
                     <CheckCircle2 size={16} className="text-black" />
                     {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ServiceMap />

        {/* CTA */}
        <div className="text-center py-64 border-t border-black/5">
          <TrendingUp className="mx-auto mb-12 opacity-10 w-24 h-24 text-black" />
          <h2 className="text-4xl md:text-8xl font-serif-sc mb-24 tracking-tighter opacity-90 text-black">开启您的第二生活系统构建</h2>
          <Link 
            to="/contact" 
            className="inline-block px-24 py-6 border border-black/20 text-black text-[11px] tracking-[0.5em] uppercase hover:bg-black hover:text-white transition-all font-bold"
          >
            申请合作洽谈 / Apply for Cooperation
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
};

export default PartnerShip;
