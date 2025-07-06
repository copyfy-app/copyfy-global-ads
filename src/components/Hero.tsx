

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Globe } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const handleBuyNow = () => {
    window.open('https://hotm.art/Copyfy-Ai', '_blank');
  };

  const handleTryAI = () => {
    window.open('https://hotm.art/Copyfy-Ai', '_blank');
  };

  return (
    <header className="relative px-4 sm:px-6 py-12 sm:py-16 text-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-yellow-500/20 pointer-events-none" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
          <Target className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
          <span className="text-base sm:text-lg font-bold text-yellow-500">
            Copy<span className="text-white">fy</span>
          </span>
          <div className="w-px h-3 sm:h-4 bg-yellow-500/40" />
          <span className="text-xs sm:text-sm font-medium text-yellow-300">COD Affiliate Tool</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight" 
            style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}>
          <span className="text-yellow-500 text-4xl sm:text-6xl md:text-8xl block mb-1 sm:mb-2">
            Copy<span className="text-white">fy</span>
          </span>
          AI Tools for Affiliates:<br />
          Create Google Ads Copy for<br />
          <span className="text-yellow-500">100+ Countries in Seconds</span>
        </h1>
        
        <p className="text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-6 sm:mb-10 text-gray-200 leading-relaxed px-2">
          Generate high-converting Google Ads copy optimized for Cash on Delivery campaigns. Perfect for affiliates scaling COD offers across 100+ countries.
        </p>
        
        {/* VSL YouTube Short Section */}
        <div className="max-w-lg mx-auto mb-8 sm:mb-12 px-4">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-yellow-500">
            See how Copyfy creates Google Ads in seconds!
          </h2>
          <div className="relative pb-[56.25%] h-0 overflow-hidden mb-6 rounded-xl border-2 border-yellow-500/30">
            <iframe
              src="https://www.youtube.com/embed/pVcaYG6p0p8?rel=0&modestbranding=1&showinfo=0&controls=1"
              title="Copyfy AI Ad Generator Short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-none"
            />
            {/* Extended logo overlay to cover TopView watermark and avatar hands - positioned to work in full-screen */}
            <div className="absolute bottom-2 left-4 z-[9999] bg-black rounded-lg px-6 py-3 flex items-center gap-2 min-w-[180px] h-12 pointer-events-none">
              <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">C</span>
              </div>
              <span className="text-yellow-500 font-bold text-base">
                Copy<span className="text-white">fy</span>
              </span>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full ml-2"></div>
            </div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 text-center">
            <span className="text-yellow-500 font-bold">⚠️ Limited-Time Offer:</span>
            <span className="text-gray-200"> Full access to Copyfy for only </span>
            <span className="text-yellow-500 font-bold">$37</span>
            <span className="text-gray-200"> – this week only!</span>
          </div>
          <div className="text-center">
            <Button 
              onClick={handleBuyNow}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-sm sm:text-base px-6 py-3 rounded-full shadow-xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              Get Instant Access for $37
            </Button>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button 
            onClick={handleTryAI}
            className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-xl shadow-green-500/40 transition-all duration-300 animate-pulse hover:animate-none border-2 border-green-300"
          >
            👉 Try Copyfy with AI now!
          </Button>
        </div>
        
        {/* Social Proof - Affiliate Focused */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-yellow-500 mb-1">50K+</div>
            <div className="text-xs sm:text-sm text-gray-300">COD Affiliates</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-yellow-500 mb-1">2.5M+</div>
            <div className="text-xs sm:text-sm text-gray-300">COD Orders</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-yellow-500 mb-1">340%</div>
            <div className="text-xs sm:text-sm text-gray-300">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-3xl font-bold text-yellow-500 mb-1">100+</div>
            <div className="text-xs sm:text-sm text-gray-300">Countries</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

