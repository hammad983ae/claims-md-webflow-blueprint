
import { motion } from '@/components/ui/motion';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface EHRProps {
  name: string;
  logo: string;
}

const EHRsList = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  const ehrs: EHRProps[] = [
    { name: "Epic", logo: "/images/ehrs/epic-logo.png" },
    { name: "Cerner", logo: "/images/ehrs/cerner-logo.png" },
    { name: "Allscripts", logo: "/images/ehrs/allscripts-logo.png" },
    { name: "eClinicalWorks", logo: "/images/ehrs/eclinicalworks-logo.png" },
    { name: "NextGen", logo: "/images/ehrs/nextgen-logo.png" },
    { name: "Athenahealth", logo: "/images/ehrs/athenahealth-logo.png" },
    { name: "SimplePractice", logo: "/images/ehrs/simplepractice-logo.png" },
    { name: "PracticeSuite", logo: "/images/ehrs/practicesuite-logo.png" },
    { name: "Office Ally", logo: "/images/ehrs/office-ally-logo.png" },
    { name: "CollaborateMD", logo: "/images/ehrs/collaboratemd-logo.png" },
    { name: "drchrono", logo: "/images/ehrs/drchrono-logo.png" },
    { name: "Azalea Health", logo: "/images/ehrs/azalea-health-logo.png" },
    { name: "Experity", logo: "/images/ehrs/experity-logo.png" },
    { name: "Genesis", logo: "/images/ehrs/genesis-logo.png" },
    { name: "Practice Fusion", logo: "/images/ehrs/practice-fusion-logo.png" },
    { name: "Greenway Health", logo: "/images/ehrs/greenway-health-logo.png" },
    { name: "HealthFusion", logo: "/images/ehrs/healthfusion-logo.png" },
    { name: "Amazing Charts", logo: "/images/ehrs/amazing-charts-logo.png" },
    { name: "eMDs", logo: "/images/ehrs/emds-logo.png" },
    { name: "GE Healthcare", logo: "/images/ehrs/ge-healthcare-logo.png" },
    { name: "WebPT", logo: "/images/ehrs/webpt-logo.png" },
    { name: "CureMD", logo: "/images/ehrs/curemd-logo.png" },
    { name: "Tebra", logo: "/images/ehrs/tebra-logo.png" },
    { name: "ICANotes", logo: "/images/ehrs/icanotes-logo.png" },
    { name: "RXNT", logo: "/images/ehrs/rxnt-logo.png" },
  ];

  return (
    <section id="ehrs-section" className="py-14 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center font-quicksand font-bold">EHRs We Work With</h2>
        <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto font-poppins">
          Our billing solutions seamlessly integrate with all major Electronic Health Record systems, 
          ensuring a smooth workflow for your practice.
        </p>
        
        <div className="relative px-10 mx-auto max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto"
          >
            <CarouselContent className="py-4">
              {ehrs.map((ehr, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] h-full"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 mb-4 flex items-center justify-center border border-gray-200 hover:border-[#2058a8] transition-colors group-hover:border-[#2058a8]">
                      <img 
                        src={ehr.logo} 
                        alt={`${ehr.name} logo`} 
                        className="w-20 h-20 object-contain transform transition-transform hover:scale-110 duration-300" 
                        onError={(e) => {
                          // eslint-disable-next-line no-console
                          console.warn('EHR logo failed to load:', ehr.name, (e.target as HTMLImageElement).src);
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                    </div>
                    <p className="font-outfit font-semibold text-center text-gray-800">{ehr.name}</p>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white hover:bg-gray-100 hover:text-[#2058a8] border border-gray-200" />
            <CarouselNext className="right-0 bg-white hover:bg-gray-100 hover:text-[#2058a8] border border-gray-200" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600 font-poppins">
            Don't see your EHR? <a href="/contact" className="text-[#2058a8] hover:underline hover:text-[#ec7c04] transition-colors">Contact us</a> – we likely support it or can integrate with your solution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EHRsList;
