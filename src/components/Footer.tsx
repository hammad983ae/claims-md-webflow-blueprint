
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'Why Claims MD', path: '/why-claims-md' },
      { name: 'Who We Are', path: '/about' },
      { name: 'Message from CEO', path: '/ceo-message' },
    ],
    services: [
      { name: 'Medical Billing Audit', path: '/services/medical-billing-audit' },
      { name: 'Medical Billing Services', path: '/services/medical-billing-services' },
      { name: 'Patient Eligibility Verification', path: '/services/patient-eligibility-verification' },
      { name: 'Denial Management', path: '/services/denial-management' },
      { name: 'Account Receivable Management', path: '/services/account-receivable-management' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Specialties', path: '/specialties' },
      { name: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Return Policy', path: '/return-policy' },
      { name: 'Quality Policy', path: '/quality-policy' },
      { name: 'Terms & Conditions', path: '/terms-conditions' },
      { name: 'Sitemap', path: '/sitemap' },
    ],
  };

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4 text-claimsBlue">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-claimsBlue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-claimsBlue">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-claimsBlue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-claimsBlue">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-claimsBlue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-claimsBlue">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-claimsBlue transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="font-bold text-2xl mb-2">
                <span className="text-claimsBlue">Claims</span>
                <span className="text-claimsOrange">MD</span>
              </div>
              <p className="text-gray-600 text-sm">
                Professional Medical Billing Solutions
              </p>
            </div>
            <div className="text-gray-600 text-sm">
              &copy; {currentYear} ClaimsMD. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
