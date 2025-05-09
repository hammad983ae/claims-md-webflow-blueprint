
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
      {/* Accent color line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-claimsBlue to-blue-500"></div>
      
      {/* Icon with gradient background */}
      <div className="mb-4 relative">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-claimsBlue/10 to-blue-500/10 flex items-center justify-center text-claimsBlue">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Link with animation */}
      <Link 
        to={link} 
        className="inline-flex items-center text-claimsBlue font-medium group-hover:underline"
      >
        Learn more
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default ServiceCard;
