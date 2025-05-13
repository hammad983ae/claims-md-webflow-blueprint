import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, BarChart2, Clock, Shield, Users, ArrowRight } from 'lucide-react';
import { motion } from '@/components/ui/motion';

const WhyClaimsMD = () => {
  return (
    <Layout>
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-claimsBlue/90 to-indigo-900/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose ClaimsMD</h1>
            <p className="text-lg text-white/90">
              In an industry where accuracy, efficiency, and compliance are critical, 
              ClaimsMD stands out as a trusted partner for healthcare providers.
            </p>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Main Content with Staggered Animation */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Why ClaimsMD is the Right Choice for Your Practice</h2>
            <p className="text-gray-700">
              In an industry where accuracy, efficiency, and compliance are critical, ClaimsMD stands out 
              as a trusted partner. Here's why healthcare providers across the country choose us.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {/* Reason 1 */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <motion.div 
                  className="bg-gradient-to-br from-claimsBlue to-indigo-800 p-1 rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="bg-white p-8 rounded-lg">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-claimsBlue/10 text-claimsBlue mb-6">
                      <BarChart2 size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-claimsBlue mb-4">Maximize Your Revenue</h3>
                    <p className="text-gray-600 mb-6">
                      Medical billing errors, claim denials, and delayed submissions can significantly 
                      impact your practice's bottom line. Our team of certified billing experts ensures:
                    </p>
                    <ul className="space-y-3">
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Accurate coding and timely claims submission</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Proactive denial management and appeals to recover lost revenue</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Streamlined payment posting and reconciliation processes</span>
                      </motion.li>
                    </ul>
                    <p className="mt-6 text-gray-700 italic">
                      With ClaimsMD, you can expect faster reimbursements and improved cash flow.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className="order-1 md:order-2">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600" 
                    alt="Revenue growth" 
                    className="rounded-lg shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-claimsBlue/30 to-transparent rounded-lg"></div>
                </motion.div>
              </div>
            </div>
            
            {/* Reason 2 - repeat similar structure with animations */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600" 
                    alt="Reducing administrative burden" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-claimsOrange/30 to-transparent rounded-lg"></div>
                </motion.div>
              </div>
              <div>
                <motion.div 
                  className="bg-gradient-to-br from-claimsOrange to-orange-600 p-1 rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="bg-white p-8 rounded-lg">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-claimsOrange/10 text-claimsOrange mb-6">
                      <Clock size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-claimsOrange mb-4">Reduce Administrative Burden</h3>
                    <p className="text-gray-600 mb-6">
                      Managing medical billing in-house can be time-consuming and resource-intensive. 
                      By partnering with us, you can:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Free up your staff to focus on patient care and practice growth</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Eliminate the need for costly billing software and ongoing staff training</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Enjoy peace of mind knowing your billing is handled by experts</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Reason 3 - repeat similar structure with animations */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <motion.div 
                  className="bg-gradient-to-br from-claimsBlue to-indigo-800 p-1 rounded-lg shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <div className="bg-white p-8 rounded-lg">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-claimsBlue/10 text-claimsBlue mb-6">
                      <Shield size={30} />
                    </div>
                    <h3 className="text-2xl font-bold text-claimsBlue mb-4">Stay Compliant with Industry Regulations</h3>
                    <p className="text-gray-600 mb-6">
                      Healthcare regulations are constantly changing, and non-compliance can result in 
                      costly penalties and audits. ClaimsMD ensures your practice stays compliant by:
                    </p>
                    <ul className="space-y-3">
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Keeping up-to-date with the latest coding standards (ICD-10, CPT, HCPCS)</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Conducting regular compliance audits to identify and address potential risks</span>
                      </motion.li>
                      <motion.li 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                        <span>Providing ongoing training and support to keep your practice informed</span>
                      </motion.li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              <div className="order-1 md:order-2">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1561606858-28a93c095fbb?auto=format&fit=crop&q=80&w=1600" 
                    alt="Healthcare compliance" 
                    className="rounded-lg shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-claimsBlue/30 to-transparent rounded-lg"></div>
                </motion.div>
              </div>
            </div>
            
            {/* Reason 4-5 - repeat similar structure with animations */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-claimsBlue hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-claimsBlue/10 text-claimsBlue mb-6">
                    <BarChart2 size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-claimsBlue mb-4">Transparent Reporting and Analytics</h3>
                  <p className="text-gray-600 mb-6">
                    Knowledge is power. With ClaimsMD, you'll have access to:
                  </p>
                  <ul className="space-y-3">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Real-time, customizable reports that provide insights into your practice's financial performance</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Detailed analytics on claim submissions, denials, and reimbursements</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsOrange mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Actionable recommendations to optimize your revenue cycle</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-claimsOrange hover:shadow-2xl transition-shadow duration-300 h-full">
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-claimsOrange/10 text-claimsOrange mb-6">
                    <Users size={30} />
                  </div>
                  <h3 className="text-2xl font-bold text-claimsOrange mb-4">Personalized Service and Support</h3>
                  <p className="text-gray-600 mb-6">
                    We believe every practice is unique, which is why we take the time to understand 
                    your specific needs and goals. Our dedicated account managers work closely with you to:
                  </p>
                  <ul className="space-y-3">
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Develop a tailored billing strategy that aligns with your practice's objectives</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Provide ongoing support and guidance to ensure your success</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <CheckCircle className="text-claimsBlue mr-3 flex-shrink-0 mt-1" size={20} />
                      <span>Offer scalable solutions that grow with your practice</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with Animation */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#fff"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Billing Process?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Partner with ClaimsMD and experience the difference our personalized approach can make for your practice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100 transform transition-all duration-300" asChild>
                  <Link to="/contact">
                    Schedule a Free Consultation
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 transform transition-all duration-300" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyClaimsMD;
