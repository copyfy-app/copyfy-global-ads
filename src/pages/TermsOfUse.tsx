
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-yellow-500/20 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/">
          <Button variant="outline" className="mb-8 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-yellow-500">Terms of Use</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
            <p>By accessing and using Copyfy, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Use License</h2>
            <p>Permission is granted to temporarily download one copy of Copyfy for personal, non-commercial transitory viewing only.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimer</h2>
            <p>The materials on Copyfy are provided on an 'as is' basis. Copyfy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Limitations</h2>
            <p>In no event shall Copyfy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Copyfy, even if Copyfy or its authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Information</h2>
            <p>If you have any questions about these Terms of Use, please contact us at inspiranegociosonline@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
