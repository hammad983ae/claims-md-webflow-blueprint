
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
    { name: "Epic", logo: "/lovable-uploads/546bcc39-9c9f-41e0-bb30-958d93ad123e.png" },
    { name: "Cerner", logo: "/lovable-uploads/f92d274b-ac77-4a8a-8a6a-7da786f8d2e8.png" },
    { name: "Allscripts", logo: "/lovable-uploads/752d9dfe-2c07-4d83-aae6-d1f830ebac94.png" },
    { name: "eClinicalWorks", logo: "/lovable-uploads/f5028842-a4fa-4458-bb36-d530b9bcc47b.png" },
    { name: "NextGen", logo: "/lovable-uploads/303e5be8-6707-4527-90f9-6daecc9c0659.png" },
    { name: "Athenahealth", logo: "/lovable-uploads/13ac07b1-638e-4c71-8220-4f7ad08014e4.png" },
    { name: "SimplePractice", logo: "/lovable-uploads/13ea3879-e2a9-4542-919e-c7f536cb186c.png" },
    { name: "PracticeSuite", logo: "/lovable-uploads/dcc1175d-e6db-460b-bc9e-3265769aa66f.png" },
    { name: "Office Ally", logo: "/lovable-uploads/86124a28-5d36-48ff-8d25-9345c4319b51.png" },
    { name: "CollaborateMD", logo: "/lovable-uploads/5f24bc9c-7cd0-4ccb-9f04-d932e7a3c490.png" },
    { name: "drchrono", logo: "/lovable-uploads/976df11d-b89a-4dcd-9cd8-7ac8a3747cb6.png" },
    { name: "Azalea Health", logo: "/lovable-uploads/f23c2416-285c-409b-be0b-9c9e1a812b44.png" },
    { name: "Experity", logo: "/lovable-uploads/7806888e-cb80-4817-9ec1-94eb648c43a4.png" },
    { name: "Genesis", logo: "/lovable-uploads/2e3f5aba-a8f8-425e-b044-62afc42576e3.png" },
    { name: "Practice Fusion", logo: "/lovable-uploads/4cb50503-2a89-41f7-ba46-14708f8c9269.png" },
    { name: "Greenway Health", logo: "/lovable-uploads/e983f67e-3e02-48f0-89aa-7781ab1b0dc2.png" },
    { name: "HealthFusion", logo: "/lovable-uploads/9d869156-5cf9-4ae5-ae72-51398ce5a356.png" },
    { name: "Amazing Charts", logo: "/lovable-uploads/1a80e61e-42e0-4aff-8f0c-fe3ea78acb2a.png" },
    { name: "eMDs", logo: "/lovable-uploads/2b7dd5ac-4a8f-48e8-a673-e56100b4da81.png" },
    { name: "GE Healthcare", logo: "/lovable-uploads/bc1e6d8a-975d-4e5a-87a3-716ebf512dbf.png" },
    { name: "WebPT", logo: "/lovable-uploads/83f987b0-eb2a-42e8-a3af-ffab5bcda59e.png" },
    { name: "CureMD", logo: "/lovable-uploads/1c5472d7-e4f4-4600-aaeb-caf82e38a788.png" },
    { name: "Tebra", logo: "/lovable-uploads/3f7fce13-b3e1-49a8-bcba-72f1d88148ac.png" },
    { name: "ICANotes", logo: "/lovable-uploads/2959b0c8-5e4e-4840-b6a3-f5d9c45cb0fe.png" },
    { name: "RXNT", logo: "/lovable-uploads/5d95e10d-4aee-4849-8304-3c28748ee8d7.png" },
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
