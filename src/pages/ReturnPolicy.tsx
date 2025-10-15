import React from 'react';
import Layout from '../components/Layout';

const ReturnPolicy: React.FC = () => {
  return (
    <Layout metaPage="returnPolicy">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Return Policy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to transparency and customer satisfaction in all our medical billing services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Service Refund & Adjustment Policy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At ClaimsMD, we are committed to providing exceptional medical billing services. We understand that 
                situations may arise where service adjustments or refunds are necessary. This policy outlines our 
                approach to handling such requests with fairness and transparency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our goal is to ensure complete satisfaction with our services while maintaining the highest standards 
                of professional medical billing practices.
              </p>
            </div>

            {/* Refund Eligibility Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Refund Eligibility
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Service Errors:</strong> Refunds are provided for services that fail to meet our 
                    quality standards or contain processing errors on our part.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Billing Discrepancies:</strong> Adjustments for incorrect billing amounts, 
                    duplicate charges, or processing errors.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Service Cancellation:</strong> Pro-rated refunds for services cancelled before 
                    completion, subject to terms.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Performance Issues:</strong> Refunds for services that fail to meet guaranteed 
                    performance metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Process Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Refund Process
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Request Submission</h4>
                  <p className="text-gray-600">
                    Submit a detailed refund request through our customer service portal or by contacting 
                    our support team directly.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Review & Investigation</h4>
                  <p className="text-gray-600">
                    Our team will review your request and investigate the circumstances within 3-5 business days.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Resolution</h4>
                  <p className="text-gray-600">
                    Upon approval, refunds are processed within 5-10 business days to your original payment method.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeframes Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Refund Timeframes
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Standard Refunds</h4>
                  <p className="text-blue-700">5-10 business days</p>
                  <p className="text-sm text-blue-600 mt-2">
                    For approved refund requests with complete documentation
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Expedited Refunds</h4>
                  <p className="text-green-700">2-3 business days</p>
                  <p className="text-sm text-green-600 mt-2">
                    For urgent cases or premium service clients
                  </p>
                </div>
              </div>
            </div>

            {/* Dispute Resolution Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Dispute Resolution
              </h3>
              <p className="text-gray-600 mb-6">
                If you disagree with our refund decision, we offer a formal dispute resolution process:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Internal Review:</strong> Escalation to senior management for reconsideration
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Mediation:</strong> Third-party mediation services for complex disputes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Documentation:</strong> Comprehensive review of all relevant documentation and communications
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Us
              </h3>
              <p className="text-gray-600 mb-6">
                For questions about our return policy or to submit a refund request:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Service</h4>
                  <p className="text-gray-600">Email: support@claims-md.com</p>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Hours: Mon-Fri 8AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Refund Requests</h4>
                  <p className="text-gray-600">Portal: claims-md.com/refunds</p>
                  <p className="text-gray-600">Response Time: 24-48 hours</p>
                  <p className="text-gray-600">Status Updates: Real-time tracking</p>
                </div>
              </div>
            </div>

            {/* Policy Updates Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Policy Updates
              </h3>
              <p className="text-gray-600 mb-4">
                This return policy may be updated periodically to reflect changes in our services or business practices. 
                We will notify all clients of any material changes at least 30 days in advance.
              </p>
              <p className="text-gray-600">
                <strong>Last Updated:</strong> December 2024
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ReturnPolicy;
