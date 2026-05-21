import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Target, Layout, Compass } from 'lucide-react';

export const caseReportData = [
  {
    id: 2,
    slug: 'melia-chongqing',
    title: '重庆美利亚',
    category: '度假酒店',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E7%BE%8E%E5%88%A9%E4%BA%9A%E9%85%92%E5%BA%97/1.jpg',
    location: '中国 · 重庆 · 铁山坪',
    content: `
      <h3>设计愿景：消隐在崖壁间的建筑叙事</h3>
      <p>重庆美利亚坐落于铁山坪森林公园，地形极度破碎且具有侵略性。我们的设计逻辑是“屈服”——建筑主动顺应崖壁的走势，将体量消解在密林之中。</p>
      
      <h3>场域逻辑：室内外的无缝交割</h3>
      <p>利用重庆特有的湿润气候，我们设计了大量的“灰空间”。水雾、山风与室内温控系统在此产生奇妙的共振。每间客房的阳台都是一个向自然开放的呼吸口，实现了“在森林中居住”的品牌承诺。</p>

      <h3>商业溢价：长久同行的共生价值</h3>
      <p>项目通过对自然资源的极致利用，成功吸引了大量追求“精神栖居”的高净值客群，长住率（7天以上）达到42%。</p>
    `,
    metrics: [
      { label: '森林覆盖率', value: '92%' },
      { label: '长住占比', value: '42%' },
      { label: '能耗降低', value: '-18%' }
    ]
  },
  {
    id: 3,
    slug: 'shanxi-pengli',
    title: '山西芃篱人家',
    category: '精品民宿',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%A4%AA%E5%BA%A6%E6%9D%91%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97%E7%BE%A4/%E8%A7%84%E5%88%92%E8%8D%89%E5%9B%BE.jpg',
    location: '中国 · 山西',
    content: `
      <h3>设计愿景：黄土地上的生命实验室</h3>
      <p>芃篱人家是对晋商大院与黄土窑洞的一次“考古式重生”。我们保留了黄土地特有的原始粗犷，同时植入了极简主义的当代生活逻辑。</p>
      
      <h3>场域逻辑：土地温度的物理保留</h3>
      <p>我们对传统的夯土墙进行了改性研究，使其在保留18度天然恒温的同时，解决了防水与结构耐久性问题。这种对土地原材料的极致尊重，使得建筑本身具有了强烈的叙事性。</p>

      <h3>商业溢价：文化资产的增值</h3>
      <p>作为在地文化研究的样板间，芃篱人家不仅实现了极高的入住率，更成为了当地政府文化推广的数字化标杆。</p>
    `,
    metrics: [
      { label: '夯土改性', value: '专利级' },
      { label: '土地记忆', value: '100%' },
      { label: '文化溢价', value: 'High' }
    ]
  },
  {
    id: 4,
    slug: 'daguan-yuandian',
    title: '大观原点',
    category: '文旅综合体',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/%E5%A4%A7%E8%A7%82/%E5%8D%97%E5%B7%9D%E5%A4%A7%E8%A7%82.jpg',
    location: '中国 · 重庆 · 南川',
    content: `
      <h3>设计愿景：精神回归的物理坐标</h3>
      <p>大观原点是整个文旅场域的精神核心。设计采用“圆”作为几何母题，象征着周而复始的生活真谛。这是一个关于“放下”与“拿起”的空间。</p>
      
      <h3>场域逻辑：非日常空间的剧场感</h3>
      <p>我们设计了一个直径40米的开放式下沉剧场，它既是集散中心，也是心灵的避风港。通过对光线路径的精密计算，在特定时段，光线会像神迹一样直射入原点中心。</p>
    `,
    metrics: [
      { label: '场域核心', value: '原点' },
      { label: '年均流量', value: '500k+' },
      { label: '社群活力', value: 'Extremely High' }
    ]
  },
  {
    id: 5,
    slug: 'jw-marriott-xian',
    title: '西安JW万豪',
    category: '度假酒店',
    img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200',
    location: '中国 · 西安',
    content: `
      <h3>设计愿景：大唐美学的数字化镜像</h3>
      <p>西安JW万豪是历史与未来的对冲实验。我们将大唐盛世的磅礴气度，压缩进冷峻的玻璃与金属帷幕之中。这是一种“克制的奢华”。</p>
      
      <h3>场域逻辑：丝绸之路的动态流线</h3>
      <p>公共区域的设计灵感源自丝绸之路. 流线型的金属天花板如同起伏的沙丘，又如律动的丝绸，引导居住者在空间中进行一场跨越时空的旅行。</p>
    `,
    metrics: [
      { label: '金属装饰', value: 'Custom' },
      { label: '设计溢价', value: '+28%' },
      { label: '历史转译', value: 'Modern' }
    ]
  },
  {
    id: 6,
    slug: 'sheraton-guiyang',
    title: '贵阳喜来登大酒店',
    category: '度假酒店',
    img: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200',
    location: '中国 · 贵阳',
    content: `
      <h3>设计愿景：喀斯特地貌的建筑隐喻</h3>
      <p>贵阳喜来登不只是一家商务酒店，它是贵州奇特地貌的室内延伸。我们将溶洞的深邃与瀑布的垂直感引入大堂叙事。</p>
      
      <h3>场域逻辑：充满张力的公共空间</h3>
      <p>空间内部采用了大量的非线性切割，创造出如同自然溶洞般的探索感。水景与石材的极简配合，为繁忙的商务客群提供了一个极具力量感的宁静场域。</p>
    `,
    metrics: [
      { label: '非线性空间', value: '60%' },
      { label: '客房数量', value: '450+' },
      { label: '城市标杆', value: 'Top' }
    ]
  },
  {
    id: 7,
    slug: 'liangyu-resort',
    title: '良瑜国际度假酒店',
    category: '度假酒店',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%8D%97%E5%B7%9D%E8%89%AF%E7%91%9C%E5%85%BB%E7%94%9F%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97/IMG_7747.JPG',
    location: '中国 · 森林场域',
    content: `
      <h3>设计愿景：与自然共生的森林系统</h3>
      <p>良瑜项目的核心命题是“归隐”。我们拒绝了围墙式的封闭开发，而是采用了分散式的有机布局。建筑如同种子般散落在森林之中。</p>
      
      <h3>场域逻辑：呼吸的感应</h3>
      <p>通过智能感知系统，客房的采光与通风可以随外部自然环境的变化而自动调节。在这里，科技是隐形的，只有自然的律动是显性的。</p>
    `,
    metrics: [
      { label: '森林整合', value: '100%' },
      { label: '碳中和', value: 'Targeted' },
      { label: '情绪安定', value: 'High' }
    ]
  },
  {
    id: 8,
    slug: 'howard-johnson',
    title: '豪生大酒店',
    category: '度假酒店',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E8%87%AA%E8%B4%A1%E8%B1%AA%E7%94%9F%E9%85%92%E5%BA%97/%E5%85%AC%E5%8C%BA%E5%A4%A7%E5%A0%82/039A5583.jpg',
    location: '中国 · 城市中枢',
    content: `
      <h3>设计愿景：都市丛林中的静谧绿洲</h3>
      <p>豪生大酒店试图解决当代城市的“快慢矛盾”。我们在城市最繁忙的轴线上，通过立体园林与开放式中庭的设计，制造一个静止的时间切片。</p>
      
      <h3>场域逻辑：立体园林的叙事</h3>
      <p>通过多层垂直园林的设计，我们阻隔了城市的噪音与视觉干扰。居住者从大堂进入，即完成了一次从“喧嚣”到“静谧”的心理洗礼。</p>
    `,
    metrics: [
      { label: '噪音削减', value: '-35dB' },
      { label: '绿色率', value: '40%+' },
      { label: '社交温度', value: 'Warm' }
    ]
  },
  {
    id: 9,
    slug: 'jianjia-xiangju',
    title: '蒹葭乡居',
    category: '精品民宿',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E5%85%BC%E8%91%AD%E4%B9%A1%E5%B1%85/%E8%89%BA%E6%9C%AF%E5%93%81.png',
    location: '中国 · 水乡',
    content: `
      <h3>设计愿景：诗意栖居的数字化样板</h3>
      <p>蒹葭乡居是关于“诗经生活方式”的现代实验。我们通过对传统木构艺术的极致表达，在水滨之畔构建了一个虚实结合的梦境。</p>
      
      <h3>场域逻辑：漂浮的建筑，流动的灵魂</h3>
      <p>建筑底部采用挑空设计，最大程度保留了湿地生态。水面的倒影拓展了空间的维度，让居住者在此完成一场关于时间与自然的漫游。</p>
    `,
    metrics: [
      { label: '湿地保护', value: 'Max' },
      { label: '传统木构', value: 'Modernized' },
      { label: '生活溢价', value: 'Premium' }
    ]
  },
  {
    id: 10,
    slug: 'forest-villa',
    title: '抚仙湖私邸',
    category: '私宅',
    img: 'https://pub-655d319cb92e4da68aab5b9d0f23b929.r2.dev/%E6%8A%9A%E4%BB%99%E6%B9%96%E5%BA%A6%E5%81%87%E6%88%BF/IMG_8122-2.jpg',
    location: '中国 · 抚仙湖',
    content: `
      <h3>设计愿景：湖山间的纯粹留白</h3>
      <p>抚仙湖私邸是一次关于“绝对静谧”的空间探索。我们拒绝了繁琐的装饰，采用极简的白建筑形态，使其在湛蓝的湖光山色中成为一个纯粹的视觉锚点。</p>
      
      <h3>场域逻辑：视线的无尽延展</h3>
      <p>通过全景推拉窗系统，我们消解了室内外的物理边界。湖面的微光与远山的剪影被引入日常生活的每一个角落，让居住者在抚仙湖的自然节律中完成自我的重构。</p>
    `,
    metrics: [
      { label: '通透率', value: 'Max' },
      { label: '设计溢价', value: 'Personal' },
      { label: '自然整合', value: 'Deep' }
    ]
  }
];

const CaseReportDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const report = caseReportData.find(r => r.slug === slug);

  if (!report) return <div className="pt-40 text-center">档案正在整理中...</div>;

  return (
    <main className="bg-[#050505] text-white min-h-screen pb-40">
      {/* Hero Header */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img src={report.img} alt={report.title} className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40">{report.category}</span>
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/60">{report.location}</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif-sc leading-tight"
          >
            {report.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-4 order-last lg:order-first">
            <div className="sticky top-32 space-y-12">
               <div className="p-10 border border-white/5 bg-white/[0.02] backdrop-blur-md">
                 <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10">项目指标 / Metrics</h4>
                 <div className="space-y-10">
                    {report.metrics.map(m => (
                      <div key={m.label}>
                        <div className="text-4xl font-serif-sc text-white mb-2">{m.value}</div>
                        <div className="text-[10px] tracking-widest text-white/20 uppercase">{m.label}</div>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="p-10 border border-white/5 space-y-8">
                  <h4 className="text-[10px] tracking-[0.5em] uppercase text-white/30">设计要素 / elements</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <Target size={16} className="text-white/40" />
                       <span className="text-[10px] tracking-widest uppercase">场域定位</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Layout size={16} className="text-white/40" />
                       <span className="text-[10px] tracking-widest uppercase">空间模组</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Compass size={16} className="text-white/40" />
                       <span className="text-[10px] tracking-widest uppercase">文化考古</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <MapPin size={16} className="text-white/40" />
                       <span className="text-[10px] tracking-widest uppercase">在地转译</span>
                    </div>
                  </div>
               </div>

               <Link to="/cases" className="flex items-center gap-4 text-[10px] tracking-[0.5em] uppercase group pt-8">
                 <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Archive
               </Link>
            </div>
          </aside>

          {/* Text Content */}
          <div className="lg:col-span-8 space-y-20">
             <div className="prose prose-invert prose-zinc max-w-none">
                <div 
                  className="report-content-body space-y-12 text-white/60 leading-relaxed text-lg font-light"
                  dangerouslySetInnerHTML={{ __html: report.content }}
                />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-square bg-zinc-900 overflow-hidden">
                  <img src={report.img} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000" alt="Detail 1" />
                </div>
                <div className="aspect-square bg-zinc-900 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-1000" alt="Detail 2" />
                </div>
             </div>

             <div className="py-20 border-y border-white/5">
                <p className="text-2xl font-serif-sc italic text-white/80 leading-relaxed">
                   “我们追求的不仅是视觉的华丽，更是空间在时间流逝中呈现出的生命质感。”
                </p>
                <p className="text-[10px] tracking-[0.5em] uppercase text-white/20 mt-8">— 未山 / WEI SHAN</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseReportDetail;
