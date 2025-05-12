import Layout from '@/components/Layout';

const TermsConditions = () => {
  return (
    <Layout>
      {/* Header Section */}
      <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-lg text-white/90">
              Please review the guidelines for using ClaimsMD’s billing and RCM services.
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
              <h2>Welcome to ClaimsMD</h2>
              <p>
                These Terms & Conditions outline how you can use our medical billing and revenue cycle management services.
                By using our services, you're agreeing to play by these rules.
              </p>

              <h3>1. Acceptance of Terms</h3>
              <p>
                When you use ClaimsMD, you confirm that you've read and accepted these terms. If you don't agree with any part of them,
                please refrain from using our services.
              </p>

              <h3>2. Services We Offer</h3>
              <p>We provide medical billing and revenue cycle management services, including:</p>
              <ul>
                <li>Claims submission & follow-up</li>
                <li>Denial management & appeals</li>
                <li>Patient billing & collections</li>
                <li>Credentialing & enrollment</li>
                <li>Compliance audits & consulting</li>
              </ul>
              <p>Our goal is to help you boost revenue and streamline operations.</p>

              <h3>3. Your Responsibilities</h3>
              <p>To ensure smooth service delivery, you agree to:</p>
              <ul>
                <li>Share accurate and complete information</li>
                <li>Notify us about practice changes (like new providers or insurance updates)</li>
                <li>Follow all relevant laws and payer rules</li>
                <li>Pay fees promptly as agreed</li>
              </ul>

              <h3>4. Fees & Payments</h3>
              <ul>
                <li><strong>Service Fees:</strong> Outlined in your agreement — these may vary based on services used</li>
                <li><strong>Payment Terms:</strong> Due as specified; late fees may apply</li>
                <li><strong>Refunds:</strong> Only for billing errors or service discrepancies (see our Refund Policy)</li>
              </ul>

              <h3>5. Confidentiality & Data Security</h3>
              <p>We’re serious about protecting your data. Here's how:</p>
              <ul>
                <li>We follow HIPAA and other data privacy laws</li>
                <li>We use industry-standard security measures</li>
                <li>Your data is only used to deliver our services</li>
              </ul>

              <h3>6. Limitation of Liability</h3>
              <p>
                We’re not liable for indirect or incidental damages (like lost profits or downtime). Our liability is limited to the
                total fees you’ve paid for services related to the issue.
              </p>

              <h3>7. Termination</h3>
              <p>Either party can end the agreement with 30 days’ written notice. Upon termination:</p>
              <ul>
                <li>You remain responsible for fees up to that point</li>
                <li>We’ll assist with transitioning services if requested</li>
              </ul>

              <h3>8. Changes to These Terms</h3>
              <p>
                We may update these Terms & Conditions at any time. We’ll post changes here, and by continuing to use our services,
                you’re agreeing to the new terms.
              </p>

              <h3>9. Governing Law</h3>
              <p>
                These terms are governed by the laws of [Your State/Country]. Any legal disputes will be handled in the courts
                of [Your State/Country].
              </p>

              <h3>10. Contact Us</h3>
              <p>
                Questions? Concerns? Let’s talk.
              </p>
              <p>
                <strong>Phone:</strong> [Your Phone Number] <br />
                <strong>Email:</strong> [Your Email Address] <br />
                <strong>Address:</strong> [Your Office Address]
              </p>

              <p><strong>Thanks for choosing ClaimsMD!</strong><br />We’re glad to be part of your practice’s journey.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsConditions;
