
import { Star, Flag } from "lucide-react";
import johnImage from "@/assets/testimonial-john.jpg";
import anaImage from "@/assets/testimonial-ana.jpg";
import klausImage from "@/assets/testimonial-klaus.jpg";
import sarahImage from "@/assets/testimonial-sarah.jpg";
import mikeImage from "@/assets/testimonial-mike.jpg";
import emmaImage from "@/assets/testimonial-emma.jpg";

const Testimonials = () => {
  const testimonials = [{
    name: "John Anderson",
    role: "Google Ads Affiliate",
    company: "USA Performance Network",
    quote: "Copyfy transformed my Google Ads campaigns. My COD conversion rate jumped from 2.1% to 7.8% across USA, Canada, and Mexico. The ROI is incredible.",
    rating: 5,
    image: johnImage,
    country: "USA",
    flag: "🇺🇸"
  }, {
    name: "Ana Silva Santos",
    role: "Performance Marketer",
    company: "Brazil COD Solutions",
    quote: "Running COD campaigns in Brazil, Argentina, and Chile was challenging until I found Copyfy. Now generating $50K+ monthly with Google Ads.",
    rating: 5,
    image: anaImage,
    country: "Brazil",
    flag: "🇧🇷"
  }, {
    name: "Klaus Mueller",
    role: "Digital Affiliate",
    company: "Germany Digital Hub",
    quote: "As a Google Ads affiliate focusing on COD, Copyfy helped me scale from $5K to $80K monthly revenue across Germany, Austria, and Switzerland.",
    rating: 5,
    image: klausImage,
    country: "Germany",
    flag: "🇩🇪"
  }, {
    name: "Sarah Johnson",
    role: "E-commerce Affiliate",
    company: "USA COD Network",
    quote: "Copyfy's Google Ads copy for COD campaigns helped me expand across USA, UK, and Australia. 450% increase in affiliate commissions!",
    rating: 5,
    image: sarahImage,
    country: "USA",
    flag: "🇺🇸"
  }, {
    name: "Mike Thompson",
    role: "Performance Affiliate",
    company: "Canada Marketing Pro",
    quote: "Managing Google Ads for COD across Canada, USA, and Mexico became effortless with Copyfy. Best investment for any COD affiliate.",
    rating: 5,
    image: mikeImage,
    country: "Canada",
    flag: "🇨🇦"
  }, {
    name: "Emma Wilson",
    role: "Google Ads Specialist",
    company: "Australia Affiliate Masters",
    quote: "Copyfy's COD-focused copy helped me achieve 85% order completion rates on Google Ads campaigns across Australia, New Zealand, and UK.",
    rating: 5,
    image: emmaImage,
    country: "Australia",
    flag: "🇦🇺"
  }];
  return (
    <section className="mb-12 sm:mb-20 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4" style={{
        textShadow: '0 0 8px rgba(255, 215, 0, 0.7)'
      }}>
          Trusted by 18,500+ COD Affiliates Worldwide
        </h2>
        <p className="sm:text-xl max-w-2xl mx-auto px-2 text-base font-bold text-yellow-500">
          See how top Google Ads affiliates are crushing COD campaigns with Copyfy across 100+ countries
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-yellow-500/20 shadow-2xl shadow-black/50 hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-3 sm:mb-4">
              {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500 text-yellow-500" />)}
            </div>
            
            <p className="text-gray-100 mb-4 sm:mb-6 leading-relaxed italic text-sm sm:text-base">
              "{testimonial.quote}"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative border-2 border-yellow-500">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute -top-1 -right-1 text-sm sm:text-lg">{testimonial.flag}</span>
              </div>
              <div>
                <h4 className="text-yellow-500 font-semibold text-sm sm:text-base">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                <div className="flex items-center gap-1 text-gray-500 text-xs">
                  <Flag className="h-3 w-3" />
                  <span>{testimonial.country}</span>
                </div>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </div>
          </div>)}
      </div>
    </section>
  );
};
export default Testimonials;

