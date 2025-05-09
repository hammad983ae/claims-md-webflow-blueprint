
import Layout from '@/components/Layout';
import HeroBanner from '@/components/HeroBanner';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Check, FileText, Shield, Calendar } from 'lucide-react';

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
          <h2 className="section-title text-center mb-12">Our Services</h2>
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
            <Button className="btn-primary" asChild>
              <a href="/services">View All Services</a>
            </Button>
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
                  <div key={index} className="flex items-start">
                    <div className="mr-3 text-claimsOrange mt-1">
                      <Check size={20} />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <Button className="btn-secondary mt-8" asChild>
                <a href="/why-claims-md">Learn More About Us</a>
              </Button>
            </div>
            
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 italic">Professional image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-claimsBlue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Medical Billing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how ClaimsMD can help your practice increase revenue, reduce denials, and streamline your billing process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-secondary" size="lg" asChild>
              <a href="/contact">Request a Consultation</a>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg" asChild>
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
              <a key={index} href="/specialties" className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-claimsBlue font-medium">{specialty}</div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="link" className="text-claimsBlue" asChild>
              <a href="/specialties">View All Specialties</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
