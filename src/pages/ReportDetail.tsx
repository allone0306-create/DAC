import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, BookOpen } from 'lucide-react';

export const reportData = [
  {
    id: 'industry-migration-2024',
    year: '2024',
    category: '行业趋势',
    title: '中国文旅行业：从住宿到生活方式的结构性迁徙',
    author: 'DAC 未来实验室',
    summary: '本报告深入探讨了中国文旅市场在后疫情时代的底层逻辑变化，分析了消费者如何从简单的“目的地打卡”转向追求“完整的第二生活系统”。',
    content: `
      <h3>01 范式转移：从空间消费到时间消费</h3>
      <p>传统的文旅开发逻辑是基于“空间”的，即如何通过华丽的硬件吸引游客。然而，新一代消费者更关注的是在特定空间内“如何度过时间”。这意味着，运营内容和生活方式的构建，其重要性已全面超越物理建筑本身。</p>
      
      <h3>02 “第二生活”的崛起</h3>
      <p>随着数字化办公的普及，城市精英阶层正在寻找一种“介于城市与荒野之间”的长期栖息地。这不再是单纯的度假需求，而是一种结构性的迁徙——在自然中寻找工作的灵感与生活的平衡。</p>
      
      <h3>03 商业模型：从交易到共生</h3>
      <p>报告指出，未来成功的文旅项目将不再是卖掉客房或门票，而是通过构建一个高度粘性的生活社群，实现长期的价值共生。这正是 DAC 提出的“长期陪跑模式”的社会学基础。</p>
    `,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: '市场增长率', value: '+24%' },
      { label: '长住意向', value: '68%' },
      { label: '情绪溢价', value: '45%' }
    ]
  },
  {
    id: 'escapees-atlas-2023',
    year: '2023',
    category: '用户研究',
    title: '第二生活空间白皮书：城市逃离者的精神图谱',
    author: 'DAC 未来实验室',
    summary: '通过对10,000名高净值人群的深度调研，我们勾勒出了当代“城市逃离者”的真实心理动机：他们逃离的不是城市，而是异化。',
    content: `
      <h3>精神母题：回归与重建</h3>
      <p>调研发现，超过72%的受访者表示，他们追求的第二生活空间必须具备“精神锚点”的功能。这包括在地文化的深度参与、自然的物理接触以及有质量的社交连接。</p>
      
      <h3>女性消费者的主导地位</h3>
      <p>在“疗愈经济”驱动下，女性在第二生活空间的选址和内容决策中拥有超过80%的话语权。空间的情绪感、安全性与美学高度是其核心考量标准。</p>
    `,
    image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: '调研样本', value: '10k+' },
      { label: '核心受众', value: '25-45' },
      { label: '疗愈偏好', value: '92%' }
    ]
  },
  {
    id: 'culture-model-2023',
    year: '2023',
    category: '商业逻辑',
    title: '在地文化的商业转化率模型：山西窑洞案例研究',
    author: 'DAC 未来实验室',
    summary: '以山西窑洞项目为样本，通过数据建模分析了如何将沉睡的乡土资源转化为具备全球吸引力的文旅资产。',
    content: `
      <h3>转译：从符号到体验</h3>
      <p>在地文化不应只是装饰。在山西项目中，我们通过研究窑洞的恒温逻辑，将其转化为一种“地层下的疗愈空间”，并结合黄土高原的粗犷美学，构建了独特的客单价溢价体系。</p>
      
      <h3>回报模型</h3>
      <p>数据显示，深度整合了在地文化叙事的项目，其平均停留时间比传统民宿高出1.8倍，非房费收入占比提升了30%。</p>
    `,
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: '停留时间', value: '3.2d' },
      { label: '非房占比', value: '42%' },
      { label: '复购率', value: '15%' }
    ]
  },
  {
    id: 'modular-future-2022',
    year: '2022',
    category: '空间研究',
    title: '未来旅居：长住化趋势下的空间模块化设计',
    author: 'DAC 未来实验室',
    summary: '预测了未来十年旅居空间的设计范式转变：从标准化客房转向具备“办公-生活-社交”复合功能的模块化系统。',
    content: `
      <h3>弹性空间：流动的边界</h3>
      <p>未来的长住空间需要能够适应不同的生活场景。通过模块化设计，一个房间可以在工作模式、冥想模式和社交模式之间快速切换。</p>
      
      <h3>工业化与定制化的平衡</h3>
      <p>利用预制件技术缩短施工周期的同时，通过在地材料的皮肤化处理，保证每一个空间依然拥有其独特的“土地灵魂”。</p>
    `,
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { label: '成本缩减', value: '20%' },
      { label: '施工周期', value: '-40%' },
      { label: '灵活性', value: 'High' }
    ]
  }
];

const ReportDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const report = reportData.find(r => r.id === id);

  if (!report) return <div className="pt-40 text-center">报告未找到</div>;

  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen">
      {/* Header Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img src={report.image} alt={report.title} className="w-full h-full object-cover brightness-75" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-40">{report.year}</span>
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-white/60">{report.category}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-4xl md:text-6xl font-serif-sc leading-tight mb-8"
          >
            {report.title}
          </motion.h1>
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1 }}
             className="flex items-center justify-center gap-8"
          >
            <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase hover:text-white/60 transition-colors">
              <Download size={14} /> Download PDF
            </button>
            <button className="flex items-center gap-2 text-[10px] tracking-widest uppercase hover:text-white/60 transition-colors">
              <Share2 size={14} /> Share
            </button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              <div className="p-8 border border-white/5 bg-white/[0.02]">
                <h4 className="text-[10px] tracking-[0.4em] uppercase opacity-40 mb-6">核心指标 / Stats</h4>
                <div className="space-y-8">
                  {report.stats.map(stat => (
                    <div key={stat.label}>
                      <div className="text-3xl font-serif-sc mb-1">{stat.value}</div>
                      <div className="text-[10px] tracking-widest text-white/30 uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/lab" className="flex items-center gap-4 text-[10px] tracking-widest uppercase group">
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Lab
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="mb-16 p-8 border-l-2 border-white/10 italic text-xl text-white/60 font-light leading-relaxed">
                {report.summary}
              </div>
              
              <div 
                className="report-content space-y-12 text-white/70 leading-relaxed font-light"
                dangerouslySetInnerHTML={{ __html: report.content }}
              />
            </div>
            
            <div className="mt-24 pt-12 border-t border-white/5">
              <div className="flex items-center gap-4 mb-12">
                <BookOpen size={20} className="opacity-40" />
                <h4 className="text-xs tracking-widest uppercase">作者: {report.author}</h4>
              </div>
              <p className="text-xs text-white/30 leading-relaxed max-w-lg">
                © DAC Future Lab. 本报告版权归达成文化未来研究院所有。未经书面许可，不得以任何形式转载或用于商业用途。数据采集于 2022-2024 年 DAC 在线调研系统及行业公开数据。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReportDetail;
