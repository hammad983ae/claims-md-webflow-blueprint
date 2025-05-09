
import Layout from '@/components/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-16">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-lg text-white/90">
              The terms and conditions governing the use of ClaimsMD services.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <h2>Terms and Conditions</h2>
              <p>Last Updated: May 1, 2025</p>

              <h3>Agreement to Terms</h3>
              <p>
                By accessing or using the ClaimsMD website and services, you agree to be bound by these Terms and Conditions.
                If you disagree with any part of the terms, you may not access our services.
              </p>

              <h3>Services</h3>
              <p>
                ClaimsMD provides medical billing and revenue cycle management services to healthcare providers.
                Our services are subject to separate service agreements with individual clients. These Terms and Conditions
                govern your use of our website and general interaction with our company.
              </p>

              <h3>Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials on ClaimsMD's website for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose;</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server;</li>
                <li>Remove any copyright or other proprietary notations from the materials;</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by
                ClaimsMD at any time.
              </p>

              <h3>Disclaimer</h3>
              <p>
                The materials on ClaimsMD's website are provided on an 'as is' basis. ClaimsMD makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties
                or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
                or other violation of rights.
              </p>

              <h3>Limitations</h3>
              <p>
                In no event shall ClaimsMD or its suppliers be liable for any damages (including, without limitation, damages for
                loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials
                on ClaimsMD's website, even if ClaimsMD or a ClaimsMD authorized representative has been notified orally or in writing
                of the possibility of such damage.
              </p>

              <h3>Accuracy of Materials</h3>
              <p>
                The materials appearing on ClaimsMD's website could include technical, typographical, or photographic errors.
                ClaimsMD does not warrant that any of the materials on its website are accurate, complete or current. ClaimsMD may
                make changes to the materials contained on its website at any time without notice.
              </p>

              <h3>Links</h3>
              <p>
                ClaimsMD has not reviewed all of the sites linked to its website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply endorsement by ClaimsMD of the site. Use of any such linked
                website is at the user's own risk.
              </p>

              <h3>Modifications</h3>
              <p>
                ClaimsMD may revise these terms of service for its website at any time without notice. By using this website you
                are agreeing to be bound by the then current version of these terms of service.
              </p>

              <h3>Governing Law</h3>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you
                irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>

              <h3>Contact Information</h3>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <p>
                ClaimsMD<br />
                Email: legal@claimsmd.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
