
import { Shield, Zap, Globe, TrendingUp, Clock, Users } from "lucide-react";

const WhyCopyfy = () => {
  const benefits = [
    {
      icon: Zap,
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning algorithms trained on millions of successful ads to generate copy that converts.",
      metric: "340% CTR Boost"
    },
    {
      icon: Globe,
      title: "Global Localization",
      description: "Native-level translations for 100+ countries with cultural adaptation and local market insights.",
      metric: "50+ Languages"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Real-time A/B testing and performance tracking to continuously improve your campaign results.",
      metric: "240% ROI Increase"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Generate professional ad copy in seconds, not hours. Scale your campaigns without scaling your team.",
      metric: "15 Seconds Average"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, GDPR compliance, and SOC 2 certification ensure your data stays protected.",
      metric: "99.9% Uptime"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 support from copywriting experts and dedicated success managers for enterprise clients.",
      metric: "4.9/5 Support Rating"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          Why Choose Copyfy?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          The most advanced AI copywriting platform trusted by leading brands worldwide
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
