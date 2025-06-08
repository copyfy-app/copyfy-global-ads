
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";

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
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span className="text-sm font-medium text-yellow-500">AI-Powered Copywriting</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" 
            style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}>
          Generate High-Converting<br />
          <span className="text-yellow-500">Google Ads Copy</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 text-gray-200 leading-relaxed">
          Create compelling ad copy for 100+ countries in seconds. Boost your conversion rates with AI-powered copywriting that speaks your audience's language.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={onGetStarted}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">50K+</div>
            <div className="text-sm text-gray-300">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">2.4M+</div>
            <div className="text-sm text-gray-300">Ads Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">180%</div>
            <div className="text-sm text-gray-300">Avg. CTR Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-1">4.9/5</div>
            <div className="text-sm text-gray-300">User Rating</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
