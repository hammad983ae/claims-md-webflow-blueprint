
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import CalendlyWidget from '@/components/CalendlyWidget';
import EHRsList from '@/components/EHRsList';
import CounterSection from '@/components/CounterSection';
import { Button } from '@/components/ui/button';
import { Check, FileText, Shield, Calendar, ArrowRight, BarChart3, Users, HeartPulse } from 'lucide-react';
import CMP from '../Assets/Confident Medical Professional Outdoors.jpeg';
import CPP from '../Assets/Confident Healthcare Professional in Modern Clinic.jpeg';

const Index = () => {
  const services = [
    {
      title: 'Medical Billing Audit',
      description: 'Comprehensive evaluation of your billing processes to identify areas of improvement and ensure compliance.',
      icon: <FileText size={32} />,
      link: '/services/medical-billing-audit'
    },
    {
      title: 'Denial Management',
      description: 'Expert handling of claim denials to maximize reimbursements and reduce revenue loss.',
      icon: <Shield size={32} />,
      link: '/services/denial-management'
    },
    {
      title: 'Patient Eligibility Verification',
      description: 'Accurate verification of patient insurance coverage to reduce claim rejections.',
      icon: <Check size={32} />,
      link: '/services/patient-eligibility-verification'
    },
    {
      title: 'Credentialing & Enrollment',
      description: 'Streamlined provider credentialing and insurance enrollment to ensure proper reimbursement.',
      icon: <Calendar size={32} />,
      link: '/services/credentialing-enrollment'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroBanner
        title="Streamline Your Medical Billing Process"
        subtitle="ClaimsMD provides comprehensive medical billing solutions to help healthcare providers maximize reimbursements and reduce administrative burden."
        ctaText="Request a Free Consultation"
        ctaLink="/contact"
      />

      {/* Services Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12 font-heading">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="btn-primary hover:-translate-y-1 transition-transform duration-300 shadow-lg hover:shadow-xl" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* EHRs We Work With Section */}
      <EHRsList />

      {/* Why Choose ClaimsMD Section */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Why ClaimsMD is the Right Choice for Your Practice</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left side - Benefits */}
            <div className="space-y-10">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-claimsBlue transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-claimsBlue to-blue-600 rounded-full p-3 text-white mr-4">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Maximize Your Revenue</h3>
                    <p className="text-gray-600 mb-4">Medical billing errors, claim denials, and delayed submissions can significantly impact your practice's bottom line.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Accurate coding and timely claims submission</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Proactive denial management and appeals to recover lost revenue</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Streamlined payment posting and reconciliation processes</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-700 italic">With ClaimsMD, you can expect faster reimbursements and improved cash flow.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-claimsOrange transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-claimsOrange to-orange-500 rounded-full p-3 text-white mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Reduce Administrative Burden</h3>
                    <p className="text-gray-600 mb-4">Managing medical billing in-house can be time-consuming and resource-intensive. By partnering with us, you can:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Free up your staff to focus on patient care and practice growth</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Eliminate the need for costly billing software and ongoing staff training</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Enjoy peace of mind knowing your billing is handled by experts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-claimsBlue transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-claimsBlue to-blue-600 rounded-full p-3 text-white mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Stay Compliant with Industry Regulations</h3>
                    <p className="text-gray-600 mb-4">Healthcare regulations are constantly changing, and non-compliance can result in costly penalties and audits. ClaimsMD ensures your practice stays compliant by:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Keeping up-to-date with the latest coding standards (ICD-10, CPT, HCPCS)</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Conducting regular compliance audits to identify and address potential risks</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Providing ongoing training and support to keep your practice informed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Benefits continued and image */}
            <div className="space-y-10">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-claimsOrange transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-claimsOrange to-orange-500 rounded-full p-3 text-white mr-4">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Transparent Reporting and Analytics</h3>
                    <p className="text-gray-600 mb-4">Knowledge is power. With ClaimsMD, you'll have access to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Real-time, customizable reports that provide insights into your practice's financial performance</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Detailed analytics on claim submissions, denials, and reimbursements</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsBlue mr-2 mt-0.5 flex-shrink-0" />
                        <span>Actionable recommendations to optimize your revenue cycle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-claimsBlue transform hover:-translate-y-1 transition-transform">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-claimsBlue to-blue-600 rounded-full p-3 text-white mr-4">
                    <HeartPulse size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Personalized Service and Support</h3>
                    <p className="text-gray-600 mb-4">We believe every practice is unique, which is why we take the time to understand your specific needs and goals. Our dedicated account managers work closely with you to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Develop a tailored billing strategy that aligns with your practice's objectives</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Provide ongoing support and guidance to ensure your success</span>
                      </li>
                      <li className="flex items-start">
                        <Check size={18} className="text-claimsOrange mr-2 mt-0.5 flex-shrink-0" />
                        <span>Offer scalable solutions that grow with your practice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={CPP} 
                  alt="Healthcare team working together" 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="bg-gradient-to-r from-claimsBlue to-blue-800 p-6">
                  <p className="text-white text-lg font-medium">Join the hundreds of healthcare providers who trust ClaimsMD with their medical billing needs.</p>
                  <Button className="mt-4 bg-white text-claimsBlue hover:bg-gray-100 transition-colors shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-transform" asChild>
                    <a href="/contact">Schedule Your Free Consultation Today</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why Choose ClaimsMD?</h2>
              <p className="mb-6 text-gray-700">
                At ClaimsMD, we understand the challenges healthcare providers face with medical billing. Our comprehensive solutions are designed to streamline your revenue cycle, reduce denials, and increase your bottom line.
              </p>
              
              <div className="space-y-4">
                {[
                  'Industry leading 98% clean claim submission rate',
                  'Certified medical billing professionals',
                  'Specialized in multiple healthcare specialties',
                  'Transparent reporting and analytics',
                  'HIPAA compliant processes and technology'
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mr-3 text-claimsOrange mt-1 group-hover:scale-110 transition-transform">
                      <Check size={20} />
                    </div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="btn-secondary mt-8 transform hover:scale-105 transition-transform" asChild>
                <a href="/why-claims-md">Learn More About Us</a>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={CMP} 
                alt="Medical billing technology" 
                className="w-full h-80 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Ready to Optimize Your Medical Billing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in animation-delay-300">
            Let's discuss how ClaimsMD can help your practice increase revenue, reduce denials, and streamline your billing process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
            <Button className="bg-white text-claimsBlue hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl" size="lg" asChild>
              <a href="/contact">
                Request a Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="bg-gradient-to-r from-claimsOrange to-orange-600 border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300" size="lg" asChild>
              <a href="/services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Specialties Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center">Specialties We Serve</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Our billing experts have specialized knowledge in various medical fields to provide tailored solutions for your practice.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Cardiology', 'Orthopedics', 'Primary Care',
              'Mental Health', 'Pediatrics', 'Radiology'
            ].map((specialty, index) => (
              <a key={index} href="/specialties" className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:bg-gray-50 transform hover:-translate-y-1 transition-transform">
                <div className="text-claimsBlue font-medium">{specialty}</div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="link" className="text-claimsBlue hover:text-claimsOrange transition-colors flex items-center mx-auto" asChild>
              <a href="/specialties">
                View All Specialties
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8 font-heading">Schedule Your Free Consultation</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Ready to optimize your medical billing process? Book a free consultation with our experts to discuss how ClaimsMD can help your practice increase revenue and reduce administrative burden.
          </p>
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
            <CalendlyWidget url="https://calendly.com/claimsmd/free-consolations" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
