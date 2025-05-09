
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full border border-gray-100 hover:shadow-lg transition-shadow">
      {icon && <div className="mb-4 text-claimsBlue">{icon}</div>}
      <h3 className="text-xl font-bold mb-3 text-claimsBlue">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <Button variant="outline" className="border-claimsBlue text-claimsBlue hover:bg-claimsBlue hover:text-white mt-auto" asChild>
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
