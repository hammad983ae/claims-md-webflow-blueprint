
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import HC from '../../Assets/Healthcare Consultation.jpeg';

const CredentialingEnrollment = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Credentialing & Enrollment"
        description="Streamlined provider credentialing and insurance enrollment to ensure proper reimbursement."
        image= {HC}
        features={[
          "Provider enrollment with government and commercial payers",
          "CAQH ProView profile management",
          "Primary source verification",
          "License and certification tracking",
          "Revalidation and re-credentialing services",
          "Facility credentialing",
          "Medicare/Medicaid enrollment"
        ]}
        benefits={[
          "Minimize enrollment delays and credentialing gaps",
          "Ensure compliance with payer requirements",
          "Reduce administrative burden on providers and staff",
          "Prevent reimbursement disruptions",
          "Stay current with changing credentialing requirements",
          "Maintain accurate provider data across all platforms"
        ]}
        faqs={[
          {
            question: "How long does the credentialing process typically take?",
            answer: "The full credentialing process typically takes 60-120 days depending on the payer, though we work to expedite whenever possible."
          },
          {
            question: "Do you handle CAQH attestations?",
            answer: "Yes, we manage all aspects of CAQH profiles including initial setup, quarterly attestations, and document updates."
          }
        ]}
      />
    </Layout>
  );
};

export default CredentialingEnrollment;
