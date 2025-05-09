
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const NewPracticeSetup = () => {
  return (
    <Layout>
      <ServiceDetail
        title="New Practice Setup"
        description="Complete support for new medical practices, from EHR selection to billing setup and staff training."
        features={[
          "EHR and practice management system selection assistance",
          "Workflow design and optimization",
          "Staff training and education",
          "Payer enrollment and contracting",
          "Compliance program setup",
          "Fee schedule development",
          "Financial policy creation"
        ]}
        benefits={[
          "Launch your practice efficiently with minimal delays",
          "Implement best practices from day one",
          "Avoid common startup billing pitfalls",
          "Maximize revenue potential from the beginning",
          "Ensure regulatory compliance from the start",
          "Build scalable processes for future growth"
        ]}
        faqs={[
          {
            question: "How far in advance should we engage your services before opening?",
            answer: "Ideally, we recommend engaging our services 3-6 months before your planned opening date to ensure adequate time for credentialing, system setup, and training."
          },
          {
            question: "Can you assist with location selection and office setup?",
            answer: "While our primary focus is on the operational and billing aspects, we do provide consulting on location factors that impact billing and reimbursement."
          }
        ]}
      />
    </Layout>
  );
};

export default NewPracticeSetup;
