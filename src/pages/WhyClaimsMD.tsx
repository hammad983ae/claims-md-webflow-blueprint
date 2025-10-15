
import Layout from '@/components/Layout';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, TrendingUp, Shield, HeadphonesIcon, Target, Phone, Mail } from 'lucide-react';

const WhyClaimsMD = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise You Can Rely On",
      description: "Our team of certified billing specialists, coding experts, and compliance professionals brings years of experience in the healthcare industry. We understand the unique challenges of medical billing and are dedicated to providing solutions that work for your practice."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Solutions for Your Practice",
      description: "We know that no two practices are the same. That's why we take the time to understand your specific needs, goals, and challenges. Whether you're a small practice or a large healthcare organization, we customize our services to fit your unique requirements."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced Technology",
      description: "We leverage cutting-edge technology to streamline your billing processes, reduce errors, and provide real-time insights into your financial performance. Our tools are designed to make your life easier and your practice more efficient."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Maximized Revenue",
      description: "Our proactive approach to claims submission, denial management, and payment posting ensures that you receive every dollar you're owed. We help you minimize revenue leakage and maintain a healthy cash flow."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance Assurance",
      description: "Staying compliant with healthcare regulations is critical to avoiding penalties and audits. We stay up-to-date with the latest requirements and ensure your practice meets all compliance standards."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Exceptional Customer Support",
      description: "We pride ourselves on providing personalized, responsive, and professional support. Our team is always here to answer your questions, address your concerns, and ensure your satisfaction."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Focus on What Matters Most",
      description: "By outsourcing your medical billing to ClaimsMD, you can free up your time and resources to focus on what truly matters – providing exceptional care to your patients. Let us handle the complexities of billing while you focus on growing your practice."
    }
  ];

  const testimonials = [
    {
      quote: "ClaimsMD has been a game-changer for our practice. Their expertise and support have helped us maximize revenue and reduce denials. I can't recommend them enough!",
      author: "[Client Name]",
      practice: "[Practice Name]"
    },
    {
      quote: "The team at ClaimsMD is professional, knowledgeable, and always responsive. They've made billing so much easier for us.",
      author: "[Client Name]",
      practice: "[Practice Name]"
    }
  ];

  return (
    <Layout metaPage="whyClaimsMD">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose ClaimsMD?
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-medium mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Your Trusted Partner in Medical Billing
            </motion.p>
            <motion.p 
              className="text-lg text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We understand that managing medical billing can be overwhelming. Between complex regulations, ever-changing payer requirements, and the need to maximize revenue, it's easy to feel stretched thin. That's where we come in.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-claimsBlue mb-6">More Than Just a Medical Billing Company</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              ClaimsMD is more than just a medical billing company – we're your partner in success. With our expertise, technology, and personalized approach, we help healthcare providers like you streamline their revenue cycle, reduce administrative burdens, and focus on what truly matters: delivering exceptional patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Here's Why Healthcare Providers Trust ClaimsMD</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-claimsBlue mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-claimsOrange"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <blockquote className="italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.practice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the ClaimsMD Difference?</h2>
            <p className="text-lg mb-8 text-white/90">
              Don't let the complexities of medical billing hold your practice back. With ClaimsMD as your partner, you can achieve financial stability, operational efficiency, and peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                <Link to="/contact">Schedule a Free Consultation</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-white/90">
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(800) 338-9171</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@claimsmd.net</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-claimsBlue mb-6">Let ClaimsMD Help You Unlock Your Practice's Full Potential</h2>
            <p className="text-lg text-gray-700 mb-8">
              Through strategic medical billing solutions designed to maximize your revenue and streamline your operations.
            </p>
            <Button size="lg" className="bg-claimsBlue hover:bg-blue-800 text-white" asChild>
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyClaimsMD;
