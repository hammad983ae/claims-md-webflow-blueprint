
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Shield, Check, Calendar, Settings, AlertCircle, DollarSign, FileSearch } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Medical Billing Audit',
      description: 'Comprehensive evaluation of your medical billing processes to identify errors, inefficiencies, and opportunities for improvement.',
      icon: <FileText size={32} />,
      link: '/services/medical-billing-audit',
      features: ['Complete billing process review', 'Error identification', 'Compliance check', 'Revenue optimization plan']
    },
    {
      title: 'Medical Billing Services',
      description: 'End-to-end medical billing solutions designed to maximize reimbursements and streamline your revenue cycle.',
      icon: <DollarSign size={32} />,
      link: '/services/medical-billing-services',
      features: ['Claims submission', 'Payment posting', 'Follow-up on unpaid claims', 'Monthly reporting']
    },
    {
      title: 'Patient Eligibility Verification',
      description: 'Accurate verification of patient insurance coverage to reduce claim rejections and denials.',
      icon: <Check size={32} />,
      link: '/services/patient-eligibility-verification',
      features: ['Insurance verification', 'Benefits explanation', 'Coverage confirmation', 'Pre-authorization']
    },
    {
      title: 'Denial Management',
      description: 'Expert handling of claim denials to maximize reimbursements and reduce revenue loss.',
      icon: <Shield size={32} />,
      link: '/services/denial-management',
      features: ['Denial analysis', 'Appeal filing', 'Root cause identification', 'Process improvement']
    },
    {
      title: 'Account Receivable Management',
      description: 'Proactive management of outstanding claims to improve cash flow and reduce days in A/R.',
      icon: <AlertCircle size={32} />,
      link: '/services/account-receivable-management',
      features: ['Aging analysis', 'Collection strategies', 'Payer follow-up', 'Cash flow optimization']
    },
    {
      title: 'Credentialing & Enrollment',
      description: 'Streamlined provider credentialing and insurance enrollment to ensure proper reimbursement.',
      icon: <Calendar size={32} />,
      link: '/services/credentialing-enrollment',
      features: ['Provider enrollment', 'Insurance credentialing', 'CAQH profile management', 'Revalidation services']
    },
    {
      title: 'New Practice Setup',
      description: 'Complete support for new medical practices, from EHR selection to billing setup and staff training.',
      icon: <Settings size={32} />,
      link: '/services/new-practice-setup',
      features: ['EHR selection assistance', 'Workflow design', 'Staff training', 'Compliance setup']
    },
    {
      title: 'Revenue Cycle Management',
      description: 'Comprehensive revenue cycle management to optimize financial performance and patient experience.',
      icon: <FileSearch size={32} />,
      link: '/services/revenue-cycle-management',
      features: ['End-to-end RCM', 'KPI monitoring', 'Performance analysis', 'Process optimization']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-lg text-white/90">
              Comprehensive medical billing solutions tailored to your practice's unique needs. 
              Our expert team helps healthcare providers maximize reimbursements and streamline operations.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-2 h-full bg-claimsBlue"></div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-claimsBlue/10 flex items-center justify-center text-claimsBlue">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-claimsBlue">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <div className="mr-2 text-claimsOrange">
                          <Check size={16} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="text-claimsBlue hover:bg-claimsBlue/10 p-0 flex items-center group-hover:translate-x-1 transition-transform"
                    asChild
                  >
                    <Link to={service.link}>
                      Learn more <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-4">Ready to streamline your medical billing?</h2>
              <p className="text-xl text-white/90 mb-6">
                Let our experts handle the complexities of medical billing while you focus on patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Why Choose ClaimsMD?</h3>
              <ul className="space-y-3">
                {[
                  '98% clean claim submission rate',
                  'Certified billing specialists',
                  'Specialty-specific expertise',
                  'Custom solutions for practices of all sizes',
                  'Transparent reporting and analytics'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-3 text-claimsOrange mt-1">
                      <Check size={18} />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
