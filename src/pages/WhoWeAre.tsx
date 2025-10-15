import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const WhoWeAre: React.FC = () => {
  return (
    <Layout metaPage="whoWeAre">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Discover the story behind ClaimsMD - from our founding vision to the dedicated team 
            that makes exceptional medical billing possible
          </motion.p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                From humble beginnings to industry leadership, ClaimsMD has been transforming 
                medical billing since our founding in 2010
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  The Beginning
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded by Dr. Sarah Mitchell, a healthcare professional who experienced firsthand 
                  the challenges of medical billing inefficiencies, ClaimsMD was born from a simple 
                  mission: to make medical billing transparent, accurate, and stress-free.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  What started as a small team of three has grown into a comprehensive medical 
                  billing solution serving healthcare providers across the United States.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-800 mb-2">2010</div>
                  <p className="text-blue-700 font-semibold">Company Founded</p>
                  <p className="text-blue-600 text-sm mt-2">Started with 3 employees</p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">2015</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">First 100 Clients</h4>
                <p className="text-gray-600">Reached milestone of serving 100 healthcare practices</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">2018</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Technology Innovation</h4>
                <p className="text-gray-600">Launched proprietary billing automation platform</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">2024</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Industry Leader</h4>
                <p className="text-gray-600">Serving 500+ practices with 99.5% accuracy rate</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Meet the experienced professionals who guide ClaimsMD's mission and drive our 
                commitment to excellence in medical billing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">SM</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Sarah Mitchell</h3>
                  <p className="text-blue-600 font-semibold mb-3">Founder & CEO</p>
                  <p className="text-gray-600">
                    Healthcare professional with 20+ years of experience. Founded ClaimsMD to solve 
                    medical billing challenges she encountered in practice.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">MJ</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Michael Johnson</h3>
                  <p className="text-green-600 font-semibold mb-3">Chief Operations Officer</p>
                  <p className="text-gray-600">
                    Operations expert with 15+ years in healthcare management. Oversees daily 
                    operations and ensures service quality standards.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">LC</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Lisa Chen</h3>
                  <p className="text-purple-600 font-semibold mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600">
                    Technology leader with expertise in healthcare systems. Drives innovation 
                    and digital transformation initiatives.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">RW</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Robert Williams</h3>
                  <p className="text-orange-600 font-semibold mb-3">Chief Compliance Officer</p>
                  <p className="text-gray-600">
                    Compliance expert ensuring adherence to HIPAA, CMS guidelines, and industry 
                    regulations across all services.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AM</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Amanda Martinez</h3>
                  <p className="text-red-600 font-semibold mb-3">VP of Client Relations</p>
                  <p className="text-gray-600">
                    Client success leader with 12+ years in healthcare customer service. Ensures 
                    exceptional client experience and satisfaction.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">DT</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">David Thompson</h3>
                  <p className="text-indigo-600 font-semibold mb-3">VP of Revenue Cycle</p>
                  <p className="text-gray-600">
                    Revenue cycle expert optimizing billing processes and maximizing reimbursement 
                    for healthcare providers.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                At ClaimsMD, we believe that exceptional service comes from a culture of 
                collaboration, innovation, and continuous learning
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Values That Drive Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <strong>Excellence:</strong> We strive for perfection in every claim we process
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <strong>Integrity:</strong> Honest, transparent, and ethical in all our dealings
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <strong>Innovation:</strong> Continuously improving our processes and technology
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      <strong>Collaboration:</strong> Working together to achieve exceptional results
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Work Environment</h4>
                <ul className="space-y-3 text-blue-700">
                  <li>• Flexible work arrangements</li>
                  <li>• Professional development opportunities</li>
                  <li>• Collaborative team atmosphere</li>
                  <li>• Recognition and reward programs</li>
                  <li>• Health and wellness initiatives</li>
                </ul>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Team Members</h4>
                <p className="text-gray-600">Dedicated professionals across all departments</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Employee Retention</h4>
                <p className="text-gray-600">High satisfaction and long-term commitment</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">40+</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h4>
                <p className="text-gray-600">Professional credentials across the team</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                What Makes ClaimsMD Unique
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Discover the distinctive qualities that set us apart in the medical billing industry
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">🎯</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Healthcare-First Approach</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded by healthcare professionals, we understand the unique challenges of medical 
                  practice management. Our solutions are built specifically for healthcare providers, 
                  not adapted from other industries.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Proprietary Technology</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our custom-built billing platform combines AI-powered automation with human expertise, 
                  delivering faster processing, higher accuracy, and better results than off-the-shelf solutions.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Partnership</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We don't just process claims - we become an extension of your practice. Every client 
                  gets a dedicated account manager and direct access to our expert team.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Transparent Reporting</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Real-time dashboards and comprehensive reporting give you complete visibility into 
                  your billing performance, revenue cycle, and financial health.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join the ClaimsMD Family
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the difference that comes from working with a team that truly understands 
              healthcare and is committed to your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
