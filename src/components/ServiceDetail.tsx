
import { ReactNode } from 'react';
import { ArrowRight, Check, Phone, Mail, FileText, Star, Clock, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from '@/components/ui/motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p 
                  className="text-xl md:text-2xl font-medium mb-4 text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {subtitle}
                </motion.p>
              )}
              <motion.p 
                className="text-lg text-white/90 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                  />
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '98%', label: 'Clean Claim Rate' },
              { value: '30%', label: 'Average Increase in Collections' },
              { value: '24/7', label: 'Support Available' },
              { value: '10+', label: 'Years of Experience' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-claimsBlue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Column - Main Content */}
            <div className="md:col-span-8 space-y-12">
              {/* Tabs Section */}
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="process">Our Process</TabsTrigger>
                  <TabsTrigger value="benefits">Key Benefits</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">{title} Overview</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {description}
                    </p>

                    {image && (
                      <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                        <AspectRatio ratio={16/9}>
                          <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover" 
                          />
                        </AspectRatio>
                      </div>
                    )}
                    
                    {features && features.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4 text-claimsBlue">What's Included</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {features.map((feature, index) => (
                            <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                              <div className="mr-4 bg-claimsBlue/10 p-2 rounded-full text-claimsBlue">
                                <Check size={16} />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="process" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Our {title} Process</h2>
                    
                    {steps && steps.length > 0 ? (
                      <div className="space-y-8 mt-6">
                        {steps.map((step, index) => (
                          <div key={index} className="relative pl-16 pb-8">
                            <div className="absolute left-0 top-0 w-10 h-10 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <h3 className="text-xl font-bold text-claimsBlue mb-2">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-6 mt-6">
                        <div className="relative pl-16 pb-8">
                          <div className="absolute left-0 top-0 w-10 h-10 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                          <h3 className="text-xl font-bold text-claimsBlue mb-2">Initial Assessment</h3>
                          <p className="text-gray-700">We begin with a thorough assessment of your current billing processes, challenges, and goals to create a customized plan.</p>
                        </div>
                        
                        <div className="relative pl-16 pb-8">
                          <div className="absolute left-0 top-0 w-10 h-10 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                          <h3 className="text-xl font-bold text-claimsBlue mb-2">Implementation</h3>
                          <p className="text-gray-700">Our team seamlessly integrates with your practice, implementing optimized workflows and technologies.</p>
                        </div>
                        
                        <div className="relative pl-16 pb-8">
                          <div className="absolute left-0 top-0 w-10 h-10 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                            3
                          </div>
                          <h3 className="text-xl font-bold text-claimsBlue mb-2">Continuous Optimization</h3>
                          <p className="text-gray-700">We continuously monitor performance, identify improvement areas, and adjust strategies for optimal results.</p>
                        </div>
                        
                        <div className="relative pl-16">
                          <div className="absolute left-0 top-0 w-10 h-10 bg-claimsBlue rounded-full flex items-center justify-center text-white font-bold">
                            4
                          </div>
                          <h3 className="text-xl font-bold text-claimsBlue mb-2">Reporting & Analysis</h3>
                          <p className="text-gray-700">Receive detailed reports and insights into your practice's financial performance with actionable recommendations.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Benefits of Our {title}</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow border-l-4 border-claimsBlue">
                          <div className="flex items-start">
                            <div className="mr-4 text-claimsBlue">
                              <Star size={20} />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-2">Benefit {index + 1}</h3>
                              <p className="text-gray-700">{benefit}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Target Audience */}
              {targetAudience && targetAudience.length > 0 && (
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800">Who Can Benefit</h2>
                  <p className="text-gray-700 mb-6">
                    Our {title.toLowerCase()} services are ideal for:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {targetAudience.map((audience, index) => (
                      <div key={index} className="flex items-center bg-white p-4 rounded-md shadow-sm">
                        <div className="mr-3 text-claimsOrange">
                          <CircleCheck size={18} />
                        </div>
                        <span className="text-gray-700">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-3">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-claimsBlue">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-claimsBlue/10 to-indigo-100 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-claimsBlue">Ready to Get Started?</h2>
                <p className="text-gray-700 mb-6">
                  Take the first step toward optimizing your {title.toLowerCase()} processes. Our team of experts is ready to help.
                </p>
                <Button size="lg" className="bg-claimsBlue hover:bg-blue-800" asChild>
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Contact Info Card */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-claimsBlue py-4 px-6">
                    <h3 className="text-xl font-bold text-white">Contact Us</h3>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <p className="text-gray-700">
                      Have questions about our {title.toLowerCase()} services? Our team is here to help.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Phone className="mr-3 text-claimsBlue" size={18} />
                        <a href="tel:8003389171" className="text-gray-700 hover:text-claimsBlue">
                          (800) 338-9171
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Mail className="mr-3 text-claimsBlue" size={18} />
                        <a href="mailto:info@claimsmd.net" className="text-gray-700 hover:text-claimsBlue">
                          info@claimsmd.net
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-3 text-claimsBlue" size={18} />
                        <span className="text-gray-700">Mon-Fri: 8am - 6pm EST</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Related Services */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-gray-50 py-4 px-6">
                    <h3 className="text-xl font-bold text-gray-800">Related Services</h3>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {[
                      { title: 'Medical Billing Audit', link: '/services/medical-billing-audit' },
                      { title: 'Denial Management', link: '/services/denial-management' },
                      { title: 'Revenue Cycle Management', link: '/services/revenue-cycle-management' },
                      { title: 'Credentialing & Enrollment', link: '/services/credentialing-enrollment' }
                    ].filter(service => !service.link.includes(title.toLowerCase().replace(/\s/g, '-')))
                      .slice(0, 3)
                      .map((service, index) => (
                        <div key={index} className="flex items-start group">
                          <FileText className="mr-3 text-claimsBlue" size={18} />
                          <Link to={service.link} className="text-gray-700 hover:text-claimsBlue">
                            {service.title}
                          </Link>
                        </div>
                      ))
                    }
                    <Button variant="link" className="text-claimsBlue p-0" asChild>
                      <Link to="/services" className="flex items-center">
                        View all services <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Testimonials */}
                <Card className="shadow-md border border-gray-100 overflow-hidden">
                  <div className="bg-claimsOrange py-4 px-6">
                    <h3 className="text-xl font-bold text-white">Client Testimonials</h3>
                  </div>
                  <CardContent className="p-6 space-y-6">
                    <blockquote className="italic text-gray-600 border-l-4 border-claimsBlue/30 pl-4">
                      "ClaimsMD has transformed our billing processes. We've seen a 35% increase in revenue and significantly fewer denied claims."
                      <footer className="mt-2 text-sm text-gray-500">
                        — Dr. Sarah Johnson, Family Practice
                      </footer>
                    </blockquote>
                    <blockquote className="italic text-gray-600 border-l-4 border-claimsBlue/30 pl-4">
                      "Their expertise has been invaluable to our practice. The team is responsive, professional, and truly cares about our success."
                      <footer className="mt-2 text-sm text-gray-500">
                        — Michael Roberts, Practice Manager
                      </footer>
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
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
