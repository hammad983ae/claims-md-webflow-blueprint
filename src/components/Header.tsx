// Logo is now served from public directory

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
  // New state for mobile submenu open toggles
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle submenu open/close on mobile
  const toggleMobileSubmenu = (name) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
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
    // { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
  ];

  const valueItems = [
    { name: 'Revenue Cycle Management', path: '/services/revenue-cycle-management' },
    { name: 'A/R Management Services', path: '/services/ar-management-services' },
    { name: 'Patient Billing Audit', path: '/services/patient-billing-audit' },
    { name: 'Billing Review Services', path: '/services/billing-review-services' },
  ];

  const aboutItem = [];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasSubmenu: true, submenuItems: serviceItems },
    { name: 'Value Added Services', path: '/services/value-added-services', hasSubmenu: true, submenuItems: valueItems },
    { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'About Us', path: '/about', hasSubmenu: false, submenuItems: aboutItem },
    { name: 'Contact', path: '/contact' },
  ];
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-2 bg-white shadow-lg backdrop-blur-sm">

      <div className="flex items-center justify-center gap-10 py-2">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/logos/claimsmd-logo.png" 
            alt="ClaimsMD Logo" 
            className="h-10 md:h-14" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {mainNavItems.map((item) => (
                item.hasSubmenu ? (
                  <NavigationMenuItem key={item.name} className="relative z-50">
                    <NavigationMenuTrigger className="text-gray-700 hover:text-claimsBlue font-medium transition-colors px-2 py-1 text-sm">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white rounded-md shadow-lg border border-gray-200 w-[380px] p-4 md:w-[400px] mt-1 z-[9999]">
                      <ul className="grid gap-3 md:grid-cols-2">
                        {item.submenuItems?.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              to={subItem.path}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-[#071078] hover:text-white focus:bg-[#071078] focus:text-white text-sm"
                            >
                              <div className="font-medium">{subItem.name}</div>
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
                      className="text-gray-700 hover:text-claimsBlue font-medium transition-colors px-3 py-2 text-sm"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button 
            className="bg-[#f29846] hover:bg-[#071078] text-white rounded-full transition-colors duration-300 px-5 py-2 text-sm"
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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 mx-4 rounded-xl overflow-hidden">
          <div className="py-4 flex flex-col max-h-[80vh] overflow-y-auto">
            {mainNavItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200 last:border-b-0">
                {item.hasSubmenu ? (
                  <>
                    <button
                      className="w-full px-6 py-3 flex items-center justify-between text-gray-700 font-medium hover:text-claimsBlue transition-colors text-left"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      aria-expanded={!!openSubmenus[item.name]}
                      aria-controls={`${item.name}-submenu`}
                    >
                      {item.name}
                      <ChevronDown
                        size={18}
                        className={`transform transition-transform duration-300 ${openSubmenus[item.name] ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <div
                      id={`${item.name}-submenu`}
                      className={`pl-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        openSubmenus[item.name] ? 'max-h-screen py-2' : 'max-h-0'
                      }`}
                    >
                      {item.submenuItems?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block text-gray-600 hover:text-claimsBlue py-2 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-6 py-3 text-gray-700 hover:text-claimsBlue font-medium transition-colors text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-6 pt-4">
              <Button 
                className="w-full bg-claimsBlue hover:bg-blue-800 hover:scale-105 transition-all text-sm"
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
