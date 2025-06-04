
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Shield, Users, Award, Target, Heart, Lightbulb } from 'lucide-react';
import { motion } from '@/components/ui/motion';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and accountability in everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our services, from accuracy to customer support."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We view our clients as partners and are committed to their long-term success."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technology and innovation to deliver efficient and effective solutions."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We understand the human side of healthcare and treat every interaction with care and respect."
    }
  ];

  const stats = [
    { number: "500+", label: "Healthcare Providers Served" },
    { number: "99.7%", label: "Claim Accuracy Rate" },
    { number: "$50M+", label: "Revenue Recovered" },
    { number: "10+", label: "Years of Experience" }
  ];

  return (
    <Layout metaPage="aboutUs">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-claimsBlue to-blue-800 text-white py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
                About ClaimsMD
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Your trusted partner in medical billing excellence, empowering healthcare providers to focus on what matters most - patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-claimsOrange hover:bg-orange-600">
                  Learn More About Our Services
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-claimsBlue">
                  Contact Us Today
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Young female healthcare professional"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-claimsBlue/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-claimsBlue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1594824706977-5b9ad41ee57e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Female doctor with stethoscope"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-claimsBlue mb-6 font-heading">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to provide innovative, reliable, and personalized medical billing solutions that optimize your revenue cycle, reduce administrative burdens, and ensure compliance. We are committed to helping you achieve financial stability and operational efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-claimsOrange mt-1" />
                  <div>
                    <h3 className="font-semibold text-claimsBlue">Maximize Revenue</h3>
                    <p className="text-gray-600">Through accurate coding, timely claims submission, and proactive denial management.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-claimsOrange mt-1" />
                  <div>
                    <h3 className="font-semibold text-claimsBlue">Ensure Compliance</h3>
                    <p className="text-gray-600">By staying up-to-date with ever-changing regulations and payer requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-claimsOrange mt-1" />
                  <div>
                    <h3 className="font-semibold text-claimsBlue">Reduce Administrative Burdens</h3>
                    <p className="text-gray-600">By handling the intricacies of billing so you can focus on patient care.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claimsBlue mb-6 font-heading">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At ClaimsMD, our work is guided by a set of core values that define who we are and how we serve our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="bg-claimsBlue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-claimsOrange/10 transition-colors">
                  <value.icon className="h-8 w-8 text-claimsBlue group-hover:text-claimsOrange transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-claimsBlue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-claimsBlue mb-6 font-heading">
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team is the heart of ClaimsMD. We are a group of certified billing specialists, coding experts, and compliance professionals who bring years of experience and a deep understanding of the healthcare industry.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                What sets us apart is our dedication to your success. We take the time to understand your unique needs, goals, and challenges, and we tailor our services to fit your practice perfectly.
              </p>
              <Button className="bg-claimsBlue hover:bg-blue-800">
                Meet Our Team
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Young female medical professional team"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-claimsBlue/10 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-claimsBlue to-blue-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Ready to Partner with ClaimsMD?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to optimize your revenue cycle and help your practice thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-claimsOrange hover:bg-orange-600">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-claimsBlue">
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
