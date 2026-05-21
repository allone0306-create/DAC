import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessModel: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-zinc-100 text-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-xs tracking-[0.3em] text-black/40 uppercase mb-4 block">New Business Logic</span>
          <h2 className="text-4xl md:text-6xl font-serif-sc leading-tight">
            我们不是一次性交付，<br />
            而是长期共生。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Traditional Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-white border border-black/5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-serif-sc mb-10 tracking-widest opacity-60">传统设计/顾问公司</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-black/40">
                  <XCircle size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black/60">一次性交付</p>
                    <p className="text-sm">项目验收即为合作终结，无法应对市场变化</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-black/40">
                  <XCircle size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black/60">设计收费制</p>
                    <p className="text-sm">仅对设计负责，不对商业结果和运营效率负责</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-black/40">
                  <XCircle size={20} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-black/60">内容断层</p>
                    <p className="text-sm">空间、品牌、运营各行其是，缺乏系统性灵魂</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-black/5 italic text-black/30 text-sm">
              短期交付，长期迷茫
            </div>
          </motion.div>

          {/* DAC Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-black text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle2 size={120} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-xl font-serif-sc mb-10 tracking-widest">DAC 长期陪跑模式</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0 text-white" />
                  <div>
                    <p className="font-medium">长期陪跑</p>
                    <p className="text-sm text-white/60">深度参与全生命周期，持续优化生活系统内容</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0 text-white" />
                  <div>
                    <p className="font-medium">利益共同体</p>
                    <p className="text-sm text-white/60">营业额绑定，将我们的专业度直接转化为增长</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0 text-white" />
                  <div>
                    <p className="font-medium">七折进场 + 营业额分成</p>
                    <p className="text-sm text-white/60">降低初期门槛，以结果驱动长期合作价值</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-12 relative z-10">
              <Link to="/partnership" className="flex items-center gap-3 text-sm tracking-widest group">
                了解合作模式 <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
