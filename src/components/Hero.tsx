
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <header className="px-6 py-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg" 
          style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.8)' }}>
        Copyfy
      </h1>
      <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-8"
         style={{ textShadow: '0 0 6px rgba(0,0,0,0.8)' }}>
        High Conversion Copywriting for Google Ads, Translated for 100+ Countries
      </p>
      <Button 
        onClick={onGetStarted}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-10 py-6 rounded-full shadow-lg shadow-yellow-500/50 transition-all duration-300"
      >
        Start Generating Now
      </Button>
    </header>
  );
};

export default Hero;
