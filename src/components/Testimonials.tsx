
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Performance Marketing Manager",
      company: "TechFlow Inc.",
      quote: "Copyfy increased our Google Ads CTR by 340% in just 2 weeks. The multilingual capabilities are game-changing for our global campaigns.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez", 
      role: "E-commerce Director",
      company: "Urban Styles",
      quote: "We've generated over $2M in additional revenue using Copyfy's AI copy. The ROI is absolutely incredible - 15x return on our subscription.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Digital Marketing Lead",
      company: "HealthFirst",
      quote: "The time savings alone justify the cost. What used to take our team 8 hours now takes 15 minutes, and the results are consistently better.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          Trusted by 50,000+ Marketers Worldwide
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          See how leading brands are achieving breakthrough results with AI-powered copywriting
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 shadow-2xl shadow-black/50 hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
          >
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            
            <p className="text-gray-100 mb-6 leading-relaxed italic">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="text-yellow-500 font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
