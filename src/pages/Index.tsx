
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-yellow-500 text-white">
      <Hero onGetStarted={scrollToMain} />
      
      <main id="main-content" className="flex-1 px-6 py-8 max-w-4xl mx-auto text-center">
        <HowItWorks />
        <WhyCopyfy />
        <Testimonials />
        <FAQ />
        
        <Button 
          onClick={scrollToTop}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-10 py-6 rounded-full shadow-lg shadow-yellow-500/50 transition-all duration-300 mt-8"
        >
          Start Generating Now
        </Button>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
