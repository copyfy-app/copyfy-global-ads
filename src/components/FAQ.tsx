
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
      question: "Como o Copyfy ajuda afiliados COD no Google Ads?",
      answer: "O Copyfy gera copy do Google Ads especificamente otimizado para campanhas de afiliados COD. Nossa IA entende as políticas do Google Ads, psicologia do cliente COD e requisitos de conformidade de afiliados para criar campanhas de alta conversão que maximizam suas comissões."
    },
    {
      question: "Quais países funcionam melhor para campanhas de afiliados COD?",
      answer: "Nossos mercados de afiliados COD com melhor desempenho incluem Brasil, Índia, Emirados Árabes Unidos, México, Tailândia, Egito, Filipinas, Malásia e mais de 90 países. Fornecemos copy localizado que respeita preferências culturais e regulamentações locais do Google Ads."
    },
    {
      question: "Meus Google Ads estarão em conformidade usando Copyfy?",
      answer: "Sim! Nossa IA é treinada nas políticas do Google Ads e cria copy compatível para campanhas de afiliados COD. Focamos na transparência, propostas de valor claras e evitamos violações de políticas que poderiam suspender suas campanhas."
    },
    {
      question: "Qual é a melhoria típica de ROI para afiliados?",
      answer: "Afiliados COD usando Copyfy relatam uma melhoria média de 340% nas taxas de conversão e aumento de 450% no ROI. A maioria dos afiliados vê aumentos significativos de comissão nos primeiros 30 dias usando nossa plataforma."
    },
    {
      question: "Posso usar Copyfy para múltiplas ofertas de afiliados?",
      answer: "Absolutamente! Seja promovendo suplementos de saúde, eletrônicos, moda ou qualquer produto compatível com COD, o Copyfy se adapta às suas ofertas específicas de afiliados e gera copy direcionado do Google Ads para cada campanha."
    },
    {
      question: "Vocês suportam requisitos de redes de afiliados?",
      answer: "Sim, entendemos as principais redes de afiliados como ClickBank, MaxBounty, PeerFly e redes regionais. Nossos templates de copy alinham com seus requisitos de conformidade enquanto maximizam seu potencial de conversão."
    }
  ];

  return (
    <>
      {/* Main FAQ Section */}
      <section className="mb-12 sm:mb-20 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4" 
              style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
            Perguntas sobre Afiliados COD
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Tudo que você precisa saber sobre escalar campanhas de afiliados COD no Google Ads com Copyfy
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
          {isFloating ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        </Button>
      </div>

      {/* Floating FAQ Panel */}
      {isFloating && (
        <div className="fixed bottom-16 right-4 sm:bottom-24 sm:right-6 z-40 w-80 sm:w-96 max-h-80 sm:max-h-96 bg-black/95 backdrop-blur-lg rounded-xl sm:rounded-2xl border border-yellow-500/30 shadow-2xl overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-yellow-500/20">
            <h3 className="text-yellow-500 font-bold text-base sm:text-lg">Ajuda Rápida Afiliados COD</h3>
            <p className="text-gray-300 text-xs sm:text-sm">Obtenha respostas instantâneas sobre campanhas COD no Google Ads</p>
          </div>
          <div className="p-3 sm:p-4 max-h-64 sm:max-h-80 overflow-y-auto">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 3).map((faq, index) => (
                <AccordionItem key={index} value={`floating-${index}`} className="border-yellow-500/20">
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
              Ver Todas as Perguntas de Afiliados COD
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default FAQ;
