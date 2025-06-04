
import Layout from '@/components/Layout';
import { motion } from '@/components/ui/motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Heart, Users, Lightbulb, Shield, Award } from 'lucide-react';

const MessageFromCEO = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability in everything we do."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our services, from accuracy to customer support."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership",
      description: "We view our clients as partners and are committed to their long-term success."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace technology and innovation to deliver efficient and effective solutions."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description: "We understand the human side of healthcare and treat every interaction with care and respect."
    }
  ];

  return (
    <Layout metaPage="message-from-ceo">
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
              A Message from Our CEO
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl font-medium mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering Healthcare Providers to Thrive
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg mx-auto"
            >
              <h2 className="text-3xl font-bold text-claimsBlue mb-6">Welcome to ClaimsMD,</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                As the founder and CEO of ClaimsMD, I want to personally thank you for taking the time to learn more about our company and the services we offer. At ClaimsMD, we are more than just a medical billing company – we are your partner in success, dedicated to helping healthcare providers like you focus on what truly matters: delivering exceptional patient care.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                When I started ClaimsMD, my vision was simple: to create a company that not only simplifies the complexities of medical billing but also empowers healthcare providers to thrive in an ever-changing industry. Over the years, we've grown into a trusted partner for practices across the country, and I'm incredibly proud of the impact we've made together.
              </p>

              <h3 className="text-2xl font-bold text-claimsBlue mb-4">Our Mission</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission at ClaimsMD is to provide innovative, reliable, and personalized medical billing solutions that optimize your revenue cycle, reduce administrative burdens, and ensure compliance. We understand the challenges you face – from navigating complex regulations to managing claim denials and maintaining cash flow. That's why we've built a team of experts who are passionate about solving these challenges and helping your practice succeed.
              </p>

              <h3 className="text-2xl font-bold text-claimsBlue mb-4">Why ClaimsMD?</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                What sets us apart is our commitment to you. We don't believe in one-size-fits-all solutions. Instead, we take the time to understand your unique needs, goals, and challenges. Whether you're a small practice or a large healthcare organization, we tailor our services to fit your specific requirements.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our team is made up of certified billing specialists, coding experts, and compliance professionals who bring years of experience and a deep understanding of the healthcare industry. Combined with cutting-edge technology and a customer-first approach, we deliver results that make a real difference for your practice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At ClaimsMD, our work is guided by a set of core values that define who we are and how we serve our clients:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-claimsBlue mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Looking Ahead Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg mx-auto"
            >
              <h3 className="text-2xl font-bold text-claimsBlue mb-4">Looking Ahead</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The healthcare industry is constantly evolving, and we are committed to staying ahead of the curve. As we look to the future, we will continue to invest in technology, expand our services, and deepen our expertise to better serve you. Our goal is to be more than just a service provider – we want to be a trusted partner that helps your practice grow and thrive for years to come.
              </p>

              <h3 className="text-2xl font-bold text-claimsBlue mb-4">Thank You</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Thank you for considering ClaimsMD as your partner in medical billing. Whether you're just starting your practice or looking to optimize your existing operations, we are here to support you every step of the way.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                If you have any questions or would like to learn more about how we can help your practice, please don't hesitate to reach out. I'd love to hear from you and discuss how we can work together to achieve your goals.
              </p>

              <div className="bg-gradient-to-r from-claimsBlue/10 to-indigo-100 p-8 rounded-lg text-center">
                {/* <p className="text-gray-700 mb-2">Warm regards,</p>
                <p className="text-xl font-bold text-claimsBlue mb-1">[Your Name]</p> */}
                <p className="text-gray-600">CEO, ClaimsMD</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with ClaimsMD?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let's work together to optimize your revenue cycle and help your practice thrive.
            </p>
            <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MessageFromCEO;
