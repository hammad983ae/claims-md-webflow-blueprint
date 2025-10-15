import React from 'react';
import Layout from '../components/Layout';

const QualityPolicy: React.FC = () => {
  return (
    <Layout metaPage="qualityPolicy">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality Policy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to excellence, accuracy, and continuous improvement in medical billing services
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
                Quality Assurance Commitment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At ClaimsMD, quality is the foundation of everything we do. Our comprehensive quality policy 
                ensures that every medical billing service we provide meets the highest standards of accuracy, 
                compliance, and efficiency.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We are committed to continuous improvement, rigorous quality control processes, and maintaining 
                the trust of healthcare providers and patients through exceptional service delivery.
              </p>
            </div>

            {/* Quality Standards Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Quality Standards
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Accuracy Standards</h4>
                  <p className="text-gray-600">
                    We maintain a 99.5% accuracy rate in claim submissions, ensuring proper coding, 
                    documentation, and billing information for maximum reimbursement.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Compliance Requirements</h4>
                  <p className="text-gray-600">
                    Full adherence to HIPAA regulations, CMS guidelines, and industry best practices 
                    to protect patient privacy and ensure regulatory compliance.
                  </p>
                </div>
                <div className="border-l-4 border-purple-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Timeliness Standards</h4>
                  <p className="text-gray-600">
                    Claims submitted within 24-48 hours of service completion, with real-time tracking 
                    and status updates throughout the billing cycle.
                  </p>
                </div>
                <div className="border-l-4 border-orange-600 pl-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Customer Satisfaction</h4>
                  <p className="text-gray-600">
                    Maintaining a 98% customer satisfaction rate through responsive communication, 
                    transparent processes, and proactive problem resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Control Processes Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Quality Control Processes
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Multi-Level Review System</h4>
                  <p className="text-blue-700">
                    Every claim undergoes three levels of review: initial processing, quality assurance, 
                    and final verification before submission.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Automated Validation</h4>
                  <p className="text-green-700">
                    Advanced software systems automatically validate claim data, coding accuracy, 
                    and compliance requirements in real-time.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 mb-2">Expert Team Oversight</h4>
                  <p className="text-purple-700">
                    Certified medical coders and billing specialists with extensive experience 
                    review and approve all claims before submission.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-orange-800 mb-2">Continuous Monitoring</h4>
                  <p className="text-orange-700">
                    Real-time dashboards and reporting systems monitor performance metrics, 
                    error rates, and quality indicators.
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Improvement Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Continuous Improvement
              </h3>
              <p className="text-gray-600 mb-6">
                Our commitment to quality extends beyond current standards to ongoing enhancement:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Regular Training:</strong> Monthly training sessions for all staff on latest 
                    coding updates, compliance changes, and industry best practices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Technology Updates:</strong> Continuous investment in cutting-edge billing 
                    software and automation tools to improve efficiency and accuracy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Feedback Integration:</strong> Client feedback and performance data analysis 
                    drive process improvements and service enhancements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">
                    <strong>Industry Benchmarking:</strong> Regular comparison with industry standards 
                    and competitor performance to identify improvement opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Measures Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Compliance & Regulatory Measures
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">HIPAA Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Secure data transmission and storage</li>
                    <li>• Employee confidentiality agreements</li>
                    <li>• Regular security audits and assessments</li>
                    <li>• Incident response protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">CMS Guidelines</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Current Procedural Terminology (CPT) compliance</li>
                    <li>• International Classification of Diseases (ICD) accuracy</li>
                    <li>• Medicare and Medicaid billing requirements</li>
                    <li>• Documentation standards adherence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Metrics Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Performance Metrics & Monitoring
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-800 mb-2">99.5%</div>
                  <p className="text-blue-700 font-semibold">Claim Accuracy Rate</p>
                  <p className="text-sm text-blue-600 mt-2">Industry benchmark: 95%</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-3xl font-bold text-green-800 mb-2">24-48h</div>
                  <p className="text-green-700 font-semibold">Claim Submission Time</p>
                  <p className="text-sm text-green-600 mt-2">Industry average: 72h</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-3xl font-bold text-purple-800 mb-2">98%</div>
                  <p className="text-purple-700 font-semibold">Customer Satisfaction</p>
                  <p className="text-sm text-purple-600 mt-2">Industry average: 85%</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="text-3xl font-bold text-orange-800 mb-2">99.9%</div>
                  <p className="text-orange-700 font-semibold">Uptime & Reliability</p>
                  <p className="text-sm text-orange-600 mt-2">Industry standard: 99.5%</p>
                </div>
              </div>
            </div>

            {/* Quality Certifications Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Quality Certifications & Accreditations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">HIPAA Compliance Certified</h4>
                    <p className="text-gray-600">Annual certification for data security and privacy protection</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">AAPC Member Organization</h4>
                    <p className="text-gray-600">Professional medical coding and billing association membership</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600">International quality management system certification</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Quality Assurance Contact
              </h3>
              <p className="text-gray-600 mb-6">
                For questions about our quality policy or to report quality concerns:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Quality Assurance Team</h4>
                  <p className="text-gray-600">Email: quality@claims-md.com</p>
                  <p className="text-gray-600">Phone: (555) 123-4567 ext. 2</p>
                  <p className="text-gray-600">Hours: Mon-Fri 8AM-6PM EST</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Compliance Officer</h4>
                  <p className="text-gray-600">Email: compliance@claims-md.com</p>
                  <p className="text-gray-600">Phone: (555) 123-4567 ext. 3</p>
                  <p className="text-gray-600">Direct Line: (555) 123-4568</p>
                </div>
              </div>
            </div>

            {/* Policy Updates Card */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Policy Updates
              </h3>
              <p className="text-gray-600 mb-4">
                This quality policy is reviewed annually and updated as needed to reflect changes in 
                industry standards, regulatory requirements, and our commitment to excellence.
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

export default QualityPolicy;
