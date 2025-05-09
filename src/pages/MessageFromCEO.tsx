
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MessageFromCEO = () => {
  return (
    <Layout>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-20">
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

                <p>
                  When I founded ClaimsMD in 2010, I did so with a clear vision born from personal experience. 
                  As a physician, I witnessed firsthand how administrative burdens—particularly those related to
                  billing and revenue cycle management—were pulling healthcare providers away from patient care
                  and contributing to burnout.
                </p>

                <p>
                  I believed then, as I do now, that there had to be a better way. Healthcare providers should be 
                  able to focus on healing, not haggling with insurance companies or deciphering complex billing codes.
                  This conviction led me to assemble a team of experts in medical billing, healthcare finance, and
                  technology to create ClaimsMD.
                </p>

                <p>
                  Over the years, we've evolved from a small medical billing service to a comprehensive revenue cycle
                  management partner for healthcare providers across the country. What hasn't changed is our unwavering
                  commitment to our core values: integrity, innovation, partnership, excellence, accountability, and
                  continuous improvement.
                </p>

                <p>
                  In an industry that's constantly changing, with new regulations, payment models, and technologies
                  emerging regularly, our team remains dedicated to staying ahead of the curve. We invest heavily in
                  ongoing education, technology development, and process refinement to ensure that our clients receive
                  the most effective and efficient billing services available.
                </p>

                <p>
                  What truly sets ClaimsMD apart, however, isn't just our expertise or our technology—it's our approach
                  to service. We view ourselves as an extension of your practice, genuinely invested in your success.
                  Your challenges become our challenges; your goals become our goals. This partnership mentality drives
                  everything we do, from how we structure our teams to how we measure our performance.
                </p>

                <p>
                  As we look to the future, I'm excited about the opportunities to further enhance our services through
                  emerging technologies like artificial intelligence and machine learning. These tools will allow us to
                  provide even more value by identifying patterns, predicting outcomes, and preventing issues before
                  they occur.
                </p>

                <p>
                  I want to express my deepest gratitude to our clients for trusting us with such a critical aspect of
                  their practices. We never take this responsibility lightly and remain committed to earning that trust
                  every day through exceptional service and results.
                </p>

                <p>
                  If you're considering a partnership with ClaimsMD, I invite you to reach out and experience the
                  difference our approach can make for your practice. If you're already part of the ClaimsMD family,
                  thank you for your continued trust and partnership.
                </p>

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
