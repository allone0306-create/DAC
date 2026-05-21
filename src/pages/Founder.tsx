import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <main className="bg-[#0a0a0a] text-[#a3a3a3] pt-40 pb-24 px-8 md:px-16">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="lg:sticky lg:top-40 aspect-[3/4] overflow-hidden bg-zinc-950 shadow-2xl border border-white/5 group mb-8 lg:mb-0"
        >
          <img 
            src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/DAC%20Office/7976446a6868fab1ddec02c021c2075e.jpg" 
            alt="Founder 未山"
            loading="lazy"
            className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:brightness-110 transition-all duration-1000 scale-[1.02] group-hover:scale-100"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
        </motion.div>

        {/* Content Section */}
        <div className="space-y-16 lg:space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-serif-sc">未山 / Wei Shan</span>
              <div className="w-12 h-px bg-white/20" />
              <span className="text-xs tracking-[0.4em] text-white/40 uppercase">达成文化创始人 / Founder of DAC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif-sc leading-tight italic">
              “人们不是在逃离城市，<br />
              而是在寻找真正的自我。”
            </h1>
          </motion.div>
          
          <div className="space-y-12 text-lg text-white/60 leading-relaxed font-light">
            <p>
              在创立达成文化之前，我们一直在思考：为什么现代人拥有了越来越多的空间，却感到越来越孤独？
            </p>
            <p>
              传统的房地产和文旅开发，往往关注的是物理载体的建设，而忽略了载体之内的“生命系统”。
              我们追求的不是华丽的吊灯或昂贵的大理石，而是清晨的第一缕光如何穿过竹林，
              是傍晚时分那一碗热茶带给人的安定感。
            </p>
            <p className="text-white text-xl">
              DAC的使命，就是为这些迷失在效率时代的灵魂，提供一套完整的“第二生活系统”。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/10">
            <div>
              <span className="text-xs tracking-widest text-white/30 uppercase mb-4 block">核心关怀</span>
              <p className="text-sm">人与自然的握手言和</p>
            </div>
            <div>
              <span className="text-xs tracking-widest text-white/30 uppercase mb-4 block">设计哲学 / Philosophy</span>
              <div className="space-y-4">
                <p className="text-sm">克制的介入，深度的叙事</p>
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <p className="text-base font-serif-sc text-white/80 leading-relaxed">
                    “场域，时间的容器，生活，自然的回音”
                  </p>
                  <p className="text-[9px] tracking-[0.2em] text-white/20 uppercase leading-relaxed">
                    A site is a vessel of time, living is the resonance of nature
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Founder;
