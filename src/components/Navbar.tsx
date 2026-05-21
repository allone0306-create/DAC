import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', en: 'Home', path: '/' },
    { name: '在地文化', en: 'Culture', path: '/culture' },
    { name: '生活系统', en: 'Living', path: '/living-system' },
    { name: '案例档案', en: 'Cases', path: '/cases' },
    { name: '未来研究', en: 'Lab', path: '/lab' },
    { name: '长久同行', en: 'Partnership', path: '/partnership' },
    { name: '思想', en: 'Thoughts', path: '/thoughts' },
    { name: '创始人', en: 'Founder', path: '/founder' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 py-5' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 flex justify-between items-center">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="text-2xl md:text-3xl font-semibold tracking-tighter text-white">DAC.</span>
          <span className="text-[10px] tracking-[0.4em] opacity-30 uppercase font-light hidden lg:block">Architecture of Time</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex flex-col group py-2 ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-40 hover:opacity-100'
              } transition-all duration-500`}
            >
              <span className="text-[13px] tracking-[0.1em] font-medium text-white mb-0.5">{link.name}</span>
              <span className="text-[8px] tracking-[0.2em] uppercase font-light text-white/40 group-hover:text-[#c5a059] transition-colors">{link.en}</span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="flex flex-col group py-2 opacity-40 hover:opacity-100 transition-all duration-500"
          >
            <span className="text-[13px] tracking-[0.1em] font-medium text-white mb-0.5">联系我们</span>
            <span className="text-[8px] tracking-[0.2em] uppercase font-light text-white/40 group-hover:text-[#c5a059]">Contact</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0d0d0d] z-40 flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center group"
              >
                <span className="text-2xl tracking-[0.1em] font-medium text-white mb-1">{link.name}</span>
                <span className="text-xs tracking-[0.3em] uppercase font-light text-[#c5a059] opacity-60">{link.en}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex flex-col items-center group pt-10"
            >
              <span className="text-xl tracking-[0.1em] font-medium text-white mb-1">联系我们</span>
              <span className="text-xs tracking-[0.3em] uppercase font-light text-white/30">Contact</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
