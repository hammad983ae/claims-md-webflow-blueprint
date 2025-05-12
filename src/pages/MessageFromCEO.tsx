
  import Layout from '@/components/Layout';
  import { ArrowRight } from 'lucide-react';
  import { Button } from '@/components/ui/button';
  import { Link } from 'react-router-dom';
import CoreValues from '@/components/ui/CoreValues';

  const MessageFromCEO = () => {
    return (
      <Layout>
        {/* Header Section */}
        <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
          <div className="container-custom relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Message from Our CEO</h1>
              <p className="text-lg text-white/90">
                A personal message from Dr. Elizabeth Chen, Founder and CEO of ClaimsMD.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
        </div>

        {/* CEO Message Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
                      alt="Dr. Elizabeth Chen - CEO" 
                      className="rounded-lg shadow-lg w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-claimsBlue/70 to-transparent rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                      <h3 className="font-bold text-xl">Dr. Elizabeth Chen</h3>
                      <p>Founder & CEO, ClaimsMD</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
                    <h3 className="font-bold text-lg text-claimsBlue mb-3">About Dr. Chen</h3>
                    <p className="text-gray-700 mb-4">
                      Dr. Elizabeth Chen founded ClaimsMD in 2010 after experiencing first-hand the challenges of medical billing as a practicing physician.
                    </p>
                    <p className="text-gray-700 mb-4">
                      With an MD from Stanford Medical School and an MBA from Harvard Business School, Dr. Chen combines clinical expertise with business acumen.
                    </p>
                    <p className="text-gray-700">
                      She is a frequent speaker on healthcare finance and medical practice management.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <Button variant="outline" className="text-claimsBlue border-claimsBlue hover:bg-claimsBlue/10 justify-start" asChild>
                      <Link to="/about">
                        <ArrowRight size={16} className="mr-2" /> Learn About Our Company
                      </Link>
                    </Button>
                    <Button variant="outline" className="text-claimsBlue border-claimsBlue hover:bg-claimsBlue/10 justify-start" asChild>
                      <Link to="/contact">
                        <ArrowRight size={16} className="mr-2" /> Contact Our Team
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl leading-relaxed text-gray-700 font-medium italic border-l-4 border-claimsBlue pl-4">
                    "Our mission at ClaimsMD is simple yet profound: to transform the medical billing experience
                    for healthcare providers, allowing them to focus on what they do best – providing exceptional
                    patient care."
                  </p>

                  <h2 className="text-2xl font-bold text-claimsBlue mt-8">Dear Healthcare Partners,</h2>
                  <br />
                  <p>
                  As the founder and CEO of ClaimsMD, I want to personally thank you for taking the time to learn more about our company and the services we offer. At
  ClaimsMD, we are more than just a medical billing company, we are your partner in success, dedicated to helping healthcare providers like you focus on what
  truly matters: delivering exceptional patient care.
                  </p>
                  <br />
                  <p>
                  When I started ClaimsMD, my vision was simple: to create a company that not only simplifies the complexities of medical billing but also empowers healthcare
  providers to thrive in an ever-changing industry. Over the years, we’ve grown into a trusted partner for practices across the country, and I’m incredibly proud of
  the impact we’ve made together.
                  </p>
                  <br />
                  <p>
                  Our mission at ClaimsMD is to provide innovative, reliable, and personalized medical billing solutions that optimize your revenue cycle, reduce administrative
                  burdens, and ensure compliance. We understand the challenges you face – from navigating complex regulations to managing claim denials and maintaining cash
                  flow. That’s why we’ve built a team of experts who are passionate about solving these challenges and helping your practice succeed.
                  </p>
  <br />
                  <p>
                  What sets us apart is our commitment to you. We don’t believe in one-size-fits-all solutions. Instead, we take the time to understand your unique needs, goals,
                  and challenges. Whether you’re a small practice or a large healthcare organization, we tailor our services to fit your specific requirements.
                  Our team is made up of certified billing specialists, coding experts, and compliance professionals who bring years of experience and a deep understanding of the
                  healthcare industry. Combined with cutting-edge technology and a customer-first approach, we deliver results that make a real difference for your practice.
                  </p>
  <br/>
                  <CoreValues />
                  <br/>
                  <p>
                  The healthcare industry is constantly evolving, and we are committed to staying ahead of the curve. As we look to the future, we will continue to invest in
technology, expand our services, and deepen our expertise to better serve you. Our goal is to be more than just a service provider – we want to be a trusted
partner that helps your practice grow and thrive for years to come.
                  </p>
                  <br/>
                  <p>
                  Thank you for considering ClaimsMD as your partner in medical billing. Whether you’re just starting your practice or looking to optimize your existing operations,
                  we are here to support you every step of the way.
                  </p>
                  <br/>
                  <p>
                  If you have any questions or would like to learn more about how we can help your practice, please don’t hesitate to reach out. I’d love to hear from you and
                  discuss how we can work together to achieve your goals.
                  </p>
                  <br/>
                  <p className="mb-8">
                    Together, we can transform the business of healthcare while improving outcomes for practices and
                    patients alike.
                  </p>

                  <p className="text-claimsBlue font-bold">
                    Sincerely,
                  </p>

                  <p className="font-bold text-claimsBlue mb-1">
                    Dr. Elizabeth Chen
                  </p>
                  
                  <p className="text-gray-600">
                    Founder & CEO, ClaimsMD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-900 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Experience the ClaimsMD Difference</h2>
              <p className="text-white/90 mb-8">
                Schedule a consultation to learn how our personalized approach to medical billing 
                can benefit your practice.
              </p>
              <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                <Link to="/contact">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  };

  export default MessageFromCEO;
