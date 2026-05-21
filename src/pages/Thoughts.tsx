import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { articleData } from './ArticleDetail';

const Thoughts: React.FC = () => {
  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] pt-40 pb-24 px-4 md:px-8 space-y-16 min-h-screen">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-8 md:space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-4 space-y-12">
            <h1 className="text-6xl md:text-8xl font-serif-sc mb-12 tracking-tighter text-white/90">思想与文章</h1>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm font-light">
              记录我们关于文旅、空间、哲学与未来生活方式的零碎思考与深度剖析。
            </p>
            <div className="space-y-6 pt-12 border-t border-white/5">
              {['文旅未来', '空间哲学', '在地文化', '精神消费'].map(tag => (
                <button key={tag} className="block text-[11px] tracking-[0.4em] uppercase text-white/30 hover:text-[#c5a059] transition-colors">
                  # {tag}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-32">
            {articleData.map((article, i) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link to={`/thoughts/${article.id}`}>
                  <span className="text-[10px] font-mono tracking-widest text-white/30 block mb-6">
                    {article.date} — {article.category}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-serif-sc group-hover:italic transition-all duration-700 mb-10 text-white/80 group-hover:text-white leading-tight">
                    {article.title}
                  </h2>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-[#c5a059] transition-all duration-700" />
                    <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/20 group-hover:text-white/60">Read Insight</span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Thoughts;
