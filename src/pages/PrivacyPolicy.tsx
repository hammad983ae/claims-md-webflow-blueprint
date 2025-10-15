import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout metaPage="privacyPolicy">
      {/* Hero Section */}
      <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-white/90">
              Your data is your business. Keeping it safe is ours.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Main Policy Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-8">

            <section>
              <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
              <p>
                We value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.
                By using ClaimsMD, you're agreeing to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">What We Collect</h2>

              <h3 className="text-xl font-medium mt-4">1. Personal Information</h3>
              <ul className="list-disc pl-6">
                <li>Name, email, phone number</li>
                <li>Practice details (name, specialty, location)</li>
                <li>Payment info (securely processed)</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">2. Non-Personal Information</h3>
              <ul className="list-disc pl-6">
                <li>Browser, device, IP address</li>
                <li>Website interactions and usage data</li>
              </ul>

              <h3 className="text-xl font-medium mt-4">3. From Third Parties</h3>
              <ul className="list-disc pl-6">
                <li>Analytics and business insights from partners</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">How We Use Your Data</h2>
              <ul className="list-disc pl-6">
                <li>Deliver and enhance our billing services</li>
                <li>Respond to questions and support needs</li>
                <li>Process secure payments and manage billing</li>
                <li>Tailor your experience with personalized content</li>
                <li>Analyze traffic to improve performance</li>
                <li>Comply with laws and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Security Measures</h2>
              <p>We don’t mess around when it comes to protecting your info. Here’s how:</p>
              <ul className="list-disc pl-6">
                <li><strong>Encryption:</strong> Both in transit and at rest</li>
                <li><strong>Access Controls:</strong> Limited to trained, authorized staff</li>
                <li><strong>Audits:</strong> Regular checks to spot vulnerabilities</li>
                <li><strong>Training:</strong> Our team knows the drill</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Sharing Information</h2>
              <p>We don’t sell or rent your data — ever. But we may share it:</p>
              <ul className="list-disc pl-6">
                <li>With trusted partners (like payment gateways or IT support)</li>
                <li>To comply with legal or regulatory obligations</li>
                <li>To protect ClaimsMD and its users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
              <p>You can:</p>
              <ul className="list-disc pl-6">
                <li>Access, update, or correct your info</li>
                <li>Request deletion (subject to legal requirements)</li>
                <li>Opt out of marketing</li>
                <li>Object to or restrict how we use your data</li>
              </ul>
              <p>Just shoot us an email using the contact info below to make it happen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Cookies & Tracking</h2>
              <p>
                We use cookies to remember preferences, understand usage patterns, and improve performance.
                You can manage cookie settings anytime through your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Third-Party Links</h2>
              <p>
                Our site may link to other websites. We’re not responsible for their content or privacy policies.
                Be sure to review their terms before sharing your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Policy Updates</h2>
              <p>
                We may update this policy occasionally. When we do, we’ll post the latest version here — and update the “Last Updated” date at the top.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p>
                Got questions? Reach out:
              </p>
              <p>
                <strong>ClaimsMD</strong><br />
                Email: <a href="mailto:privacy@claimsmd.com" className="text-blue-600 underline">privacy@claimsmd.com</a><br />
                Phone: (555) 123-4567
              </p>
            </section>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
