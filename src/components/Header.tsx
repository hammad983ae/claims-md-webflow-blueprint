
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'Services', path: '/services', hasSubmenu: true, submenuItems: serviceItems },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <div className="font-bold text-2xl">
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
                    <NavigationMenuTrigger className="text-gray-700 hover:text-claimsBlue font-medium transition-colors">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[450px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        {item.submenuItems?.map((subItem) => (
                          <li key={subItem.path}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={subItem.path}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">{subItem.name}</div>
                              </Link>
                            </NavigationMenuLink>
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
          <Button className="btn-primary">Get a Quote</Button>
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {mainNavItems.map((item) => (
              item.hasSubmenu ? (
                <div key={item.name} className="space-y-2">
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
                  className="text-gray-700 hover:text-claimsBlue py-2 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button className="btn-primary w-full">Get a Quote</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
