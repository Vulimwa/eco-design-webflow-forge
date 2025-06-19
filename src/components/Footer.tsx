
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slm-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slm-green-400 to-slm-brown-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-playfair font-bold text-xl">SLM Planning</span>
            </div>
            <p className="text-slm-green-100 mb-4 max-w-md">
              Shaping sustainable futures through innovative urban design, planning, 
              3D rendering, and landscape architecture solutions.
            </p>
            <div className="space-y-2 text-slm-green-100">
              <p>📧 info@slmplanning.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Urban Plaza, Green City, GC 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slm-green-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slm-green-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-slm-green-100 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="text-slm-green-100 hover:text-white transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-slm-green-100">
              <li>Urban Design</li>
              <li>Urban Planning</li>
              <li>3D Rendering</li>
              <li>Landscape Architecture</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slm-green-700 mt-8 pt-8 text-center text-slm-green-100">
          <p>&copy; 2024 SLM Planning Firm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
