import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
  { cn: '全部', en: 'All' },
  { cn: '乡村', en: 'Rural' },
  { cn: '酒店', en: 'Hotel' },
  { cn: '文旅', en: 'Culture' },
  { cn: '私宅', en: 'Private' }
];

const cases = [
  { 
    id: 2, 
    title: '重庆美利亚', 
    en: 'Melia Chongqing',
    type: '酒店',
    category: '度假酒店 / Resort', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/1.jpg',
    designerView: '山城重庆的复杂地形是设计的起点。我们采用了“消隐”的策略，让建筑顺应山势坡度，仿佛是从崖壁中自然生长出来的。通过大量的灰空间设计，我们将江雾与山风引入室内，实现了一种与大地共呼吸的居住体感。'
  },
  { 
    id: 3, 
    title: '山西芃篱人家', 
    en: 'Shanxi Pengli Home',
    type: '乡村',
    category: '精品民宿 / B&B', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/%E8%A7%84%E5%88%92%E8%8D%89%E5%9B%BE.jpg',
    designerView: '这是一个关于“土”的当代叙事。我们挖掘了山西传统民居的筑造智慧，将原始的夯土材料进行改性处理，在保留土地温度的同时满足了当代生活的舒适度。芃篱人家是一个时间的容器，记录着黄土地上的生命脉动。'
  },
  { 
    id: 4, 
    title: '大观原点', 
    en: 'Daguan Origin',
    type: '文旅',
    category: '文旅综合体 / Complex', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82.jpg',
    designerView: '作为整个文旅场域的“原点”，该项目承担着精神指引的功能。我们设计了一个巨大的圆形开放场域，象征着生命与自然的循环。通过对非日常空间的极致塑造，我们引导访问者在这里放下城市的纷扰，重启生活。'
  },
  { 
    id: 5, 
    title: '西安JW万豪', 
    en: 'JW Marriott Xi\'an',
    type: '酒店',
    category: '度假酒店 / Resort', 
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200',
    designerView: '西安的历史厚度既是资源也是压力。在JW万豪的设计中，我们避开了沉重的符号堆砌，而是提取了丝绸之路的律动感。通过大面积的流线型金属装饰与大理石的碰撞，创造了一种“大唐盛世”在数字化时代的镜像表达。'
  },
  { 
    id: 6, 
    title: '贵阳喜来登大酒店', 
    en: 'Sheraton Guiyang',
    type: '酒店',
    category: '度假酒店 / Hotel', 
    img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200',
    designerView: '贵阳的喀斯特地貌赋予了我们灵感。在空间组织上，我们模仿了溶洞的流线与形态，创造了一系列富有张力的公共场域。这不仅是一家商务酒店，更是一个充满力量感的城市地理地标。'
  },
  { 
    id: 7, 
    title: '良瑜国际度假酒店', 
    en: 'Liangyu Resort',
    type: '酒店',
    category: '度假酒店 / Resort', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/IMG_7747.JPG',
    designerView: '在良瑜项目中，我们探讨的是“森林叙事”的极致表达。建筑如同森林中的有机体，通过大量的木质格栅与自然采光，让室内空间与外部原始植被融为一体。这是一种关于“归隐”的商业实践，旨在为高净值人群提供一个避世的精神坐标。'
  },
  { 
    id: 8, 
    title: '豪生大酒店', 
    en: 'Howard Johnson',
    type: '酒店',
    category: '度假酒店 / Hotel', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E8%87%AA%E8%B4%A1%E8%B1%AA%E7%94%9F%E9%85%92%E5%BA%97/%E5%85%AC%E5%8C%BA%E5%A4%A7%E5%A0%82/039A5583.jpg',
    designerView: '豪生大酒店的设计核心在于“都市绿洲”的构建。我们试图在繁忙的城市轴线上，通过立体园林与开放式中庭的设计，制造一个静止的时间切片。这种对城市节奏的主动介入，赋予了商务社交更深层的人文温度。'
  },
  { 
    id: 9, 
    title: '蒹葭乡居', 
    en: 'Jianjia Home',
    type: '乡村',
    category: '精品民宿 / B&B', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%85%BC%E8%91%AD%E4%B9%A1%E5%B1%85/%E8%89%BA%E6%9C%AF%E5%93%81.png',
    designerView: '蒹葭苍苍，白露为霜。在水滨之畔，我们构建了一系列轻盈的漂浮建筑。利用水面的倒影拓展视觉边界，通过对木构艺术的极致表达，营造出一种超脱尘世的诗意生活。'
  },
  { 
    id: 10, 
    title: '抚仙湖私邸', 
    en: 'Fuxian Lake Villa',
    type: '私宅',
    category: '私宅 / Villa', 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%8A%9A%E4%BB%99%E6%B9%96%E5%BA%A6%E5%81%87%E6%88%BF/IMG_8122-2.jpg',
    designerView: '私宅设计的核心是主人的精神缩影。在抚仙湖项目中，我们通过极简的几何语言，将生活功能与自然景致深度嵌套。大面积的留白与精准的对位，构建了一个纯粹的静谧场域。'
  },
];

