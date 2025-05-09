
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const MedicalBillingServices = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Medical Billing Services"
        description="End-to-end medical billing solutions designed to maximize reimbursements and streamline your revenue cycle management."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
        features={[
          "Complete claims submission and processing",
          "Insurance eligibility verification",
          "Coding review and validation",
          "Payment posting and reconciliation",
          "Denial management and appeals",
          "Patient billing and collections",
          "Detailed reporting and analytics dashboard"
        ]}
        benefits={[
          "Reduce administrative burden on your staff",
          "Accelerate cash flow with faster claims processing",
          "Increase revenue through improved claim accuracy",
          "Decrease claim denials and rejections",
          "Transparent reporting on all billing activities",
          "Stay current with ever-changing billing regulations"
        ]}
        faqs={[
          {
            question: "Can you work with our existing EHR/PM system?",
            answer: "Yes, our team is experienced with all major Electronic Health Record and Practice Management systems, and we can integrate seamlessly with your existing workflow."
          },
          {
            question: "How quickly can we expect to see improvements?",
            answer: "Most clients see initial improvements within 30-60 days, with significant enhancements to revenue cycle performance within 90 days of implementation."
          },
          {
            question: "What is your clean claims submission rate?",
            answer: "Our average clean claims submission rate exceeds 98%, which is significantly higher than the industry average of 75-85%."
          }
        ]}
      />
    </Layout>
  );
};

export default MedicalBillingServices;
