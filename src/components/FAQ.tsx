
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
      question: "How does Copyfy's AI generate high-converting copy?",
      answer: "Our advanced AI analyzes millions of successful Google Ads across different industries and markets. It combines proven copywriting frameworks with real-time performance data to generate copy that resonates with your target audience and drives conversions."
    },
    {
      question: "Can I use Copyfy for any product or industry?",
      answer: "Absolutely! Copyfy works across all industries - from e-commerce and SaaS to healthcare and finance. Our AI adapts to your specific product, target audience, and industry regulations to create relevant, compliant copy."
    },
    {
      question: "What languages and countries are supported?",
      answer: "We support 100+ countries with native-level translations in 50+ languages. Our AI doesn't just translate - it localizes your copy for cultural nuances, local buying behaviors, and regional preferences."
    },
    {
      question: "How much can I expect my conversion rates to improve?",
      answer: "Our users typically see 180% average CTR improvement and 240% boost in conversion rates within the first month. Results vary by industry, but 95% of users report significant ROI improvements."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can generate up to 100 ad copies and see the results for yourself before committing."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, Amex), PayPal, Stripe, and regional payment methods including PIX (Brazil), SEPA (Europe), and more. All payments are secured with enterprise-grade encryption."
    }
  ];

  return (
    <>
      {/* Main FAQ Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" 
              style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Copyfy's AI copywriting platform
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
            <h3 className="text-yellow-500 font-bold text-lg">Quick Help</h3>
            <p className="text-gray-300 text-sm">Get instant answers to common questions</p>
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
              View All FAQs
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
