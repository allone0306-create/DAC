import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Footer: React.FC = () => {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <footer className="bg-[#f7f6f2] pt-24 pb-12 px-6 md:px-12 border-t border-black/5 relative text-black">
      <AnimatePresence>
        {showWeChat && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setShowWeChat(false)}
          >
            <motion.div 
              className="bg-white p-12 max-w-sm w-full text-center space-y-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowWeChat(false)}
                className="absolute top-4 right-4 text-black/20 hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
              <div className="space-y-2">
                <h4 className="text-xl text-black font-serif-sc tracking-widest">微信联系 DAC</h4>
                <p className="text-[10px] text-black/40 uppercase tracking-widest">Scan to connect with our team</p>
              </div>
              <div className="aspect-square bg-zinc-50 flex items-center justify-center border border-black/5 p-4">
                <img 
                  src="https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/erweima.png" 
                  alt="DAC WeChat Public Account QR"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-black/60 leading-relaxed font-light">
                长按识别二维码或微信搜索公众号<br />
                <span className="font-bold text-black tracking-widest uppercase">DAC FUTURE</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold tracking-[-0.02em] leading-none text-black">DAC</span>
                <span className="text-[9px] font-serif-sc tracking-[0.35em] mt-2.5 whitespace-nowrap text-black/60">达成文化</span>
              </div>
              <div className="h-10 w-px bg-black/10" />
              <div className="flex flex-col justify-center gap-2">
                <span className="text-[8px] tracking-[0.4em] font-light leading-none opacity-30 uppercase text-black">
                  Design · Art · Culture
                </span>
                <span className="text-[9px] font-serif-sc tracking-[0.45em] text-[#c5a059] whitespace-nowrap">
                  达于心 <span className="text-black/5 mx-0.5">·</span> 成于行
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-black/60 max-w-sm leading-relaxed text-sm font-light">
                  我们不是在设计房子，而是在为人类寻找另一种可能的生活方式。让灵魂在自然与在地文化中，找到归处。
                </p>
                <p className="text-[10px] tracking-[0.2em] text-black/30 uppercase leading-relaxed max-w-sm">
                  We are not merely designing structures; we are architecting the secondary systems of existence.
                </p>
              </div>
              <div className="pt-6 border-t border-black/5 flex flex-col gap-2">
                <p className="text-[11px] font-serif-sc tracking-widest text-black/40 italic">
                  “场域，时间的容器，生活，自然的回音”
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-center pt-4">
              <button 
                onClick={() => setShowWeChat(true)}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm">
                  <MessageSquare size={16} />
                </div>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase opacity-30 text-black font-bold">探索 / Explore</h4>
            <ul className="space-y-4 text-[13px] text-black/50">
              <li><Link to="/living-system" className="hover:text-black transition-colors tracking-widest">第二生活系统</Link></li>
              <li><Link to="/partnership" className="hover:text-black transition-colors tracking-widest">长期陪跑模式</Link></li>
              <li><Link to="/lab" className="hover:text-black transition-colors tracking-widest">未来研究院</Link></li>
              <li><Link to="/whitepaper" className="hover:text-black transition-colors tracking-widest">第二生活白皮书</Link></li>
              <li><Link to="/thoughts" className="hover:text-black transition-colors tracking-widest">思想与文章</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase opacity-30 text-black font-bold">联络 / Contact</h4>
            <ul className="space-y-4 text-sm text-black/60">
              <li className="flex items-center gap-3"><Mail size={14} className="opacity-30" /> allone0306@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={14} className="opacity-30" /> 189 8399 8662</li>
              <li className="flex items-center gap-3"><MapPin size={14} className="opacity-30" /> 中国 · 重庆 · 两江新区</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.5em] text-black/30 uppercase font-medium">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p>© 2026 DAC DESIGN ART CULTURE.</p>
            <p className="opacity-50">Architecting Future Living Systems</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
