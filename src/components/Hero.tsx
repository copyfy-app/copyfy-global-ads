
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Target, Globe } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <header className="relative px-6 py-16 text-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-yellow-500/20 pointer-events-none" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-3 bg-yellow-500/15 border border-yellow-500/30 rounded-full px-6 py-3 mb-6">
          <Target className="h-5 w-5 text-yellow-500" />
          <span className="text-lg font-bold text-yellow-500">COPYFY</span>
          <div className="w-px h-4 bg-yellow-500/40" />
          <span className="text-sm font-medium text-yellow-300">COD Affiliate Tool</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" 
            style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}>
          <span className="text-yellow-500 text-6xl md:text-8xl block mb-2">COPYFY</span>
          Google Ads Copy for<br />
          <span className="text-yellow-500">COD Affiliates</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
          Generate high-converting Google Ads copy optimized for Cash on Delivery campaigns. Perfect for affiliates scaling COD offers across 100+ countries.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={onGetStarted}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
          >
            Start COD Campaigns
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch COD Success Stories
          </Button>
        </div>
        
        {/* Social Proof - Affiliate Focused */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">50K+</div>
            <div className="text-sm text-gray-300">COD Affiliates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">2.5M+</div>
            <div className="text-sm text-gray-300">COD Orders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">340%</div>
            <div className="text-sm text-gray-300">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">100+</div>
            <div className="text-sm text-gray-300">Countries</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
