
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, MapPin, Phone, Facebook } from 'lucide-react';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-claimsBlue text-white pt-16 pb-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Us Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white border-b border-claimsOrange pb-1 w-24">About Us</h4>
            <p className="text-sm text-gray-200 mb-4">
              ClaimsMD is a healthcare revenue cycle management provider aimed at empowering hospitals, group practices, and independent practices.
            </p>
            
            {/* Resources Section */}
            <h4 className="text-lg font-bold mb-4 mt-8 text-white border-b border-claimsOrange pb-1 w-24">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/message-from-ceo" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Message From CEO</Link></li>
              <li><Link to="/specialties" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Specialties</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Testimonials</Link></li>
            </ul>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white border-b border-claimsOrange pb-1 w-24">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services/medical-billing-services" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Medical Billing Services</Link></li>
              <li><Link to="/services/revenue-cycle-management" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Revenue Cycle Management</Link></li>
              <li><Link to="/services/credentialing-enrollment" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Credentialing Services</Link></li>
              <li><Link to="/services/patient-eligibility-verification" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Patient Benefits & Eligibility Verification</Link></li>
              <li><Link to="/services/medical-billing-audit" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Practice Management</Link></li>
              <li><Link to="/services/healthcare-digital-marketing" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Healthcare Digital Marketing</Link></li>
              <li><Link to="/services/new-practice-setup" className="text-gray-200 hover:text-claimsOrange transition-colors text-sm">Front Office Management</Link></li>
            </ul>
          </div>
          
          {/* Contact Us Column */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white border-b border-claimsOrange pb-1 w-32">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-claimsOrange mt-0.5 mr-2" />
                <span className="text-gray-200 text-sm">+1 (800) 640-6409</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-claimsOrange mt-0.5 mr-2" />
                <span className="text-gray-200 text-sm">info@claimsmd.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-claimsOrange mt-0.5 mr-2" />
                <span className="text-gray-200 text-sm">
                  Main Office Address<br/>
                  Las Vegas, NV
                </span>
              </li>
              
              {/* Social Media Icons */}
              <li>
                <div className="flex space-x-3 mt-4">
                  <a 
                    href="https://www.linkedin.com/company/claims-md" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-claimsOrange transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/claimsmd/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-claimsOrange transition-colors"
                  >
                    <Instagram className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href="https://x.com/ClaimsMd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-claimsOrange transition-colors"
                  >
                    <FaXTwitter className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/claimsmd.net" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-claimsOrange transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-white" />
                  </a>
                  <a 
                    href="https://www.threads.com/@claimsmd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 p-2 rounded-full hover:bg-claimsOrange transition-colors"
                  >
                    <FaThreads className="h-4 w-4 text-white" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Links Menu */}
        <div className="mt-4">
          <ul className="flex justify-center space-x-6 text-sm text-gray-300">
            <li>
              <Link to="/sitemap" className="hover:text-claimsOrange transition-colors">
                Sitemap
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-claimsOrange transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-claimsOrange transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        
        {/* Copyright */}
        <div className="border-t border-gray-600 pt-4">
          <div className="text-gray-300 text-sm text-center">
            &copy; {currentYear} ClaimsMD. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
