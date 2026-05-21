import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const cultureData = [
  { 
    id: 'shanxi-yaodong',
    region: '山西', 
    title: '窑洞重生', 
    tags: ['黄土高原', '穴居文明', '极简主义'], 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%AA%91%E6%B4%9E/%E7%AA%91%E6%B4%9E.jpg',
    content: `
      <h3>大地之穴：古老智慧的当代回响</h3>
      <p>山西的窑洞，不仅是居住的场所，更是土地意志的延伸。在这里，建筑不是在土地上叠加，而是从土地内部生长。</p>
      <p>在“窑洞重生”计划中，我们保留了其天然的恒温逻辑，利用厚重的土层作为自然的隔热与保温层，并引入了极简的采光井设计，让原本幽暗的空间充满了神性的光影。</p>
      <h3>精神内核：回归母体</h3>
      <p>穴居文化代表了人类最初的安全感。我们将这种安全感转化为一种当代语境下的“地层疗愈”，让久居城市的人们在这里重温与大地的亲密联系。</p>
    `
  },
  { 
    id: 'chongqing-stilt',
    region: '川渝', 
    title: '川渝民居', 
    tags: ['山地建筑', '院落文化', '在地性'], 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E4%B9%A1%E6%9D%91/%E5%B7%9D%E6%B8%9D%E6%B0%91%E5%B1%85.jpg',
    content: `
      <h3>院落叙事：川渝大地的居住哲学</h3>
      <p>川渝民居是人类与自然和谐共生的典范。无论是错落有致的穿斗式结构，还是富有仪式感的院落空间，都承载着这片土地深厚的生活智慧。</p>
      <p>在当代转译中，我们保留了民居的开放性与通透感，利用现代材料复刻了瓦顶与木构的韵律，让居住者在快节奏的时代依然能感受到“归家”的安宁。</p>
    `
  },
  { 
    id: 'zigong-industrial',
    region: '重庆', 
    title: '工业遗迹', 
    tags: ['印刷工业', '创意再生', '城市更新'], 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%B7%A5%E4%B8%9A/%E9%B9%85%E5%B2%AD%E4%BA%8C%E5%8E%82.png',
    content: `
      <h3>记忆再生：从中央印制厂到鹅岭贰厂</h3>
      <p>鹅岭贰厂的前身是民国时期的中央印制厂，这里曾是记录时代信息的工业中枢。岁月流转，斑驳的红砖、交错的管道和巨大的工业厂房，成为了山城记忆的物理切片。</p>
      <p>在贰厂的改造叙事中，我们不只是在进行“修旧如旧”的修复，而是在进行一场关于“时间层叠”的创作。保留工业时代的粗犷美学，同时植入当代的艺术血液与生活方式。</p>
      <h3>城市更新的数字化叙事</h3>
      <p>我们将贰厂视为一个流动的博物馆。通过空间场域的重构，让原本封闭的工业孤岛进化为连接过去与未来的文化枢纽，让每一个到访者都能在锈迹斑斑的机器旁，读懂重庆的工业体温。</p>
    `
  },
  { 
    id: 'dali-lake',
    region: '大理', 
    title: '湖泊牧场', 
    tags: ['白族文化', '田园诗', '第二人生'], 
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%B9%96%E6%B3%8A%E7%89%A7%E5%9C%BA.jpg',
    content: `
      <h3>自由意志：苍山洱海间的第二人生</h3>
      <p>大理不仅仅是一个地理坐标，更是一种精神隐喻。湖泊牧场项目旨在苍山洱海之间，为“精神移民”提供一个可以深度扎根的土壤。</p>
      <p>我们将白族的照壁、瓦猫等文化元素进行解构，并与现代的牧场生活方式融合。这里没有忙碌的闹钟，只有风吹过草地的声音和洱海的波光。</p>
    `
  },
  {
    id: 'methodology-archaeology',
    region: '研究方法',
    title: '文化考古',
    tags: ['深度调研', '非遗保护', '历史溯源'],
    img: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1200',
    content: `
      <h3>时间深处的挖掘：从尘封中唤醒土地之魂</h3>
      <p>文化考古不是简单的资料收集，而是一场跨越时空的对话。DAC的研究团队深入县志、家谱、口述历史以及破碎的物质遗存，寻找那些被现代文明遗忘的微光。</p>
      <h3>研究路径</h3>
      <p>我们关注的不仅是大历史，更是微观的生活史。一砖一瓦的砌筑方式、一种几近失传的方言、一种地域性的香料配比，都是我们建立在地文化数据库的重要基石。</p>
      <p>通过科学的田野调查法，我们将土地的碎片拼凑成完整的精神图谱，为后续的商业转化提供最真实的土壤。</p>
    `
  },
  {
    id: 'methodology-ip',
    region: '转化逻辑',
    title: '精神IP转化',
    tags: ['美学转译', '商业逻辑', '品牌构建'],
    img: 'https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=1200',
    content: `
      <h3>从符号到体感：文化的商业炼金术</h3>
      <p>精神IP转化是DAC核心竞争力的集中体现。我们将枯燥的文化符号转化为具体的场景、产品、视觉和体感，让抽象的文化变得“可感知、可消费、可传播”。</p>
      <h3>转化策略</h3>
      <p>我们拒绝表象的堆砌，追求神似的共鸣。通过对地域美学的解构与重组，我们为项目赋予独一无二的精神内核，使其从同质化的文旅市场中脱颖而出，形成具有商业护城河的超级IP。</p>
    `
  },
  {
    id: 'methodology-narrative',
    region: '传播语境',
    title: '当代性叙事',
    tags: ['国际语言', '数字传播', '未来视角'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200',
    content: `
      <h3>世界语言，中国故事：跨越代际的情感连接</h3>
      <p>当代性叙事旨在让传统在当下焕发出商业与美学的生命力。我们使用国际化的设计语言与数字化传播手段，讲述根植于土地的中国故事。</p>
      <h3>叙事框架</h3>
      <p>我们关注的是“当下的人”如何与“古老的土地”产生连接。通过对未来生活趋势的洞察，我们将传统文化重置于当代生活场景中，让文化不再是博物馆里的展品，而是触手可及的第二生活方式。</p>
    `
  }
];

// Only display the 4 regional cases in the main grid
const cases = cultureData.filter(item => !item.id.startsWith('methodology'));

const CultureResearch: React.FC = () => {
  return (
    <main className="bg-[#1a1a1a] text-[#d4d4d4] min-h-screen pt-40 pb-24 px-4 md:px-8 space-y-16">
      <div className="noise-overlay" />
      <div className="max-w-[1800px] mx-auto space-y-8 md:space-y-16">
        <div className="embossed-section p-12 md:p-24 rounded-sm">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-48 items-end"
          >
          <div className="lg:col-span-8 space-y-8">
            <span className="text-[10px] tracking-[0.6em] text-white/30 uppercase font-mono block mb-8">第五卷 / 在地研究 Vol. 05 / Field Research</span>
            <h1 className="text-4xl md:text-8xl font-serif-sc leading-none text-white/90">
              挖掘每一寸土地<br />
              <span className="italic font-light opacity-40">独有的时间。</span>
            </h1>
          </div>
          <div className="lg:col-span-4 border-l border-white/10 pl-8">
             <p className="text-white/30 text-xs md:text-sm tracking-[0.3em] uppercase leading-relaxed max-w-sm">
               关于土地记忆碎片的考古转译，将其转化为可感知的场域叙事。
             </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">
          {cases.map((item, index) => (
            <Link key={item.id} to={`/culture/${item.id}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="relative aspect-[16/9] group overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.img}
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-110 transition-all duration-1000"
                  alt={item.title}
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs tracking-widest text-white/60 uppercase">{item.region}</span>
                    <h3 className="text-2xl font-serif-sc mt-2 mb-4">{item.title}</h3>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] border border-white/20 px-3 py-1 rounded-full uppercase tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-40 border-t border-white/10 pt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
          <Link to="/culture/methodology-archaeology" className="group space-y-6">
            <h4 className="text-lg font-serif-sc group-hover:italic transition-all">文化考古</h4>
            <p className="text-sm text-white/40 leading-relaxed">深入县志、家谱、口述历史，寻找那些被现代文明遗忘的微光。</p>
          </Link>
          <Link to="/culture/methodology-ip" className="group space-y-6">
            <h4 className="text-lg font-serif-sc group-hover:italic transition-all">精神IP转化</h4>
            <p className="text-sm text-white/40 leading-relaxed">将抽象的文化符号转化为具体的场景、产品、视觉和体感。</p>
          </Link>
          <Link to="/culture/methodology-narrative" className="group space-y-6">
            <h4 className="text-lg font-serif-sc group-hover:italic transition-all">当代性叙事</h4>
            <p className="text-sm text-white/40 leading-relaxed">用世界语言讲述中国故事，让传统在当下焕发出商业与美学的生命力。</p>
          </Link>
        </div>
      </div>
      </div>
    </main>
  );
};

export default CultureResearch;
