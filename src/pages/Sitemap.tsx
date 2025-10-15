
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Sitemap = () => {
  const sitemapData = [
    {
      section: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Specialties', path: '/specialties' },
        { name: 'Blog', path: '/blog' },
        { name: 'About Us', path: '/about' },
        { name: 'Message from CEO', path: '/message-from-ceo' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      section: 'Services',
      links: [
        { name: 'Medical Billing Audit', path: '/services/medical-billing-audit' },
        { name: 'Medical Billing Services', path: '/services/medical-billing-services' },
        { name: 'Patient Eligibility Verification', path: '/services/patient-eligibility-verification' },
        { name: 'Denial Management', path: '/services/denial-management' },
        { name: 'Account Receivable Management', path: '/services/account-receivable-management' },
        { name: 'Credentialing & Enrollment', path: '/services/credentialing-enrollment' },
        { name: 'New Practice Setup', path: '/services/new-practice-setup' },
        { name: 'Reputation Management', path: '/services/reputation-management' },
        { name: 'Value Added Services', path: '/services/value-added-services' },
        { name: 'Revenue Cycle Management', path: '/services/revenue-cycle-management' },
        { name: 'A/R Management Services', path: '/services/ar-management-services' },
        { name: 'Patient Billing Audit', path: '/services/patient-billing-audit' },
        { name: 'Billing Review Services', path: '/services/billing-review-services' },
        { name: 'Healthcare Digital Marketing', path: '/services/healthcare-digital-marketing' },
      ]
    },
    {
      section: 'Legal & Company',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Return Policy', path: '/return-policy' },
        { name: 'Quality Policy', path: '/quality-policy' },
        { name: 'Terms & Conditions', path: '/terms-conditions' },
        { name: 'Why Claims MD', path: '/why-claims-md' },
        { name: 'Who We Are', path: '/who-we-are' },
      ]
    }
  ];

  return (
    <Layout metaPage="sitemap">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-16">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Sitemap</h1>
            <p className="text-lg text-white/90">
              Find everything on our website with this complete sitemap.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapData.map((group, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-claimsBlue mb-6 pb-2 border-b border-gray-200">{group.section}</h2>
                <ul className="space-y-3">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:translate-x-1 transition-transform">
                      <Link 
                        to={link.path} 
                        className="flex items-center text-gray-700 hover:text-claimsBlue transition-colors"
                      >
                        <ArrowRight size={16} className="mr-2 text-claimsBlue" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
