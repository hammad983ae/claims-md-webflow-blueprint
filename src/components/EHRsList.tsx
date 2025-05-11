
import { motion } from '@/components/ui/motion';
import { useState, useEffect } from 'react';

interface EHRProps {
  name: string;
  logo: string;
}

const EHRsList = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('ehrs-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const ehrs: EHRProps[] = [
    { name: "Epic", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=120&h=80" },
    { name: "Cerner", logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=120&h=80" },
    { name: "Allscripts", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=120&h=80" },
    { name: "eClinicalWorks", logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=120&h=80" },
    { name: "NextGen", logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=120&h=80" },
    { name: "Athenahealth", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=120&h=80" },
  ];

  return (
    <section id="ehrs-section" className="py-14 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center font-heading">EHRs We Work With</h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Our billing solutions seamlessly integrate with all major Electronic Health Record systems, 
          ensuring a smooth workflow for your practice.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {ehrs.map((ehr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4 flex items-center justify-center border border-gray-200">
                <img 
                  src={ehr.logo} 
                  alt={`${ehr.name} logo`} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <p className="font-outfit text-center text-gray-800">{ehr.name}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Don't see your EHR? <a href="/contact" className="text-claimsBlue hover:underline">Contact us</a> – we likely support it or can integrate with your solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EHRsList;
