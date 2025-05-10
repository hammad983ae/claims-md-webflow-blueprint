
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroBanner = ({ title, subtitle, ctaText, ctaLink }: HeroBannerProps) => {
  return (
    <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 overflow-hidden pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical billing background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-claimsBlue/90 to-indigo-900/90"></div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-claimsOrange/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container-custom relative z-10 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in animation-delay-300">
            {subtitle}
          </p>
          
          <div className="animate-fade-in animation-delay-600 group">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-claimsOrange to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              asChild
            >
              <Link to={ctaLink} className="flex items-center">
                {ctaText}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,32L120,37.3C240,43,480,53,720,53.3C960,53,1200,43,1320,37.3L1440,32L1440,60L1320,60C1200,60,960,60,720,60C480,60,240,60,120,60L0,60Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
