
import { Shield, Target, Globe, TrendingUp, Clock, Users } from "lucide-react";

const WhyCopyfy = () => {
  const benefits = [
    {
      icon: Target,
      title: "Google Ads COD Optimization",
      description: "Specialized AI trained on millions of successful Google Ads COD campaigns to generate copy that maximizes affiliate conversions and order completion.",
      metric: "340% Conversion Boost"
    },
    {
      icon: Globe,
      title: "100+ COD Countries",
      description: "Native-level translations for affiliate-friendly COD markets with cultural adaptation and local payment preferences optimized for Google Ads.",
      metric: "50+ Affiliate Markets"
    },
    {
      icon: TrendingUp,
      title: "Affiliate ROI Tracking",
      description: "Real-time A/B testing specifically for Google Ads COD affiliate campaigns to maximize commission rates and order completion.",
      metric: "450% ROI Increase"
    },
    {
      icon: Clock,
      title: "Instant Campaign Copy",
      description: "Generate professional Google Ads copy for COD affiliate offers in seconds. Perfect for scaling campaigns across multiple countries quickly.",
      metric: "5 Seconds Generation"
    },
    {
      icon: Shield,
      title: "Compliance & Trust",
      description: "Copy templates designed for Google Ads compliance while building customer confidence in COD transactions, reducing affiliate campaign risks.",
      metric: "95% Approval Rate"
    },
    {
      icon: Users,
      title: "Affiliate Expert Support",
      description: "24/7 support from COD affiliate marketing experts who understand Google Ads policies and cash-on-delivery campaign optimization.",
      metric: "4.9/5 Affiliate Support"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          Why COD Affiliates Choose Copyfy
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The only AI copywriting platform specifically optimized for Google Ads COD affiliate campaigns
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
