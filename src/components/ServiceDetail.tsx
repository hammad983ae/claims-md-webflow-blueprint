
import { ReactNode } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceDetailProps {
  title: string;
  description: string;
  image?: string;
  features: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
}

const ServiceDetail = ({ 
  title, 
  description, 
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600", 
  features, 
  benefits,
  faqs = []
}: ServiceDetailProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-white/90">{description}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Left Column */}
            <div className="md:col-span-3 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Overview</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    {description}
                  </p>
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md my-6" 
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Key Features</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 bg-claimsBlue/10 p-1 rounded-full text-claimsBlue">
                        <Check size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-4">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="md:col-span-2">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-claimsBlue">Benefits</h3>
                <ul className="space-y-4 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 text-claimsOrange">
                        <ArrowRight size={16} />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">Request a Consultation</Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Learn More About Our Services
                  </Button>
                </div>
                
                <div className="mt-8 bg-claimsBlue/10 p-5 rounded-lg">
                  <h4 className="font-semibold text-claimsBlue mb-2">Need more information?</h4>
                  <p className="text-sm text-gray-700 mb-4">Our specialists are ready to answer your questions and help you find the right solution for your practice.</p>
                  <Link to="/contact" className="text-claimsBlue font-medium hover:underline text-sm inline-flex items-center">
                    Contact Us <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4 text-claimsBlue">Ready to Optimize Your Medical Billing?</h2>
            <p className="text-gray-700">
              Join hundreds of healthcare providers who trust ClaimsMD to handle their billing needs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-claimsBlue hover:bg-blue-900" asChild>
              <Link to="/contact">Schedule a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-claimsBlue border-claimsBlue hover:bg-claimsBlue/10" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
