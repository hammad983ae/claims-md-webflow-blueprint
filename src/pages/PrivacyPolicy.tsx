
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-16">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">
              How ClaimsMD collects, uses, and protects your information.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Policy Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <h2>Privacy Policy for ClaimsMD</h2>
              <p>Last Updated: May 1, 2025</p>

              <p>
                At ClaimsMD, we respect your privacy and are committed to protecting your personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website and use our services.
              </p>

              <h3>Information We Collect</h3>
              <p>
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul>
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company information that you voluntarily provide when requesting information or services.</li>
                <li><strong>Usage Data:</strong> Information automatically collected when visiting our website, such as IP address, browser type, referring/exit pages, and operating system.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> Data collected through cookies, web beacons, and other tracking technologies to analyze website trends and user behavior.</li>
              </ul>

              <h3>How We Use Your Information</h3>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Responding to your inquiries and service requests</li>
                <li>Sending you administrative information and communications</li>
                <li>Marketing our services to you (with your consent where required by law)</li>
                <li>Analyzing website usage to enhance user experience</li>
                <li>Protecting our rights and the safety of our users</li>
              </ul>

              <h3>Disclosure of Your Information</h3>
              <p>
                We may share your information in the following situations:
              </p>
              <ul>
                <li><strong>Business Partners:</strong> With trusted third parties who assist us in operating our website and providing services.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, safety, or the rights and safety of others.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>

              <h3>Data Security</h3>
              <p>
                We implement appropriate security measures to protect your information from unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or
                electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h3>Your Privacy Rights</h3>
              <p>
                Depending on your location, you may have rights regarding your personal information, such as:
              </p>
              <ul>
                <li>Right to access and receive a copy of your personal information</li>
                <li>Right to rectify or update inaccurate information</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to restrict or object to our processing of your information</li>
                <li>Right to data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>

              <h3>Children's Privacy</h3>
              <p>
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13.
              </p>

              <h3>Changes to This Privacy Policy</h3>
              <p>
                We may update our Privacy Policy from time to time. Any changes will be posted on this page with an
                updated revision date.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                ClaimsMD<br />
                Email: privacy@claimsmd.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
