import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
      videoRef.current.muted = false;

      const updateProgress = () => {
        if (videoRef.current) {
          const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
          setProgress(value);
        }
      };

      videoRef.current.addEventListener('timeupdate', updateProgress);
      return () => videoRef.current?.removeEventListener('timeupdate', updateProgress);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  return (
    <section className="relative w-full bg-transparent py-24 md:py-32 overflow-hidden group/section">
      <div className="max-w-[1800px] mx-auto px-8 md:px-16 mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8 lg:col-span-8"
        >
          <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase block font-mono">Archive / Film</span>
          <h2 className="text-4xl md:text-8xl font-serif-sc tracking-tight leading-none text-white/90">
            我们预演未来的文明。
          </h2>
        </motion.div>
        
        <p className="text-white/30 text-xs md:text-sm max-w-sm leading-loose tracking-[0.2em] uppercase border-l border-white/10 pl-8">
          A cinematic document of the resonance between space and soul. The bio-system of second life begins here.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          onClick={togglePlay}
          className="relative w-full aspect-video bg-zinc-950 overflow-hidden shadow-2xl group cursor-pointer"
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover transition-all duration-1000 ${!isPlaying ? 'brightness-[0.6]' : 'brightness-100'}`}
          >
            <source 
              src="https://pub-7c93bbf1cacc4b48b9d4cb12a7b37539.r2.dev/DAC%20Design%E9%AB%98%E6%B8%85%E7%89%88.mov" 
              type="video/quicktime" 
            />
            <source 
              src="https://pub-7c93bbf1cacc4b48b9d4cb12a7b37539.r2.dev/DAC%20Design%E9%AB%98%E6%B8%85%E7%89%88.mov" 
              type="video/mp4" 
            />
          </video>

          <AnimatePresence>
            {!isPlaying && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm">
                  <div className="ml-2 w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute top-10 right-10 z-20 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button onClick={toggleMute} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 transition-all">
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <button onClick={handleFullScreen} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <Maximize2 size={16} />
            </button>
          </div>
          
          <div className="absolute inset-0 border-[1px] border-white/5 pointer-events-none" />
          
          <div className="absolute bottom-12 right-12 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            <span className="text-[9px] tracking-[0.4em] text-white/60 uppercase font-light">Streaming Film</span>
          </div>

          {/* Integrated Internal Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
            <div 
              className="h-[2px] w-full bg-white/10 cursor-pointer relative overflow-hidden backdrop-blur-sm"
              onClick={handleProgressClick}
            >
              <motion.div 
                className="h-full bg-white relative shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                style={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </div>
            <div className="mt-4 flex justify-between items-center text-[8px] tracking-[0.5em] text-white/40 uppercase font-mono">
              <span>0%</span>
              <span className="tracking-[1em]">Timeline Control</span>
              <span>100%</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto px-8 md:px-16 mt-24 flex justify-end">
        <p className="text-[11px] tracking-[0.3em] text-white/20 uppercase max-w-sm text-right leading-loose">
          通过数字影像，我们试图捕捉那些关于光影、时间与自然回音的瞬时永恒。
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
