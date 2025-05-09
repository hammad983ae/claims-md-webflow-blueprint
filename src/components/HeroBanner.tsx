
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroBanner = ({
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  backgroundImage,
  children,
}: HeroBannerProps) => {
  return (
    <div 
      className="relative bg-claimsBlue text-white py-16 md:py-24"
      style={backgroundImage ? { 
        backgroundImage: `linear-gradient(rgba(7, 16, 120, 0.85), rgba(7, 16, 120, 0.85)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">{subtitle}</p>
        
        {ctaText && (
          <Button 
            className="btn-secondary text-lg px-8 py-6" 
            asChild
          >
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        )}
        
        {children}
      </div>
    </div>
  );
};

export default HeroBanner;
