import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-black to-yellow-500/20 text-white">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
            <p className="text-xl text-gray-300 mb-6">
              Your access to Copy<span className="text-yellow-500">fy</span> has been confirmed.
            </p>
          </div>
          
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20 mb-8">
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-gray-300 mb-6">
              You should receive your login credentials and access instructions via email within the next few minutes.
            </p>
            <p className="text-lg text-yellow-500 font-semibold">
              Welcome to the Copyfy family! 🎉
            </p>
          </div>
          
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-6 text-center">
            <p className="text-yellow-400 text-lg font-bold mb-2">
              7-day money-back guarantee. No refunds after 7 days.
            </p>
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-2 text-blue-300">Important Billing Information</h3>
            <p className="text-blue-200 font-medium">
              The charge will appear on your statement as Digistore24.com.
            </p>
          </div>
          
          <Link to="/">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-full">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;