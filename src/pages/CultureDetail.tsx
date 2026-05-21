import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { cultureData } from './CultureResearch';
import { ArrowLeft } from 'lucide-react';

const CultureDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = cultureData.find(c => c.id === id);

  if (!data) return <div className="pt-40 text-center">内容不存在</div>;

  return (
    <main className="bg-black text-white min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-[60vh] relative overflow-hidden"
      >
        <img 
          src={data.img} 
          alt={data.title}
          className="w-full h-full object-cover brightness-75 hover:brightness-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-20 relative -mt-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0a] border border-white/5 p-12 md:p-20 shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase">{data.region}</span>
            <div className="w-8 h-px bg-white/10" />
            <div className="flex gap-4">
              {data.tags.map(tag => (
                <span key={tag} className="text-[10px] text-white/20 uppercase tracking-tighter">#{tag}</span>
              ))}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif-sc leading-tight mb-16">
            {data.title}
          </h1>

          <div 
            className="prose prose-invert prose-zinc max-w-none text-white/60 leading-relaxed font-light space-y-8 culture-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />

          <div className="mt-24 pt-12 border-t border-white/5">
            <Link to="/culture" className="text-xs tracking-widest uppercase flex items-center gap-2 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Database
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CultureDetail;
