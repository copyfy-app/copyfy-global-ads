
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, X } from "lucide-react";

const FAQ = () => {
  const [isFloating, setIsFloating] = useState(false);

  const faqs = [
    {
      question: "What makes Copyfy perfect for COD campaigns?",
      answer: "Our AI is specifically trained on millions of successful Cash on Delivery campaigns. It understands the unique psychology of COD customers and creates copy that builds trust, reduces payment anxiety, and increases order completion rates."
    },
    {
      question: "Which countries support COD advertising?",
      answer: "We support 100+ countries where COD is popular, including India, Middle East, Southeast Asia, Latin America, and parts of Africa. Our AI localizes copy for regional COD preferences and cultural nuances."
    },
    {
      question: "How does COD copy differ from regular e-commerce copy?",
      answer: "COD copy focuses on trust-building, risk reduction, and addressing payment concerns. It emphasizes product quality, reliable delivery, and easy return policies to overcome the hesitation of paying on delivery."
    },
    {
      question: "What's the typical COD conversion improvement?",
      answer: "Our users see an average 280% improvement in COD conversion rates and 85% order completion rates. Results vary by market, but 95% of COD marketers report significant ROI improvements within 30 days."
    },
    {
      question: "Is there a free trial for COD features?",
      answer: "Yes! We offer a 14-day free trial with full access to all COD-specific features. No credit card required. Generate up to 100 COD ad copies and test the results before committing."
    },
    {
      question: "Do you support COD payment method integration?",
      answer: "While we focus on copy generation, our platform works with all major COD payment processors including local and regional providers in each supported country."
    }
  ];

  return (
    <>
      {/* Main FAQ Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" 
              style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
            COD Campaign Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about creating successful Cash on Delivery campaigns
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-black/30 backdrop-blur-sm rounded-2xl border border-yellow-500/20 px-6 hover:border-yellow-500/40 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-yellow-500 hover:text-yellow-400 font-semibold text-lg py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Floating FAQ Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsFloating(!isFloating)}
          className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full w-14 h-14 shadow-2xl shadow-yellow-500/50 transition-all duration-300 hover:scale-110"
        >
          {isFloating ? <X className="h-6 w-6" /> : <HelpCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Floating FAQ Panel */}
      {isFloating && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-h-96 bg-black/90 backdrop-blur-lg rounded-2xl border border-yellow-500/30 shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-yellow-500/20">
            <h3 className="text-yellow-500 font-bold text-lg">COD Quick Help</h3>
            <p className="text-gray-300 text-sm">Get instant answers about COD campaigns</p>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem key={index} value={`floating-${index}`} className="border-yellow-500/20">
                  <AccordionTrigger className="text-left text-yellow-500 text-sm py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button 
              onClick={() => setIsFloating(false)}
              variant="outline"
              className="w-full mt-4 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              View All COD FAQs
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
