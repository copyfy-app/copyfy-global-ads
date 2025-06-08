
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Package } from "lucide-react";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhyCopyfy from "@/components/WhyCopyfy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToMain = () => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-black to-yellow-500/20 text-white overflow-x-hidden">
      <Hero onGetStarted={scrollToMain} />
      
      {/* Trust Bar */}
      <div className="bg-black/60 backdrop-blur-sm py-6 border-y border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span>Rated 4.8/5 by 25,000+ COD marketers</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-yellow-500" />
              <span>1.2M+ COD orders generated</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-600" />
            <div>COD-optimized campaigns</div>
          </div>
        </div>
      </div>
      
      <main id="main-content" className="flex-1 px-6 py-16 max-w-7xl mx-auto">
        <HowItWorks />
        
        {/* Mid-Content CTA */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-3xl p-12 text-center mb-20 border border-yellow-500/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Dominate COD Markets?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 25,000+ marketers who've already transformed their Cash on Delivery campaigns with AI-powered copywriting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToTop}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 rounded-full shadow-xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              Start COD Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg px-8 py-4 rounded-full"
            >
              Schedule COD Demo
            </Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required • 14-day free trial • COD-optimized templates</p>
        </div>
        
        <WhyCopyfy />
        <Testimonials />
        
        {/* Final CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-12 border border-yellow-500/20">
            <h3 className="text-4xl font-bold mb-6">
              Stop Losing COD Orders. Start Converting.
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your Cash on Delivery performance with AI that understands what makes COD customers trust, click, and complete their orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button 
                onClick={scrollToTop}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-10 py-6 rounded-full shadow-2xl shadow-yellow-500/40 transition-all duration-300 hover:scale-105"
              >
                Create COD Ads Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-xl px-10 py-6 rounded-full"
              >
                View COD Pricing
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
              <span>✓ 14-day COD trial</span>
              <span>✓ No setup fees</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>
        
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
