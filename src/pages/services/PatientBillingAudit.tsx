
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import SMD from '../../Assets/Smiling Male Doctor Portrait.jpeg';

const PatientBillingAudit = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Patient Billing Audit"
        description="Detailed review of patient billing processes to identify improvement opportunities and ensure compliance."
        image={SMD}
        features={[
          "Patient statement analysis",
          "Payment plan evaluation",
          "Collection process review",
          "Patient communication assessment",
          "Financial policy review",
          "Self-pay workflow optimization",
          "Payment technology evaluation"
        ]}
        benefits={[
          "Improve patient satisfaction with billing processes",
          "Increase patient collection rates",
          "Streamline patient payment workflows",
          "Enhance clarity of patient financial communications",
          "Identify opportunities for patient billing automation",
          "Ensure compliance with patient billing regulations"
        ]}
        faqs={[
          {
            question: "What makes patient billing different from insurance billing?",
            answer: "Patient billing involves unique challenges including consumer payment expectations, varied financial circumstances, and the need for clear, compassionate communication while maintaining effective collection practices."
          },
          {
            question: "How can we improve our patient collection rate?",
            answer: "We identify opportunities for improvement through point-of-service collections, clear financial communications, convenient payment options, and strategic follow-up processes tailored to your patient population."
          }
        ]}
      />
    </Layout>
  );
};

export default PatientBillingAudit;
