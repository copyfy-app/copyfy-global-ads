
import { ArrowRight, Target, Globe, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Target,
      title: "Define Your COD Product",
      description: "Input your product details, pricing, and COD terms. Our AI analyzes your requirements to understand what drives COD conversions in your market."
    },
    {
      icon: Globe, 
      title: "Select COD-Friendly Markets",
      description: "Choose from 100+ countries where COD is popular. Our AI localizes content for regional COD preferences and payment behaviors."
    },
    {
      icon: Package,
      title: "Generate COD-Optimized Copy", 
      description: "Get high-converting COD ad copies that build trust and reduce cart abandonment. Perfect for markets where customers prefer to pay on delivery."
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          How COD Copy Works
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Three simple steps to create compelling Cash on Delivery ad copy that converts
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 shadow-2xl shadow-black/50 hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-sm">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <step.icon className="h-8 w-8 text-yellow-500" />
                </div>
                
                <h3 className="text-yellow-500 text-xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-8 w-8 text-yellow-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
