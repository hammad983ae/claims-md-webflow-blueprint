
import { ReactNode } from 'react';
import { ArrowRight, Check, Phone, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ServiceStep {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ServiceFeature {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ServiceBenefit {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  features?: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
  steps?: ServiceStep[];
  serviceFeatures?: ServiceFeature[];
  targetAudience?: string[];
  contactInfo?: {
    phone?: string;
    email?: string;
  };
}

const ServiceDetail = ({ 
  title, 
  subtitle,
  description, 
  image = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600", 
  features, 
  benefits,
  faqs = [],
  steps = [],
  serviceFeatures = [],
  targetAudience = [],
  contactInfo
}: ServiceDetailProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-2xl md:text-3xl font-medium mb-4 text-white/90">{subtitle}</p>}
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
            <div className="md:col-span-3 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Overview</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {description}
                  </p>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover" 
                      />
                    </AspectRatio>
                  </div>
                </div>
              </div>
              
              {/* Why is it Critical */}
              {features && features.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Why is {title} Critical for Your Practice?</h2>
                  <p className="text-gray-700 mb-4">
                    Effective {title.toLowerCase()} can have a significant impact on your practice's financial health and operational efficiency:
                  </p>
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
              )}

              {/* Process Steps */}
              {steps && steps.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Our {title} Process</h2>
                  <p className="text-gray-700 mb-6">
                    At ClaimsMD, we take a systematic and proactive approach to {title.toLowerCase()}. Our process is designed to ensure optimal results for your practice:
                  </p>
                  <div className="space-y-8">
                    {steps.map((step, index) => (
                      <div key={index} className="relative pl-12 pb-8 border-l-2 border-claimsBlue/20 last:border-0">
                        <div className="absolute left-[-18px] top-0 w-9 h-9 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-claimsBlue mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Features */}
              {serviceFeatures && serviceFeatures.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Benefits of Choosing ClaimsMD for {title}</h2>
                  <p className="text-gray-700 mb-6">
                    When you partner with ClaimsMD, you gain access to:
                  </p>
                  <div className="space-y-6">
                    {serviceFeatures.map((feature, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-claimsBlue">
                        <h3 className="text-xl font-bold text-claimsBlue mb-2">{index + 1}. {feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Audience */}
              {targetAudience && targetAudience.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Who Can Benefit from Our {title}?</h2>
                  <p className="text-gray-700 mb-4">
                    Our {title.toLowerCase()} services are ideal for:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {targetAudience.map((audience, index) => (
                      <li key={index} className="flex items-start bg-gray-50 p-3 rounded-md">
                        <div className="mt-1 mr-3 text-claimsOrange">
                          <ArrowRight size={16} />
                        </div>
                        <span className="text-gray-700">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-5">
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{index + 1}. {faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="md:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Benefits Card */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-claimsBlue py-4 px-6">
                    <h3 className="text-xl font-bold text-white">Key Benefits</h3>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mt-1 mr-3 text-claimsOrange">
                            <ArrowRight size={16} />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-claimsOrange py-4 px-6">
                    <h3 className="text-xl font-bold text-white">Ready to Get Started?</h3>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <p className="text-gray-700">
                      Don't let challenges impact your practice's financial health. Partner with ClaimsMD today for expert {title.toLowerCase()} solutions.
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full bg-claimsBlue hover:bg-blue-800" size="lg" asChild>
                        <Link to="/contact">Request a Consultation</Link>
                      </Button>
                      
                      {contactInfo && (
                        <div className="space-y-3 border-t border-gray-200 pt-4 mt-4">
                          <h4 className="font-medium text-gray-800">Contact Us Directly:</h4>
                          {contactInfo.phone && (
                            <div className="flex items-center">
                              <Phone className="mr-3 text-claimsBlue" size={18} />
                              <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:text-claimsBlue">
                                {contactInfo.phone}
                              </a>
                            </div>
                          )}
                          {contactInfo.email && (
                            <div className="flex items-center">
                              <Mail className="mr-3 text-claimsBlue" size={18} />
                              <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-claimsBlue">
                                {contactInfo.email}
                              </a>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Resources Card */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 py-4 px-6">
                    <h3 className="text-xl font-bold text-gray-800">Related Resources</h3>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start group">
                      <FileText className="mr-3 text-claimsBlue" size={18} />
                      <Link to="/blog" className="text-gray-700 hover:text-claimsBlue">
                        Best practices for {title.toLowerCase()}
                      </Link>
                    </div>
                    <div className="flex items-start group">
                      <FileText className="mr-3 text-claimsBlue" size={18} />
                      <Link to="/services" className="text-gray-700 hover:text-claimsBlue">
                        Explore our other services
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4 text-claimsBlue">Ready to Transform Your {title} Process?</h2>
            <p className="text-gray-700">
              Join hundreds of healthcare providers who trust ClaimsMD to handle their {title.toLowerCase()} needs.
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
