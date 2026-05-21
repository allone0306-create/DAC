import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const articleData = [
  { 
    id: 'escape-city',
    date: '2024.03.15', 
    title: '为什么“逃离城市”是一个伪命题？', 
    category: '空间哲学',
    content: `
      <p>在过去的十年里，我们听到了无数关于“逃离城市”的口号。从大理到阿那亚，从莫干山到山中的帐篷，人们似乎一直在奔跑。但作为生活系统的构建者，我们发现了一个有趣的现象：大多数所谓的逃离，仅仅是物理位置的移动，而非生命状态的转场。</p>
      <p>真正的城市问题，不在于钢筋水泥，而在于其背后那套基于“效率”与“异化”的底层操作系统。如果我们将这种操作系统带入山野，那么山野仅仅是换了背景的办公室。</p>
      <h3>重构底层系统</h3>
      <p>我们提出的“第二生活”，并不是城市的对立面，而是城市的补完计划。它关乎的是：当一个人脱离了社会角色赋予的枷锁后，如何重新定义自己与土地、与食物、与邻里、以及与时间的关系。</p>
      <p>在DAC的实践中，我们尝试在空间中植入“无用之用”。那些漫长的走廊、没有功能的留白、光影流转的角落，都是为了让习惯了“有用”的现代人，被迫停下来，面对自己。</p>
      <h3>生活不是目的地</h3>
      <p>我们认为，文旅不应是目的地的消费，而应是另一种生活系统的预演。当一个人在我们的场域里住上七天，他带走的不仅是照片，而是一套可以带回城市的、关于如何更好生活的微型系统。</p>
    `,
    image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    id: 'aman-to-songtsam',
    date: '2024.02.28', 
    title: '从安缦到松赞：奢侈的尽头是土地的真实', 
    category: '文旅未来',
    content: `
      <p>奢侈品的定义正在发生剧变。如果说二十年前的奢侈是昂贵的水晶灯和意大利大理石，那么今天的奢侈则是：呼吸到未经工业染指的空气，以及与一段沉淀了千年的文化发生真实的连接。</p>
      <p>安缦教会了世界如何尊重在地性，而松赞则将这种尊重推向了信仰的高度。这背后的逻辑是：空间不再是主角，土地的精神才是。</p>
      <h3>土地的叙事力</h3>
      <p>在DAC的逻辑中，我们从不试图“美化”土地，我们只负责“翻译”。每一块土地都有其自有的叙事节奏。山西的黄土是厚重的、沉默的；重庆的江雾是湿润的、躁动的。</p>
      <p>我们的工作是挖掘这些碎片，并用当代的建筑语言将其重组，让土地开口说话。</p>
    `,
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%AE%89%E6%9B%BC/%E5%90%8D%E5%8F%A4%E5%B1%8B%E5%AE%89%E6%9B%BC.jpg'
  },
  { 
    id: 'healing-economy',
    date: '2024.01.10', 
    title: '疗愈经济下的女性消费新范式', 
    category: '精神消费',
    content: `
      <p>现代女性正处于前所未有的压力中心。这种压力不仅来自职场，更来自于多重角色切换中的自我消解。因此，“疗愈”不再是一个点缀，而是一种刚需。</p>
      <p>但我们发现，市场上的大多数疗愈产品依然停留在表层：一场SPA，一节瑜伽课。这远远不够。</p>
      <h3>从身体疗愈到场域疗愈</h3>
      <p>真正的疗愈来自于场域的能量。一个被自然包裹的、安全的、具有美学感知的空间，能够自发地引导呼吸的节律。在我们的女性长住社区中，我们设计了大量的社交留白，鼓励一种“松散的陪伴”。</p>
    `,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    id: 'culture-fragments',
    date: '2023.12.05', 
    title: '在地文化的碎片化与系统性重构', 
    category: '在地文化',
    content: `
      <p>中国不缺文化，缺的是文化的当代转译能力。我们看到太多粗糙的模仿，或者是对传统符号的生搬硬套。这不仅是审美的匮乏，更是对文化内核理解的缺失。</p>
      <h3>重构系统</h3>
      <p>我们将在地文化拆解为：材料、光影、气味、食物、方言五个维度。通过系统性的重构，让传统文化以一种极其自然的方式进入现代人的生活。</p>
    `,
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E8%87%AA%E8%B4%A1%E8%B1%AA%E7%94%9F%E9%85%92%E5%BA%97/%E5%85%AC%E5%8C%BA%E5%A4%A7%E5%A0%82/039A5201.jpg'
  },
  { 
    id: 'long-stay-society',
    date: '2023.11.20', 
    title: '长住社会：当旅游变成了生活本身', 
    category: '第二人生',
    content: `
      <p>“打卡式”旅游正在死去，“数字化游民”与“长住者”正在崛起。这意味着，酒店客房不能再仅仅是一个睡觉的地方，它必须具备“家”的所有功能，同时拥有“别处”的所有惊喜。</p>
      <p>我们在构建的长住系统中，核心命题是：如何建立一个不需要逃离的社区？</p>
    `,
    image: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D.jpg'
  }
];

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articleData.find(a => a.id === id);

  if (!article) return <div className="pt-40 text-center">文章不存在</div>;

  return (
    <main className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen pb-40">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-[70vh] relative overflow-hidden"
      >
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-[#0d0d0d] border border-white/5 p-8 md:p-20 shadow-2xl"
        >
          <div className="flex items-center gap-6 mb-12">
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase font-mono">{article.date}</span>
            <div className="w-12 h-px bg-white/10" />
            <span className="text-[10px] tracking-[0.5em] text-[#c5a059] uppercase font-bold">{article.category}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif-sc leading-tight mb-16 text-white/90">
            {article.title}
          </h1>

          <div 
            className="prose prose-invert prose-zinc max-w-none text-white/50 leading-relaxed font-light space-y-10 article-content-body text-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
            <Link to="/thoughts" className="text-[10px] tracking-[0.5em] uppercase flex items-center gap-4 group text-white/40 hover:text-white transition-colors">
              <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Insights
            </Link>
            <div className="flex gap-6">
               <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center cursor-pointer hover:bg-[#c5a059] hover:text-white transition-all text-white/20">
                 <span className="text-[8px] uppercase tracking-tighter font-bold">Wx</span>
               </div>
               <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center cursor-pointer hover:bg-[#c5a059] hover:text-white transition-all text-white/20">
                 <span className="text-[8px] uppercase tracking-tighter font-bold">Wb</span>
               </div>
            </div>
          </div>
        </motion.div>
      </article>

      <section className="max-w-[1800px] mx-auto px-8 md:px-16 mt-64 border-t border-white/5 pt-32">
        <h4 className="text-[10px] tracking-[0.6em] uppercase opacity-20 mb-20 text-center">延伸阅读 / Extended Reading</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {articleData.filter(a => a.id !== id).slice(0, 2).map(a => (
            <Link key={a.id} to={`/thoughts/${a.id}`} className="group space-y-8">
              <div className="aspect-[21/9] overflow-hidden bg-zinc-950">
                <img src={a.image} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[2s]" alt={a.title} />
              </div>
              <div className="space-y-4">
                 <span className="text-[9px] tracking-[0.4em] text-white/20 uppercase font-mono">{a.category}</span>
                 <h3 className="text-2xl md:text-3xl font-serif-sc text-white/80 group-hover:text-white group-hover:italic transition-all duration-700">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
