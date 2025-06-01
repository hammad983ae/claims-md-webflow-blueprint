
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Calendar, Users, FileText, Shield } from 'lucide-react';
import DEW from '../Assets/Doctor Engaging with Patient.jpeg'
const About = () => {
  const timeline = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'ClaimsMD was founded with a mission to transform medical billing for healthcare providers.'
    },
    {
      year: '2013',
      title: 'Expansion',
      description: 'Expanded service offerings to include full revenue cycle management and credentialing services.'
    },
    {
      year: '2015',
      title: 'Technology Innovation',
      description: 'Launched our proprietary billing analytics platform to provide real-time insights to clients.'
    },
    {
      year: '2018',
      title: 'National Growth',
      description: 'Expanded operations nationwide, serving healthcare providers across all 50 states.'
    },
    {
      year: '2020',
      title: 'Telehealth Integration',
      description: 'Developed specialized billing solutions for the rapidly growing telehealth sector.'
    },
    {
      year: '2024',
      title: 'AI Implementation',
      description: 'Integrated artificial intelligence to enhance claim accuracy and processing efficiency.'
    }
  ];

  const coreValues = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards in all our business practices.'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Innovation',
      description: 'We continuously seek new solutions to improve our services and client outcomes.'
    },
    {
      icon: <Users size={24} />,
      title: 'Partnership',
      description: 'We view ourselves as an extension of your team, committed to your success.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Excellence',
      description: 'We pursue excellence in everything we do, from client service to operational processes.'
    },
    {
      icon: <FileText size={24} />,
      title: 'Accountability',
      description: 'We take ownership of our results and are accountable to our clients and each other.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Continuous Improvement',
      description: 'We are committed to ongoing learning and process enhancement to deliver ever-better results.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About ClaimsMD</h1>
            <p className="text-lg text-white/90">
              We're a dedicated team of medical billing experts passionate about helping healthcare 
              providers optimize their revenue cycle while focusing on what matters most – patient care.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-claimsBlue mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                At ClaimsMD, we believe that healthcare providers should be able to focus on what they do best – delivering exceptional patient care – without being burdened
by the complexities of medical billing. That’s why we’ve made it our mission to provide innovative, reliable, and personalized medical billing solutions that
optimize your revenue cycle, reduce administrative burdens, and ensure compliance.
                </p>
                <p>
                Since our founding, ClaimsMD has grown into a trusted partner for healthcare providers across the country. From small practices to large healthcare
                organizations, we’ve helped countless providers streamline their billing processes, maximize revenue, and achieve financial stability.
                </p>
                {/* <p>
                  Today, ClaimsMD serves hundreds of healthcare providers across the country, from small 
                  independent practices to large multi-specialty groups. Our approach combines deep industry 
                  expertise, cutting-edge technology, and personalized service to deliver exceptional results.
                </p> */}
              </div>
              <div className="mt-6">
                <Link to="/message-from-ceo">
                  <Button variant="outline" className="text-claimsBlue border-claimsBlue hover:bg-claimsBlue/10">
                    Read Message from Our CEO <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={DEW} 
                alt="ClaimsMD Team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-claimsBlue text-white p-4 rounded shadow-lg hidden md:block">
                <p className="font-bold text-lg">15+ Years</p>
                <p className="text-sm">of Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

  


      {/* Core Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-claimsBlue mb-4">Our Core Values</h2>
          <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">
            These are the principles that guide our decisions, shape our culture, and define how we work with clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-claimsBlue hover:transform hover:-translate-y-1 transition-all duration-300">
                <div className="text-claimsBlue mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Preview */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-white/90">
              Our experienced leadership team brings decades of combined experience in healthcare, 
              finance, and technology to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
              <Link to="/about/team">View Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Ready to Optimize Your Medical Billing?</h2>
            <p className="text-gray-700 mb-8">
              Partner with ClaimsMD to streamline your revenue cycle, reduce administrative burden, 
              and maximize reimbursements for your healthcare practice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-claimsBlue hover:bg-blue-900" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-claimsBlue border-claimsBlue hover:bg-claimsBlue/10" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