const CaseArchives: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const typeParam = searchParams.get('type');
  
  const [activeTab, setActiveTab] = useState('全部');
  const [selectedCase, setSelectedCase] = useState<typeof cases[0] | null>(null);

  useEffect(() => {
    if (typeParam) {
      setActiveTab(typeParam);
    } else {
      setActiveTab('全部');
    }
  }, [typeParam]);

  const filteredCases = activeTab === '全部' 
    ? cases 
    : cases.filter(c => c.type === activeTab);

  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] pt-40 pb-48 px-8 md:px-16 relative min-h-screen">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-12 mb-32 md:mb-48 border-b border-white/5 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}
              className="space-y-6 md:space-y-8 lg:col-span-8"
            >
              <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-mono block">第七卷 / 案例档案馆 Vol. 07 / Case Archives</span>
              <h1 className="text-5xl md:text-7xl lg:text-[10rem] font-serif-sc leading-none text-white/90 tracking-tighter">
                {activeTab === '全部' ? '案例档案馆' : activeTab}
              </h1>
            </motion.div>
            
            <div className="flex flex-wrap gap-10 md:gap-16">
              {categories.map(cat => (
                <button
                  key={cat.en}
                  onClick={() => setActiveTab(cat.cn)}
                  className={`flex flex-col items-baseline group transition-all duration-700 ${
                    activeTab === cat.cn ? 'opacity-100' : 'opacity-30 hover:opacity-100'
                  }`}
                >
                  <span className={`text-[13px] tracking-[0.1em] font-medium transition-colors ${activeTab === cat.cn ? 'text-[#c5a059]' : 'text-white'}`}>{cat.cn}</span>
                  <span className="text-[8px] tracking-[0.2em] uppercase font-light">{cat.en}</span>
                  {activeTab === cat.cn && <motion.div layoutId="activeCat" className="h-px w-full bg-[#c5a059] mt-1" />}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-24"
          >
            <AnimatePresence mode='popLayout'>
              {filteredCases.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                  onClick={() => setSelectedCase(item)}
                  className={`group cursor-pointer relative ${
                    index % 3 === 0 ? 'lg:col-span-8' : 'lg:col-span-4'
                  }`}
                >
                  <div className={`overflow-hidden bg-zinc-950 relative ${
                    index % 3 === 0 ? 'aspect-[21/9]' : 'aspect-[4/5]'
                  }`}>
                    <motion.img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-1000" />
                  </div>
                  
                  <div className="mt-8 flex justify-between items-baseline border-t border-white/5 pt-6">
                    <div className="space-y-2">
                      <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase block font-mono">{item.category} / 0{item.id}</span>
                      <h3 className="text-xl md:text-3xl font-serif-sc tracking-widest text-white/90 group-hover:text-[#c5a059] transition-colors">{item.title}</h3>
                    </div>
                    <div className="text-[10px] tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors">项目详情 / Details</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Case Detail Overlay */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-12 py-12"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
              />
              
              <motion.div
                layoutId={`case-${selectedCase.id}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                className="bg-zinc-900 border border-white/10 max-w-5xl w-full h-auto max-h-[100vh] md:max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row"
              >
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/40 rounded-full flex items-center justify-center text-white hover:bg-black transition-all"
                >
                  <X size={24} />
                </button>

                <div className="w-full md:w-1/2 aspect-video md:aspect-auto h-[30vh] md:h-auto overflow-hidden">
                  <img src={selectedCase.img} alt={selectedCase.title} className="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-1000" />
                </div>

                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col justify-between space-y-10">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase font-mono">
                        Project Archive / 0{selectedCase.id}
                      </span>
                      <div className="h-px w-12 bg-white/10" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs tracking-[0.2em] text-white/40 uppercase font-light italic">{selectedCase.category}</span>
                      <h3 className="text-3xl md:text-5xl font-serif-sc tracking-widest">{selectedCase.title}</h3>
                    </div>

                    <div className="space-y-6 pt-4">
                      <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/30 border-b border-white/5 pb-2">设计师视角 / Designer's Perspective</h4>
                      <p className="text-white/80 leading-relaxed text-lg font-light font-serif-sc italic">
                        “{selectedCase.designerView}”
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5">
                    <p className="text-[10px] tracking-widest text-white/20 uppercase">Building the civilization of future living.</p>
                    <Link 
                      to={`/cases/${[
                        'melia-chongqing', 'shanxi-pengli', 'daguan-yuandian', 
                        'jw-marriott-xian', 'sheraton-guiyang', 'liangyu-resort', 
                        'howard-johnson', 'jianjia-xiangju', 'forest-villa'
                      ][selectedCase.id - 2] || 'melia-chongqing'}`}
                      className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase group"
                    >
                      查看完整报告 <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brand Partners Section - Redesigned */}
        <section className="mt-16 embossed-section p-12 md:p-24 rounded-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <span className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-mono">Archive Registry / 02</span>
                <h2 className="text-4xl md:text-6xl font-serif-sc tracking-widest text-white/90 underline decoration-white/5 underline-offset-[16px]">合作品牌展示</h2>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[11px] tracking-[0.3em] text-white/30 uppercase max-w-xs leading-relaxed"
              >
                Building the future living system with global strategic partners.
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                '銀泰華爾道夫', '喜来登歐庭国際酒店', '豪生大酒店', '金陵酒店', 
                '金陽大酒店', '寧夏華祺國際飯店', '瑞祥國際大酒店', '寶難萬國酒店', 
                '索美麗雅酒店', '大足開元觀塘酒店', '開元名都大酒店', '西安高新酒店', 
                '恒旭大酒店', '麗柏酒店', '世纪精華心景酒店', '柏天酒店', 
                '寶柏精品酒店', '成都閱明酒店', '白雲新舍酒店', '雲澗酒店', 
                '林芝樾酒店', '重鏖半山子語酒店', '大理塵外酒店', '龍隅酒店', 
                '木原町酒店', '科力酒店', '喜都酒店', '奈思酒店', 
                '红璞酒店', '蒹葭鄉居', '大觀原點', '大觀·花海别墅酒店', '名古屋安缦'
              ].map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.8 }}
                  className="group relative h-24 flex items-center px-8 border border-white/[0.03] bg-gradient-to-r from-white/[0.01] to-transparent hover:from-white/[0.05] hover:border-white/10 transition-all duration-700 cursor-default overflow-hidden"
                >
                  <div className="absolute left-0 w-[2px] h-0 bg-white/40 group-hover:h-full transition-all duration-700" />
                  <div className="flex flex-col">
                    <span className="text-[12px] md:text-sm tracking-[0.1em] text-white/40 group-hover:text-white transition-colors duration-500 font-serif-sc">
                      {brand}
                    </span>
                  <span className="text-[8px] tracking-[0.2em] text-white/10 group-hover:text-white/30 transition-colors duration-500 uppercase mt-1">
                    合作伙伴 / Partner Entity / 0{i + 1}
                  </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
            >
              <div className="flex gap-2">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
                 ))}
              </div>
              <p className="text-[11px] tracking-[0.4em] text-white/20 uppercase text-center md:text-right leading-loose">
                我们与全球顶尖品牌及创意机构深度协作，<br />
                在不同场域共同探索未来生活文明的边界。
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CaseArchives;
