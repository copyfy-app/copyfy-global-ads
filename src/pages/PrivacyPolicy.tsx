
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-yellow-500/20 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-yellow-500">Privacy Policy</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at inspiranegociosonline@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
