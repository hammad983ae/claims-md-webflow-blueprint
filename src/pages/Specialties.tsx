
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, FileSearch, Calendar, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Specialties = () => {
  const specialties = [
    {
      title: 'Primary Care',
      description: 'Specialized billing solutions for Family Practice, Internal Medicine, and Pediatrics.',
      icon: <Users size={32} />,
      features: ['Preventive care coding', 'Chronic care management billing', 'Value-based payment models']
    },
    {
      title: 'Cardiology',
      description: 'Expert billing for diagnostic procedures, interventional cardiology, and cardiac rehabilitation.',
      icon: <FileSearch size={32} />,
      features: ['Nuclear study billing', 'Cardiac catheterization coding', 'Device implant reimbursement']
    },
    {
      title: 'Orthopedics',
      description: 'Comprehensive billing services for orthopedic surgeries, treatments, and rehabilitation.',
      icon: <Calendar size={32} />,
      features: ['Surgical procedure coding', "Worker's compensation expertise", 'DME billing']
    },
    {
      title: 'Neurology',
      description: 'Specialized billing for neurological diagnostics, procedures, and ongoing care.',
      icon: <Shield size={32} />,
      features: ['EEG/EMG billing', 'Complex neurological procedure coding', 'Stroke protocol billing']
    },
    {
      title: 'Mental Health',
      description: 'Dedicated billing solutions for psychiatry, psychology, and behavioral health services.',
      icon: <Star size={32} />,
      features: ['Telehealth session billing', 'Group therapy coding', 'Insurance authorization management']
    },
    {
      title: 'Radiology',
      description: 'Expert billing for diagnostic imaging, interventional procedures, and teleradiology.',
      icon: <FileSearch size={32} />,
      features: ['Modality-specific coding', '3D rendering services', 'Technical/professional component billing']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-20">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Medical Billing Specialties</h1>
            <p className="text-lg text-white/90 animate-fade-in animation-delay-300">
              ClaimsMD offers specialized medical billing solutions tailored to the unique requirements of
              different healthcare specialties. Our team has extensive experience in various
              medical fields to ensure optimal reimbursement for your practice.
            </p>
            <Button 
              className="mt-8 bg-claimsOrange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in animation-delay-600"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Get Specialty-Specific Solutions
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Specialties Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Our Specialty Expertise</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand that each medical specialty has unique billing requirements,
              coding specifics, and reimbursement challenges. Our specialized teams ensure
              that your practice receives optimal reimbursement while maintaining compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-claimsBlue to-blue-400"></div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-claimsBlue/10 to-blue-500/10 flex items-center justify-center text-claimsBlue group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-claimsBlue group-hover:text-indigo-700 transition-colors">{specialty.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {specialty.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 group/item">
                        <div className="mr-2 text-claimsOrange group-hover/item:scale-110 transition-transform">
                          <ArrowRight size={16} />
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
                    <Link to="/contact" className="flex items-center">
                      Learn more about {specialty.title} billing <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-claimsBlue mb-6">Why Choose Our Specialty Billing?</h2>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-white hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Specialty-Specific Expertise</h3>
                    <p className="text-gray-600">Our billing specialists are trained in the unique coding and billing requirements of your specific medical specialty.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <FileSearch size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Specialty-Specific Denial Management</h3>
                    <p className="text-gray-600">We understand the common denial reasons for each specialty and have developed targeted strategies to prevent and address them.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-white hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Up-to-Date with Specialty Regulations</h3>
                    <p className="text-gray-600">We continuously monitor and adapt to changing regulations, coding updates, and reimbursement policies specific to your specialty.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-claimsBlue to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
                <Link to="/contact" className="flex items-center">
                  Request a Specialty-Specific Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
                alt="Medical Specialty Team" 
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-claimsBlue/40 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-medium">Our specialty teams have a 98% claim acceptance rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800 text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Specialty Practice's Billing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in animation-delay-300">
            Let our specialty experts handle your complex billing needs so you can focus on what matters most - your patients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
            <Button className="bg-claimsOrange hover:bg-orange-600 text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Request a Specialty Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Specialties;
