
import React, { useEffect, useState } from 'react';
import { BarChart3, CheckCircle, Clock, Users } from 'lucide-react';

interface CounterItemProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
  duration?: number;
}

const CounterItem = ({ value, label, icon, suffix = '', duration = 2000 }: CounterItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16); // 60fps approx
    
    const timer = setInterval(() => {
      start += increment;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <div className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-gradient-to-br from-claimsBlue to-blue-600 rounded-full p-4 text-white mx-auto w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-claimsBlue mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">The Numbers Speak for Themselves</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CounterItem 
            value={500000} 
            label="Claims Processed Annually" 
            icon={<BarChart3 size={32} />} 
            suffix="+"
          />
          <CounterItem 
            value={98} 
            label="First-Pass Resolution Rate" 
            icon={<CheckCircle size={32} />}
            suffix="%"
          />
          <CounterItem 
            value={15} 
            label="Years Of Experience" 
            icon={<Clock size={32} />}
            suffix="+"
          />
          <CounterItem 
            value={500} 
            label="Satisfied Healthcare Providers" 
            icon={<Users size={32} />}
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
