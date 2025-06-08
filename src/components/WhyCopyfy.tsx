
import { Shield, Package, Globe, TrendingUp, Clock, Users } from "lucide-react";

const WhyCopyfy = () => {
  const benefits = [
    {
      icon: Package,
      title: "COD-Optimized Copy",
      description: "Specialized AI trained on millions of successful COD campaigns to generate copy that builds trust and drives cash-on-delivery conversions.",
      metric: "280% COD Conversion Boost"
    },
    {
      icon: Globe,
      title: "COD Market Localization",
      description: "Native-level translations for 100+ COD-friendly countries with cultural adaptation and local payment preferences.",
      metric: "50+ COD Markets"
    },
    {
      icon: TrendingUp,
      title: "COD Performance Tracking",
      description: "Real-time A/B testing and performance tracking specifically for COD campaigns to maximize order completion rates.",
      metric: "340% Order Completion"
    },
    {
      icon: Clock,
      title: "Instant COD Copy",
      description: "Generate professional COD ad copy in seconds. Perfect for scaling COD campaigns across multiple markets quickly.",
      metric: "10 Seconds Generation"
    },
    {
      icon: Shield,
      title: "COD Trust Building",
      description: "Copy templates designed to build customer confidence in COD transactions, reducing hesitation and increasing conversions.",
      metric: "85% Trust Score"
    },
    {
      icon: Users,
      title: "COD Expert Support",
      description: "24/7 support from COD marketing experts who understand the unique challenges of cash-on-delivery campaigns.",
      metric: "4.9/5 COD Support"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          Why Choose Copyfy for COD?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The only AI copywriting platform specifically optimized for Cash on Delivery campaigns
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 shadow-2xl shadow-black/50 hover:shadow-yellow-500/20 transition-all duration-500 hover:scale-105 group"
          >
            {/* Icon & Metric */}
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <benefit.icon className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="text-right">
                <div className="text-yellow-500 font-bold text-sm">{benefit.metric}</div>
              </div>
            </div>
            
            <h3 className="text-yellow-500 text-xl font-bold mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-200 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCopyfy;
