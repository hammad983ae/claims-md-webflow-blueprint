
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
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden group h-full flex flex-col justify-between hover:translate-y-[-5px]">
      {/* Accent color line with gradient using brand colors */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#071078] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

      
      {/* Icon with gradient background */}
      <div className="mb-4 relative">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#2058a8]/10 to-[#ec7c04]/10 flex items-center justify-center text-[#2058a8] group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h3 className="text-xl font-quicksand font-bold mb-2 text-gray-800 group-hover:text-[#2058a8] transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 font-poppins">{description}</p>
      </div>
      
      {/* Link with animation */}
      <Link 
        to={link} 
        className="inline-flex items-center text-[#2058a8] font-medium mt-2 relative overflow-hidden group-hover:font-semibold"
      >
        <span className="relative z-10 flex items-center font-poppins">
          Learn more
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ec7c04] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </Link>
    </div>
  );
};

export default ServiceCard;
