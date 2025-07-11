
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/50 px-6 py-8 text-center text-sm text-gray-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link 
              to="/privacy-policy.html" 
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms.html" 
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Terms of Use
            </Link>
            <Link 
              to="/contact.html" 
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-xs text-gray-400 leading-relaxed mb-4">
            <p>Copyfy LLC</p>
            <p>548 Market Street PMB 62345</p>
            <p>San Francisco, CA 94104-5401</p>
            <p>United States</p>
          </div>
          
          <div className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-yellow-500 text-sm font-medium">
              We offer a 7-day money-back guarantee. After 7 days, no refunds will be accepted.
            </p>
          </div>
          
          <p className="text-white text-lg font-semibold">
            © 2025 Copyfy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
