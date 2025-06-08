
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Target } from "lucide-react";
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
      
      {/* Trust Bar - Affiliate Focused */}
      <div className="bg-black/60 backdrop-blur-sm py-4 sm:py-6 border-y border-yellow-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500" />
              <span>Rated 4.9/5 by 50,000+ COD affiliates</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <Target className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span>2.5M+ COD orders from Google Ads</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600" />
            <div>Google Ads compliant copy</div>
          </div>
        </div>
      </div>
      
      <main id="main-content" className="flex-1 px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
        <HowItWorks />
        
        {/* Mid-Content CTA - Affiliate Focused */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center mb-12 sm:mb-20 border border-yellow-500/20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Scale Your COD Affiliate Empire?</h3>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join 50,000+ Google Ads affiliates who've already transformed their COD campaigns and commission rates with Copyfy.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <Button 
              onClick={scrollToTop}
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-xl shadow-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              Start COD Campaigns
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="outline"
              className="w-full sm:w-auto border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full"
            >
              View Affiliate Success Stories
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">No credit card required • 14-day free trial • Google Ads compliant</p>
        </div>
        
        <WhyCopyfy />
        <Testimonials />
        
        {/* Final CTA Section - Affiliate Focused */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-yellow-500/20">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Stop Losing Money on Google Ads. Start Earning Big Commissions.
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Transform your Google Ads COD affiliate performance with AI that understands what makes COD customers buy and complete their orders.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
              <Button 
                onClick={scrollToTop}
                className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-full shadow-2xl shadow-yellow-500/40 transition-all duration-300 hover:scale-105"
              >
                Launch COD Campaigns Now
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 rounded-full"
              >
                View Affiliate Pricing
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span>✓ 14-day affiliate trial</span>
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
