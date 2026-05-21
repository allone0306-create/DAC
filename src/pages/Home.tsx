import React from 'react';
import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import About from '../components/About';
import Insights from '../components/Insights';
import Philosophy from '../components/Philosophy';

const Home: React.FC = () => {
  return (
    <main className="space-y-8 md:space-y-16 max-w-[1800px] mx-auto">
      <div className="embossed-section overflow-hidden rounded-sm">
        <Hero />
      </div>
      <div className="embossed-section p-2 md:p-4 rounded-sm">
        <VideoSection />
      </div>
      <div className="embossed-section rounded-sm">
        <About />
      </div>
      <div className="embossed-section rounded-sm">
        <Insights />
      </div>
      <div className="embossed-section rounded-sm">
        <Philosophy />
      </div>
    </main>
  );
};

export default Home;
