
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

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
    { name: 'Revenue Cycle Management', path: '/services/revenue-cycle-management' },
    { name: 'A/R Management Services', path: '/services/ar-management-services' },
    { name: 'Patient Billing Audit', path: '/services/patient-billing-audit' },
    { name: 'Billing Review Services', path: '/services/billing-review-services' },
    { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Why ClaimsMD', path: '/why-claims-md' },
    { name: 'Services', path: '/services', hasSubmenu: true, submenuItems: serviceItems },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Message From CEO', path: '/message-from-ceo' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-lg backdrop-blur-sm rounded-full md:rounded-full md:mx-4 lg:mx-8 mt-2' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between py-2">
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-2xl transition-colors duration-300 ${scrolled ? 'text-claimsBlue' : 'text-white'}`}>
              <span className="text-claimsBlue">Claims</span>
              <span className="text-claimsOrange">MD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  item.hasSubmenu ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className={`text-gray-700 hover:text-claimsBlue font-medium transition-colors ${!scrolled && 'text-white hover:text-white/80'}`}>
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
                        className={`text-gray-700 hover:text-claimsBlue font-medium transition-colors px-3 py-2 ${!scrolled && 'text-white hover:text-white/80'}`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button className={`${scrolled ? 'bg-claimsBlue hover:bg-blue-800' : 'bg-white text-claimsBlue hover:bg-gray-100'}`}>
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
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
              <Button className="btn-primary w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
