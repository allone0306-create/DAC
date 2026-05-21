import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, BarChart3, Globe2, HeartPulse, Zap } from 'lucide-react';

const Whitepaper: React.FC = () => {
  const trends = [
    { 
      title: '趋势一：从“目的地”到“栖息地”', 
      icon: <Globe2 className="w-6 h-6" />,
      desc: '旅游正在失去其“打卡”属性，人们追求的是一种可以无缝切换的生命状态。未来的文旅项目必须具备支撑长期生活的基础设施。' 
    },
    { 
      title: '趋势二：情绪溢价的商业化', 
      icon: <HeartPulse className="w-6 h-6" />,
      desc: '空间的价值不再由每平米造价决定，而由其能产生的“情绪安定感”决定。疗愈将成为未来十年最高溢价的关键词。' 
    },
    { 
      title: '趋势三：数字游民的结构性迁徙', 
      icon: <Zap className="w-6 h-6" />,
      desc: '随着数字化办公的普及，物理坐标的束缚正在解构。拥有高质量自然资源与精神配套的第二空间将成为新的“核心居住区”。' 
    },
    { 
      title: '趋势四：微型文明的重塑', 
      icon: <BookOpen className="w-6 h-6" />,
      desc: '传统的邻里关系正在瓦解，基于共同价值观的“社群生活”将成为人们抵抗城市孤独的核心解决方案。' 
    }
  ];

  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] min-h-screen pt-40 pb-24 px-4 md:px-8 space-y-16">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-8 md:space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.5em] text-black/40 uppercase block">行业权威研究 / Industry Authority</span>
              <h1 className="text-5xl md:text-8xl font-serif-sc leading-tight">
                第二生活<br />
                <span className="italic">白皮书</span>
              </h1>
              <p className="text-xl text-black/60 leading-relaxed font-light max-w-md">
                DAC 未来实验室年度报告：<br />
                解码中国未来十年旅居方式的结构性变革。
              </p>
            </div>

            <div className="bg-black text-white p-12 space-y-8">
              <h3 className="text-2xl font-serif-sc tracking-widest">“未来的文旅，本质上是一场关于人类如何重新夺回生活权的实验。”</h3>
              <div className="w-12 h-px bg-white/30" />
              <p className="text-white/50 text-sm leading-relaxed">
                本白皮书基于 100,000+ 高净值人群样本数据，深度还原了城市中产阶级在后效率时代的真实精神渴求。
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 space-y-12 pt-12"
          >
            <div className="grid grid-cols-2 gap-12 border-b border-black/5 pb-12">
              <div>
                <BarChart3 className="mb-4 text-black/20" />
                <div className="text-4xl font-serif-sc mb-2">85%</div>
                <p className="text-[10px] tracking-widest text-black/40 uppercase">长住意向增长率</p>
              </div>
              <div>
                <BarChart3 className="mb-4 text-black/20" />
                <div className="text-4xl font-serif-sc mb-2">2.4x</div>
                <p className="text-[10px] tracking-widest text-black/40 uppercase">精神消费溢价倍数</p>
              </div>
            </div>

            <div className="space-y-16">
               {trends.map((trend, i) => (
                 <div key={i} className="group cursor-default">
                   <div className="flex items-center gap-6 mb-6">
                     <div className="text-black/10 group-hover:text-black transition-colors duration-500">
                       {trend.icon}
                     </div>
                     <h3 className="text-xl font-serif-sc group-hover:translate-x-2 transition-transform duration-500">{trend.title}</h3>
                   </div>
                   <p className="text-black/50 leading-relaxed text-sm pl-12 border-l border-black/5 group-hover:border-black transition-colors">
                     {trend.desc}
                   </p>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Conclusion / CTA */}
        <section className="mt-40 pt-24 border-t border-black/10 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif-sc tracking-widest italic text-black/80">重新定义，重新生活。</h2>
          <p className="text-black/40 max-w-2xl mx-auto text-lg leading-relaxed">
            我们不仅仅是在记录趋势，我们是在参与趋势。DAC 正在将白皮书中的每一项研究，转化为真实的物理场域与生活系统。
          </p>
          <div className="pt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase px-12 py-4 border border-black hover:bg-black hover:text-white transition-all group"
            >
              获取完整版报告 (PDF) <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
      </div>
    </main>
  );
};

export default Whitepaper;
