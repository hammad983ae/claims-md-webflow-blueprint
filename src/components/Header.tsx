
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import QuoteFormModal from './QuoteFormModal';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const serviceItems = [
    { name: 'Medical Billing Audit', path: '/services/medical-billing-audit' },
    { name: 'Medical Billing Services', path: '/services/medical-billing-services' },
    { name: 'Patient Eligibility Verification', path: '/services/patient-eligibility-verification' },
    { name: 'Denial Management', path: '/services/denial-management' },
    { name: 'Account Receivable Management', path: '/services/account-receivable-management' },
    { name: 'Credentialing & Enrollment', path: '/services/credentialing-enrollment' },
    { name: 'New Practice Setup', path: '/services/new-practice-setup' },
    { name: 'Reputation Management', path: '/services/reputation-management' },
    { name: 'Value Added Services', path: '/services/value-added-services' },
    { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
    
  ];

  const valueItems = [
    { name: 'Revenue Cycle Management', path: '/services/revenue-cycle-management' },
    { name: 'A/R Management Services', path: '/services/ar-management-services' },
    { name: 'Patient Billing Audit', path: '/services/patient-billing-audit' },
    { name: 'Billing Review Services', path: '/services/billing-review-services' },
    
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    // { name: 'Why ClaimsMD', path: '/why-claims-md' },
    { name: 'Services', path: '/services', hasSubmenu: true, submenuItems: serviceItems },
    { name: 'Value Added Services', path: '/services/value-added-services', hasSubmenu: true, submenuItems: valueItems },
    { name: 'Specialties', path: '/specialties' },
    // { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
    // { name: 'Message From CEO', path: '/message-from-ceo' },
    // { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2">
      <div className="bg-white/95 shadow-lg backdrop-blur-sm rounded-full md:rounded-full md:mx-4 lg:mx-8 mt-2 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl transition-all duration-300">
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/09c5b379-6ce8-491b-a1f7-0a3750cb2ed4.png" 
              alt="ClaimsMD Logo" 
              className="h-12 md:h-14" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="text-gray-700 hover:text-claimsBlue font-medium transition-colors">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[450px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.submenuItems?.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                to={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link 
                        to={item.path}
                        className="text-gray-700 hover:text-claimsBlue font-medium transition-colors px-3 py-2"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button 
              className="bg-claimsBlue hover:bg-blue-800"
              onClick={() => setQuoteModalOpen(true)}
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-xl overflow-hidden">
          <div className="py-4 flex flex-col space-y-3 max-h-[80vh] overflow-y-auto">
            {mainNavItems.map((item) => (
              item.hasSubmenu ? (
                <div key={item.name} className="px-4 space-y-2">
                  <div className="font-medium text-gray-700 flex items-center justify-between" 
                       onClick={() => console.log(`Toggle ${item.name} submenu`)}>
                    {item.name}
                    <ChevronDown size={16} />
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200 space-y-2">
                    {item.submenuItems?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="block text-gray-600 hover:text-claimsBlue py-1 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-claimsBlue py-2 px-4 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="px-4 pt-2">
              <Button 
                className="w-full bg-claimsBlue hover:bg-blue-800 hover:scale-105 transition-all"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Quote Form Modal */}
      <QuoteFormModal 
        open={quoteModalOpen} 
        onOpenChange={setQuoteModalOpen} 
      />
    </header>
  );
};

export default Header;
