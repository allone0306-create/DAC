import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { reportData } from './ReportDetail';

const FutureLab: React.FC = () => {
  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] pt-40 pb-24 px-4 md:px-8 space-y-16 min-h-screen">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-8 md:space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="w-12 h-px bg-[#c5a059] mb-4" />
                <span className="text-[10px] tracking-[0.6em] text-[#c5a059] uppercase font-bold block">Intelligence Platform</span>
                <h1 className="text-5xl md:text-8xl font-serif-sc leading-none text-white/90 tracking-tighter">
                  未来研究院
                </h1>
              </div>
              <p className="text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-sm">
                通过对社会学、美学与商业趋势的交叉研究，我们为文旅行业提供具有前瞻性的思想补给。
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 border-l border-white/5 pl-0 md:pl-16 space-y-12">
             {reportData.map((report, i) => (
               <Link 
                 key={report.id}
                 to={`/lab/${report.id}`}
                 className="block"
               >
                 <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group cursor-pointer py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-6"
                 >
                   <div className="space-y-3">
                     <span className="text-[10px] tracking-widest text-white/20 font-mono block">{report.year} / {report.category}</span>
                     <h3 className="text-2xl md:text-3xl font-serif-sc group-hover:text-[#c5a059] transition-colors text-white/80">{report.title}</h3>
                   </div>
                   <div className="text-[10px] tracking-[0.3em] uppercase border border-white/10 px-6 py-2 group-hover:bg-white group-hover:text-black transition-all self-start md:self-center">
                     Read Report
                   </div>
                 </motion.div>
               </Link>
             ))}
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-16 md:p-32 text-center space-y-10 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 text-[10rem] font-serif-sc font-bold opacity-[0.02] select-none">“</div>
           <h2 className="text-3xl md:text-5xl font-serif-sc italic text-white/90">“数据是冷的，但生活是有温度的。”</h2>
           <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
             我们拒绝平庸的商业报告。这里的每一份研究都建立在对土地的真实热爱和对人性的深刻观察之上。
           </p>
        </div>
      </div>
      </div>
    </main>
  );
};

export default FutureLab;
