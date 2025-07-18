
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, X } from "lucide-react";

const FAQ = () => {
  const [isFloating, setIsFloating] = useState(false);

  const faqs = [
    {
      question: "How does Copyfy help COD affiliates on Google Ads?",
      answer: "Copyfy generates Google Ads copy specifically optimized for COD affiliate campaigns. Our AI understands Google Ads policies, COD customer psychology, and affiliate compliance requirements to create high-converting campaigns that maximize your commissions."
    },
    {
      question: "Which countries work best for COD affiliate campaigns?",
      answer: "Our best-performing COD affiliate markets include Brazil, India, UAE, Mexico, Thailand, Egypt, Philippines, Malaysia, and 90+ countries. We provide localized copy that respects cultural preferences and local Google Ads regulations."
    },
    {
      question: "Will my Google Ads be compliant using Copyfy?",
      answer: "Yes! Our AI is trained on Google Ads policies and creates compliant copy for COD affiliate campaigns. We focus on transparency, clear value propositions, and avoid policy violations that could suspend your campaigns."
    },
    {
      question: "What's the typical ROI improvement for affiliates?",
      answer: "COD affiliates using Copyfy report an average 340% improvement in conversion rates and 450% increase in ROI. Most affiliates see significant commission increases within the first 30 days using our platform."
    },
    {
      question: "Can I use Copyfy for multiple affiliate offers?",
      answer: "Absolutely! Whether promoting health supplements, electronics, fashion, or any COD-compatible product, Copyfy adapts to your specific affiliate offers and generates targeted Google Ads copy for each campaign."
    },
    {
      question: "Do you support affiliate network requirements?",
      answer: "Yes, we understand major affiliate networks like ClickBank, MaxBounty, PeerFly, and regional networks. Our copy templates align with their compliance requirements while maximizing your conversion potential."
    }
  ];

  return (
    <>
      {/* Main FAQ Section */}
      <section className="mb-12 sm:mb-20 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            style={{
              textShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
            }} 
            className="text-2xl font-bold mb-2 sm:mb-4 text-stone-600 sm:text-4xl"
          >
            COD Affiliate Questions
          </h2>
          <p className="max-w-2xl mx-auto px-2 text-white text-base font-bold sm:text-xl">
            Everything you need to know about scaling COD affiliate campaigns on Google Ads with Copyfy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-black/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-yellow-500/20 px-4 sm:px-6 hover:border-yellow-500/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-yellow-500 hover:text-yellow-400 font-semibold text-base sm:text-lg py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-100 leading-relaxed pb-4 sm:pb-6 text-sm sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Floating FAQ Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button 
          onClick={() => setIsFloating(!isFloating)} 
          className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-12 h-12 sm:w-14 sm:h-14 shadow-2xl shadow-yellow-500/50 transition-all duration-300 hover:scale-110"
        >
          {isFloating ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </Button>
      </div>

      {/* Floating FAQ Panel */}
      {isFloating && (
        <div className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-40 w-80 sm:w-96 max-h-80 sm:max-h-96 bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-yellow-500/30 shadow-2xl overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-yellow-500/20">
            <h3 className="text-yellow-500 font-bold text-base sm:text-lg">Quick COD Affiliate Help</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Get instant answers about COD campaigns on Google Ads</p>
          </div>
          <div className="p-3 sm:p-4 max-h-64 sm:max-h-80 overflow-y-auto">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`floating-${index}`} 
                  className="border-yellow-500/20"
                >
                  <AccordionTrigger className="text-left text-yellow-500 text-xs sm:text-sm py-2 sm:py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button 
              onClick={() => setIsFloating(false)} 
              variant="outline" 
              className="w-full mt-3 sm:mt-4 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs sm:text-sm"
            >
              View All COD Affiliate Questions
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
