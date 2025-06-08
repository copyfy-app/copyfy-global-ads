
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "COD Marketing Manager",
      company: "Middle East Imports",
      quote: "Copyfy's COD-focused copy increased our cash-on-delivery conversion rate by 340% across 12 countries. The trust-building language is incredible.",
      rating: 5,
      avatar: "AH"
    },
    {
      name: "Priya Sharma", 
      role: "E-commerce Director",
      company: "India Direct Sales",
      quote: "We've generated over $3M in COD revenue using Copyfy's AI. The local market adaptation for COD campaigns is absolutely game-changing.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Carlos Rodriguez",
      role: "Digital Marketing Lead",
      company: "Latin COD Solutions",
      quote: "COD campaigns used to have 60% completion rates. With Copyfy's copy, we're now at 85% completion. The ROI is phenomenal.",
      rating: 5,
      avatar: "CR"
    }
  ];

  return (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" 
            style={{ textShadow: '0 0 8px rgba(255, 215, 0, 0.7)' }}>
          Trusted by 25,000+ COD Marketers Worldwide
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          See how leading COD brands are achieving breakthrough results with AI-powered copywriting
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
