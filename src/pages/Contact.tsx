import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] min-h-screen pt-40 pb-24 px-4 md:px-8 flex items-center">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto w-full">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          {/* Left Side: Text & Manifesto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-8xl font-serif-sc leading-none">
                联系我们
              </h1>
              <div className="w-12 h-px bg-white/20" />
              <p className="text-xl text-white/60 leading-relaxed font-light font-serif-sc italic">
                “场域，时间的容器，<br />
                生活，自然的回音”
              </p>
            </div>

            <div className="space-y-10 pt-8 border-t border-white/5">
              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">电话 / Phone</p>
                <p className="text-2xl md:text-3xl tracking-wider group-hover:translate-x-2 transition-transform duration-500">189 8399 8662</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">邮箱 / Email</p>
                <p className="text-2xl md:text-3xl tracking-wider group-hover:translate-x-2 transition-transform duration-500 lowercase">allone0306@gmail.com</p>
              </div>

              <div className="group cursor-pointer">
                <p className="text-[9px] tracking-[0.4em] text-white/20 uppercase mb-2 group-hover:text-white/40 transition-colors">地址 / Address</p>
                <p className="text-2xl md:text-3xl tracking-wider font-serif-sc group-hover:translate-x-2 transition-transform duration-500">中国 · 重庆 · 两江新区</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Matrix & QR */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#0a0a0a] border border-white/5 p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <Globe size={400} />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="space-y-10 text-center group max-w-xs w-full">
                  <div className="aspect-square bg-white p-8 relative overflow-hidden shadow-2xl">
                    <img 
                      src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png" 
                      alt="DAC WeChat Public Account"
                      className="w-full h-full object-contain relative z-10"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-serif-sc tracking-[0.2em]">官方公众号</h4>
                    <p className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase font-bold">扫码关注达成文化 / Scan to Follow DAC</p>
                    <div className="w-12 h-px bg-white/10 mx-auto mt-6" />
                  </div>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-end">
                <div className="flex gap-4">
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                   <div className="w-1 h-1 bg-white/40 rounded-full" />
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Contact;
